/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=473)})({0:function(e,t){e.exports=function(e,t,n,r,s){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var u="function"==typeof i?i.options:i;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=d):n&&(d=n),d){var c=u.functional,f=c?u.render:u.beforeCreate;c?u.render=function(e,t){return d.call(t),f(e,t)}:u.beforeCreate=f?[].concat(f,d):[d]}return{esModule:o,exports:i,options:u}}},1:function(e,t,n){"use strict";function r(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||r(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=t.default},357:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){e.component("md-spinner",i.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var o=n(358),i=r(o),a=n(362),u=r(a);e.exports=t.default},358:function(e,t,n){function r(e){n(359)}var s=n(0)(n(360),n(361),r,null,null);e.exports=s.exports},359:function(e,t){},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=(function(e){return e&&e.__esModule?e:{default:e}})(r);t.default={name:"md-spinner",props:{mdSize:{type:Number,default:50},mdStroke:{type:Number,default:3.5},mdIndeterminate:Boolean,mdProgress:{type:Number,default:0}},mixins:[s.default],computed:{classes:function(){return{"md-indeterminate":this.mdIndeterminate}},styles:function(){var e=this.mdSize+"px";return{width:e,height:e}},dashProgress:function(){var e=125*this.mdProgress/100;return!this.mdIndeterminate&&(e>=125&&(e=130),e+", 200")}}},e.exports=t.default},361:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"md-spinner",appear:""}},[n("div",{staticClass:"md-spinner",class:[e.themeClass,e.classes],style:e.styles},[n("svg",{staticClass:"md-spinner-draw",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"md-spinner-path",attrs:{cx:"50",cy:"50",r:"20","stroke-width":e.mdStroke,"stroke-dasharray":e.dashProgress}})])])])},staticRenderFns:[]}},362:function(e,t){e.exports=".THEME_NAME.md-spinner .md-spinner-path{stroke:PRIMARY-COLOR}.THEME_NAME.md-spinner.md-accent .md-spinner-path{stroke:ACCENT-COLOR}.THEME_NAME.md-spinner.md-warn .md-spinner-path{stroke:WARN-COLOR}\n"},473:function(e,t,n){e.exports=n(357)}})}));