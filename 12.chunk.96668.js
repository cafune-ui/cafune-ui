(window.webpackJsonp=window.webpackJsonp||[]).push([[12,30],{"0YaK":function(e,t,r){"use strict";r("8U1p")},"8U1p":function(){},Kx16:function(e,t,r){"use strict";(function(e){t.a={step:{cSize:"60px",cColor:"#ccc",func:function(t,r){return e("svg",{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 40",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",style:"fill: "+(t||this.cColor)+";width:"+(r||this.cSize)+";"},e("circle",{stroke:"none",cx:"25",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})),e("circle",{stroke:"none",cx:"50",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})),e("circle",{stroke:"none",cx:"75",cy:20,r:"6"},e("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})))}},spinner:{cColor:"#ccc",cSize:"32px",func:function(t,r){var i=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:r||i,height:r||i,viewBox:"0 0 38 38",stroke:t||this.cColor},e("g",{fill:"none",fillRule:"evenodd"},e("g",{transform:"translate(1 1)",strokeWidth:"2"},e("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),e("path",{d:"M36 18c0-9.94-8.06-18-18-18",transform:"rotate(125.364 18 18)"},e("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}},ripple:{cColor:"#ccc",cSize:"60px",func:function(t,r){var i=this.cSize;return e("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:r||i,height:r||i},viewBox:"0 0 45 45",stroke:t||this.cColor},e("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},e("circle",{cx:"22",cy:"22",r:"13.2878",strokeOpacity:"0"},e("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"21.2878",strokeOpacity:"0"},e("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),e("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),e("circle",{cx:"22",cy:"22",r:"5.46583"},e("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}}}}).call(this,r("4dxh").h)},O94r:function(e,t){var r;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=i.apply(null,r);o&&e.push(o)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var n={}.hasOwnProperty;e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},csOB:function(e,t,r){"use strict";r.r(t),function(e){r("0YaK");var i=r("fbC/");r("jqrg");t.default=function(){return e("div",{class:"demo-loading"},e("p",null,"加载类型"),e(i.a,null),e(i.a,{type:"step"}),e(i.a,{type:"ripple"}),e("p",null,"自定义颜色"),e(i.a,{color:"#1989fa"}),e(i.a,{type:"step",color:"#1989fa"}),e(i.a,{type:"ripple",color:"#1989fa"}),e("p",null,"自定义尺寸"),e(i.a,{size:"40px"}),e(i.a,{type:"step",size:"60px"}),e(i.a,{type:"ripple",size:"50px"}),e("p",null,"加载文案及自定义文字大小"),e(i.a,{text:"Loading..."}),e(i.a,{text:"Loading...",textSize:"16px"}),e("p",null,"垂直文案"),e(i.a,{text:"加载",vertical:!0}))}}.call(this,r("4dxh").h)},"fbC/":function(e,t,r){"use strict";(function(e){function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var n,a,o,c=r("4dxh"),s=r("O94r"),l=r.n(s),u=r("Kx16"),p=function(t){function r(){return t.apply(this,arguments)||this}var n,a;a=t,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var o=r.prototype;return o.getSvg=function(e){var t=this.props;return u.a[e]&&u.a[e].func(t.color,t.size)},o.render=function(t){var r,n=t.className,a=t.prefix,o=t.type,c=t.text,s=t.vertical,u=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t.indexOf(r=a[i])>=0||(n[r]=e[r]);return n}(t,["className","prefix","type","text","vertical"]),p=this.getSvg(o);return!!p&&e("div",i({className:l()(a,n,(r={},r[a+"__vertical"]=s,r))},u),p,!!c&&e("span",{className:a+"-text"},c))},r}(c.Component);o={prefix:"caf-loading",type:"spinner",vertical:!1},(a="defaultProps")in(n=p)?Object.defineProperty(n,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[a]=o,t.a=p}).call(this,r("4dxh").h)},jqrg:function(){}}]);