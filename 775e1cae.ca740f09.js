(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(1),a=(n(0),n(157));const r={title:"atom(options)",sidebar_label:"atom()"},i={id:"api-reference/core/atom",title:"atom(options)",description:"An *atom* represents state in Recoil.  The `atom()` function returns a writeable `RecoilState` object.",source:"@site/docs/api-reference/core/atom.md",permalink:"/docs/api-reference/core/atom",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/atom.md",sidebar_label:"atom()",sidebar:"someSidebar",previous:{title:"<RecoilRoot ...props />",permalink:"/docs/api-reference/core/RecoilRoot"},next:{title:"selector(options)",permalink:"/docs/api-reference/core/selector"}},c=[{value:"Example",id:"example",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"atom")," represents state in Recoil.  The ",Object(a.b)("inlineCode",{parentName:"p"},"atom()")," function returns a writeable ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilState")," object."),Object(a.b)("hr",null),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"default")," - The initial value of the atom or a ",Object(a.b)("inlineCode",{parentName:"li"},"Promise")," or another atom or selector representing a value of the same type."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - Recoil depends on atom state changes to know when to notify components that use the atoms to re-render.  If an atom's value were mutated, it may bypass this and cause state to change without properly notifying subscribing compoennts.  To help protect against this all stored values are frozen.  In some cases it may be desireable to override this using this option.")),Object(a.b)("hr",null),Object(a.b)("p",null,"Most often, you'll use the following hooks to interact with atoms:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useRecoilState"}),Object(a.b)("inlineCode",{parentName:"a"},"useRecoilState()")),": Use this hook when you intend on both reading and writing to the atom. This hook subscribes the component to the atom."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useRecoilValue"}),Object(a.b)("inlineCode",{parentName:"a"},"useRecoilValue()")),": Use this hook when you intend on only reading the atom. This hook subscribes the component to the atom."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useSetRecoilState"}),Object(a.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),": Use this hook when you intend on only writing to the atom."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api-reference/core/useResetRecoilState"}),Object(a.b)("inlineCode",{parentName:"a"},"useResetRecoilState()")),": Use this hook to reset an atom to its default value.")),Object(a.b)("p",null,"For rare cases where you need to read an atom's value without subscribing to the component, see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference/core/useRecoilCallback"}),Object(a.b)("inlineCode",{parentName:"a"},"useRecoilCallback()")),"."),Object(a.b)("p",null,"You can initialize an atom either with a static value or with a ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," or a ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilValue")," representing a value of the same type.  Because the ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," may be pending or the default selector may be asynchronous it means that the atom value may also be pending or throw an error when reading.  Note that you cannot currently assign a ",Object(a.b)("inlineCode",{parentName:"p"},"Promise")," when setting an atom.  Please use ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api-reference/core/selector"}),"selectors")," for async functions."),Object(a.b)("p",null,"Atoms cannot be used to store ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),"s or ",Object(a.b)("inlineCode",{parentName:"p"},"RecoilValues")," directly, but they may be wrapped in an object.  Note that ",Object(a.b)("inlineCode",{parentName:"p"},"Promises")," may be mutable."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, useRecoilState} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counter);\n  const incrementByOne = () => setCount(count + 1);\n\n  return (\n    <div>\n      Count: {count}\n      <br />\n      <button onClick={incrementByOne}>Increment</button>\n    </div>\n  );\n}\n")))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);