webpackJsonp([12],{ICgN:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=i(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?d(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return e&&-1!==e.indexOf("/")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=n("EBst"),O=o(n("5D9O")),m=o(n("9qb7")),g=o(n("PD5J")),k=o(n("VkzX")),j=(0,v.h)(k.default,{icon:"check"}),x=function(e){function t(e){var n;return n=f(this,s(t).call(this,e)),b(d(n),"state",{checked:!1}),b(d(n),"onClick",function(){var e=n.props,t=e.value,o=e.disabled,r=e.handleChange,c=n.context,a=c.groupChange,i=c.allDisabled,l=c.canCheck,u=!l||l(t);o||i||!u||(n.setState({checked:!n.state.checked}),a?a(t):r&&r(t))}),n}return p(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.value,n=e.checked,o=void 0!==n&&n,r=this.context||{},c=r.model,a=void 0===c?[]:c;this.setState({checked:o||-1!==a.indexOf(t)})}},{key:"componentWillReceiveProps",value:function(e){"checked"in e&&!this.context.model&&this.setState({checked:e.checked})}},{key:"render",value:function(e,t){var n,o=t.checked,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.allDisabled,l=void 0!==i&&i,u=e.prefix,f=e.value,s=e.id,d=e.className,p=e.icons,h=e.children,O=e.checkedColor,g=e.disabled,x=a(e,["prefix","value","id","className","icons","children","checkedColor","disabled"]),C={};O&&o&&(C.backgroundColor=O);var _=g||l,P=j,w=!1;return p&&("actived"in p&&o&&(w=y(p.actived),P=(0,v.h)(k.default,{icon:p.actived,size:w?"14px":"12px"})),"inactive"in p&&!o&&(w=y(p.inactive),P=(0,v.h)(k.default,{icon:p.inactive,size:w?"14px":"12px"}))),(0,v.h)("div",c({className:(0,m.default)(u,d,(n={},b(n,"".concat(u,"__checked"),o),b(n,"".concat(u,"__disabled"),_),n)),onClick:this.onClick},x),(0,v.h)("div",{className:"".concat(u,"-input")},(0,v.h)("input",{type:"checkbox",id:s,checked:o,disabled:g,value:f}),(0,v.h)("span",{className:(0,m.default)("".concat(u,"-input-inner"),b({},"".concat(u,"-input-inner__custom"),w)),style:C},P)),(0,v.h)("div",{className:"".concat(u,"-label")},h))}}]),t}(v.Component);b(x,"CheckboxGroup",g.default),b(x,"defaultProps",{prefix:"caf-checkbox",checked:!1,disabled:!1}),b(x,"propTypes",{prefix:O.default.string,icons:O.default.shape({actived:O.default.string,inactive:O.default.string}),value:O.default.oneOfType([O.default.string,O.default.number]).isRequired,id:O.default.string,checked:O.default.bool,checkedColor:O.default.string,disabled:O.default.bool,handleChange:O.default.func}),t.default=x},PD5J:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=i(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?d(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var y=n("EBst"),v=o(n("5D9O")),O=o(n("9qb7")),m=function(e){function t(e){var n;return n=f(this,s(t).call(this,e)),b(d(n),"seletedData",[]),b(d(n),"canCheck",function(e){var t=n.props.maxSelect,o=d(n),r=o.seletedData;return!(t>0&&-1===r.indexOf(e)&&r.length===t)}),b(d(n),"onChange",function(e){var t=d(n),o=t.seletedData,r=o.indexOf(e);-1===r?o.push(e):o.splice(r,1),n.seletedData=o,n.props.handleChange&&n.props.handleChange(o)}),n.seletedData=e.model,n}return p(t,e),u(t,[{key:"getChildContext",value:function(){var e=this.props;return{model:e.model,allDisabled:e.disabled,groupChange:this.onChange,canCheck:this.canCheck}}},{key:"render",value:function(e){var t=e.prefix,n=e.children,o=e.className,r=a(e,["prefix","children","className"]);return(0,y.h)("div",c({className:(0,O.default)(t,o)},r),n)}}]),t}(y.Component);b(m,"defaultProps",{prefix:"caf-checkbox-group",disabled:!1,maxSelect:0}),b(m,"propTypes",{prefix:v.default.string,model:v.default.arrayOf(v.default.oneOfType([v.default.string,v.default.number])),disabled:v.default.bool,maxSelect:v.default.number,handleChange:v.default.func}),t.default=m},XXxW:function(e,t,n){"use strict";function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return O});var a=n("cF7N"),i=(n.n(a),n("ICgN")),l=n.n(i),u=n("qhW6"),f=(n.n(u),n("4iRs")),s=n.n(f),d=n("EBst"),p=(n.n(d),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),h=s.a.CellGroup,b=l.a.CheckboxGroup,y=Object(d.h)("p",{class:"caf-demo-title"},"单独使用"),v=Object(d.h)("p",{class:"caf-demo-title"},"与Cell 组件一起使用"),O=function(e){function t(){for(var t,n,o,c=arguments.length,a=Array(c),i=0;i<c;i++)a[i]=arguments[i];return t=n=r(this,e.call.apply(e,[this].concat(a))),n.state={check:"hi",checks:["hi","hello"],checkList:[{value:"hi",text:"自定义颜色",checkedColor:"#369"},{value:"holla",text:"开启禁用",disabled:!0},{value:"bonjour",text:"自定义激活图标",icons:{actived:"more"}},{value:"hello",text:"自定义激活及未激活图标",icons:{inactive:"https://image.flaticon.com/icons/png/128/2026/2026450.png",actived:"https://image.flaticon.com/icons/png/128/2026/2026462.png"}}]},o=t,r(n,o)}return c(t,e),t.prototype.render=function(e,t){var n=t.check,r=t.checks,c=t.checkList;return o(e),Object(d.h)("div",null,y,Object(d.h)("div",{class:"caf-demo-block"},c.map(function(e){return Object(d.h)(l.a,p({checked:n===e.value},e,{handleChange:function(e){console.log(e)},key:"s-"+e.value}),e.text)})),v,c.map(function(e){return Object(d.h)(s.a,{title:"test",value:Object(d.h)(l.a,p({checked:n===e.value},e,{handleChange:function(e){console.log(e)}}),e.text),key:"s-c-"+e.id})}),Object(d.h)(h,{title:"复选框组"},Object(d.h)(b,{model:r,handleChange:function(e){return console.log(e)}},c.map(function(e){return Object(d.h)(s.a,{title:"test",value:Object(d.h)(l.a,e,e.text),key:"g-"+e.value})}))),Object(d.h)(h,{title:"复选框组（最大可选为2）"},Object(d.h)(b,{model:r,handleChange:function(e){return console.log(e)},maxSelect:2},c.map(function(e){return Object(d.h)(s.a,{title:"test",value:Object(d.h)(l.a,e,e.text),key:"g-"+e.value})}))))},t}(d.Component)},cF7N:function(e,t,n){n("I7kJ"),n("rPJL")},rPJL:function(){}});