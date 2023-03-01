!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=87)}([function(e,t,n){"use strict";e.exports=n(57)},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return f})),n.d(t,"n",(function(){return L})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return v})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return y})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return E})),n.d(t,"w",(function(){return N})),n.d(t,"x",(function(){return A})),n.d(t,"y",(function(){return _}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,c=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=i(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,u=()=>{try{return l()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&a(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},c=e=>{var t,n;return null===(n=null===(t=u())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=e=>{const t=c(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},d=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config},f=e=>{var t;return null===(t=u())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function v(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function w(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){return!function(){var t;const n=null===(t=u())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"==typeof indexedDB}catch(e){return!1}}function _(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class k extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new k(r,o,n)}}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(O(n)&&O(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function A(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function R(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){const n=new D(e,t);return n.subscribe.bind(n)}class D{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}}).call(this,n(30),n(31))},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return N})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return F}));var r=n(12),i=n(9),s=n(1);let o,a;const l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap;let f={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),g(l.get(this))}:function(...t){return g(e.apply(y(this),t))}:function(t,...n){const r=e.call(y(this),t,...n);return c.set(r,t.sort?t.sort():[t]),g(r)}}function m(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}(e),t=e,(o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,f):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=m(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const y=e=>d.get(e);const v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(w.get(t))return w.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!v.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return w.set(t,s),s}f=(e=>({...e,get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(f);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const _="@firebase/app",k=new i.b("@firebase/app"),S={[_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,I=new Map;function C(e,t){try{e.container.addComponent(t)}catch(n){k.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(I.has(t))return k.debug(`There were multiple attempts to register component ${t}.`),!1;I.set(t,e);for(const t of x.values())C(t,e);return!0}function N(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function A(e,t,n="[DEFAULT]"){N(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const R={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},P=new s.b("app","Firebase",R);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M="9.17.1";function L(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw P.create("bad-app-name",{appName:String(o)});if(n||(n=Object(s.j)()),!n)throw P.create("no-options");const a=x.get(o);if(a){if(Object(s.h)(n,a.options)&&Object(s.h)(i,a.config))return a;throw P.create("duplicate-app",{appName:o})}const l=new r.b(o);for(const e of I.values())l.addComponent(e);const u=new D(n,i,l);return x.set(o,u),u}function j(e="[DEFAULT]"){const t=x.get(e);if(!t&&"[DEFAULT]"===e)return L();if(!t)throw P.create("no-app",{appName:e});return t}function F(e,t,n){var i;let s=null!==(i=S[e])&&void 0!==i?i:e;n&&(s+="-"+n);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void k.warn(e.join(" "))}O(new r.a(s+"-version",()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const U="firebase-heartbeat-store";let V=null;function z(){return V||(V=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=g(o);return r&&o.addEventListener("upgradeneeded",e=>{r(g(o.result),e.oldVersion,e.newVersion,g(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(U)}}}).catch(e=>{throw P.create("idb-open",{originalErrorMessage:e.message})})),V}async function B(e,t){try{const n=(await z()).transaction(U,"readwrite"),r=n.objectStore(U);return await r.put(t,q(e)),n.done}catch(e){if(e instanceof s.c)k.warn(e.message);else{const t=P.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}function q(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=W();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=W(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),$(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(s.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function W(){return(new Date).toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(s.s)()&&Object(s.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await z()).transaction(U).objectStore(U).get(q(e))}catch(e){if(e instanceof s.c)k.warn(e.message);else{const t=P.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});k.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function $(e){return Object(s.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;G="",O(new r.a("platform-logger",e=>new T(e),"PRIVATE")),O(new r.a("heartbeat",e=>new H(e),"PRIVATE")),F(_,"0.9.3",G),F(_,"0.9.3","esm2017"),F("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(22);function i(e,t){if(null==e)return{};var n,i,s=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){var r=n(71);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=s?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(88)},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),s=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([i]).join("\n")}var o,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function c(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Yn})),n.d(t,"b",(function(){return Xn})),n.d(t,"c",(function(){return Jn})),n.d(t,"d",(function(){return er})),n.d(t,"e",(function(){return Zn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return nr})),n.d(t,"h",(function(){return Gn})),n.d(t,"i",(function(){return Qn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s={},o=o||{},a=i||self;function l(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function c(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++d))},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function w(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var _=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{a.addEventListener("test",l,t),a.removeEventListener("test",l,t)}catch(e){}return e}();function k(e){return/^[\s\xa0]*$/.test(e)}var S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function I(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return-1!=I().indexOf(e)}function O(e){return O[" "](e),e}O[" "]=l;var N,A,R=C("Opera"),P=C("Trident")||C("MSIE"),D=C("Edge"),M=D||P,L=C("Gecko")&&!(-1!=I().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),j=-1!=I().toLowerCase().indexOf("webkit")&&!C("Edge");function F(){var e=a.document;return e?e.documentMode:void 0}e:{var U="",V=(A=I(),L?/rv:([^\);]+)(\)|;)/.exec(A):D?/Edge\/([\d\.]+)/.exec(A):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(A):j?/WebKit\/(\S+)/.exec(A):R?/(?:Version)[ \/]?(\S+)/.exec(A):void 0);if(V&&(U=V?V[1]:""),P){var z=F();if(null!=z&&z>parseFloat(U)){N=String(z);break e}}N=U}var B,q={};function H(){return function(e){var t=q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=S(String(N)).split("."),n=S("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(a.document&&P){var W=F();B=W||(parseInt(N,10)||void 0)}else B=void 0;var K=B;function $(e,t){if(T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(L){e:{try{O(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.X.h.call(this)}}y($,T);var G={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Y,this.ba=this.ea=!1}function X(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Z(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ee(e){const t={};for(const n in e)t[n]=e[n];return t}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<te.length;t++)n=te[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function re(e){this.src=e,this.g={},this.h=0}function ie(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=b(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(X(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function se(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}re.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=se(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new J(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var oe="closure_lm_"+(1e6*Math.random()|0),ae={};function le(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);return null}return r=me(r),t&&t[Q]?t.O(n,r,c(i)?!!i.capture:!!i,s):ue(t,n,r,!0,i,s)}(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=me(n),e&&e[Q]?e.N(t,n,c(r)?!!r.capture:!!r,i):ue(e,t,n,!1,r,i)}function ue(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=c(i)?!!i.capture:!!i,a=fe(e);if(a||(e[oe]=a=new re(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){const e=de;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)_||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(he(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ce(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[Q])ie(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(he(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=fe(t))?(ie(n,e),0==n.h&&(n.src=null,t[oe]=null)):X(e)}}}function he(e){return e in ae?ae[e]:ae[e]="on"+e}function de(e,t){if(e.ba)e=!0;else{t=new $(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ce(e),e=n.call(r,t)}return e}function fe(e){return(e=e[oe])instanceof re?e:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"==typeof e?e:(e[pe]||(e[pe]=function(t){return e.handleEvent(t)}),e[pe])}function ge(){v.call(this),this.i=new re(this),this.P=this,this.I=null}function ye(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var i=t;ne(t=new T(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ve(o,r,!0,t)&&i}if(i=ve(o=t.g=e,r,!0,t)&&i,i=ve(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ve(o=t.g=n[s],r,!1,t)&&i}function ve(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ie(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}y(ge,v),ge.prototype[Q]=!0,ge.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)e(t,n[o],r,i,s);else i=c(i)?!!i.capture:!!i,r=me(r),t&&t[Q]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=se(o=t.g[n],r,i,s))&&(X(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete t.g[n],t.h--)))):t&&(t=fe(t))&&(n=t.g[n.toString()],t=-1,n&&(t=se(n,r,i,s)),(r=-1<t?n[t]:null)&&ce(r))}(this,e,t,n,r)},ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)X(n[r]);delete t.g[e],t.h--}}this.I=null},ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var be=a.JSON.stringify;function we(){var e=Ie;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ee,Te=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new _e,e=>e.reset());class _e{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ke(e){a.setTimeout(()=>{throw e},0)}function Se(e,t){Ee||function(){var e=a.Promise.resolve(void 0);Ee=function(){e.then(Ce)}}(),xe||(Ee(),xe=!0),Ie.add(e,t)}var xe=!1,Ie=new class{constructor(){this.h=this.g=null}add(e,t){const n=Te.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ce(){for(var e;e=we();){try{e.h.call(e.g)}catch(e){ke(e)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1}function Oe(e,t){ge.call(this),this.h=e||1,this.g=t||a,this.j=m(this.lb,this),this.l=Date.now()}function Ne(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Ae(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:a.setTimeout(e,t||0)}y(Oe,ge),(r=Oe.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ye(this,"tick"),this.ca&&(Ne(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Oe.X.M.call(this),Ne(this),delete this.g};class Re extends v{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Ae(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){v.call(this),this.h=e,this.g={}}y(Pe,v);var De=[];function Me(e,t,n,r){Array.isArray(n)||(n&&(De[0]=n.toString()),n=De);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Le(e){Z(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ce(e)}),e),e.g={}}function je(){this.g=!0}function Fe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return be(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Pe.prototype.M=function(){Pe.X.M.call(this),Le(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Aa=function(){this.g=!1},je.prototype.info=function(){};var Ue={},Ve=null;function ze(){return Ve=Ve||new ge}function Be(e){T.call(this,Ue.Pa,e)}function qe(e){const t=ze();ye(t,new Be(t))}function He(e,t){T.call(this,Ue.STAT_EVENT,e),this.stat=t}function We(e){const t=ze();ye(t,new He(t,e))}function Ke(e,t){T.call(this,Ue.Qa,e),this.size=t}function $e(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){e()}),t)}Ue.Pa="serverreachability",y(Be,T),Ue.STAT_EVENT="statevent",y(He,T),Ue.Qa="timingevent",y(Ke,T);var Ge={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Qe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ye(){}function Je(e){return e.h||(e.h=e.i())}function Xe(){}Ye.prototype.h=null;var Ze,et={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tt(){T.call(this,"d")}function nt(){T.call(this,"c")}function rt(){}function it(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Pe(this),this.O=ot,e=M?125:void 0,this.T=new Oe(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new st}function st(){this.i=null,this.g="",this.h=!1}y(tt,T),y(nt,T),y(rt,Ye),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},Ze=new rt;var ot=45e3,at={},lt={};function ut(e,t,n){e.K=1,e.v=Ct(_t(t)),e.s=n,e.P=!0,ct(e,null)}function ct(e,t){e.F=Date.now(),pt(e),e.A=_t(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),zt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new st,e.g=zn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Re(m(e.La,e,e.g),e.N)),Me(e.S,e.g,"readystatechange",e.ib),t=e.H?ee(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),qe(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ht(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function dt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=ft(e,n),r==lt){4==t&&(e.o=4,We(14),i=!1),Fe(e.j,e.m,null,"[Incomplete Response]");break}if(r==at){e.o=4,We(15),Fe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Fe(e.j,e.m,r,null),bt(e,r)}ht(e)&&r!=lt&&r!=at&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,We(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pn(t),t.K=!0,We(11))):(Fe(e.j,e.m,n,"[Invalid Chunked Response]"),vt(e),yt(e))}function ft(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?lt:(n=Number(t.substring(n,r)),isNaN(n)?at:(r+=1)+n>t.length?lt:(t=t.substr(r,n),e.C=r+n,t))}function pt(e){e.V=Date.now()+e.O,mt(e,e.O)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=$e(m(e.gb,e),t)}function gt(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function yt(e){0==e.l.G||e.I||Ln(e.l,e)}function vt(e){gt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ne(e.T),Le(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||$t(n.h,e)))if(!e.J&&$t(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Mn(n),Sn(n)}Rn(n),We(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=$e(m(n.cb,n),6e3));if(1>=Kt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Fn(n,11)}else if((e.J||n.g==e)&&Mn(n),!k(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Gt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,It(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Vn(r,r.H?r.ka:null,r.V),o.J){Qt(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(gt(a),pt(a)),r.g=o}else An(r);0<n.i.length&&In(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}qe()}catch(e){}}function wt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(r=it.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==vn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const h=vn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||M||this.g&&(this.h.h||this.g.fa()||bn(this.g)))){this.I||4!=h||7==t||qe(),gt(this);var n=this.g.aa();this.Y=n;t:if(ht(this)){var r=bn(this.g);e="";var i=r.length,s=4==vn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){vt(this),yt(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(l)){var c=l;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,We(12),vt(this),yt(this);break e}Fe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,n)}this.P?(dt(this,h,o),M&&this.i&&3==h&&(Me(this.S,this.T,"tick",this.hb),this.T.start())):(Fe(this.j,this.m,o,null),bt(this,o)),4==h&&vt(this),this.i&&!this.I&&(4==h?Ln(this.l,this):(this.i=!1,pt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),vt(this),yt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=vn(this.g),t=this.g.fa();this.C<t.length&&(gt(this),dt(this,e,t),this.i&&4!=e&&pt(this))}},r.cancel=function(){this.I=!0,vt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(qe(),We(17)),vt(this),this.o=2,yt(this)):mt(this,this.V-e)};var Et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tt){this.h=void 0!==t?t:e.h,kt(this,e.j),this.s=e.s,this.g=e.g,St(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xt(this,n),this.o=e.o}else e&&(n=String(e).match(Et))?(this.h=!!t,kt(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),St(this,n[4]),this.l=Ot(n[5]||"",!0),xt(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function _t(e){return new Tt(e)}function kt(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function St(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xt(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Ft(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ut(this,t),zt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Nt(t,Mt)),e.i=new jt(t,e.h))}function It(e,t,n){e.i.set(t,n)}function Ct(e){return It(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Nt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,At),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function At(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Nt(t,Rt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Nt(t,Rt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Nt(n,"/"==n.charAt(0)?Dt:Pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Nt(n,Lt)),e.join("")};var Rt=/[#\/\?@]/g,Pt=/[#\?:]/g,Dt=/[#\?]/g,Mt=/[#\?@]/g,Lt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ft(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ut(e,t){Ft(e),t=Bt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Vt(e,t){return Ft(e),t=Bt(e,t),e.g.has(t)}function zt(e,t,n){Ut(e,t),0<n.length&&(e.i=null,e.g.set(Bt(e,t),w(n)),e.h+=n.length)}function Bt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=jt.prototype).add=function(e,t){Ft(this),this.i=null,e=Bt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Ft(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){Ft(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){Ft(this);let t=[];if("string"==typeof e)Vt(this,e)&&(t=t.concat(this.g.get(Bt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Ft(this),this.i=null,Vt(this,e=Bt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function qt(e){this.l=e||Ht,a.PerformanceNavigationTiming?e=0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(a.g&&a.g.Ga&&a.g.Ga()&&a.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ht=10;function Wt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Kt(e){return e.h?1:e.g?e.g.size:0}function $t(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gt(e,t){e.g?e.g.add(t):e.h=t}function Qt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Yt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return w(e.i)}function Jt(){}function Xt(){this.g=new Jt}function Zt(e,t,n){const r=n||"";try{wt(e,(function(e,n){let i=e;c(e)&&(i=be(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function en(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tn(e){this.l=e.ac||null,this.j=e.jb||!1}function nn(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qt.prototype.cancel=function(){if(this.i=Yt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Jt.prototype.stringify=function(e){return a.JSON.stringify(e,void 0)},Jt.prototype.parse=function(e){return a.JSON.parse(e,void 0)},y(tn,Ye),tn.prototype.g=function(){return new nn(this.l,this.j)},tn.prototype.i=function(e){return function(){return e}}({}),y(nn,ge);var rn=0;function sn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function on(e){e.readyState=4,e.l=null,e.j=null,e.A=null,an(e)}function an(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=nn.prototype).open=function(e,t){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,an(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,on(this)),this.readyState=rn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?on(this):an(this),3==this.readyState&&sn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,on(this))},r.Ua=function(e){this.g&&(this.response=e,on(this))},r.ga=function(){this.g&&on(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ln=a.JSON.parse;function un(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cn,this.K=this.L=!1}y(un,ge);var cn="",hn=/^https?$/i,dn=["POST","PUT"];function fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pn(e),gn(e)}function pn(e){e.D||(e.D=!0,ye(e,"complete"),ye(e,"error"))}function mn(e){if(e.h&&void 0!==o&&(!e.C[1]||4!=vn(e)||2!=e.aa()))if(e.v&&4==vn(e))Ae(e.Ha,0,e);else if(ye(e,"readystatechange"),4==vn(e)){e.h=!1;try{const o=e.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===o){var i=String(e.H).match(Et)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)ye(e,"complete"),ye(e,"success");else{e.m=6;try{var l=2<vn(e)?e.g.statusText:""}catch(e){l=""}e.j=l+" ["+e.aa()+"]",pn(e)}}finally{gn(e)}}}function gn(e,t){if(e.g){yn(e);const n=e.g,r=e.C[0]?l:null;e.g=null,e.C=null,t||ye(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function yn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(a.clearTimeout(e.A),e.A=null)}function vn(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case cn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function wn(e){let t="";return Z(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function En(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):It(e,t,n))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function _n(e){this.Ca=0,this.i=[],this.j=new je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tn("baseRetryDelayMs",5e3,e),this.bb=Tn("retryDelaySeedMs",1e4,e),this.$a=Tn("forwardChannelMaxRetries",2,e),this.ta=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new qt(e&&e.concurrentRequestLimit),this.Fa=new Xt,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function kn(e){if(xn(e),3==e.G){var t=e.U++,n=_t(e.F);It(n,"SID",e.I),It(n,"RID",t),It(n,"TYPE","terminate"),On(e,n),(t=new it(e,e.j,t,void 0)).K=2,t.v=Ct(_t(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(t.v.toString(),"")),!n&&a.Image&&((new Image).src=t.v,n=!0),n||(t.g=zn(t.l,null),t.g.da(t.v)),t.F=Date.now(),pt(t)}Un(e)}function Sn(e){e.g&&(Pn(e),e.g.cancel(),e.g=null)}function xn(e){Sn(e),e.u&&(a.clearTimeout(e.u),e.u=null),Mn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function In(e){Wt(e.h)||e.m||(e.m=!0,Se(e.Ja,e),e.C=0)}function Cn(e,t){var n;n=t?t.m:e.U++;const r=_t(e.F);It(r,"SID",e.I),It(r,"RID",n),It(r,"AID",e.T),On(e,r),e.o&&e.s&&En(r,e.o,e.s),n=new it(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Nn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Gt(e.h,n),ut(n,r,t)}function On(e,t){e.ia&&Z(e.ia,(function(e,n){It(t,n,e)})),e.l&&wt({},(function(e,n){It(t,n,e)}))}function Nn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?m(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Zt(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function An(e){e.g||e.u||(e.Z=1,Se(e.Ia,e),e.A=0)}function Rn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=$e(m(e.Ia,e),jn(e,e.A)),e.A++,!0)}function Pn(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function Dn(e){e.g=new it(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=_t(e.sa);It(t,"RID","rpc"),It(t,"SID",e.I),It(t,"CI",e.L?"0":"1"),It(t,"AID",e.T),It(t,"TYPE","xmlhttp"),On(e,t),e.o&&e.s&&En(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ct(_t(t)),n.s=null,n.P=!0,ct(n,e)}function Mn(e){null!=e.v&&(a.clearTimeout(e.v),e.v=null)}function Ln(e,t){var n=null;if(e.g==t){Mn(e),Pn(e),e.g=null;var r=2}else{if(!$t(e.h,t))return;n=t.D,Qt(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ye(r=ze(),new Ke(r,n)),In(e)}else An(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Kt(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=$e(m(e.Ja,e,t),jn(e,e.C)),e.C++,!0))}(e,t)||2==r&&Rn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Fn(e,5);break;case 4:Fn(e,10);break;case 3:Fn(e,6);break;default:Fn(e,2)}}function jn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Fn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=m(e.kb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||kt(n,"https"),Ct(n)),function(e,t){const n=new je;if(a.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(en,n,r,"TestLoadImage: error",!1,t),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,t),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else We(2);e.G=0,e.l&&e.l.va(t),Un(e),xn(e)}function Un(e){if(e.G=0,e.la=[],e.l){const t=Yt(e.h);0==t.length&&0==e.i.length||(E(e.la,t),E(e.la,e.i),e.h.i.length=0,w(e.i),e.i.length=0),e.l.ua()}}function Vn(e,t,n){var r=n instanceof Tt?_t(n):new Tt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),St(r,r.m);else{var i=a.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Tt(null,void 0);r&&kt(s,r),t&&(s.g=t),i&&St(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&It(r,n,t),It(r,"VER",e.ma),On(e,r),r}function zn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new un(new tn({jb:!0})):new un(e.ra)).Ka(e.H),t}function Bn(){}function qn(){if(P&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function Hn(e,t){ge.call(this),this.g=new _n(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!k(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new $n(this)}function Wn(e){tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Kn(){nt.call(this),this.status=1}function $n(e){this.g=e}(r=un.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ze.g(),this.C=this.u?Je(this.u):Je(Ze),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void fn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=a.FormData&&e instanceof a.FormData,!(0<=b(dn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yn(this),0<this.B&&((this.K=function(e){return P&&H()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Ae(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){fn(this,e)}},r.qa=function(){void 0!==o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ye(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ye(this,"complete"),ye(this,"abort"),gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),un.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},r.fb=function(){mn(this)},r.aa=function(){try{return 2<vn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ln(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=_n.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ee(s),ne(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Nn(this,i,t),It(n=_t(this.F),"RID",e),It(n,"CVER",22),this.D&&It(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(wn(s)))+"&"+t:this.o&&En(n,this.o,s)),Gt(this.h,i),this.Ya&&It(n,"TYPE","init"),this.O?(It(n,"$req",t),It(n,"SID","null"),i.Z=!0,ut(i,n,null)):ut(i,n,t),this.G=2}}else 3==this.G&&(e?Cn(this,e):0==this.i.length||Wt(this.h)||Cn(this))},r.Ia=function(){if(this.u=null,Dn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=$e(m(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),Sn(this),Dn(this))},r.cb=function(){null!=this.v&&(this.v=null,Sn(this),Rn(this),We(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))},(r=Bn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},qn.prototype.g=function(e,t){return new Hn(e,t)},y(Hn,ge),Hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;We(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Vn(e,null,e.V),In(e)},Hn.prototype.close=function(){kn(this.g)},Hn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=be(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&In(t)},Hn.prototype.M=function(){this.g.l=null,delete this.j,kn(this.g),delete this.g,Hn.X.M.call(this)},y(Wn,tt),y(Kn,nt),y($n,Bn),$n.prototype.xa=function(){ye(this.g,"a")},$n.prototype.wa=function(e){ye(this.g,new Wn(e))},$n.prototype.va=function(e){ye(this.g,new Kn)},$n.prototype.ua=function(){ye(this.g,"b")},qn.prototype.createWebChannel=qn.prototype.g,Hn.prototype.send=Hn.prototype.u,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,Ge.NO_ERROR=0,Ge.TIMEOUT=8,Ge.HTTP_ERROR=6,Qe.COMPLETE="complete",Xe.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ge.prototype.listen=ge.prototype.N,un.prototype.listenOnce=un.prototype.O,un.prototype.getLastError=un.prototype.Oa,un.prototype.getLastErrorCode=un.prototype.Ea,un.prototype.getStatus=un.prototype.aa,un.prototype.getResponseJson=un.prototype.Sa,un.prototype.getResponseText=un.prototype.fa,un.prototype.send=un.prototype.da,un.prototype.setWithCredentials=un.prototype.Ka;var Gn=s.createWebChannelTransport=function(){return new qn},Qn=s.getStatEventTarget=function(){return ze()},Yn=s.ErrorCode=Ge,Jn=s.EventType=Qe,Xn=s.Event=Ue,Zn=s.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},er=s.FetchXmlHttpFactory=tn,tr=s.WebChannel=Xe,nr=s.XhrIo=un}).call(this,n(30))},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(1);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){var r=n(61),i=n(62),s=n(63),o=n(65);e.exports=function(e,t){return r(e)||i(e,t)||s(e,t)||o()}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],l=t.base?s[0]+t.base:s[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var h=a(c),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(o[h].references++,o[h].updater(d)):o.push({identifier:c,updater:g(d,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,h=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var s=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function f(e,t,n){var r=n.css,i=n.media,s=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var s=m++;n=p||(p=u(t)),r=d.bind(null,n,s,!1),i=d.bind(null,n,s,!0)}else n=u(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var s=l(e,t),u=0;u<n.length;u++){var c=a(n[u]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}n=s}}}},function(e,t,n){e.exports=n(72)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(89);function i(e){if("string"!=typeof e)throw new Error(Object(r.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(80)},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(2),i=n(0),s=n.n(i),o=n(4),a=(n(15),n(23)),l=n(25),u=n(16),c=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,c=e.color,h=void 0===c?"inherit":c,d=e.component,f=void 0===d?"svg":d,p=e.fontSize,m=void 0===p?"medium":p,g=e.htmlColor,y=e.titleAccess,v=e.viewBox,b=void 0===v?"0 0 24 24":v,w=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,Object(r.a)({className:Object(a.a)(s.root,l,"inherit"!==h&&s["color".concat(Object(u.a)(h))],"default"!==m&&"medium"!==m&&s["fontSize".concat(Object(u.a)(m))]),focusable:"false",viewBox:b,color:g,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},w),n,y?i.createElement("title",null,y):null)}));c.muiName="SvgIcon";var h=Object(l.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(c);function d(e,t){var n=function(t,n){return s.a.createElement(h,Object(r.a)({ref:n},t),e)};return n.muiName=h.muiName,s.a.memo(s.a.forwardRef(n))}},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(58)},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(18);function i(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},function(e,t,n){"use strict";var r=n(2),i=n(4),s=n(0),o=n.n(s),a=(n(15),n(35)),l=n.n(a),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="object"===("undefined"==typeof window?"undefined":u(window))&&"object"===("undefined"==typeof document?"undefined":u(document))&&9===document.nodeType;function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p=n(27),m=n(22),g={}.constructor;function y(e){if(null==e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(y);if(e.constructor!==g)return e;var t={};for(var n in e)t[n]=y(e[n]);return t}function v(e,t,n){void 0===e&&(e="unnamed");var r=n.jss,i=y(t),s=r.plugins.onCreateRule(e,i,n);return s||(e[0],null)}var b=function(e,t){for(var n="",r=0;r<e.length&&"!important"!==e[r];r++)n&&(n+=t),n+=e[r];return n},w=function(e){if(!Array.isArray(e))return e;var t="";if(Array.isArray(e[0]))for(var n=0;n<e.length&&"!important"!==e[n];n++)t&&(t+=", "),t+=b(e[n]," ");else t=b(e,", ");return"!important"===e[e.length-1]&&(t+=" !important"),t};function E(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}function T(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function _(e,t,n){void 0===n&&(n={});var r="";if(!t)return r;var i=n.indent,s=void 0===i?0:i,o=t.fallbacks;!1===n.format&&(s=-1/0);var a=E(n),l=a.linebreak,u=a.space;if(e&&s++,o)if(Array.isArray(o))for(var c=0;c<o.length;c++){var h=o[c];for(var d in h){var f=h[d];null!=f&&(r&&(r+=l),r+=T(d+":"+u+w(f)+";",s))}}else for(var p in o){var m=o[p];null!=m&&(r&&(r+=l),r+=T(p+":"+u+w(m)+";",s))}for(var g in t){var y=t[g];null!=y&&"fallbacks"!==g&&(r&&(r+=l),r+=T(g+":"+u+w(y)+";",s))}return(r||n.allowEmpty)&&e?(r&&(r=""+l+r+l),T(""+e+u+"{"+r,--s)+T("}",s)):r}var k=/([[\].#*$><+~=|^:(),"'`\s])/g,S="undefined"!=typeof CSS&&CSS.escape,x=function(e){return S?S(e):e.replace(k,"\\$1")},I=function(){function e(e,t,n){this.type="style",this.isProcessed=!1;var r=n.sheet,i=n.Renderer;this.key=e,this.options=n,this.style=t,r?this.renderer=r.renderer:i&&(this.renderer=new i)}return e.prototype.prop=function(e,t,n){if(void 0===t)return this.style[e];var r=!!n&&n.force;if(!r&&this.style[e]===t)return this;var i=t;n&&!1===n.process||(i=this.options.jss.plugins.onChangeValue(t,e,this));var s=null==i||!1===i,o=e in this.style;if(s&&!o&&!r)return this;var a=s&&o;if(a?delete this.style[e]:this.style[e]=i,this.renderable&&this.renderer)return a?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,i),this;var l=this.options.sheet;return l&&l.attached,this},e}(),C=function(e){function t(t,n,r){var i;i=e.call(this,t,n,r)||this;var s=r.selector,o=r.scoped,a=r.sheet,l=r.generateId;return s?i.selectorText=s:!1!==o&&(i.id=l(Object(p.a)(Object(p.a)(i)),a),i.selectorText="."+x(i.id)),i}f(t,e);var n=t.prototype;return n.applyTo=function(e){var t=this.renderer;if(t){var n=this.toJSON();for(var r in n)t.setProperty(e,r,n[r])}return this},n.toJSON=function(){var e={};for(var t in this.style){var n=this.style[t];"object"!=typeof n?e[t]=n:Array.isArray(n)&&(e[t]=w(n))}return e},n.toString=function(e){var t=this.options.sheet,n=!!t&&t.options.link?Object(r.a)({},e,{allowEmpty:!0}):e;return _(this.selectorText,this.style,n)},d(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,n=this.renderable;if(n&&t)t.setSelector(n,e)||t.replaceRule(n,this)}},get:function(){return this.selectorText}}]),t}(I),O={onCreateRule:function(e,t,n){return"@"===e[0]||n.parent&&"keyframes"===n.parent.type?null:new C(e,t,n)}},N={indent:1,children:!0},A=/@([\w-]+)/,R=function(){function e(e,t,n){this.type="conditional",this.isProcessed=!1,this.key=e;var i=e.match(A);for(var s in this.at=i?i[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new te(Object(r.a)({},n,{parent:this})),t)this.rules.add(s,t[s]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.indexOf=function(e){return this.rules.indexOf(e)},t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r?(this.options.jss.plugins.onProcessRule(r),r):null},t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r},t.toString=function(e){void 0===e&&(e=N);var t=E(e).linebreak;if(null==e.indent&&(e.indent=N.indent),null==e.children&&(e.children=N.children),!1===e.children)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+t+n+t+"}":""},e}(),P=/@container|@media|@supports\s+/,D={onCreateRule:function(e,t,n){return P.test(e)?new R(e,t,n):null}},M={indent:1,children:!0},L=/@keyframes\s+([\w-]+)/,j=function(){function e(e,t,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var i=e.match(L);i&&i[1]?this.name=i[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var s=n.scoped,o=n.sheet,a=n.generateId;for(var l in this.id=!1===s?this.name:x(a(this,o)),this.rules=new te(Object(r.a)({},n,{parent:this})),t)this.rules.add(l,t[l],Object(r.a)({},n,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=M);var t=E(e).linebreak;if(null==e.indent&&(e.indent=M.indent),null==e.children&&(e.children=M.children),!1===e.children)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+t+n+t),this.at+" "+this.id+" {"+n+"}"},e}(),F=/@keyframes\s+/,U=/\$([\w-]+)/g,V=function(e,t){return"string"==typeof e?e.replace(U,(function(e,n){return n in t?t[n]:e})):e},z=function(e,t,n){var r=e[t],i=V(r,n);i!==r&&(e[t]=i)},B={onCreateRule:function(e,t,n){return"string"==typeof e&&F.test(e)?new j(e,t,n):null},onProcessStyle:function(e,t,n){return"style"===t.type&&n?("animation-name"in e&&z(e,"animation-name",n.keyframes),"animation"in e&&z(e,"animation",n.keyframes),e):e},onChangeValue:function(e,t,n){var r=n.options.sheet;if(!r)return e;switch(t){case"animation":case"animation-name":return V(e,r.keyframes);default:return e}}},q=function(e){function t(){return e.apply(this,arguments)||this}return f(t,e),t.prototype.toString=function(e){var t=this.options.sheet,n=!!t&&t.options.link?Object(r.a)({},e,{allowEmpty:!0}):e;return _(this.key,this.style,n)},t}(I),H={onCreateRule:function(e,t,n){return n.parent&&"keyframes"===n.parent.type?new q(e,t,n):null}},W=function(){function e(e,t,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){var t=E(e).linebreak;if(Array.isArray(this.style)){for(var n="",r=0;r<this.style.length;r++)n+=_(this.at,this.style[r]),this.style[r+1]&&(n+=t);return n}return _(this.at,this.style,e)},e}(),K=/@font-face/,$={onCreateRule:function(e,t,n){return K.test(e)?new W(e,t,n):null}},G=function(){function e(e,t,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){return _(this.key,this.style,e)},e}(),Q={onCreateRule:function(e,t,n){return"@viewport"===e||"@-ms-viewport"===e?new G(e,t,n):null}},Y=function(){function e(e,t,n){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),J={"@charset":!0,"@import":!0,"@namespace":!0},X=[O,D,B,H,$,Q,{onCreateRule:function(e,t,n){return e in J?new Y(e,t,n):null}}],Z={process:!0},ee={force:!0,process:!0},te=function(){function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}var t=e.prototype;return t.add=function(e,t,n){var i=this.options,s=i.parent,o=i.sheet,a=i.jss,l=i.Renderer,u=i.generateId,c=i.scoped,h=Object(r.a)({classes:this.classes,parent:s,sheet:o,jss:a,Renderer:l,generateId:u,scoped:c,name:e,keyframes:this.keyframes,selector:void 0},n),d=e;e in this.raw&&(d=e+"-d"+this.counter++),this.raw[d]=t,d in this.classes&&(h.selector="."+x(this.classes[d]));var f=v(d,t,h);if(!f)return null;this.register(f);var p=void 0===h.index?this.index.length:h.index;return this.index.splice(p,0,f),f},t.replace=function(e,t,n){var i=this.get(e),s=this.index.indexOf(i);i&&this.remove(i);var o=n;return-1!==s&&(o=Object(r.a)({},n,{index:s})),this.add(e,t,o)},t.get=function(e){return this.map[e]},t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},t.indexOf=function(e){return this.index.indexOf(e)},t.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},t.register=function(e){this.map[e.key]=e,e instanceof C?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof j&&this.keyframes&&(this.keyframes[e.name]=e.id)},t.unregister=function(e){delete this.map[e.key],e instanceof C?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof j&&delete this.keyframes[e.name]},t.update=function(){var e,t,n;if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,n);else for(var r=0;r<this.index.length;r++)this.updateOne(this.index[r],t,n)},t.updateOne=function(t,n,r){void 0===r&&(r=Z);var i=this.options,s=i.jss.plugins,o=i.sheet;if(t.rules instanceof e)t.rules.update(n,r);else{var a=t.style;if(s.onUpdate(n,t,o,r),r.process&&a&&a!==t.style){for(var l in s.onProcessStyle(t.style,t,o),t.style){var u=t.style[l];u!==a[l]&&t.prop(l,u,ee)}for(var c in a){var h=t.style[c],d=a[c];null==h&&h!==d&&t.prop(c,null,ee)}}}},t.toString=function(e){for(var t="",n=this.options.sheet,r=!!n&&n.options.link,i=E(e).linebreak,s=0;s<this.index.length;s++){var o=this.index[s].toString(e);(o||r)&&(t&&(t+=i),t+=o)}return t},e}(),ne=function(){function e(e,t){for(var n in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=Object(r.a)({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new te(this.options),e)this.rules.add(n,e[n]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(e,t,n){var r=this.queue;this.attached&&!r&&(this.queue=[]);var i=this.rules.add(e,t,n);return i?(this.options.jss.plugins.onProcessRule(i),this.attached?this.deployed?(r?r.push(i):(this.insertRule(i),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0)),i):i:(this.deployed=!1,i)):null},t.replaceRule=function(e,t,n){var r=this.rules.get(e);if(!r)return this.addRule(e,t,n);var i=this.rules.replace(e,t,n);return i&&this.options.jss.plugins.onProcessRule(i),this.attached?this.deployed?(this.renderer&&(i?r.renderable&&this.renderer.replaceRule(r.renderable,i):this.renderer.deleteRule(r)),i):i:(this.deployed=!1,i)},t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},t.addRules=function(e,t){var n=[];for(var r in e){var i=this.addRule(r,e[r],t);i&&n.push(i)}return n},t.getRule=function(e){return this.rules.get(e)},t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!(!t||this.attached&&!t.renderable)&&(this.rules.remove(t),!(this.attached&&t.renderable&&this.renderer)||this.renderer.deleteRule(t.renderable))},t.indexOf=function(e){return this.rules.indexOf(e)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},t.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this},t.toString=function(e){return this.rules.toString(e)},e}(),re=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(e,t,n){for(var r=0;r<this.registry.onCreateRule.length;r++){var i=this.registry.onCreateRule[r](e,t,n);if(i)return i}return null},t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},t.onProcessStyle=function(e,t,n){for(var r=0;r<this.registry.onProcessStyle.length;r++)t.style=this.registry.onProcessStyle[r](t.style,t,n)},t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},t.onUpdate=function(e,t,n,r){for(var i=0;i<this.registry.onUpdate.length;i++)this.registry.onUpdate[i](e,t,n,r)},t.onChangeValue=function(e,t,n){for(var r=e,i=0;i<this.registry.onChangeValue.length;i++)r=this.registry.onChangeValue[i](r,t,n);return r},t.use=function(e,t){void 0===t&&(t={queue:"external"});var n=this.plugins[t.queue];-1===n.indexOf(e)&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce((function(e,t){for(var n in t)n in e&&e[n].push(t[n]);return e}),{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),ie=new(function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(e){var t=this.registry,n=e.options.index;if(-1===t.indexOf(e))if(0===t.length||n>=this.index)t.push(e);else for(var r=0;r<t.length;r++)if(t[r].options.index>n)return void t.splice(r,0,e)},t.reset=function(){this.registry=[]},t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},t.toString=function(e){for(var t=void 0===e?{}:e,n=t.attached,r=Object(m.a)(t,["attached"]),i=E(r).linebreak,s="",o=0;o<this.registry.length;o++){var a=this.registry[o];null!=n&&a.attached!==n||(s&&(s+=i),s+=a.toString(r))}return s},d(e,[{key:"index",get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e}()),se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),oe="2f1acc6c3a606b082e5eef5e54414ffb";null==se[oe]&&(se[oe]=0);var ae=se[oe]++,le=function(e){void 0===e&&(e={});var t=0;return function(n,r){t+=1;var i="",s="";return r&&(r.options.classNamePrefix&&(s=r.options.classNamePrefix),null!=r.options.jss.id&&(i=String(r.options.jss.id))),e.minify?""+(s||"c")+ae+i+t:s+n.key+"-"+ae+(i?"-"+i:"")+"-"+t}},ue=function(e){var t;return function(){return t||(t=e()),t}},ce=function(e,t){try{return e.attributeStyleMap?e.attributeStyleMap.get(t):e.style.getPropertyValue(t)}catch(e){return""}},he=function(e,t,n){try{var r=n;if(Array.isArray(n)&&(r=w(n)),e.attributeStyleMap)e.attributeStyleMap.set(t,r);else{var i=r?r.indexOf("!important"):-1,s=i>-1?r.substr(0,i-1):r;e.style.setProperty(t,s,i>-1?"important":"")}}catch(e){return!1}return!0},de=function(e,t){try{e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},fe=function(e,t){return e.selectorText=t,e.selectorText===t},pe=ue((function(){return document.querySelector("head")}));function me(e){var t=ie.registry;if(t.length>0){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if((n=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e))&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&"string"==typeof r){var i=function(e){for(var t=pe(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(8===r.nodeType&&r.nodeValue.trim()===e)return r}return null}(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}var ge=ue((function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null})),ye=function(e,t,n){try{"insertRule"in e?e.insertRule(t,n):"appendRule"in e&&e.appendRule(t)}catch(e){return!1}return e.cssRules[n]},ve=function(e,t){var n=e.cssRules.length;return void 0===t||t>n?n:t},be=function(){function e(e){this.getPropertyValue=ce,this.setProperty=he,this.removeProperty=de,this.setSelector=fe,this.hasInsertedRules=!1,this.cssRules=[],e&&ie.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,r=t.meta,i=t.element;this.element=i||function(){var e=document.createElement("style");return e.textContent="\n",e}(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),r&&this.element.setAttribute("data-meta",r);var s=ge();s&&this.element.setAttribute("nonce",s)}var t=e.prototype;return t.attach=function(){if(!this.element.parentNode&&this.sheet){!function(e,t){var n=t.insertionPoint,r=me(t);if(!1!==r&&r.parent)r.parent.insertBefore(e,r.node);else if(n&&"number"==typeof n.nodeType){var i=n,s=i.parentNode;s&&s.insertBefore(e,i.nextSibling)}else pe().appendChild(e)}(this.element,this.sheet.options);var e=Boolean(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}},t.deploy=function(){var e=this.sheet;e&&(e.options.link?this.insertRules(e.rules):this.element.textContent="\n"+e.toString()+"\n")},t.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)},t.insertRule=function(e,t,n){if(void 0===n&&(n=this.element.sheet),e.rules){var r=e,i=n;if("conditional"===e.type||"keyframes"===e.type){var s=ve(n,t);if(!1===(i=ye(n,r.toString({children:!1}),s)))return!1;this.refCssRule(e,s,i)}return this.insertRules(r.rules,i),i}var o=e.toString();if(!o)return!1;var a=ve(n,t),l=ye(n,o,a);return!1!==l&&(this.hasInsertedRules=!0,this.refCssRule(e,a,l),l)},t.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof ne&&this.cssRules.splice(t,0,n)},t.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return-1!==n&&(t.deleteRule(n),this.cssRules.splice(n,1),!0)},t.indexOf=function(e){return this.cssRules.indexOf(e)},t.replaceRule=function(e,t){var n=this.indexOf(e);return-1!==n&&(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))},t.getRules=function(){return this.element.sheet.cssRules},e}(),we=0,Ee=function(){function e(e){this.id=we++,this.version="10.10.0",this.plugins=new re,this.options={id:{minify:!1},createGenerateId:le,Renderer:c?be:null,plugins:[]},this.generateId=le({minify:!1});for(var t=0;t<X.length;t++)this.plugins.use(X[t],{queue:"internal"});this.setup(e)}var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=Object(r.a)({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},t.createStyleSheet=function(e,t){void 0===t&&(t={});var n=t.index;"number"!=typeof n&&(n=0===ie.index?0:ie.index+1);var i=new ne(e,Object(r.a)({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(i),i},t.removeStyleSheet=function(e){return e.detach(),ie.remove(e),this},t.createRule=function(e,t,n){if(void 0===t&&(t={}),void 0===n&&(n={}),"object"==typeof e)return this.createRule(void 0,e,t);var i=Object(r.a)({},n,{name:e,jss:this,Renderer:this.options.Renderer});i.generateId||(i.generateId=this.generateId),i.classes||(i.classes={}),i.keyframes||(i.keyframes={});var s=v(e,t,i);return s&&this.plugins.onProcessRule(s),s},t.use=function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach((function(t){e.plugins.use(t)})),this},e}(),Te=function(e){return new Ee(e)},_e="object"==typeof CSS&&null!=CSS&&"number"in CSS;
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Te();function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseClasses,n=e.newClasses;e.Component;if(!n)return t;var i=Object(r.a)({},t);return Object.keys(n).forEach((function(e){n[e]&&(i[e]="".concat(t[e]," ").concat(n[e]))})),i}var Se={set:function(e,t,n,r){var i=e.get(t);i||(i=new Map,e.set(t,i)),i.set(n,r)},get:function(e,t,n){var r=e.get(t);return r?r.get(n):void 0},delete:function(e,t,n){e.get(t).delete(n)}};var xe=o.a.createContext(null);function Ie(){return o.a.useContext(xe)}var Ce="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",Oe=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var Ne=Date.now(),Ae="fnValues"+Ne,Re="fnStyle"+ ++Ne,Pe=function(){return{onCreateRule:function(e,t,n){if("function"!=typeof t)return null;var r=v(e,{},n);return r[Re]=t,r},onProcessStyle:function(e,t){if(Ae in t||Re in t)return e;var n={};for(var r in e){var i=e[r];"function"==typeof i&&(delete e[r],n[r]=i)}return t[Ae]=n,e},onUpdate:function(e,t,n,r){var i=t,s=i[Re];s&&(i.style=s(e)||{});var o=i[Ae];if(o)for(var a in o)i.prop(a,o[a](e),r)}}},De="@global",Me=function(){function e(e,t,n){for(var i in this.type="global",this.at=De,this.isProcessed=!1,this.key=e,this.options=n,this.rules=new te(Object(r.a)({},n,{parent:this})),t)this.rules.add(i,t[i]);this.rules.process()}var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)},t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r},t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r},t.indexOf=function(e){return this.rules.indexOf(e)},t.toString=function(e){return this.rules.toString(e)},e}(),Le=function(){function e(e,t,n){this.type="global",this.at=De,this.isProcessed=!1,this.key=e,this.options=n;var i=e.substr("@global ".length);this.rule=n.jss.createRule(i,t,Object(r.a)({},n,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),je=/\s*,\s*/g;function Fe(e,t){for(var n=e.split(je),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}var Ue=function(){return{onCreateRule:function(e,t,n){if(!e)return null;if(e===De)return new Me(e,t,n);if("@"===e[0]&&"@global "===e.substr(0,"@global ".length))return new Le(e,t,n);var r=n.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(n.scoped=!1),n.selector||!1!==n.scoped||(n.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var n=e.options,i=e.style,s=i?i[De]:null;if(s){for(var o in s)t.addRule(o,s[o],Object(r.a)({},n,{selector:Fe(o,e.selector)}));delete i[De]}}(e,t),function(e,t){var n=e.options,i=e.style;for(var s in i)if("@"===s[0]&&s.substr(0,De.length)===De){var o=Fe(s.substr(De.length),e.selector);t.addRule(o,i[s],Object(r.a)({},n,{selector:o})),delete i[s]}}(e,t))}}},Ve=/\s*,\s*/g,ze=/&/g,Be=/\$([\w-]+)/g;var qe=function(){function e(e,t){return function(n,r){var i=e.getRule(r)||t&&t.getRule(r);return i?i.selector:r}}function t(e,t){for(var n=t.split(Ve),r=e.split(Ve),i="",s=0;s<n.length;s++)for(var o=n[s],a=0;a<r.length;a++){var l=r[a];i&&(i+=", "),i+=-1!==l.indexOf("&")?l.replace(ze,o):o+" "+l}return i}function n(e,t,n){if(n)return Object(r.a)({},n,{index:n.index+1});var i=e.options.nestingLevel;i=void 0===i?1:i+1;var s=Object(r.a)({},e.options,{nestingLevel:i,index:t.indexOf(e)+1});return delete s.name,s}return{onProcessStyle:function(i,s,o){if("style"!==s.type)return i;var a,l,u=s,c=u.options.parent;for(var h in i){var d=-1!==h.indexOf("&"),f="@"===h[0];if(d||f){if(a=n(u,c,a),d){var p=t(h,u.selector);l||(l=e(c,o)),p=p.replace(Be,l);var m=u.key+"-"+h;"replaceRule"in c?c.replaceRule(m,i[h],Object(r.a)({},a,{selector:p})):c.addRule(m,i[h],Object(r.a)({},a,{selector:p}))}else f&&c.addRule(h,{},a).addRule(u.key,i[h],{selector:u.selector});delete i[h]}}return i}}},He=/[A-Z]/g,We=/^ms-/,Ke={};function $e(e){return"-"+e.toLowerCase()}var Ge=function(e){if(Ke.hasOwnProperty(e))return Ke[e];var t=e.replace(He,$e);return Ke[e]=We.test(t)?"-"+t:t};function Qe(e){var t={};for(var n in e){t[0===n.indexOf("--")?n:Ge(n)]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Qe):t.fallbacks=Qe(e.fallbacks)),t}var Ye=function(){return{onProcessStyle:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)e[t]=Qe(e[t]);return e}return Qe(e)},onChangeValue:function(e,t,n){if(0===t.indexOf("--"))return e;var r=Ge(t);return t===r?e:(n.prop(r,e),null)}}},Je=_e&&CSS?CSS.px:"px",Xe=_e&&CSS?CSS.ms:"ms",Ze=_e&&CSS?CSS.percent:"%";function et(e){var t=/(-[a-z])/g,n=function(e){return e[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var tt=et({"animation-delay":Xe,"animation-duration":Xe,"background-position":Je,"background-position-x":Je,"background-position-y":Je,"background-size":Je,border:Je,"border-bottom":Je,"border-bottom-left-radius":Je,"border-bottom-right-radius":Je,"border-bottom-width":Je,"border-left":Je,"border-left-width":Je,"border-radius":Je,"border-right":Je,"border-right-width":Je,"border-top":Je,"border-top-left-radius":Je,"border-top-right-radius":Je,"border-top-width":Je,"border-width":Je,"border-block":Je,"border-block-end":Je,"border-block-end-width":Je,"border-block-start":Je,"border-block-start-width":Je,"border-block-width":Je,"border-inline":Je,"border-inline-end":Je,"border-inline-end-width":Je,"border-inline-start":Je,"border-inline-start-width":Je,"border-inline-width":Je,"border-start-start-radius":Je,"border-start-end-radius":Je,"border-end-start-radius":Je,"border-end-end-radius":Je,margin:Je,"margin-bottom":Je,"margin-left":Je,"margin-right":Je,"margin-top":Je,"margin-block":Je,"margin-block-end":Je,"margin-block-start":Je,"margin-inline":Je,"margin-inline-end":Je,"margin-inline-start":Je,padding:Je,"padding-bottom":Je,"padding-left":Je,"padding-right":Je,"padding-top":Je,"padding-block":Je,"padding-block-end":Je,"padding-block-start":Je,"padding-inline":Je,"padding-inline-end":Je,"padding-inline-start":Je,"mask-position-x":Je,"mask-position-y":Je,"mask-size":Je,height:Je,width:Je,"min-height":Je,"max-height":Je,"min-width":Je,"max-width":Je,bottom:Je,left:Je,top:Je,right:Je,inset:Je,"inset-block":Je,"inset-block-end":Je,"inset-block-start":Je,"inset-inline":Je,"inset-inline-end":Je,"inset-inline-start":Je,"box-shadow":Je,"text-shadow":Je,"column-gap":Je,"column-rule":Je,"column-rule-width":Je,"column-width":Je,"font-size":Je,"font-size-delta":Je,"letter-spacing":Je,"text-decoration-thickness":Je,"text-indent":Je,"text-stroke":Je,"text-stroke-width":Je,"word-spacing":Je,motion:Je,"motion-offset":Je,outline:Je,"outline-offset":Je,"outline-width":Je,perspective:Je,"perspective-origin-x":Ze,"perspective-origin-y":Ze,"transform-origin":Ze,"transform-origin-x":Ze,"transform-origin-y":Ze,"transform-origin-z":Ze,"transition-delay":Xe,"transition-duration":Xe,"vertical-align":Je,"flex-basis":Je,"shape-margin":Je,size:Je,gap:Je,grid:Je,"grid-gap":Je,"row-gap":Je,"grid-row-gap":Je,"grid-column-gap":Je,"grid-template-rows":Je,"grid-template-columns":Je,"grid-auto-rows":Je,"grid-auto-columns":Je,"box-shadow-x":Je,"box-shadow-y":Je,"box-shadow-blur":Je,"box-shadow-spread":Je,"font-line-height":Je,"text-shadow-x":Je,"text-shadow-y":Je,"text-shadow-blur":Je});function nt(e,t,n){if(null==t)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=nt(e,t[r],n);else if("object"==typeof t)if("fallbacks"===e)for(var i in t)t[i]=nt(i,t[i],n);else for(var s in t)t[s]=nt(e+"-"+s,t[s],n);else if("number"==typeof t&&!1===isNaN(t)){var o=n[e]||tt[e];return!o||0===t&&o===Je?t.toString():"function"==typeof o?o(t).toString():""+t+o}return t}var rt=function(e){void 0===e&&(e={});var t=et(e);return{onProcessStyle:function(e,n){if("style"!==n.type)return e;for(var r in e)e[r]=nt(r,e[r],t);return e},onChangeValue:function(e,n){return nt(n,e,t)}}},it=n(18);var st=n(36),ot=n(24);function at(e){return function(e){if(Array.isArray(e))return Object(it.a)(e)}(e)||Object(st.a)(e)||Object(ot.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var lt="",ut="",ct="",ht="",dt=c&&"ontouchstart"in document.documentElement;if(c){var ft={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},pt=document.createElement("p").style;for(var mt in ft)if(mt+"Transform"in pt){lt=mt,ut=ft[mt];break}"Webkit"===lt&&"msHyphens"in pt&&(lt="ms",ut=ft.ms,ht="edge"),"Webkit"===lt&&"-apple-trailing-word"in pt&&(ct="apple")}var gt=lt,yt=ut,vt=ct,bt=ht,wt=dt;var Et={noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===gt?"-webkit-"+e:yt+e)}},Tt={noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===gt?yt+"print-"+e:e)}},_t=/[-\s]+(.)?/g;function kt(e,t){return t?t.toUpperCase():""}function St(e){return e.replace(_t,kt)}function xt(e){return St("-"+e)}var It,Ct={noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===gt){if(St("mask-image")in t)return e;if(gt+xt("mask-image")in t)return yt+e}return e}},Ot={noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==vt||wt?e:yt+e)}},Nt={noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:yt+e)}},At={noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:yt+e)}},Rt={noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===gt||"ms"===gt&&"edge"!==bt?yt+e:e)}},Pt={noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===gt||"ms"===gt||"apple"===vt?yt+e:e)}},Dt={supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===gt?"WebkitColumn"+xt(e)in t&&yt+"column-"+e:"Moz"===gt&&("page"+xt(e)in t&&"page-"+e))}},Mt={supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===gt)return e;var n=e.replace("-inline","");return gt+xt(n)in t&&yt+n}},Lt={supportedProperty:function(e,t){return St(e)in t&&e}},jt={supportedProperty:function(e,t){var n=xt(e);return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:gt+n in t?yt+e:"Webkit"!==gt&&"Webkit"+n in t&&"-webkit-"+e}},Ft={supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===gt?""+yt+e:e)}},Ut={supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===gt?yt+"scroll-chaining":e)}},Vt={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},zt={supportedProperty:function(e,t){var n=Vt[e];return!!n&&(gt+xt(n)in t&&yt+n)}},Bt={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},qt=Object.keys(Bt),Ht=function(e){return yt+e},Wt=[Et,Tt,Ct,Ot,Nt,At,Rt,Pt,Dt,Mt,Lt,jt,Ft,Ut,zt,{supportedProperty:function(e,t,n){var r=n.multiple;if(qt.indexOf(e)>-1){var i=Bt[e];if(!Array.isArray(i))return gt+xt(i)in t&&yt+i;if(!r)return!1;for(var s=0;s<i.length;s++)if(!(gt+xt(i[0])in t))return!1;return i.map(Ht)}return!1}}],Kt=Wt.filter((function(e){return e.supportedProperty})).map((function(e){return e.supportedProperty})),$t=Wt.filter((function(e){return e.noPrefill})).reduce((function(e,t){return e.push.apply(e,at(t.noPrefill)),e}),[]),Gt={};if(c){It=document.createElement("p");var Qt=window.getComputedStyle(document.documentElement,"");for(var Yt in Qt)isNaN(Yt)||(Gt[Qt[Yt]]=Qt[Yt]);$t.forEach((function(e){return delete Gt[e]}))}function Jt(e,t){if(void 0===t&&(t={}),!It)return e;if(null!=Gt[e])return Gt[e];"transition"!==e&&"transform"!==e||(t[e]=e in It.style);for(var n=0;n<Kt.length&&(Gt[e]=Kt[n](e,It.style,t),!Gt[e]);n++);try{It.style[e]=""}catch(e){return!1}return Gt[e]}var Xt,Zt={},en={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},tn=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;function nn(e,t,n){if("var"===t)return"var";if("all"===t)return"all";if("all"===n)return", all";var r=t?Jt(t):", "+Jt(n);return r||(t||n)}function rn(e,t){var n=t;if(!Xt||"content"===e)return t;if("string"!=typeof n||!isNaN(parseInt(n,10)))return n;var r=e+n;if(null!=Zt[r])return Zt[r];try{Xt.style[e]=n}catch(e){return Zt[r]=!1,!1}if(en[e])n=n.replace(tn,nn);else if(""===Xt.style[e]&&("-ms-flex"===(n=yt+n)&&(Xt.style[e]="-ms-flexbox"),Xt.style[e]=n,""===Xt.style[e]))return Zt[r]=!1,!1;return Xt.style[e]="",Zt[r]=n,Zt[r]}c&&(Xt=document.createElement("p"));var sn=function(){function e(t){for(var n in t){var r=t[n];if("fallbacks"===n&&Array.isArray(r))t[n]=r.map(e);else{var i=!1,s=Jt(n);s&&s!==n&&(i=!0);var o=!1,a=rn(s,w(r));a&&a!==r&&(o=!0),(i||o)&&(i&&delete t[n],t[s||n]=a||r)}}return t}return{onProcessRule:function(e){if("keyframes"===e.type){var t=e;t.at="-"===(n=t.at)[1]||"ms"===gt?n:"@"+yt+"keyframes"+n.substr(10)}var n},onProcessStyle:function(t,n){return"style"!==n.type?t:e(t)},onChangeValue:function(e,t){return rn(t,w(e))||e}}};var on=function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,n){if("style"!==n.type)return t;for(var r={},i=Object.keys(t).sort(e),s=0;s<i.length;s++)r[i[s]]=t[i[s]];return r}}};function an(){return{plugins:[Pe(),Ue(),qe(),Ye(),rt(),"undefined"==typeof window?null:sn(),on()]}}var ln=Te(an()),un={disableGeneration:!1,generateClassName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableGlobal,n=void 0!==t&&t,r=e.productionPrefix,i=void 0===r?"jss":r,s=e.seed,o=void 0===s?"":s,a=""===o?"":"".concat(o,"-"),l=0,u=function(){return l+=1};return function(e,t){var r=t.options.name;if(r&&0===r.indexOf("Mui")&&!t.options.link&&!n){if(-1!==Oe.indexOf(e.key))return"Mui-".concat(e.key);var s="".concat(a).concat(r,"-").concat(e.key);return t.options.theme[Ce]&&""===o?"".concat(s,"-").concat(u()):s}return"".concat(a).concat(i).concat(u())}}(),jss:ln,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},cn=o.a.createContext(un);var hn=-1e9;function dn(){return hn+=1}var fn=n(17);function pn(e){return e&&"object"===Object(fn.a)(e)&&e.constructor===Object}function mn(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},i=n.clone?Object(r.a)({},e):e;return pn(e)&&pn(t)&&Object.keys(t).forEach((function(r){"__proto__"!==r&&(pn(t[r])&&r in e?i[r]=mn(e[r],t[r],n):i[r]=t[r])})),i}function gn(e){var t="function"==typeof e;return{create:function(n,i){var s;try{s=t?e(n):e}catch(e){throw e}if(!i||!n.overrides||!n.overrides[i])return s;var o=n.overrides[i],a=Object(r.a)({},s);return Object.keys(o).forEach((function(e){a[e]=mn(a[e],o[e])})),a},options:{}}}var yn={};function vn(e,t,n){var r=e.state;if(e.stylesOptions.disableGeneration)return t||{};r.cacheClasses||(r.cacheClasses={value:null,lastProp:null,lastJSS:{}});var i=!1;return r.classes!==r.cacheClasses.lastJSS&&(r.cacheClasses.lastJSS=r.classes,i=!0),t!==r.cacheClasses.lastProp&&(r.cacheClasses.lastProp=t,i=!0),i&&(r.cacheClasses.value=ke({baseClasses:r.cacheClasses.lastJSS,newClasses:t,Component:n})),r.cacheClasses.value}function bn(e,t){var n=e.state,i=e.theme,s=e.stylesOptions,o=e.stylesCreator,a=e.name;if(!s.disableGeneration){var l=Se.get(s.sheetsManager,o,i);l||(l={refs:0,staticSheet:null,dynamicStyles:null},Se.set(s.sheetsManager,o,i,l));var u=Object(r.a)({},o.options,s,{theme:i,flip:"boolean"==typeof s.flip?s.flip:"rtl"===i.direction});u.generateId=u.serverGenerateClassName||u.generateClassName;var c=s.sheetsRegistry;if(0===l.refs){var h;s.sheetsCache&&(h=Se.get(s.sheetsCache,o,i));var d=o.create(i,a);h||((h=s.jss.createStyleSheet(d,Object(r.a)({link:!1},u))).attach(),s.sheetsCache&&Se.set(s.sheetsCache,o,i,h)),c&&c.add(h),l.staticSheet=h,l.dynamicStyles=function e(t){var n=null;for(var r in t){var i=t[r],s=typeof i;if("function"===s)n||(n={}),n[r]=i;else if("object"===s&&null!==i&&!Array.isArray(i)){var o=e(i);o&&(n||(n={}),n[r]=o)}}return n}(d)}if(l.dynamicStyles){var f=s.jss.createStyleSheet(l.dynamicStyles,Object(r.a)({link:!0},u));f.update(t),f.attach(),n.dynamicSheet=f,n.classes=ke({baseClasses:l.staticSheet.classes,newClasses:f.classes}),c&&c.add(f)}else n.classes=l.staticSheet.classes;l.refs+=1}}function wn(e,t){var n=e.state;n.dynamicSheet&&n.dynamicSheet.update(t)}function En(e){var t=e.state,n=e.theme,r=e.stylesOptions,i=e.stylesCreator;if(!r.disableGeneration){var s=Se.get(r.sheetsManager,i,n);s.refs-=1;var o=r.sheetsRegistry;0===s.refs&&(Se.delete(r.sheetsManager,i,n),r.jss.removeStyleSheet(s.staticSheet),o&&o.remove(s.staticSheet)),t.dynamicSheet&&(r.jss.removeStyleSheet(t.dynamicSheet),o&&o.remove(t.dynamicSheet))}}function Tn(e,t){var n,r=o.a.useRef([]),i=o.a.useMemo((function(){return{}}),t);r.current!==i&&(r.current=i,n=e()),o.a.useEffect((function(){return function(){n&&n()}}),[i])}function _n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.name,s=t.classNamePrefix,a=t.Component,l=t.defaultTheme,u=void 0===l?yn:l,c=Object(i.a)(t,["name","classNamePrefix","Component","defaultTheme"]),h=gn(e),d=n||s||"makeStyles";h.options={index:dn(),name:n,meta:d,classNamePrefix:d};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Ie()||u,i=Object(r.a)({},o.a.useContext(cn),c),s=o.a.useRef(),l=o.a.useRef();Tn((function(){var r={name:n,state:{},stylesCreator:h,stylesOptions:i,theme:t};return bn(r,e),l.current=!1,s.current=r,function(){En(r)}}),[t,h]),o.a.useEffect((function(){l.current&&wn(s.current,e),l.current=!0}));var d=vn(s.current,e.classes,a);return d};return f}function kn(e){var t=e.theme,n=e.name,r=e.props;if(!t||!t.props||!t.props[n])return r;var i,s=t.props[n];for(i in s)void 0===r[i]&&(r[i]=s[i]);return r}var Sn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var s=t.defaultTheme,a=t.withTheme,u=void 0!==a&&a,c=t.name,h=Object(i.a)(t,["defaultTheme","withTheme","name"]);var d=c,f=_n(e,Object(r.a)({defaultTheme:s,Component:n,name:c||n.displayName,classNamePrefix:d},h)),p=o.a.forwardRef((function(e,t){e.classes;var a,l=e.innerRef,h=Object(i.a)(e,["classes","innerRef"]),d=f(Object(r.a)({},n.defaultProps,e)),p=h;return("string"==typeof c||u)&&(a=Ie()||s,c&&(p=kn({theme:a,name:c,props:h})),u&&!p.theme&&(p.theme=a)),o.a.createElement(n,Object(r.a)({ref:l||t,classes:d},p))}));return l()(p,n),p}};function xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var In=["xs","sm","md","lg","xl"];function Cn(e){var t=e.values,n=void 0===t?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,s=e.unit,o=void 0===s?"px":s,a=e.step,l=void 0===a?5:a,u=Object(i.a)(e,["values","unit","step"]);function c(e){var t="number"==typeof n[e]?n[e]:e;return"@media (min-width:".concat(t).concat(o,")")}function h(e,t){var r=In.indexOf(t);return r===In.length-1?c(e):"@media (min-width:".concat("number"==typeof n[e]?n[e]:e).concat(o,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[In[r+1]]?n[In[r+1]]:t)-l/100).concat(o,")")}return Object(r.a)({keys:In,values:n,up:c,down:function(e){var t=In.indexOf(e)+1,r=n[In[t]];return t===In.length?c("xs"):"@media (max-width:".concat(("number"==typeof r&&t>0?r:e)-l/100).concat(o,")")},between:h,only:function(e){return h(e,e)},width:function(e){return n[e]}},u)}function On(e,t,n){var i;return Object(r.a)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:","\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")),Object(r.a)({paddingLeft:t(2),paddingRight:t(2)},n,xn({},e.up("sm"),Object(r.a)({paddingLeft:t(3),paddingRight:t(3)},n[e.up("sm")])))},toolbar:(i={minHeight:56},xn(i,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),xn(i,e.up("sm"),{minHeight:64}),i)},n)}var Nn=n(89),An={black:"#000",white:"#fff"},Rn={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},Pn={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},Dn={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},Mn={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ln={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},jn={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Fn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Un(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function Vn(e){if(e.type)return e;if("#"===e.charAt(0))return Vn(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(Object(Nn.a)(3,e));var r=e.substring(t+1,e.length-1).split(",");return{type:n,values:r=r.map((function(e){return parseFloat(e)}))}}function zn(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function Bn(e){var t="hsl"===(e=Vn(e)).type?Vn(function(e){var t=(e=Vn(e)).values,n=t[0],r=t[1]/100,i=t[2]/100,s=r*Math.min(i,1-i),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return i-s*Math.max(Math.min(t-3,9-t,1),-1)},a="rgb",l=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(a+="a",l.push(t[3])),zn({type:a,values:l})}(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function qn(e,t){if(e=Vn(e),t=Un(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return zn(e)}function Hn(e,t){if(e=Vn(e),t=Un(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return zn(e)}var Wn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:An.white,default:Rn[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Kn={text:{primary:An.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:Rn[800],default:"#303030"},action:{active:An.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function $n(e,t,n,r){var i=r.light||r,s=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=Hn(e.main,i):"dark"===t&&(e.dark=qn(e.main,s)))}function Gn(e){var t=e.primary,n=void 0===t?{light:Pn[300],main:Pn[500],dark:Pn[700]}:t,s=e.secondary,o=void 0===s?{light:Dn.A200,main:Dn.A400,dark:Dn.A700}:s,a=e.error,l=void 0===a?{light:Mn[300],main:Mn[500],dark:Mn[700]}:a,u=e.warning,c=void 0===u?{light:Ln[300],main:Ln[500],dark:Ln[700]}:u,h=e.info,d=void 0===h?{light:jn[300],main:jn[500],dark:jn[700]}:h,f=e.success,p=void 0===f?{light:Fn[300],main:Fn[500],dark:Fn[700]}:f,m=e.type,g=void 0===m?"light":m,y=e.contrastThreshold,v=void 0===y?3:y,b=e.tonalOffset,w=void 0===b?.2:b,E=Object(i.a)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function T(e){return function(e,t){var n=Bn(e),r=Bn(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,Kn.text.primary)>=v?Kn.text.primary:Wn.text.primary}var _=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=Object(r.a)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error(Object(Nn.a)(4,t));if("string"!=typeof e.main)throw new Error(Object(Nn.a)(5,JSON.stringify(e.main)));return $n(e,"light",n,w),$n(e,"dark",i,w),e.contrastText||(e.contrastText=T(e.main)),e},k={dark:Kn,light:Wn};return mn(Object(r.a)({common:An,type:g,primary:_(n),secondary:_(o,"A400","A200","A700"),error:_(l),warning:_(c),info:_(d),success:_(p),grey:Rn,contrastThreshold:v,getContrastText:T,augmentColor:_,tonalOffset:w},k[g]),E)}function Qn(e){return Math.round(1e5*e)/1e5}function Yn(e){return Qn(e)}var Jn={textTransform:"uppercase"};function Xn(e,t){var n="function"==typeof t?t(e):t,s=n.fontFamily,o=void 0===s?'"Roboto", "Helvetica", "Arial", sans-serif':s,a=n.fontSize,l=void 0===a?14:a,u=n.fontWeightLight,c=void 0===u?300:u,h=n.fontWeightRegular,d=void 0===h?400:h,f=n.fontWeightMedium,p=void 0===f?500:f,m=n.fontWeightBold,g=void 0===m?700:m,y=n.htmlFontSize,v=void 0===y?16:y,b=n.allVariants,w=n.pxToRem,E=Object(i.a)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var T=l/14,_=w||function(e){return"".concat(e/v*T,"rem")},k=function(e,t,n,i,s){return Object(r.a)({fontFamily:o,fontWeight:e,fontSize:_(t),lineHeight:n},'"Roboto", "Helvetica", "Arial", sans-serif'===o?{letterSpacing:"".concat(Qn(i/t),"em")}:{},s,b)},S={h1:k(c,96,1.167,-1.5),h2:k(c,60,1.2,-.5),h3:k(d,48,1.167,0),h4:k(d,34,1.235,.25),h5:k(d,24,1.334,0),h6:k(p,20,1.6,.15),subtitle1:k(d,16,1.75,.15),subtitle2:k(p,14,1.57,.1),body1:k(d,16,1.5,.15),body2:k(d,14,1.43,.15),button:k(p,14,1.75,.4,Jn),caption:k(d,12,1.66,.4),overline:k(d,12,2.66,1,Jn)};return mn(Object(r.a)({htmlFontSize:v,pxToRem:_,round:Yn,fontFamily:o,fontSize:l,fontWeightLight:c,fontWeightRegular:d,fontWeightMedium:p,fontWeightBold:g},S),E,{clone:!1})}function Zn(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var er=["none",Zn(0,2,1,-1,0,1,1,0,0,1,3,0),Zn(0,3,1,-2,0,2,2,0,0,1,5,0),Zn(0,3,3,-2,0,3,4,0,0,1,8,0),Zn(0,2,4,-1,0,4,5,0,0,1,10,0),Zn(0,3,5,-1,0,5,8,0,0,1,14,0),Zn(0,3,5,-1,0,6,10,0,0,1,18,0),Zn(0,4,5,-2,0,7,10,1,0,2,16,1),Zn(0,5,5,-3,0,8,10,1,0,3,14,2),Zn(0,5,6,-3,0,9,12,1,0,3,16,2),Zn(0,6,6,-3,0,10,14,1,0,4,18,3),Zn(0,6,7,-4,0,11,15,1,0,4,20,3),Zn(0,7,8,-4,0,12,17,2,0,5,22,4),Zn(0,7,8,-4,0,13,19,2,0,5,24,4),Zn(0,7,9,-4,0,14,21,2,0,5,26,4),Zn(0,8,9,-5,0,15,22,2,0,6,28,5),Zn(0,8,10,-5,0,16,24,2,0,6,30,5),Zn(0,8,11,-5,0,17,26,2,0,6,32,5),Zn(0,9,11,-5,0,18,28,2,0,7,34,6),Zn(0,9,12,-6,0,19,29,2,0,7,36,6),Zn(0,10,13,-6,0,20,31,3,0,8,38,7),Zn(0,10,13,-6,0,21,33,3,0,8,40,7),Zn(0,10,14,-6,0,22,35,3,0,8,42,7),Zn(0,11,14,-7,0,23,36,3,0,9,44,8),Zn(0,11,15,-7,0,24,38,3,0,9,46,8)],tr={borderRadius:4},nr=n(37);var rr=n(38);function ir(e,t){return Object(nr.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}}(e,t)||Object(ot.a)(e,t)||Object(rr.a)()}var sr=function(e,t){return t?mn(e,t,{clone:!1}):e},or={xs:0,sm:600,md:960,lg:1280,xl:1920},ar={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(or[e],"px)")}};var lr={m:"margin",p:"padding"},ur={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},cr={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},hr=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){if(e.length>2){if(!cr[e])return[e];e=cr[e]}var t=ir(e.split(""),2),n=t[0],r=t[1],i=lr[n],s=ur[r]||"";return Array.isArray(s)?s.map((function(e){return i+e})):[i+s]})),dr=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function fr(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}function pr(e,t){return function(n){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t||null==t)return t;var n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-".concat(n)}(t,n),e}),{})}}function mr(e){var t=fr(e.theme);return Object.keys(e).map((function(n){if(-1===dr.indexOf(n))return null;var r=pr(hr(n),t),i=e[n];return function(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||ar;return t.reduce((function(e,i,s){return e[r.up(r.keys[s])]=n(t[s]),e}),{})}if("object"===Object(fn.a)(t)){var i=e.theme.breakpoints||ar;return Object.keys(t).reduce((function(e,r){return e[i.up(r)]=n(t[r]),e}),{})}return n(t)}(e,i,r)})).reduce(sr,{})}mr.propTypes={},mr.filterProps=dr;function gr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var t=fr({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 0===n.length?t(1):1===n.length?t(n[0]):n.map((function(e){if("string"==typeof e)return e;var n=t(e);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var yr={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},vr={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function br(e){return"".concat(Math.round(e),"ms")}var wr={easing:yr,duration:vr,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,r=void 0===n?vr.standard:n,s=t.easing,o=void 0===s?yr.easeInOut:s,a=t.delay,l=void 0===a?0:a;Object(i.a)(t,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"==typeof r?r:br(r)," ").concat(o," ").concat("string"==typeof l?l:br(l))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}},Er={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function Tr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.breakpoints,n=void 0===t?{}:t,r=e.mixins,s=void 0===r?{}:r,o=e.palette,a=void 0===o?{}:o,l=e.spacing,u=e.typography,c=void 0===u?{}:u,h=Object(i.a)(e,["breakpoints","mixins","palette","spacing","typography"]),d=Gn(a),f=Cn(n),p=gr(l),m=mn({breakpoints:f,direction:"ltr",mixins:On(f,p,s),overrides:{},palette:d,props:{},shadows:er,typography:Xn(d,c),spacing:p,shape:tr,transitions:wr,zIndex:Er},h),g=arguments.length,y=new Array(g>1?g-1:0),v=1;v<g;v++)y[v-1]=arguments[v];return m=y.reduce((function(e,t){return mn(e,t)}),m)}var _r=Tr();t.a=function(e,t){return Sn(e,Object(r.a)({defaultTheme:_r},t))}},,function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},function(e,t){function n(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(e){return void n(e)}a.done?t(l):Promise.resolve(l).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,s){var o=e.apply(t,r);function a(e){n(o,i,s,a,l,"next",e)}function l(e){n(o,i,s,a,l,"throw",e)}a(void 0)}))}}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=o(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))i.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(l[a[h]]=n[a[h]])}}return l}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l,u=[],c=!1,h=-1;function d(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&f())}function f(){if(!c){var e=a(d);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){var r=n(14),i=n(68);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Oo})),n.d(t,"b",(function(){return Ds})),n.d(t,"c",(function(){return Co})),n.d(t,"d",(function(){return Ks}));var r=n(3),i=n(12),s=n(9),o=n(1),a=n(10);const l="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s.b("@firebase/firestore");function d(){return h.logLevel}function f(e,...t){if(h.logLevel<=s.a.DEBUG){const n=t.map(g);h.debug(`Firestore (${c}): ${e}`,...n)}}function p(e,...t){if(h.logLevel<=s.a.ERROR){const n=t.map(g);h.error(`Firestore (${c}): ${e}`,...n)}}function m(e,...t){if(h.logLevel<=s.a.WARN){const n=t.map(g);h.warn(`Firestore (${c}): ${e}`,...n)}}function g(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw p(t),new Error(t)}function v(e,t){e||y()}function b(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x{constructor(e){this.t=e,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{f("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(f("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(f("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(v("string"==typeof t.accessToken),new _(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return v(null===e||"string"==typeof e),new u(e)}}class I{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=u.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(v(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class C{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new I(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&f("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.A;return this.A=e.token,f("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{f("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):f("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(v("string"==typeof e.token),this.A=e.token,new O(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=A(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function P(e,t){return e<t?-1:e>t?1:0}function D(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new M(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new M(0,0))}static max(){return new L(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t,n){void 0===t?t=0:t>e.length&&y(),void 0===n?n=e.length-t:n>e.length-t&&y(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends j{construct(e,t,n){return new F(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends j{construct(e,t,n){return new V(e,t,n)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new V(t)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(F.fromString(e))}static fromName(e){return new z(F.fromString(e).popFirst(5))}static empty(){return new z(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new F(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function q(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=L.fromTimestamp(1e9===r?new M(n+1,0):new M(n,r));return new W(i,z.empty(),t)}function H(e){return new W(e.readTime,e.key,-1)}class W{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new W(L.min(),z.empty(),-1)}static max(){return new W(L.max(),z.empty(),-1)}}function K(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=z.comparator(e.documentKey,t.documentKey),0!==n?n:P(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){if(e.code!==w.FAILED_PRECONDITION||e.message!==$)throw e;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(e){return Y.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Y.reject(t)}static resolve(e){return new Y((t,n)=>{t(e)})}static reject(e){return new Y((t,n)=>{n(e)})}static waitFor(e){return new Y((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=Y.resolve(!1);for(const n of e)t=t.next(e=>e?Y.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Y((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next(e=>{s[l]=e,++o,o===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new Y((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}X.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ee{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ee("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ee&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ne(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function re(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return null==e}function se(e){return 0===e&&1/e==-1/0}function oe(e){return"number"==typeof e&&Number.isInteger(e)&&!se(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ae(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ae.EMPTY_BYTE_STRING=new ae("");const le=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(e){if(v(!!e),"string"==typeof e){let t=0;const n=le.exec(e);if(v(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ce(e.seconds),nanos:ce(e.nanos)}}function ce(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function he(e){return"string"==typeof e?ae.fromBase64String(e):ae.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function fe(e){const t=ue(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function me(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?de(e)?4:Ie(e)?9007199254740991:10:y()}function ge(e,t){if(e===t)return!0;const n=me(e);if(n!==me(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return fe(e).isEqual(fe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ue(e.timestampValue),r=ue(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return he(e.bytesValue).isEqual(he(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ce(e.geoPointValue.latitude)===ce(t.geoPointValue.latitude)&&ce(e.geoPointValue.longitude)===ce(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ce(e.integerValue)===ce(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ce(e.doubleValue),r=ce(t.doubleValue);return n===r?se(n)===se(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return D(e.arrayValue.values||[],t.arrayValue.values||[],ge);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(te(n)!==te(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ge(n[e],r[e])))return!1;return!0}(e,t);default:return y()}}function ye(e,t){return void 0!==(e.values||[]).find(e=>ge(e,t))}function ve(e,t){if(e===t)return 0;const n=me(e),r=me(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ce(e.integerValue||e.doubleValue),r=ce(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return be(e.timestampValue,t.timestampValue);case 4:return be(fe(e),fe(t));case 5:return P(e.stringValue,t.stringValue);case 6:return function(e,t){const n=he(e),r=he(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=P(n[e],r[e]);if(0!==t)return t}return P(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=P(ce(e.latitude),ce(t.latitude));return 0!==n?n:P(ce(e.longitude),ce(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ve(n[e],r[e]);if(t)return t}return P(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===pe.mapValue&&t===pe.mapValue)return 0;if(e===pe.mapValue)return 1;if(t===pe.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=P(r[e],s[e]);if(0!==t)return t;const o=ve(n[r[e]],i[s[e]]);if(0!==o)return o}return P(r.length,s.length)}(e.mapValue,t.mapValue);default:throw y()}}function be(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);const n=ue(e),r=ue(t),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function we(e){return function e(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const t=ue(e);return`time(${t.seconds},${t.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?he(t.bytesValue).toBase64():"referenceValue"in t?(r=t.referenceValue,z.fromName(r).toString()):"geoPointValue"in t?`geo(${(n=t.geoPointValue).latitude},${n.longitude})`:"arrayValue"in t?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=e(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${e(t.fields[s])}`;return r+"}"}(t.mapValue):y();var n,r}(e)}function Ee(e){return!!e&&"integerValue"in e}function Te(e){return!!e&&"arrayValue"in e}function _e(e){return!!e&&"nullValue"in e}function ke(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Se(e){return!!e&&"mapValue"in e}function xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ne(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=xe(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ie(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(e,t){this.position=e,this.inclusive=t}}function Oe(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?z.comparator(z.fromName(o.referenceValue),n.key):ve(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ne(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ge(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{}class Re extends Ae{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ue(e,t,n):"array-contains"===t?new qe(e,n):"in"===t?new He(e,n):"not-in"===t?new We(e,n):"array-contains-any"===t?new Ke(e,n):new Re(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ve(e,n):new ze(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ve(t,this.value)):null!==t&&me(this.value)===me(t)&&this.matchesComparison(ve(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pe extends Ae{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Pe(e,t)}matches(e){return De(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(e=>e.isInequality());return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function De(e){return"and"===e.op}function Me(e){return Le(e)&&De(e)}function Le(e){for(const t of e.filters)if(t instanceof Pe)return!1;return!0}function je(e,t){return e instanceof Re?function(e,t){return t instanceof Re&&e.op===t.op&&e.field.isEqual(t.field)&&ge(e.value,t.value)}(e,t):e instanceof Pe?function(e,t){return t instanceof Pe&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&je(n,t.filters[r]),!0)}(e,t):void y()}function Fe(e){return e instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${we(e.value)}`}(e):e instanceof Pe?function(e){return e.op.toString()+" {"+e.getFilters().map(Fe).join(" ,")+"}"}(e):"Filter"}class Ue extends Re{constructor(e,t,n){super(e,t,n),this.key=z.fromName(n.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ve extends Re{constructor(e,t){super(e,"in",t),this.keys=Be("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ze extends Re{constructor(e,t){super(e,"not-in",t),this.keys=Be("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Be(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>z.fromName(e.referenceValue))}class qe extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Te(t)&&ye(t.arrayValue,this.value)}}class He extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ye(this.value.arrayValue,t)}}class We extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ye(this.value.arrayValue,t)}}class Ke extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Te(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ye(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ge(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new Qe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ye(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ye(this.root,e,this.comparator,!0)}}class Ye{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Je.RED,this.left=null!=r?r:Je.EMPTY,this.right=null!=i?i:Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Je(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Je.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const e=this.left.check();if(e!==this.right.check())throw y();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1,Je.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ze(this.data.getIterator())}getIteratorFrom(e){return new Ze(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Xe))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Xe(this.comparator);return t.data=e,t}}class Ze{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.fields=e,e.sort(V.comparator)}static empty(){return new et([])}unionWith(e){let t=new Xe(V.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return D(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Se(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xe(t)}setAll(e){let t=V.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=xe(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Se(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ge(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Se(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){ne(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new tt(xe(this.value))}}function nt(e){const t=[];return ne(e.fields,(e,n)=>{const r=new V([e]);if(Se(n)){const e=nt(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new et(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class rt{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,L.min(),L.min(),L.min(),tt.empty(),0)}static newFoundDocument(e,t,n,r){return new rt(e,1,t,L.min(),n,r,0)}static newNoDocument(e,t){return new rt(e,2,t,L.min(),L.min(),tt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,L.min(),L.min(),tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(L.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function st(e,t=null,n=[],r=[],i=null,s=null,o=null){return new it(e,t,n,r,i,s,o)}function ot(e){const t=b(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>function e(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+we(t.value);if(Me(t))return t.filters.map(t=>e(t)).join(",");{const n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}}(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),ie(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>we(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>we(e)).join(",")),t.ft=e}return t.ft}function at(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ge(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!je(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ne(e.startAt,t.startAt)&&Ne(e.endAt,t.endAt)}function lt(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function ct(e,t,n,r,i,s,o,a){return new ut(e,t,n,r,i,s,o,a)}function ht(e){return new ut(e)}function dt(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ft(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function pt(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function mt(e){return null!==e.collectionGroup}function gt(e){const t=b(e);if(null===t.dt){t.dt=[];const e=pt(t),n=ft(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new $e(e)),t.dt.push(new $e(V.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new $e(V.keyField(),e))}}}return t.dt}function yt(e){const t=b(e);if(!t._t)if("F"===t.limitType)t._t=st(t.path,t.collectionGroup,gt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of gt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new $e(n.field,t))}const n=t.endAt?new Ce(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ce(t.startAt.position,t.startAt.inclusive):null;t._t=st(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function vt(e,t,n){return new ut(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bt(e,t){return at(yt(e),yt(t))&&e.limitType===t.limitType}function wt(e){return`${ot(yt(e))}|lt:${e.limitType}`}function Et(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Fe(e)).join(", ")}]`),ie(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>we(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>we(e)).join(",")),`Target(${t})`}(yt(e))}; limitType=${e.limitType})`}function Tt(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):z.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of gt(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Oe(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,gt(e),t))&&!(e.endAt&&!function(e,t,n){const r=Oe(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,gt(e),t))}(e,t)}function _t(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function kt(e){return(t,n)=>{let r=!1;for(const i of gt(e)){const e=St(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function St(e,t,n){const r=e.field.isKeyField()?z.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ve(r,i):y()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:se(t)?"-0":t}}function It(e){return{integerValue:""+e}}function Ct(e,t){return oe(t)?It(t):xt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this._=void 0}}function Nt(e,t,n){return e instanceof Pt?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Dt?Mt(e,t):e instanceof Lt?jt(e,t):function(e,t){const n=Rt(e,t),r=Ut(n)+Ut(e.gt);return Ee(n)&&Ee(e.gt)?It(r):xt(e.yt,r)}(e,t)}function At(e,t,n){return e instanceof Dt?Mt(e,t):e instanceof Lt?jt(e,t):n}function Rt(e,t){return e instanceof Ft?Ee(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Pt extends Ot{}class Dt extends Ot{constructor(e){super(),this.elements=e}}function Mt(e,t){const n=Vt(t);for(const t of e.elements)n.some(e=>ge(e,t))||n.push(t);return{arrayValue:{values:n}}}class Lt extends Ot{constructor(e){super(),this.elements=e}}function jt(e,t){let n=Vt(t);for(const t of e.elements)n=n.filter(e=>!ge(e,t));return{arrayValue:{values:n}}}class Ft extends Ot{constructor(e,t){super(),this.yt=e,this.gt=t}}function Ut(e){return ce(e.integerValue||e.doubleValue)}function Vt(e){return Te(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.version=e,this.transformResults=t}}class Bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qt(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ht{}function Wt(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tn(e.key,Bt.none()):new Yt(e.key,e.data,Bt.none());{const n=e.data,r=tt.empty();let i=new Xe(V.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Jt(e.key,r,new et(i.toArray()),Bt.none())}}function Kt(e,t,n){e instanceof Yt?function(e,t,n){const r=e.value.clone(),i=Zt(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Jt?function(e,t,n){if(!qt(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Zt(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Xt(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function $t(e,t,n,r){return e instanceof Yt?function(e,t,n,r){if(!qt(e.precondition,t))return n;const i=e.value.clone(),s=en(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Jt?function(e,t,n,r){if(!qt(e.precondition,t))return n;const i=en(e.fieldTransforms,r,t),s=t.data;return s.setAll(Xt(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return qt(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Gt(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Rt(r.transform,e||null);null!=i&&(null===n&&(n=tt.empty()),n.set(r.field,i))}return n||null}function Qt(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&D(e,t,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Dt&&t instanceof Dt||e instanceof Lt&&t instanceof Lt?D(e.elements,t.elements,ge):e instanceof Ft&&t instanceof Ft?ge(e.gt,t.gt):e instanceof Pt&&t instanceof Pt}(e.transform,t.transform)}(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Yt extends Ht{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Jt extends Ht{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xt(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Zt(e,t,n){const r=new Map;v(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,At(o,a,n[i]))}return r}function en(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Nt(e,s,t))}return r}class tn extends Ht{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nn extends Ht{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn,on;function an(e){switch(e){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function ln(e){if(void 0===e)return p("GRPC error has no .code"),w.UNKNOWN;switch(e){case sn.OK:return w.OK;case sn.CANCELLED:return w.CANCELLED;case sn.UNKNOWN:return w.UNKNOWN;case sn.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case sn.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case sn.INTERNAL:return w.INTERNAL;case sn.UNAVAILABLE:return w.UNAVAILABLE;case sn.UNAUTHENTICATED:return w.UNAUTHENTICATED;case sn.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case sn.NOT_FOUND:return w.NOT_FOUND;case sn.ALREADY_EXISTS:return w.ALREADY_EXISTS;case sn.PERMISSION_DENIED:return w.PERMISSION_DENIED;case sn.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case sn.ABORTED:return w.ABORTED;case sn.OUT_OF_RANGE:return w.OUT_OF_RANGE;case sn.UNIMPLEMENTED:return w.UNIMPLEMENTED;case sn.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(on=sn||(sn={}))[on.OK=0]="OK",on[on.CANCELLED=1]="CANCELLED",on[on.UNKNOWN=2]="UNKNOWN",on[on.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",on[on.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",on[on.NOT_FOUND=5]="NOT_FOUND",on[on.ALREADY_EXISTS=6]="ALREADY_EXISTS",on[on.PERMISSION_DENIED=7]="PERMISSION_DENIED",on[on.UNAUTHENTICATED=16]="UNAUTHENTICATED",on[on.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",on[on.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",on[on.ABORTED=10]="ABORTED",on[on.OUT_OF_RANGE=11]="OUT_OF_RANGE",on[on.UNIMPLEMENTED=12]="UNIMPLEMENTED",on[on.INTERNAL=13]="INTERNAL",on[on.UNAVAILABLE=14]="UNAVAILABLE",on[on.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ne(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return re(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Qe(z.comparator);function hn(){return cn}const dn=new Qe(z.comparator);function fn(...e){let t=dn;for(const n of e)t=t.insert(n.key,n);return t}function pn(e){let t=dn;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function mn(){return yn()}function gn(){return yn()}function yn(){return new un(e=>e.toString(),(e,t)=>e.isEqual(t))}const vn=new Qe(z.comparator),bn=new Xe(z.comparator);function wn(...e){let t=bn;for(const n of e)t=t.add(n);return t}const En=new Xe(P);function Tn(){return En}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,kn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new _n(L.min(),r,Tn(),hn(),wn())}}class kn{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new kn(n,t,wn(),wn(),wn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class xn{constructor(e,t){this.targetId=e,this.Et=t}}class In{constructor(e,t,n=ae.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Cn{constructor(){this.At=0,this.Rt=An(),this.bt=ae.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=wn(),t=wn(),n=wn();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:y()}}),new kn(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=An()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class On{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=hn(),this.qt=Nn(),this.Ut=new Xe(P)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:y()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((e,n)=>{this.zt(n)&&t(n)})}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(lt(e))if(0===n){const n=new z(e.path);this.Qt(t,n,rt.newNoDocument(n,L.min()))}else v(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&lt(i.target)){const t=new z(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,rt.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}});let n=wn();this.qt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.Lt.forEach((t,n)=>n.setReadTime(e));const r=new _n(e,t,this.Ut,this.Lt,n);return this.Lt=hn(),this.qt=Nn(),this.Ut=new Xe(P),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Cn,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Xe(P),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||f("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Cn),this.$t.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Nn(){return new Qe(z.comparator)}function An(){return new Qe(z.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn={asc:"ASCENDING",desc:"DESCENDING"},Pn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dn={and:"AND",or:"OR"};class Mn{constructor(e,t){this.databaseId=e,this.wt=t}}function Ln(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function jn(e,t){return e.wt?t.toBase64():t.toUint8Array()}function Fn(e,t){return Ln(e,t.toTimestamp())}function Un(e){return v(!!e),L.fromTimestamp(function(e){const t=ue(e);return new M(t.seconds,t.nanos)}(e))}function Vn(e,t){return function(e){return new F(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function zn(e){const t=F.fromString(e);return v(sr(t)),t}function Bn(e,t){return Vn(e.databaseId,t.path)}function qn(e,t){const n=zn(t);if(n.get(1)!==e.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z($n(n))}function Hn(e,t){return Vn(e.databaseId,t)}function Wn(e){const t=zn(e);return 4===t.length?F.emptyPath():$n(t)}function Kn(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function $n(e){return v(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Gn(e,t,n){return{name:Bn(e,t),fields:n.value.mapValue.fields}}function Qn(e,t){let n;if(t instanceof Yt)n={update:Gn(e,t.key,t.value)};else if(t instanceof tn)n={delete:Bn(e,t.key)};else if(t instanceof Jt)n={update:Gn(e,t.key,t.data),updateMask:ir(t.fieldMask)};else{if(!(t instanceof nn))return y();n={verify:Bn(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Pt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Dt)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Lt)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ft)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw y()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Fn(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:y()}(e,t.precondition)),n}function Yn(e,t){return{documents:[Hn(e,t.path)]}}function Jn(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Hn(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Hn(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return function e(t){return t instanceof Re?function(e){if("=="===e.op){if(ke(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NAN"}};if(_e(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ke(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NAN"}};if(_e(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(e.field),op:er(e.op),value:e.value}}}(t):t instanceof Pe?function(t){const n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:tr(t.op),filters:n}}}(t):y()}(Pe.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:nr(e.field),direction:Zn(e.dir)}}(e))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||ie(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Xn(e){let t=Wn(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=rr(e.unaryFilter.field);return Re.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=rr(e.unaryFilter.field);return Re.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rr(e.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=rr(e.unaryFilter.field);return Re.create(i,"!=",{nullValue:"NULL_VALUE"});default:return y()}}(t):void 0!==t.fieldFilter?function(e){return Re.create(rr(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Pe.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return y()}}(t.compositeFilter.op))}(t):y()}(e);return t instanceof Pe&&Me(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>function(e){return new $e(rr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ie(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Ce(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ce(n,t)}(n.endAt)),ct(t,i,o,s,a,"F",l,u)}function Zn(e){return Rn[e]}function er(e){return Pn[e]}function tr(e){return Dn[e]}function nr(e){return{fieldPath:e.canonicalString()}}function rr(e){return V.fromServerFormat(e.fieldPath)}function ir(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function sr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ar=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lr=ar;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&Kt(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=$t(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=$t(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=gn();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Wt(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),wn())}isEqual(e){return this.batchId===e.batchId&&D(this.mutations,e.mutations,(e,t)=>Qt(e,t))&&D(this.baseMutations,e.baseMutations,(e,t)=>Qt(e,t))}}class cr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){v(e.mutations.length===n.length);let r=vn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new cr(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n,r,i=L.min(),s=L.min(),o=ae.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.ie=e}}function pr(e){const t=Xn({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?vt(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(ce(e.integerValue));else if("doubleValue"in e){const n=ce(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),se(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(""+(n.seconds||"")),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(he(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Ie(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):y()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),z.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}mr.Ie=new mr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(){this.Je=new yr}addToCollectionParentIndex(e,t){return this.Je.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(W.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(W.min())}updateCollectionGroup(e,t,n){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class yr{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Xe(F.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Xe(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class vr{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new vr(e,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr.DEFAULT_COLLECTION_PERCENTILE=10,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vr.DEFAULT=new vr(41943040,vr.DEFAULT_COLLECTION_PERCENTILE,vr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vr.DISABLED=new vr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new br(0)}static vn(){return new br(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(){this.changes=new un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Y.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&$t(n.mutation,e,et.empty(),M.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,wn()).next(()=>t))}getLocalViewOfDocuments(e,t,n=wn()){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=fn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=mn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,wn()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=hn();const s=yn(),o=yn();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Jt)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),$t(o.mutation,t,o.mutation.getFieldMask(),M.now())):s.set(t.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new Er(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=yn();let r=new Qe((e,t)=>e-t),i=wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||et.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||wn()).add(e);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,u=gn();l.forEach(e=>{if(!i.has(e)){const r=Wt(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Y.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n){return function(e){return z.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):mt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Y.resolve(mn());let o=-1,a=i;return s.next(t=>Y.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Y.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,wn())).next(e=>({batchId:o,changes:pn(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(e=>{let t=fn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=fn();return this.indexManager.getCollectionParents(e,r).next(s=>Y.forEach(s,s=>{const o=function(e,t){return new ut(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r))).next(e=>{r.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,rt.newInvalidDocument(r)))});let n=fn();return e.forEach((e,i)=>{const s=r.get(e);void 0!==s&&$t(s.mutation,i,et.empty(),M.now()),Tt(t,i)&&(n=n.insert(e,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Y.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Un(n.createTime)}),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:pr(e.bundledQuery),readTime:Un(e.readTime)}}(t)),Y.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.overlays=new Qe(z.comparator),this.es=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const n=mn();return Y.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.oe(e,t,r)}),Y.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(n)),Y.resolve()}getOverlaysForCollection(e,t,n){const r=mn(),i=t.length+1,s=new z(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Y.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Qe((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=mn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=mn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Y.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new hr(t,n));let i=this.es.get(t);void 0===i&&(i=wn(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.ns=new Xe(xr.ss),this.rs=new Xe(xr.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new xr(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new xr(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){const t=new z(new F([])),n=new xr(t,e),r=new xr(t,e+1),i=[];return this.rs.forEachInRange([n,r],e=>{this.cs(e),i.push(e.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new z(new F([])),n=new xr(t,e),r=new xr(t,e+1);let i=wn();return this.rs.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new xr(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class xr{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return z.comparator(e.key,t.key)||P(e._s,t._s)}static os(e,t){return P(e._s,t._s)||z.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Xe(xr.ss)}checkEmpty(e){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ur(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.gs=this.gs.add(new xr(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(e,t){return Y.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new xr(t,0),r=new xr(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],e=>{const t=this.ys(e._s);i.push(t)}),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xe(P);return t.forEach(e=>{const t=new xr(e,0),r=new xr(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],e=>{n=n.add(e._s)})}),Y.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;z.isDocumentKey(i)||(i=i.child(""));const s=new xr(new z(i),0);let o=new Xe(P);return this.gs.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)},s),Y.resolve(this.Is(o))}Is(e){const t=[];return e.forEach(e=>{const n=this.ys(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){v(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Y.forEach(t.mutations,r=>{const i=new xr(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){const n=new xr(t,0),r=this.gs.firstAfterOrEqual(n);return Y.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e){this.Es=e,this.docs=new Qe(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Y.resolve(n?n.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let n=hn();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():rt.newInvalidDocument(e))}),Y.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=hn();const s=t.path,o=new z(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||K(H(o),n)<=0||(r.has(o.key)||Tt(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Y.resolve(i)}getAllFromCollectionGroup(e,t,n,r){y()}As(e,t){return Y.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Or(this)}getSize(e){return Y.resolve(this.size)}}class Or extends wr{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)}),Y.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.persistence=e,this.Rs=new un(e=>ot(e),at),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sr,this.targetCount=0,this.vs=br.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,n)=>t(n)),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Y.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new br(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.Dn(t),Y.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Y.waitFor(i).next(()=>r)}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Y.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Y.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),Y.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Y.resolve(n)}containsKey(e,t){return Y.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new X(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Nr(this),this.indexManager=new gr,this.remoteDocumentCache=function(e){return new Cr(e)}(e=>this.referenceDelegate.xs(e)),this.yt=new fr(t),this.Ns=new _r(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kr,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ir(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){f("MemoryPersistence","Starting transaction:",e);const r=new Rr(this.Ss.next());return this.referenceDelegate.ks(),n(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ms(e,t){return Y.or(Object.values(this.Vs).map(n=>()=>n.containsKey(e,t)))}}class Rr extends G{constructor(e){super(),this.currentSequenceNumber=e}}class Pr{constructor(e){this.persistence=e,this.Fs=new Sr,this.$s=null}static Bs(e){return new Pr(e)}get Ls(){if(this.$s)return this.$s;throw y()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Y.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Y.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Ls,n=>{const r=z.fromPath(n);return this.qs(e,r).next(e=>{e||t.removeEntry(r,L.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.qs(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}qs(e,t){return Y.or([()=>Y.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=wn(),r=wn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Dr(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next(i=>i||this.Oi(e,t,r,n)).next(n=>n||this.Mi(e,t))}ki(e,t){if(dt(t))return Y.resolve(null);let n=yt(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=vt(t,null,"F"),n=yt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=wn(...r);return this.Ni.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,vt(t,null,"F")):this.Bi(e,s,t,n)}))})))}Oi(e,t,n,r){return dt(t)||r.isEqual(L.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next(i=>{const o=this.Fi(t,i);return this.$i(t,o,n,r)?this.Mi(e,t):(d()<=s.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Et(t)),this.Bi(e,o,t,q(r,-1)))})}Fi(e,t){let n=new Xe(kt(e));return t.forEach((t,r)=>{Tt(e,r)&&(n=n.add(r))}),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return d()<=s.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Et(t)),this.Ni.getDocumentsMatchingQuery(e,t,W.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new Qe(P),this.Ui=new un(e=>ot(e),at),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tr(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qi))}}function jr(e,t,n,r){return new Lr(e,t,n,r)}async function Fr(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let o=wn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({ji:e,removedBatchIds:i,addedBatchIds:s}))})})}function Ur(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Cs.getLastRemoteSnapshotVersion(e))}function Vr(e,t,n){let r=wn(),i=wn();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=hn();return n.forEach((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(L.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Wi:r,zi:i}})}function zr(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Br(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(i=>i?(r=i,Y.resolve(r)):n.Cs.allocateTargetId(e).next(i=>(r=new dr(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e})}async function qr(e,t,n){const r=b(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(e){if(!J(e))throw e;f("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function Hr(e,t,n){const r=b(e);let i=L.min(),s=wn();return r.persistence.runTransaction("Execute query","readonly",e=>function(e,t,n){const r=b(e),i=r.Ui.get(n);return void 0!==i?Y.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,yt(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:L.min(),n?s:wn())).next(e=>(Wr(r,_t(t),e),{documents:e,Hi:s})))}function Wr(e,t,n){let r=e.Ki.get(t)||L.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Ki.set(t,r)}class Kr{constructor(){this.activeTargetIds=Tn()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $r{constructor(){this.Lr=new Kr,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Kr,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);f("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then(e=>(f("RestConnection","Received: ",e),e),t=>{throw m("RestConnection",e+" failed with error: ",t,"url: ",s,"request:",n),t})}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}ho(e,t){const n=Yr[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise((i,s)=>{const o=new a.g;o.setWithCredentials(!0),o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const t=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(t)),i(t);break;case a.a.TIMEOUT:f("Connection",'RPC "'+e+'" timed out'),s(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(t)>=0?t:w.UNKNOWN}(t.status);s(new E(e,t.message))}else s(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{f("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(r);o.send(t,"POST",l,n,15)})}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Object(a.h)(),s=Object(a.i)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new a.d({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=r.join("");f("Connection","Creating WebChannel: "+l,o);const u=i.createWebChannel(l,o);let c=!1,h=!1;const d=new Jr({Hr:e=>{h?f("Connection","Not sending because WebChannel is closed:",e):(c||(f("Connection","Opening WebChannel transport."),u.open(),c=!0),f("Connection","WebChannel sending:",e),u.send(e))},Jr:()=>u.close()}),p=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(u,a.f.EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),p(u,a.f.EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.io())}),p(u,a.f.EventType.ERROR,e=>{h||(h=!0,m("Connection","WebChannel transport errored:",e),d.io(new E(w.UNAVAILABLE,"The operation could not be completed")))}),p(u,a.f.EventType.MESSAGE,e=>{var t;if(!h){const n=e.data[0];v(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){f("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=sn[e];if(void 0!==t)return ln(t)}(e),n=i.message;void 0===t&&(t=w.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.io(new E(t,n)),u.close()}else f("Connection","WebChannel received:",n),d.ro(n)}}),p(s,a.b.STAT_EVENT,e=>{e.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):e.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e){return new Mn(e,!0)}class ti{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ti(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.So===t&&this.Go(e,n)},t=>{e(()=>{const e=new E(w.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{n(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{n(()=>this.Qo(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return f("PersistentStream","close with error: "+e),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ri extends ni{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:y()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(v(void 0===t||"string"==typeof t),ae.fromBase64String(t||"")):(v(void 0===t||t instanceof Uint8Array),ae.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?w.UNKNOWN:ln(e.code);return new E(t,e.message||"")}(o);n=new In(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=qn(e,r.document.name),s=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):L.min(),a=new tt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Sn(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=qn(e,r.document),s=r.readTime?Un(r.readTime):L.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Sn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=qn(e,r.document),s=r.removedTargetIds||[];n=new Sn([],s,i,null)}else{if(!("filter"in t))return y();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new rn(r),s=e.targetId;n=new xn(s,i)}}return n}(this.yt,e),n=function(e){if(!("targetChange"in e))return L.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?L.min():t.readTime?Un(t.readTime):L.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=Kn(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=lt(r)?{documents:Yn(e,r)}:{query:Jn(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=jn(e,t.resumeToken):t.snapshotVersion.compareTo(L.min())>0&&(n.readTime=Ln(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=Kn(this.yt),t.removeTarget=e,this.Bo(t)}}class ii extends ni{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(v(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=function(e,t){return e&&e.length>0?(v(void 0!==t),e.map(e=>function(e,t){let n=e.updateTime?Un(e.updateTime):Un(t);return n.isEqual(L.min())&&(n=Un(t)),new zt(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Un(e.commitTime);return this.listener.Zo(n,t)}return v(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Kn(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Qn(this.yt,e))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(w.UNKNOWN,e.toString())})}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection._o(e,t,n,i,s,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(w.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class oi{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au("Connection failed 1 times. Most recent error: "+e.toString()),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(t),this.ou=!1):f("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(e=>{n.enqueueAndForget(async()=>{gi(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=b(e);t._u.add(4),await ui(t),t.gu.set("Unknown"),t._u.delete(4),await li(t)}(this))})}),this.gu=new oi(n,r)}}async function li(e){if(gi(e))for(const t of e.wu)await t(!0)}async function ui(e){for(const t of e.wu)await t(!1)}function ci(e,t){const n=b(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),mi(n)?pi(n):Di(n).ko()&&di(n,t))}function hi(e,t){const n=b(e),r=Di(n);n.du.delete(t),r.ko()&&fi(n,t),0===n.du.size&&(r.ko()?r.Fo():gi(n)&&n.gu.set("Unknown"))}function di(e,t){e.yu.Ot(t.targetId),Di(e).zo(t)}function fi(e,t){e.yu.Ot(t),Di(e).Ho(t)}function pi(e){e.yu=new On({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),Di(e).start(),e.gu.uu()}function mi(e){return gi(e)&&!Di(e).No()&&e.du.size>0}function gi(e){return 0===b(e)._u.size}function yi(e){e.yu=void 0}async function vi(e){e.du.forEach((t,n)=>{di(e,t)})}async function bi(e,t){yi(e),mi(e)?(e.gu.hu(t),pi(e)):e.gu.set("Unknown")}async function wi(e,t,n){if(e.gu.set("Online"),t instanceof In&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ei(e,n)}else if(t instanceof Sn?e.yu.Kt(t):t instanceof xn?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(L.min()))try{const t=await Ur(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach(t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(ae.EMPTY_BYTE_STRING,n.snapshotVersion)),fi(e,t);const r=new dr(n.target,t,1,n.sequenceNumber);di(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){f("RemoteStore","Failed to raise snapshot:",t),await Ei(e,t)}}async function Ei(e,t,n){if(!J(t))throw t;e._u.add(1),await ui(e),e.gu.set("Offline"),n||(n=()=>Ur(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await li(e)})}function Ti(e,t){return t().catch(n=>Ei(e,n,t))}async function _i(e){const t=b(e),n=Mi(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;ki(t);)try{const e=await zr(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Si(t,e)}catch(e){await Ei(t,e)}xi(t)&&Ii(t)}function ki(e){return gi(e)&&e.fu.length<10}function Si(e,t){e.fu.push(t);const n=Mi(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function xi(e){return gi(e)&&!Mi(e).No()&&e.fu.length>0}function Ii(e){Mi(e).start()}async function Ci(e){Mi(e).eu()}async function Oi(e){const t=Mi(e);for(const n of e.fu)t.Xo(n.mutations)}async function Ni(e,t,n){const r=e.fu.shift(),i=cr.from(r,t,n);await Ti(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await _i(e)}async function Ai(e,t){t&&Mi(e).Yo&&await async function(e,t){if(an(n=t.code)&&n!==w.ABORTED){const n=e.fu.shift();Mi(e).Mo(),await Ti(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await _i(e)}var n}(e,t),xi(e)&&Ii(e)}async function Ri(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=gi(n);n._u.add(3),await ui(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await li(n)}async function Pi(e,t){const n=b(e);t?(n._u.delete(2),await li(n)):t||(n._u.add(2),await ui(n),n.gu.set("Unknown"))}function Di(e){return e.pu||(e.pu=function(e,t,n){const r=b(e);return r.su(),new ri(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:vi.bind(null,e),Zr:bi.bind(null,e),Wo:wi.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),mi(e)?pi(e):e.gu.set("Unknown")):(await e.pu.stop(),yi(e))})),e.pu}function Mi(e){return e.Iu||(e.Iu=function(e,t,n){const r=b(e);return r.su(),new ii(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:Ci.bind(null,e),Zr:Ai.bind(null,e),tu:Oi.bind(null,e),Zo:Ni.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await _i(e)):(await e.Iu.stop(),e.fu.length>0&&(f("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Li{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Li(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(e,t){if(p("AsyncQueue",`${t}: ${e}`),J(e))return new E(w.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.comparator=e?(t,n)=>e(t,n)||z.comparator(t.key,n.key):(e,t)=>z.comparator(e.key,t.key),this.keyedMap=fn(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fi))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fi;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.Tu=new Qe(z.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):y():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Vi{constructor(e,t,n,r,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Vi(e,t,Fi.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.Au=void 0,this.listeners=[]}}class Bi{constructor(){this.queries=new un(e=>wt(e),bt),this.onlineState="Unknown",this.Ru=new Set}}async function qi(e,t){const n=b(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zi),i)try{s.Au=await n.onListen(r)}catch(e){const n=ji(e,`Initialization of query '${Et(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&$i(n)}async function Hi(e,t){const n=b(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wi(e,t){const n=b(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Pu(e)&&(r=!0);i.Au=e}}r&&$i(n)}function Ki(e,t,n){const r=b(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function $i(e){e.Ru.forEach(e=>{e.next()})}class Gi{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Vi(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(e){this.key=e}}class Yi{constructor(e){this.key=e}}class Ji{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=wn(),this.mutatedKeys=wn(),this.Gu=kt(e),this.Qu=new Fi(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new Ui,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const u=r.get(e),c=Tt(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(u,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||l&&this.Gu(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(a||l)&&(o=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Vi(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Ui,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.qu=this.qu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.qu=this.qu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=wn(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});const t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new Yi(e))}),this.Ku.forEach(n=>{e.has(n)||t.push(new Qi(n))}),t}tc(e){this.qu=e.Hi,this.Ku=wn();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Vi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Xi{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Zi{constructor(e){this.key=e,this.nc=!1}}class es{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new un(e=>wt(e),bt),this.rc=new Map,this.oc=new Set,this.uc=new Qe(z.comparator),this.cc=new Map,this.ac=new Sr,this.hc={},this.lc=new Map,this.fc=br.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ts(e,t){const n=bs(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await Br(n.localStore,yt(t));n.isPrimaryClient&&ci(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ns(n,t,r,"current"===s,e.resumeToken)}return i}async function ns(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await Hr(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,i)));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return fs(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await Hr(e.localStore,t,!0),o=new Ji(t,s.Hi),a=o.Wu(s.documents),l=kn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);fs(e,n,u.Xu);const c=new Xi(t,n,o);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function rs(e,t){const n=b(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(e=>!bt(e,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hi(n.remoteStore,r.targetId),hs(n,r.targetId)}).catch(Q)):(hs(n,r.targetId),await qr(n.localStore,r.targetId,!0))}async function is(e,t){const n=b(e);try{const e=await function(e,t){const n=b(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a)));let u=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ae.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,u,s)&&o.push(n.Cs.updateTargetData(e,u))});let a=hn(),l=wn();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Vr(e,s,t.documentUpdates).next(e=>{a=e.Wi,l=e.zi})),!r.isEqual(L.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Y.waitFor(o).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,l)).next(()=>a)}).then(e=>(n.qi=i,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.cc.get(t);r&&(v(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?v(r.nc):e.removedDocuments.size>0&&(v(r.nc),r.nc=!1))}),await gs(n,e,t)}catch(e){await Q(e)}}function ss(e,t,n){const r=b(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=b(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)}),r&&$i(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function os(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new Qe(z.comparator);e=e.insert(s,rt.newNoDocument(s,L.min()));const n=wn().add(s),i=new _n(L.min(),new Map,new Xe(P),e,n);await is(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),ms(r)}else await qr(r.localStore,t,!1).then(()=>hs(r,t,n)).catch(Q)}async function as(e,t){const n=b(e),r=t.batch.batchId;try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);v(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=wn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);cs(n,r,null),us(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gs(n,e)}catch(e){await Q(e)}}async function ls(e,t,n){const r=b(e);try{const e=await function(e,t){const n=b(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(v(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);cs(r,t,n),us(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gs(r,e)}catch(n){await Q(n)}}function us(e,t){(e.lc.get(t)||[]).forEach(e=>{e.resolve()}),e.lc.delete(t)}function cs(e,t,n){const r=b(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function hs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||ds(e,t)})}function ds(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(hi(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ms(e))}function fs(e,t,n){for(const r of n)r instanceof Qi?(e.ac.addReference(r.key,t),ps(e,r)):r instanceof Yi?(f("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||ds(e,r.key)):y()}function ps(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(f("SyncEngine","New document in limbo: "+n),e.oc.add(r),ms(e))}function ms(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new z(F.fromString(t)),r=e.fc.next();e.cc.set(r,new Zi(n)),e.uc=e.uc.insert(n,r),ci(e.remoteStore,new dr(yt(ht(n.path)),r,2,X.at))}}async function gs(e,t,n){const r=b(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((e,a)=>{o.push(r._c(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Dr.Ci(a.targetId,e);s.push(t)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=b(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Y.forEach(t,t=>Y.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Y.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!J(e))throw e;f("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.qi.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(t,i)}}}(r.localStore,s))}async function ys(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){f("SyncEngine","User change. New user:",t.toKey());const e=await Fr(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach(e=>{e.forEach(e=>{e.reject(new E(w.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.lc.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await gs(n,e.ji)}}function vs(e,t){const n=b(e),r=n.cc.get(t);if(r&&r.nc)return wn().add(r.key);{let e=wn();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function bs(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=is.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vs.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=os.bind(null,t),t.sc.Wo=Wi.bind(null,t.eventManager),t.sc.wc=Ki.bind(null,t.eventManager),t}function ws(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=as.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ls.bind(null,t),t}class Es{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ei(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return jr(this.persistence,new Mr,e.initialUser,this.yt)}yc(e){return new Ar(Pr.Bs,this.yt)}gc(e){return new $r}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ts{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ss(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ys.bind(null,this.syncEngine),await Pi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bi}createDatastore(e){const t=ei(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xr(r));var r;return function(e,t,n,r){return new si(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ss(this.syncEngine,e,0),s=Qr.C()?new Qr:new Gr,new ai(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new es(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=b(e);f("RemoteStore","RemoteStore shutting down."),t._u.add(5),await ui(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(e,t,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ks(e){if(!z.isDocumentKey(e))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ss(e){if(z.isDocumentKey(e))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function xs(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":y()}function Is(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xs(e);throw new E(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cs=new Map;class Os{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new E(w.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Os({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Os(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"gapi":const t=e.client;return new C(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Cs.get(e);t&&(f("ComponentProvider","Removing Datastore"),Cs.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new As(this.firestore,e,this._key)}}class Rs{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Rs(this.firestore,e,this._query)}}class Ps extends Rs{constructor(e,t,n){super(e,t,ht(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new As(this.firestore,null,new z(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function Ds(e,t,...n){if(e=Object(o.n)(e),_s("collection","path",t),e instanceof Ns){const r=F.fromString(t,...n);return Ss(r),new Ps(e,null,r)}{if(!(e instanceof As||e instanceof Ps))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(F.fromString(t,...n));return Ss(r),new Ps(e.firestore,null,r)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ls{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{f("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(f("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ji(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function js(e,t){e.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Fr(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Fs(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Us(e);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>Ri(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Ri(t.remoteStore,n)),e.onlineComponents=t}async function Us(e){return e.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await js(e,new Es)),e.offlineComponents}async function Vs(e){return e.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await Fs(e,new Ts)),e.onlineComponents}function zs(e){return Vs(e).then(e=>e.syncEngine)}async function Bs(e){const t=await Vs(e),n=t.eventManager;return n.onListen=ts.bind(null,t.syncEngine),n.onUnlisten=rs.bind(null,t.syncEngine),n}function qs(e,t,n={}){const r=new T;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Ms({next:n=>{t.enqueueAndForget(()=>Hi(e,o)),n.fromCache&&"server"===r.source?i.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Gi(n,s,{includeMetadataChanges:!0,Nu:!0});return qi(e,o)}(await Bs(e),e.asyncQueue,t,n,r)),r.promise}class Hs{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ti(this,"async_queue_retry"),this.Wc=()=>{const e=Zr();e&&f("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Zr();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Zr();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new T;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!J(e))throw e;f("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{this.Kc=e,this.Gc=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Li.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&y()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Ws extends Ns{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Hs,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gs(this),this._firestoreClient.terminate()}}function Ks(e,t){const n="object"==typeof e?e:Object(r.e)(),i="string"==typeof e?e:t||"(default)",s=Object(r.b)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const e=Object(o.l)("firestore");e&&function(e,t,n,r={}){var i;const s=(e=Is(e,Ns))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=u.MOCK_USER;else{t=Object(o.f)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}e._authCredentials=new S(new _(t,n))}}(s,...e)}return s}function $s(e){return e._firestoreClient||Gs(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Gs(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Z(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Ls(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(ae.fromBase64String(e))}catch(e){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Qs(ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=/^__.*__$/;class eo{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Jt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yt(e,this.data,t,this.fieldTransforms)}}function to(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class no{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new no(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return po(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(to(this.sa)&&Zs.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ro{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||ei(e)}da(e,t,n,r=!1){return new no({sa:e,methodName:t,fa:n,path:V.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function io(e){const t=e._freezeSettings(),n=ei(e._databaseId);return new ro(e._databaseId,!!t.ignoreUndefinedProperties,n)}function so(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);uo("Data must be an object, but it was:",o,r);const a=ao(r,o);let l,u;if(s.merge)l=new et(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=co(t,r,n);if(!o.contains(i))throw new E(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);mo(e,i)||e.push(i)}l=new et(e),u=o.fieldTransforms.filter(e=>l.covers(e.field))}else l=null,u=o.fieldTransforms;return new eo(new tt(a),l,u)}function oo(e,t){if(lo(e=Object(o.n)(e)))return uo("Unsupported field value:",t,e),ao(e,t);if(e instanceof Js)return function(e,t){if(!to(t.sa))throw t.ha(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ha(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=oo(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(o.n)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ct(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=M.fromDate(e);return{timestampValue:Ln(t.yt,n)}}if(e instanceof M){const n=new M(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ln(t.yt,n)}}if(e instanceof Xs)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Qs)return{bytesValue:jn(t.yt,e._byteString)};if(e instanceof As){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Vn(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha("Unsupported field value: "+xs(e))}(e,t)}function ao(e,t){const n={};return re(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(e,(e,r)=>{const i=oo(r,t.ra(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function lo(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof M||e instanceof Xs||e instanceof Qs||e instanceof As||e instanceof Js)}function uo(e,t,n){if(!lo(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=xs(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function co(e,t,n){if((t=Object(o.n)(t))instanceof Ys)return t._internalPath;if("string"==typeof t)return fo(e,t);throw po("Field path arguments must be of type string or ",e,!1,void 0,n)}const ho=new RegExp("[~\\*/\\[\\]]");function fo(e,t,n){if(t.search(ho)>=0)throw po(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ys(...t.split("."))._internalPath}catch(r){throw po(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function po(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=" in field "+r),o&&(l+=" in document "+i),l+=")"),new E(w.INVALID_ARGUMENT,a+e+l)}function mo(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new As(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vo("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yo extends go{data(){return super.data()}}function vo(e,t){return"string"==typeof t?fo(e,t):t instanceof Ys?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wo{convertValue(e,t="none"){switch(me(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(he(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw y()}}convertObject(e,t){const n={};return ne(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Xs(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=function e(t){const n=t.mapValue.fields.__previous_value__;return de(n)?e(n):n}(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fe(e));default:return null}}convertTimestamp(e){const t=ue(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=F.fromString(e);v(sr(n));const r=new ee(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _o extends go{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ko(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vo("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ko extends _o{data(e={}){return super.data(e)}}class So{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new To(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ko(this._firestore,this._userDataWriter,n.key,n,new To(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new ko(e._firestore,e._userDataWriter,n.doc.key,n.doc,new To(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new ko(e._firestore,e._userDataWriter,t.doc.key,t.doc,new To(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:xo(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xo(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}class Io extends wo{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new As(this.firestore,null,t)}}function Co(e){e=Is(e,Rs);const t=Is(e.firestore,Ws),n=$s(t),r=new Io(t);return bo(e._query),qs(n,e._query).then(n=>new So(t,r,e,n))}function Oo(e,t){const n=Is(e.firestore,Ws),r=function(e,t,...n){if(e=Object(o.n)(e),1===arguments.length&&(t=R.R()),_s("doc","path",t),e instanceof Ns){const r=F.fromString(t,...n);return ks(r),new As(e,null,new z(r))}{if(!(e instanceof As||e instanceof Ps))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(F.fromString(t,...n));return ks(r),new As(e.firestore,e instanceof Ps?e.converter:null,new z(r))}}(e),i=Eo(e.converter,t);return No(n,[so(io(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function No(e,t){return function(e,t){const n=new T;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){const r=ws(e);try{const e=await function(e,t){const n=b(e),r=M.now(),i=t.reduce((e,t)=>e.add(t.key),wn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=hn(),l=wn();return n.Gi.getEntries(e,i).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(i=>{s=i;const o=[];for(const e of t){const t=Gt(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Jt(e.key,t,nt(t.value.mapValue),Bt.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:pn(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new Qe(P)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await gs(r,e.changes),await _i(r.remoteStore)}catch(e){const t=ji(e,"Failed to persist write");n.reject(t)}}(await zs(e),t,n)),n.promise}($s(e),t)}!function(e,t=!0){!function(e){c=e}(r.a),Object(r.c)(new i.a("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Ws(new x(e.getProvider("auth-internal")),new N(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ee(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Object(r.g)(l,"3.8.3",e),Object(r.g)(l,"3.8.3","esm2017")}()}).call(this,n(31))},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=o},function(e,t,n){"use strict";var r=n(74),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return r.isMemo(e)?o:a[e.$$typeof]||i}a[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(p){var i=f(n);i&&i!==p&&e(t,i,r)}var o=c(n);h&&(o=o.concat(h(n)));for(var a=l(t),m=l(n),g=0;g<o.length;++g){var y=o[g];if(!(s[y]||r&&r[y]||m&&m[y]||a&&a[y])){var v=d(n,y);try{u(t,y,v)}catch(e){}}}}return t}},function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}),"Notifications");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"}),"Bookmark");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Comment");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}),"Repeat");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"}),"Today");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=o},function(e,t,n){"use strict";var r=n(5),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n(0)),o=(0,r(n(7)).default)(s.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");t.default=o},,function(e,t,n){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(29),i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function E(){}function T(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var _=T.prototype=new E;_.constructor=T,r(_,w.prototype),_.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r,i={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:s,type:e,key:o,ref:a,props:i,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g,N=[];function A(e,t,n,r){if(N.length){var i=N.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function P(e,t,n){return null==e?0:function e(t,n,r,i){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case s:case o:l=!0}}if(l)return r(i,t,""===n?"."+D(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=n+D(a=t[u],u);l+=e(a,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=g&&t[g]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),u=0;!(a=t.next()).done;)l+=e(a=a.value,c=n+D(a,u++),r,i);else if("object"===a)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?j(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+n)),r.push(e))}function j(e,t,n,r,i){var s="";null!=n&&(s=(""+n).replace(O,"$&/")+"/"),P(e,L,t=A(t,s,r,i)),R(t)}var F={current:null};function U(){var e=F.current;if(null===e)throw Error(y(321));return e}var V={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return j(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;P(e,M,t=A(null,null,t,n)),R(t)},count:function(e){return P(e,(function(){return null}),null)},toArray:function(e){var t=[];return j(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(y(143));return e}},t.Component=w,t.Fragment=a,t.Profiler=u,t.PureComponent=T,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var i=r({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)S.call(t,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:s,type:e.type,key:o,ref:a,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=I,t.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(29),s=n(59);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(o(227));function a(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var l=!1,u=null,c=!1,h=null,d={onError:function(e){l=!0,u=e}};function f(e,t,n,r,i,s,o,c,h){l=!1,u=null,a.apply(d,arguments)}var p=null,m=null,g=null;function y(e,t,n){var r=e.type||"unknown-event";e.currentTarget=g(n),function(e,t,n,r,i,s,a,d,p){if(f.apply(this,arguments),l){if(!l)throw Error(o(198));var m=u;l=!1,u=null,c||(c=!0,h=m)}}(r,t,void 0,e),e.currentTarget=null}var v=null,b={};function w(){if(v)for(var e in b){var t=b[e],n=v.indexOf(e);if(!(-1<n))throw Error(o(96,e));if(!T[n]){if(!t.extractEvents)throw Error(o(97,e));for(var r in T[n]=t,n=t.eventTypes){var i=void 0,s=n[r],a=t,l=r;if(_.hasOwnProperty(l))throw Error(o(99,l));_[l]=s;var u=s.phasedRegistrationNames;if(u){for(i in u)u.hasOwnProperty(i)&&E(u[i],a,l);i=!0}else s.registrationName?(E(s.registrationName,a,l),i=!0):i=!1;if(!i)throw Error(o(98,r,e))}}}}function E(e,t,n){if(k[e])throw Error(o(100,e));k[e]=t,S[e]=t.eventTypes[n].dependencies}var T=[],_={},k={},S={};function x(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!b.hasOwnProperty(t)||b[t]!==r){if(b[t])throw Error(o(102,t));b[t]=r,n=!0}}n&&w()}var I=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),C=null,O=null,N=null;function A(e){if(e=m(e)){if("function"!=typeof C)throw Error(o(280));var t=e.stateNode;t&&(t=p(t),C(e.stateNode,e.type,t))}}function R(e){O?N?N.push(e):N=[e]:O=e}function P(){if(O){var e=O,t=N;if(N=O=null,A(e),t)for(e=0;e<t.length;e++)A(t[e])}}function D(e,t){return e(t)}function M(e,t,n,r,i){return e(t,n,r,i)}function L(){}var j=D,F=!1,U=!1;function V(){null===O&&null===N||(L(),P())}function z(e,t,n){if(U)return e(t,n);U=!0;try{return j(e,t,n)}finally{U=!1,V()}}var B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q=Object.prototype.hasOwnProperty,H={},W={};function K(e,t,n,r,i,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){$[e]=new K(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];$[t]=new K(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){$[e]=new K(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){$[e]=new K(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){$[e]=new K(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){$[e]=new K(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){$[e]=new K(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){$[e]=new K(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){$[e]=new K(e,5,!1,e.toLowerCase(),null,!1)}));var G=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(G,Q);$[t]=new K(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(G,Q);$[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(G,Q);$[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){$[e]=new K(e,1,!1,e.toLowerCase(),null,!1)})),$.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){$[e]=new K(e,1,!1,e.toLowerCase(),null,!0)}));var Y=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function J(e,t,n,r){var i=$.hasOwnProperty(t)?$[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!q.call(W,e)||!q.call(H,e)&&(B.test(e)?W[e]=!0:(H[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}Y.hasOwnProperty("ReactCurrentDispatcher")||(Y.ReactCurrentDispatcher={current:null}),Y.hasOwnProperty("ReactCurrentBatchConfig")||(Y.ReactCurrentBatchConfig={suspense:null});var X=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,se=Z?Symbol.for("react.provider"):60109,oe=Z?Symbol.for("react.context"):60110,ae=Z?Symbol.for("react.concurrent_mode"):60111,le=Z?Symbol.for("react.forward_ref"):60112,ue=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,he=Z?Symbol.for("react.memo"):60115,de=Z?Symbol.for("react.lazy"):60116,fe=Z?Symbol.for("react.block"):60121,pe="function"==typeof Symbol&&Symbol.iterator;function me(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=pe&&e[pe]||e["@@iterator"])?e:null}function ge(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case oe:return"Context.Consumer";case se:return"Context.Provider";case le:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case he:return ge(e.type);case fe:return ge(e.render);case de:if(e=1===e._status?e._result:null)return ge(e)}return null}function ye(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,s=ge(e.type);n=null,r&&(n=ge(r.type)),r=s,s="",i?s=" (at "+i.fileName.replace(X,"")+":"+i.lineNumber+")":n&&(s=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+s}t+=n,e=e.return}while(e);return t}function ve(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function we(e){e._valueTracker||(e._valueTracker=function(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Te(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function _e(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ve(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ke(e,t){null!=(t=t.checked)&&J(e,"checked",t,!1)}function Se(e,t){ke(e,t);var n=ve(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ie(e,t.type,ve(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ie(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Ce(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Oe(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ve(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ve(n)}}function Re(e,t){var n=ve(t.value),r=ve(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Pe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var De="http://www.w3.org/1999/xhtml",Me="http://www.w3.org/2000/svg";function Le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Fe,Ue=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Me||"innerHTML"in e)e.innerHTML=t;else{for((Fe=Fe||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function Ve(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function ze(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Be={animationend:ze("Animation","AnimationEnd"),animationiteration:ze("Animation","AnimationIteration"),animationstart:ze("Animation","AnimationStart"),transitionend:ze("Transition","TransitionEnd")},qe={},He={};function We(e){if(qe[e])return qe[e];if(!Be[e])return e;var t,n=Be[e];for(t in n)if(n.hasOwnProperty(t)&&t in He)return qe[e]=n[t];return e}I&&(He=document.createElement("div").style,"AnimationEvent"in window||(delete Be.animationend.animation,delete Be.animationiteration.animation,delete Be.animationstart.animation),"TransitionEvent"in window||delete Be.transitionend.transition);var Ke=We("animationend"),$e=We("animationiteration"),Ge=We("animationstart"),Qe=We("transitionend"),Ye="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Je=new("function"==typeof WeakMap?WeakMap:Map);function Xe(e){var t=Je.get(e);return void 0===t&&(t=new Map,Je.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(o(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tt(i),e;if(s===r)return tt(i),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(o(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var st=null;function ot(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)y(e,t[r],n[r]);else t&&y(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function at(e){if(null!==e&&(st=rt(st,e)),e=st,st=null,e){if(it(e,ot),st)throw Error(o(95));if(c)throw e=h,c=!1,h=null,e}}function lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ut(e){if(!I)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ht(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function dt(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function ft(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=In(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=lt(e.nativeEvent);r=e.topLevelType;var s=e.nativeEvent,o=e.eventSystemFlags;0===n&&(o|=64);for(var a=null,l=0;l<T.length;l++){var u=T[l];u&&(u=u.extractEvents(r,t,s,i,o))&&(a=rt(a,u))}at(a)}}function pt(e,t,n){if(!n.has(e)){switch(e){case"scroll":Gt(t,"scroll",!0);break;case"focus":case"blur":Gt(t,"focus",!0),Gt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ut(e)&&Gt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Ye.indexOf(e)&&$t(e,t)}n.set(e,null)}}var mt,gt,yt,vt=!1,bt=[],wt=null,Et=null,Tt=null,_t=new Map,kt=new Map,St=[],xt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),It="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ct(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function Ot(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":_t.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kt.delete(t.pointerId)}}function Nt(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e=Ct(t,n,r,i,s),null!==t&&(null!==(t=Cn(t))&&gt(t)),e):(e.eventSystemFlags|=r,e)}function At(e){var t=In(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void s.unstable_runWithPriority(e.priority,(function(){yt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Rt(e){if(null!==e.blockedOn)return!1;var t=Xt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=Cn(t);return null!==n&&gt(n),e.blockedOn=t,!1}return!0}function Pt(e,t,n){Rt(e)&&n.delete(t)}function Dt(){for(vt=!1;0<bt.length;){var e=bt[0];if(null!==e.blockedOn){null!==(e=Cn(e.blockedOn))&&mt(e);break}var t=Xt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:bt.shift()}null!==wt&&Rt(wt)&&(wt=null),null!==Et&&Rt(Et)&&(Et=null),null!==Tt&&Rt(Tt)&&(Tt=null),_t.forEach(Pt),kt.forEach(Pt)}function Mt(e,t){e.blockedOn===t&&(e.blockedOn=null,vt||(vt=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Dt)))}function Lt(e){function t(t){return Mt(t,e)}if(0<bt.length){Mt(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wt&&Mt(wt,e),null!==Et&&Mt(Et,e),null!==Tt&&Mt(Tt,e),_t.forEach(t),kt.forEach(t),n=0;n<St.length;n++)(r=St[n]).blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&null===(n=St[0]).blockedOn;)At(n),null===n.blockedOn&&St.shift()}var jt={},Ft=new Map,Ut=new Map,Vt=["abort","abort",Ke,"animationEnd",$e,"animationIteration",Ge,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Qe,"transitionEnd","waiting","waiting"];function zt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],s="on"+(i[0].toUpperCase()+i.slice(1));s={phasedRegistrationNames:{bubbled:s,captured:s+"Capture"},dependencies:[r],eventPriority:t},Ut.set(r,t),Ft.set(r,s),jt[i]=s}}zt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),zt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),zt(Vt,2);for(var Bt="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),qt=0;qt<Bt.length;qt++)Ut.set(Bt[qt],0);var Ht=s.unstable_UserBlockingPriority,Wt=s.unstable_runWithPriority,Kt=!0;function $t(e,t){Gt(t,e,!1)}function Gt(e,t,n){var r=Ut.get(t);switch(void 0===r?2:r){case 0:r=Qt.bind(null,t,1,e);break;case 1:r=Yt.bind(null,t,1,e);break;default:r=Jt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Qt(e,t,n,r){F||L();var i=Jt,s=F;F=!0;try{M(i,e,t,n,r)}finally{(F=s)||V()}}function Yt(e,t,n,r){Wt(Ht,Jt.bind(null,e,t,n,r))}function Jt(e,t,n,r){if(Kt)if(0<bt.length&&-1<xt.indexOf(e))e=Ct(null,e,t,n,r),bt.push(e);else{var i=Xt(e,t,n,r);if(null===i)Ot(e,r);else if(-1<xt.indexOf(e))e=Ct(i,e,t,n,r),bt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return wt=Nt(wt,e,t,n,r,i),!0;case"dragenter":return Et=Nt(Et,e,t,n,r,i),!0;case"mouseover":return Tt=Nt(Tt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _t.set(s,Nt(_t.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kt.set(s,Nt(kt.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){Ot(e,r),e=dt(e,r,null,t);try{z(ft,e)}finally{ht(e)}}}}function Xt(e,t,n,r){if(null!==(n=In(n=lt(r)))){var i=Ze(n);if(null===i)n=null;else{var s=i.tag;if(13===s){if(null!==(n=et(i)))return n;n=null}else if(3===s){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=dt(e,r,n,t);try{z(ft,e)}finally{ht(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sn(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(o(62,""))}}function on(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var an=De;function ln(e,t){var n=Xe(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=S[t];for(var r=0;r<t.length;r++)pt(t[r],e,n)}function un(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function hn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dn(e,t){var n,r=hn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hn(r)}}function fn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function pn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var mn=null,gn=null;function yn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function vn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var bn="function"==typeof setTimeout?setTimeout:void 0,wn="function"==typeof clearTimeout?clearTimeout:void 0;function En(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Tn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),kn="__reactInternalInstance$"+_n,Sn="__reactEventHandlers$"+_n,xn="__reactContainere$"+_n;function In(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[kn]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Tn(e);null!==e;){if(n=e[kn])return n;e=Tn(e)}return t}n=(e=n).parentNode}return null}function Cn(e){return!(e=e[kn]||e[xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function On(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function Nn(e){return e[Sn]||null}function An(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Rn(e,t){var n=e.stateNode;if(!n)return null;var r=p(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(o(231,t,typeof n));return n}function Pn(e,t,n){(t=Rn(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Dn(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=An(t);for(t=n.length;0<t--;)Pn(n[t],"captured",e);for(t=0;t<n.length;t++)Pn(n[t],"bubbled",e)}}function Mn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=Rn(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Ln(e){e&&e.dispatchConfig.registrationName&&Mn(e._targetInst,null,e)}function jn(e){it(e,Dn)}var Fn=null,Un=null,Vn=null;function zn(){if(Vn)return Vn;var e,t,n=Un,r=n.length,i="value"in Fn?Fn.value:Fn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return Vn=i.slice(e,1<t?1-t:void 0)}function Bn(){return!0}function qn(){return!1}function Hn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Bn:qn,this.isPropagationStopped=qn,this}function Wn(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function Kn(e){if(!(e instanceof this))throw Error(o(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function $n(e){e.eventPool=[],e.getPooled=Wn,e.release=Kn}i(Hn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){this.isPersistent=Bn},isPersistent:qn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=qn,this._dispatchInstances=this._dispatchListeners=null}}),Hn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Hn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var s=new t;return i(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,$n(n),n},$n(Hn);var Gn=Hn.extend({data:null}),Qn=Hn.extend({data:null}),Yn=[9,13,27,32],Jn=I&&"CompositionEvent"in window,Xn=null;I&&"documentMode"in document&&(Xn=document.documentMode);var Zn=I&&"TextEvent"in window&&!Xn,er=I&&(!Jn||Xn&&8<Xn&&11>=Xn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Yn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function sr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var or=!1;var ar={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Jn)e:{switch(e){case"compositionstart":var s=nr.compositionStart;break e;case"compositionend":s=nr.compositionEnd;break e;case"compositionupdate":s=nr.compositionUpdate;break e}s=void 0}else or?ir(e,n)&&(s=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(s=nr.compositionStart);return s?(er&&"ko"!==n.locale&&(or||s!==nr.compositionStart?s===nr.compositionEnd&&or&&(i=zn()):(Un="value"in(Fn=r)?Fn.value:Fn.textContent,or=!0)),s=Gn.getPooled(s,t,n,r),i?s.data=i:null!==(i=sr(n))&&(s.data=i),jn(s),i=s):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return sr(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(or)return"compositionend"===e||!Jn&&ir(e,t)?(e=zn(),Vn=Un=Fn=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Qn.getPooled(nr.beforeInput,t,n,r)).data=e,jn(t)):t=null,null===i?t:null===t?i:[i,t]}},lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!lr[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function hr(e,t,n){return(e=Hn.getPooled(cr.change,e,t,n)).type="change",R(n),jn(e),e}var dr=null,fr=null;function pr(e){at(e)}function mr(e){if(Ee(On(e)))return e}function gr(e,t){if("change"===e)return t}var yr=!1;function vr(){dr&&(dr.detachEvent("onpropertychange",br),fr=dr=null)}function br(e){if("value"===e.propertyName&&mr(fr))if(e=hr(fr,e,lt(e)),F)at(e);else{F=!0;try{D(pr,e)}finally{F=!1,V()}}}function wr(e,t,n){"focus"===e?(vr(),fr=n,(dr=t).attachEvent("onpropertychange",br)):"blur"===e&&vr()}function Er(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return mr(fr)}function Tr(e,t){if("click"===e)return mr(t)}function _r(e,t){if("input"===e||"change"===e)return mr(t)}I&&(yr=ut("input")&&(!document.documentMode||9<document.documentMode));var kr={eventTypes:cr,_isInputEventSupported:yr,extractEvents:function(e,t,n,r){var i=t?On(t):window,s=i.nodeName&&i.nodeName.toLowerCase();if("select"===s||"input"===s&&"file"===i.type)var o=gr;else if(ur(i))if(yr)o=_r;else{o=Er;var a=wr}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(o=Tr);if(o&&(o=o(e,t)))return hr(o,n,r);a&&a(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Ie(i,"number",i.value)}},Sr=Hn.extend({view:null,detail:null}),xr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xr[e])&&!!t[e]}function Cr(){return Ir}var Or=0,Nr=0,Ar=!1,Rr=!1,Pr=Sr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Cr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Or;return Or=e.screenX,Ar?"mousemove"===e.type?e.screenX-t:0:(Ar=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Nr;return Nr=e.screenY,Rr?"mousemove"===e.type?e.screenY-t:0:(Rr=!0,0)}}),Dr=Pr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Mr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Lr={eventTypes:Mr,extractEvents:function(e,t,n,r,i){var s="mouseover"===e||"pointerover"===e,o="mouseout"===e||"pointerout"===e;if(s&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!o&&!s)return null;(s=r.window===r?r:(s=r.ownerDocument)?s.defaultView||s.parentWindow:window,o)?(o=t,null!==(t=(t=n.relatedTarget||n.toElement)?In(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):o=null;if(o===t)return null;if("mouseout"===e||"mouseover"===e)var a=Pr,l=Mr.mouseLeave,u=Mr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(a=Dr,l=Mr.pointerLeave,u=Mr.pointerEnter,c="pointer");if(e=null==o?s:On(o),s=null==t?s:On(t),(l=a.getPooled(l,o,n,r)).type=c+"leave",l.target=e,l.relatedTarget=s,(n=a.getPooled(u,t,n,r)).type=c+"enter",n.target=s,n.relatedTarget=e,c=t,(r=o)&&c)e:{for(u=c,o=0,e=a=r;e;e=An(e))o++;for(e=0,t=u;t;t=An(t))e++;for(;0<o-e;)a=An(a),o--;for(;0<e-o;)u=An(u),e--;for(;o--;){if(a===u||a===u.alternate)break e;a=An(a),u=An(u)}a=null}else a=null;for(u=a,a=[];r&&r!==u&&(null===(o=r.alternate)||o!==u);)a.push(r),r=An(r);for(r=[];c&&c!==u&&(null===(o=c.alternate)||o!==u);)r.push(c),c=An(c);for(c=0;c<a.length;c++)Mn(a[c],"bubbled",l);for(c=r.length;0<c--;)Mn(r[c],"captured",n);return 0==(64&i)?[l]:[l,n]}};var jr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Fr=Object.prototype.hasOwnProperty;function Ur(e,t){if(jr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Fr.call(t,n[r])||!jr(e[n[r]],t[n[r]]))return!1;return!0}var Vr=I&&"documentMode"in document&&11>=document.documentMode,zr={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Br=null,qr=null,Hr=null,Wr=!1;function Kr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Wr||null==Br||Br!==cn(n)?null:("selectionStart"in(n=Br)&&pn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Hr&&Ur(Hr,n)?null:(Hr=n,(e=Hn.getPooled(zr.select,qr,e,t)).type="select",e.target=Br,jn(e),e))}var $r={eventTypes:zr,extractEvents:function(e,t,n,r,i,s){if(!(s=!(i=s||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Xe(i),s=S.onSelect;for(var o=0;o<s.length;o++)if(!i.has(s[o])){i=!1;break e}i=!0}s=!i}if(s)return null;switch(i=t?On(t):window,e){case"focus":(ur(i)||"true"===i.contentEditable)&&(Br=i,qr=t,Hr=null);break;case"blur":Hr=qr=Br=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":return Wr=!1,Kr(n,r);case"selectionchange":if(Vr)break;case"keydown":case"keyup":return Kr(n,r)}return null}},Gr=Hn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Qr=Hn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yr=Sr.extend({relatedTarget:null});function Jr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Sr.extend({key:function(e){if(e.key){var t=Xr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Jr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?Jr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Jr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=Pr.extend({dataTransfer:null}),ni=Sr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Cr}),ri=Hn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Pr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),si={eventTypes:jt,extractEvents:function(e,t,n,r){var i=Ft.get(e);if(!i)return null;switch(e){case"keypress":if(0===Jr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Yr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case Ke:case $e:case Ge:e=Gr;break;case Qe:e=ri;break;case"scroll":e=Sr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Qr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Dr;break;default:e=Hn}return jn(t=e.getPooled(i,t,n,r)),t}};if(v)throw Error(o(101));v=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),p=Nn,m=Cn,g=On,x({SimpleEventPlugin:si,EnterLeaveEventPlugin:Lr,ChangeEventPlugin:kr,SelectEventPlugin:$r,BeforeInputEventPlugin:ar});var oi=[],ai=-1;function li(e){0>ai||(e.current=oi[ai],oi[ai]=null,ai--)}function ui(e,t){ai++,oi[ai]=e.current,e.current=t}var ci={},hi={current:ci},di={current:!1},fi=ci;function pi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function mi(e){return null!=(e=e.childContextTypes)}function gi(){li(di),li(hi)}function yi(e,t,n){if(hi.current!==ci)throw Error(o(168));ui(hi,t),ui(di,n)}function vi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var s in r=r.getChildContext())if(!(s in e))throw Error(o(108,ge(t)||"Unknown",s));return i({},n,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,fi=hi.current,ui(hi,e),ui(di,di.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=vi(e,t,fi),r.__reactInternalMemoizedMergedChildContext=e,li(di),li(hi),ui(hi,e)):li(di),ui(di,n)}var Ei=s.unstable_runWithPriority,Ti=s.unstable_scheduleCallback,_i=s.unstable_cancelCallback,ki=s.unstable_requestPaint,Si=s.unstable_now,xi=s.unstable_getCurrentPriorityLevel,Ii=s.unstable_ImmediatePriority,Ci=s.unstable_UserBlockingPriority,Oi=s.unstable_NormalPriority,Ni=s.unstable_LowPriority,Ai=s.unstable_IdlePriority,Ri={},Pi=s.unstable_shouldYield,Di=void 0!==ki?ki:function(){},Mi=null,Li=null,ji=!1,Fi=Si(),Ui=1e4>Fi?Si:function(){return Si()-Fi};function Vi(){switch(xi()){case Ii:return 99;case Ci:return 98;case Oi:return 97;case Ni:return 96;case Ai:return 95;default:throw Error(o(332))}}function zi(e){switch(e){case 99:return Ii;case 98:return Ci;case 97:return Oi;case 96:return Ni;case 95:return Ai;default:throw Error(o(332))}}function Bi(e,t){return e=zi(e),Ei(e,t)}function qi(e,t,n){return e=zi(e),Ti(e,t,n)}function Hi(e){return null===Mi?(Mi=[e],Li=Ti(Ii,Ki)):Mi.push(e),Ri}function Wi(){if(null!==Li){var e=Li;Li=null,_i(e)}Ki()}function Ki(){if(!ji&&null!==Mi){ji=!0;var e=0;try{var t=Mi;Bi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Mi=null}catch(t){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ti(Ii,Wi),t}finally{ji=!1}}}function $i(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Gi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Qi={current:null},Yi=null,Ji=null,Xi=null;function Zi(){Xi=Ji=Yi=null}function es(e){var t=Qi.current;li(Qi),e.type._context._currentValue=t}function ts(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function ns(e,t){Yi=e,Xi=Ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(No=!0),e.firstContext=null)}function rs(e,t){if(Xi!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Xi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Ji){if(null===Yi)throw Error(o(308));Ji=t,Yi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Ji=Ji.next=t;return e._currentValue}var is=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function as(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function ls(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function us(e,t){var n=e.alternate;null!==n&&os(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function cs(e,t,n,r){var s=e.updateQueue;is=!1;var o=s.baseQueue,a=s.shared.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}o=a,s.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=a))}if(null!==o){l=o.next;var u=s.baseState,c=0,h=null,d=null,f=null;if(null!==l)for(var p=l;;){if((a=p.expirationTime)<r){var m={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===f?(d=f=m,h=u):f=f.next=m,a>c&&(c=a)}else{null!==f&&(f=f.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null}),sl(a,p.suspenseConfig);e:{var g=e,y=p;switch(a=t,m=n,y.tag){case 1:if("function"==typeof(g=y.payload)){u=g.call(m,u,a);break e}u=g;break e;case 3:g.effectTag=-4097&g.effectTag|64;case 0:if(null==(a="function"==typeof(g=y.payload)?g.call(m,u,a):g))break e;u=i({},u,a);break e;case 2:is=!0}}null!==p.callback&&(e.effectTag|=32,null===(a=s.effects)?s.effects=[p]:a.push(p))}if(null===(p=p.next)||p===l){if(null===(a=s.shared.pending))break;p=o.next=a.next,a.next=l,s.baseQueue=o=a,s.shared.pending=null}}null===f?h=u:f.next=d,s.baseState=h,s.baseQueue=f,ol(c),e.expirationTime=c,e.memoizedState=u}}function hs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(o(191,r));r.call(i)}}}var ds=Y.ReactCurrentBatchConfig,fs=(new r.Component).refs;function ps(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var ms={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ka(),i=ds.suspense;(i=as(r=$a(r,e,i),i)).payload=t,null!=n&&(i.callback=n),ls(e,i),Ga(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ka(),i=ds.suspense;(i=as(r=$a(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),ls(e,i),Ga(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ka(),r=ds.suspense;(r=as(n=$a(n,e,r),r)).tag=2,null!=t&&(r.callback=t),ls(e,r),Ga(e,n)}};function gs(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Ur(n,r)||!Ur(i,s))}function ys(e,t,n){var r=!1,i=ci,s=t.contextType;return"object"==typeof s&&null!==s?s=rs(s):(i=mi(t)?fi:hi.current,s=(r=null!=(r=t.contextTypes))?pi(e,i):ci),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ms,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function vs(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ms.enqueueReplaceState(t,t.state,null)}function bs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=fs,ss(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=rs(s):(s=mi(t)?fi:hi.current,i.context=pi(e,s)),cs(e,n,i,r),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(ps(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&ms.enqueueReplaceState(i,i.state,null),cs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var ws=Array.isArray;function Es(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===fs&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Ts(e,t){if("textarea"!==e.type)throw Error(o(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function _s(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=xl(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Ol(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=Es(e,t,n),r.return=e,r):((r=Il(n.type,n.key,n.props,null,e.mode,r)).ref=Es(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Nl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function h(e,t,n,r,s){return null===t||7!==t.tag?((t=Cl(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Ol(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Il(t.type,t.key,t.props,null,e.mode,n)).ref=Es(e,null,t),n.return=e,n;case te:return(t=Nl(t,e.mode,n)).return=e,t}if(ws(t)||me(t))return(t=Cl(t,e.mode,n,null)).return=e,t;Ts(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?h(e,t,n.props.children,r,i):u(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(ws(n)||me(n))return null!==i?null:h(e,t,n,r,null);Ts(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?h(t,e,r.props.children,i,r.key):u(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(ws(r)||me(r))return h(t,e=e.get(n)||null,r,i,null);Ts(t,r)}return null}function m(i,o,a,l){for(var u=null,c=null,h=o,m=o=0,g=null;null!==h&&m<a.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var y=f(i,h,a[m],l);if(null===y){null===h&&(h=g);break}e&&h&&null===y.alternate&&t(i,h),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y,h=g}if(m===a.length)return n(i,h),u;if(null===h){for(;m<a.length;m++)null!==(h=d(i,a[m],l))&&(o=s(h,o,m),null===c?u=h:c.sibling=h,c=h);return u}for(h=r(i,h);m<a.length;m++)null!==(g=p(h,i,m,a[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&h.forEach((function(e){return t(i,e)})),u}function g(i,a,l,u){var c=me(l);if("function"!=typeof c)throw Error(o(150));if(null==(l=c.call(l)))throw Error(o(151));for(var h=c=null,m=a,g=a=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=f(i,m,v.value,u);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),a=s(b,a,g),null===h?c=b:h.sibling=b,h=b,m=y}if(v.done)return n(i,m),c;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=d(i,v.value,u))&&(a=s(v,a,g),null===h?c=v:h.sibling=v,h=v);return c}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=p(m,i,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=s(v,a,g),null===h?c=v:h.sibling=v,h=v);return e&&m.forEach((function(e){return t(i,e)})),c}return function(e,r,s,l){var u="object"==typeof s&&null!==s&&s.type===ne&&null===s.key;u&&(s=s.props.children);var c="object"==typeof s&&null!==s;if(c)switch(s.$$typeof){case ee:e:{for(c=s.key,u=r;null!==u;){if(u.key===c){switch(u.tag){case 7:if(s.type===ne){n(e,u.sibling),(r=i(u,s.props.children)).return=e,e=r;break e}break;default:if(u.elementType===s.type){n(e,u.sibling),(r=i(u,s.props)).ref=Es(e,u,s),r.return=e,e=r;break e}}n(e,u);break}t(e,u),u=u.sibling}s.type===ne?((r=Cl(s.props.children,e.mode,l,s.key)).return=e,e=r):((l=Il(s.type,s.key,s.props,null,e.mode,l)).ref=Es(e,r,s),l.return=e,e=l)}return a(e);case te:e:{for(u=s.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===s.containerInfo&&r.stateNode.implementation===s.implementation){n(e,r.sibling),(r=i(r,s.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Nl(s,e.mode,l)).return=e,e=r}return a(e)}if("string"==typeof s||"number"==typeof s)return s=""+s,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,s)).return=e,e=r):(n(e,r),(r=Ol(s,e.mode,l)).return=e,e=r),a(e);if(ws(s))return m(e,r,s,l);if(me(s))return g(e,r,s,l);if(c&&Ts(e,s),void 0===s&&!u)switch(e.tag){case 1:case 0:throw e=e.type,Error(o(152,e.displayName||e.name||"Component"))}return n(e,r)}}var ks=_s(!0),Ss=_s(!1),xs={},Is={current:xs},Cs={current:xs},Os={current:xs};function Ns(e){if(e===xs)throw Error(o(174));return e}function As(e,t){switch(ui(Os,t),ui(Cs,e),ui(Is,xs),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:je(null,"");break;default:t=je(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}li(Is),ui(Is,t)}function Rs(){li(Is),li(Cs),li(Os)}function Ps(e){Ns(Os.current);var t=Ns(Is.current),n=je(t,e.type);t!==n&&(ui(Cs,e),ui(Is,n))}function Ds(e){Cs.current===e&&(li(Is),li(Cs))}var Ms={current:0};function Ls(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function js(e,t){return{responder:e,props:t}}var Fs=Y.ReactCurrentDispatcher,Us=Y.ReactCurrentBatchConfig,Vs=0,zs=null,Bs=null,qs=null,Hs=!1;function Ws(){throw Error(o(321))}function Ks(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function $s(e,t,n,r,i,s){if(Vs=s,zs=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Fs.current=null===e||null===e.memoizedState?yo:vo,e=n(r,i),t.expirationTime===Vs){s=0;do{if(t.expirationTime=0,!(25>s))throw Error(o(301));s+=1,qs=Bs=null,t.updateQueue=null,Fs.current=bo,e=n(r,i)}while(t.expirationTime===Vs)}if(Fs.current=go,t=null!==Bs&&null!==Bs.next,Vs=0,qs=Bs=zs=null,Hs=!1,t)throw Error(o(300));return e}function Gs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===qs?zs.memoizedState=qs=e:qs=qs.next=e,qs}function Qs(){if(null===Bs){var e=zs.alternate;e=null!==e?e.memoizedState:null}else e=Bs.next;var t=null===qs?zs.memoizedState:qs.next;if(null!==t)qs=t,Bs=e;else{if(null===e)throw Error(o(310));e={memoizedState:(Bs=e).memoizedState,baseState:Bs.baseState,baseQueue:Bs.baseQueue,queue:Bs.queue,next:null},null===qs?zs.memoizedState=qs=e:qs=qs.next=e}return qs}function Ys(e,t){return"function"==typeof t?t(e):t}function Js(e){var t=Qs(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=Bs,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=a=s=null,u=i;do{var c=u.expirationTime;if(c<Vs){var h={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};null===l?(a=l=h,s=r):l=l.next=h,c>zs.expirationTime&&(zs.expirationTime=c,ol(c))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),sl(c,u.suspenseConfig),r=u.eagerReducer===e?u.eagerState:e(r,u.action);u=u.next}while(null!==u&&u!==i);null===l?s=r:l.next=a,jr(r,t.memoizedState)||(No=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Xs(e){var t=Qs(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);jr(s,t.memoizedState)||(No=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Zs(e){var t=Gs();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e}).dispatch=mo.bind(null,zs,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=zs.updateQueue)?(t={lastEffect:null},zs.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function to(){return Qs().memoizedState}function no(e,t,n,r){var i=Gs();zs.effectTag|=e,i.memoizedState=eo(1|t,n,void 0,void 0===r?null:r)}function ro(e,t,n,r){var i=Qs();r=void 0===r?null:r;var s=void 0;if(null!==Bs){var o=Bs.memoizedState;if(s=o.destroy,null!==r&&Ks(r,o.deps))return void eo(t,n,s,r)}zs.effectTag|=e,i.memoizedState=eo(1|t,n,s,r)}function io(e,t){return no(516,4,e,t)}function so(e,t){return ro(516,4,e,t)}function oo(e,t){return ro(4,2,e,t)}function ao(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function lo(e,t,n){return n=null!=n?n.concat([e]):null,ro(4,2,ao.bind(null,t,e),n)}function uo(){}function co(e,t){return Gs().memoizedState=[e,void 0===t?null:t],e}function ho(e,t){var n=Qs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fo(e,t){var n=Qs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function po(e,t,n){var r=Vi();Bi(98>r?98:r,(function(){e(!0)})),Bi(97<r?97:r,(function(){var r=Us.suspense;Us.suspense=void 0===t?null:t;try{e(!1),n()}finally{Us.suspense=r}}))}function mo(e,t,n){var r=Ka(),i=ds.suspense;i={expirationTime:r=$a(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var s=t.pending;if(null===s?i.next=i:(i.next=s.next,s.next=i),t.pending=i,s=e.alternate,e===zs||null!==s&&s===zs)Hs=!0,i.expirationTime=Vs,zs.expirationTime=Vs;else{if(0===e.expirationTime&&(null===s||0===s.expirationTime)&&null!==(s=t.lastRenderedReducer))try{var o=t.lastRenderedState,a=s(o,n);if(i.eagerReducer=s,i.eagerState=a,jr(a,o))return}catch(e){}Ga(e,r)}}var go={readContext:rs,useCallback:Ws,useContext:Ws,useEffect:Ws,useImperativeHandle:Ws,useLayoutEffect:Ws,useMemo:Ws,useReducer:Ws,useRef:Ws,useState:Ws,useDebugValue:Ws,useResponder:Ws,useDeferredValue:Ws,useTransition:Ws},yo={readContext:rs,useCallback:co,useContext:rs,useEffect:io,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,no(4,2,ao.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=Gs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gs();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=mo.bind(null,zs,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Gs().memoizedState=e},useState:Zs,useDebugValue:uo,useResponder:js,useDeferredValue:function(e,t){var n=Zs(e),r=n[0],i=n[1];return io((function(){var n=Us.suspense;Us.suspense=void 0===t?null:t;try{i(e)}finally{Us.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Zs(!1),n=t[0];return t=t[1],[co(po.bind(null,t,e),[t,e]),n]}},vo={readContext:rs,useCallback:ho,useContext:rs,useEffect:so,useImperativeHandle:lo,useLayoutEffect:oo,useMemo:fo,useReducer:Js,useRef:to,useState:function(){return Js(Ys)},useDebugValue:uo,useResponder:js,useDeferredValue:function(e,t){var n=Js(Ys),r=n[0],i=n[1];return so((function(){var n=Us.suspense;Us.suspense=void 0===t?null:t;try{i(e)}finally{Us.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Js(Ys),n=t[0];return t=t[1],[ho(po.bind(null,t,e),[t,e]),n]}},bo={readContext:rs,useCallback:ho,useContext:rs,useEffect:so,useImperativeHandle:lo,useLayoutEffect:oo,useMemo:fo,useReducer:Xs,useRef:to,useState:function(){return Xs(Ys)},useDebugValue:uo,useResponder:js,useDeferredValue:function(e,t){var n=Xs(Ys),r=n[0],i=n[1];return so((function(){var n=Us.suspense;Us.suspense=void 0===t?null:t;try{i(e)}finally{Us.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Xs(Ys),n=t[0];return t=t[1],[ho(po.bind(null,t,e),[t,e]),n]}},wo=null,Eo=null,To=!1;function _o(e,t){var n=kl(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ko(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function So(e){if(To){var t=Eo;if(t){var n=t;if(!ko(e,t)){if(!(t=En(n.nextSibling))||!ko(e,t))return e.effectTag=-1025&e.effectTag|2,To=!1,void(wo=e);_o(wo,n)}wo=e,Eo=En(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,To=!1,wo=e}}function xo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;wo=e}function Io(e){if(e!==wo)return!1;if(!To)return xo(e),To=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!vn(t,e.memoizedProps))for(t=Eo;t;)_o(e,t),t=En(t.nextSibling);if(xo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Eo=En(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Eo=null}}else Eo=wo?En(e.stateNode.nextSibling):null;return!0}function Co(){Eo=wo=null,To=!1}var Oo=Y.ReactCurrentOwner,No=!1;function Ao(e,t,n,r){t.child=null===e?Ss(t,null,n,r):ks(t,e.child,n,r)}function Ro(e,t,n,r,i){n=n.render;var s=t.ref;return ns(t,i),r=$s(e,t,n,r,s,i),null===e||No?(t.effectTag|=1,Ao(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Go(e,t,i))}function Po(e,t,n,r,i,s){if(null===e){var o=n.type;return"function"!=typeof o||Sl(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Il(n.type,null,r,null,t.mode,s)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Do(e,t,o,r,i,s))}return o=e.child,i<s&&(i=o.memoizedProps,(n=null!==(n=n.compare)?n:Ur)(i,r)&&e.ref===t.ref)?Go(e,t,s):(t.effectTag|=1,(e=xl(o,r)).ref=t.ref,e.return=t,t.child=e)}function Do(e,t,n,r,i,s){return null!==e&&Ur(e.memoizedProps,r)&&e.ref===t.ref&&(No=!1,i<s)?(t.expirationTime=e.expirationTime,Go(e,t,s)):Lo(e,t,n,r,s)}function Mo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Lo(e,t,n,r,i){var s=mi(n)?fi:hi.current;return s=pi(t,s),ns(t,i),n=$s(e,t,n,r,s,i),null===e||No?(t.effectTag|=1,Ao(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Go(e,t,i))}function jo(e,t,n,r,i){if(mi(n)){var s=!0;bi(t)}else s=!1;if(ns(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),ys(t,n,r),bs(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=rs(u):u=pi(t,u=mi(n)?fi:hi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&vs(t,o,r,u),is=!1;var d=t.memoizedState;o.state=d,cs(t,r,o,i),l=t.memoizedState,a!==r||d!==l||di.current||is?("function"==typeof c&&(ps(t,n,c,r),l=t.memoizedState),(a=is||gs(t,n,a,r,d,l,u))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.effectTag|=4)):("function"==typeof o.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):("function"==typeof o.componentDidMount&&(t.effectTag|=4),r=!1)}else o=t.stateNode,os(e,t),a=t.memoizedProps,o.props=t.type===t.elementType?a:Gi(t.type,a),l=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=rs(u):u=pi(t,u=mi(n)?fi:hi.current),(h="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&vs(t,o,r,u),is=!1,l=t.memoizedState,o.state=l,cs(t,r,o,i),d=t.memoizedState,a!==r||l!==d||di.current||is?("function"==typeof c&&(ps(t,n,c,r),d=t.memoizedState),(c=is||gs(t,n,a,r,l,d,u))?(h||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,d,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,d,u)),"function"==typeof o.componentDidUpdate&&(t.effectTag|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=u,r=c):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),r=!1);return Fo(e,t,n,r,s,i)}function Fo(e,t,n,r,i,s){Mo(e,t);var o=0!=(64&t.effectTag);if(!r&&!o)return i&&wi(t,n,!1),Go(e,t,s);r=t.stateNode,Oo.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&o?(t.child=ks(t,e.child,null,s),t.child=ks(t,null,a,s)):Ao(e,t,a,s),t.memoizedState=r.state,i&&wi(t,n,!0),t.child}function Uo(e){var t=e.stateNode;t.pendingContext?yi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&yi(0,t.context,!1),As(e,t.containerInfo)}var Vo,zo,Bo,qo={dehydrated:null,retryTime:0};function Ho(e,t,n){var r,i=t.mode,s=t.pendingProps,o=Ms.current,a=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&o)&&(null===e||null!==e.memoizedState)),r?(a=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===s.fallback||!0===s.unstable_avoidThisFallback||(o|=1),ui(Ms,1&o),null===e){if(void 0!==s.fallback&&So(t),a){if(a=s.fallback,(s=Cl(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,s.child=e;null!==e;)e.return=s,e=e.sibling;return(n=Cl(a,i,n,null)).return=t,s.sibling=n,t.memoizedState=qo,t.child=s,n}return i=s.children,t.memoizedState=null,t.child=Ss(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,a){if(s=s.fallback,(n=xl(e,e.pendingProps)).return=t,0==(2&t.mode)&&(a=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=a;null!==a;)a.return=n,a=a.sibling;return(i=xl(i,s)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=qo,t.child=n,i}return n=ks(t,e.child,s.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=s.fallback,(s=Cl(null,i,0,null)).return=t,s.child=e,null!==e&&(e.return=s),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,s.child=e;null!==e;)e.return=s,e=e.sibling;return(n=Cl(a,i,n,null)).return=t,s.sibling=n,n.effectTag|=2,s.childExpirationTime=0,t.memoizedState=qo,t.child=s,n}return t.memoizedState=null,t.child=ks(t,e,s.children,n)}function Wo(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),ts(e.return,t)}function Ko(e,t,n,r,i,s){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailExpiration=0,o.tailMode=i,o.lastEffect=s)}function $o(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ao(e,t,r.children,n),0!=(2&(r=Ms.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Wo(e,n);else if(19===e.tag)Wo(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ui(Ms,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ls(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ko(t,!1,i,n,s,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ls(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ko(t,!0,n,null,s,t.lastEffect);break;case"together":Ko(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Go(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&ol(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=xl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=xl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Qo(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yo(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return mi(t.type)&&gi(),null;case 3:return Rs(),li(di),li(hi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Io(t)||(t.effectTag|=4),null;case 5:Ds(t),n=Ns(Os.current);var s=t.type;if(null!==e&&null!=t.stateNode)zo(e,t,s,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(o(166));return null}if(e=Ns(Is.current),Io(t)){r=t.stateNode,s=t.type;var a=t.memoizedProps;switch(r[kn]=t,r[Sn]=a,s){case"iframe":case"object":case"embed":$t("load",r);break;case"video":case"audio":for(e=0;e<Ye.length;e++)$t(Ye[e],r);break;case"source":$t("error",r);break;case"img":case"image":case"link":$t("error",r),$t("load",r);break;case"form":$t("reset",r),$t("submit",r);break;case"details":$t("toggle",r);break;case"input":_e(r,a),$t("invalid",r),ln(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!a.multiple},$t("invalid",r),ln(n,"onChange");break;case"textarea":Ae(r,a),$t("invalid",r),ln(n,"onChange")}for(var l in sn(s,a),e=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"==typeof u?r.textContent!==u&&(e=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(e=["children",""+u]):k.hasOwnProperty(l)&&null!=u&&ln(n,l)}switch(s){case"input":we(r),xe(r,a,!0);break;case"textarea":we(r),Pe(r);break;case"select":case"option":break;default:"function"==typeof a.onClick&&(r.onclick=un)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(l=9===n.nodeType?n:n.ownerDocument,e===an&&(e=Le(s)),e===an?"script"===s?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(s,{is:r.is}):(e=l.createElement(s),"select"===s&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,s),e[kn]=t,e[Sn]=r,Vo(e,t),t.stateNode=e,l=on(s,r),s){case"iframe":case"object":case"embed":$t("load",e),u=r;break;case"video":case"audio":for(u=0;u<Ye.length;u++)$t(Ye[u],e);u=r;break;case"source":$t("error",e),u=r;break;case"img":case"image":case"link":$t("error",e),$t("load",e),u=r;break;case"form":$t("reset",e),$t("submit",e),u=r;break;case"details":$t("toggle",e),u=r;break;case"input":_e(e,r),u=Te(e,r),$t("invalid",e),ln(n,"onChange");break;case"option":u=Ce(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=i({},r,{value:void 0}),$t("invalid",e),ln(n,"onChange");break;case"textarea":Ae(e,r),u=Ne(e,r),$t("invalid",e),ln(n,"onChange");break;default:u=r}sn(s,u);var c=u;for(a in c)if(c.hasOwnProperty(a)){var h=c[a];"style"===a?nn(e,h):"dangerouslySetInnerHTML"===a?null!=(h=h?h.__html:void 0)&&Ue(e,h):"children"===a?"string"==typeof h?("textarea"!==s||""!==h)&&Ve(e,h):"number"==typeof h&&Ve(e,""+h):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(k.hasOwnProperty(a)?null!=h&&ln(n,a):null!=h&&J(e,a,h,l))}switch(s){case"input":we(e),xe(e,r,!1);break;case"textarea":we(e),Pe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ve(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Oe(e,!!r.multiple,n,!1):null!=r.defaultValue&&Oe(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof u.onClick&&(e.onclick=un)}yn(s,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Bo(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(o(166));n=Ns(Os.current),Ns(Is.current),Io(t)?(n=t.stateNode,r=t.memoizedProps,n[kn]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[kn]=t,t.stateNode=n)}return null;case 13:return li(Ms),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Io(t):(r=null!==(s=e.memoizedState),n||null===s||null!==(s=e.child.sibling)&&(null!==(a=t.firstEffect)?(t.firstEffect=s,s.nextEffect=a):(t.firstEffect=t.lastEffect=s,s.nextEffect=null),s.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Ms.current)?Ia===wa&&(Ia=Ea):(Ia!==wa&&Ia!==Ea||(Ia=Ta),0!==Ra&&null!==ka&&(Pl(ka,xa),Dl(ka,Ra)))),(n||r)&&(t.effectTag|=4),null);case 4:return Rs(),null;case 10:return es(t),null;case 17:return mi(t.type)&&gi(),null;case 19:if(li(Ms),null===(r=t.memoizedState))return null;if(s=0!=(64&t.effectTag),null===(a=r.rendering)){if(s)Qo(r,!1);else if(Ia!==wa||null!==e&&0!=(64&e.effectTag))for(a=t.child;null!==a;){if(null!==(e=Ls(a))){for(t.effectTag|=64,Qo(r,!1),null!==(s=e.updateQueue)&&(t.updateQueue=s,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)a=n,(s=r).effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,null===(e=s.alternate)?(s.childExpirationTime=0,s.expirationTime=a,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=e.childExpirationTime,s.expirationTime=e.expirationTime,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,a=e.dependencies,s.dependencies=null===a?null:{expirationTime:a.expirationTime,firstContext:a.firstContext,responders:a.responders}),r=r.sibling;return ui(Ms,1&Ms.current|2),t.child}a=a.sibling}}else{if(!s)if(null!==(e=Ls(a))){if(t.effectTag|=64,s=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Qo(r,!0),null===r.tail&&"hidden"===r.tailMode&&!a.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Ui()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,s=!0,Qo(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=r.last)?n.sibling=a:t.child=a,r.last=a)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Ui()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ui(),n.sibling=null,t=Ms.current,ui(Ms,s?1&t|2:1&t),n):null}throw Error(o(156,t.tag))}function Jo(e){switch(e.tag){case 1:mi(e.type)&&gi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(Rs(),li(di),li(hi),0!=(64&(t=e.effectTag)))throw Error(o(285));return e.effectTag=-4097&t|64,e;case 5:return Ds(e),null;case 13:return li(Ms),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return li(Ms),null;case 4:return Rs(),null;case 10:return es(e),null;default:return null}}function Xo(e,t){return{value:e,source:t,stack:ye(t)}}Vo=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zo=function(e,t,n,r,s){var o=e.memoizedProps;if(o!==r){var a,l,u=t.stateNode;switch(Ns(Is.current),e=null,n){case"input":o=Te(u,o),r=Te(u,r),e=[];break;case"option":o=Ce(u,o),r=Ce(u,r),e=[];break;case"select":o=i({},o,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":o=Ne(u,o),r=Ne(u,r),e=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(u.onclick=un)}for(a in sn(n,r),n=null,o)if(!r.hasOwnProperty(a)&&o.hasOwnProperty(a)&&null!=o[a])if("style"===a)for(l in u=o[a])u.hasOwnProperty(l)&&(n||(n={}),n[l]="");else"dangerouslySetInnerHTML"!==a&&"children"!==a&&"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(k.hasOwnProperty(a)?e||(e=[]):(e=e||[]).push(a,null));for(a in r){var c=r[a];if(u=null!=o?o[a]:void 0,r.hasOwnProperty(a)&&c!==u&&(null!=c||null!=u))if("style"===a)if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(e||(e=[]),e.push(a,n)),n=c;else"dangerouslySetInnerHTML"===a?(c=c?c.__html:void 0,u=u?u.__html:void 0,null!=c&&u!==c&&(e=e||[]).push(a,c)):"children"===a?u===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(a,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&(k.hasOwnProperty(a)?(null!=c&&ln(s,a),e||u===c||(e=[])):(e=e||[]).push(a,c))}n&&(e=e||[]).push("style",n),s=e,(t.updateQueue=s)&&(t.effectTag|=4)}},Bo=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Zo="function"==typeof WeakSet?WeakSet:Set;function ea(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ye(n)),null!==n&&ge(n.type),t=t.value,null!==e&&1===e.tag&&ge(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function ta(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){vl(e,t)}else t.current=null}function na(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Gi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(o(163))}function ra(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function ia(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function sa(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void ia(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Gi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&hs(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}hs(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&yn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Lt(n)))));case 19:case 17:case 20:case 21:return}throw Error(o(163))}function oa(e,t,n){switch("function"==typeof Tl&&Tl(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Bi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){vl(i,e)}}e=e.next}while(e!==r)}))}break;case 1:ta(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){vl(e,t)}}(t,n);break;case 5:ta(t);break;case 4:ca(e,t,n)}}function aa(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&aa(t)}function la(e){return 5===e.tag||3===e.tag||4===e.tag}function ua(e){e:{for(var t=e.return;null!==t;){if(la(t)){var n=t;break e}t=t.return}throw Error(o(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(o(161))}16&n.effectTag&&(Ve(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||la(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,s=5===i||6===i;if(s)t=s?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=un));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,s=5===i||6===i;if(s)t=s?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function ca(e,t,n){for(var r,i,s=t,a=!1;;){if(!a){a=s.return;e:for(;;){if(null===a)throw Error(o(160));switch(r=a.stateNode,a.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}a=a.return}a=!0}if(5===s.tag||6===s.tag){e:for(var l=e,u=s,c=n,h=u;;)if(oa(l,h,c),null!==h.child&&4!==h.tag)h.child.return=h,h=h.child;else{if(h===u)break e;for(;null===h.sibling;){if(null===h.return||h.return===u)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i?(l=r,u=s.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(s.stateNode)}else if(4===s.tag){if(null!==s.child){r=s.stateNode.containerInfo,i=!0,s.child.return=s,s=s.child;continue}}else if(oa(e,s,n),null!==s.child){s.child.return=s,s=s.child;continue}if(s===t)break;for(;null===s.sibling;){if(null===s.return||s.return===t)return;4===(s=s.return).tag&&(a=!1)}s.sibling.return=s.return,s=s.sibling}}function ha(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void ra(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var s=t.updateQueue;if(t.updateQueue=null,null!==s){for(n[Sn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&ke(n,r),on(e,i),t=on(e,r),i=0;i<s.length;i+=2){var a=s[i],l=s[i+1];"style"===a?nn(n,l):"dangerouslySetInnerHTML"===a?Ue(n,l):"children"===a?Ve(n,l):J(n,a,l,t)}switch(e){case"input":Se(n,r);break;case"textarea":Re(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Oe(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Oe(n,!!r.multiple,r.defaultValue,!0):Oe(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(o(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Lt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Da=Ui()),null!==n)e:for(e=n;;){if(5===e.tag)s=e.stateNode,r?"function"==typeof(s=s.style).setProperty?s.setProperty("display","none","important"):s.display="none":(s=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,s.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(s=e.child.sibling).return=e,e=s;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void da(t);case 19:return void da(t);case 17:return}throw Error(o(163))}function da(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Zo),t.forEach((function(t){var r=wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var fa="function"==typeof WeakMap?WeakMap:Map;function pa(e,t,n){(n=as(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){La||(La=!0,ja=r),ea(e,t)},n}function ma(e,t,n){(n=as(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return ea(e,t),r(i)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Fa?Fa=new Set([this]):Fa.add(this),ea(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var ga,ya=Math.ceil,va=Y.ReactCurrentDispatcher,ba=Y.ReactCurrentOwner,wa=0,Ea=3,Ta=4,_a=0,ka=null,Sa=null,xa=0,Ia=wa,Ca=null,Oa=1073741823,Na=1073741823,Aa=null,Ra=0,Pa=!1,Da=0,Ma=null,La=!1,ja=null,Fa=null,Ua=!1,Va=null,za=90,Ba=null,qa=0,Ha=null,Wa=0;function Ka(){return 0!=(48&_a)?1073741821-(Ui()/10|0):0!==Wa?Wa:Wa=1073741821-(Ui()/10|0)}function $a(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=Vi();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&_a))return xa;if(null!==n)e=$i(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=$i(e,150,100);break;case 97:case 96:e=$i(e,5e3,250);break;case 95:e=2;break;default:throw Error(o(326))}return null!==ka&&e===xa&&--e,e}function Ga(e,t){if(50<qa)throw qa=0,Ha=null,Error(o(185));if(null!==(e=Qa(e,t))){var n=Vi();1073741823===t?0!=(8&_a)&&0==(48&_a)?Za(e):(Ja(e),0===_a&&Wi()):Ja(e),0==(4&_a)||98!==n&&99!==n||(null===Ba?Ba=new Map([[e,t]]):(void 0===(n=Ba.get(e))||n>t)&&Ba.set(e,t))}}function Qa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(ka===i&&(ol(t),Ia===Ta&&Pl(i,xa)),Dl(i,t)),i}function Ya(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Rl(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Ja(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Hi(Za.bind(null,e));else{var t=Ya(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ka();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Ri&&_i(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Hi(Za.bind(null,e)):qi(r,Xa.bind(null,e),{timeout:10*(1073741821-t)-Ui()}),e.callbackNode=t}}}function Xa(e,t){if(Wa=0,t)return Ml(e,t=Ka()),Ja(e),null;var n=Ya(e);if(0!==n){if(t=e.callbackNode,0!=(48&_a))throw Error(o(327));if(ml(),e===ka&&n===xa||nl(e,n),null!==Sa){var r=_a;_a|=16;for(var i=il();;)try{ll();break}catch(t){rl(e,t)}if(Zi(),_a=r,va.current=i,1===Ia)throw t=Ca,nl(e,n),Pl(e,n),Ja(e),t;if(null===Sa)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Ia,ka=null,r){case wa:case 1:throw Error(o(345));case 2:Ml(e,2<n?2:n);break;case Ea:if(Pl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),1073741823===Oa&&10<(i=Da+500-Ui())){if(Pa){var s=e.lastPingedTime;if(0===s||s>=n){e.lastPingedTime=n,nl(e,n);break}}if(0!==(s=Ya(e))&&s!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=bn(dl.bind(null,e),i);break}dl(e);break;case Ta:if(Pl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),Pa&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nl(e,n);break}if(0!==(i=Ya(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Na?r=10*(1073741821-Na)-Ui():1073741823===Oa?r=0:(r=10*(1073741821-Oa)-5e3,0>(r=(i=Ui())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ya(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=bn(dl.bind(null,e),r);break}dl(e);break;case 5:if(1073741823!==Oa&&null!==Aa){s=Oa;var a=Aa;if(0>=(r=0|a.busyMinDurationMs)?r=0:(i=0|a.busyDelayMs,r=(s=Ui()-(10*(1073741821-s)-(0|a.timeoutMs||5e3)))<=i?0:i+r-s),10<r){Pl(e,n),e.timeoutHandle=bn(dl.bind(null,e),r);break}}dl(e);break;default:throw Error(o(329))}if(Ja(e),e.callbackNode===t)return Xa.bind(null,e)}}return null}function Za(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&_a))throw Error(o(327));if(ml(),e===ka&&t===xa||nl(e,t),null!==Sa){var n=_a;_a|=16;for(var r=il();;)try{al();break}catch(t){rl(e,t)}if(Zi(),_a=n,va.current=r,1===Ia)throw n=Ca,nl(e,t),Pl(e,t),Ja(e),n;if(null!==Sa)throw Error(o(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,ka=null,dl(e),Ja(e)}return null}function el(e,t){var n=_a;_a|=1;try{return e(t)}finally{0===(_a=n)&&Wi()}}function tl(e,t){var n=_a;_a&=-2,_a|=8;try{return e(t)}finally{0===(_a=n)&&Wi()}}function nl(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,wn(n)),null!==Sa)for(n=Sa.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&gi();break;case 3:Rs(),li(di),li(hi);break;case 5:Ds(r);break;case 4:Rs();break;case 13:case 19:li(Ms);break;case 10:es(r)}n=n.return}ka=e,Sa=xl(e.current,null),xa=t,Ia=wa,Ca=null,Na=Oa=1073741823,Aa=null,Ra=0,Pa=!1}function rl(e,t){for(;;){try{if(Zi(),Fs.current=go,Hs)for(var n=zs.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Vs=0,qs=Bs=zs=null,Hs=!1,null===Sa||null===Sa.return)return Ia=1,Ca=t,Sa=null;e:{var i=e,s=Sa.return,o=Sa,a=t;if(t=xa,o.effectTag|=2048,o.firstEffect=o.lastEffect=null,null!==a&&"object"==typeof a&&"function"==typeof a.then){var l=a;if(0==(2&o.mode)){var u=o.alternate;u?(o.updateQueue=u.updateQueue,o.memoizedState=u.memoizedState,o.expirationTime=u.expirationTime):(o.updateQueue=null,o.memoizedState=null)}var c=0!=(1&Ms.current),h=s;do{var d;if(d=13===h.tag){var f=h.memoizedState;if(null!==f)d=null!==f.dehydrated;else{var p=h.memoizedProps;d=void 0!==p.fallback&&(!0!==p.unstable_avoidThisFallback||!c)}}if(d){var m=h.updateQueue;if(null===m){var g=new Set;g.add(l),h.updateQueue=g}else m.add(l);if(0==(2&h.mode)){if(h.effectTag|=64,o.effectTag&=-2981,1===o.tag)if(null===o.alternate)o.tag=17;else{var y=as(1073741823,null);y.tag=2,ls(o,y)}o.expirationTime=1073741823;break e}a=void 0,o=t;var v=i.pingCache;if(null===v?(v=i.pingCache=new fa,a=new Set,v.set(l,a)):void 0===(a=v.get(l))&&(a=new Set,v.set(l,a)),!a.has(o)){a.add(o);var b=bl.bind(null,i,l,o);l.then(b,b)}h.effectTag|=4096,h.expirationTime=t;break e}h=h.return}while(null!==h);a=Error((ge(o.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ye(o))}5!==Ia&&(Ia=2),a=Xo(a,o),h=s;do{switch(h.tag){case 3:l=a,h.effectTag|=4096,h.expirationTime=t,us(h,pa(h,l,t));break e;case 1:l=a;var w=h.type,E=h.stateNode;if(0==(64&h.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===Fa||!Fa.has(E)))){h.effectTag|=4096,h.expirationTime=t,us(h,ma(h,l,t));break e}}h=h.return}while(null!==h)}Sa=cl(Sa)}catch(e){t=e;continue}break}}function il(){var e=va.current;return va.current=go,null===e?go:e}function sl(e,t){e<Oa&&2<e&&(Oa=e),null!==t&&e<Na&&2<e&&(Na=e,Aa=t)}function ol(e){e>Ra&&(Ra=e)}function al(){for(;null!==Sa;)Sa=ul(Sa)}function ll(){for(;null!==Sa&&!Pi();)Sa=ul(Sa)}function ul(e){var t=ga(e.alternate,e,xa);return e.memoizedProps=e.pendingProps,null===t&&(t=cl(e)),ba.current=null,t}function cl(e){Sa=e;do{var t=Sa.alternate;if(e=Sa.return,0==(2048&Sa.effectTag)){if(t=Yo(t,Sa,xa),1===xa||1!==Sa.childExpirationTime){for(var n=0,r=Sa.child;null!==r;){var i=r.expirationTime,s=r.childExpirationTime;i>n&&(n=i),s>n&&(n=s),r=r.sibling}Sa.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Sa.firstEffect),null!==Sa.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Sa.firstEffect),e.lastEffect=Sa.lastEffect),1<Sa.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Sa:e.firstEffect=Sa,e.lastEffect=Sa))}else{if(null!==(t=Jo(Sa)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Sa.sibling))return t;Sa=e}while(null!==Sa);return Ia===wa&&(Ia=5),null}function hl(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function dl(e){var t=Vi();return Bi(99,fl.bind(null,e,t)),null}function fl(e,t){do{ml()}while(null!==Va);if(0!=(48&_a))throw Error(o(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=hl(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===ka&&(Sa=ka=null,xa=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var s=_a;_a|=32,ba.current=null,mn=Kt;var a=fn();if(pn(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{var u=(l=(l=a.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(u&&0!==u.rangeCount){l=u.anchorNode;var c=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{l.nodeType,h.nodeType}catch(e){l=null;break e}var d=0,f=-1,p=-1,m=0,g=0,y=a,v=null;t:for(;;){for(var b;y!==l||0!==c&&3!==y.nodeType||(f=d+c),y!==h||0!==u&&3!==y.nodeType||(p=d+u),3===y.nodeType&&(d+=y.nodeValue.length),null!==(b=y.firstChild);)v=y,y=b;for(;;){if(y===a)break t;if(v===l&&++m===c&&(f=d),v===h&&++g===u&&(p=d),null!==(b=y.nextSibling))break;v=(y=v).parentNode}y=b}l=-1===f||-1===p?null:{start:f,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;gn={activeElementDetached:null,focusedElem:a,selectionRange:l},Kt=!1,Ma=i;do{try{pl()}catch(e){if(null===Ma)throw Error(o(330));vl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=i;do{try{for(a=e,l=t;null!==Ma;){var w=Ma.effectTag;if(16&w&&Ve(Ma.stateNode,""),128&w){var E=Ma.alternate;if(null!==E){var T=E.ref;null!==T&&("function"==typeof T?T(null):T.current=null)}}switch(1038&w){case 2:ua(Ma),Ma.effectTag&=-3;break;case 6:ua(Ma),Ma.effectTag&=-3,ha(Ma.alternate,Ma);break;case 1024:Ma.effectTag&=-1025;break;case 1028:Ma.effectTag&=-1025,ha(Ma.alternate,Ma);break;case 4:ha(Ma.alternate,Ma);break;case 8:ca(a,c=Ma,l),aa(c)}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(o(330));vl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);if(T=gn,E=fn(),w=T.focusedElem,l=T.selectionRange,E!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==l&&pn(w)&&(E=l.start,void 0===(T=l.end)&&(T=E),"selectionStart"in w?(w.selectionStart=E,w.selectionEnd=Math.min(T,w.value.length)):(T=(E=w.ownerDocument||document)&&E.defaultView||window).getSelection&&(T=T.getSelection(),c=w.textContent.length,a=Math.min(l.start,c),l=void 0===l.end?a:Math.min(l.end,c),!T.extend&&a>l&&(c=l,l=a,a=c),c=dn(w,a),h=dn(w,l),c&&h&&(1!==T.rangeCount||T.anchorNode!==c.node||T.anchorOffset!==c.offset||T.focusNode!==h.node||T.focusOffset!==h.offset)&&((E=E.createRange()).setStart(c.node,c.offset),T.removeAllRanges(),a>l?(T.addRange(E),T.extend(h.node,h.offset)):(E.setEnd(h.node,h.offset),T.addRange(E))))),E=[];for(T=w;T=T.parentNode;)1===T.nodeType&&E.push({element:T,left:T.scrollLeft,top:T.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<E.length;w++)(T=E[w]).element.scrollLeft=T.left,T.element.scrollTop=T.top}Kt=!!mn,gn=mn=null,e.current=n,Ma=i;do{try{for(w=e;null!==Ma;){var _=Ma.effectTag;if(36&_&&sa(w,Ma.alternate,Ma),128&_){E=void 0;var k=Ma.ref;if(null!==k){var S=Ma.stateNode;switch(Ma.tag){case 5:E=S;break;default:E=S}"function"==typeof k?k(E):k.current=E}}Ma=Ma.nextEffect}}catch(e){if(null===Ma)throw Error(o(330));vl(Ma,e),Ma=Ma.nextEffect}}while(null!==Ma);Ma=null,Di(),_a=s}else e.current=n;if(Ua)Ua=!1,Va=e,za=t;else for(Ma=i;null!==Ma;)t=Ma.nextEffect,Ma.nextEffect=null,Ma=t;if(0===(t=e.firstPendingTime)&&(Fa=null),1073741823===t?e===Ha?qa++:(qa=0,Ha=e):qa=0,"function"==typeof El&&El(n.stateNode,r),Ja(e),La)throw La=!1,e=ja,ja=null,e;return 0!=(8&_a)||Wi(),null}function pl(){for(;null!==Ma;){var e=Ma.effectTag;0!=(256&e)&&na(Ma.alternate,Ma),0==(512&e)||Ua||(Ua=!0,qi(97,(function(){return ml(),null}))),Ma=Ma.nextEffect}}function ml(){if(90!==za){var e=97<za?97:za;return za=90,Bi(e,gl)}}function gl(){if(null===Va)return!1;var e=Va;if(Va=null,0!=(48&_a))throw Error(o(331));var t=_a;for(_a|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:ra(5,n),ia(5,n)}}catch(t){if(null===e)throw Error(o(330));vl(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return _a=t,Wi(),!0}function yl(e,t,n){ls(e,t=pa(e,t=Xo(n,t),1073741823)),null!==(e=Qa(e,1073741823))&&Ja(e)}function vl(e,t){if(3===e.tag)yl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){yl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Fa||!Fa.has(r))){ls(n,e=ma(n,e=Xo(t,e),1073741823)),null!==(n=Qa(n,1073741823))&&Ja(n);break}}n=n.return}}function bl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),ka===e&&xa===n?Ia===Ta||Ia===Ea&&1073741823===Oa&&Ui()-Da<500?nl(e,xa):Pa=!0:Rl(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Ja(e)))}function wl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=$a(t=Ka(),e,null)),null!==(e=Qa(e,t))&&Ja(e)}ga=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||di.current)No=!0;else{if(r<n){switch(No=!1,t.tag){case 3:Uo(t),Co();break;case 5:if(Ps(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:mi(t.type)&&bi(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,ui(Qi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Ho(e,t,n):(ui(Ms,1&Ms.current),null!==(t=Go(e,t,n))?t.sibling:null);ui(Ms,1&Ms.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return $o(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),ui(Ms,Ms.current),!r)return null}return Go(e,t,n)}No=!1}}else No=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=pi(t,hi.current),ns(t,n),i=$s(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,mi(r)){var s=!0;bi(t)}else s=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,ss(t);var a=r.getDerivedStateFromProps;"function"==typeof a&&ps(t,r,a,e),i.updater=ms,t.stateNode=i,i._reactInternalFiber=t,bs(t,r,e,n),t=Fo(null,t,r,!0,s,n)}else t.tag=0,Ao(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,s=t.tag=function(e){if("function"==typeof e)return Sl(e)?1:0;if(null!=e){if((e=e.$$typeof)===le)return 11;if(e===he)return 14}return 2}(i),e=Gi(i,e),s){case 0:t=Lo(null,t,i,e,n);break e;case 1:t=jo(null,t,i,e,n);break e;case 11:t=Ro(null,t,i,e,n);break e;case 14:t=Po(null,t,i,Gi(i.type,e),r,n);break e}throw Error(o(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Lo(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 1:return r=t.type,i=t.pendingProps,jo(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 3:if(Uo(t),r=t.updateQueue,null===e||null===r)throw Error(o(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,os(e,t),cs(t,r,null,n),(r=t.memoizedState.element)===i)Co(),t=Go(e,t,n);else{if((i=t.stateNode.hydrate)&&(Eo=En(t.stateNode.containerInfo.firstChild),wo=t,i=To=!0),i)for(n=Ss(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Ao(e,t,r,n),Co();t=t.child}return t;case 5:return Ps(t),null===e&&So(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,vn(r,i)?a=null:null!==s&&vn(r,s)&&(t.effectTag|=16),Mo(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ao(e,t,a,n),t=t.child),t;case 6:return null===e&&So(t),null;case 13:return Ho(e,t,n);case 4:return As(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ks(t,null,r,n):Ao(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ro(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 7:return Ao(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ao(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value;var l=t.type._context;if(ui(Qi,l._currentValue),l._currentValue=s,null!==a)if(l=a.value,0===(s=jr(l,s)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,s):1073741823))){if(a.children===i.children&&!di.current){t=Go(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var u=l.dependencies;if(null!==u){a=l.child;for(var c=u.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&s)){1===l.tag&&((c=as(n,null)).tag=2,ls(l,c)),l.expirationTime<n&&(l.expirationTime=n),null!==(c=l.alternate)&&c.expirationTime<n&&(c.expirationTime=n),ts(l.return,n),u.expirationTime<n&&(u.expirationTime=n);break}c=c.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}Ao(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(s=t.pendingProps).children,ns(t,n),r=r(i=rs(i,s.unstable_observedBits)),t.effectTag|=1,Ao(e,t,r,n),t.child;case 14:return s=Gi(i=t.type,t.pendingProps),Po(e,t,i,s=Gi(i.type,s),r,n);case 15:return Do(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,mi(r)?(e=!0,bi(t)):e=!1,ns(t,n),ys(t,r,i),bs(t,r,i,n),Fo(null,t,r,!0,e,n);case 19:return $o(e,t,n)}throw Error(o(156,t.tag))};var El=null,Tl=null;function _l(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function kl(e,t,n,r){return new _l(e,t,n,r)}function Sl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function xl(e,t){var n=e.alternate;return null===n?((n=kl(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Il(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Sl(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case ne:return Cl(n.children,i,s,t);case ae:a=8,i|=7;break;case re:a=8,i|=1;break;case ie:return(e=kl(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=s,e;case ue:return(e=kl(13,n,t,i)).type=ue,e.elementType=ue,e.expirationTime=s,e;case ce:return(e=kl(19,n,t,i)).elementType=ce,e.expirationTime=s,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case se:a=10;break e;case oe:a=9;break e;case le:a=11;break e;case he:a=14;break e;case de:a=16,r=null;break e;case fe:a=22;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=kl(a,n,t,i)).elementType=e,t.type=r,t.expirationTime=s,t}function Cl(e,t,n,r){return(e=kl(7,e,r,t)).expirationTime=n,e}function Ol(e,t,n){return(e=kl(6,e,null,t)).expirationTime=n,e}function Nl(e,t,n){return(t=kl(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Al(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Rl(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function Pl(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Dl(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Ml(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Ll(e,t,n,r){var i=t.current,s=Ka(),a=ds.suspense;s=$a(s,i,a);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(o(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(mi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(o(171))}if(1===n.tag){var u=n.type;if(mi(u)){n=vi(n,u,l);break e}}n=l}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=as(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),ls(i,t),Ga(i,s),s}function jl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Fl(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Ul(e,t){Fl(e,t),(e=e.alternate)&&Fl(e,t)}function Vl(e,t,n){var r=new Al(e,t,n=null!=n&&!0===n.hydrate),i=kl(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,ss(i),e[xn]=r.current,n&&0!==t&&function(e,t){var n=Xe(t);xt.forEach((function(e){pt(e,t,n)})),It.forEach((function(e){pt(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function zl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Bl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=jl(o);a.call(e)}}Ll(t,o,e,i)}else{if(s=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Vl(e,0,t?{hydrate:!0}:void 0)}(n,r),o=s._internalRoot,"function"==typeof i){var l=i;i=function(){var e=jl(o);l.call(e)}}tl((function(){Ll(t,o,e,i)}))}return jl(o)}function ql(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Hl(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!zl(t))throw Error(o(200));return ql(e,t,null,n)}Vl.prototype.render=function(e){Ll(e,this._internalRoot,null,null)},Vl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Ll(null,e,null,(function(){t[xn]=null}))},mt=function(e){if(13===e.tag){var t=$i(Ka(),150,100);Ga(e,t),Ul(e,t)}},gt=function(e){13===e.tag&&(Ga(e,3),Ul(e,3))},yt=function(e){if(13===e.tag){var t=Ka();Ga(e,t=$a(t,e,null)),Ul(e,t)}},C=function(e,t,n){switch(t){case"input":if(Se(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nn(r);if(!i)throw Error(o(90));Ee(r),Se(r,i)}}}break;case"textarea":Re(e,n);break;case"select":null!=(t=n.value)&&Oe(e,!!n.multiple,t,!1)}},D=el,M=function(e,t,n,r,i){var s=_a;_a|=4;try{return Bi(98,e.bind(null,t,n,r,i))}finally{0===(_a=s)&&Wi()}},L=function(){0==(49&_a)&&(function(){if(null!==Ba){var e=Ba;Ba=null,e.forEach((function(e,t){Ml(t,e),Ja(t)})),Wi()}}(),ml())},j=function(e,t){var n=_a;_a|=2;try{return e(t)}finally{0===(_a=n)&&Wi()}};var Wl,Kl,$l={Events:[Cn,On,Nn,x,_,jn,function(e){it(e,Ln)},R,P,Jt,at,ml,{current:!1}]};Kl=(Wl={findFiberByHostInstance:In,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);El=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},Tl=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},Wl,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Y.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Kl?Kl(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$l,t.createPortal=Hl,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(o(188));throw Error(o(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&_a))throw Error(o(187));var n=_a;_a|=1;try{return Bi(99,e.bind(null,t))}finally{_a=n,Wi()}},t.hydrate=function(e,t,n){if(!zl(t))throw Error(o(200));return Bl(null,e,t,!0,n)},t.render=function(e,t,n){if(!zl(t))throw Error(o(200));return Bl(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!zl(e))throw Error(o(40));return!!e._reactRootContainer&&(tl((function(){Bl(null,null,e,!1,(function(){e._reactRootContainer=null,e[xn]=null}))})),!0)},t.unstable_batchedUpdates=el,t.unstable_createPortal=function(e,t){return Hl(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(o(200));if(null==e||void 0===e._reactInternalFiber)throw Error(o(38));return Bl(e,t,n,!1,r)},t.version="16.13.1"},function(e,t,n){"use strict";e.exports=n(60)},function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,s,o,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},h=Date.now();t.unstable_now=function(){return Date.now()-h},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(c,0))},i=function(e,t){u=setTimeout(e,t)},s=function(){clearTimeout(u)},o=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,f=window.Date,p=window.setTimeout,m=window.clearTimeout;if("undefined"!=typeof console){var g=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof d&&"function"==typeof d.now)t.unstable_now=function(){return d.now()};else{var y=f.now();t.unstable_now=function(){return f.now()-y}}var v=!1,b=null,w=-1,E=5,T=0;o=function(){return t.unstable_now()>=T},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):E=0<e?Math.floor(1e3/e):5};var _=new MessageChannel,k=_.port2;_.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();T=e+E;try{b(!0,e)?k.postMessage(null):(v=!1,b=null)}catch(e){throw k.postMessage(null),e}}else v=!1},r=function(e){b=e,v||(v=!0,k.postMessage(null))},i=function(e,n){w=p((function(){e(t.unstable_now())}),n)},s=function(){m(w),w=-1}}function S(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<C(i,t)))break e;e[r]=t,e[n]=i,n=r}}function x(e){return void 0===(e=e[0])?null:e}function I(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var s=2*(r+1)-1,o=e[s],a=s+1,l=e[a];if(void 0!==o&&0>C(o,n))void 0!==l&&0>C(l,o)?(e[r]=l,e[a]=n,r=a):(e[r]=o,e[s]=n,r=s);else{if(!(void 0!==l&&0>C(l,n)))break e;e[r]=l,e[a]=n,r=a}}}return t}return null}function C(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var O=[],N=[],A=1,R=null,P=3,D=!1,M=!1,L=!1;function j(e){for(var t=x(N);null!==t;){if(null===t.callback)I(N);else{if(!(t.startTime<=e))break;I(N),t.sortIndex=t.expirationTime,S(O,t)}t=x(N)}}function F(e){if(L=!1,j(e),!M)if(null!==x(O))M=!0,r(U);else{var t=x(N);null!==t&&i(F,t.startTime-e)}}function U(e,n){M=!1,L&&(L=!1,s()),D=!0;var r=P;try{for(j(n),R=x(O);null!==R&&(!(R.expirationTime>n)||e&&!o());){var a=R.callback;if(null!==a){R.callback=null,P=R.priorityLevel;var l=a(R.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?R.callback=l:R===x(O)&&I(O),j(n)}else I(O);R=x(O)}if(null!==R)var u=!0;else{var c=x(N);null!==c&&i(F,c.startTime-n),u=!1}return u}finally{R=null,P=r,D=!1}}function V(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var z=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){M||D||(M=!0,r(U))},t.unstable_getCurrentPriorityLevel=function(){return P},t.unstable_getFirstCallbackNode=function(){return x(O)},t.unstable_next=function(e){switch(P){case 1:case 2:case 3:var t=3;break;default:t=P}var n=P;P=t;try{return e()}finally{P=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=z,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=P;P=e;try{return t()}finally{P=n}},t.unstable_scheduleCallback=function(e,n,o){var a=t.unstable_now();if("object"==typeof o&&null!==o){var l=o.delay;l="number"==typeof l&&0<l?a+l:a,o="number"==typeof o.timeout?o.timeout:V(e)}else o=V(e),l=a;return e={id:A++,callback:n,priorityLevel:e,startTime:l,expirationTime:o=l+o,sortIndex:-1},l>a?(e.sortIndex=l,S(N,e),null===x(O)&&e===x(N)&&(L?s():L=!0,i(F,l-a))):(e.sortIndex=o,S(O,e),M||D||(M=!0,r(U))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();j(e);var n=x(O);return n!==R&&null!==R&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<R.expirationTime||o()},t.unstable_wrapCallback=function(e){var t=P;return function(){var n=P;P=t;try{return e.apply(this,arguments)}finally{P=n}}}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}}},function(e,t,n){var r=n(64);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=n(14),i=n(67);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,"\r\n\r\nbody{\r\n    margin: 0;\r\n\r\n    font-family: -apple-system,system-ui,BlinkMacSystemFont,\r\n    Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,\r\n    Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;;\r\n\r\n    --webkit-font-smoothing:antialiased;\r\n    background-color: #f3f2ef;\r\n    \r\n\r\n\r\n}\r\n\r\n\r\n\r\n.body__container{\r\n    /* max-width: 100vw; */\r\n    \r\n    padding-left: 20%;\r\n    display: flex;\r\n}\r\n\r\n.header__container{\r\n    z-index: 999;\r\n    background-color: white;\r\n    position: sticky;\r\n    top: 0;\r\n    \r\n}\r\n\r\n.sidebar__container{\r\n    width: 13%;\r\n}\r\n\r\n\r\n",""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,".login__screen{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #f3f2ef;\r\n}\r\n\r\n.form__container{\r\n    width: 400px;\r\n    /* background-color: white; */\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    border: 1px solid #ccc;\r\n    box-shadow: 5px 5px 10px #f3d2e0 ;\r\n    text-align: center;\r\n}\r\n\r\n.form__container  svg {\r\n    width: 50%;\r\n    height: 70px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nform > input {\r\n    display: block;\r\n    height: 40px;\r\n    width: 100%;\r\n    padding: 0 10px;\r\n    border: 2px solid #000;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.buton_container button{\r\n    border-radius: 0px;\r\n    background-color: #0077b5;\r\n    border: none;\r\n    color: #fff;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.sign_in span {\r\n    color: #0077b5;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n",""]),t.default=i},function(e,t,n){var r=n(14),i=n(70);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,'.header{\r\n    display: flex;\r\n    background-color: #fff;\r\n    /* background-color: red; */\r\n    margin: 0 15%;\r\n    padding: 10px 10px;\r\n    justify-content: space-around;\r\n    height: 35px;\r\n    top:0;\r\n    position: sticky;\r\n    margin-bottom: 20px;\r\n    z-index: 99;\r\n}\r\n\r\n.header__left{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.header__logo > img{\r\n    margin-right: 15px;\r\n} \r\n\r\n.header__search{\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: #eef3f8;\r\n    padding: 3px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.header__search > input{\r\n    background-color: transparent;\r\n    border: 0px;\r\n    outline: 0px;\r\n    min-width: 220px;\r\n}\r\n\r\n.header__search > svg {\r\n    font-size: 20px;\r\n    color : #333;\r\n}\r\n\r\n.header__right{\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n    align-items: center;\r\n}\r\n\r\n\r\n.header__options{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0 10px;\r\n    font-size: 15px;\r\n    color: #565656;\r\n    cursor: pointer;\r\n    /* min-width: 75px; */\r\n    /* justify-content: space-around; */\r\n}\r\n\r\n.header__options:first-child::after{\r\n    content: "";\r\n    min-width: 70px;\r\n    border: 2px solid black;\r\n    border-bottom: 1px;\r\n} \r\n\r\n.header__options:first-child{\r\n    color: #000;\r\n}\r\n\r\n\r\n.header__options > .MuiAvatar-circular{\r\n    height: 30px;\r\n    width: 30px;\r\n    object-fit: contain;\r\n}',""]),t.default=i},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t,n){"use strict";var r=n(73);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(75)},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function T(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case h:case d:case o:case l:case a:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case y:case g:case u:return e;default:return t}}case s:return t}}}function _(e){return T(e)===d}t.AsyncMode=h,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=u,t.Element=i,t.ForwardRef=f,t.Fragment=o,t.Lazy=y,t.Memo=g,t.Portal=s,t.Profiler=l,t.StrictMode=a,t.Suspense=p,t.isAsyncMode=function(e){return _(e)||T(e)===h},t.isConcurrentMode=_,t.isContextConsumer=function(e){return T(e)===c},t.isContextProvider=function(e){return T(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return T(e)===f},t.isFragment=function(e){return T(e)===o},t.isLazy=function(e){return T(e)===y},t.isMemo=function(e){return T(e)===g},t.isPortal=function(e){return T(e)===s},t.isProfiler=function(e){return T(e)===l},t.isStrictMode=function(e){return T(e)===a},t.isSuspense=function(e){return T(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===l||e===a||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===g||e.$$typeof===u||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===w||e.$$typeof===E||e.$$typeof===v)},t.typeOf=T},function(e,t,n){var r=n(14),i=n(77);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,"\r\n.sidebar{\r\n    /* padding: 0 25%; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 0.25;\r\n    font-size: 12px;\r\n}\r\n\r\n.sidebar .sidebar__profile{\r\n    text-align: center;\r\n    border-bottom: 1px solid #ccc;\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    /* padding:0 10px; */\r\n}\r\n\r\n.sidebar  .sidebar__profile  img{\r\n    width: 100%;\r\n    height: 50px;\r\n    margin-bottom: -25px;\r\n}\r\n\r\n.profile__avatar .MuiAvatar-circular{\r\n    height: 50px;\r\n    width: 50px;\r\n    margin: 0 auto;\r\n    object-fit: contain;\r\n    /* padding-bottom: 20px; */\r\n}\r\n\r\n.profile__details h4{\r\n    margin-bottom: 0;\r\n }\r\n\r\n .profile__details p{\r\n    margin: 5px 10px;\r\n    font-size: 13px; \r\n    color: #333;\r\n }\r\n\r\n .profile__details div:nth-child(2){\r\n    border-bottom: 1px solid #ccc;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 10px;\r\n }\r\n\r\n.profile__stats{\r\n    \r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-align: left;\r\n    font-size: 12px;\r\n    padding:10px 10px;\r\n    align-items: center;\r\n    border-bottom: 1px solid #ccc;\r\n    /* height: 30px; */\r\n    /* margin-bottom: 20px; */\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.stat__number{\r\n    color: #0a66c2;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.profile__stats:hover, .bookmark:hover, .profile_info:hover {\r\n    cursor: pointer;\r\n    background-color: #eee;\r\n}\r\n\r\n.profile_info{\r\n    font-size: 12px;\r\n    text-align: left;\r\n    padding: 0 10px;\r\n}\r\n\r\n.profile_info {\r\n    line-height: 1px;\r\n    border-bottom: 1px solid #ccc;\r\n    padding: 10px 20px;\r\n    /* margin-bottom: 20px; */\r\n}\r\n\r\n.call_to_action{\r\n    text-decoration: underline;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    line-height: 30px;\r\n}\r\n\r\n.bookmark{\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    padding: 0px 20px;\r\n    height: 40px;\r\n    color: #444;\r\n}",""]),t.default=i},function(e,t,n){var r=n(14),i=n(79);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,".secondary__sidebar{\r\n    margin-top: 20px;\r\n    padding: 0 20px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    background-color: #fff;\r\n    position: sticky;\r\n    top: 60px;\r\n}\r\n\r\n.links > div {\r\n    padding: 5px 0;\r\n    color : #0a66c2;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.links > div:hover{\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.links div:last-child{\r\n    border-bottom: 1px solid #ccc;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.discover > h5{\r\n    font-weight: 600px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    color:rgba(0,0,0,0.5);\r\n    \r\n}\r\n\r\n",""]),t.default=i},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof h?t:h,s=Object.create(i.prototype),o=new _(r||[]);return s._invoke=function(e,t,n){var r="suspendedStart";return function(i,s){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw s;return S()}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=w(o,n);if(a){if(a===c)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,o),s}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var c={};function h(){}function d(){}function f(){}var p={};p[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&n.call(g,i)&&(p=g);var y=f.prototype=h.prototype=Object.create(p);function v(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(i,s){function o(){return new t((function(r,o){!function r(i,s,o,a){var l=u(e[i],e,s);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,o,a)}),(function(e){r("throw",e,o,a)})):t.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,a)}))}a(l.arg)}(i,s,r,o)}))}return r=r?r.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,s=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return s.next=s}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y.constructor=f,f.constructor=d,d.displayName=a(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,a(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),b.prototype[s]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new b(l(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(y),a(y,o,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],o=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var a=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(a&&l){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,c):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){var r=n(14),i=n(82);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,'.feed{\r\n    display: flex;\r\n    flex: 0.6;\r\n    flex-direction: column;\r\n    margin: 0 30px;\r\n    padding: 0 10px;\r\n    \r\n    overflow: hidden;\r\n\r\n}\r\n\r\n.feed__input{\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap:5px;\r\n    border-top-right-radius: 10px;\r\n    border-top-left-radius: 10px;\r\n}\r\n.feed__input > form{\r\n    display: flex;\r\n    flex-grow: 1;\r\n    \r\n}\r\n\r\n.feed__input form input[type="text"]{\r\n    border-radius: 20px;\r\n    flex: 1;\r\n    /* padding:10px; */\r\n    margin-left: 10px;\r\n    height: 40px;\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n.feed__options{\r\n    padding: 10px;\r\n    background-color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    /* gap:5px; */\r\n}\r\n .feed__options .option{\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 10px;\r\n    gap:5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.option svg {\r\n    margin-right: 5px;\r\n}\r\n\r\n.option:hover{\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n}',""]),t.default=i},function(e,t,n){var r=n(14),i=n(84);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,".posts{\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.posts .post__header{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.post__header__left{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.post__profile__details h3, .post__profile__details p {\r\n    font-size: 12px;\r\n    margin: 0;\r\n    margin-left: 10px;\r\n}\r\n\r\n.post__input{\r\n    font-size: 12px;\r\n}\r\n\r\n.post__input p{\r\n    padding: 10px 30px;\r\n}\r\n\r\n.post__footer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.footer__icons{\r\n    display: flex;\r\n    align-items: center;\r\n    margin-right: 10px;\r\n    padding: 10px 10px ;\r\n    border-radius: 10px;\r\n    font-size: 12px;\r\n} \r\n.post__footer svg {\r\n    margin-right: 8px;\r\n    color:#aaa;\r\n}\r\n\r\n.post__footer :hover {\r\n    cursor: pointer;\r\n    background-color: #eee;\r\n}",""]),t.default=i},function(e,t,n){var r=n(14),i=n(86);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,"\r\n.right__sidebar_container{\r\n    padding:10px 10px;\r\n    background-color: #fff;\r\n    font-size: 12px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    max-height: 380px;\r\n    position: sticky;\r\n    top: 60px;\r\n    /* bottom: 0; */\r\n}\r\n\r\n.sidebar__header{\r\n    padding:0 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    /* align-items: center; */\r\n    font-size: 14px;\r\n}\r\n\r\n.sidebar__header h4, .sidebar__header svg {\r\n    margin-top: 5px;\r\n    \r\n}\r\n\r\n.sidebar__header svg {\r\n    font-size: 16px;\r\n    color: #000;\r\n}\r\n.list__item{\r\n    padding: 2px 2px;\r\n}\r\n\r\n.list__heading:hover{\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.list__heading{\r\n    line-height: 25px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.list__heading h4, p {\r\n    margin: 0;\r\n}\r\n\r\n.list__heading h4{\r\n    color: #555;\r\n}\r\n\r\n.list__body p span{\r\n    color: #aaa;\r\n    margin-right: 5px;\r\n    /* background-color: red; */\r\n}\r\n\r\n\r\n.sidebar__footer__content{\r\n    padding:5px 30px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    font-size: 14px;\r\n    color: #aaa;\r\n    margin: 0 15%;\r\n}\r\n\r\n.sidebar__footer__content:hover{\r\n    cursor: pointer;\r\n    background-color: #eee;\r\n}",""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=n(21),o=n.n(s),a=n(13),l=n.n(a),u=(n(66),n(1)),c=n(3),h=n(9);function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var f=n(12);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m=p,g=new u.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),y=new h.b("@firebase/auth");function v(e,...t){y.logLevel<=h.a.ERROR&&y.error(`Auth (${c.a}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,...t){throw T(e,...t)}function w(e,...t){return T(e,...t)}function E(e,t,n){const r=Object.assign(Object.assign({},m()),{[t]:n});return new u.b("auth","Firebase",r).create(t,{appName:e.name})}function T(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return g.create(e,...t)}function _(e,t,...n){if(!e)throw T(t,...n)}function k(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function S(e,t){e||k(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new Map;function I(e){S(e instanceof Function,"Expected a class definition");let t=x.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,x.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(u.t)()||Object(u.u)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(O()||Object(u.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},M=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,r,i={}){return F(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Object(u.w)(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),P.fetch()(V(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function F(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},D),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw B(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw B(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw B(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw B(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw E(e,a,o);b(e,a)}}catch(t){if(t instanceof u.c)throw t;b(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await j(e,t,n,r,i);return"mfaPendingCredential"in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(w(this.auth,"network-request-failed")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function B(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return 1e3*Number(e)}function W(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(u.d)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(e){return v("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function K(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof u.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,async function(e,t){return j(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,n=d(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const a=(l=e.providerData,u=o,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!c&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=W(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await F(e,{},async()=>{const n=Object(u.w)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=V(e,r,"/v1/token","key="+i),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(s,{method:"POST",headers:o,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Y;return n&&(_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Y,this.toJSON())}_performRefresh(){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new G(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(u.n)(e),r=await n.getIdToken(t),i=W(r);_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:q(H(i.auth_time)),issuedAtTime:q(H(i.iat)),expirationTime:q(H(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(u.n)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,async function(e,t){return j(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=t;_(v&&T,e,"internal-error");const k=Y.fromJSON(this.name,T);_("string"==typeof v,e,"internal-error"),J(c,e.name),J(h,e.name),_("boolean"==typeof b,e,"internal-error"),_("boolean"==typeof w,e,"internal-error"),J(d,e.name),J(f,e.name),J(p,e.name),J(m,e.name),J(g,e.name),J(y,e.name);const S=new X({uid:v,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new Y;r.updateFromServerResponse(t);const i=new X({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Z.type="NONE";const ee=Z;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t,n){return`firebase:${e}:${t}:${n}`}class ne{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=te(this.userKey,r.apiKey,i),this.fullPersistenceKey=te("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ne(I(ee),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||I(ee);const s=te(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=X._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}})),new ne(i,e,n)):new ne(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ae(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ue(t))return"Blackberry";if(ce(t))return"Webos";if(se(t))return"Safari";if((t.includes("chrome/")||oe(t))&&!t.includes("edge/"))return"Chrome";if(le(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ie(e=Object(u.o)()){return/firefox\//i.test(e)}function se(e=Object(u.o)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oe(e=Object(u.o)()){return/crios\//i.test(e)}function ae(e=Object(u.o)()){return/iemobile/i.test(e)}function le(e=Object(u.o)()){return/android/i.test(e)}function ue(e=Object(u.o)()){return/blackberry/i.test(e)}function ce(e=Object(u.o)()){return/webos/i.test(e)}function he(e=Object(u.o)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function de(e=Object(u.o)()){return he(e)||le(e)||ce(e)||ue(e)||/windows phone/i.test(e)||ae(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e,t=[]){let n;switch(e){case"Browser":n=re(Object(u.o)());break;case"Worker":n=`${re(Object(u.o)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${c.a}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ye(this),this.idTokenSubscription=new ye(this),this.beforeStateQueue=new pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=I(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ne.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(u.n)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(I(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new u.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&I(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await ne.create(this,[I(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ge(e){return Object(u.n)(e)}class ye{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(u.g)(e=>this.observer=e)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ve(e,t,n){const r=ge(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=be(t),{host:o,port:a}=function(e){const t=be(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:we(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:we(t)}}}(t),l=null===a?"":":"+a;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function be(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function we(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ee{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,t){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(e,t){return j(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends Ee{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new _e(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new _e(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Te(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Ee{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Se(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=d(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Se(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ke(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ke(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ke(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(u.w)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie extends Ee{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ie({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ie({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw B(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),xe)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ie({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){var t,n,r,i,s,o;const a=Object(u.x)(Object(u.i)(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);_(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Object(u.x)(Object(u.i)(e)).link,n=t?Object(u.x)(Object(u.i)(t)).deep_link_id:null,r=Object(u.x)(Object(u.i)(e)).deep_link_id;return(r?Object(u.x)(Object(u.i)(r)).link:null)||r||n||t||e}(e);try{return new Ce(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(){this.providerId=Oe.PROVIDER_ID}static credential(e,t){return _e._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ce.parseLink(t);return _(n,"argument-error"),_e._fromEmailAndCode(e,n.code,n.tenantId)}}Oe.PROVIDER_ID="password",Oe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Oe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Ne{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re extends Ae{constructor(){super("facebook.com")}static credential(e){return Se._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch(e){return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com",Re.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe extends Ae{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Se._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Pe.credential(t,n)}catch(e){return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com",Pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De extends Ae{constructor(){super("github.com")}static credential(e){return Se._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch(e){return null}}}De.GITHUB_SIGN_IN_METHOD="github.com",De.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends Ae{constructor(){super("twitter.com")}static credential(e,t){return Se._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Me.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return U(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Me.TWITTER_SIGN_IN_METHOD="twitter.com",Me.PROVIDER_ID="twitter.com";class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await X._fromIdTokenResponse(e,n,r),s=Fe(n);return new je({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Fe(n);return new je({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Fe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends u.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ue.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ue(e,t,n,r)}}function Ve(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw Ue._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return je._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Be(e,t,n=!1){const{auth:r}=e;try{const i=await K(e,Ve(r,"reauthenticate",t,e),n);_(i.idToken,r,"internal-error");const s=W(i.idToken);_(s,r,"internal-error");const{sub:o}=s;return _(e.uid===o,r,"user-mismatch"),je._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&b(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t,n=!1){const r=await Ve(e,"signIn",t),i=await je._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}async function He(e,t){return qe(ge(e),t)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends We{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(u.o)();return se(e)||he(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=de(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Object(u.r)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ke.type="LOCAL";const $e=Ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends We{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ge.type="SESSION";const Qe=Ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class Xe{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const l=Je("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(){return void 0!==Ze().WorkerGlobalScope&&"function"==typeof Ze().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tt="firebaseLocalStorageDb";class nt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rt(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function it(){const e=indexedDB.open(tt,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(tt);return new nt(e).toPromise()}(),t(await it()))})})}async function st(e,t,n){const r=rt(e,!0).put({fbase_key:t,value:n});return new nt(r).toPromise()}function ot(e,t){const n=rt(e,!0).delete(t);return new nt(n).toPromise()}class at{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await it()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return et()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(et()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Xe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await it();return await st(e,"__sak","1"),await ot(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>st(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=rt(e,!1).get(t),r=await new nt(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ot(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=rt(e,!1).getAll();return new nt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}at.type="LOCAL";const lt=at;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return new Promise((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})}function ct(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ct("rcb"),new A(3e4,6e4);async function ht(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,e,"argument-error"),_("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");return(await function(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=dt.PROVIDER_ID,this.auth=ge(e)}verifyPhoneNumber(e,t){return ht(this.auth,e,Object(u.n)(t))}static credential(e,t){return Ie._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dt.credentialFromTaggedObject(t)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ie._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(e,t){return t?I(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.PROVIDER_ID="phone",dt.PHONE_SIGN_IN_METHOD="phone";class pt extends Ee{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mt(e){return qe(e.auth,new pt(e),e.bypassAuthState)}function gt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Be(n,new pt(e),e.bypassAuthState)}async function yt(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ze(n,new pt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mt;case"linkViaPopup":case"linkViaRedirect":return yt;case"reauthViaPopup":case"reauthViaRedirect":return gt;default:b(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new A(2e3,1e4);class wt extends vt{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Je();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,bt.get())};e()}}wt.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Et=new Map;class Tt extends vt{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=St(t),r=kt(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function _t(e,t){Et.set(e._key(),t)}function kt(e){return I(e._redirectPersistence)}function St(e){return te("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(e,t,n=!1){const r=ge(e),i=ft(r,t),s=new Tt(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class It{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ot(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ot(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ct(e))}saveEventToCache(e){this.cachedEventUids.add(Ct(e)),this.lastProcessedEventTime=Date.now()}}function Ct(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Ot({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,At=/^https?/;async function Rt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return j(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Pt(e))return}catch(e){}b(e,"unauthorized-domain")}function Pt(e){const t=C(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!At.test(n))return!1;if(Nt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new A(3e4,6e4);function Mt(){const e=Ze().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Lt=null;function jt(e){return Lt=Lt||function(e){return new Promise((t,n)=>{var r,i,s;function o(){Mt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mt(),n(w(e,"network-request-failed"))},timeout:Dt.get()})}if(null===(i=null===(r=Ze().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ze().gapi)||void 0===s?void 0:s.load)){const t=ct("iframefcb");return Ze()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},ut("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}o()}}).catch(e=>{throw Lt=null,e})}(e),Lt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new A(5e3,15e3),Ut={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zt(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:c.a},i=Vt.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Object(u.w)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ht(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bt),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Object(u.o)().toLowerCase();n&&(a=oe(c)?"_blank":n),ie(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(u.o)()){var t;return he(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new qt(null);const d=window.open(t||"",a,h);_(d,e,"popup-blocked");try{d.focus()}catch(e){}return new qt(d)}function Wt(e,t,n,r,i,s){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:c.a,eventId:i};if(t instanceof Ne){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Object(u.q)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ae){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return R(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(u.w)(a).slice(1)}`}const Kt=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qe,this._completeRedirectFn=xt,this._overrideRedirectResult=_t}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ht(e,Wt(e,t,n,C(),r),Je())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Wt(e,t,n,C(),r),Ze().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await jt(e),n=Ze().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:zt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ut,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Ze().setTimeout(()=>{r(i)},Ft.get());function o(){Ze().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}(e),n=new It(e);return t.register("authEvent",t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),b(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return de()||se()||he()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $t{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gt=Object(u.m)("authIdTokenMaxAge")||300;let Qt=null;function Yt(e=Object(c.e)()){const t=Object(c.b)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Object(c.b)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(u.h)(r,null!=t?t:{}))return e;b(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Kt,persistence:[lt,$e,Qe]}),r=Object(u.m)("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Gt)return;const r=null==t?void 0:t.token;Qt!==r&&(Qt=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(e,t,n){Object(u.n)(e).beforeAuthStateChanged(t,n)}(n,e,()=>e(n.currentUser)),function(e,t,n,r){Object(u.n)(e).onIdTokenChanged(t,n,r)}(n,t=>e(t))}var i;const s=Object(u.k)("auth");return s&&ve(n,"http://"+s),n}var Jt;Jt="Browser",Object(c.c)(new f.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:Jt,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(Jt)},o=new me(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(c.c)(new f.a("auth-internal",e=>(e=>new $t(e))(ge(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(c.g)("@firebase/auth","0.21.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Jt)),Object(c.g)("@firebase/auth","0.21.3","esm2017");n(32);var Xt=function(e){var t=e.toggleSignup,n=e.updateLogin;return i.a.createElement("div",{className:"login__screen"},i.a.createElement("div",{className:"form__container"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"800",width:"1200",viewBox:"-40.125525 -16.3118 347.75455 97.8708"},i.a.createElement("path",{fill:"#0a66c2",d:"M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"}),i.a.createElement("path",{fill:"#0a66c2",d:"M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"})),i.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var t=document.forms[0].elements[0].value,r=document.forms[0].elements[1].value;(function(e,t,n){return He(Object(u.n)(e),Oe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(Yt(),t,r).then((function(e){e.user;localStorage.setItem("userIsLoggedIn",!0),n()})).catch((function(e){var t=e.code,n=e.message;console.log(t,n),"auth/user-not-found"===t&&alert("please sign up first")}))}},i.a.createElement("input",{type:"email",name:"",id:"",placeholder:"email",required:!0}),i.a.createElement("br",null),i.a.createElement("input",{type:"password",name:"",id:"",placeholder:"Password",required:!0}),i.a.createElement("br",null),i.a.createElement("div",{className:"buton_container"},i.a.createElement("button",{type:"submit"},"Sign-in")),i.a.createElement("div",{className:"sign_in"},i.a.createElement("h4",null,"Not a member? ",i.a.createElement("span",{onClick:t},"Sign up"))))))};var Zt=function(e){var t=e.updateLogin,n=e.updateUserName,s=Object(r.useState)(!1),o=l()(s,2),a=o[0],u=o[1];function c(e){e.updateLogin;u((function(e){return!e}))}return a?i.a.createElement(Xt,{toggleSignup:c,updateLogin:t}):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"login__screen"},i.a.createElement("div",{className:"form__container"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"800",width:"1200",viewBox:"-40.125525 -16.3118 347.75455 97.8708"},i.a.createElement("path",{fill:"#0a66c2",d:"M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"}),i.a.createElement("path",{fill:"#0a66c2",d:"M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"})),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),document.forms[0];var t=document.forms[0].elements[0].value,r=document.forms[0].elements[1].value,i=document.forms[0].elements[2].value;i===document.forms[0].elements[3].value?async function(e,t,n){const r=ge(e),i=await Le(r,{returnSecureToken:!0,email:t,password:n}),s=await je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}(Yt(),r,i).then((function(e){e.user;alert("Congratulations, You are now a member of Linkedin Community. Login now!"),u(!0),n(t)})).catch((function(e){alert("please enter valid details");var t=e.code,n=e.message;console.log(t,n)})):alert("Password do not match")}},i.a.createElement("input",{type:"text",id:"userName",placeholder:"Name",required:!0}),i.a.createElement("br",null),i.a.createElement("input",{type:"email",name:"",id:"userEmail",placeholder:"email",required:!0}),i.a.createElement("br",null),i.a.createElement("input",{type:"password",name:"",id:"userPassword",placeholder:"Password",required:!0}),i.a.createElement("br",null),i.a.createElement("input",{type:"text",name:"",id:"userPasswordConfirm",placeholder:"Confirm password",required:!0}),i.a.createElement("br",null),i.a.createElement("div",{className:"buton_container"},i.a.createElement("button",{type:"submit"},"Sign-up")),i.a.createElement("div",{className:"sign_in"},i.a.createElement("h4",null,"Already a User? ",i.a.createElement("span",{onClick:c},"Sign in")))))))};var en=function(e){var t=e.icon,n=e.title,r=e.avatar;return i.a.createElement("div",{className:"header__options"},t,r,i.a.createElement("span",null,n))},tn=n(2),nn=n(4),rn=(n(15),n(23)),sn=n(25),on=n(20),an=Object(on.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var ln=r.forwardRef((function(e,t){var n=e.alt,i=e.children,s=e.classes,o=e.className,a=e.component,l=void 0===a?"div":a,u=e.imgProps,c=e.sizes,h=e.src,d=e.srcSet,f=e.variant,p=void 0===f?"circular":f,m=Object(nn.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),g=null,y=function(e){var t=e.src,n=e.srcSet,i=r.useState(!1),s=i[0],o=i[1];return r.useEffect((function(){if(t||n){o(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&o("loaded")},r.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),s}({src:h,srcSet:d}),v=h||d,b=v&&"error"!==y;return g=b?r.createElement("img",Object(tn.a)({alt:n,src:h,srcSet:d,sizes:c,className:s.img},u)):null!=i?i:v&&n?n[0]:r.createElement(an,{className:s.fallback}),r.createElement(l,Object(tn.a)({className:Object(rn.a)(s.root,s.system,s[p],o,!b&&s.colorDefault),ref:t},m),g)})),un=Object(sn.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(ln),cn="https://e7.pngegg.com/pngimages/677/439/png-clipart-silhouette-illustration-of-man-web-development-php-software-developer-programmer-web-design-computer-user-icon-svg-miscellaneous-computer-programming.png",hn=n(34),dn=n.n(hn),fn=n(39),pn=n.n(fn),mn=n(40),gn=n.n(mn),yn=n(41),vn=n.n(yn),bn=n(42),wn=n.n(bn),En=n(43),Tn=n.n(En);n(69);var _n=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header__left"},i.a.createElement("div",{className:"header__logo"},i.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/3536/3536505.png",height:"35px",alt:"Linkedin_Logo"})),i.a.createElement("div",{className:"header__search"},i.a.createElement(dn.a,null),i.a.createElement("input",{type:"text",placeholder:"search",name:"",id:""}))),i.a.createElement("div",{className:"header__right"},i.a.createElement(en,{icon:i.a.createElement(pn.a,null),title:"Home"}),i.a.createElement(en,{icon:i.a.createElement(gn.a,null),title:"My Network"}),i.a.createElement(en,{icon:i.a.createElement(vn.a,null),title:"Jobs"}),i.a.createElement(en,{icon:i.a.createElement(wn.a,null),title:"Messaging"}),i.a.createElement(en,{icon:i.a.createElement(Tn.a,null),title:"Notifications"}),i.a.createElement(en,{avatar:i.a.createElement(un,{src:cn}),title:"me"})))},kn=(n(76),n(44)),Sn=n.n(kn);var xn=function(e){var t=e.userName;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("div",{className:"sidebar__profile"},i.a.createElement("img",{src:"\r https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60\r ",alt:"user_Image"}),i.a.createElement("div",{className:"profile__avatar"},i.a.createElement(un,{src:cn})),i.a.createElement("div",{className:"profile__details"},i.a.createElement("div",{className:"username"},i.a.createElement("h4",null,t)),i.a.createElement("div",{className:"userBio"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet.")),i.a.createElement("div",{className:"profile__stats"},i.a.createElement("div",null,i.a.createElement("span",null,"Connection"),i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("strong",null,"grow your connection"))),i.a.createElement("span",{className:"stat__number"},"250")),i.a.createElement("div",{className:"profile__stats"},i.a.createElement("span",null,"Who viewed your profile"),i.a.createElement("span",{className:"stat__number"},"20"))),i.a.createElement("div",{className:"profile_info"},i.a.createElement("p",null,"Acess tools & insights"),i.a.createElement("p",{className:"call_to_action"},"Try premium for free")),i.a.createElement("div",{className:"bookmark"},i.a.createElement(Sn.a,null),i.a.createElement("span",null," My items "))))};n(78);var In=function(){return i.a.createElement("div",{className:"secondary__sidebar"},i.a.createElement("div",{className:"links"},i.a.createElement("div",null,"Groups"),i.a.createElement("div",null,"Events"),i.a.createElement("div",null,"Followed Hashtags")),i.a.createElement("div",{className:"discover"},i.a.createElement("h5",null,"Discover more")))},Cn=n(19),On=n.n(Cn),Nn=n(28),An=n.n(Nn);n(81);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(c.g)("firebase","9.17.1","app");var Rn=n(33),Pn=Object(c.f)({apiKey:"AIzaSyDcfxgjNLVmHm_Dc2PTnBCIfGUVRoj-0eM",authDomain:"clone-linkedin-e99b1.firebaseapp.com",projectId:"clone-linkedin-e99b1",storageBucket:"clone-linkedin-e99b1.appspot.com",messagingSenderId:"957441415943",appId:"1:957441415943:web:417e405b87d0a9d49543a2"}),Dn=Object(Rn.d)(Pn);console.log(Dn);n(83);var Mn=n(45),Ln=n.n(Mn),jn=n(46),Fn=n.n(jn),Un=n(47),Vn=n.n(Un),zn=n(48),Bn=n.n(zn),qn=n(49),Hn=n.n(qn);var Wn=function(e){var t=e.name,n=e.description,s=e.message,o=Object(r.useState)(!1),a=l()(o,2),u=a[0],c=a[1];return i.a.createElement("div",{className:"posts"},i.a.createElement("div",{className:"post__header"},i.a.createElement("div",{className:"post__header__left"},i.a.createElement("div",null,i.a.createElement(un,{src:cn})),i.a.createElement("div",{className:"post__profile__details"},i.a.createElement("h3",null,t),i.a.createElement("p",null,n))),i.a.createElement("div",{className:"post__header__right"},i.a.createElement(Ln.a,null))),i.a.createElement("div",{className:"post__input"},i.a.createElement("p",null,s)),i.a.createElement("div",{className:"post__footer"},i.a.createElement("div",{className:"footer__icons",onClick:function(){c((function(e){return!e}))}},i.a.createElement(Fn.a,{style:{color:u?"blue":"#aaa"}}),i.a.createElement("span",null,"Like")),i.a.createElement("div",{className:"footer__icons"},i.a.createElement(Vn.a,null),i.a.createElement("span",null,"Comment")),i.a.createElement("div",{className:"footer__icons"},i.a.createElement(Bn.a,null),i.a.createElement("span",null,"Repost")),i.a.createElement("div",{className:"footer__icons"},i.a.createElement(Hn.a,null),i.a.createElement("span",null,"Send"))))},Kn=n(50),$n=n.n(Kn),Gn=n(51),Qn=n.n(Gn),Yn=n(52),Jn=n.n(Yn),Xn=n(53),Zn=n.n(Xn);var er=function(e){var t=e.userName,n=Object(r.useState)(""),s=l()(n,2),o=s[0],a=s[1],u=Object(r.useState)([]),c=l()(u,2),h=c[0],d=c[1];function f(){return(f=An()(On.a.mark((function e(n){return On.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,Object(Rn.a)(Object(Rn.b)(Dn,"users"),{name:t,description:"Software engineer || Problem solver",message:o,timeStamp:(new Date).getTime()});case 4:return e.sent,a(""),e.next=8,p();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function p(){return m.apply(this,arguments)}function m(){return(m=An()(On.a.mark((function e(){var t,n;return On.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Rn.c)(Object(Rn.b)(Dn,"users"));case 2:t=e.sent,n=[],t.forEach((function(e){n.push(e.data())})),n.sort((function(e,t){return t.timeStamp-e.timeStamp})),d((function(e){return[].concat(n)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){p()}),[]),i.a.createElement("div",{className:"feed"},i.a.createElement("div",{className:"feed__input"},i.a.createElement(un,{src:cn}),i.a.createElement("form",{onSubmit:function(e){return f.apply(this,arguments)}},i.a.createElement("input",{type:"text",placeholder:"Start a post",value:o,onChange:function(e){a(e.target.value)}}))),i.a.createElement("div",{className:"feed__options"},i.a.createElement("div",{className:"option"},i.a.createElement($n.a,{style:{color:"#70b5fe"}}),i.a.createElement("span",null,"Photo")),i.a.createElement("div",{className:"option"},i.a.createElement(Qn.a,{style:{color:"#7fc15e"}}),i.a.createElement("span",null,"Video")),i.a.createElement("div",{className:"option"},i.a.createElement(Jn.a,{style:{color:"#e7a33e"}}),i.a.createElement("span",null,"Audio event")),i.a.createElement("div",{className:"option"},i.a.createElement(Zn.a,{style:{color:"#fc9295"}}),i.a.createElement("span",null,"Write article"))),i.a.createElement("div",{className:"post__container"},null==h?void 0:h.map((function(e,t){var n=e.description,r=e.message,s=e.name;return i.a.createElement(Wn,{key:t,name:s,description:n,message:r})}))))},tr=(n(85),n(54)),nr=n.n(tr),rr=n(55),ir=n.n(rr);var sr=function(){return i.a.createElement("div",{className:"right__sidebar_container"},i.a.createElement("div",{className:"sidebar__header"},i.a.createElement("h4",null,"Linkedin News"),i.a.createElement(nr.a,null)),i.a.createElement("div",{className:"sidebar__body"},i.a.createElement("ul",null,i.a.createElement("li",{className:"list__item"},i.a.createElement("div",{className:"list__heading"},i.a.createElement("h4",null,"Wipro pay row: Experts Weigh in")),i.a.createElement("div",{className:"list__body"},i.a.createElement("p",null,i.a.createElement("span",null,"1 Day ago"),i.a.createElement("span",null,"1458 readers")))),i.a.createElement("li",{className:"list__item"},i.a.createElement("div",{className:"list__heading"},i.a.createElement("h4",null,"Making internship count")),i.a.createElement("div",{className:"list__body"},i.a.createElement("p",null,i.a.createElement("span",null,"1 Day ago"),i.a.createElement("span",null,"606    readers")))),i.a.createElement("li",{className:"list__item"},i.a.createElement("div",{className:"list__heading"},i.a.createElement("h4",null,"Assets abroad attract indians")),i.a.createElement("div",{className:"list__body"},i.a.createElement("p",null,i.a.createElement("span",null,"2 Day ago"),i.a.createElement("span",null,"850 readers")))),i.a.createElement("li",{className:"list__item"},i.a.createElement("div",{className:"list__heading"},i.a.createElement("h4",null,"Air india to hire thousands")),i.a.createElement("div",{className:"list__body"},i.a.createElement("p",null,i.a.createElement("span",null,"19 hours ago"),i.a.createElement("span",null,"6380 readers")))),i.a.createElement("li",{className:"list__item"},i.a.createElement("div",{className:"list__heading"},i.a.createElement("h4",null,"Funding and founding India's Unicorn ")),i.a.createElement("div",{className:"list__body"},i.a.createElement("p",null,i.a.createElement("span",null,"19 hours ago"),i.a.createElement("span",null,"768 readers")))))),i.a.createElement("div",{className:"sidebar__footer"},i.a.createElement("div",{className:"sidebar__footer__content"},i.a.createElement("p",null,"Show more"),i.a.createElement(ir.a,null))))},or=function(){var e=Object(r.useState)(!1),t=l()(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=l()(o,2),u=a[0],c=a[1];function h(){s(!0)}return Object(r.useEffect)((function(){var e;(e=document.createElement("link")).setAttribute("rel","icon"),e.setAttribute("type","image/x-icon"),e.setAttribute("href","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUCdLP///8Aa6/D2em20eUAcbI/i7/l8fcAbbBIkcIAb7GUvdp4q8/W5/EAcLEAaq7t9vr2+/3L3+2rzOKixd5po8wGebba6fMogrrz+fyDs9Rensni7va91eeLt9YTe7dRl8VvqM4whrzt0Z/dAAAGCklEQVR4nO3dWZuiOhAG4CQYjVFZBXex/f8/8mD3mVZHpQqXSRVPfVdzMSivNNkJSl8m2+YR9+Tb7Mqkzv9Mi0PtnWEfXx2K1R1htlYmVv1IbNQ6+1tYWBf6vN4ap4pr4Ve/fKe4r0vhxoQ+nw/EbM7Cso/Ahlj+Ec77CWyI8x/hqK/Ahph+C0sf+kQ+Fl+ehNv+FaPnuG0jnPRaOGmEQxv6ND4YO9QqDX0SH06qZn3+I23+TGcq6m9dcYqJ1K7n13CnBj0XDkTIPSLkHxHyjwj5R4T8I0L+6Sy0sXPG+ZjNuEA3YezUsJzMi/m+PHrHA9lF6JPDIP2dsxoV44TDKCReGLvpmfeTRZnQv45ooRsv9G3yJfliCitMpnd8p2nVTfLxc3wtSGEyvw9ssiY+kIUTtgC13tO+iiihWbcAtS5J34sYoT+0ArVeUi5RMUI7AoQzyvUiQugmAFDrL8JEhNBnoHBEeB0OLPQPasKrlHSJsNDNEMKIbo0BCu0SAdSa7o0ICuMSJRyTrTBAoWtrzpyzJ3sRQaGJUMKCbLsGFCY5ShgxFt7rFt4mZyzEVBaNkGwfChbi7kO6Q5JwSVPAvCZzvsIY02ijvPgPbtOMUcKab40P9w5P2TJul+IaNXSbNJhreISBGd0/UkwPGFFfFGRrQ5QQvohZ9W9O9qlgRqLAgRrKwzS48VLX3vre0S1IFVJofVuNQXosETuqb5ePiTNFtxw9BTkzE1ePuhiRpQ1Ez67ZB5Mza9L34Cn4OWAzvi1vdvQnSLvM49tkvLvkZcWQwSR3t7UYNvGbebRN09EimoydYeDrvp4mds6pynrHZK2JrInqQ0TIPyLkHxHyjwjD5V29MnJCGzvTNOjr+risK2WNMe61Fde0hLGzy81kN0tXWdZ0XrJVusgH+81RGf+0EiVs2tmtub+YBjjq5pSt8Zvi/mhJmu+PyZNtfYxwOQGyvvfd0FGH64O8ORSti6/S+fjBT/my0A7bvvj7y+8IwTmryeUQXexLxFzz7Mt2N75FOHpRaJMDbi5dj7qvnacgdPUO+L8XmQ07zpEQECZf8OLHy+y7EYMLrcMtFLjIrlNjILTw8VBzS7Z1hwInsDCuMXPot1/YYUY2rPBJYHMV8ZMlQYW2ehLYZcIrqBC1/PhBCuyESUChM7ilqw+yQV7FgMJk8wpQr5CLB8IJ9/bvxxk7BrkAJJxwDT+oAgS3R1k44YtXUGMfgQgnfEOOmIvIWohaPs9amNV9F+opok7kLcwRZQ1vIebpVebCKdxRZC5EVInMhRnccmMuRLTcaAmzrNuwG6a+oCJc7faHpTJJ4qrherCCD/g/iOW/JISzsjK/2xZZb9QUO7yxYCHcHm628vEe2beC+8EEhPPkXqWWjHG3JFjUhBdOHxT4Hvza72ygOj+48PEiY4d6ihx8Him0cNDSKEkGiA8A+4iBha27pdsacSuC7bbAwvanbTCPzc2gdltYIVCb2Rr+iBHt+xBqcyE2A1gBwMBC6Pf37RtUnQKO1QQVthWkyK+Gu/lBhfBTfR4eN4YaNUGF8CgL4kY8EBZuER10uL6Amm0hhYgnMxH7HVAWIt7gE8NzjNAmXCGFiA3CEIUpZSFibynEPlyUhZjtFiuw8U1YiJuIBytEqOUXUIh7zxQ4JEVYeO+o24/hLES90I61cIFZ8sNaiHobmghFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhG8T0lmrr6ohlKeOOiKASoHf/YYnnZsfEsobj3r7p9B6+8MnIkL+ESH/iJB/RMg/IuQfEfKPCPmnEUYdXxHFLCZSec+vYa5Q4yV84xcK+zoTpqlWCrPXD9/YsVZ63ucb0c0bIW4rHK5JG6Fe9/ciurU+CTP8W8yYxarsW4jY2Zxp3Gkr4pOwZUdm1km+9z9VP/MbfSQmP7su/gj12vTtXrRmry+Felf162Z0VaSvhVrvK/PMS5MpJjbV/td1FurV4FB7wz9xvRlc7Ld4IWySbfOIe/Lt9XaS/wHXpZiRRkLEgQAAAABJRU5ErkJggg=="),document.head.appendChild(e),localStorage.getItem("userIsLoggedIn")&&h()})),i.a.createElement(i.a.Fragment,null,n?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"main"},i.a.createElement("div",{className:"header__container"},i.a.createElement(_n,null)),i.a.createElement("div",{className:"body__container"},i.a.createElement("div",{className:"sidebar__container"},i.a.createElement(xn,{userName:u}),i.a.createElement(In,null)),i.a.createElement(er,{userName:u}),i.a.createElement(sr,null)))):i.a.createElement(Zt,{updateLogin:h,updateUserName:function(e){c(e)}}))};o.a.render(i.a.createElement(or,null),document.getElementById("root"))},function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return i})),n.d(t,"createSvgIcon",(function(){return s.a})),n.d(t,"debounce",(function(){return o})),n.d(t,"deprecatedPropType",(function(){return a})),n.d(t,"isMuiElement",(function(){return u})),n.d(t,"ownerDocument",(function(){return c})),n.d(t,"ownerWindow",(function(){return h})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return f})),n.d(t,"unsupportedProp",(function(){return p})),n.d(t,"useControlled",(function(){return m})),n.d(t,"useEventCallback",(function(){return y})),n.d(t,"useForkRef",(function(){return v})),n.d(t,"unstable_useId",(function(){return b})),n.d(t,"useIsFocusVisible",(function(){return N}));var r=n(16);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r),t.apply(this,r)}}),(function(){}))}var s=n(20);function o(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=this,a=function(){e.apply(o,i)};clearTimeout(t),t=setTimeout(a,n)}return r.clear=function(){clearTimeout(t)},r}function a(e,t){return function(){return null}}var l=n(0);function u(e,t){return l.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function c(e){return e&&e.ownerDocument||document}function h(e){return c(e).defaultView||window}function d(e){return function(){return null}}function f(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function p(e,t,n,r,i){return null}function m(e){var t=e.controlled,n=e.default,r=(e.name,e.state,l.useRef(void 0!==t).current),i=l.useState(n),s=i[0],o=i[1];return[r?t:s,l.useCallback((function(e){r||o(e)}),[])]}var g="undefined"!=typeof window?l.useLayoutEffect:l.useEffect;function y(e){var t=l.useRef(e);return g((function(){t.current=e})),l.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}function v(e,t){return l.useMemo((function(){return null==e&&null==t?null:function(n){f(e,n),f(t,n)}}),[e,t])}function b(e){var t=l.useState(e),n=t[0],r=t[1],i=e||n;return l.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),i}var w=n(21),E=!0,T=!1,_=null,k={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function S(e){e.metaKey||e.altKey||e.ctrlKey||(E=!0)}function x(){E=!1}function I(){"hidden"===this.visibilityState&&T&&(E=!0)}function C(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(e){}return E||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!k[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function O(){T=!0,window.clearTimeout(_),_=window.setTimeout((function(){T=!1}),100)}function N(){return{isFocusVisible:C,onBlurVisible:O,ref:l.useCallback((function(e){var t,n=w.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",S,!0),t.addEventListener("mousedown",x,!0),t.addEventListener("pointerdown",x,!0),t.addEventListener("touchstart",x,!0),t.addEventListener("visibilitychange",I,!0))}),[])}}},function(e,t,n){"use strict";function r(e){for(var t="https://mui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}n.d(t,"a",(function(){return r}))}]);