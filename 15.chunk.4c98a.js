webpackJsonp([15],{OsiV:function(e,t,n){n("bYsS")},aBhO:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return d});var l=n("qhW6"),u=(n.n(l),n("4iRs")),i=n.n(u),c=n("OsiV"),f=(n.n(c),n("yAYD")),s=n.n(f),p=n("EBst"),d=(n.n(p),function(e){function t(){for(var t,n,a,o=arguments.length,l=Array(o),u=0;u<o;u++)l[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(l))),n.state={val1:1,val2:1,val3:4,val4:1},n.changeHandler=function(e){return function(t){var a;n.setState((a={},a[e]=t,a))}},a=t,r(n,a)}return o(t,e),t.prototype.render=function(e,t){var n=t.val1,r=t.val2,o=t.val3,l=t.val4;return a(e),Object(p.h)("div",null,Object(p.h)(i.a,{title:"基础用法",value:Object(p.h)(s.a,{value:n,onChange:this.changeHandler("val1")}),middle:!0}),Object(p.h)(i.a,{title:"自定义步进",value:Object(p.h)(s.a,{value:r,step:3,onChange:this.changeHandler("val2")}),middle:!0}),Object(p.h)(i.a,{title:"禁用状态",value:Object(p.h)(s.a,{value:r,step:3,disabled:!0,onChange:this.changeHandler("val2")}),middle:!0}),Object(p.h)(i.a,{title:"限定范围(2-8)",value:Object(p.h)(s.a,{value:o,min:2,max:8,onChange:this.changeHandler("val3")}),middle:!0}),Object(p.h)(i.a,{title:"限定整数",value:Object(p.h)(s.a,{value:l,min:-1/0,integerOnly:!0,onChange:this.changeHandler("val4")}),middle:!0}),Object(p.h)(i.a,{title:"只读",value:Object(p.h)(s.a,{value:l,readOnly:!0,onChange:this.changeHandler("val4")}),middle:!0}))},t}(p.Component))},bYsS:function(){},yAYD:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=u(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?p(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=n("EBst"),y=a(n("5D9O")),m=a(n("9qb7")),O=function(e){function t(){for(var e,n,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=f(this,(e=s(t)).call.apply(e,[this].concat(r))),h(p(n),"minus",function(){var e=n.props,t=e.onChange,a=e.value,r=e.step,o=e.min,l=e.disabled;if(a!=o&&!l){t(a-r<=o?o:a-r,-1)}}),h(p(n),"plus",function(){var e=n.props,t=e.onChange,a=e.value,r=e.step,o=e.max,l=e.disabled;if(a!=o&&!l){t(a+r>=o?o:a+r,-1)}}),h(p(n),"onInputChange",function(e){var t,a=n.props,r=a.value,o=a.min,l=a.max,u=a.integerOnly,i=a.onChange,c=e.target,f=c.value;f!=+f?t=r:(+f>l&&(t=l),+f<o&&(t=o),u&&+f%1!=0&&(t=Math.round(f))),t&&t!==f&&(console.log(t),c.value=t),i(c.value,0)}),n}return d(t,e),c(t,[{key:"render",value:function(e){var t=e.prefix,n=e.className,a=e.disabled,r=e.step,u=e.min,i=e.max,c=e.value,f=e.readOnly,s=l(e,["prefix","className","disabled","step","min","max","value","readOnly"]),p=c-r<u||c===u,d=c+r>i||c===i;return(0,v.h)("div",o({className:(0,m.default)(t,n)},s),(0,v.h)("span",{className:(0,m.default)("".concat(t,"-btn"),"".concat(t,"-btn__minus"),h({},"".concat(t,"-btn__disabled"),a||p)),onClick:this.minus}),(0,v.h)("div",{className:(0,m.default)("".concat(t,"-input"),h({},"".concat(t,"-input__disabled"),a))},f?(0,v.h)("p",{className:"".concat(t,"-input-content")},c):(0,v.h)("input",{"aria-valuemin":u,"aria-valuemax":i,disabled:a,"aria-valuenow":c,value:c,onKeyUp:this.onInputChange})),(0,v.h)("span",{className:(0,m.default)("".concat(t,"-btn"),"".concat(t,"-btn__plus"),h({},"".concat(t,"-btn__disabled"),a||d)),onClick:this.plus}))}}]),t}(v.Component);h(O,"defaultProps",{prefix:"caf-stepper",step:1,disabled:!1,integerOnly:!1,readOnly:!1,min:0,max:1/0}),h(O,"propTypes",{prefix:y.default.string,value:y.default.number.isRequired,min:y.default.number,max:y.default.number,step:y.default.number,disabled:y.default.bool,integerOnly:y.default.bool,readOnly:y.default.bool,onChange:y.default.func}),t.default=O}});