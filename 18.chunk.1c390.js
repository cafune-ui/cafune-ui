(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/RZ2":function(t,e,r){"use strict";r.r(e),function(t){r("oWTS");var i=r("elJr"),n=i.a.Circle,o=i.a.Rect;e.default=function(){return t("div",{style:"padding: 20px;background: #fff;"},t(i.a,{height:"70"},t(n,{radius:32,x:32,y:32}),t(o,{radius:4,width:120,height:20,x:80,y:10}),t(o,{radius:4,width:120,height:20,x:80,y:35})))}}.call(this,r("4dxh").h)},"07Nd":function(t,e,r){"use strict";(function(t){r("W0B4");var i=r("wuDM"),n=/\d+px/,o=function(e){var r=e.x,o=void 0===r?0:r,a=e.y,s=void 0===a?0:a,c=e.radius,u=void 0===c?50:c;return n.test(o)&&(o=Object(i.a)(o)),n.test(s)&&(s=Object(i.a)(s)),n.test(u)&&(u=Object(i.a)(u)),t("circle",{cx:o,cy:s,r:u})};o.defaultProps={x:0,y:0,radius:50},e.a=o}).call(this,r("4dxh").h)},E02R:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},NS33:function(t,e,r){"use strict";function i(){}function n(){}var o=r("E02R");n.resetWarningCache=i,t.exports=function(){function t(t,e,r,i,n,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:n,resetWarningCache:i};return r.PropTypes=r,r}},UQ64:function(){},W0B4:function(t,e,r){t.exports=r("NS33")()},dOSY:function(t,e,r){"use strict";(function(t){r("W0B4");var i=r("wuDM"),n=/\d+px/,o=function(e){var r=e.x,o=void 0===r?0:r,a=e.y,s=void 0===a?0:a,c=e.radius,u=void 0===c?0:c,p=e.width,d=void 0===p?50:p,f=e.height,l=void 0===f?50:f;return n.test(o)&&(o=Object(i.a)(o)),n.test(s)&&(s=Object(i.a)(s)),n.test(u)&&(u=Object(i.a)(u)),n.test(d)&&(d=Object(i.a)(d)),n.test(l)&&(l=Object(i.a)(l)),t("rect",{x:o,y:s,rx:u,ry:u,width:d,height:l})};o.defaultProps={x:0,y:0,radius:50},e.a=o}).call(this,r("4dxh").h)},elJr:function(t,e,r){"use strict";(function(t){function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n=r("4dxh"),o=(r("W0B4"),r("07Nd")),a=r("dOSY"),s=r("wuDM"),c=/\d+px/,u=function(){return Math.random().toString(36).substring(2)},p=function(e){function r(){return e.apply(this,arguments)||this}var i,n;return n=e,(i=r).prototype=Object.create(n.prototype),i.prototype.constructor=i,i.__proto__=n,r.prototype.render=function(e){var r=e.width,i=e.height,n=e.style,o=e.speed,a=e.children,p=e.primaryColor,d=e.secondaryColor,f=u(),l=u();return c.test(r)&&(r=Object(s.a)(r)),c.test(i)&&(i=Object(s.a)(i)),t("svg",{width:r,height:i,version:"1.1",style:n,preserveAspectRatio:"xMidYMid meet"},t("rect",{style:{fill:"url(#"+l+")"},"clip-path":"url(#"+f+")",x:"0",y:"0",height:i,width:r}),t("defs",null,t("clipPath",{id:""+f},a),t("linearGradient",{id:""+l},t("stop",{offset:"0%","stop-color":p},t("animate",{attributeName:"offset",values:"-2; 1",dur:o+"s",repeatCount:"indefinite"})),t("stop",{offset:"50%","stop-color":d},t("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:o+"s",repeatCount:"indefinite"})),t("stop",{offset:"100%","stop-color":p},t("animate",{attributeName:"offset",values:"-1; 2",dur:o+"s",repeatCount:"indefinite"})))))},r}(n.Component);i(p,"Circle",o.a),i(p,"Rect",a.a),i(p,"defaultProps",{speed:2,width:"100%",height:"9.28rem",primaryColor:"#f5f5f5",secondaryColor:"#eaeaea"}),e.a=p}).call(this,r("4dxh").h)},oWTS:function(t,e,r){"use strict";r("UQ64")},wuDM:function(t,e){"use strict";e.a=function(t){return(t=Number(t.replace("px","")))/14+"rem"}}}]);