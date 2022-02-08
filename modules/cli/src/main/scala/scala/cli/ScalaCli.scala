package scala.cli

import sun.misc.{Signal, SignalHandler}

import java.io.{ByteArrayOutputStream, File, PrintStream}
import java.nio.charset.StandardCharsets

import scala.build.internal.Constants
import scala.cli.internal.Argv0
import scala.cli.launcher.{CliLauncher, CliLauncherOptions}
import scala.util.Properties

/** containes the main method
  */
object ScalaCli {

  val progName = (new Argv0).get("scala-cli")

  /** represents whether $1 ??? is scala
    */
  private var isSipScala =
    progName == "scala" ||
    progName.endsWith("/scala") ||
    progName.endsWith(File.separator + "scala")

  private def isGraalvmNativeImage: Boolean =
    sys.props.contains("org.graalvm.nativeimage.imagecode")

  /** renamed from [[main0]] to [[launchScalaCli]]
    *
    * @param args
    * arguments passed to the scala-cli command
    */
  private def launchScalaCli(args: Array[String]): Unit = {
    val remainingArgs =
      CliLauncherOptions.parser.stopAtFirstUnrecognized.parse(args) match { // remaining args of $1??
        case Left(e) =>
          System.err.println(e.message)
          sys.exit(1)
        case Right((
          launcherOpts,
          postDoubleDashCmdLineArgs
          )) => // the launcherOpts are arguments before `--` in the command line
          launcherOpts.cliVersion.map(_.trim).filter(_.nonEmpty) match {
            case Some(cliVersion) =>
              val powerArgs =
                if (launcherOpts.power) Seq("--power")
                else Nil
              val powArgsPlusPostDoubleDashArgs = powerArgs ++ postDoubleDashCmdLineArgs
              CliLauncher.runAndExit(cliVersion, launcherOpts, powArgsPlusPostDoubleDashArgs)
            case None =>
              if (launcherOpts.power)
                isSipScala = false
              postDoubleDashCmdLineArgs.toArray
          }
      }
    val (systemProps, scalaCliArgs) = partitionArgsToSysPropsAndCliArgs(remainingArgs)
    setSystemProps(systemProps)

    // Getting killed by SIGPIPE quite often when on musl (in the "static" native
    // image), but also sometimes on glibc, or even on macOS, when we use domain
    // sockets to exchange with Bloop. So let's just ignore those (which should
    // just make some read / write calls return -1).
    if (!Properties.isWin && isGraalvmNativeImage)
      ignoreSigpipe()

    if (Properties.isWin && isGraalvmNativeImage)
    // The DLL loaded by LoadWindowsLibrary is statically linked in
    // the Scala CLI native image, no need to manually load it.
      coursier.jniutils.LoadWindowsLibrary.assumeInitialized()

    if (Properties.isWin && System.console() != null && coursier.paths.Util.useJni())
    // Enable ANSI output in Windows terminal
      coursier.jniutils.WindowsAnsiTerminal.enableAnsiOutput()

    new ScalaCliCommands(progName, isSipScala)
      .main(scalaCliArgs)
  }

  private def setSystemProps(systemProps: Array[String]): Unit = {
    systemProps.map(_.stripPrefix("-D")).foreach { prop =>
      prop.split("=", 2) match {
        case Array(key, value) =>
          System.setProperty(key, value)
        case Array(key) =>
          System.setProperty(key, "")
      }
    }
  }

  private def printThrowable(t: Throwable, out: PrintStream): Unit =
    if (t != null) {
      out.println(t.toString)
      // FIXME Print t.getSuppressed too?
      for (l <- t.getStackTrace)
        out.println(s"  $l")
      printThrowable(t.getCause, out)
    }

  /** partitions the args Array to the systemProps, which come before the `-D` option and the args
    * after that
    *
    * @param args
    * @return
    * a tuple of (an array of system properties , the rest of args)
    */
  private def partitionArgsToSysPropsAndCliArgs(args: Array[String])
  : (Array[String], Array[String]) = {
    val systemProps = args.takeWhile(_.startsWith("-D"))
    (systemProps, args.drop(systemProps.size))
  }

  private def printThrowable(t: Throwable): Array[Byte] = {
    val baos = new ByteArrayOutputStream
    val ps = new PrintStream(baos, true, StandardCharsets.UTF_8.name())
    printThrowable(t, ps)
    baos.toByteArray
  }

  private def ignoreSigpipe(): Unit =
    Signal.handle(new Signal("PIPE"), SignalHandler.SIG_IGN)

  private def isJava17ClassName(name: String): Boolean =
    name == "java/net/UnixDomainSocketAddress"

  private lazy val javaMajorVersion =
    sys.props.getOrElse("java.version", "0")
      .stripSuffix("1.")
      .takeWhile(_.isDigit)
      .toInt

  def main(args: Array[String]): Unit = {
    try launchScalaCli(args)
    catch {
      case e: Throwable if !isCI =>
        val workspace = CurrentParams.workspaceOpt.getOrElse(os.pwd)
        val dir       = workspace / Constants.workspaceDirName / "stacktraces"
        os.makeDir.all(dir)
        import java.time.Instant

        val tempFile = os.temp(
          contents = printThrowable(e),
          dir = dir,
          prefix = Instant.now().getEpochSecond().toString() + "-",
          suffix = ".log",
          deleteOnExit = false
        )

        if (CurrentParams.verbosity <= 1) {
          System.err.println(s"Error: $e")
          System.err.println(s"For more details, please see '$tempFile'")
        }

        e match {
          case _: NoClassDefFoundError
              if isJava17ClassName(e.getMessage) &&
                CurrentParams.verbosity <= 1 &&
                javaMajorVersion < 16 =>
            // Actually Java >= 16, but let's recommend a LTS version…
            System.err.println(
              s"Java >= 17 is required to run Scala CLI (found Java $javaMajorVersion)"
            )
          case _ =>
        }

        if (CurrentParams.verbosity >= 2) throw e
        else sys.exit(1)
    }
  }

  /** CI represents $1 ??
    *
    * @return true if the CI environment variable is set
    */
  private def isCI = System.getenv("CI") != null
}
