(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{D826:function(t,e,n){"use strict";n.r(e),function(t){function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"default",(function(){return c}));n("IWD8");var o=n("aQKx"),a=n("4dxh"),s=o.a.SwiperItem,c=function(e){function n(){for(var t,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i(r(t=e.call.apply(e,[this].concat(o))||this),"state",{current:1}),i(r(t),"change",(function(e){t.setState({current:e})})),t}var a,c;c=e,(a=n).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var u=n.prototype;return u.renderCustom=function(){return t("div",{style:"padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;"},this.state.current+1,"/4")},u.render=function(){return t("div",{class:""},t("p",null,"默认"),t(o.a,{initialIndex:0,showIndicators:!0,autoplay:!0,intervel:3e3},Array.apply(void 0,Array(4)).map((function(e,n){return t(s,{key:n},t("div",{style:"height: 80px;text-align:center;line-height: 80px;"},n+1))}))),t("p",null,"自定义指示器"),t(o.a,{onChange:this.change,customIndicator:this.renderCustom()},Array.apply(void 0,Array(4)).map((function(e,n){return t(s,{key:n},t("div",{style:"height: 80px;text-align:center;line-height: 80px;"},n+1))}))))},n}(a.Component)}.call(this,n("4dxh").h)},IWD8:function(t,e,n){"use strict";n("tkcY")},O94r:function(t,e){var n;!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&t.push(a)}else if("object"===o)for(var s in n)i.call(n,s)&&n[s]&&t.push(s)}}return t.join(" ")}var i={}.hasOwnProperty;t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},OaM3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=!("undefined"==typeof window||!window),i=function(t,e){void 0===e&&(e="body"),r&&document.querySelector(e)&&(document.querySelector(e).style.paddingBottom=t)}},aQKx:function(t,e,n){"use strict";(function(t){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=n("4dxh"),s=n("O94r"),c=n.n(s),u=n("pYmE"),l=n("t3JU"),p=n("OaM3"),d=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return o(i(t=e.call.apply(e,[this].concat(r))||this),"state",{current:t.props.initialIndex}),o(i(t),"total",0),o(i(t),"autoPlayTimer",void 0),o(i(t),"size",0),o(i(t),"swiperCurrent",0),o(i(t),"resize",(function(){var e=t.swiperContainer.current;if(e){var n=e.getBoundingClientRect();t.size=n.width}var r=t.swiperList.current;r&&(r.style.width=t.size*t.swiperData.length+"px")})),o(i(t),"isSwiping",!1),o(i(t),"startX",void 0),o(i(t),"deltaX",void 0),o(i(t),"offsetX",0),o(i(t),"direction",void 0),o(i(t),"startTimeStamp",void 0),o(i(t),"onSwiperClick",(function(e){if(t.offsetX>0)return e.preventDefault(),e.stopPropagation(),!1})),o(i(t),"readyMoving",(function(e){t.startTimeStamp=Date.now(),t.clearAutoPlay(),t.isSwiping=!0;var n=Object(l.a)(e);t.startX=n.clientX})),o(i(t),"startMoving",(function(e){if(t.isSwiping){var n=Object(l.a)(e);t.deltaX=n.clientX-t.startX,t.offsetX=Math.abs(t.deltaX),t.direction=t.deltaX>=0?-1:1,e.preventDefault(),e.stopPropagation(),t.moveTo({offset:t.state.current*t.size*-1+t.deltaX+"px"})}})),o(i(t),"endMoving",(function(){if(t.isSwiping){t.isSwiping=!1;var e=t.state.current+t.direction>=0&&t.state.current+t.direction<t.swiperData.length;t.offsetX<t.size/4||!e?t.moveTo({ind:t.state.current}):e&&t.moveTo({ind:t.state.current+t.direction}),setTimeout((function(){return t.offsetX=0}),500)}})),o(i(t),"swiperData",void 0),o(i(t),"swiperList",Object(a.createRef)()),o(i(t),"swiperContainer",Object(a.createRef)()),t}var s,d;d=e,(s=n).prototype=Object.create(d.prototype),s.prototype.constructor=s,s.__proto__=d;var f=n.prototype;return f.getSwiperData=function(t){var e=this,n=[];return t.forEach((function(t,r){if(t&&"swiperItem"===t.nodeName.displayName){var i=t.attributes;n.push({id:r,actived:r===e.state.current,content:t.children,className:i.className,onItemClick:i.onItemClick})}})),n},f.componentDidMount=function(){if(p.a){this.resize(),window.addEventListener("resize",this.resize);var t=this.swiperList.current;t&&(t.addEventListener("click",this.onSwiperClick,!0),t.addEventListener(l.b.down,this.readyMoving),t.addEventListener(l.b.move,this.startMoving),t.addEventListener(l.b.up,this.endMoving),t.addEventListener(l.b.out,this.endMoving)),this.moveTo({ind:this.state.current}),this.autoPlay()}},f.clearAutoPlay=function(){this.autoPlayTimer&&clearTimeout(this.autoPlayTimer)},f.autoPlay=function(){var t=this,e=this.props,n=e.intervel;e.autoplay&&this.swiperData.length>1&&(this.clearAutoPlay(),this.autoPlayTimer=setTimeout((function(){t.swiperCurrent=t.state.current+1;var e=t.state.current;t.moveTo({ind:e=e===t.swiperData.length-1?0:e+1})}),n))},f.componentWillUnmount=function(){if(p.a){this.clearAutoPlay();var t=this.swiperList.current;t&&(t.removeEventListener("click",this.onSwiperClick,!0),t.removeEventListener(l.b.down,this.readyMoving),t.removeEventListener(l.b.move,this.startMoving),t.removeEventListener(l.b.up,this.endMoving),t.removeEventListener(l.b.out,this.endMoving)),window.removeEventListener("resize",this.resize)}},f.moveTo=function(t){var e=this,n=t.ind,r=t.offset;if(this.clearAutoPlay(),this.swiperList&&this.swiperList.current){var i=this.swiperList.current;void 0!==n?(i.style.transitionDuration="500ms",i.style.transform="translate3d("+n*(1/this.total)*-100+"%, 0, 0 )",this.setState({current:n},(function(){e.autoPlay(),e.props.onChange&&e.props.onChange(n)}))):r&&(i.style.transitionDuration="0ms",i.style.transform="translate3d("+r+", 0, 0 )")}},f.renderIndicators=function(e){var n=this,r=this.props.prefix;return e&&e.length>1?Array.apply(void 0,Array(e.length)).map((function(e,i){return t("span",{key:i,className:r+"-indicator-item","data-status":i===n.state.current?1:0,onClick:function(){return n.moveTo({ind:i})}})})):null},f.renderItems=function(e){if(e&&e.length)return e.map((function(n){return t(u.a,{key:n.id,onItemClick:n.onItemClick,width:1/e.length*100+"%"},n.content)}))},f.renderSwipers=function(){var e=this.props,n=e.prefix,i=e.children,o=e.className,a=e.showIndicators,s=e.customIndicator,u=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(i[n]=t[n]);return i}(e,["prefix","children","className","showIndicators","customIndicator"]);if(i&&i.length){var l=this.getSwiperData(i);return this.swiperData=l,this.total=l.length,t("div",r({className:c()(n,o),ref:this.swiperContainer},u),t("div",{className:n+"-container",ref:this.swiperList},this.renderItems(l)),s||a&&t("div",{className:n+"-indicator"},this.renderIndicators(l)))}return null},f.render=function(){return this.renderSwipers()},n}(a.Component);o(d,"SwiperItem",u.a),o(d,"defaultProps",{autoplay:!0,intervel:3e3,initialIndex:0,showIndicators:!0}),e.a=d}).call(this,n("4dxh").h)},pYmE:function(t,e,n){"use strict";(function(t){function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n("4dxh"),a=n("O94r"),s=n.n(a),c=function(e){function n(){return e.apply(this,arguments)||this}var i,o;return o=e,(i=n).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o,n.prototype.render=function(e){var n=e.prefix,i=e.className,o=e.children,a=e.width,c=e.onItemClick,u=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(n=o[r])>=0||(i[n]=t[n]);return i}(e,["prefix","className","children","width","onItemClick"]);return t("div",r({className:s()(n+"-item",i),onClick:c,style:{width:a}},u),o)},n}(o.Component);i(c,"displayName","swiperItem"),i(c,"defaultProps",{prefix:"caf-swiper-container"}),e.a=c}).call(this,n("4dxh").h)},t3JU:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=!!("undefined"!=typeof window&&window&&"ontouchend"in document),i=r?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchcancel"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},o=function(t,e){return r?"touchend"===e?t.changedTouches[0]:t.targetTouches[0]:t}},tkcY:function(){}}]);