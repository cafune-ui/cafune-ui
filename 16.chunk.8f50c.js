webpackJsonp([16],{Ici7:function(){},"XZA+":function(e,t,n){n("I7kJ"),n("Ici7")},qlsu:function(e,t,n){"use strict";function o(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return d});var i=n("XZA+"),u=(n.n(i),n("zLkM")),a=n.n(u),l=n("EBst"),f=(n.n(l),Object(l.h)("div",null,Object(l.h)("p",{class:"caf-demo-title"},"默认用法"),Object(l.h)(a.a,{placeholder:"请输入关键词"}))),p=Object(l.h)("p",{class:"caf-demo-title"},"自定义值"),s=Object(l.h)("p",{class:"caf-demo-title"},"设置回调"),h=Object(l.h)("p",{class:"caf-demo-title"},"定义右侧按钮"),d=function(e){function t(){for(var t,n,o,c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return t=n=r(this,e.call.apply(e,[this].concat(i))),n.state={val:"关键词"},n.focusInput=function(){n.inpRef.focus()},o=t,r(n,o)}return c(t,e),t.prototype.render=function(e,t){var n=this,r=t.val;return o(e),Object(l.h)("div",null,f,Object(l.h)("div",null,p,Object(l.h)(a.a,{placeholder:"请输入关键词",value:r,onChange:function(e){return n.setState({val:e})}})),Object(l.h)("div",null,s,Object(l.h)(a.a,{placeholder:"请输入关键词",onConfirm:function(e){return alert("确认，输入值为"+e)},onChange:function(e){return console.log(e)}})),Object(l.h)("div",null,h,Object(l.h)(a.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"cancel",onClick:function(){console.log("action cancel")}}}),Object(l.h)(a.a,{placeholder:"请输入关键词",onConfirm:function(e){return alert(e)},onCancel:function(){return alert("取消")},action:{type:"confirm",onClick:function(){console.log("action confirm")}}}),Object(l.h)(a.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"custom",text:"试试手气",keepShow:!1,onClick:function(){alert("试试手气")}}})),Object(l.h)("div",null,Object(l.h)("p",{class:"caf-demo-title",onClick:this.focusInput},"点击聚焦"),Object(l.h)(a.a,{placeholder:"请输入关键词",ref:function(e){return n.inpRef=e}})))},t}(l.Component)},zLkM:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,o,r=i(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function f(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1)}function y(e){window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var v=n("EBst"),O=o(n("5D9O")),g=o(n("9qb7")),C=o(n("VkzX")),w={confirm:{text:"搜索",keepShow:!0},cancel:{text:"取消",keepShow:!1},custom:{text:"确定",keepShow:!0}},j=function(e){function t(e){var n;return n=f(this,p(t).call(this,e)),m(s(n),"actionSize",0),m(s(n),"onBlurTimeout",void 0),m(s(n),"clear",function(){"value"in n.props||n.setState({value:""}),n.props.onChange&&n.props.onChange("")}),m(s(n),"onChange",function(e){var t=e.target.value;"value"in n.props||n.setState({value:t}),n.props.onChange&&n.props.onChange(t)}),m(s(n),"onConfirm",function(e){e&&e.preventDefault();var t="";t=n.inputRef&&n.inputRef.current?n.inputRef.current.value:n.state.value,n.props.onConfirm&&n.props.onConfirm(t)}),m(s(n),"onCancel",function(){n.props.onCancel?n.props.onCancel(n.state.value||""):n.clear()}),m(s(n),"onFocus",function(){n.setState({focus:!0})}),m(s(n),"onBlur",function(){n.onBlurTimeout=b(function(){n.blurFromOnClear||document.activeElement!==n.inputRef&&n.setState({focus:!1}),n.blurFromOnClear=!1})}),m(s(n),"focus",function(){n.inputRef&&n.inputRef.current&&n.inputRef.current.focus()}),m(s(n),"inputRef",(0,v.createRef)()),m(s(n),"actionRef",(0,v.createRef)()),m(s(n),"formRef",(0,v.createRef)()),n.state={value:e.value||"",focus:!1},n}return h(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){"value"in e&&e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){if(this.actionRef&&this.actionRef.current){var e=this.props.action;e=u({},w[e.type],e);var t=this.state.focus;if(!e.keepShow&&!t){var n=this.actionRef.current,o=window.getComputedStyle(n),r=n.offsetWidth+parseInt(o.marginLeft,10);n.style="margin-right: ".concat(-1*r,"px"),this.actionSize=r}}}},{key:"componentWillUnmount",value:function(){this.onBlurTimeout&&(y(this.onBlurTimeout),this.onBlurTimeout=null)}},{key:"render",value:function(e,t){var n=this,o=t.value,r=t.focus,i=e.prefix,a=e.className,l=e.placeholder,f=e.maxLength,p=e.action,s=e.leftIcon,h=c(e,["prefix","className","placeholder","maxLength","action","leftIcon"]),d=!1;return p&&(p=u({},w[p.type],p),d=!p.keepShow&&!r),(0,v.h)("form",u({className:(0,g.default)(i,a),onSubmit:this.onConfirm},h),(0,v.h)("div",{className:"".concat(i,"-input")},(0,v.h)(C.default,{icon:s}),(0,v.h)("input",{type:"search",placeholder:l,value:o,maxLength:f,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:this.inputRef})),!!p&&(0,v.h)("div",{className:(0,g.default)("".concat(i,"-action"),m({},"".concat(i,"-action__hide"),d)),onClick:function(){"cancel"===p.type?n.onCancel():"confirm"===p.type&&n.onConfirm(),p.onClick()},style:{marginRight:d?"".concat(-1*this.actionSize,"px"):0},ref:this.actionRef},p.text))}}]),t}(v.Component);m(j,"defaultProps",{prefix:"caf-search",align:"center",leftIcon:"search"}),m(j,"propTypes",{prefix:O.default.string,placeholder:O.default.string,maxLength:O.default.number,onConfirm:O.default.func,onCancel:O.default.func,onChange:O.default.func,leftIcon:O.default.string,addition:O.default.shape({icon:O.default.string,onClick:O.default.func}),action:O.default.shape({type:O.default.oneOf(["confirm","cancel","custom"]),text:O.default.string,keepShow:O.default.bool,onClick:O.default.func})}),t.default=j}});