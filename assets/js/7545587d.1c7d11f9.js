(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(8),o=(n(0),n(277)),i=n(284),s={id:"defaults",title:"Defaults List"},c={unversionedId:"tutorials/structured_config/defaults",id:"tutorials/structured_config/defaults",isDocsHomePage:!1,title:"Defaults List",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/docs/tutorials/structured_config/4_defaults.md",slug:"/tutorials/structured_config/defaults",permalink:"/docs/next/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/4_defaults.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1616794388,formattedLastUpdatedAt:"3/26/2021",sidebar:"docs",previous:{title:"Config Groups",permalink:"/docs/next/tutorials/structured_config/config_groups"},next:{title:"Structured Config schema",permalink:"/docs/next/tutorials/structured_config/schema"}},u=[],l={toc:u};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{to:"examples/tutorials/structured_configs/4_defaults/my_app.py",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",Object(o.b)("inlineCode",{parentName:"p"},"db=mysql")," by default."),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),Object(o.b)("br",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:"{11-14,19,25}","{11-14,19,25}":!0},'from omegaconf import MISSING, OmegaConf\n\n@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("p",null,"Running ",Object(o.b)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),Object(o.b)("p",null,"You can override the default option via the command line:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),Object(o.b)("h4",{id:"requiring-users-to-specify-a-default-list-value"},"Requiring users to specify a default list value"),Object(o.b)("p",null,"Set ",Object(o.b)("inlineCode",{parentName:"p"},"db")," as ",Object(o.b)("inlineCode",{parentName:"p"},"MISSING")," to require the user to specify a value on the command line."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Defaults list with a missing db"',title:'"Defaults',list:!0,with:!0,a:!0,missing:!0,'db"':!0},'defaults = [\n    {"db": MISSING}\n]\n\n\n'))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py\nYou must specify 'db', e.g, db=<OPTION>\nAvailable options:\n        mysql\n        postgresql\n")))))}f.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,g=f["".concat(i,".").concat(p)]||f[p]||d[p]||o;return n?a.a.createElement(g,s(s({ref:t},u),{},{components:n})):a.a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},279:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(11),i=n(278),s=n(7),c=Object(r.createContext)({collectLink:function(){}}),u=n(280),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,g=e.href,b=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,O=void 0===y||y,h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,D=Object(r.useContext)(c),w=p||g,A=Object(i.a)(w),x=null==w?void 0:w.replace("pathname://",""),C=void 0!==x?(n=x,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),_=d?o.e:o.c,N=s.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&A&&window.docusaurus.prefetch(C),function(){N&&f&&f.disconnect()}}),[C,N,A]);var L=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,V=!C||!A||L;return C&&A&&!L&&!v&&D.collectLink(C),V?a.a.createElement("a",Object.assign({href:C},w&&!A&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(_,Object.assign({},h,{onMouseEnter:function(){P.current||(window.docusaurus.preload(C),P.current=!0)},innerRef:function(e){var t,n;N&&e&&A&&(t=e,n=function(){window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:m,activeClassName:b}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(10),a=n(278);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),o=n(283);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return o.getDocVersionSuggestions(n,a)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,o,i=t.getActiveVersion(e,n),s=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:s,alternateDocVersions:s?(a=s.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),o=n.n(a),i=n(279),s=n(10),c=n(281);function u(e){return o.a.createElement(i.a,Object(r.a)({},e,{to:(t=e.to,a=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(u,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);