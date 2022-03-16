"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8971],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return c},withMDXComponents:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),m=function(e){return function(n){var r=c(n.components);return t.createElement(e,i({},n,{components:r}))}},c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,g=m["".concat(o,".").concat(p)]||m[p]||s[p]||i;return r?t.createElement(g,d(d({ref:n},u),{},{components:r})):t.createElement(g,d({ref:n},u))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93899:function(e,n,r){r.d(n,{Z:function(){return l},T:function(){return u}});var t=r(87462),a=r(67294),i=r(39960),o=r(52263),d=r(80907);function l(e){return a.createElement(i.default,(0,t.Z)({},e,{to:(n=e.to,l=(0,d.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==l?void 0:l.name)?r:"current"]+n),target:"_blank"}));var n,r,l}function u(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(l,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},35846:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return s}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(93899),d=["components"],l={id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},u=void 0,m={unversionedId:"configure_hydra/workdir",id:"configure_hydra/workdir",title:"Customizing working directory pattern",description:"Hydra automatically creates an output directory used to store log files and",source:"@site/docs/configure_hydra/workdir.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/workdir",permalink:"/docs/next/configure_hydra/workdir",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/configure_hydra/workdir.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1647390790,formattedLastUpdatedAt:"3/16/2022",frontMatter:{id:"workdir",title:"Customizing working directory pattern",sidebar_label:"Customizing working directory pattern"},sidebar:"docs",previous:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"},next:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"}},c=[{value:"Configuration for run",id:"configuration-for-run",children:[],level:3},{value:"Configuration for multirun",id:"configuration-for-multirun",children:[],level:3},{value:"Using <code>hydra.job.override_dirname</code>",id:"using-hydrajoboverride_dirname",children:[],level:3}],p={toc:c};function s(e){var n=e.components,r=(0,a.Z)(e,d);return(0,i.mdx)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{text:"Example application",to:"examples/configure_hydra/workdir",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Hydra automatically creates an output directory used to store log files and\nsave yaml configs. This directory can be configured by setting ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.run.dir"),"\n(for single hydra runs) or ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.dir"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.subdir")," (for multirun\nsweeps). At runtime, the path of the output directory can be\n",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/configure_hydra/intro#accessing-the-hydra-config"},"accessed")," via the ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.runtime.output_dir")," variable.\nBelow are a few examples of customizing output directory patterns."),(0,i.mdx)("h3",{id:"configuration-for-run"},"Configuration for run"),(0,i.mdx)("p",null,"Run output directory grouped by date:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: ./outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}\n")),(0,i.mdx)("p",null,"Run output directory grouped by job name:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${hydra.job.name}/${now:%Y-%m-%d_%H-%M-%S}\n")),(0,i.mdx)("p",null,"Run output directory can contain user configuration variables:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: outputs/${now:%Y-%m-%d_%H-%M-%S}/opt:${optimizer.type}\n")),(0,i.mdx)("h3",{id:"configuration-for-multirun"},"Configuration for multirun"),(0,i.mdx)("p",null,"We will run the application with same command but different configurations:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun a=a1,a2,a3 \n")),(0,i.mdx)("p",null,"Default multirun dir configurations:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--8"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun/${now:%Y-%m-%d}/${now:%H-%M-%S}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.mdx)("div",{className:"col  col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.mdx)("p",null,"Similar configuration patterns in run can be applied to config multirun dir as well."),(0,i.mdx)("p",null,"For example, multirun output directory grouped by job name, and sub dir by job num:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: ${hydra.job.name}\n    subdir: ${hydra.job.num}\n\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="workding dir created"',title:'"workding',dir:!0,'created"':!0},"$ tree my_app -d\nmy_app\n\u251c\u2500\u2500 0\n\u251c\u2500\u2500 1\n\u2514\u2500\u2500 2\n")))),(0,i.mdx)("h3",{id:"using-hydrajoboverride_dirname"},"Using ",(0,i.mdx)("inlineCode",{parentName:"h3"},"hydra.job.override_dirname")),(0,i.mdx)(o.T,{text:"Example application",to:"examples/configure_hydra/job_override_dirname",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern. It is meant to be used along with the configuration for working dir, especially\nin ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.sweep.subdir"),"."),(0,i.mdx)("p",null,"If we run the example application with the following commandline overrides and configs:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python my_app.py --multirun batch_size=32 learning_rate=0.1,0.01\n")),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"hydra:\n  sweep:\n    dir: multirun\n    subdir: ${hydra.job.override_dirname}\n"))),(0,i.mdx)("div",{className:"col  col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash",metastring:'title="working dir created"',title:'"working',dir:!0,'created"':!0},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n")))),(0,i.mdx)("p",null,"You can further customized the output dir creation by configuring",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.override_dirname"),"."),(0,i.mdx)("p",null,"In particular, the separator char ",(0,i.mdx)("inlineCode",{parentName:"p"},"=")," and the item separator char ",(0,i.mdx)("inlineCode",{parentName:"p"},",")," can be modified by overriding\n",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.kv_sep")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname.item_sep"),".\nCommand line override keys can also be automatically excluded from the generated ",(0,i.mdx)("inlineCode",{parentName:"p"},"override_dirname"),"."),(0,i.mdx)("p",null,"An example of a case where the exclude is useful is a random seed."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),(0,i.mdx)("p",null,"With this configuration, running"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py --multirun  batch_size=32 learning_rate=0.1,0.01 seed=1,2\n")),(0,i.mdx)("p",null,"Would result in a directory structure like:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ tree multirun -d\nmultirun\n\u251c\u2500\u2500 batch_size=32,learning_rate=0.01\n\u2502\xa0\xa0 \u251c\u2500\u2500 seed=1\n\u2502\xa0\xa0 \u2514\u2500\u2500 seed=2\n\u2514\u2500\u2500 batch_size=32,learning_rate=0.1\n    \u251c\u2500\u2500 seed=1\n    \u2514\u2500\u2500 seed=2\n")))}s.isMDXComponent=!0}}]);