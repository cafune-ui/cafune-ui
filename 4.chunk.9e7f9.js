(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+sNi":function(e,t,n){"use strict";n.r(t),function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"default",(function(){return l}));n("/7rB");var i=n("YwQt"),o=(n("Wiic"),n("qDKG")),a=n("4dxh"),c=o.a.CellGroup,s=i.a.CheckboxGroup,l=function(t){function n(){for(var e,n,r,i,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a))||this,n=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e),i={check:"hi",checks:["hi","hello"],checkList:[{value:"hi",text:"自定义颜色",checkedColor:"#369"},{value:"holla",text:"开启禁用",disabled:!0},{value:"bonjour",text:"自定义激活图标",icons:{actived:"more"}},{value:"hello",text:"自定义激活及未激活图标",icons:{inactive:"https://image.flaticon.com/icons/png/128/2026/2026450.png",actived:"https://image.flaticon.com/icons/png/128/2026/2026462.png"}}]},(r="state")in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,e}var a,l;return l=t,(a=n).prototype=Object.create(l.prototype),a.prototype.constructor=a,a.__proto__=l,n.prototype.render=function(t,n){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(t);var a=n.check,l=n.checks,u=n.checkList;return e("div",null,e("p",{class:"caf-demo-title"},"单独使用"),e("div",{class:"caf-demo-block"},u.map((function(t){return e(i.a,r({checked:a===t.value},t,{handleChange:function(e){console.log(e)},key:"s-"+t.value}),t.text)}))),e("p",{class:"caf-demo-title"},"与Cell 组件一起使用"),u.map((function(t){return e(o.a,{title:"test",value:e(i.a,r({checked:a===t.value},t,{handleChange:function(e){console.log(e)}}),t.text),key:"s-c-"+t.id})})),e(c,{title:"复选框组"},e(s,{model:l,handleChange:function(e){return console.log(e)}},u.map((function(t){return e(o.a,{title:"test",value:e(i.a,t,t.text),key:"g-"+t.value})})))),e(c,{title:"复选框组（最大可选为2）"},e(s,{model:l,handleChange:function(e){return console.log(e)},maxSelect:2},u.map((function(t){return e(o.a,{title:"test",value:e(i.a,t,t.text),key:"g-"+t.value})})))))},n}(a.Component)}.call(this,n("4dxh").h)},"/7rB":function(e,t,n){"use strict";n("45x3"),n("q2ZG")},"45x3":function(){},E02R:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},NS33:function(e,t,n){"use strict";function r(){}function i(){}var o=n("E02R");i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},"O+Cx":function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("W0B4");var o=n("O94r"),a=n.n(o),c=function(t){var n,o=t.prefix,c=void 0===o?"caf-icon":o,s=t.className,l=t.icon,u=t.color,p=t.size,f=t.tag,h=void 0===f?"i":f,d=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","icon","color","size","tag"]),v=function(e){return e&&-1!==e.indexOf("/")}(l),b=a()(c,s,((n={})[c+"_"+l]=!v,n)),m=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},d);v?m.style="width: "+(p=p||"16px")+";height: "+p+";line-height: "+p+";":(u&&(m.style=(m.style||"")+"color: "+u+";"),p&&(m.style=(m.style||"")+"font-size: "+p+";"));var g=h;return v?e(g,r({className:b},m),v&&e("img",{src:l,className:c+"-img"})):e(g,r({className:b},m))};c.defalutProps={prefix:"caf-icon",tag:"i"},t.a=c}).call(this,n("4dxh").h)},O94r:function(e,t){var n;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=r.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)i.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}var i={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},W0B4:function(e,t,n){e.exports=n("NS33")()},Wiic:function(e,t,n){"use strict";n("45x3"),n("tLYD")},YwQt:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return e&&-1!==e.indexOf("/")}var c=n("4dxh"),s=(n("W0B4"),n("O94r")),l=n.n(s),u=n("aE97"),p=n("O+Cx"),f=function(t){function n(e){var n;return o(i(n=t.call(this,e)||this),"state",{checked:!1}),o(i(n),"onClick",(function(){var e=n.props,t=e.value,r=e.disabled,i=e.handleChange,o=n.context,a=o.groupChange,c=o.allDisabled,s=o.canCheck,l=!s||s(t);r||c||!l||(n.setState({checked:!n.state.checked}),a?a(t):i&&i(t))})),n}var c,s;s=t,(c=n).prototype=Object.create(s.prototype),c.prototype.constructor=c,c.__proto__=s;var u=n.prototype;return u.componentDidMount=function(){var e=this.props,t=e.checked,n=(this.context||{}).model,r=void 0!==t&&t||-1!==(void 0===n?[]:n).indexOf(e.value);this.setState({checked:r})},u.componentWillReceiveProps=function(e){"checked"in e&&!this.context.model&&this.setState({checked:e.checked})},u.render=function(t,n,i){var o,c,s=n.checked,u=(void 0===i?{}:i).allDisabled,f=void 0!==u&&u,h=t.prefix,d=t.value,v=t.id,b=t.className,m=t.icons,g=t.children,y=t.checkedColor,w=t.disabled,x=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","value","id","className","icons","children","checkedColor","disabled"]),O={};y&&s&&(O.backgroundColor=y);var k=w||f,_=e(p.a,{icon:"check"}),C=!1;return m&&("actived"in m&&s&&(C=a(m.actived),_=e(p.a,{icon:m.actived,size:C?"14px":"12px"})),"inactive"in m&&!s&&(C=a(m.inactive),_=e(p.a,{icon:m.inactive,size:C?"14px":"12px"}))),e("div",r({className:l()(h,b,(o={},o[h+"__checked"]=s,o[h+"__disabled"]=k,o)),onClick:this.onClick},x),e("div",{className:h+"-input"},e("input",{type:"checkbox",id:v,checked:s,disabled:w,value:d}),e("span",{className:l()(h+"-input-inner",(c={},c[h+"-input-inner__custom"]=C,c)),style:O},_)),e("div",{className:h+"-label"},g))},n}(c.Component);o(f,"CheckboxGroup",u.a),o(f,"defaultProps",{prefix:"caf-checkbox",checked:!1,disabled:!1}),t.a=f}).call(this,n("4dxh").h)},aE97:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("4dxh"),c=(n("W0B4"),n("O94r")),s=n.n(c),l=function(t){function n(e){var n;return o(i(n=t.call(this,e)||this),"seletedData",[]),o(i(n),"canCheck",(function(e){var t=n.props.maxSelect,r=i(n).seletedData;return!(t>0&&-1===r.indexOf(e)&&r.length===t)})),o(i(n),"onChange",(function(e){var t=i(n).seletedData,r=t.indexOf(e);-1===r?t.push(e):t.splice(r,1),n.seletedData=t,n.props.handleChange&&n.props.handleChange(t)})),n.seletedData=e.model,n}var a,c;c=t,(a=n).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var l=n.prototype;return l.getChildContext=function(){var e=this.props;return{model:e.model,allDisabled:e.disabled,groupChange:this.onChange,canCheck:this.canCheck}},l.render=function(t){var n=t.prefix,i=t.children,o=t.className,a=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","children","className"]);return e("div",r({className:s()(n,o)},a),i)},n}(a.Component);o(l,"defaultProps",{prefix:"caf-checkbox-group",disabled:!1,maxSelect:0}),t.a=l}).call(this,n("4dxh").h)},q2ZG:function(){},qDKG:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("4dxh"),c=(n("W0B4"),n("O94r")),s=n.n(c),l=n("O+Cx"),u=n("zZk2"),p=n("s2mL"),f=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return o(i(e=t.call.apply(t,[this].concat(r))||this),"isSwiping",!1),o(i(e),"movedSize",0),o(i(e),"readyMoving",(function(t){e.startTimeStamp=Date.now(),e.isSwiping=!0;var n=Object(p.a)(t);e.startX=n.clientX})),o(i(e),"startMoving",(function(t){if(e.isSwiping){var n=Object(p.a)(t);e.deltaX=n.clientX-e.startX,e.offsetX=Math.abs(e.deltaX),e.direction=e.deltaX>=0?-1:1,t.preventDefault(),t.stopPropagation(),e.direction>0?e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.deltaX,!0):e.moveTo(0)}})),o(i(e),"endMoving",(function(){e.isSwiping&&(e.isSwiping=!1,e.offsetX>0&&e.offsetX<=e.swiperSize&&e.moveTo(e.offsetX<e.swiperSize/2?0:-1*e.swiperSize),setTimeout((function(){return e.offsetX=0}),500))})),o(i(e),"swipable",!1),o(i(e),"promiseFunc",(function(t){setTimeout(t.bind(i(e)),0)})),o(i(e),"swiperSize",0),o(i(e),"cellWrapper",Object(a.createRef)()),o(i(e),"cellMain",Object(a.createRef)()),o(i(e),"cellSwiper",Object(a.createRef)()),e}var c,u;u=t,(c=n).prototype=Object.create(u.prototype),c.prototype.constructor=c,c.__proto__=u;var f=n.prototype;return f.moveTo=function(e,t){if(void 0===t&&(t=!1),this.cellWrapper&&this.cellWrapper.current){var n=this.cellWrapper.current;n.style.transitionDuration=t?"0ms":"500ms",n.style.transform="translate3d("+e+"px, 0, 0 )",this.movedSize=e}},f.registeSwiperEvent=function(){if(this.cellSwiper&&this.cellSwiper.current){this.swipable=!0;var e=this.cellSwiper.current.getBoundingClientRect();this.swiperSize=e.width}if(this.cellMain&&this.cellMain.current){var t=this.cellMain.current;t.addEventListener(p.b.down,this.readyMoving),t.addEventListener(p.b.move,this.startMoving),t.addEventListener(p.b.up,this.endMoving),t.addEventListener(p.b.out,this.endMoving)}},f.unRegisteSwiperEvent=function(){if(this.cellMain&&this.cellMain.current&&this.swipable){var e=this.cellMain.current;this.swipable=!1,e.removeEventListener(p.b.down,this.readyMoving),e.removeEventListener(p.b.move,this.startMoving),e.removeEventListener(p.b.up,this.endMoving),e.removeEventListener(p.b.out,this.endMoving)}},f.componentWillUnmount=function(){this.unRegisteSwiperEvent()},f.render=function(t){var n,i=t.prefix,o=t.className,a=t.icon,c=t.iconSize,u=t.title,p=t.label,f=t.value,h=t.url,d=t.rightIcon,v=t.border,b=t.middle,m=t.swipeList,g=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","icon","iconSize","title","label","value","url","rightIcon","border","middle","swipeList"]),y=!!h||!!d,w=s()(i,o,((n={})[i+"__clickable"]=y,n[i+"__border"]=v,n[i+"__middle"]=b,n));a=a?e(l.a,{icon:a,size:c}):null,u=e("div",{className:i+"-title"},e("span",null,u),!!p&&e("div",{className:i+"-label"},p));var x=f?e("div",{className:i+"-value"},e("span",null,f)):null,O=y?e(l.a,{icon:d||"arrow_right"}):null,k=h?"a":"div",_=h?{href:h}:{},C=null;return m&&m.length?(C=e("div",{className:i+"-swiper",ref:this.cellSwiper},m.map((function(t){return e("span",{className:i+"-swiper-item",onClick:t.clickHandler,style:t.style},t.name)}))),this.promiseFunc(this.registeSwiperEvent)):this.promiseFunc(this.unRegisteSwiperEvent),e("div",r({className:w},g),e("div",{className:i+"-wrapper",ref:this.cellWrapper},e(k,r({},_,{className:i+"-main",ref:this.cellMain}),a,u,x,O),C))},n}(a.Component);o(f,"CellGroup",u.a),o(f,"defaultProps",{prefix:"caf-cell",border:!0,swipeList:[]}),t.a=f}).call(this,n("4dxh").h)},s2mL:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=!!("undefined"!=typeof window&&window&&"ontouchend"in document),i=r?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchcancel"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},o=function(e,t){return r?"touchend"===t?e.changedTouches[0]:e.targetTouches[0]:e}},tLYD:function(){},zZk2:function(e,t,n){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i,o,a,c=n("4dxh"),s=(n("W0B4"),n("O94r")),l=n.n(s),u=function(t){function n(){return t.apply(this,arguments)||this}var i,o;return o=t,(i=n).prototype=Object.create(o.prototype),i.prototype.constructor=i,i.__proto__=o,n.prototype.render=function(t){var n,i=t.prefix,o=t.className,a=t.border,c=t.title,s=t.children,u=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}(t,["prefix","className","border","title","children"]);return e("div",r({className:l()(i,o)},u),!!c&&e("div",{className:i+"-title"},c),e("div",{className:l()(i+"-wrapper",(n={},n[i+"-wrapper__border"]=a,n))},s))},n}(c.Component);a={prefix:"caf-cellgroup",border:!0},(o="defaultProps")in(i=u)?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,t.a=u}).call(this,n("4dxh").h)}}]);