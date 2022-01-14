"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[885],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return c},T:function(){return l}});var r=n(7462),o=n(7294),a=n(6742),i=n(2263),s=n(907);function c(e){return o.createElement(a.Z,(0,r.Z)({},e,{to:(t=e.to,c=(0,s.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==c?void 0:c.name)?n:"current"]+t),target:"_blank"}));var t,n,c}function l(e){var t,n=null!=(t=e.text)?t:"Example";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},1060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(3899),s=["components"],c={id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},l=void 0,p={unversionedId:"advanced/instantiate_objects/structured_config",id:"version-1.1/advanced/instantiate_objects/structured_config",isDocsHomePage:!1,title:"Structured Configs example",description:"This example demonstrates the use of Structured Configs to instantiated objects.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/structured_config.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/structured_config",permalink:"/docs/advanced/instantiate_objects/structured_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/instantiate_objects/structured_config.md",tags:[],version:"1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1642182766,formattedLastUpdatedAt:"1/14/2022",frontMatter:{id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},sidebar:"version-1.1/docs",previous:{title:"Config files example",permalink:"/docs/advanced/instantiate_objects/config_files"},next:{title:"Compose API",permalink:"/docs/advanced/compose_api"}},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,a.kt)("p",null,"This example demonstrates the use of Structured Configs to instantiated objects."),(0,a.kt)("h4",{id:"example-usage"},"Example usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'class DBConnection:\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        self.driver = driver\n        self.host = host\n        self.port = port\n\n    def connect(self) -> None:\n        print(f"{self.driver} connecting to {self.host}")\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int, timeout: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n        self.timeout = timeout\n\n@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = 80\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    _target_: str = "my_app.MySQLConnection"\n    driver: str = "MySQL"\n    port: int = 1234\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    _target_: str = "my_app.PostgreSQLConnection"\n    driver: str = "PostgreSQL"\n    port: int = 5678\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda: [{"db": "mysql"}])\n    db: DBConfig = MISSING\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    connection = instantiate(cfg.db)\n    connection.connect()\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.kt)("h4",{id:"sample-output"},"Sample Output"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py\nMySQL connecting to localhost:1234\n"))),(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py db=postgresql\nPostgreSQL connecting to localhost:5678\n")))))}f.isMDXComponent=!0}}]);