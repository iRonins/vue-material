/*!
* Vue Material v0.7.5
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=469)})({0:function(t,e){t.exports=function(t,e,n,i,r){var o,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i);var l;if(r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var a=c.functional,f=a?c.render:c.beforeCreate;a?c.render=function(t,e){return l.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:c}}},1:function(t,e,n){"use strict";function i(t){if(!t)return null;var e=t.mdTheme;return e||"md-theme"!==t.$options._componentTag||(e=t.mdName),e||i(t.$parent)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(t){this.$material.useTheme(t)}},beforeMount:function(){var t=this.mdTheme;this.$material.useTheme(t||"default")}},t.exports=e.default},10:function(t,e,n){var i=n(8),r=n(18);t.exports=n(3)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},11:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},12:function(t,e,n){var i=n(11);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function t(e,n){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(n)?e:t(e.$parent,n)))};e.default=i,t.exports=e.default},14:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},15:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},16:function(t,e,n){var i=n(2),r=n(4),o=n(31),s=n(10),u=function(t,e,n){var c,l,a,f=t&u.F,p=t&u.G,d=t&u.S,h=t&u.P,m=t&u.B,v=t&u.W,x=p?r:r[e]||(r[e]={}),_=x.prototype,b=p?i:d?i[e]:(i[e]||{}).prototype;p&&(n=e);for(c in n)(l=!f&&b&&void 0!==b[c])&&c in x||(a=l?b[c]:n[c],x[c]=p&&"function"!=typeof b[c]?n[c]:m&&l?o(a,i):v&&b[c]==a?(function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e})(a):h&&"function"==typeof a?o(Function.call,a):a,h&&((x.virtual||(x.virtual={}))[c]=a,t&u.R&&_&&!_[c]&&s(_,c,a)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},17:function(t,e,n){var i=n(29),r=n(23);t.exports=Object.keys||function(t){return i(t,r)}},18:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},19:function(t,e,n){var i=n(22)("keys"),r=n(20);t.exports=function(t){return i[t]||(i[t]=r(t))}},2:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},20:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},21:function(t,e,n){var i=n(14);t.exports=function(t){return Object(i(t))}},22:function(t,e,n){var i=n(2),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},23:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},24:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},25:function(t,e,n){var i=n(11),r=n(2).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},26:function(t,e,n){var i=n(11);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},27:function(t,e,n){var i=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},29:function(t,e,n){var i=n(6),r=n(7),o=n(33)(!1),s=n(19)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),c=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>c;)i(u,n=e[c++])&&(~o(l,n)||l.push(n));return l}},3:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},30:function(t,e,n){var i=n(15),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},31:function(t,e,n){var i=n(35);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},32:function(t,e,n){t.exports=!n(3)&&!n(5)((function(){return 7!=Object.defineProperty(n(25)("div"),"a",{get:function(){return 7}}).a}))},328:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){t.component("md-select",s.default),t.component("md-option",c.default),t.material.styles.push(a.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(329),s=i(o),u=n(333),c=i(u),l=n(336),a=i(l);t.exports=e.default},329:function(t,e,n){function i(t){n(330)}var r=n(0)(n(331),n(332),i,null,null);t.exports=r.exports},33:function(t,e,n){var i=n(7),r=n(30),o=n(34);t.exports=function(t){return function(e,n,s){var u,c=i(e),l=r(c.length),a=o(s,l);if(t&&n!=n){for(;l>a;)if((u=c[a++])!=u)return!0}else for(;l>a;a++)if((t||a in c)&&c[a]===n)return t||a||0;return!t&&-1}}},330:function(t,e){},331:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(47),o=i(r),s=n(40),u=i(s),c=n(1),l=i(c),a=n(13),f=i(a),p=n(72),d=i(p);e.default={name:"md-select",props:{name:String,id:String,required:Boolean,multiple:Boolean,value:[String,Boolean,Number,Array],disabled:Boolean,placeholder:String,mdMenuClass:String,mdMenuOptions:Object},mixins:[l.default],data:function(){return{lastSelected:null,selectedValue:null,selectedText:null,multipleOptions:{},options:{},optionsAmount:0}},computed:{classes:function(){return{"md-disabled":this.disabled,"md-select-icon":this.hasIcon}},contentClasses:function(){return this.multiple?"md-multiple "+this.mdMenuClass:this.mdMenuClass},hasIcon:function(){return this.$slots.icon},valueStyle:function(){return this.hasIcon?{display:"none"}:{}}},watch:{value:function(t){this.setTextAndValue(t),this.multiple&&this.selectOptions(t)},disabled:function(){this.setParentDisabled()},required:function(){this.setParentRequired()},placeholder:function(){this.setParentPlaceholder()}},methods:{onArrowKeyDown:function(){this.$children[0].open()},onFocus:function(t){this.parentContainer&&(this.parentContainer.isFocused=!0),this.$emit("focus",this.$el.value,t)},onBlur:function(t){this.parentContainer.isFocused=!1,this.$emit("blur",this.$el.value,t)},changeValue:function(t){this.$emit("input",t),this.$emit("change",t),this.$emit("selected",t)},getSingleValue:function(t){var e=this,n={};return(0,u.default)(this.options).forEach((function(i){var r=e.options[i];r.value===t&&(n.value=t,n.text=r.$refs.item.textContent,n.el=r.$refs.item)})),n},getMultipleValue:function(t){var e=this;if((0,d.default)(this.value)){var n=[];return t.forEach((function(t){(0,u.default)(e.options).forEach((function(i){var r=e.options[i];if(r.value===t){var o=r.$refs.item.textContent;e.multipleOptions[i]={value:t,text:o},n.push(o)}}))})),{value:t,text:n.join(", ")}}return{}},onOpen:function(){this.onFocus(),this.lastSelected&&this.lastSelected.scrollIntoViewIfNeeded(!0),this.$emit("opened")},onClose:function(){this.$el.focus(),this.$emit("closed")},removeChild:function(t){this.optionsAmount--;var e=(0,o.default)({},this.options[t]);if(delete this.options[t],delete this.multipleOptions[t],this.multiple){var n=this.selectedValue.find((function(t){return t.name===e.$refs.item.textContent.trim()})),i=this.selectedValue.indexOf(n);-1!==i&&this.selectedValue.splice(i,1)}},setParentDisabled:function(){this.parentContainer.isDisabled=this.disabled},setParentRequired:function(){this.parentContainer.isRequired=this.required},setParentPlaceholder:function(){this.parentContainer.hasPlaceholder=!!this.placeholder},selectOptions:function(t){var e=this,n=(0,u.default)(this.options).map((function(t){return e.options[t]}));if(n&&n.length){var i=n.filter((function(e){return t.includes(e.value)})),r=n.filter((function(e){return!t.includes(e.value)}));i.forEach((function(t){t.check=!0})),r.forEach((function(t){t.check=!1}))}},setTextAndValue:function(t){var e=this.multiple?this.getMultipleValue(t):this.getSingleValue(t);this.selectedValue=e.value,this.selectedText=e.text,this.lastSelected=e.el,this.parentContainer&&this.parentContainer.setValue(this.selectedText)},selectMultiple:function(t,e,n){var i=this;this.$nextTick((function(){var r=[];i.multipleOptions[t]={value:e,text:n};for(var o in i.multipleOptions)i.multipleOptions.hasOwnProperty(o)&&i.multipleOptions[o].value&&r.push(i.multipleOptions[o].value);i.changeValue(r)}))},selectOption:function(t,e,n){this.lastSelected=n,this.selectedText=e,this.setTextAndValue(t),this.changeValue(t)}},mounted:function(){this.parentContainer=(0,f.default)(this.$parent,"md-input-container"),this.parentContainer&&(this.setParentDisabled(),this.setParentRequired(),this.setParentPlaceholder(),this.parentContainer.hasSelect=!0),this.setTextAndValue(this.value)},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.setValue(""),this.parentContainer.hasSelect=!1)}},t.exports=e.default},332:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md-select",class:[t.themeClass,t.classes],attrs:{tabindex:"0"},on:{focus:t.onFocus,blur:t.onBlur,keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.onArrowKeyDown(e)}}},[n("md-menu",t._b({attrs:{"md-close-on-select":!t.multiple},on:{open:t.onOpen,close:t.onClose}},"md-menu",t.mdMenuOptions,!1),[t._t("icon"),t._v(" "),n("span",{ref:"value",staticClass:"md-select-value",style:t.valueStyle,attrs:{"md-menu-trigger":""}},[t._v("\n      "+t._s(t.selectedText||t.placeholder)+"\n    ")]),t._v(" "),n("md-menu-content",{staticClass:"md-select-content",class:[t.themeClass,t.contentClasses]},[t._t("default")],2)],2),t._v(" "),n("select",{attrs:{name:t.name,id:t.id,required:t.required,disabled:t.disabled,tabindex:"-1"}},[t.multiple?t._e():n("option",{attrs:{selected:"true"},domProps:{value:t.selectedValue}},[t._v("\n      "+t._s(t.selectedText)+"\n    ")]),t._v(" "),t._l(t.multipleOptions,(function(e,i){return e.value?n("option",{key:i,attrs:{selected:"true"},domProps:{value:e.value}},[t._v("\n      "+t._s(e.text)+"\n    ")]):t._e()}))],2)],1)},staticRenderFns:[]}},333:function(t,e,n){var i=n(0)(n(334),n(335),null,null,null);t.exports=i.exports},334:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),r=(function(t){return t&&t.__esModule?t:{default:t}})(i);e.default={name:"md-option",props:{value:[String,Boolean,Number,Object]},data:function(){return{parentSelect:{},check:!1,index:0}},computed:{isSelected:function(){if(this.value&&this.parentSelect.value){var t=this.value.toString();return this.parentSelect.multiple?this.parentSelect.value.indexOf(t)>=0:this.value&&this.parentSelect.value&&t===this.parentSelect.value.toString()}return!1},classes:function(){return{"md-selected":this.isSelected,"md-checked":this.check}}},methods:{isMultiple:function(){return this.parentSelect.multiple},setParentOption:function(){this.isMultiple()?this.check=!this.check:this.parentSelect.selectOption(this.value,this.$refs.item.textContent,this.$el)},selectOption:function(t){this.disabled||(this.setParentOption(),this.$emit("selected",t))}},watch:{isSelected:function(t){this.isMultiple()&&(this.check=t)},check:function(t){t?this.parentSelect.selectMultiple(this.index,this.value,this.$refs.item.textContent):this.parentSelect.selectMultiple(this.index)}},mounted:function(){if(this.parentSelect=(0,r.default)(this.$parent,"md-select"),this.parentContent=(0,r.default)(this.$parent,"md-menu-content"),!this.parentSelect)throw new Error("You must wrap the md-option in a md-select");this.parentSelect.optionsAmount++,this.index=this.parentSelect.optionsAmount,this.parentSelect.multipleOptions[this.index]={},this.parentSelect.options[this.index]=this,(this.isMultiple()&&this.parentSelect.value.indexOf(this.value)>=0||this.parentSelect.value===this.value)&&this.setParentOption()},beforeDestroy:function(){this.parentSelect&&this.parentSelect.removeChild(this.index)}},t.exports=e.default},335:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-menu-item",{staticClass:"md-option",class:t.classes,attrs:{tabindex:"-1"},on:{click:t.selectOption}},[t.parentSelect.multiple?n("md-checkbox",{staticClass:"md-primary",model:{value:t.check,callback:function(e){t.check=e},expression:"check"}},[n("span",{ref:"item"},[t._t("default")],2)]):n("span",{ref:"item"},[t._t("default")],2)],1)},staticRenderFns:[]}},336:function(t,e){t.exports=".THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-select:after{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-select-content .md-menu-item.md-selected,.THEME_NAME.md-select-content .md-menu-item.md-checked{color:PRIMARY-COLOR}\n"},34:function(t,e,n){var i=n(15),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},35:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},38:function(t,e){e.f={}.propertyIsEnumerable},4:function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},40:function(t,e,n){t.exports={default:n(48),__esModule:!0}},42:function(t,e){e.f=Object.getOwnPropertySymbols},469:function(t,e,n){t.exports=n(328)},47:function(t,e,n){t.exports={default:n(58),__esModule:!0}},48:function(t,e,n){n(49),t.exports=n(4).Object.keys},49:function(t,e,n){var i=n(21),r=n(17);n(50)("keys",(function(){return function(t){return r(i(t))}}))},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},50:function(t,e,n){var i=n(16),r=n(4),o=n(5);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",s)}},58:function(t,e,n){n(59),t.exports=n(4).Object.assign},59:function(t,e,n){var i=n(16);i(i.S+i.F,"Object",{assign:n(60)})},6:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},60:function(t,e,n){"use strict";var i=n(17),r=n(42),o=n(38),s=n(21),u=n(27),c=Object.assign;t.exports=!c||n(5)((function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i}))?function(t,e){for(var n=s(t),c=arguments.length,l=1,a=r.f,f=o.f;c>l;)for(var p,d=u(arguments[l++]),h=a?i(d).concat(a(d)):i(d),m=h.length,v=0;m>v;)f.call(d,p=h[v++])&&(n[p]=d[p]);return n}:c},7:function(t,e,n){var i=n(27),r=n(14);t.exports=function(t){return i(r(t))}},72:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.constructor===Array};e.default=i,t.exports=e.default},8:function(t,e,n){var i=n(12),r=n(32),o=n(26),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}}})}));