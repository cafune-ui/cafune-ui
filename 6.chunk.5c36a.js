(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1fZT":function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("4dxh"),c=n("W0B4"),s=n.n(c),l=n("O94r"),u=n.n(l),p=n("2Eo4"),f=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return o(i(e=t.call.apply(t,[this].concat(r))||this),"state",{actives:e.props.actives}),o(i(e),"onToggle",(function(t){var n=e.state.actives;if(Array.isArray(n)){var r=n.indexOf(t);-1===r?n.push(t):n.splice(r,1)}else n=n===t?"":t;e.setState({actives:n})})),e}var a,c;c=t,(a=n).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var s=n.prototype;return s.renderContent=function(t){var n=this;return t&&t.length?t.map((function(t){return e(p.a,r({},t,{onToggle:n.onToggle}),t.content)})):null},s.getListData=function(e,t,n){if(n){if(Array.isArray(t))return void console.error("actives should be a String while using accordion")}else"string"==typeof t&&(t=[t]);var r=[];return e.forEach((function(e){if("CollapseItem"===e.nodeName.displayName){var n=e.attributes,i=n.id,a=e.children,c=!1;t&&i&&(c="string"==typeof t?t==i:-1!==t.indexOf(i)),r.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({actived:c,content:a},n))}})),r},s.renderList=function(){var t=this.props,n=t.prefix,i=t.children,o=t.accordion,a=t.className,c=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","children","accordion","className"]),s=this.getListData(i,this.state.actives,o);return e("div",r({className:u()(n,a)},c),this.renderContent(s))},s.render=function(){return this.renderList()},n}(a.Component);o(f,"Item",p.a),o(f,"defaultProps",{accordion:!1,prefix:"caf-collapse"}),o(f,"propType",{accordion:s.a.bool,prefix:s.a.string}),t.a=f}).call(this,n("4dxh").h)},"2Eo4":function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("4dxh"),c=n("W0B4"),s=n.n(c),l=n("O94r"),u=n.n(l),p=n("qDKG"),f=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return o(i(e=t.call.apply(t,[this].concat(r))||this),"contentRef",Object(a.createRef)()),o(i(e),"contentWrapRef",Object(a.createRef)()),o(i(e),"onToggle",(function(){var t=e.props;t.disabled||(0,t.onToggle)(t.id)})),e}var c,s;s=t,(c=n).prototype=Object.create(s.prototype),c.prototype.constructor=c,c.__proto__=s;var l=n.prototype;return l.updateStyle=function(){this.contentWrapRef.current&&this.contentRef.current&&(this.contentRef.current.style="max-height: "+(this.props.actived?this.contentWrapRef.current.offsetHeight:0)+"px")},l.componentDidUpdate=function(){this.updateStyle()},l.componentDidMount=function(){this.updateStyle()},l.render=function(t){var i,o,a=t.prefix,c=t.className,s=t.children,l=t.title,f=t.actived,d=t.disabled,h=t.icon,v=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","children","title","actived","disabled","icon"]);return e("div",r({className:u()(a+"-item",c,(i={},i[a+"-item__disabled"]=d,i)),"data-status":f?1:0},v),e("div",{className:u()(a+"-header",(o={},o[a+"-header__default"]=h===n.defaultProps.icon,o)),onClick:this.onToggle},e(p.a,{title:l,rightIcon:h})),e("div",{className:a+"-wrapper",ref:this.contentRef},e("div",{className:a+"-wrapper-content",ref:this.contentWrapRef},s)))},n}(a.Component);o(f,"displayName","CollapseItem"),o(f,"defaultProps",{prefix:"caf-collapse",icon:"arrow_right",disabled:!1}),o(f,"propType",{title:s.a.oneOfType([s.a.string,s.a.node]).isRequired,prefix:s.a.string,actived:s.a.bool,disabled:s.a.bool,icon:s.a.string}),t.a=f}).call(this,n("4dxh").h)},"45x3":function(){},E02R:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},NS33:function(e,t,n){"use strict";function r(){}function i(){}var o=n("E02R");i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},"O+Cx":function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("W0B4");var o=n("O94r"),a=n.n(o),c=function(t){var n,o=t.prefix,c=void 0===o?"caf-icon":o,s=t.className,l=t.icon,u=t.color,p=t.size,f=t.tag,d=void 0===f?"i":f,h=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","icon","color","size","tag"]),v=function(e){return e&&-1!==e.indexOf("/")}(l),b=a()(c,s,((n={})[c+"_"+l]=!v,n)),y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},h);v?y.style="width: "+(p=p||"16px")+";height: "+p+";line-height: "+p+";":(u&&(y.style=(y.style||"")+"color: "+u+";"),p&&(y.style=(y.style||"")+"font-size: "+p+";"));var g=d;return v?e(g,r({className:b},y),v&&e("img",{src:l,className:c+"-img"})):e(g,r({className:b},y))};c.defalutProps={prefix:"caf-icon",tag:"i"},t.a=c}).call(this,n("4dxh").h)},O94r:function(e,t){var n;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)i.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}var i={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},W0B4:function(e,t,n){e.exports=n("NS33")()},cRML:function(e,t,n){"use strict";n("45x3"),n("tLYD"),n("fV57")},fV57:function(){},qDKG:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("4dxh"),c=(n("W0B4"),n("O94r")),s=n.n(c),l=n("O+Cx"),u=n("zZk2"),p=n("s2mL"),f=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return o(i(e=t.call.apply(t,[this].concat(r))||this),"isSwiping",!1),o(i(e),"movedSize",0),o(i(e),"readyMoving",(function(t){e.startTimeStamp=Date.now(),e.isSwiping=!0;var n=Object(p.a)(t);e.startX=n.clientX})),o(i(e),"startMoving",(function(t){if(e.isSwiping){var n=Object(p.a)(t);e.deltaX=n.clientX-e.startX,e.offsetX=Math.abs(e.deltaX),e.direction=e.deltaX>=0?-1:1,t.preventDefault(),t.stopPropagation(),e.direction>0?e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.deltaX,!0):e.moveTo(0)}})),o(i(e),"endMoving",(function(){e.isSwiping&&(e.isSwiping=!1,e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.offsetX<e.swiperSize/2?0:-1*e.swiperSize),setTimeout((function(){return e.offsetX=0}),500))})),o(i(e),"swipable",!1),o(i(e),"promiseFunc",(function(t){setTimeout(t.bind(i(e)),0)})),o(i(e),"swiperSize",0),o(i(e),"cellWrapper",Object(a.createRef)()),o(i(e),"cellMain",Object(a.createRef)()),o(i(e),"cellSwiper",Object(a.createRef)()),e}var c,u;u=t,(c=n).prototype=Object.create(u.prototype),c.prototype.constructor=c,c.__proto__=u;var f=n.prototype;return f.moveTo=function(e,t){if(void 0===t&&(t=!1),this.cellWrapper&&this.cellWrapper.current){var n=this.cellWrapper.current;n.style.transitionDuration=t?"0ms":"500ms",n.style.transform="translate3d("+e+"px, 0, 0 )",this.movedSize=e}},f.registeSwiperEvent=function(){if(this.cellSwiper&&this.cellSwiper.current){this.swipable=!0;var e=this.cellSwiper.current.getBoundingClientRect();this.swiperSize=e.width}if(this.cellMain&&this.cellMain.current){var t=this.cellMain.current;t.addEventListener(p.b.down,this.readyMoving),t.addEventListener(p.b.move,this.startMoving),t.addEventListener(p.b.up,this.endMoving),t.addEventListener(p.b.out,this.endMoving)}},f.unRegisteSwiperEvent=function(){if(this.cellMain&&this.cellMain.current&&this.swipable){var e=this.cellMain.current;this.swipable=!1,e.removeEventListener(p.b.down,this.readyMoving),e.removeEventListener(p.b.move,this.startMoving),e.removeEventListener(p.b.up,this.endMoving),e.removeEventListener(p.b.out,this.endMoving)}},f.componentWillUnmount=function(){this.unRegisteSwiperEvent()},f.render=function(t){var n,i=t.prefix,o=t.className,a=t.icon,c=t.iconSize,u=t.title,p=t.label,f=t.value,d=t.url,h=t.rightIcon,v=t.border,b=t.middle,y=t.swipeList,g=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","icon","iconSize","title","label","value","url","rightIcon","border","middle","swipeList"]),m=!!d||!!h,w=s()(i,o,((n={})[i+"__clickable"]=m,n[i+"__border"]=v,n[i+"__middle"]=b,n));a=a?e(l.a,{icon:a,size:c}):null,u=e("div",{className:i+"-title"},e("span",null,u),!!p&&e("div",{className:i+"-label"},p));var O=f?e("div",{className:i+"-value"},e("span",null,f)):null,x=m?e(l.a,{icon:h||"arrow_right"}):null,j=d?"a":"div",_=d?{href:d}:{},S=null;return y&&y.length?(S=e("div",{className:i+"-swiper",ref:this.cellSwiper},y.map((function(t){return e("span",{className:i+"-swiper-item",onClick:t.clickHandler,style:t.style},t.name)}))),this.promiseFunc(this.registeSwiperEvent)):this.promiseFunc(this.unRegisteSwiperEvent),e("div",r({className:w},g),e("div",{className:i+"-wrapper",ref:this.cellWrapper},e(j,r({},_,{className:i+"-main",ref:this.cellMain}),a,u,O,x),S))},n}(a.Component);o(f,"CellGroup",u.a),o(f,"defaultProps",{prefix:"caf-cell",border:!0,swipeList:[]}),t.a=f}).call(this,n("4dxh").h)},s2mL:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=!!("undefined"!=typeof window&&window&&"ontouchend"in document),i=r?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchcancel"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},o=function(e,t){return r?"touchend"===t?e.changedTouches[0]:e.targetTouches[0]:e}},tLYD:function(){},vIG1:function(e,t,n){"use strict";n.r(t),function(e){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return s}));n("cRML");var o=n("1fZT"),a=n("4dxh"),c=o.a.Item,s=function(t){function n(){for(var e,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i(r(e=t.call.apply(t,[this].concat(o))||this),"state",{actives:"basic",activeCol:[]}),i(r(e),"onChange",(function(t){return function(n){var r;e.setState(((r={})[t]=n,r))}})),e}var a,s;return s=t,(a=n).prototype=Object.create(s.prototype),a.prototype.constructor=a,a.__proto__=s,n.prototype.render=function(t,n){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var r=n.actives,i=n.activeCol;return e("div",{class:""},e("p",null,"默认模式"),e(o.a,{actives:i,onChange:this.onChange("activeCol")},e(c,{title:"基础组件",id:"basic"},e("div",{style:"padding: 15px"},"默认开启")),e(c,{title:"展示组件",id:"display"},e("div",{style:"padding: 15px"},"默认关闭"))),e("p",null,"手风车效果（只开一个）"),e(o.a,{actives:r,accordion:!0},e(c,{title:"基础组件",id:"basic"},e("div",{style:"padding: 15px"},"默认开启内容")),e(c,{title:"展示组件",id:"display"},e("div",{style:"padding: 15px"},"默认关闭")),e(c,{title:"展示组件(禁用)",id:"disabled",disabled:!0},"默认关闭")))},n}(a.Component)}.call(this,n("4dxh").h)},zZk2:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i,o,a,c=n("4dxh"),s=(n("W0B4"),n("O94r")),l=n.n(s),u=function(t){function n(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=n).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o,n.prototype.render=function(t){var n,i=t.prefix,o=t.className,a=t.border,c=t.title,s=t.children,u=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","border","title","children"]);return e("div",r({className:l()(i,o)},u),!!c&&e("div",{className:i+"-title"},c),e("div",{className:l()(i+"-wrapper",(n={},n[i+"-wrapper__border"]=a,n))},s))},n}(c.Component);a={prefix:"caf-cellgroup",border:!0},(o="defaultProps")in(i=u)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,t.a=u}).call(this,n("4dxh").h)}}]);