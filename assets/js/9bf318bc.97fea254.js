"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1169],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(u,".").concat(g)]||d[g]||s[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9537:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},u=void 0,c={unversionedId:"tutorial/debugging",id:"version-0.11/tutorial/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-0.11/tutorial/10_debugging.md",sourceDirName:"tutorial",slug:"/tutorial/debugging",permalink:"/docs/0.11/tutorial/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/10_debugging.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642182766,formattedLastUpdatedAt:"1/14/2022",sidebarPosition:10,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"version-0.11/docs",previous:{title:"Logging",permalink:"/docs/0.11/tutorial/logging"},next:{title:"Creating objects",permalink:"/docs/0.11/patterns/objects"}},p=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Hydra verbose debugging",id:"hydra-verbose-debugging",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra provides a few options to improve debuggability."),(0,i.kt)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,i.kt)("p",null,"Print the config that would be used for a job without actually running it by adding '-c job' or '--cfg job' to your command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python tutorial/objects_example/my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python tutorial/objects_example/my_app.py -c job\n[2019-09-29 11:09:14,134] -\ndb:\n  class: tutorial.objects_example.my_app.MySQLConnection\n  params:\n    host: localhost\n    password: 1234\n    user: root\n")),(0,i.kt)("p",null,"The printed config would be the actual config the job received with the rest of the command line arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python tutorial/objects_example/my_app.py db=postgresql db.params.database=tutorial2 --cfg job\n[2019-09-29 11:14:55,977] -\ndb:\n  class: tutorial.objects_example.my_app.PostgreSQLConnection\n  params:\n    database: tutorial2\n    host: localhost\n    password: 1234\n    user: root\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"job")," : Your config "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra")," : Hydra's config"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all")," : The full config, which is a union of ",(0,i.kt)("inlineCode",{parentName:"li"},"job")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra"),".")),(0,i.kt)("h3",{id:"hydra-verbose-debugging"},"Hydra verbose debugging"),(0,i.kt)("p",null,"Hydra prints some very useful information in ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," log level.\nThis includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installed plugins : What Hydra plugins are installed in the environment "),(0,i.kt)("li",{parentName:"ul"},"Config search path : The configuration search path"),(0,i.kt)("li",{parentName:"ul"},"Composition trace : Which config files were used to compose your configuration, at what order and where did they came from.")),(0,i.kt)("p",null,"This is often used with ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," to just see the config without running the application.\nExample output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py hydra.verbose=hydra --cfg job\n[2019-09-29 13:35:46,780] - Installed Hydra Plugins\n[2019-09-29 13:35:46,780] - ***********************\n[2019-09-29 13:35:46,780] -     SearchPathPlugin:\n[2019-09-29 13:35:46,780] -     -----------------\n[2019-09-29 13:35:46,781] -     Sweeper:\n[2019-09-29 13:35:46,781] -     --------\n[2019-09-29 13:35:46,782] -             BasicSweeper\n[2019-09-29 13:35:46,782] -     Launcher:\n[2019-09-29 13:35:46,782] -     ---------\n[2019-09-29 13:35:46,783] -             BasicLauncher\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Hydra config search path\n[2019-09-29 13:35:46,783] - ************************\n[2019-09-29 13:35:46,783] - | Provider | Search path                           |\n[2019-09-29 13:35:46,783] - ----------------------------------------------------\n[2019-09-29 13:35:46,783] - | hydra  | pkg://hydra.conf                        |\n[2019-09-29 13:35:46,783] - | main   | /Users/omry/dev/hydra/tutorial/logging  |\n[2019-09-29 13:35:46,783] -\n[2019-09-29 13:35:46,783] - Composition trace\n[2019-09-29 13:35:46,783] - *****************\n[2019-09-29 13:35:46,783] - | Provider | Search path     | File      |\n...\n")))}d.isMDXComponent=!0}}]);