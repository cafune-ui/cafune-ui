(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5jQP":function(){},O94r:function(e,n){var t;!function(){"use strict";function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var c=r.apply(null,t);c&&e.push(c)}else if("object"===i)for(var a in t)o.call(t,a)&&t[a]&&e.push(a)}}return e.join(" ")}var o={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},OaM3:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var r=!("undefined"==typeof window||!window),o=function(e,n){void 0===n&&(n="body"),r&&document.querySelector(n)&&(document.querySelector(n).style.paddingBottom=e)}},"Q+hs":function(e,n,t){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t("O94r"),a=t.n(c),u=function(n){var t,c=n.prefix,u=n.className,l=n.icon,s=n.color,f=n.size,p=n.tag,h=n.customPrefix,d=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(n,["prefix","className","icon","color","size","tag","customPrefix"]),m=function(e){return e&&-1!==e.indexOf("/")}(l),v=a()(c,u,h,((t={})[h+"-"+l]=!m,t)),y=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(t,!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},d);m?y.style="width: "+(f=f||"16px")+";height: "+f+";line-height: "+f+";":(s&&(y.style=(y.style||"")+"color: "+s+";"),f&&(y.style=(y.style||"")+"font-size: "+f+";"));var g=p;return m?e(g,r({className:v},y),m&&e("img",{src:l,className:c+"-img"})):e(g,r({className:v},y))};u.defaultProps={prefix:"caf-icons",customPrefix:"caf-icon",tag:"i"},n.a=u}).call(this,t("4dxh").h)},bI39:function(e,n,t){"use strict";t.r(n),function(e){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"default",(function(){return c}));t("nksK");var i=t("rWRV"),c=function(n){function t(){for(var e,t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return o(r(e=n.call.apply(n,[this].concat(i))||this),"state",{val:"关键词"}),o(r(e),"focusInput",(function(){e.inpRef.focus()})),e}var c,a;return a=n,(c=t).prototype=Object.create(a.prototype),c.prototype.constructor=c,c.__proto__=a,t.prototype.render=function(n,t){var r=this;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(n);var o=t.val;return e("div",null,e("div",null,e("p",{class:"caf-demo-title"},"默认用法"),e(i.a,{placeholder:"请输入关键词"})),e("div",null,e("p",{class:"caf-demo-title"},"自定义值"),e(i.a,{placeholder:"请输入关键词",value:o,onChange:function(e){return r.setState({val:e})}})),e("div",null,e("p",{class:"caf-demo-title"},"设置回调"),e(i.a,{placeholder:"请输入关键词",onConfirm:function(e){return alert("确认，输入值为"+e)},onChange:function(e){return console.log(e)}})),e("div",null,e("p",{class:"caf-demo-title"},"定义右侧按钮"),e(i.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"cancel",onClick:function(){console.log("action cancel")}}}),e(i.a,{placeholder:"请输入关键词",onConfirm:function(e){return alert(e)},onCancel:function(){return alert("取消")},action:{type:"confirm",onClick:function(){console.log("action confirm")}}}),e(i.a,{placeholder:"请输入关键词",onConfirm:function(){return alert("确认")},onCancel:function(){return alert("取消")},action:{type:"custom",text:"试试手气",keepShow:!1,onClick:function(){alert("试试手气")}}})),e("div",null,e("p",{class:"caf-demo-title",onClick:this.focusInput},"点击聚焦"),e(i.a,{placeholder:"请输入关键词",ref:function(e){return r.inpRef=e}})))},t}(t("4dxh").Component)}.call(this,t("4dxh").h)},nksK:function(e,n,t){"use strict";t("ruW5"),t("5jQP")},rWRV:function(e,n,t){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t("4dxh"),a=t("O94r"),u=t.n(a),l=t("Q+hs"),s=t("OaM3"),f={confirm:{text:"搜索",keepShow:!0},cancel:{text:"取消",keepShow:!1},custom:{text:"确定",keepShow:!0}},p=function(n){function t(e){var t;return i(o(t=n.call(this,e)||this),"actionSize",0),i(o(t),"onBlurTimeout",void 0),i(o(t),"clear",(function(){"value"in t.props||t.setState({value:""}),t.props.onChange&&t.props.onChange("")})),i(o(t),"onChange",(function(e){var n=e.target.value;"value"in t.props||t.setState({value:n}),t.props.onChange&&t.props.onChange(n)})),i(o(t),"onConfirm",(function(e){var n;e&&e.preventDefault(),n=t.inputRef&&t.inputRef.current?t.inputRef.current.value:t.state.value,t.props.onConfirm&&t.props.onConfirm(n)})),i(o(t),"onCancel",(function(){t.props.onCancel?t.props.onCancel(t.state.value||""):t.clear()})),i(o(t),"onFocus",(function(){t.setState({focus:!0})})),i(o(t),"blurFromOnClear",!0),i(o(t),"onBlur",(function(){var e;t.onBlurTimeout=(e=function(){!t.blurFromOnClear&&s.a&&document.activeElement!==t.inputRef&&t.setState({focus:!1}),t.blurFromOnClear=!1},window.requestAnimationFrame?window.requestAnimationFrame(e):window.setTimeout(e,1))})),i(o(t),"focus",(function(){t.inputRef&&t.inputRef.current&&t.inputRef.current.focus()})),i(o(t),"inputRef",Object(c.createRef)()),i(o(t),"actionRef",Object(c.createRef)()),i(o(t),"formRef",Object(c.createRef)()),t.state={value:e.value||"",focus:!1},t}var a,p;p=n,(a=t).prototype=Object.create(p.prototype),a.prototype.constructor=a,a.__proto__=p;var h=t.prototype;return h.componentWillReceiveProps=function(e){"value"in e&&e.value!==this.state.value&&this.setState({value:e.value})},h.componentDidMount=function(){this.componentDidUpdate()},h.componentDidUpdate=function(){if(this.actionRef&&this.actionRef.current&&s.a){var e=this.props.action;if(!(e=r({},f[e.type],e)).keepShow&&!this.state.focus){var n=this.actionRef.current,t=window.getComputedStyle(n),o=n.offsetWidth+parseInt(t.marginLeft,10);n.style="margin-right: "+-1*o+"px",this.actionSize=o}}},h.componentWillUnmount=function(){var e;this.onBlurTimeout&&s.a&&(e=this.onBlurTimeout,window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.clearTimeout(e),this.onBlurTimeout=null)},h.render=function(n,t){var o,i=this,c=t.value,a=t.focus,s=n.prefix,p=n.className,h=n.placeholder,d=n.maxLength,m=n.action,v=n.leftIcon,y=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(o[t]=e[t]);return o}(n,["prefix","className","placeholder","maxLength","action","leftIcon"]),g=!1;return m&&(g=!(m=r({},f[m.type],m)).keepShow&&!a),e("form",r({className:u()(s,p),onSubmit:this.onConfirm},y),e("div",{className:s+"-input"},e(l.a,{icon:v}),e("input",{type:"search",placeholder:h,value:c,maxLength:d,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,ref:this.inputRef})),!!m&&e("div",{className:u()(s+"-action",(o={},o[s+"-action__hide"]=g,o)),onClick:function(){"cancel"===m.type?i.onCancel():"confirm"===m.type&&i.onConfirm(),m.onClick()},style:{marginRight:g?-1*this.actionSize+"px":0},ref:this.actionRef},m.text))},t}(c.Component);i(p,"defaultProps",{prefix:"caf-search",align:"center",leftIcon:"search"}),n.a=p}).call(this,t("4dxh").h)},ruW5:function(){}}]);