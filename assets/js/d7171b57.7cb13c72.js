"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2542],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,g=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1382:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},l=void 0,c={unversionedId:"tutorial/config_groups",id:"version-0.11/tutorial/config_groups",isDocsHomePage:!1,title:"Config groups",description:"This is the most important concept in Hydra.",source:"@site/versioned_docs/version-0.11/tutorial/3_config_groups.md",sourceDirName:"tutorial",slug:"/tutorial/config_groups",permalink:"/docs/0.11/tutorial/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/tutorial/3_config_groups.md",tags:[],version:"0.11",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642182766,formattedLastUpdatedAt:"1/14/2022",sidebarPosition:3,frontMatter:{id:"config_groups",title:"Config groups",sidebar_label:"Config groups"},sidebar:"version-0.11/docs",previous:{title:"Configuration file",permalink:"/docs/0.11/tutorial/config_file"},next:{title:"Defaults",permalink:"/docs/0.11/tutorial/defaults"}},s=[],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the most important concept in Hydra."),(0,i.kt)("p",null,"Suppose you want to benchmark PostgreSQL and MySQL for your application.\nWhen running of the application, you will need either MySQL or PostgreSQL - but not both."),(0,i.kt)("p",null,"The way to do this with Hydra is with a ",(0,i.kt)("strong",{parentName:"p"},"Config group"),".\nA config group is a mutually exclusive set of configuration files."),(0,i.kt)("p",null,"To create a config group, create a directory - ",(0,i.kt)("inlineCode",{parentName:"p"},"db")," - that will hold\na file for each database configuration alternative.\nSince we are expecting to have multiple config groups, we will proactively move all the configuration\nfiles into a ",(0,i.kt)("inlineCode",{parentName:"p"},"conf")," directory."),(0,i.kt)("p",null,"Python file: ",(0,i.kt)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf")\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"config_path")," can specify your config file as in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.11/tutorial/simple_cli"},"previous command line example"),", or the root directory for your configuration files.\nIf a config file is specified, its directory is the root directory."),(0,i.kt)("p",null,"The directory structure of our application now looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 db\n\u2502\xa0\xa0     \u251c\u2500\u2500 mysql.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 postgresql.yaml\n\u2514\u2500\u2500 my_app.py\n")),(0,i.kt)("p",null,"If you run it, it prints an empty config because no configuration was specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\n{}\n")),(0,i.kt)("p",null,"You can now choose which database configuration to use from the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),(0,i.kt)("p",null,"Like before, you can still override individual values in the resulting config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,i.kt)("p",null,"This simple example demonstrated a very powerful feature of Hydra:\nYou can compose your configuration object from multiple configuration files."))}f.isMDXComponent=!0}}]);