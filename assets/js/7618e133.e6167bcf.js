(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(277)),o=n(284),s={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},c={unversionedId:"advanced/instantiate_objects/overview",id:"advanced/instantiate_objects/overview",isDocsHomePage:!1,title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/docs/advanced/instantiate_objects/overview.md",slug:"/advanced/instantiate_objects/overview",permalink:"/docs/next/advanced/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/instantiate_objects/overview.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1616794388,formattedLastUpdatedAt:"3/26/2021",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Config Search Path",permalink:"/docs/next/advanced/search_path"},next:{title:"Config files example",permalink:"/docs/next/advanced/instantiate_objects/config_files"}},l=[{value:"Simple usage",id:"simple-usage",children:[]},{value:"Recursive instantiation",id:"recursive-instantiation",children:[]},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[]},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o.a,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),Object(r.b)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),Object(r.b)("p",null,"Hydra provides ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",Object(r.b)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",Object(r.b)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",Object(r.b)("inlineCode",{parentName:"p"},"call")," for invoking functions."),Object(r.b)("p",null,"Call/instantiate supports:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Constructing an object by calling the ",Object(r.b)("inlineCode",{parentName:"li"},"__init__")," method"),Object(r.b)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),Object(r.b)("details",null,Object(r.b)("summary",null,"Instantiate API (Expand for details)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _args_: List-like of positional arguments to pass to the target\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n                   IMPORTANT: dataclasses instances in kwargs are interpreted as config\n                              and cannot be used as passthrough\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),Object(r.b)("br",null),Object(r.b)("p",null,"The config passed to these functions must have a key called ",Object(r.b)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.\nFor convenience, ",Object(r.b)("inlineCode",{parentName:"p"},"None")," config results in a ",Object(r.b)("inlineCode",{parentName:"p"},"None")," object."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Named arguments")," : Config fields (except reserved fields like ",Object(r.b)("inlineCode",{parentName:"p"},"_target_"),") are passed as named arguments to the target.\nNamed arguments in the config can be overridden by passing named argument with the same name in the ",Object(r.b)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Positional arguments")," : The config may contain a ",Object(r.b)("inlineCode",{parentName:"p"},"_args_")," field representing positional arguments to pass to the target.\nThe positional arguments can be overridden together by passing positional arguments in the ",Object(r.b)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),Object(r.b)("h3",{id:"simple-usage"},"Simple usage"),Object(r.b)("p",null,"Your application might have an Optimizer class:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0},"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),Object(r.b)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),Object(r.b)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0},"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),Object(r.b)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0},"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),Object(r.b)("p",null,"Hydra will instantiate nested objects recursively by default."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),Object(r.b)("p",null,"You can override parameters for nested objects:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),Object(r.b)("p",null,"Similarly, positional arguments of nested objects can be overridden:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},'obj = instantiate(\n    cfg.object,\n    # pass 1 and 2 as positional arguments to the target object\n    1, 2,  \n    # pass 3 and 4 as positional arguments to a nested child object\n    child={"_args_": [3, 4]},\n)\n')),Object(r.b)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),Object(r.b)("p",null,"You can disable recursive instantiation by setting ",Object(r.b)("inlineCode",{parentName:"p"},"_recursive_")," to ",Object(r.b)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),Object(r.b)("p",null,"Output:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),Object(r.b)("h2",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),Object(r.b)("p",null,"By default, the parameters passed to the target are either primitives (int, float, bool etc) or",Object(r.b)("br",{parentName:"p"}),"\n","OmegaConf containers (DictConfig, ListConfig).\nOmegaConf containers have many advantages over primitive dicts and lists but in some cases\nit's desired to pass a real dicts and lists (for example, for performance reasons)."),Object(r.b)("p",null,"You can change the parameter conversion strategy using the ",Object(r.b)("inlineCode",{parentName:"p"},"_convert_")," parameter (in your config or the call-site).\nSupported values are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," : Default behavior, Use OmegaConf containers"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"partial")," : Convert OmegaConf containers to dict and list, except Structured Configs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"all")," : Convert everything to primitive containers")),Object(r.b)("p",null,"Note that the conversion strategy applies to all the parameters passed to the target."))}p.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return n?i.a.createElement(f,s(s({ref:t},l),{},{components:n})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))},279:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(11),o=n(278),s=n(7),c=Object(a.createContext)({collectLink:function(){}}),l=n(280),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(l.b)().withBaseUrl,_=Object(a.useContext)(c),w=b||f,D=Object(o.a)(w),N=null==w?void 0:w.replace("pathname://",""),C=void 0!==N?(n=N,O&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,A=Object(a.useRef)(!1),x=d?r.e:r.c,P=s.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!P&&D&&window.docusaurus.prefetch(C),function(){P&&p&&p.disconnect()}}),[C,P,D]);var E=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,k=!C||!D||E;return C&&D&&!E&&!v&&_.collectLink(C),k?i.a.createElement("a",Object.assign({href:C},w&&!D&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(x,Object.assign({},j,{onMouseEnter:function(){A.current||(window.docusaurus.preload(C),A.current=!0)},innerRef:function(e){var t,n;P&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(C)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:g,activeClassName:m}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(10),i=n(278);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,s=void 0!==o&&o,c=r.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(i){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),i=n(38),r=n(283);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=a.useLocation().pathname;return r.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:r.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return r.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=a.useLocation().pathname;return r.getDocVersionSuggestions(n,i)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),r=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!r&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return r},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,r,o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?(i=s.id,r={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(r[e.name]=t)}))})),r):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),r=i.activeVersion!==a;return{latestDocSuggestion:r?null==i?void 0:i.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:r?a:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),i=n(0),r=n.n(i),o=n(279),s=n(10),c=n(281);function l(e){return r.a.createElement(o.a,Object(a.a)({},e,{to:(t=e.to,i=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return r.a.createElement(l,e,r.a.createElement("span",null,"\xa0"),r.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);