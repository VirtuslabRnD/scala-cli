package scala.build.preprocessing.directives

import scala.build.EitherCps.{either, value}
import scala.build.Ops.*
import scala.build.Positioned
import scala.build.directives.*
import scala.build.errors.BuildException
import scala.build.options.{BuildRequirements, Scope}
import scala.build.preprocessing.directives.DirectiveUtil.given
import scala.cli.commands.SpecificationLevel
import scala.cli.directivehandler.*

@DirectiveGroupName("Scope")
@DirectivePrefix("target.")
@DirectiveDescription("Require a scope for the current file")
@DirectiveExamples("//> using target.scope test")
@DirectiveUsage(
  "//> using target.scope _scope_",
  "`//> using target.scope `_scope_"
)
@DirectiveLevel(SpecificationLevel.EXPERIMENTAL)
final case class RequireScope(
  scope: Option[Positioned[String]] = None
) extends HasBuildRequirements {
  def buildRequirements: Either[BuildException, BuildRequirements] = either {
    val scopeOpt = value {
      scope
        .map { posStr =>
          RequireScope.scopesByName.get(posStr.value).toRight {
            new BuildException("No such scope", positions = posStr.positions) {}
          }
        }
        .sequence
    }
    BuildRequirements(
      scope = scopeOpt.map(BuildRequirements.ScopeRequirement(_))
    )
  }
}

object RequireScope {
  private lazy val scopesByName               = Scope.all.map(s => s.name -> s).toMap
  val handler: DirectiveHandler[RequireScope] = DirectiveHandler.derive
}
