(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(1),o=(n(0),n(157));const a={title:"Installation"},i={id:"introduction/installation",title:"Installation",description:'The Recoil package lives in <a href="https://www.npmjs.com/get-npm" target="_blank">npm</a>. To install the latest stable version, run the following command:',source:"@site/docs/introduction/installation.md",permalink:"/docs/introduction/installation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/installation.md",sidebar:"someSidebar",previous:{title:"Core Concepts",permalink:"/docs/introduction/core-concepts"},next:{title:"Getting Started",permalink:"/docs/introduction/getting-started"}},c=[{value:"ESLint",id:"eslint",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Recoil package lives in ",Object(o.b)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank"},"npm"),". To install the latest stable version, run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install recoil\n")),Object(o.b)("p",null,"Or if you're using ",Object(o.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank"},"yarn"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"yarn add recoil\n")),Object(o.b)("h2",{id:"eslint"},"ESLint"),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"}),"eslint-plugin-react-hooks")," in your project. For example, with an eslint config like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// previous .eslint config\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": "warn"\n  }\n}\n')),Object(o.b)("p",null,"It is recommended to add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"docs/api-reference/core/useRecoilCallback"}),"useRecoilCallback")," to the list of ",Object(o.b)("inlineCode",{parentName:"p"},"additionalHooks"),". With this change, ESLint will warn when the dependencies passed to ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilCallback")," are specified incorrectly and suggests a fix.  The format of ",Object(o.b)("inlineCode",{parentName:"p"},"additionalHooks")," is a regex string."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'// modified .eslint config\n{\n  "plugins": [\n    "react-hooks"\n  ],\n  "rules": {\n    "react-hooks/rules-of-hooks": "error",\n    "react-hooks/exhaustive-deps": [\n      "warn", {\n        "additionalHooks": "useRecoilCallback"\n      }\n    ]\n  }\n}\n')))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,c({ref:t},s,{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);