webpackJsonp([8,27],{HUKy:function(){},Lahf:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return u});var c=n("HUKy"),l=(n.n(c),n("yAeN")),a=n.n(l),i=n("EBst"),f=(n.n(i),n("lIn8")),u=(n.n(f),function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return Object(i.h)("div",{class:"caf-demo-page"},Object(i.h)(a.a,{isFixed:!0,left:{icon:"wrong",text:"返回",clickHandler:function(){console.log("返回")}},rights:{icon:"search",text:"搜索",clickHandler:function(){console.log("搜索")}}},"标题"),Object(i.h)(a.a,{left:{icon:"wrong",text:"返回",clickHandler:function(){console.log("返回")}},rights:[{text:"搜索",badge:"22",clickHandler:function(){console.log("搜索")}},{text:"搜索",clickHandler:function(){console.log("搜索")}},{icon:"img",text:"图片",badge:!0,clickHandler:function(){console.log("图标")}}]},"标题"))},t}(i.Component))},lIn8:function(){},yAeN:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=l(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"left",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e){var r=e.icon,o=e.color,c=e.text,l=e.badge,i=e.clickHandler,u={};o&&(u.style={color:o});var s=!(n&&r||!c),g=!!l&&(0,f.h)("span",{className:"".concat(p,"-btn-badge")},"string"==typeof l&&l);return(0,f.h)("div",{className:"".concat(p,"-btn ").concat(p,"-btn__").concat(t),onClick:i},!!r&&(0,f.h)(d.default,{icon:r,color:o||b}),s&&(0,f.h)("span",a({className:"".concat(p,"-btn-text")},u,{"data-badged":l?1:0}),c),g)}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=n("EBst"),u=r(n("5D9O")),s=r(n("9qb7")),d=r(n("VkzX")),p="caf-navbar",b="#3f77f6",g={icon:"back"},h=function(e){var t=e.prefix,n=e.className,r=e.children,l=e.left,u=e.rights,d=e.isFixed,p=c(e,["prefix","className","children","left","rights","isFixed"]),b=Array.isArray(u)?u.map(function(e){return i(e,"right",!0)}):i(u,"right",!0);return(0,f.h)("div",a({className:(0,s.default)(t,n,o({},"".concat(t,"__fixed"),d))},p),i(a({},g,l)),(0,f.h)("div",{className:"".concat(t,"-title")},r&&r.length>0&&r),b)};h.defaultProps={prefix:p,left:g,rights:[]};var y=u.default.shape({icon:u.default.string,color:u.default.string,text:u.default.string,clickHandler:u.default.func,badge:u.default.oneOfType([u.default.string,u.default.bool])});h.propTypes={prefix:u.default.string,left:u.default.oneOfType([y,u.default.bool]),rights:u.default.oneOfType([u.default.arrayOf(y),y])},t.default=h}});