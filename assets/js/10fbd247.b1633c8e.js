(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{277:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=r,p=f["".concat(o,".").concat(g)]||f[g]||d[g]||a;return n?i.a.createElement(p,c(c({ref:t},u),{},{components:n})):i.a.createElement(p,c({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},279:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(278),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(280),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,g=e.to,p=e.href,m=e.activeClassName,v=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(s),D=g||p,_=Object(o.a)(D),A=null==D?void 0:D.replace("pathname://",""),C=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,x=Object(r.useRef)(!1),P=d?a.e:a.c,S=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!S&&_&&window.docusaurus.prefetch(C),function(){S&&f&&f.disconnect()}}),[C,S,_]);var V=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,N=!C||!_||V;return C&&_&&!V&&!b&&w.collectLink(C),N?i.a.createElement("a",Object.assign({href:C},D&&!_&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(P,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(C),x.current=!0)},innerRef:function(e){var t,n;S&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:v,activeClassName:m}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(278);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),a=n(283);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return a.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getDocVersionSuggestions(n,i)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),a=i.activeVersion!==r;return{latestDocSuggestion:a?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),a=n.n(i),o=n(279),c=n(10),s=n(281);function u(e){return a.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(3),i=n(8),a=(n(0),n(277)),o=n(284),c={id:"static_schema",title:"Static schema with many configs"},s={unversionedId:"tutorials/structured_config/static_schema",id:"version-1.0/tutorials/structured_config/static_schema",isDocsHomePage:!1,title:"Static schema with many configs",description:"We have seen that if the name of the config file matches the name of a configs stored in the ConfigStore it will be used to validate the config file automatically.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/6_static_schema_many_configs.md",slug:"/tutorials/structured_config/static_schema",permalink:"/docs/tutorials/structured_config/static_schema",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/structured_config/6_static_schema_many_configs.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1616794388,formattedLastUpdatedAt:"3/26/2021",sidebar:"version-1.0/docs",previous:{title:"Structured config schema",permalink:"/docs/tutorials/structured_config/schema"},next:{title:"Dynamic schema with many configs",permalink:"/docs/tutorials/structured_config/dynamic_schema"}},u=[],l={toc:u};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o.a,{to:"examples/tutorials/structured_configs/6_static_schema_many_configs",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"We have seen that if the name of the config file matches the name of a configs stored in the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," it will be used to validate the config file automatically.\nThis is useful if there is a one-to-one mapping between the Structured Configs and the YAML files.\nSuch convenient mapping does not exist when we have many config files and just one schema."),Object(a.b)("p",null,"If the config has a static structure, You can define it using Structured Configs.\nAny config merged into this config structure will be validated against the schema you define."),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = MISSING\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\n\n@hydra.main(config_path="conf", \n            config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n\n\n\n'))),Object(a.b)("div",{className:"col  col--6"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 prod.yaml\n    \u251c\u2500\u2500 qa.yaml\n    \u2514\u2500\u2500 staging.yaml\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: staging\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/staging.yaml"',title:'"db/staging.yaml"'},"# @package _group_\ndriver: mysql\nhost: mysql001.staging\nuser: root\npassword: root\n")))),Object(a.b)("p",null,"In the above example, the 3 yaml files has the structure compatible with the ",Object(a.b)("inlineCode",{parentName:"p"},"Config")," dataclass.\nYou can have as many such configs as you want."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py db=prod\ndb:\n  driver: mysql\n  host: mysql001.prod\n  user: root\n  password: '1234'\n")))}f.isMDXComponent=!0}}]);