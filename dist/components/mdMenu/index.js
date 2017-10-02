/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=463)})({0:function(t,e){t.exports=function(t,e,n,i,o){var s,r=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,r=t.default);var l="function"==typeof r?r.options:r;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i);var h;if(o?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=h):n&&(h=n),h){var u=l.functional,a=u?l.render:l.beforeCreate;u?l.render=function(t,e){return h.call(e),a(t,e)}:l.beforeCreate=a?[].concat(a,h):[h]}return{esModule:s,exports:r,options:l}}},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},286:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t){t.component("md-menu",r.default),t.component("md-menu-item",l.default),t.component("md-menu-content",u.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var s=n(287),r=i(s),d=n(292),l=i(d),h=n(296),u=i(h),a=n(299),c=i(a);t.exports=e.default},287:function(t,e,n){function i(t){n(288)}var o=n(0)(n(289),n(291),i,null,null);t.exports=o.exports},288:function(t,e){},289:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(42),s=i(o),r=n(290),d=i(r);e.default={name:"md-menu",props:{mdSize:{type:[Number,String],default:0},mdDirection:{type:String,default:"bottom right"},mdAlignTrigger:{type:Boolean,default:!1},mdOffsetX:{type:[Number,String],default:0},mdOffsetY:{type:[Number,String],default:0},mdCloseOnSelect:{type:Boolean,default:!0},mdAutoWidth:{type:Boolean,default:!1},mdFixed:{type:Boolean,default:!1},mdNoFocus:{type:Boolean,default:!1},mdManualToggle:{type:Boolean,default:!1},mdMaxHeight:{type:Number,default:0}},data:function(){return{active:!1}},watch:{mdSize:function(t,e){t>=1&&t<=7&&(this.removeLastSizeMenuContentClass(e),this.addNewSizeMenuContentClass(t))},mdDirection:function(t,e){this.removeLastDirectionMenuContentClass(e),this.addNewDirectionMenuContentClass(t)},mdAlignTrigger:function(t){this.handleAlignTriggerClass(t)}},methods:{validateMenu:function(){if(!this.menuContent)throw this.$destroy(),new Error("You must have a md-menu-content inside your menu.");if(!this.menuTrigger)throw this.$destroy(),new Error("You must have an element with a md-menu-trigger attribute inside your menu.")},removeLastSizeMenuContentClass:function(t){this.menuContent.classList.remove("md-size-"+t)},removeLastDirectionMenuContentClass:function(t){this.menuContent.classList.remove("md-direction-"+t.replace(/ /g,"-"))},addNewSizeMenuContentClass:function(t){this.menuContent.classList.add("md-size-"+t)},addNewDirectionMenuContentClass:function(t){this.menuContent.classList.add("md-direction-"+t.replace(/ /g,"-"))},handleAlignTriggerClass:function(t){t&&this.menuContent.classList.add("md-align-trigger")},getPosition:function(t,e){var n=this.menuTrigger.getBoundingClientRect(),i="top"===t?n.top+n.height-this.menuContent.offsetHeight:n.top,o="left"===e?n.left-this.menuContent.offsetWidth+n.width:n.left;return i+=parseInt(this.mdOffsetY,10),o+=parseInt(this.mdOffsetX,10),this.mdAlignTrigger&&("top"===t?i-=n.height+11:i+=n.height+11),{top:i,left:o}},calculateMenuContentPos:function(){var t=void 0,e=void 0;if(!this._destroyed){if(t=this.mdDirection?this.getPosition.apply(this,this.mdDirection.trim().split(" ")):this.getPosition("bottom","right"),this.mdAutoWidth&&(e=this.menuTrigger.getBoundingClientRect().width,this.menuContent.style.width=parseInt(e,10)+"px"),this.mdFixed){if(0===this.mdMaxHeight)this.menuContent.style.maxHeight=window.innerHeight-this.menuTrigger.getBoundingClientRect().bottom-8+"px";else if(this.menuContent.children[0].children.length>0){var n=this.menuContent.children[0].children[0].clientHeight;this.menuContent.style.maxHeight=16+n*this.mdMaxHeight+"px"}}else t=(0,d.default)(this.menuContent,t);this.menuContent.style.top=t.top+window.pageYOffset+"px",this.menuContent.style.left=t.left+window.pageXOffset+"px"}},recalculateOnResize:function(){window.requestAnimationFrame(this.calculateMenuContentPos)},open:function(){document.body.contains(this.menuContent)&&document.body.removeChild(this.menuContent),document.body.appendChild(this.menuContent),document.body.appendChild(this.backdropElement),window.addEventListener("resize",this.recalculateOnResize),this.calculateMenuContentPos(),getComputedStyle(this.menuContent).top,this.menuContent.classList.add("md-active"),this.mdNoFocus||this.menuContent.focus(),this.active=!0,this.$emit("open")},close:function(){var t=this,e=function e(n){if(t.menuContent&&n.target===t.menuContent){var i=t.menuContent.querySelector(".md-ripple.md-active");t.menuContent.removeEventListener(s.default,e),t.mdNoFocus||t.menuTrigger.focus(),t.active=!1,i&&i.classList.remove("md-active"),document.body.contains(t.menuContent)&&document.body.removeChild(t.menuContent),document.body.contains(t.backdropElement)&&document.body.removeChild(t.backdropElement),window.removeEventListener("resize",t.recalculateOnResize)}};this.menuContent.addEventListener(s.default,e),this.menuContent.classList.remove("md-active"),this.$emit("close")},toggle:function(){this.active?this.close():this.open()},backdropClose:function(){this.$children[0]&&this.$children[0].hasOwnProperty("highlighted")&&(this.$children[0].highlighted=!1,this.$children[0].highlightChildren()),this.close()}},mounted:function(){var t=this;this.$nextTick((function(){t.menuTrigger=t.$el.querySelector("[md-menu-trigger]"),t.menuContent=t.$el.querySelector(".md-menu-content"),t.backdropElement=t.$refs.backdrop.$el,t.validateMenu(),t.handleAlignTriggerClass(t.mdAlignTrigger),t.addNewSizeMenuContentClass(t.mdSize),t.addNewDirectionMenuContentClass(t.mdDirection),t.$el.removeChild(t.$refs.backdrop.$el),t.menuContent.parentNode.removeChild(t.menuContent),t.mdManualToggle||t.menuTrigger.addEventListener("click",t.toggle)}))},beforeDestroy:function(){document.body.contains(this.menuContent)&&(document.body.removeChild(this.menuContent),document.body.removeChild(this.backdropElement)),this.mdManualToggle||this.menuTrigger.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.recalculateOnResize),this._destroyed=!0}},t.exports=e.default},290:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){return e.top<=0-parseInt(getComputedStyle(t).marginTop,10)},o=function(t,e){return e.top+t.offsetHeight+0>=window.innerHeight-parseInt(getComputedStyle(t).marginTop,10)},s=function(t,e){return e.left<=0-parseInt(getComputedStyle(t).marginLeft,10)},r=function(t,e){return e.left+t.offsetWidth+0>=window.innerWidth-parseInt(getComputedStyle(t).marginLeft,10)},d=function(t,e){var n=getComputedStyle(t);return i(t,e)&&(e.top=0-parseInt(n.marginTop,10)),s(t,e)&&(e.left=0-parseInt(n.marginLeft,10)),r(t,e)&&(e.left=window.innerWidth-0-t.offsetWidth-parseInt(n.marginLeft,10)),o(t,e)&&(e.top=window.innerHeight-0-t.offsetHeight-parseInt(n.marginTop,10)),e};e.default=d,t.exports=e.default},291:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu"},[t._t("default"),t._v(" "),n("md-backdrop",{ref:"backdrop",staticClass:"md-menu-backdrop md-transparent md-active",on:{close:t.backdropClose}})],2)},staticRenderFns:[]}},292:function(t,e,n){var i=n(0)(n(293),n(295),null,null,null);t.exports=i.exports},293:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),o=(function(t){return t&&t.__esModule?t:{default:t}})(i);n(294),e.default={name:"md-menu-item",props:{href:String,target:String,disabled:Boolean,listIndex:{type:Number,default:-1},manualHighlight:{type:Boolean,default:!1}},data:function(){return{parentContent:{},index:0,highlighted:!1}},computed:{classes:function(){return{"md-highlighted":this.highlighted}},getHighlight:function(){if(!this.manualHighlight)return this.index===this.parentContent.highlighted?(this.disabled&&(this.parentContent.oldHighlight>this.parentContent.highlighted?this.parentContent.highlighted--:this.parentContent.highlighted++),1===this.index?this.parentContent.$el.scrollTop=0:this.index===this.parentContent.itemsAmount?this.parentContent.$el.scrollTop=this.parentContent.$el.scrollHeight:this.$el.scrollIntoViewIfNeeded(!1),this.highlighted=!0,!0):(this.highlighted=!1,!1)}},methods:{close:function(t){this.parentMenu.mdManualToggle?this.disabled||(this.highlighted=!1,this.$emit("click",t),this.$emit("selected",t)):this.disabled||(this.parentMenu.mdCloseOnSelect&&this.parentContent.close(),this.highlighted=!1,this.$emit("click",t),this.$emit("selected",t))}},mounted:function(){if(this.parentContent=(0,o.default)(this.$parent,"md-menu-content"),this.parentMenu=(0,o.default)(this.$parent,"md-menu"),!this.parentContent)throw this.$destroy(),new Error("You must wrap the md-menu-item in a md-menu-content");-1===this.listIndex?(this.parentContent.itemListCount++,this.index=this.parentContent.itemListCount):this.index=this.listIndex+1}},t.exports=e.default},294:function(t,e){Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(t){t=0===arguments.length||!!t;var e=this.parentNode,n=window.getComputedStyle(e,null),i=parseInt(n.getPropertyValue("border-top-width")),o=parseInt(n.getPropertyValue("border-left-width")),s=this.offsetTop-e.offsetTop<e.scrollTop,r=this.offsetTop-e.offsetTop+this.clientHeight-i>e.scrollTop+e.clientHeight,d=this.offsetLeft-e.offsetLeft<e.scrollLeft,l=this.offsetLeft-e.offsetLeft+this.clientWidth-o>e.scrollLeft+e.clientWidth,h=s&&!r;(s||r)&&t&&(e.scrollTop=this.offsetTop-e.offsetTop-e.clientHeight/2-i+this.clientHeight/2),(d||l)&&t&&(e.scrollLeft=this.offsetLeft-e.offsetLeft-e.clientWidth/2-o+this.clientWidth/2),(s||r||d||l)&&!t&&this.scrollIntoView(h)})},295:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("md-list-item",{staticClass:"md-menu-item",class:t.classes,attrs:{href:t.href,target:t.target,disabled:t.disabled},on:{click:t.close}},[t._t("default")],2)},staticRenderFns:[]}},296:function(t,e,n){var i=n(0)(n(297),n(298),null,null,null);t.exports=i.exports},297:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-menu-content",data:function(){return{oldHighlight:!1,highlighted:!1,itemsAmount:0,itemListCount:0}},computed:{highlightedIndex:function(){return this.highlighted-1}},methods:{close:function(){this.highlighted=!1,this.$parent.close()},highlightItem:function(t){this.itemsAmount=this.$children[0].$children.length,this.itemsAmount<this.highlighted-1&&(this.highlighted=1),this.oldHighlight=this.highlighted,!1===this.highlighted&&this.getSelectedIndex()>-1&&(this.highlighted=this.getSelectedIndex()+1),"up"===t&&(this.highlighted<1&&(this.highlighted=1),1===this.highlighted?this.highlighted=this.itemsAmount:this.highlighted--),"down"===t&&(this.highlighted===this.itemsAmount?this.highlighted=1:this.highlighted++),this.highlightChildren()},fireClick:function(){this.highlighted>0&&this.getOptions()[this.highlightedIndex].$children[0].close()},getOptions:function(){return this.$children[0].$children.filter((function(t){return t.$el.classList.contains("md-option")}))},onKeyDown:function(t){var e=this,n=t.keyCode,i=t.key;if(n>=65&&n<=90){t.preventDefault(),this.itemsAmount=this.$children[0].$children.length;var o=this.$children[0].$children.filter((function(t){return t.$el.innerText.charAt(0).toLocaleLowerCase()===i})).map((function(t){return t.index})),s=o.findIndex((function(t){return t===e.highlighted})),r=o.length,d=(s+1)%r;this.highlighted=!!r&&o[d],this.highlightChildren()}},highlightChildren:function(){for(var t=0;t<this.itemsAmount;t++)this.$children[0].$children[t].$children[0].highlighted=!1,this.$children[0].$children[t].highlighted=!1;this.highlightedIndex>=0&&(this.$children[0].$children[this.highlightedIndex].$el.scrollIntoView({block:"start",behavior:"smooth",inline:"nearest"}),this.$children[0].$children[this.highlightedIndex].$children[0].highlighted=!0,this.$children[0].$children[this.highlightedIndex].highlighted=!0)},getSelectedIndex:function(){return this.getOptions().findIndex((function(t){return t.isSelected}))}},mounted:function(){if(!this.$parent.$el.classList.contains("md-menu"))throw this.$destroy(),new Error("You must wrap the md-menu-content in a md-menu")}},t.exports=e.default},298:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-menu-content",attrs:{tabindex:"-1"},on:{keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9))return null;e.preventDefault(),t.close(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.highlightItem("up")},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.highlightItem("down")},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.fireClick(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"space",32))return null;t.fireClick(e)},t.onKeyDown]}},[n("md-list",[t._t("default")],2)],1)},staticRenderFns:[]}},299:function(t,e){t.exports=".md-menu-content .THEME_NAME.md-list{background-color:BACKGROUND-COLOR;color:BACKGROUND-CONTRAST}.md-menu-content .THEME_NAME.md-list .md-menu-item:hover .md-button:not([disabled]),.md-menu-content .THEME_NAME.md-list .md-menu-item:focus .md-button:not([disabled]),.md-menu-content .THEME_NAME.md-list .md-menu-item.md-highlighted .md-button:not([disabled]){background-color:BACKGROUND-CONTRAST-0.12}.md-menu-content .THEME_NAME.md-list .md-menu-item[disabled]{color:BACKGROUND-CONTRAST-0.38}\n"},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(function(){var t=document.createElement("span"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]})(),t.exports=e.default},463:function(t,e,n){t.exports=n(286)}})}));