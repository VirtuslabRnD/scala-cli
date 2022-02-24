package scala.build.preprocessing.directives

object UsingDirectiveValueKind extends Enumeration {
  type UsingDirectiveValueKind = Value
  val STRING  = Value("String")
  val NUMERIC = Value("Numeric")
  val BOOLEAN = Value("Boolean")
  val UNKNOWN = Value("Unknown")
}
