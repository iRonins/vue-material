/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=450)})({0:function(t,e){t.exports=function(t,e,o,r,n){var d,m=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(d=t,m=t.default);var a="function"==typeof m?m.options:m;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r);var s;if(n?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},a._ssrRegister=s):o&&(s=o),s){var c=a.functional,u=c?a.render:a.beforeCreate;c?a.render=function(t,e){return s.call(e),u(t,e)}:a.beforeCreate=u?[].concat(u,s):[s]}return{esModule:d,exports:m,options:a}}},1:function(t,e,o){"use strict";function r(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||r(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return r(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},120:function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t){t.component("md-bottom-bar",m.default),t.component("md-bottom-bar-item",a.default),t.material.styles.push(c.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var d=o(121),m=r(d),i=o(125),a=r(i),s=o(128),c=r(s);t.exports=e.default},121:function(t,e,o){function r(t){o(122)}var n=o(0)(o(123),o(124),r,null,null);t.exports=n.exports},122:function(t,e){},123:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),n=(function(t){return t&&t.__esModule?t:{default:t}})(r);e.default={name:"md-bottom-bar",props:{mdShift:Boolean},mixins:[n.default],computed:{classes:function(){return this.mdShift?"md-shift":"md-fixed"}},methods:{setActive:function(t){this.$children.forEach((function(e){e.active=e===t})),this.$emit("change",this.$children.findIndex((function(e){return e===t})))}}},t.exports=e.default},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-bottom-bar",class:[t.themeClass,t.classes]},[t._t("default")],2)},staticRenderFns:[]}},125:function(t,e,o){var r=o(0)(o(126),o(127),null,null,null);t.exports=r.exports},126:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"md-bottom-bar-item",props:{mdIcon:String,mdIconSrc:String,mdIconset:String,mdActive:Boolean,disabled:Boolean,href:String},data:function(){return{active:!1}},computed:{classes:function(){return{"md-active":this.active}}},watch:{mdActive:function(t){this.setActive(t)}},methods:{setActive:function(t,e){t&&this.$parent.setActive(this),e&&this.$emit("click",e)}},mounted:function(){if(!this.$parent.$el.classList.contains("md-bottom-bar"))throw this.$destroy(),new Error("You should wrap the md-bottom-bar-item in a md-bottom-bar");this.mdActive&&(this.active=!0)}},t.exports=e.default},127:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.href?o("a",{staticClass:"md-bottom-bar-item",class:t.classes,attrs:{href:t.href,disabled:t.disabled},on:{click:function(e){t.setActive(!0,e)}}},[t.mdIcon||t.mdIconSrc||t.mdIconset?o("md-icon",{attrs:{"md-src":t.mdIconSrc,"md-iconset":t.mdIconset}},[t._v(t._s(t.mdIcon))]):t._e(),t._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),o("span",{staticClass:"md-text"},[t._t("default")],2)],1):o("button",{staticClass:"md-bottom-bar-item",class:t.classes,attrs:{type:"button",disabled:t.disabled},on:{click:function(e){t.setActive(!0,e)}}},[t.mdIcon||t.mdIconSrc||t.mdIconset?o("md-icon",{attrs:{"md-src":t.mdIconSrc,"md-iconset":t.mdIconset}},[t._v(t._s(t.mdIcon))]):t._e(),t._v(" "),o("md-ink-ripple",{attrs:{"md-disabled":t.disabled}}),t._v(" "),o("span",{staticClass:"md-text"},[t._t("default")],2)],1)},staticRenderFns:[]}},128:function(t,e){t.exports=".THEME_NAME.md-bottom-bar.md-fixed{background-color:BACKGROUND-COLOR}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active{color:PRIMARY-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active{color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active{color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift{background-color:PRIMARY-COLOR;color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:PRIMARY-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{color:PRIMARY-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-accent{background-color:ACCENT-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:ACCENT-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active{color:ACCENT-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-warn{background-color:WARN-COLOR}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item{color:WARN-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:WARN-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active{color:WARN-CONTRAST}.THEME_NAME.md-bottom-bar.md-shift.md-transparent{background-color:transparent}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active){color:BACKGROUND-CONTRAST-0.87}.THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active{color:BACKGROUND-CONTRAST}\n"},450:function(t,e,o){t.exports=o(120)}})}));