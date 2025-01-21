"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3059],{3151:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var i=n(4848),l=n(8453);const c={title:"Directives",sidebar_position:2},r=void 0,d={id:"reference/scala-command/directives",title:"Directives",description:"This document describes as scala-cli behaves if run as scala command. See more information in SIP-46",source:"@site/docs/reference/scala-command/directives.md",sourceDirName:"reference/scala-command",slug:"/reference/scala-command/directives",permalink:"/docs/reference/scala-command/directives",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/reference/scala-command/directives.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Directives",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scala Runner specification",permalink:"/docs/reference/scala-command/runner-specification"},next:{title:"Commands",permalink:"/docs/reference/scala-command/commands"}},a={},o=[{value:"MUST have directives:",id:"must-have-directives",level:2},{value:"Compiler options",id:"compiler-options",level:3},{value:"Examples",id:"examples",level:4},{value:"Compiler plugins",id:"compiler-plugins",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Dependency",id:"dependency",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Java options",id:"java-options",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Java properties",id:"java-properties",level:3},{value:"Examples",id:"examples-4",level:4},{value:"Main class",id:"main-class",level:3},{value:"Examples",id:"examples-5",level:4},{value:"Scala version",id:"scala-version",level:3},{value:"Examples",id:"examples-6",level:4},{value:"SHOULD have directives:",id:"should-have-directives",level:2},{value:"Custom JAR",id:"custom-jar",level:3},{value:"Examples",id:"examples-7",level:4},{value:"Custom sources",id:"custom-sources",level:3},{value:"Examples",id:"examples-8",level:4},{value:"Exclude sources",id:"exclude-sources",level:3},{value:"Examples",id:"examples-9",level:4},{value:"JVM version",id:"jvm-version",level:3},{value:"Examples",id:"examples-10",level:4},{value:"Java home",id:"java-home",level:3},{value:"Examples",id:"examples-11",level:4},{value:"Javac options",id:"javac-options",level:3},{value:"Examples",id:"examples-12",level:4},{value:"Platform",id:"platform",level:3},{value:"Examples",id:"examples-13",level:4},{value:"Repository",id:"repository",level:3},{value:"Examples",id:"examples-14",level:4},{value:"Resource directories",id:"resource-directories",level:3},{value:"Examples",id:"examples-15",level:4},{value:"Scala Native options",id:"scala-native-options",level:3},{value:"Examples",id:"examples-16",level:4},{value:"Scala.js options",id:"scalajs-options",level:3},{value:"Examples",id:"examples-17",level:4},{value:"Test framework",id:"test-framework",level:3},{value:"Examples",id:"examples-18",level:4},{value:"Toolkit",id:"toolkit",level:3},{value:"Examples",id:"examples-19",level:4}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["This document describes as scala-cli behaves if run as ",(0,i.jsx)(s.code,{children:"scala"})," command. See more information in ",(0,i.jsx)(s.a,{href:"https://github.com/scala/improvement-proposals/pull/46",children:"SIP-46"})]})}),"\n",(0,i.jsxs)(s.p,{children:["This document is a specification of the ",(0,i.jsx)(s.code,{children:"scala"})," runner.\nFor now it uses documentation specific to Scala CLI but at some point it may be refactored to provide more abstract documentation.\nDocumentation is split into sections in the spirit of RFC keywords (",(0,i.jsx)(s.code,{children:"MUST"}),", ",(0,i.jsx)(s.code,{children:"SHOULD"}),")."]}),"\n",(0,i.jsx)(s.h2,{id:"must-have-directives",children:"MUST have directives:"}),"\n",(0,i.jsx)(s.h3,{id:"compiler-options",children:"Compiler options"}),"\n",(0,i.jsx)(s.p,{children:"Add Scala compiler options"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using option"})," ",(0,i.jsx)(s.em,{children:"option"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using options"})," ",(0,i.jsx)(s.em,{children:"option1"})," ",(0,i.jsx)(s.em,{children:"option2"})," \u2026"]}),"\n",(0,i.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using option -Xasync"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.option -Xasync"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using options -Xasync -Xfatal-warnings"})}),"\n",(0,i.jsx)(s.h3,{id:"compiler-plugins",children:"Compiler plugins"}),"\n",(0,i.jsx)(s.p,{children:"Adds compiler plugins"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"using plugin"})," ",(0,i.jsx)(s.em,{children:"org"}),(0,i.jsx)(s.code,{children:":"}),(0,i.jsx)(s.em,{children:"name"}),(0,i.jsx)(s.code,{children:":"}),(0,i.jsx)(s.em,{children:"ver"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using plugin org.typelevel:::kind-projector:0.13.2"})}),"\n",(0,i.jsx)(s.h3,{id:"dependency",children:"Dependency"}),"\n",(0,i.jsx)(s.p,{children:"Add dependencies"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using dep"})," ",(0,i.jsx)(s.em,{children:"org"}),(0,i.jsx)(s.code,{children:":"}),"name",(0,i.jsx)(s.code,{children:":"}),"ver"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-2",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using dep com.lihaoyi::os-lib:0.9.1"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.dep org.scalatest::scalatest:3.2.10"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.dep org.scalameta::munit:0.7.29"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using dep tabby:tabby:0.2.3,url=https://github.com/bjornregnell/tabby/releases/download/v0.2.3/tabby_3-0.2.3.jar"})}),"\n",(0,i.jsx)(s.h3,{id:"java-options",children:"Java options"}),"\n",(0,i.jsx)(s.p,{children:"Add Java options which will be passed when running an application."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using javaOpt"})," ",(0,i.jsx)(s.em,{children:"options"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-3",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using javaOpt -Xmx2g -Dsomething=a"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.javaOpt -Dsomething=a"})}),"\n",(0,i.jsx)(s.h3,{id:"java-properties",children:"Java properties"}),"\n",(0,i.jsx)(s.p,{children:"Add Java properties"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using javaProp"})," ",(0,i.jsx)(s.em,{children:"key=value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using javaProp"})," ",(0,i.jsx)(s.em,{children:"key"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-4",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using javaProp foo1=bar foo2"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.javaProp foo3=bar foo4"})}),"\n",(0,i.jsx)(s.h3,{id:"main-class",children:"Main class"}),"\n",(0,i.jsx)(s.p,{children:"Specify default main class"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using mainClass"})," ",(0,i.jsx)(s.em,{children:"main-class"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-5",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using mainClass HelloWorld"})}),"\n",(0,i.jsx)(s.h3,{id:"scala-version",children:"Scala version"}),"\n",(0,i.jsx)(s.p,{children:"Set the default Scala version"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using scala"})," ",(0,i.jsx)(s.em,{children:"version"}),"+"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-6",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using scala 3.0.2"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using scala 2.13"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using scala 2"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using scala 2.13.6 2.12.16"})}),"\n",(0,i.jsx)(s.h2,{id:"should-have-directives",children:"SHOULD have directives:"}),"\n",(0,i.jsx)(s.h3,{id:"custom-jar",children:"Custom JAR"}),"\n",(0,i.jsx)(s.p,{children:"Manually add JAR(s) to the class path"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jar"})," ",(0,i.jsx)(s.em,{children:"path"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jars"})," ",(0,i.jsx)(s.em,{children:"path1"})," ",(0,i.jsx)(s.em,{children:"path2"})," \u2026"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-7",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using jar /Users/alexandre/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/com/chuusai/shapeless_2.13/2.3.7/shapeless_2.13-2.3.7.jar"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.jar /Users/alexandre/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/com/chuusai/shapeless_2.13/2.3.7/shapeless_2.13-2.3.7.jar"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using sourceJar /path/to/custom-jar-sources.jar"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using sourceJars /path/to/custom-jar-sources.jar /path/to/another-jar-sources.jar"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.sourceJar /path/to/test-custom-jar-sources.jar"})}),"\n",(0,i.jsx)(s.h3,{id:"custom-sources",children:"Custom sources"}),"\n",(0,i.jsx)(s.p,{children:"Manually add sources to the project. Does not support chaining, sources are added only once, not recursively."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using file"})," ",(0,i.jsx)(s.em,{children:"path"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using files"})," ",(0,i.jsx)(s.em,{children:"path1"})," ",(0,i.jsx)(s.em,{children:"path2"})," \u2026"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-8",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using file utils.scala"})}),"\n",(0,i.jsx)(s.h3,{id:"exclude-sources",children:"Exclude sources"}),"\n",(0,i.jsx)(s.p,{children:"Exclude sources from the project"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using exclude"})," ",(0,i.jsx)(s.em,{children:"pattern"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using exclude"})," ",(0,i.jsx)(s.em,{children:"pattern1"})," ",(0,i.jsx)(s.em,{children:"pattern2"})," \u2026"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-9",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using exclude utils.scala"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using exclude examples/* */resources/*"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using exclude *.sc"})}),"\n",(0,i.jsx)(s.h3,{id:"jvm-version",children:"JVM version"}),"\n",(0,i.jsxs)(s.p,{children:["Use a specific JVM, such as ",(0,i.jsx)(s.code,{children:"14"}),", ",(0,i.jsx)(s.code,{children:"adopt:11"}),", or ",(0,i.jsx)(s.code,{children:"graalvm:21"}),", or ",(0,i.jsx)(s.code,{children:"system"}),". scala-cli uses ",(0,i.jsx)(s.a,{href:"https://get-coursier.io/",children:"coursier"})," to fetch JVMs, so you can use ",(0,i.jsx)(s.code,{children:"cs java --available"})," to list the available JVMs."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jvm"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-10",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using jvm 11"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using jvm adopt:11"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using jvm graalvm:21"})}),"\n",(0,i.jsx)(s.h3,{id:"java-home",children:"Java home"}),"\n",(0,i.jsx)(s.p,{children:"Sets Java home used to run your application or tests"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using javaHome"})," ",(0,i.jsx)(s.em,{children:"path"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-11",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using javaHome /Users/Me/jdks/11"})}),"\n",(0,i.jsx)(s.h3,{id:"javac-options",children:"Javac options"}),"\n",(0,i.jsx)(s.p,{children:"Add Javac options which will be passed when compiling sources."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using javacOpt"})," ",(0,i.jsx)(s.em,{children:"options"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-12",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using javacOpt -source 1.8 -target 1.8"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.javacOpt -source 1.8 -target 1.8"})}),"\n",(0,i.jsx)(s.h3,{id:"platform",children:"Platform"}),"\n",(0,i.jsx)(s.p,{children:"Set the default platform to Scala.js or Scala Native"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using platform"})," (",(0,i.jsx)(s.code,{children:"jvm"}),"|",(0,i.jsx)(s.code,{children:"scala-js"}),"|",(0,i.jsx)(s.code,{children:"js"}),"|",(0,i.jsx)(s.code,{children:"scala-native"}),"|",(0,i.jsx)(s.code,{children:"native"}),")+"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-13",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using platform scala-js"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using platform jvm scala-native"})}),"\n",(0,i.jsx)(s.h3,{id:"repository",children:"Repository"}),"\n",(0,i.jsx)(s.p,{children:"Add repositories for dependency resolution."}),"\n",(0,i.jsxs)(s.p,{children:["Accepts predefined repositories supported by Coursier (like ",(0,i.jsx)(s.code,{children:"sonatype:snapshots"})," or ",(0,i.jsx)(s.code,{children:"m2Local"}),") or a URL of the root of Maven repository"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using repository"})," ",(0,i.jsx)(s.em,{children:"repository"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-14",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using repository jitpack"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using repository sonatype:snapshots"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using repository m2Local"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using repository https://maven-central.storage-download.googleapis.com/maven2"})}),"\n",(0,i.jsx)(s.h3,{id:"resource-directories",children:"Resource directories"}),"\n",(0,i.jsx)(s.p,{children:"Manually add a resource directory to the class path"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using resourceDir"})," ",(0,i.jsx)(s.em,{children:"path"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using resourceDirs"})," ",(0,i.jsx)(s.em,{children:"path1"})," ",(0,i.jsx)(s.em,{children:"path2"})," \u2026"]}),"\n",(0,i.jsx)(s.h4,{id:"examples-15",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using resourceDir ./resources"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.resourceDir ./resources"})}),"\n",(0,i.jsx)(s.h3,{id:"scala-native-options",children:"Scala Native options"}),"\n",(0,i.jsx)(s.p,{children:"Add Scala Native options"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeGc"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeMode"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeLto"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeVersion"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeCompile"})," ",(0,i.jsx)(s.em,{children:"value1"})," ",(0,i.jsx)(s.em,{children:"value2"})," \u2026"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeLinking"})," ",(0,i.jsx)(s.em,{children:"value1"})," ",(0,i.jsx)(s.em,{children:"value2"})," \u2026"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeClang"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeClangPP"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeEmbedResources"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using nativeTarget"})," ",(0,i.jsx)(s.em,{children:"application|library-dynamic|library-static"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-16",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using nativeVersion 0.4.0"})}),"\n",(0,i.jsx)(s.h3,{id:"scalajs-options",children:"Scala.js options"}),"\n",(0,i.jsx)(s.p,{children:"Add Scala.js options"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsVersion"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsMode"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsNoOpt"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsModuleKind"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsSmallModuleForPackage"})," ",(0,i.jsx)(s.em,{children:"value1"})," ",(0,i.jsx)(s.em,{children:"value2"})," \u2026"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsCheckIr"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsEmitSourceMaps"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsDom"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsHeader"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsAllowBigIntsForLongs"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsAvoidClasses"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsAvoidLetsAndConsts"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsModuleSplitStyleStr"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsEsVersionStr"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsEmitWasm"})," ",(0,i.jsx)(s.em,{children:"true|false"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using jsEsModuleImportMap"})," ",(0,i.jsx)(s.em,{children:"value"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-17",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using jsModuleKind common"})}),"\n",(0,i.jsx)(s.h3,{id:"test-framework",children:"Test framework"}),"\n",(0,i.jsx)(s.p,{children:"Set the test framework"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using testFramework"}),"  ",(0,i.jsx)(s.em,{children:"class-name"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-18",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using testFramework utest.runner.Framework"})}),"\n",(0,i.jsx)(s.h3,{id:"toolkit",children:"Toolkit"}),"\n",(0,i.jsx)(s.p,{children:"Use a toolkit as dependency (not supported in Scala 2.12), 'default' version for Scala toolkit: 0.5.0, 'default' version for typelevel toolkit: 0.1.29"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"//> using toolkit"})," ",(0,i.jsx)(s.em,{children:"version"})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-19",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using toolkit 0.1.0"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using toolkit default"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"//> using test.toolkit default"})})]})}function x(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var i=n(6540);const l={},c=i.createContext(l);function r(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);