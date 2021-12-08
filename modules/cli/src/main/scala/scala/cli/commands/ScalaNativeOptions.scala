package scala.cli.commands

import caseapp._
import upickle.default.{ReadWriter, macroRW}

import scala.build.options

// format: off
final case class ScalaNativeOptions(

  @Group("Scala")
  @HelpMessage("Enable Scala Native")
    native: Boolean = false,

  @Group("Scala Native")
  @HelpMessage("Set the Scala Native version")
    nativeVersion: Option[String] = None,
  @Group("Scala Native")
  @HelpMessage("Set Scala Native compilation mode")
    nativeMode: Option[String] = None,
  @Group("Scala Native")
  @HelpMessage("Set the Scala Native garbage collector")
    nativeGc: Option[String] = None,

  @Group("Scala Native")
  @HelpMessage("Path to the Clang command")
    nativeClang: Option[String] = None,
  @Group("Scala Native")
  @HelpMessage("Path to the Clang++ command")
    nativeClangpp: Option[String] = None,

  @Group("Scala Native")
  @HelpMessage("Extra options passed to `clang` verbatim during linking")
    nativeLinking: List[String] = Nil,
  @Group("Scala Native")
  @HelpMessage("Use default linking settings")
  @Hidden
    nativeLinkingDefaults: Option[Boolean] = None, //TODO does it even work when we default it to true while handling?

  @Group("Scala Native")
  @HelpMessage("List of compile options")
    nativeCompile: List[String] = Nil,

  @Group("Scala Native")
  @Hidden
  @HelpMessage("Use default compile options")
    nativeCompileDefaults: Option[Boolean] = None //TODO does it even work when we default it to true while handling?

) {
  // format: on

  def buildOptions: options.ScalaNativeOptions =
    options.ScalaNativeOptions(
      nativeVersion,
      nativeMode,
      nativeGc,
      nativeClang,
      nativeClangpp,
      nativeLinking,
      nativeLinkingDefaults,
      nativeCompile,
      nativeCompileDefaults
    )

}

object ScalaNativeOptions {
  lazy val parser: Parser[ScalaNativeOptions]                           = Parser.derive
  implicit lazy val parserAux: Parser.Aux[ScalaNativeOptions, parser.D] = parser
  implicit lazy val help: Help[ScalaNativeOptions]                      = Help.derive
  implicit lazy val jsonCodec: ReadWriter[ScalaNativeOptions]           = macroRW
}
