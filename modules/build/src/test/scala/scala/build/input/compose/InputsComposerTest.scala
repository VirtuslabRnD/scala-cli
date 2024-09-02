package scala.build.input.compose

import scala.build.Build
import scala.build.bsp.buildtargets.ProjectName
import scala.build.errors.BuildException
import scala.build.input.ModuleInputs
import scala.build.input.compose.InputsComposer
import scala.build.internal.Constants
import scala.build.options.BuildOptions
import scala.build.tests.{TestInputs, TestUtil}

class InputsComposerTest extends TestUtil.ScalaCliBuildSuite {

  test("read simple module config") {
    val configText =
      """[modules.webpage]
        |
        |[modules.core]
        |roots = ["Core.scala", "Utils.scala"]
        |""".stripMargin

    val parsedModules = {
      for {
        table   <- toml.Toml.parse(configText)
        modules <- InputsComposer.readAllModules(table.values.get(InputsComposer.Keys.modules))
      } yield modules
    }.toSeq.flatten

    assert(parsedModules.nonEmpty)

    assert(parsedModules.head.name == "webpage")
    val webpageModule = parsedModules.head
    assert(webpageModule.roots.toSet == Set("webpage"))

    val coreModule = parsedModules.last
    assert(coreModule.name == "core")
    assert(coreModule.roots.toSet == Set("Core.scala", "Utils.scala"))
  }
}
