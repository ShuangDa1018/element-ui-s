!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mui=t():e.mui=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=25)}({0:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,s){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(3);function i(e){if(e&&0===parseInt(e))return!1;const t=["$parent"];if(e instanceof Date||"boolean"==typeof e||"number"==typeof e)return!1;if(!(e instanceof Array)){if(e instanceof Object){for(var n in e=Object(r.c)(e),t.forEach(t=>{delete e[t]}),e)return!1;return!0}return"null"===e||null==e||"undefined"===e||void 0===e||""===e}return 0===e.length}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r={nodeKey:"id",label:"label",value:"value",desc:"desc",groups:"groups",title:"title",leaf:"leaf",children:"children",labelText:"名称",disabled:"disabled"},i=(["img","array","url"].concat(["upload","dynamic","map","checkbox","cascader","dynamic","timerange","monthrange","daterange","datetimerange","dates"]),["dates","date","datetime","datetimerange","daterange","time","timerange","week","month","monthrange","year"].concat(["select","checkbox","radio","cascader","tree","color","icon","table","map"])," | ")},25:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"els-scratch-wrapper"},[e._t("default",null,{init:e.init}),e._v(" "),n("canvas",{on:{mousedown:e.mouseDown,mousemove:e.mouseMove,touchstart:e.touchDown,touchmove:e.touchMove}}),e._v(" "),n("div",{staticClass:"img-selector-point"})],2)};r._withStripped=!0;var i=n(3),o={name:"els-scratch",props:{brushOptions:{type:Object,default:()=>({size:20,shape:"round"})},hideOptions:{type:Object,default:()=>({color:"#dadada",repeat:"repeat"})},getPercentageCleared:{type:Boolean,default:!1},percentageStride:{type:Number,default:150}},data:()=>({canvas:null,context:null,isPressed:!1,offset:{top:0,left:0},position:{currX:0,currY:0,lastX:0,lastY:0},observer:null,initFlag:!1}),computed:{imgSelectorSize(){const e=this.brushOptions.width;return{width:e+"px",height:e+"px"}}},mounted(){this.canvas=this.$el.querySelector("canvas");const e=Object(i.b)(()=>this.init(),200);this.observer=new MutationObserver(t=>{t.forEach(({attributeName:t})=>{!this.initFlag&&t&&(console.log(1),e())})}),this.observer.observe(this.$el,{childList:!0,attributes:!0,characterData:!0,subtree:!0}),window.addEventListener("mouseup",this.mouseUp,!1),window.addEventListener("touchend",this.touchUp,!1),window.addEventListener("touchcancel",this.touchUp,!1),window.addEventListener("resize",Object(i.b)(this.init,500))},destroyed(){window.removeEventListener("mouseup",this.mouseUp),window.removeEventListener("touchend",this.touchUp),window.removeEventListener("touchcancel",this.touchUp),window.removeEventListener("resize",Object(i.b)(this.init,500)),this.observer.disconnect()},methods:{init(){console.log(2),this.initFlag=!0,this.setCanvasSizeAndContext(),this.$nextTick(()=>this.fillArea())},setCanvasSizeAndContext(){this.$nextTick(()=>{const{width:e,height:t}=this.$el.getBoundingClientRect();this.canvas.width=Math.ceil(e),this.canvas.height=Math.ceil(t),this.context=this.canvas.getContext("2d")})},setOffsets(){const{top:e,left:t}=this.canvas.getBoundingClientRect();this.offset.top=e+document.body.scrollTop,this.offset.left=t+document.body.scrollLeft},async fillArea(){const{width:e,height:t}=this.context.canvas;await this.setFillStyle().catch(e=>{console.error(` Failed to load image!\n            Error: ${e.name}\n            Message: ${e.message}\n          `)}),this.context.fillRect(0,0,e,t),this.initFlag=!1},setFillStyle(){const{color:e,src:t,repeat:n}=this.hideOptions;return this.context.globalCompositeOperation="source-over",new Promise(t?(e,r)=>{const i=new Image;i.onload=()=>{this.context.fillStyle=this.context.createPattern(i,n),e(i)},i.onerror=e=>r(e),i.src=t}:t=>t(this.context.fillStyle=e))},clearArea(){const{width:e,height:t}=this.context.canvas;this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,e,t)},draw(){const{currX:e,currY:t,lastX:n,lastY:r}=this.position;this.context.beginPath(),this.context.globalCompositeOperation="destination-out",this.context.lineWidth=this.brushOptions.width,this.context.lineJoin=this.brushOptions.shape,this.context.moveTo(n,r),this.isPressed?this.context.lineTo(e,t):this.context.lineTo(e+.01,t+.01),this.context.closePath(),this.context.stroke(),this.lastPositionHelper(e,t),this.calculateClearedArea()},lastPositionHelper(e,t){this.position.lastX=e,this.position.lastY=t},currentPositionHelper(e,t){this.position.currX=e-this.offset.left,this.position.currY=t-this.offset.top},mouseDown({clientX:e,clientY:t}){this.setOffsets(),this.currentPositionHelper(e,t),this.lastPositionHelper(this.position.currX,this.position.currY),this.draw(),this.isPressed=!0},mouseMove({clientX:e,clientY:t}){this.isPressed&&(this.currentPositionHelper(e,t),this.draw())},mouseUp(){this.isPressed=!1},touchDown({targetTouches:[{clientX:e,clientY:t}]}){this.setOffsets(),this.currentPositionHelper(e,t),this.lastPositionHelper(this.position.currX,this.position.currY),this.draw(),this.isPressed=!0},touchMove(e){e.preventDefault();const{targetTouches:[{clientX:t,clientY:n}]}=e;this.currentPositionHelper(t,n),this.draw()},touchUp(){this.isPressed=!1},calculateClearedArea(){if(!this.getPercentageCleared)return;const{width:e,height:t}=this.context.canvas,{data:n,data:{length:r}}=this.context.getImageData(0,0,e,t),i=r/this.percentageStride;let o=0;for(let e=o;e<r;e+=this.percentageStride)0===parseInt(n[e],10)&&(o+=1);this.$emit("percentage-update",Math.round(o/i*100))}}},a=n(0),s=Object(a.a)(o,r,[],!1,null,null,null);s.options.__file="packages/lib/scratch/src/main.vue";var c=s.exports;c.install=function(e){e.component(c.name,c)};t.default=c},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return dataURLtoFile})),__webpack_require__.d(__webpack_exports__,"d",(function(){return randomId})),__webpack_require__.d(__webpack_exports__,"c",(function(){return deepClone})),__webpack_require__.d(__webpack_exports__,"e",(function(){return setPx})),__webpack_require__.d(__webpack_exports__,"b",(function(){return debounce}));var _validate__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_variable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);function getFixed(e=0,t=2){return Number(e.toFixed(t))}function getAsVal(e,t=""){let n=deepClone(e);return Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(t)||t.split(".").forEach(e=>{n=Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(n[e])?"":n[e]}),n}function setAsVal(obj,bind="",value=""){return eval("obj."+bind+"=`"+value+"`"),obj}const loadScript=(e="js",t)=>{let n=!1;return new Promise(r=>{const i=document.getElementsByTagName("head")[0];if(i.children.forEach(e=>{-1!==(e.src||"").indexOf(t)&&(n=!0,r())}),n)return;let o;"js"===e?(o=document.createElement("script"),o.type="text/javascript",o.src=t):"css"===e&&(o=document.createElement("link"),o.rel="stylesheet",o.type="text/css",o.href=t),i.appendChild(o),o.onload=function(){r()}})};function downFile(e,t){"object"==typeof e&&e instanceof Blob&&(e=URL.createObjectURL(e));var n,r=document.createElement("a");r.href=e,r.download=t||"",window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(n)}function strCorNum(e){return e.forEach((t,n)=>{e[n]=Number(t)}),e}function extend(){var e,t,n,r,i=arguments[0]||{},o=!1,a=Array.prototype.slice.call(arguments),s=1,c=!1;for("boolean"==typeof i&&(o=i,s++,i=arguments[1]);s<a.length;s++)if(null!=(e=a[s]))for(n in e)r=e[n],t=i[n],o&&("[object Object]"===toString.call(r)||(c="[object Array]"==toString.call(r)))?(t=c?"[object Array]"===toString.call(t)?t:[]:"[object Object]"===toString.call(t)?t:{},i[n]=extend(o,t,r)):void 0!==r&&r!==t&&(i[n]=r);return i}function createObj(e,t){let n=t.split("."),r=n.splice(0,1)[0],i={};if(i[r]={},n.length>=2){let e="{",t="}",o="";n.forEach(t=>{o=`${o}${e}"${t}":`}),o+='""';for(let e=0;e<n.length;e++)o=`${o}${t}`;o=JSON.parse(o),i[r]=o}return e=extend(!0,e,i)}function dataURLtoFile(e,t){let n=e.split(","),r=n[0].match(/:(.*?);/)[1],i=atob(n[1]),o=i.length,a=new Uint8Array(o);for(;o--;)a[o]=i.charCodeAt(o);return new File([a],t,{type:r})}function findObject(e,t,n="prop"){let r=-1,i=(()=>{let t;return e.forEach(e=>{e.column?t="group":e.children&&(t="tree")}),t})();return"group"===i?e.forEach(e=>{const i=findArray(e.column,t,n,!0);-1!==i&&(r=i)}):r="tree"===i?findLabelNode(e,t,{value:n},!0):findArray(e,t,n,!0),r}function randomId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t=e.length,n="";for(let r=0;r<16;r++)n+=e.charAt(Math.floor(Math.random()*t));return n}const getObjType=e=>{var t=Object.prototype.toString;return e instanceof Element?"element":{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[t.call(e)]},isJson=e=>Array.isArray(e)?e[0]instanceof Object:e instanceof Object,deepClone=e=>{var t,n=getObjType(e);if("array"===n)t=[];else{if("object"!==n)return e;t={}}if("array"===n)for(var r=0,i=e.length;r<i;r++)e[r]=(e[r],e[r]),e[r]&&delete e[r].$parent,t.push(deepClone(e[r]));else if("object"===n)for(var o in e)e&&delete e.$parent,t[o]=deepClone(e[o]);return t},sortArrys=(e,t)=>(e.sort((function(e,n){return e[t]>n[t]?-1:e[t]<n[t]?1:0})),e),setPx=(e,t="")=>(Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e)&&(e=t),Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e)?"":(-1===(e+="").indexOf("%")&&(e+="px"),e)),detailDataType=(e,t)=>Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e)?e:"number"===t?Number(e):"string"===t?e+"":e,getUrlParams=e=>{let t={url:"",params:{}},n=e.split("?");t.url=n[0];let r=n[1];if(r){r.split("&").forEach(e=>{let n=e.split("="),r=n[0],i=n[1];t.params[r]=i})}return t},detailDic=(e=[],t={},n)=>{let r=t.value||_variable__WEBPACK_IMPORTED_MODULE_1__.a.value,i=t.children||_variable__WEBPACK_IMPORTED_MODULE_1__.a.children;return e.forEach(e=>{e[r]=detailDataType(e[r],n),e[i]&&detailDic(e[i],t,n)}),e},findByValue=(e,t,n)=>{if(Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e))return t;let r="",i=t instanceof Array,o=i?t:[t];n=n||_variable__WEBPACK_IMPORTED_MODULE_1__.a,r=[];for(let t=0;t<o.length;t++)r.push(findLabelNode(e,o[t],n)||o[t]);return i?r.join(_variable__WEBPACK_IMPORTED_MODULE_1__.b).toString():r.join()},filterDefaultParams=(e,t=!0)=>{let n=deepClone(e);if(t)return n;for(let e in n)(-1!==e.indexOf("$")||Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(n[e]))&&delete n[e];return n},detailDicGroup=(e=[],t={})=>{let n=deepClone(e),r=t[_variable__WEBPACK_IMPORTED_MODULE_1__.a.groups]||_variable__WEBPACK_IMPORTED_MODULE_1__.a.groups;return e.forEach(e=>{e[r]&&(n=n.concat(e[r]))}),n},findLabelNode=(e,t,n,r)=>{let i;r||(e=detailDicGroup(e,n));let o=e=>{const a=n.label||_variable__WEBPACK_IMPORTED_MODULE_1__.a.label,s=n.value||_variable__WEBPACK_IMPORTED_MODULE_1__.a.value,c=n.children||_variable__WEBPACK_IMPORTED_MODULE_1__.a.children;for(let n=0;n<e.length;n++){const l=e[n],u=l[c]||[];l[s]===t?i=r?l:l[a]:o(u)}};return o(e),i},getDeepData=e=>(Array.isArray(e)?e:e.data)||[],getObjValue=(e,t="",n)=>{const r=t.split(".");let i=e;return""===r[0]&&"object"!==n?getDeepData(e):(""!==r[0]&&r.forEach(e=>{i=i[e]}),i)},findArray=(e,t,n,r)=>{n=n||_variable__WEBPACK_IMPORTED_MODULE_1__.a.value;for(let i=0;i<e.length;i++)if(e[i][n]===t)return r?e[i]:i;return-1},getPasswordChar=(e="",t)=>{let n=e.toString().length;e="";for(let r=0;r<n;r++)e+=t;return e},arraySort=(e=[],t,n)=>e.filter(e=>!Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e[t])).sort((e,t)=>n(e,t)).concat(e.filter(e=>Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e[t]))),clearVal=(e,t=[])=>e?(Object.keys(e).forEach(n=>{if(!t.includes(n))if(n.includes("$"))delete e[n];else if(!Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e[n])){let t=getObjType(e[n]);"array"===t?e[n]=[]:"object"===t?e[n]={}:["number","boolean"].includes(t)?e[n]=void 0:e[n]=""}}),e):{},vaildData=(e,t)=>"boolean"==typeof e?e:Object(_validate__WEBPACK_IMPORTED_MODULE_0__.a)(e)?t:e,debounce=(e,t,n)=>{let r=null;return function(){if(clearTimeout(r),n&&null==r)return e.apply(this,arguments),void(r=0);r=setTimeout(()=>{e.apply(this),r=null},t)}}}})}));