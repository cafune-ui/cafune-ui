webpackJsonp([0,26],{BlhD:function(){},"S/UO":function(t,e,n){"use strict";function o(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s,p,f=n("EBst"),u=(n("5D9O"),n("9qb7")),b=n.n(u),h=n("zHj6"),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},O=(p=s=function(t){function e(){for(var e,n,o,c=arguments.length,i=Array(c),a=0;a<c;a++)i[a]=arguments[a];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.state={wrapWidth:0,offsetWidth:0,duration:0,isFirst:!0,isShow:!0},n.wrap=Object(f.createRef)(),n.content=Object(f.createRef)(),n.onAnimationEnd=function(){n.setState({isFirst:!1},function(){n.calcInfo()})},n.onRightClick=function(){"closable"===n.props.action&&n.setState({isShow:!1}),n.props.onClick&&n.props.onClick()},o=e,r(n,o)}return c(e,t),e.prototype.componentWillReceiveProps=function(t){this.props.text!==t.text&&this.calcInfo()},e.prototype.componentDidMount=function(){this.calcInfo()},e.prototype.calcInfo=function(){var t=this.wrap,e=this.content,n=this.props,o=n.scrollable,r=n.speed;if(t.current&&e.current){t=t.current,e=e.current;var c=t.getBoundingClientRect().width,i=e.getBoundingClientRect().width;o&&i>c&&this.setState({wrapWidth:c,offsetWidth:i,duration:i/r})}},e.prototype.render=function(t,e){var n=e.isFirst,r=e.duration,c=e.wrapWidth,i=e.isShow,a=t.prefix,l=t.className,s=t.text,p=t.icon,u=t.scrollable,O=t.wrapable,y=t.delay,j=t.color,w=t.bgColor,m=t.action,_=o(t,["prefix","className","text","icon","scrollable","wrapable","delay","color","bgColor","action"]),v={};(j||w)&&(v={color:j,backgroundColor:w});var g={};O||(g={paddingLeft:n?0:c+"px",animationDelay:(n?y:0)+"s",animationDuration:r+"s"});var x=void 0;if(m&&(x="closable"===m||"link"===m?Object(f.h)("span",{className:a+"-action",onClick:this.onRightClick},Object(f.h)(h.a,{icon:"closable"===m?"wrong":"arrow_right"})):"string"==typeof m?Object(f.h)("span",{className:a+"-action"},m):m),i){var C,k;return Object(f.h)("div",d({className:b()(a,l,(C={},C[a+"__wrapable"]=O,C)),style:v},_),!!p&&Object(f.h)(h.a,{icon:"string"==typeof p?p:"notice"}),Object(f.h)("div",{className:a+"-wrapper",ref:this.wrap},Object(f.h)("p",{className:b()(a+"-content",(k={},k[a+"-content__scroll"]=u&&!O,k[a+"-content__scroll__infinite"]=!n&&!O,k[a+"-content__ellipsis"]=!u&&!O,k)),onAnimationend:this.onAnimationEnd,onWebkitAnimationEnd:this.onAnimationEnd,ref:this.content,style:g},s)),x)}return null},e}(f.Component),s.defaultProps={prefix:"caf-noticebar",scrollable:!0,wrapable:!1,icon:"notice",speed:50,delay:1},p),y=O;n("BlhD");n.d(e,"default",function(){return A});var j=Object(f.h)("p",null,"基础用法"),w=Object(f.h)(y,{text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),m=Object(f.h)("p",null,"自定义图标"),_=Object(f.h)(y,{icon:!1,text:"禁用图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),v=Object(f.h)(y,{icon:"more",text:"自定义图标通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),g=Object(f.h)("p",null,"禁止滚动"),x=Object(f.h)(y,{scrollable:!1,text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),C=Object(f.h)("p",null,"多行展示"),k=Object(f.h)(y,{wrapable:!0,text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),E=Object(f.h)("p",null,"自定义样式"),P=Object(f.h)(y,{color:"#fff",bgColor:"#177cb0",icon:"more",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),R=Object(f.h)("p",null,"自定义右侧"),S=Object(f.h)(y,{action:"link",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),N=Object(f.h)(y,{action:"去看看",text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),W=Object(f.h)(y,{action:Object(f.h)("span",{style:"color: #88ada6;"},"去看看"),text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),A=function(t){function e(){return i(this,e),a(this,t.apply(this,arguments))}return l(e,t),e.prototype.render=function(){return Object(f.h)("div",{class:"caf-demo caf-demo__noticebar"},j,w,m,_,v,g,x,C,k,E,P,R,Object(f.h)(y,{action:"closable",onClick:function(){console.log("closed ")},text:"通知内容通知内容通知内容通知内容通知内容通知内容通知内容"}),S,N,W)},e}(f.Component)}});