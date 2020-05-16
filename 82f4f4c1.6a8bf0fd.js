(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(6),l=(n(0),n(147)),i={title:"selectorFamily()",sidebar_label:"selectorFamily()"},o={id:"api-reference/utils/selectorFamily",title:"selectorFamily()",description:"Returns a function that returns a read-only `RecoilValueReadOnly` or writeable `RecoilState` selector.",source:"@site/docs/api-reference/utils/selectorFamily.md",permalink:"/docs/api-reference/utils/selectorFamily",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/selectorFamily.md",sidebar_label:"selectorFamily()",sidebar:"someSidebar",previous:{title:"atomFamily()",permalink:"/docs/api-reference/utils/atomFamily"},next:{title:"constSelector()",permalink:"/docs/api-reference/utils/constSelector"}},c=[{value:"Example",id:"example",children:[]},{value:"Query Example",id:"query-example",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Returns a function that returns a read-only ",Object(l.b)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," or writeable ",Object(l.b)("inlineCode",{parentName:"p"},"RecoilState")," selector."),Object(l.b)("p",null,"A ",Object(l.b)("inlineCode",{parentName:"p"},"selectorFamily")," is a powerful pattern that is similar to a ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),", but allows you to pass parameters to the ",Object(l.b)("inlineCode",{parentName:"p"},"get")," and ",Object(l.b)("inlineCode",{parentName:"p"},"set")," callbacks of a ",Object(l.b)("inlineCode",{parentName:"p"},"selector"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function selectorFamily<T, Parameter>({\n  key: string,\n\n  get: Parameter => ({get: GetRecoilValue}) => Promise<T> | RecoilValue<T> | T,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilValueReadOnly<T>\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function selectorFamily<T, Parameter>({\n  key: string,\n\n  get: Parameter => ({get: GetRecoilValue}) => Promise<T> | RecoilValue<T> | T,\n\n  set: Parameter => (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilValue,\n      reset: ResetRecoilValue,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),Object(l.b)("p",null,"Where"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"type GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilValue = <T>(\n  RecoilState<T>,\n  T | DefaultValue | ((prevValue: T) => T | DefaultValue),\n) => void;\ntype ResetRecoilValue = <T>(RecoilState<T>) => void;\n")),Object(l.b)("hr",null),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"selectorFamily()")," utility returns a function which can be called with user-defined parameters and returns a selector.  Each unique parameter value will return the same memoized selector instance."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"options"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key"),": A unique string used to identify the atom internally. This string should be unique with respect to other atoms and selectors in the entire application."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"get"),": A function that is passed an object of named callbacks that returns the value of the selector, the same as the ",Object(l.b)("inlineCode",{parentName:"li"},"selector()")," interface.  This is wrapped by a function which is passed the parameter from calling the selector family function."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"set?"),": An optional function that will produce writeable selectors when provided.  It should be a function that takes an object of named callbacks, same as the ",Object(l.b)("inlineCode",{parentName:"li"},"selector()")," interface.  This is again wrapped by another function with gets the parameters from calling the selector family function.")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const myNumberState = atom({\n  key: 'MyNumber',\n  default: 2,\n});\n\nconst myMultipliedState = selectorFamily({\n  key: 'MyMultipliedNumber',\n  get: multiplier => ({get}) => {\n    return get(myNumberState) * multiplier;\n  },\n\n  // optional set\n  set: multiplier => ({set}, newValue) => {\n    set(myNumberState, newValue / multiplier);\n  }\n});\n\nfunction MyComponent() {\n  // defaults to 2\n  const number = useRecoilValue(myNumberState);\n\n  // defaults to 200\n  const multipliedNumber = useRecoilValue(myMultipliedState(100));\n\n  return <div>...</div>;\n}\n")),Object(l.b)("h2",{id:"query-example"},"Query Example"),Object(l.b)("p",null,"Selector Families are also useful to use for passing parameters to queries:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const myDataQuery = selectorFamily({\n  key: 'MyDataQuery',\n  get: queryParameters => async ({get}) => {\n    const response = await asyncDataRequest(queryParameters);\n    if (response.error) {\n      throw response.error;\n    }\n    return response.data;\n  },\n});\n\nfunction MyComponent() {\n  const data = useRecoilValue(myDataQuery({userID: 132}));\n  return <div>...</div>;\n}\n")))}s.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||l;return n?r.a.createElement(d,o({ref:t},u,{components:n})):r.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);