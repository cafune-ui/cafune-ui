(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/RZ2":function(t,e,r){"use strict";r.r(e),function(t){r("QB2y");var n=r("FHlF"),o=n.a.Circle,i=n.a.Rect;e.default=function(){return t("div",{style:"padding: 20px;background: #fff;"},t(n.a,{height:"70",remRate:14},t(o,{radius:32,x:32,y:32}),t(i,{radius:4,width:120,height:20,x:80,y:10}),t(i,{radius:4,width:120,height:20,x:80,y:35})))}}.call(this,r("4dxh").h)},CAmp:function(t,e,r){"use strict";(function(t){var n=r("4dxh"),o=r("uZ2S"),i=/\d+px/;e.a=function(e){function r(){for(var t,r,n,o,i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a))||this,r=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t),o=void 0,(n="defaultProps")in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}var n,a;return a=e,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,r.prototype.render=function(e,r,n){var a=e.x,u=e.y,c=e.radius;!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(r);var s=n.remRate;return s&&s>0&&(i.test(a)&&(a=Object(o.a)(a)),i.test(u)&&(u=Object(o.a)(u)),i.test(c)&&(c=Object(o.a)(c))),t("circle",{cx:a,cy:u,r:c})},r}(n.Component)}).call(this,r("4dxh").h)},FHlF:function(t,e,r){"use strict";(function(t){function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=r("4dxh"),i=r("CAmp"),a=r("NpkV"),u=r("uZ2S"),c=/\d+px/,s=function(){return Math.random().toString(36).substring(2)},p=function(e){function r(){return e.apply(this,arguments)||this}var n,o;o=e,(n=r).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var i=r.prototype;return i.getChildContext=function(){return{remRate:this.props.remRate||0}},i.render=function(e){var r=e.width,n=e.height,o=e.remRate,i=e.style,a=e.speed,p=e.children,l=e.primaryColor,d=e.secondaryColor,f=s(),h=s();return o&&o>0&&(c.test(r)&&(r=Object(u.a)(r)),c.test(n)&&(n=Object(u.a)(n))),t("svg",{width:r,height:n,version:"1.1",style:i,preserveAspectRatio:"xMidYMid meet"},t("rect",{style:{fill:"url(#"+h+")"},"clip-path":"url(#"+f+")",x:"0",y:"0",height:n,width:r}),t("defs",null,t("clipPath",{id:""+f},p),t("linearGradient",{id:""+h},t("stop",{offset:"0%","stop-color":l},t("animate",{attributeName:"offset",values:"-2; 1",dur:a+"s",repeatCount:"indefinite"})),t("stop",{offset:"50%","stop-color":d},t("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:a+"s",repeatCount:"indefinite"})),t("stop",{offset:"100%","stop-color":l},t("animate",{attributeName:"offset",values:"-1; 2",dur:a+"s",repeatCount:"indefinite"})))))},r}(o.Component);n(p,"Circle",i.a),n(p,"Rect",a.a),n(p,"defaultProps",{speed:2,remRate:0,width:"100%",height:"9.28rem",primaryColor:"#f5f5f5",secondaryColor:"#eaeaea"}),e.a=p}).call(this,r("4dxh").h)},NpkV:function(t,e,r){"use strict";(function(t){var n=r("4dxh"),o=r("uZ2S"),i=/\d+px/;e.a=function(e){function r(){for(var t,r,n,o,i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return t=e.call.apply(e,[this].concat(a))||this,r=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t),o=void 0,(n="defaultProps")in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}var n,a;return a=e,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,r.prototype.render=function(e,r,n){var a=e.x,u=e.y,c=e.radius,s=e.width,p=e.height;!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(r);var l=n.remRate;return l&&l>0&&(i.test(a)&&(a=Object(o.a)(a)),i.test(u)&&(u=Object(o.a)(u)),i.test(c)&&(c=Object(o.a)(c)),i.test(s)&&(s=Object(o.a)(s)),i.test(p)&&(p=Object(o.a)(p))),t("rect",{x:a,y:u,rx:c,ry:c,width:s,height:p})},r}(n.Component)}).call(this,r("4dxh").h)},QB2y:function(t,e,r){"use strict";r("tsw9")},tsw9:function(){},uZ2S:function(t,e){"use strict";e.a=function(t,e){return void 0===e&&(e=14),(t=Number(t.replace("px","")))/e+"rem"}}}]);