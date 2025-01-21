"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4695],{6673:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(4848),i=n(8453),l=n(2267);const o={title:"Setup multiple projects in IDEA IntelliJ as separate modules",sidebar_position:13},a=void 0,c={id:"cookbooks/ide/intellij-multi-bsp",title:"Setup multiple projects in IDEA IntelliJ as separate modules",description:"If you've read through the basic IDEA IntelliJ cookbook, then you already know how to import a Scala CLI",source:"@site/docs/cookbooks/ide/intellij-multi-bsp.md",sourceDirName:"cookbooks/ide",slug:"/cookbooks/ide/intellij-multi-bsp",permalink:"/docs/cookbooks/ide/intellij-multi-bsp",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/ide/intellij-multi-bsp.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Setup multiple projects in IDEA IntelliJ as separate modules",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Scala CLI project in IntelliJ alongside your existing SBT project",permalink:"/docs/cookbooks/ide/intellij-sbt-with-bsp"},next:{title:"Emacs",permalink:"/docs/cookbooks/ide/emacs"}},r={},d=[];function p(e){const s={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["If you've read through ",(0,t.jsx)(s.a,{href:"/docs/cookbooks/ide/intellij",children:"the basic IDEA IntelliJ cookbook"}),", then you already know how to import a Scala CLI\nproject using ",(0,t.jsx)(s.code,{children:"BSP"}),". However, in some cases importing a single project just does not fit the bill."]}),"\n",(0,t.jsx)(s.p,{children:"Here's a walk-through for a slightly more advanced scenario."}),"\n",(0,t.jsx)(s.p,{children:"Let's say we keep the sources for 2 separate Scala apps in one repository. Each has its own subdirectory, to keep things\nclean. Additionally, you have another one for scripts alongside them."}),"\n",(0,t.jsx)(s.p,{children:"It looks somewhat similar to this:"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tree -a\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:".\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n7 directories, 6 files\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=app1/src/HelloWorld1.scala",children:'@main def hello: Unit = println("hello1")\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=app1/test/MyTests1.scala",children:'//> using dep org.scalameta::munit:1.0.2\nclass MyTests1 extends munit.FunSuite {\n  test("my test 1") {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=app2/src/HelloWorld2.scala",children:'@main def hello: Unit = println("hello2")\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=app2/test/MyTests2.scala",children:'//> using dep com.lihaoyi::utest::0.8.4\n\nimport utest.*\n\nobject MessagesTests extends TestSuite {\n  val tests = Tests {\n    test("my test 2") {\n      assert(2 + 2 == 4)\n    }\n  }\n}\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=scripts/SomeScript.sc",children:'println("some script")\n'})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-scala",metastring:"title=scripts/AnotherScript.sc",children:'println("another script")\n'})})]}),"\n",(0,t.jsxs)(s.p,{children:["When running these apps, you'd like to run them separately. ",(0,t.jsx)(s.code,{children:"app1"})," and ",(0,t.jsx)(s.code,{children:"app2"})," may have conflicting dependencies, or it\nmay just not feel hygienic to share their classpath long term."]}),"\n",(0,t.jsx)(s.p,{children:"However, you keep those in one repository because of business relevance (or whatever other reasons why they are tied\ntogether), and so, you'd like to see them all at once in your IDE, with all the syntax coloring, completions and\ndebugging\nyour code straight from the IDE, the whole shebang."}),"\n",(0,t.jsx)(s.p,{children:"It's tempting to just run:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"scala-cli setup-ide .\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Unfortunately, in this case that won't really do the trick. Even if you run and package the apps & scripts from the\nterminal separately, when importing everything together to your IDE like this, the single ",(0,t.jsx)(s.code,{children:"BSP"})," project will make them\nshare their classpath. This in turn means that things will break."]}),"\n",(0,t.jsxs)(s.p,{children:["The only way to solve this is for each to have its own ",(0,t.jsx)(s.code,{children:"BSP"})," configuration, really.\nAnd so:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"scala-cli setup-ide app1\nscala-cli setup-ide app2\nscala-cli setup-ide scripts\n"})}),"\n",(0,t.jsxs)(s.p,{children:["As a result, a separate ",(0,t.jsx)(s.code,{children:".bsp"})," directory was created in ",(0,t.jsx)(s.code,{children:"app1"}),", ",(0,t.jsx)(s.code,{children:"app2"})," and ",(0,t.jsx)(s.code,{children:"scripts"}),", respectively."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tree -a\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:".\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 .bsp\n    \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n    \u251c\u2500\u2500 .scala-build\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n13 directories, 15 files\n\n\n\n"})})]}),"\n",(0,t.jsxs)(s.p,{children:["After opening the root directory in ",(0,t.jsx)(s.code,{children:"IntelliJ"})," (",(0,t.jsx)(s.code,{children:"File"})," -> ",(0,t.jsx)(s.code,{children:"Open..."}),"), the 3 ",(0,t.jsx)(s.code,{children:"BSP"})," setups should be successfully\ndetected."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"IntelliJ noticed the 3 BSP configs",src:n(7185).A+"",width:"792",height:"190"})}),"\n",(0,t.jsxs)(s.p,{children:["However, since there are 3 different setups, ",(0,t.jsx)(s.code,{children:"IntelliJ"})," doesn't know what to import. And so, we have to set it up\nourselves."]}),"\n",(0,t.jsxs)(s.p,{children:["Right-click on your project root directory in ",(0,t.jsx)(s.code,{children:"Intellij"})," and go into ",(0,t.jsx)(s.code,{children:"Module Settings"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Go into Module Settings",src:n(6231).A+"",width:"1124",height:"1512"})}),"\n",(0,t.jsxs)(s.p,{children:["Then, under ",(0,t.jsx)(s.code,{children:"Project Structure"})," -> ",(0,t.jsx)(s.code,{children:"Modules"})," press the ",(0,t.jsx)(s.code,{children:"+"})," button and then ",(0,t.jsx)(s.code,{children:"Import Module"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Import a module",src:n(4196).A+"",width:"2052",height:"1696"})}),"\n",(0,t.jsxs)(s.p,{children:["Navigate to each of the subdirectories from there and add them as a ",(0,t.jsx)(s.code,{children:"BSP"})," module (",(0,t.jsx)(s.code,{children:"BSP"})," should be an available choice,\nif the ",(0,t.jsx)(s.code,{children:"setup-ide"})," was run correctly)."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Import from BSP as external model",src:n(9455).A+"",width:"1508",height:"1194"})}),"\n",(0,t.jsxs)(s.p,{children:["You have to import each of the subdirectories separately (",(0,t.jsx)(s.code,{children:"app1"}),", ",(0,t.jsx)(s.code,{children:"app2"})," and ",(0,t.jsx)(s.code,{children:"scripts"}),", in the example)."]}),"\n",(0,t.jsx)(s.p,{children:"The end result should look like this:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"End result multi-BSP setup",src:n(6920).A+"",width:"3576",height:"1978"})}),"\n",(0,t.jsxs)(s.p,{children:["Now each of the subdirectories uses its own ",(0,t.jsx)(s.code,{children:"BSP"})," connection, which in turn means a separate classpath. And all of that\nin a single ",(0,t.jsx)(s.code,{children:"IntelliJ"})," project!"]}),"\n",(0,t.jsxs)(s.p,{children:["Upon closer inspection, you may notice that ",(0,t.jsx)(s.code,{children:"IntelliJ"})," stores this as separate sub-project configurations. Each\nsubdirectory gets its own ",(0,t.jsx)(s.code,{children:".idea"})," folder with the relevant settings."]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"tree -a\n"})}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:".\n\u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u251c\u2500\u2500 .gitignore\n\u2502\xa0\xa0 \u251c\u2500\u2500 bsp.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 codeStyles\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Project.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 codeStyleConfig.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 intellij-multi-bsp.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 misc.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 modules.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 sbt.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 vcs.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 workspace.xml\n\u251c\u2500\u2500 app1\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 app1-root.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld1.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests1.test.scala\n\u251c\u2500\u2500 app2\n\u2502\xa0\xa0 \u251c\u2500\u2500 .bsp\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 .idea\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 app2-root.iml\n\u2502\xa0\xa0 \u251c\u2500\u2500 .scala-build\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld2.scala\n\u2502\xa0\xa0 \u2514\u2500\u2500 test\n\u2502\xa0\xa0     \u2514\u2500\u2500 MyTests2.test.scala\n\u2514\u2500\u2500 scripts\n    \u251c\u2500\u2500 .bsp\n    \u2502\xa0\xa0 \u2514\u2500\u2500 scala-cli.json\n    \u251c\u2500\u2500 .idea\n    \u2502\xa0\xa0 \u2514\u2500\u2500 modules\n    \u2502\xa0\xa0     \u2514\u2500\u2500 scripts-root.iml\n    \u251c\u2500\u2500 .scala-build\n    \u2502\xa0\xa0 \u251c\u2500\u2500 ide-inputs.json\n    \u2502\xa0\xa0 \u2514\u2500\u2500 ide-options-v2.json\n    \u251c\u2500\u2500 AnotherScript.sc\n    \u2514\u2500\u2500 SomeScript.sc\n\n21 directories, 28 files\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},2267:(e,s,n)=>{n.d(s,{Z:()=>l,b:()=>o});n(6540);var t=n(3554),i=n(4848);function l(e){let{children:s}=e;return(0,i.jsx)("div",{className:"runnable-command",children:s})}function o(e){let{url:s}=e;return(0,i.jsx)(t.A,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:s})}},7185:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/intellij_bsp_build_scripts_found-0b3d0113be74946fc391973f15f8d0db.png"},9455:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/intellij_import_bsp_module-a5bccf0d05ba59b09e216ee6a8cbfa3f.png"},6231:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/intellij_module_settings-5071b97e865bc5ccac8af0082a0c857f.png"},4196:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/intellij_module_settings_import_module-906dfd87a9e0e4c3fdff2fa8d049bb3c.png"},6920:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/intellij_multi_bsp_setup-f70bc9b77e59dff5c761f262fc3713d7.png"}}]);