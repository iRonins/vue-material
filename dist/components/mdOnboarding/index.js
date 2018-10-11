/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=464)})({0:function(t,e){t.exports=function(t,e,n,o,r){var i,a=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(i=t,a=t.default);var s="function"==typeof a?a.options:a;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),o&&(s._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},s._ssrRegister=c):n&&(c=n),c){var u=s.functional,f=u?s.render:s.beforeCreate;u?s.render=function(t,e){return c.call(e),f(t,e)}:s.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:a,options:s}}},1:function(t,e,n){"use strict";function o(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||o(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return o(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},10:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},11:function(t,e,n){var o=n(27),r=n(14);t.exports=function(t){return o(r(t))}},12:function(t,e,n){var o=n(10);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=o,t.exports=e.default},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},16:function(t,e,n){var o=n(2),r=n(4),i=n(31),a=n(9),d=function(t,e,n){var s,c,u,f=t&d.F,l=t&d.G,m=t&d.S,h=t&d.P,b=t&d.B,p=t&d.W,v=l?r:r[e]||(r[e]={}),T=v.prototype,E=l?o:m?o[e]:(o[e]||{}).prototype;l&&(n=e);for(s in n)(c=!f&&E&&void 0!==E[s])&&s in v||(u=c?E[s]:n[s],v[s]=l&&"function"!=typeof E[s]?n[s]:b&&c?i(u,o):p&&E[s]==u?(function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(u):h&&"function"==typeof u?i(Function.call,u):u,h&&((v.virtual||(v.virtual={}))[s]=u,t&d.R&&T&&!T[s]&&a(T,s,u)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,t.exports=d},17:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},18:function(t,e,n){var o=n(29),r=n(23);t.exports=Object.keys||function(t){return o(t,r)}},19:function(t,e,n){var o=n(22)("keys"),r=n(20);t.exports=function(t){return o[t]||(o[t]=r(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},21:function(t,e,n){var o=n(14);t.exports=function(t){return Object(o(t))}},22:function(t,e,n){var o=n(2),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},23:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var o=n(10),r=n(2).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},26:function(t,e,n){var o=n(10);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},27:function(t,e,n){var o=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},29:function(t,e,n){var o=n(6),r=n(11),i=n(33)(!1),a=n(19)("IE_PROTO");t.exports=function(t,e){var n,d=r(t),s=0,c=[];for(n in d)n!=a&&o(d,n)&&c.push(n);for(;e.length>s;)o(d,n=e[s++])&&(~i(c,n)||c.push(n));return c}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){var o=n(15),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},300:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-boards",a.default),t.component("md-board",s.default),t.material.styles.push(u.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var i=n(301),a=o(i),d=n(305),s=o(d),c=n(308),u=o(c);t.exports=e.default},301:function(t,e,n){function o(t){n(302)}var r=n(0)(n(303),n(304),o,null,null);t.exports=r.exports},302:function(t,e){},303:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(40),i=o(r),a=n(1),d=o(a),s=n(61),c=o(s);e.default={props:{mdFixed:Boolean,mdCentered:Boolean,mdRight:Boolean,mdDynamicHeight:{type:Boolean,default:!0},mdElevation:{type:[String,Number],default:0},mdAuto:{type:Boolean,default:!1},mdDuration:{type:Number,default:5e3},mdControls:{type:Boolean,default:!1},mdInfinite:{type:Boolean,default:!1},mdSwipeable:Boolean,mdSwipeDistance:{type:Number,default:100}},mixins:[d.default],data:function(){return{boardList:{},activeBoard:null,activeBoardNumber:0,hasIcons:!1,hasLabel:!1,transitionControl:null,transitionOff:!1,contentHeight:"0px",contentWidth:"0px",autoTransition:null}},computed:{boardClasses:function(){return{"md-dynamic-height":this.mdDynamicHeight,"md-transition-off":this.transitionOff}},navigationClasses:function(){return{"md-has-icon":this.hasIcons,"md-has-label":this.hasLabel,"md-fixed":this.mdFixed,"md-right":!this.mdCentered&&this.mdRight,"md-centered":this.mdCentered||this.mdFixed}},indicatorClasses:function(){var t=this.lastIndicatorNumber>this.activeBoardNumber;return this.lastIndicatorNumber=this.activeBoardNumber,{"md-transition-off":this.transitionOff,"md-to-right":!t,"md-to-left":t}}},methods:{getHeaderClass:function(t){return{"md-active":this.activeBoard===t.id,"md-disabled":t.disabled}},registerBoard:function(t){this.boardList[t.id]=t},unregisterBoard:function(t){delete this.boardList[t.id]},updateBoard:function(t){if(this.registerBoard(t),t.active)if(t.disabled){if((0,i.default)(this.boardList).length){var e=(0,i.default)(this.boardList),n=e.indexOf(t.id)+1,o=e[n];o?this.setActiveBoard(this.boardList[o]):this.setActiveBoard(this.boardList[0])}}else this.setActiveBoard(t)},observeElementChanges:function(){this.parentObserver=new MutationObserver((0,c.default)(this.calculateOnWatch,50)),this.parentObserver.observe(this.$refs.boardsContent,{childList:!0,attributes:!0,subtree:!0})},getBoardIndex:function(t){return(0,i.default)(this.boardList).indexOf(t)},calculateIndicatorPos:function(){if(this.$refs.boardHeader&&this.$refs.boardHeader[this.activeBoardNumber]){var t=this.$el.offsetWidth,e=this.$refs.boardHeader[this.activeBoardNumber],n=e.offsetLeft,o=t-n-e.offsetWidth;this.$refs.indicator.style.left=n+"px",this.$refs.indicator.style.right=o+"px"}},calculateBoardsWidthAndPosition:function(){var t=this.$el.offsetWidth,e=0;this.contentWidth=t*this.activeBoardNumber+"px";for(var n in this.boardList){var o=this.boardList[n];o.ref.width=t+"px",o.ref.left=t*e+"px",e++}},calculateContentHeight:function(){var t=this;this.$nextTick((function(){if((0,i.default)(t.boardList).length){var e=t.boardList[t.activeBoard].ref.$el.offsetHeight;t.contentHeight=e+"px"}}))},calculatePosition:function(){var t=this;window.requestAnimationFrame((function(){t._destroyed||(t.calculateIndicatorPos(),t.calculateBoardsWidthAndPosition(),t.calculateContentHeight())}))},debounceTransition:function(){var t=this;window.clearTimeout(this.transitionControl),this.transitionControl=window.setTimeout((function(){t.calculatePosition(),t.transitionOff=!1}),200)},calculateOnWatch:function(){this.calculatePosition(),this.debounceTransition()},calculateOnResize:function(){this.transitionOff=!0,this.calculateOnWatch()},start:function(){var t=this;this.autoTransition&&window.clearInterval(this.autoTransition),this.autoTransition=window.setInterval((function(){t.moveNextBoard()}),this.mdDuration)},setActiveBoard:function(t,e){this.mdAuto&&e&&this.start(),this.hasIcons=!!t.icon,this.hasLabel=!!t.label,this.activeBoard=t.id,this.activeBoardNumber=this.getBoardIndex(this.activeBoard),this.calculatePosition(),this.$emit("change",this.activeBoardNumber)},movePrevBoard:function(){var t=(0,i.default)(this.boardList),e=t.indexOf(this.activeBoard)-1,n=t[e];if(n)this.setActiveBoard(this.boardList[n],!0);else if(this.mdInfinite){var o=(0,i.default)(this.boardList)[(0,i.default)(this.boardList).length-1];this.setActiveBoard(this.boardList[o],!0)}},moveNextBoard:function(){var t=(0,i.default)(this.boardList),e=t.indexOf(this.activeBoard)+1,n=t[e];if(n)this.setActiveBoard(this.boardList[n],!0);else if(this.mdInfinite){var o=(0,i.default)(this.boardList)[0];this.setActiveBoard(this.boardList[o],!0)}},isHorizontallyInside:function(t){return t>this.mountedRect.left&&t<this.mountedRect.left+this.mountedRect.width},isVerticallyInside:function(t){return t>this.mountedRect.top&&t<this.mountedRect.top+this.mountedRect.height},handleTouchStart:function(t){this.mountedRect=this.$refs.boardsContent.getBoundingClientRect();var e=t.changedTouches[0].clientX,n=t.changedTouches[0].clientY;this.isHorizontallyInside(e)&&this.isVerticallyInside(n)&&(this.initialTouchPosition=e,this.canMove=!0)},handleTouchEnd:function(t){if(this.canMove){var e=t.changedTouches[0].clientX,n=this.initialTouchPosition-e,o=n>0?"moveNextBoard":"movePrevBoard";Math.abs(n)>this.mdSwipeDistance&&this[o](),this.canMove=!1,this.initialTouchPosition=null}}},mounted:function(){var t=this;this.$nextTick((function(){if(t.observeElementChanges(),window.addEventListener("resize",t.calculateOnResize),(0,i.default)(t.boardList).length&&!t.activeBoard){var e=(0,i.default)(t.boardList)[0];t.setActiveBoard(t.boardList[e])}t.mdSwipeable&&(t.mountedRect=t.$refs.boardsContent.getBoundingClientRect(),t.initialTouchPosition=null,t.canMove=!1,document.addEventListener("touchstart",t.handleTouchStart),document.addEventListener("touchend",t.handleTouchEnd)),t.mdAuto&&t.start()}))},beforeDestroy:function(){this.parentObserver&&this.parentObserver.disconnect(),this.autoTransition&&window.clearTimeout(this.autoTransition),window.removeEventListener("resize",this.calculateOnResize),this.mdSwipeable&&(document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchend",this.handleTouchEnd)),this._destroyed=!0}},t.exports=e.default},304:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-boards",class:[t.themeClass,t.boardClasses]},[n("div",{ref:"boardsContent",staticClass:"md-boards-content",style:{height:t.contentHeight}},[n("div",{staticClass:"md-boards-wrapper",style:{transform:"translate3D(-"+t.contentWidth+", 0, 0)"}},[t._t("default")],2)]),t._v(" "),n("nav",{ref:"boardNavigation",staticClass:"md-boards-navigation",class:t.navigationClasses},[t.mdControls?t._e():n("span",{staticStyle:{flex:"1"}}),t._v(" "),t.mdControls?n("md-button",{on:{click:function(e){t.movePrevBoard()}}},[n("div",{staticClass:"md-board-header-container"},[n("md-icon",{staticClass:"md-control"},[t._v("chevron_left")])],1)]):t._e(),t._v(" "),n("span",{staticStyle:{flex:"1"}}),t._v(" "),t._l(t.boardList,(function(e){return n("button",{key:e.id,ref:"boardHeader",refInFor:!0,staticClass:"md-board-header",class:t.getHeaderClass(e),attrs:{type:"button",disabled:e.disabled},on:{click:function(n){t.setActiveBoard(e,!0)}}},[n("div",{staticClass:"md-board-header-container"},[n("md-icon",[t._v("fiber_manual_record")])],1)])})),t._v(" "),n("span",{staticStyle:{flex:"1"}}),t._v(" "),t.mdControls?n("md-button",{on:{click:function(e){t.moveNextBoard()}}},[n("div",{staticClass:"md-board-header-container"},[n("md-icon",{staticClass:"md-control"},[t._v("chevron_right")])],1)]):t._e(),t._v(" "),t.mdControls?t._e():n("span",{staticStyle:{flex:"1"}}),t._v(" "),n("span",{ref:"indicator"})],2)])},staticRenderFns:[]}},305:function(t,e,n){var o=n(0)(n(306),n(307),null,null,null);t.exports=o.exports},306:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=o(r),a=n(13),d=o(a);e.default={props:{id:[String,Number],mdLabel:[String,Number],mdIcon:String,mdActive:Boolean,mdDisabled:Boolean,mdTooltip:String,mdTooltipDelay:{type:String,default:"0"},mdTooltipDirection:{type:String,default:"bottom"}},data:function(){return{mounted:!1,boardId:this.id||"board-"+(0,i.default)(),width:"0px",left:"0px"}},watch:{mdActive:function(){this.updateBoardData()},mdDisabled:function(){this.updateBoardData()},mdIcon:function(){this.updateBoardData()},mdLabel:function(){this.updateBoardData()},mdTooltip:function(){this.updateBoardData()},mdTooltipDelay:function(){this.updateBoardData()},mdTooltipDirection:function(){this.updateBoardData()}},computed:{styles:function(){return{width:this.width,left:this.left}}},methods:{getBoardData:function(){return{id:this.boardId,label:this.mdLabel,icon:this.mdIcon,active:this.mdActive,disabled:this.mdDisabled,tooltip:this.mdTooltip,tooltipDelay:this.mdTooltipDelay,tooltipDirection:this.mdTooltipDirection,ref:this}},updateBoardData:function(){this.parentBoards.updateBoard(this.getBoardData())}},mounted:function(){var t=this.getBoardData();if(this.parentBoards=(0,d.default)(this.$parent,"md-boards"),!this.parentBoards)throw new Error("You must wrap the md-board in a md-boards");this.mounted=!0,this.parentBoards.updateBoard(t),this.mdActive&&this.parentBoards.setActiveBoard(t)},beforeDestroy:function(){this.parentBoards.unregisterBoard(this.getBoardData())}},t.exports=e.default},307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-board",style:t.styles,attrs:{id:t.boardId}},[t._t("default")],2)},staticRenderFns:[]}},308:function(t,e){t.exports=".THEME_NAME.md-boards>.md-boards-navigation{background-color:transparent}.THEME_NAME.md-boards>.md-boards-navigation .md-board-header{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-boards>.md-boards-navigation .md-board-header.md-active,.THEME_NAME.md-boards>.md-boards-navigation .md-board-header:focus{color:PRIMARY-COLOR}.THEME_NAME.md-boards>.md-boards-navigation .md-board-header.md-disabled{color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-boards>.md-boards-navigation .md-button{color:PRIMARY-COLOR}.THEME_NAME.md-boards.md-transparent>.md-boards-navigation{background-color:transparent}.THEME_NAME.md-boards.md-transparent>.md-boards-navigation .md-board-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-boards.md-transparent>.md-boards-navigation .md-board-header.md-active,.THEME_NAME.md-boards.md-transparent>.md-boards-navigation .md-board-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-boards.md-transparent>.md-boards-navigation .md-board-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-boards.md-transparent>.md-boards-navigation .md-button{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-boards.md-primary>.md-boards-navigation{background-color:PRIMARY-COLOR}.THEME_NAME.md-boards.md-primary>.md-boards-navigation .md-board-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-boards.md-primary>.md-boards-navigation .md-board-header.md-active,.THEME_NAME.md-boards.md-primary>.md-boards-navigation .md-board-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-boards.md-primary>.md-boards-navigation .md-board-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-boards.md-primary>.md-boards-navigation .md-button{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-boards.md-accent>.md-boards-navigation{background-color:ACCENT-COLOR}.THEME_NAME.md-boards.md-accent>.md-boards-navigation .md-board-header{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-boards.md-accent>.md-boards-navigation .md-board-header.md-active,.THEME_NAME.md-boards.md-accent>.md-boards-navigation .md-board-header:focus{color:ACCENT-CONTRAST}.THEME_NAME.md-boards.md-accent>.md-boards-navigation .md-board-header.md-disabled{color:ACCENT-CONTRAST-0.26}.THEME_NAME.md-boards.md-accent>.md-boards-navigation .md-button{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-boards.md-warn>.md-boards-navigation{background-color:WARN-COLOR}.THEME_NAME.md-boards.md-warn>.md-boards-navigation .md-board-header{color:WARN-CONTRAST-0.54}.THEME_NAME.md-boards.md-warn>.md-boards-navigation .md-board-header.md-active,.THEME_NAME.md-boards.md-warn>.md-boards-navigation .md-board-header:focus{color:WARN-CONTRAST}.THEME_NAME.md-boards.md-warn>.md-boards-navigation .md-board-header.md-disabled{color:WARN-CONTRAST-0.26}.THEME_NAME.md-boards.md-warn>.md-boards-navigation .md-button{color:WARN-CONTRAST-0.54}\n"},31:function(t,e,n){var o=n(35);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},32:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},33:function(t,e,n){var o=n(11),r=n(30),i=n(34);t.exports=function(t){return function(e,n,a){var d,s=o(e),c=r(s.length),u=i(a,c);if(t&&n!=n){for(;c>u;)if((d=s[u++])!=d)return!0}else for(;c>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}}},34:function(t,e,n){var o=n(15),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},35:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},36:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){return Math.random().toString(36).slice(4)};e.default=o,t.exports=e.default},4:function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},40:function(t,e,n){t.exports={default:n(48),__esModule:!0}},464:function(t,e,n){t.exports=n(300)},48:function(t,e,n){n(49),t.exports=n(4).Object.keys},49:function(t,e,n){var o=n(21),r=n(18);n(50)("keys",(function(){return function(t){return r(o(t))}}))},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},50:function(t,e,n){var o=n(16),r=n(4),i=n(5);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i((function(){n(1)})),"Object",a)}},6:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e){var n=!1;return function(){n||(t.call(),n=!0,window.setTimeout((function(){n=!1}),e))}};e.default=o,t.exports=e.default},7:function(t,e,n){var o=n(12),r=n(32),i=n(26),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},9:function(t,e,n){var o=n(7),r=n(17);t.exports=n(3)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}}})}));