(window.webpackJsonp=window.webpackJsonp||[]).push([[17,28],{"/lob":function(t,n,o){"use strict";(function(t){function e(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var c=o("4dxh"),i=o("jlFk"),a=function(n){function o(){for(var t,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r(e(t=n.call.apply(n,[this].concat(i))||this),"lazyLoadIns",void 0),r(e(t),"imgsInfo",[]),r(e(t),"container",void 0),r(e(t),"onScroll",(function(){t.updateLazy()})),r(e(t),"lazyContainer",Object(c.createRef)()),t}var a,s;s=n,(a=o).prototype=Object.create(s.prototype),a.prototype.constructor=a,a.__proto__=s;var u=o.prototype;return u.componentDidMount=function(){this.container=this.lazyContainer.current,this.updateImgs(),window.addEventListener("scroll",this.onScroll)},u.componentDidUpdate=function(){this.updateImgs()},u.updateImgs=function(){if(this.container){for(var t=[],n=this.container.querySelectorAll("."+this.props.imgClass)||[],o=0,e=n.length;o<e;o+=1){var r=n[o];r.dataset.src!==r.src&&t.push({dom:r,src:r.dataset.src})}this.imgsInfo=t,this.updateLazy()}},u.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},u.updateLazy=function(){this.imgsInfo.forEach((function(t){t.dom.src!==t.src&&Object(i.a)(t.dom)&&(t.dom.src=t.src)}))},u.render=function(n){return t("div",{ref:this.lazyContainer,className:"caf-lazyload"},n.children)},o}(c.Component);r(a,"defaultProps",{imgClass:"lazyImg"}),n.a=a}).call(this,o("4dxh").h)},C1KR:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return c}));o("hQh/");var e=o("/lob"),r=o("4dxh"),c=(o("Kbvt"),function(n){function o(){return n.apply(this,arguments)||this}var r,c;return c=n,(r=o).prototype=Object.create(c.prototype),r.prototype.constructor=r,r.__proto__=c,o.prototype.render=function(){return t(e.a,{imgClass:"lazy"},Array.apply(void 0,Array(20)).map((function(n,o){return t("div",{class:"caf-demo-image",key:o},t("img",{src:"https://via.placeholder.com/200x150.png?text=playholder","data-src":"https://via.placeholder.com/200x150.png?text=original",class:"lazy"}))})))},o}(r.Component))}.call(this,o("4dxh").h)},Kbvt:function(){},"hQh/":function(t,n,o){"use strict";o("rnok")},jlFk:function(t,n,o){"use strict";function e(){var t=0,n=0;return document.body&&(t=document.body.scrollTop),document.documentElement&&(n=document.documentElement.scrollTop),t-n>0?t:n}function r(t){return e()+("CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight)>=t.offsetTop&&t.offsetTop>=e()}o.d(n,"a",(function(){return r}))},rnok:function(){}}]);