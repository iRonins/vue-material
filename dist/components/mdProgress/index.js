/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.VueMaterial=r():e.VueMaterial=r()})(this,(function(){return (function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="/",r(r.s=465)})({0:function(e,r){e.exports=function(e,r,t,n,o){var s,d=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,d=e.default);var c="function"==typeof d?d.options:d;r&&(c.render=r.render,c.staticRenderFns=r.staticRenderFns),n&&(c._scopeId=n);var i;if(o?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=i):t&&(i=t),i){var u=c.functional,m=u?c.render:c.beforeCreate;u?c.render=function(e,r){return i.call(r),m(e,r)}:c.beforeCreate=m?[].concat(m,i):[i]}return{esModule:s,exports:d,options:c}}},1:function(e,r,t){"use strict";function n(e){if(!e)return null;var r=e.mdTheme;return r||"md-theme"!==e.$options._componentTag||(r=e.mdName),r||n(e.$parent)}Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return n(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e||"default")}},e.exports=r.default},309:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-progress",d.default),e.material.styles.push(c.default)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var s=t(310),d=n(s),a=t(314),c=n(a);e.exports=r.default},310:function(e,r,t){function n(e){t(311)}var o=t(0)(t(312),t(313),n,null,null);e.exports=o.exports},311:function(e,r){},312:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(n);r.default={name:"md-progress",props:{mdIndeterminate:Boolean,mdProgress:{type:Number,default:0}},mixins:[o.default],computed:{classes:function(){return{"md-indeterminate":this.mdIndeterminate}},styles:function(){if(!this.mdIndeterminate)return{width:this.mdProgress+"%"}}}},e.exports=r.default},313:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("transition",{attrs:{name:"md-progress",appear:""}},[t("div",{staticClass:"md-progress",class:[e.themeClass,e.classes]},[t("div",{staticClass:"md-progress-track",style:e.styles})])])},staticRenderFns:[]}},314:function(e,r){e.exports=".THEME_NAME.md-progress{background-color:PRIMARY-COLOR-0.38}.THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress .md-progress-track:after,.THEME_NAME.md-progress .md-progress-track:before{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress.md-accent{background-color:ACCENT-COLOR-0.38}.THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-accent .md-progress-track:after,.THEME_NAME.md-progress.md-accent .md-progress-track:before{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-warn{background-color:WARN-COLOR-0.38}.THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track{background-color:WARN-COLOR}.THEME_NAME.md-progress.md-warn .md-progress-track:after,.THEME_NAME.md-progress.md-warn .md-progress-track:before{background-color:WARN-COLOR}\n"},465:function(e,r,t){e.exports=t(309)}})}));