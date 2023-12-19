var t,e,i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=t={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===s||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(i){try{return e.call(null,t,0)}catch(i){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:s}catch(t){e=s}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(t){i=o}}();var h,l=[],c=!1,u=-1;function f(){c&&h&&(c=!1,h.length?l=h.concat(l):u=-1,l.length&&p())}function p(){if(!c){var t=a(f);c=!0;for(var e=l.length;e;){for(h=l,l=[];++u<e;)h&&h[u].run();u=-1,e=l.length}h=null,c=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];l.push(new g(t,e)),1!==l.length||c||a(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};
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
const m=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=63&r|128):55296==(64512&r)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++n)),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=63&r|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=63&r|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,l=r>>2,c=(3&r)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(u=64)),n.push(i[l],i[c],i[u],i[f])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,n=0;for(;i<t.length;){const r=t[i++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[i++];e[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[n++]=String.fromCharCode(55296+(s>>10)),e[n++]=String.fromCharCode(56320+(1023&s))}else{const s=t[i++],o=t[i++];e[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let e=0;e<t.length;){const r=i[t.charAt(e++)],s=e<t.length?i[t.charAt(e)]:0;++e;const o=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new v;const h=r<<2|s>>4;if(n.push(h),64!==o){const t=s<<4&240|o>>2;if(n.push(t),64!==a){const t=o<<6&192|a;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b=function(t){return function(t){const e=m(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},E=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const w=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return w()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&E(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},A=t=>{const e=(t=>{var e,i;return null===(i=null===(e=T())||void 0===e?void 0:e.emulatorHosts)||void 0===i?void 0:i[t]})(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(i+1),10);return"["===e[0]?[e.substring(1,i-1),n]:[e.substring(0,i),n]},I=()=>{var t;return null===(t=T())||void 0===t?void 0:t.config};
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
class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
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
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=e||"demo-project",n=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[b(JSON.stringify({alg:"none",type:"JWT"})),b(JSON.stringify(s)),""].join(".")}
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
 */function C(){try{return"object"==typeof indexedDB}catch(t){return!1}}class D extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(R,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new D(n,o,i)}}const R=/\{\$([^}]+)}/g;
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
 */function N(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const r of i){if(!n.includes(r))return!1;const i=t[r],s=e[r];if(k(i)&&k(s)){if(!N(i,s))return!1}else if(i!==s)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function k(t){return null!==t&&"object"==typeof t}
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
 */class O{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
class P{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new S;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(t),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&t(s,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,"[DEFAULT]"===n?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class M{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new P(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const x=[];var U,F;(F=U||(U={}))[F.DEBUG=0]="DEBUG",F[F.VERBOSE=1]="VERBOSE",F[F.INFO=2]="INFO",F[F.WARN=3]="WARN",F[F.ERROR=4]="ERROR",F[F.SILENT=5]="SILENT";const j={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},B=U.INFO,H={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},V=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),r=H[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${n}]  ${t.name}:`,...i)};class ${constructor(t){this.name=t,this._logLevel=B,this._logHandler=V,this._userLogHandler=null,x.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?j[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}let z,X;const K=new WeakMap,G=new WeakMap,W=new WeakMap,q=new WeakMap,Y=new WeakMap;let J={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return G.get(t);if("objectStoreNames"===e)return t.objectStoreNames||W.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return tt(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Q(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(X||(X=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(et(this),e),tt(K.get(this))}:function(...e){return tt(t.apply(et(this),e))}:function(e,...i){const n=t.call(et(this),e,...i);return W.set(n,e.sort?e.sort():[e]),tt(n)}}function Z(t){return"function"==typeof t?Q(t):(t instanceof IDBTransaction&&function(t){if(G.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),n()},s=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));G.set(t,e)}(t),e=t,(z||(z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,J):t);var e}function tt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(tt(t.result)),n()},s=()=>{i(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&K.set(e,t)})).catch((()=>{})),Y.set(e,t),e}(t);if(q.has(t))return q.get(t);const e=Z(t);return e!==t&&(q.set(t,e),Y.set(e,t)),e}const et=t=>Y.get(t);function it(t,e,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=tt(o);return n&&o.addEventListener("upgradeneeded",(t=>{n(tt(o.result),t.oldVersion,t.newVersion,tt(o.transaction),t)})),i&&o.addEventListener("blocked",(t=>i(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const nt=["get","getKey","getAll","getAllKeys","count"],rt=["put","add","delete","clear"],st=new Map;function ot(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(st.get(e))return st.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=rt.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!nt.includes(i))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(e.shift())),(await Promise.all([o[i](...e),r&&s.done]))[0]};return st.set(e,s),s}J=(t=>({...t,get:(e,i,n)=>ot(e,i)||t.get(e,i,n),has:(e,i)=>!!ot(e,i)||t.has(e,i)}))(J);
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
class at{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ht=new $("@firebase/app"),lt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ct=new Map,ut=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(i){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function pt(t){const e=t.name;if(ut.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;ut.set(e,t);for(const e of ct.values())ft(e,t);return!0}function gt(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}
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
const dt=new L("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class mt{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new O("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
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
 */function yt(t,e={}){let i=t;if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw dt.create("bad-app-name",{appName:String(r)});if(i||(i=I()),!i)throw dt.create("no-options");const s=ct.get(r);if(s){if(N(i,s.options)&&N(n,s.config))return s;throw dt.create("duplicate-app",{appName:r})}const o=new M(r);for(const t of ut.values())o.addComponent(t);const a=new mt(i,n,o);return ct.set(r,a),a}function vt(t="[DEFAULT]"){const e=ct.get(t);if(!e&&"[DEFAULT]"===t&&I())return yt();if(!e)throw dt.create("no-app",{appName:t});return e}function bt(t,e,i){var n;let r=null!==(n=lt[t])&&void 0!==n?n:t;i&&(r+=`-${i}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ht.warn(t.join(" "))}pt(new O(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let Et=null;function wt(){return Et||(Et=it("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function Tt(t,e){try{const i=(await wt()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");await n.put(e,At(t)),await i.done}catch(t){if(t instanceof D)ht.warn(t.message);else{const e=dt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ht.warn(e.message)}}}function At(t){return`${t.name}!${t.options.appId}`}
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
 */class It{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new _t(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=St();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=St(),{heartbeatsToSend:i,unsentEntries:n}=function(t,e=1024){const i=[];let n=t.slice();for(const r of t){const t=i.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ct(i)>e){t.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Ct(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=b(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function St(){return(new Date).toISOString().substring(0,10)}class _t{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!C()&&new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await wt();return await e.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(At(t))}catch(t){if(t instanceof D)ht.warn(t.message);else{const e=dt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ht.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}}function Ct(t){return b(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Dt;Dt="",pt(new O("platform-logger",(t=>new at(t)),"PRIVATE")),pt(new O("heartbeat",(t=>new It(t)),"PRIVATE")),bt("@firebase/app","0.9.25",Dt),bt("@firebase/app","0.9.25","esm2017"),bt("fire-js","");
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
bt("firebase","10.7.1","app");var Lt,Rt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},Nt={},kt=kt||{},Ot=Rt||self;function Pt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Mt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var xt="closure_uid_"+(1e9*Math.random()>>>0),Ut=0;function Ft(t,e,i){return t.call.apply(t.bind,arguments)}function jt(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Bt(t,e,i){return(Bt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ft:jt).apply(null,arguments)}function Ht(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Vt(t,e){function i(){}i.prototype=e.prototype,t.$=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.ac=function(t,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[i].apply(t,r)}}function $t(){this.s=this.s,this.o=this.o}$t.prototype.s=!1,$t.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,xt)&&t[xt]||(t[xt]=++Ut))},$t.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1};function Xt(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function Kt(t,e){for(let e=1;e<arguments.length;e++){const i=arguments[e];if(Pt(i)){const e=t.length||0,n=i.length||0;t.length=e+n;for(let r=0;r<n;r++)t[e+r]=i[r]}else t.push(i)}}function Gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Gt.prototype.h=function(){this.defaultPrevented=!0};var Wt=function(){if(!Ot.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};Ot.addEventListener("test",t,e),Ot.removeEventListener("test",t,e)}catch(t){}return t}();function qt(t){return/^[\s\xa0]*$/.test(t)}function Yt(){var t=Ot.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return-1!=Yt().indexOf(t)}function Qt(t){return Qt[" "](t),t}Qt[" "]=function(){};var Zt,te,ee,ie=Jt("Opera"),ne=Jt("Trident")||Jt("MSIE"),re=Jt("Edge"),se=re||ne,oe=Jt("Gecko")&&!(-1!=Yt().toLowerCase().indexOf("webkit")&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),ae=-1!=Yt().toLowerCase().indexOf("webkit")&&!Jt("Edge");function he(){var t=Ot.document;return t?t.documentMode:void 0}t:{var le="",ce=(te=Yt(),oe?/rv:([^\);]+)(\)|;)/.exec(te):re?/Edge\/([\d\.]+)/.exec(te):ne?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(te):ae?/WebKit\/(\S+)/.exec(te):ie?/(?:Version)[ \/]?(\S+)/.exec(te):void 0);if(ce&&(le=ce?ce[1]:""),ne){var ue=he();if(null!=ue&&ue>parseFloat(le)){Zt=String(ue);break t}}Zt=le}if(Ot.document&&ne){var fe=he();ee=fe||(parseInt(Zt,10)||void 0)}else ee=void 0;var pe=ee;function ge(t,e){if(Gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oe){t:{try{Qt(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:de[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ge.$.h.call(this)}}Vt(ge,Gt);var de={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var me="closure_listenable_"+(1e6*Math.random()|0),ye=0;function ve(t,e,i,n,r){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.la=r,this.key=++ye,this.fa=this.ia=!1}function be(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ee(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function we(t){const e={};for(const i in t)e[i]=t[i];return e}const Te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<Te.length;e++)i=Te[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function Ie(t){this.src=t,this.g={},this.h=0}function Se(t,e){var i=e.type;if(i in t.g){var n,r=t.g[i],s=zt(r,e);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(be(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function _e(t,e,i,n){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!i&&s.la==n)return r}return-1}Ie.prototype.add=function(t,e,i,n,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=_e(t,e,n,r);return-1<o?(e=t[o],i||(e.ia=!1)):((e=new ve(e,this.src,s,!!n,r)).ia=i,t.push(e)),e};var Ce="closure_lm_"+(1e6*Math.random()|0),De={};function Le(t,e,i,n,r){if(n&&n.once)return Ne(t,e,i,n,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Le(t,e[s],i,n,r);return null}return i=Fe(i),t&&t[me]?t.O(e,i,Mt(n)?!!n.capture:!!n,r):Re(t,e,i,!1,n,r)}function Re(t,e,i,n,r,s){if(!e)throw Error("Invalid event type");var o=Mt(r)?!!r.capture:!!r,a=xe(t);if(a||(t[Ce]=a=new Ie(t)),(i=a.add(e,i,n,o,s)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}const e=Me;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)Wt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),n,r);else if(t.attachEvent)t.attachEvent(Pe(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function Ne(t,e,i,n,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ne(t,e[s],i,n,r);return null}return i=Fe(i),t&&t[me]?t.P(e,i,Mt(n)?!!n.capture:!!n,r):Re(t,e,i,!0,n,r)}function ke(t,e,i,n,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ke(t,e[s],i,n,r);else n=Mt(n)?!!n.capture:!!n,i=Fe(i),t&&t[me]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=_e(s=t.g[e],i,n,r))&&(be(s[i]),Array.prototype.splice.call(s,i,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=xe(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_e(e,i,n,r)),(i=-1<t?e[t]:null)&&Oe(i))}function Oe(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[me])Se(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(Pe(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=xe(e))?(Se(i,t),0==i.h&&(i.src=null,e[Ce]=null)):be(t)}}}function Pe(t){return t in De?De[t]:De[t]="on"+t}function Me(t,e){if(t.fa)t=!0;else{e=new ge(e,this);var i=t.listener,n=t.la||t.src;t.ia&&Oe(t),t=i.call(n,e)}return t}function xe(t){return(t=t[Ce])instanceof Ie?t:null}var Ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fe(t){return"function"==typeof t?t:(t[Ue]||(t[Ue]=function(e){return t.handleEvent(e)}),t[Ue])}function je(){$t.call(this),this.i=new Ie(this),this.S=this,this.J=null}function Be(t,e){var i,n=t.J;if(n)for(i=[];n;n=n.J)i.push(n);if(t=t.S,n=e.type||e,"string"==typeof e)e=new Gt(e,t);else if(e instanceof Gt)e.target=e.target||t;else{var r=e;Ae(e=new Gt(n,t),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var o=e.g=i[s];r=He(o,n,!0,e)&&r}if(r=He(o=e.g=t,n,!0,e)&&r,r=He(o,n,!1,e)&&r,i)for(s=0;s<i.length;s++)r=He(o=e.g=i[s],n,!1,e)&&r}function He(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==i){var a=o.listener,h=o.la||o.src;o.ia&&Se(t.i,o),r=!1!==a.call(h,n)&&r}}return r&&!n.defaultPrevented}Vt(je,$t),je.prototype[me]=!0,je.prototype.removeEventListener=function(t,e,i,n){ke(this,t,e,i,n)},je.prototype.N=function(){if(je.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)be(i[n]);delete e.g[t],e.h--}}this.J=null},je.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},je.prototype.P=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var Ve=Ot.JSON.stringify;function $e(){var t=Ye;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ze=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Xe),(t=>t.reset()));class Xe{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ke(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function Ge(t){Ot.setTimeout((()=>{throw t}),0)}let We,qe=!1,Ye=new class{constructor(){this.h=this.g=null}add(t,e){const i=ze.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}},Je=()=>{const t=Ot.Promise.resolve(void 0);We=()=>{t.then(Qe)}};var Qe=()=>{for(var t;t=$e();){try{t.h.call(t.g)}catch(t){Ge(t)}var e=ze;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}qe=!1};function Ze(t,e){je.call(this),this.h=t||1,this.g=e||Ot,this.j=Bt(this.qb,this),this.l=Date.now()}function ti(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function ei(t,e,i){if("function"==typeof t)i&&(t=Bt(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Bt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ot.setTimeout(t,e||0)}function ii(t){t.g=ei((()=>{t.g=null,t.i&&(t.i=!1,ii(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Vt(Ze,je),(Lt=Ze.prototype).ga=!1,Lt.T=null,Lt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(ti(this),this.start()))}},Lt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Lt.N=function(){Ze.$.N.call(this),ti(this),delete this.g};class ni extends $t{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ii(this)}N(){super.N(),this.g&&(Ot.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ri(t){$t.call(this),this.h=t,this.g={}}Vt(ri,$t);var si=[];function oi(t,e,i,n){Array.isArray(i)||(i&&(si[0]=i.toString()),i=si);for(var r=0;r<i.length;r++){var s=Le(e,i[r],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ai(t){Ee(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Oe(t)}),t),t.g={}}function hi(){this.g=!0}function li(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ve(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}ri.prototype.N=function(){ri.$.N.call(this),ai(this)},ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},hi.prototype.Ea=function(){this.g=!1},hi.prototype.info=function(){};var ci={},ui=null;function fi(){return ui=ui||new je}function pi(t){Gt.call(this,ci.Ta,t)}function gi(t){const e=fi();Be(e,new pi(e))}function di(t,e){Gt.call(this,ci.STAT_EVENT,t),this.stat=e}function mi(t){const e=fi();Be(e,new di(e,t))}function yi(t,e){Gt.call(this,ci.Ua,t),this.size=e}function vi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ot.setTimeout((function(){t()}),e)}ci.Ta="serverreachability",Vt(pi,Gt),ci.STAT_EVENT="statevent",Vt(di,Gt),ci.Ua="timingevent",Vt(yi,Gt);var bi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ei={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wi(){}function Ti(t){return t.h||(t.h=t.i())}function Ai(){}wi.prototype.h=null;var Ii,Si={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _i(){Gt.call(this,"d")}function Ci(){Gt.call(this,"c")}function Di(){}function Li(t,e,i,n){this.l=t,this.j=e,this.m=i,this.W=n||1,this.U=new ri(this),this.P=Ni,t=se?125:void 0,this.V=new Ze(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ri}function Ri(){this.i=null,this.g="",this.h=!1}Vt(_i,Gt),Vt(Ci,Gt),Vt(Di,wi),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Ii=new Di;var Ni=45e3,ki={},Oi={};function Pi(t,e,i){t.L=1,t.A=Zi(Wi(e)),t.u=i,t.S=!0,Mi(t,null)}function Mi(t,e){t.G=Date.now(),ji(t),t.B=Wi(t.A);var i=t.B,n=t.W;Array.isArray(n)||(n=[String(n)]),pn(i.i,"t",n),t.o=0,i=t.l.J,t.h=new Ri,t.g=ur(t.l,i?e:null,!t.u),0<t.O&&(t.M=new ni(Bt(t.Pa,t,t.g),t.O)),oi(t.U,t.g,"readystatechange",t.nb),e=t.I?we(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),gi(),function(t,e,i,n,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+e+"\n"+i+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function xi(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Ui(t,e,i){let n,r=!0;for(;!t.J&&t.o<i.length;){if(n=Fi(t,i),n==Oi){4==e&&(t.s=4,mi(14),r=!1),li(t.j,t.m,null,"[Incomplete Response]");break}if(n==ki){t.s=4,mi(15),li(t.j,t.m,i,"[Invalid Chunk]"),r=!1;break}li(t.j,t.m,n,null),zi(t,n)}xi(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=i.length||t.h.h||(t.s=1,mi(16),r=!1),t.i=t.i&&r,r?0<i.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),nr(e),e.M=!0,mi(11))):(li(t.j,t.m,i,"[Invalid Chunked Response]"),$i(t),Vi(t))}function Fi(t,e){var i=t.o,n=e.indexOf("\n",i);return-1==n?Oi:(i=Number(e.substring(i,n)),isNaN(i)?ki:(n+=1)+i>e.length?Oi:(e=e.slice(n,n+i),t.o=n+i,e))}function ji(t){t.Y=Date.now()+t.P,Bi(t,t.P)}function Bi(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=vi(Bt(t.lb,t),e)}function Hi(t){t.C&&(Ot.clearTimeout(t.C),t.C=null)}function Vi(t){0==t.l.H||t.J||or(t.l,t)}function $i(t){Hi(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,ti(t.V),ai(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function zi(t,e){try{var i=t.l;if(0!=i.H&&(i.g==t||bn(i.i,t)))if(!t.K&&bn(i.i,t)&&3==i.H){try{var n=i.Ja.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){t:if(!i.u){if(i.g){if(!(i.g.G+3e3<t.G))break t;sr(i),qn(i)}ir(i),mi(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=vi(Bt(i.ib,i),6e3));if(1>=vn(i.i)&&i.oa){try{i.oa()}catch(t){}i.oa=void 0}}else hr(i,11)}else if((t.K||i.g==t)&&sr(i),!qt(e))for(r=i.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(i.V=l[0],l=l[1],2==i.H)if("c"==l[0]){i.K=l[1],i.pa=l[2];const e=l[3];null!=e&&(i.ra=e,i.l.info("VER="+i.ra));const r=l[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(n=1.5*c,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=n.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(n.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.Da=t,Qi(n.I,n.F,t))}}i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-t.G,i.l.info("Handshake RTT: "+i.S+"ms"));var o=t;if((n=i).wa=cr(n,n.J?n.pa:null,n.Y),o.K){wn(n.i,o);var a=o,h=n.L;h&&a.setTimeout(h),a.C&&(Hi(a),ji(a)),n.g=o}else er(n);0<i.j.length&&Jn(i)}else"stop"!=l[0]&&"close"!=l[0]||hr(i,7);else 3==i.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?hr(i,7):Wn(i):"noop"!=l[0]&&i.h&&i.h.Aa(l),i.A=0)}gi()}catch(t){}}function Xi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Pt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var i=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Pt(t)||"string"==typeof t){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const n in t)e[i++]=n;return e}}}(t),n=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Pt(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),r=n.length,s=0;s<r;s++)e.call(void 0,n[s],i&&i[s],t)}(Lt=Li.prototype).setTimeout=function(t){this.P=t},Lt.nb=function(t){t=t.target;const e=this.M;e&&3==Vn(t)?e.l():this.Pa(t)},Lt.Pa=function(t){try{if(t==this.g)t:{const c=Vn(this.g);var e=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||se||this.g&&(this.h.h||this.g.ja()||$n(this.g)))){this.J||4!=c||7==e||gi(),Hi(this);var i=this.g.da();this.ca=i;e:if(xi(this)){var n=$n(this.g);t="";var r=n.length,s=4==Vn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){$i(this),Vi(this);var o="";break e}this.h.i=new Ot.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:s&&e==r-1});n.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,function(t,e,i,n,r,s,o){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+e+"\n"+i+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,c,i),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qt(a)){var l=a;break e}}l=null}if(!(i=l)){this.i=!1,this.s=3,mi(12),$i(this),Vi(this);break t}li(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zi(this,i)}this.S?(Ui(this,c,o),se&&this.i&&3==c&&(oi(this.U,this.V,"tick",this.mb),this.V.start())):(li(this.j,this.m,o,null),zi(this,o)),4==c&&$i(this),this.i&&!this.J&&(4==c?or(this.l,this):(this.i=!1,ji(this)))}else(function(t){const e={};t=(t.g&&2<=Vn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<t.length;n++){if(qt(t[n]))continue;var i=Ke(t[n]);const r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();const s=e[r]||[];e[r]=s,s.push(i)}!function(t,e){for(const i in t)e.call(void 0,t[i],i,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.s=3,mi(12)):(this.s=0,mi(13)),$i(this),Vi(this)}}}catch(t){}},Lt.mb=function(){if(this.g){var t=Vn(this.g),e=this.g.ja();this.o<e.length&&(Hi(this),Ui(this,t,e),this.i&&4!=t&&ji(this))}},Lt.cancel=function(){this.J=!0,$i(this)},Lt.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(gi(),mi(17)),$i(this),this.s=2,Vi(this)):Bi(this,this.Y-t)};var Ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gi){this.h=t.h,qi(this,t.j),this.s=t.s,this.g=t.g,Yi(this,t.m),this.l=t.l;var e=t.i,i=new ln;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),Ji(this,i),this.o=t.o}else t&&(e=String(t).match(Ki))?(this.h=!1,qi(this,e[1]||"",!0),this.s=tn(e[2]||""),this.g=tn(e[3]||"",!0),Yi(this,e[4]),this.l=tn(e[5]||"",!0),Ji(this,e[6]||"",!0),this.o=tn(e[7]||"")):(this.h=!1,this.i=new ln(null,this.h))}function Wi(t){return new Gi(t)}function qi(t,e,i){t.j=i?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ji(t,e,i){e instanceof ln?(t.i=e,function(t,e){e&&!t.j&&(cn(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(un(this,e),pn(this,i,t))}),t)),t.j=e}(t.i,t.h)):(i||(e=en(e,an)),t.i=new ln(e,t.h))}function Qi(t,e,i){t.i.set(e,i)}function Zi(t){return Qi(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,nn),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Gi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var i=this.g;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&t.push("/"),t.push(en(i,"/"==i.charAt(0)?on:sn,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.o)&&t.push("#",en(i,hn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,hn=/#/g;function ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),r=null;if(0<=n){var s=t[i].substring(0,n);r=t[i].substring(n+1)}else s=t[i];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function un(t,e){cn(t),e=gn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fn(t,e){return cn(t),e=gn(t,e),t.g.has(e)}function pn(t,e,i){un(t,e),0<i.length&&(t.i=null,t.g.set(gn(t,e),Xt(i)),t.h+=i.length)}function gn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Lt=ln.prototype).add=function(t,e){cn(this),this.i=null,t=gn(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},Lt.forEach=function(t,e){cn(this),this.g.forEach((function(i,n){i.forEach((function(i){t.call(e,i,n,this)}),this)}),this)},Lt.ta=function(){cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let n=0;n<e.length;n++){const r=t[n];for(let t=0;t<r.length;t++)i.push(e[n])}return i},Lt.Z=function(t){cn(this);let e=[];if("string"==typeof t)fn(this,t)&&(e=e.concat(this.g.get(gn(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},Lt.set=function(t,e){return cn(this),this.i=null,fn(this,t=gn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Lt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Lt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var n=e[i];const s=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var r=s;""!==o[n]&&(r+="="+encodeURIComponent(String(o[n]))),t.push(r)}}return this.i=t.join("&")};function dn(t){this.l=t||mn,Ot.PerformanceNavigationTiming?t=0<(t=Ot.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ot.g&&Ot.g.Ka&&Ot.g.Ka()&&Ot.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mn=10;function yn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function vn(t){return t.h?1:t.g?t.g.size:0}function bn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function wn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.F);return e}return Xt(t.i)}dn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function An(){this.g=new class{stringify(t){return Ot.JSON.stringify(t,void 0)}parse(t){return Ot.JSON.parse(t,void 0)}}}function In(t,e,i){const n=i||"";try{Xi(t,(function(t,i){let r=t;Mt(t)&&(r=Ve(t)),e.push(n+i+"="+encodeURIComponent(r))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function Sn(t,e,i,n,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(n)}catch(t){}}function _n(t){this.l=t.ec||null,this.j=t.ob||!1}function Cn(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Vt(_n,wi),_n.prototype.g=function(){return new Cn(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),Vt(Cn,je);var Dn=0;function Ln(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Rn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Nn(t)}function Nn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Lt=Cn.prototype).open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Nn(this)},Lt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Ot).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Lt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=Dn},Lt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Ot.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ln(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Lt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Rn(this):Nn(this),3==this.readyState&&Ln(this)}},Lt.Za=function(t){this.g&&(this.response=this.responseText=t,Rn(this))},Lt.Ya=function(t){this.g&&(this.response=t,Rn(this))},Lt.ka=function(){this.g&&Rn(this)},Lt.setRequestHeader=function(t,e){this.v.append(t,e)},Lt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Lt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=Ot.JSON.parse;function On(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pn,this.L=this.M=!1}Vt(On,je);var Pn="",Mn=/^https?$/i,xn=["POST","PUT"];function Un(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fn(t),Bn(t)}function Fn(t){t.F||(t.F=!0,Be(t,"complete"),Be(t,"error"))}function jn(t){if(t.h&&void 0!==kt&&(!t.C[1]||4!=Vn(t)||2!=t.da()))if(t.v&&4==Vn(t))ei(t.La,0,t);else if(Be(t,"readystatechange"),4==Vn(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===o){var r=String(t.I).match(Ki)[1]||null;!r&&Ot.self&&Ot.self.location&&(r=Ot.self.location.protocol.slice(0,-1)),n=!Mn.test(r?r.toLowerCase():"")}i=n}if(i)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var s=2<Vn(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Fn(t)}}finally{Bn(t)}}}function Bn(t,e){if(t.g){Hn(t);const i=t.g,n=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Be(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function Hn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Ot.clearTimeout(t.A),t.A=null)}function Vn(t){return t.g?t.g.readyState:0}function $n(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Pn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zn(t){let e="";return Ee(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function Xn(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=zn(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):Qi(t,e,i))}function Kn(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Gn(t){this.Ga=0,this.j=[],this.l=new hi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,t),this.hb=Kn("retryDelaySeedMs",1e4,t),this.eb=Kn("forwardChannelMaxRetries",2,t),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new dn(t&&t.concurrentRequestLimit),this.Ja=new An,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Wn(t){if(Yn(t),3==t.H){var e=t.W++,i=Wi(t.I);if(Qi(i,"SID",t.K),Qi(i,"RID",e),Qi(i,"TYPE","terminate"),Zn(t,i),(e=new Li(t,t.l,e)).L=2,e.A=Zi(Wi(i)),i=!1,Ot.navigator&&Ot.navigator.sendBeacon)try{i=Ot.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!i&&Ot.Image&&((new Image).src=e.A,i=!0),i||(e.g=ur(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ji(e)}lr(t)}function qn(t){t.g&&(nr(t),t.g.cancel(),t.g=null)}function Yn(t){qn(t),t.u&&(Ot.clearTimeout(t.u),t.u=null),sr(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Ot.clearTimeout(t.m),t.m=null)}function Jn(t){if(!yn(t.i)&&!t.m){t.m=!0;var e=t.Na;We||Je(),qe||(We(),qe=!0),Ye.add(e,t),t.C=0}}function Qn(t,e){var i;i=e?e.m:t.W++;const n=Wi(t.I);Qi(n,"SID",t.K),Qi(n,"RID",i),Qi(n,"AID",t.V),Zn(t,n),t.o&&t.s&&Xn(n,t.o,t.s),i=new Li(t,t.l,i,t.C+1),null===t.o&&(i.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tr(t,i,1e3),i.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),En(t.i,i),Pi(i,n,e)}function Zn(t,e){t.na&&Ee(t.na,(function(t,i){Qi(e,i,t)})),t.h&&Xi({},(function(t,i){Qi(e,i,t)}))}function tr(t,e,i){i=Math.min(t.j.length,i);var n=t.h?Bt(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<i;o++){let i=r[o].g;const a=r[o].map;if(i-=e,0>i)e=Math.max(0,r[o].g-100),s=!1;else try{In(a,t,"req"+i+"_")}catch(t){n&&n(a)}}if(s){n=t.join("&");break t}}}return t=t.j.splice(0,i),e.F=t,n}function er(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;We||Je(),qe||(We(),qe=!0),Ye.add(e,t),t.A=0}}function ir(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=vi(Bt(t.Ma,t),ar(t,t.A)),t.A++,!0)}function nr(t){null!=t.B&&(Ot.clearTimeout(t.B),t.B=null)}function rr(t){t.g=new Li(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Wi(t.wa);Qi(e,"RID","rpc"),Qi(e,"SID",t.K),Qi(e,"AID",t.V),Qi(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Qi(e,"TO",t.qa),Qi(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Xn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var i=t.g;t=t.pa,i.L=1,i.A=Zi(Wi(e)),i.u=null,i.S=!0,Mi(i,t)}function sr(t){null!=t.v&&(Ot.clearTimeout(t.v),t.v=null)}function or(t,e){var i=null;if(t.g==e){sr(t),nr(t),t.g=null;var n=2}else{if(!bn(t.i,e))return;i=e.F,wn(t.i,e),n=1}if(0!=t.H)if(e.i)if(1==n){i=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;Be(n=fi(),new yi(n,i)),Jn(t)}else er(t);else if(3==(r=e.s)||0==r&&0<e.ca||!(1==n&&function(t,e){return!(vn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=vi(Bt(t.Na,t,e),ar(t,t.C)),t.C++,0)))}(t,e)||2==n&&ir(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),r){case 1:hr(t,5);break;case 4:hr(t,10);break;case 3:hr(t,6);break;default:hr(t,2)}}function ar(t,e){let i=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(i*=2),i*e}function hr(t,e){if(t.l.info("Error code "+e),2==e){var i=null;t.h&&(i=null);var n=Bt(t.pb,t);i||(i=new Gi("//www.google.com/images/cleardot.gif"),Ot.location&&"http"==Ot.location.protocol||qi(i,"https"),Zi(i)),function(t,e){const i=new hi;if(Ot.Image){const n=new Image;n.onload=Ht(Sn,i,n,"TestLoadImage: loaded",!0,e),n.onerror=Ht(Sn,i,n,"TestLoadImage: error",!1,e),n.onabort=Ht(Sn,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=Ht(Sn,i,n,"TestLoadImage: timeout",!1,e),Ot.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else mi(2);t.H=0,t.h&&t.h.za(e),lr(t),Yn(t)}function lr(t){if(t.H=0,t.ma=[],t.h){const e=Tn(t.i);0==e.length&&0==t.j.length||(Kt(t.ma,e),Kt(t.ma,t.j),t.i.i.length=0,Xt(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,i){var n=i instanceof Gi?Wi(i):new Gi(i);if(""!=n.g)e&&(n.g=e+"."+n.g),Yi(n,n.m);else{var r=Ot.location;n=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Gi(null);n&&qi(s,n),e&&(s.g=e),r&&Yi(s,r),i&&(s.l=i),n=s}return i=t.F,e=t.Da,i&&e&&Qi(n,i,e),Qi(n,"VER",t.ra),Zn(t,n),n}function ur(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new On(new _n({ob:i})):new On(t.va)).Oa(t.J),e}function fr(){}function pr(){if(ne&&!(10<=Number(pe)))throw Error("Environmental error: no available transport.")}function gr(t,e){je.call(this),this.g=new Gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!qt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qt(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new yr(this)}function dr(t){_i.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){Ci.call(this),this.status=1}function yr(t){this.g=t}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function br(t,e,i){i||(i=0);var n=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)n[r]=e.charCodeAt(i++)|e.charCodeAt(i++)<<8|e.charCodeAt(i++)<<16|e.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=e[i++]|e[i++]<<8|e[i++]<<16|e[i++]<<24;e=t.g[0],i=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^i&(r^s))+n[0]+3614090360&4294967295;o=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=(i=(r=(s=(e=i+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(i^r))+n[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(i^s&(e^i))+n[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=i+(e^r&(s^e))+n[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(r^s))+n[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(i^r))+n[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(i^s&(e^i))+n[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=i+(e^r&(s^e))+n[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(r^s))+n[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(i^r))+n[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(i^s&(e^i))+n[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=i+(e^r&(s^e))+n[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^i&(r^s))+n[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(i^r))+n[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(i^s&(e^i))+n[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=i+(e^r&(s^e))+n[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(i^r))+n[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(i^r&(e^i))+n[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^i&(s^e))+n[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=i+(s^e&(r^s))+n[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(i^r))+n[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(i^r&(e^i))+n[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^i&(s^e))+n[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=i+(s^e&(r^s))+n[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(i^r))+n[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(i^r&(e^i))+n[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^i&(s^e))+n[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=i+(s^e&(r^s))+n[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(i^r))+n[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(i^r&(e^i))+n[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^i&(s^e))+n[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=i+(s^e&(r^s))+n[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r^s)+n[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^i^r)+n[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^i)+n[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=i+(r^s^e)+n[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^r^s)+n[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^i^r)+n[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^i)+n[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=i+(r^s^e)+n[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^r^s)+n[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^i^r)+n[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^i)+n[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=i+(r^s^e)+n[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^r^s)+n[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^i^r)+n[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^i)+n[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=i+(r^s^e)+n[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(i|~s))+n[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(i^(e|~r))+n[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~i))+n[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=i+(s^(r|~e))+n[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(i|~s))+n[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(i^(e|~r))+n[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~i))+n[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=i+(s^(r|~e))+n[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(i|~s))+n[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(i^(e|~r))+n[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~i))+n[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=i+(s^(r|~e))+n[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=i+((o=e+(r^(i|~s))+n[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(i^(e|~r))+n[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~i))+n[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function Er(t,e){this.h=e;for(var i=[],n=!0,r=t.length-1;0<=r;r--){var s=0|t[r];n&&s==e||(i[r]=s,n=!1)}this.g=i}(Lt=On.prototype).Oa=function(t){this.M=t},Lt.ha=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ii.g(),this.C=this.u?Ti(this.u):Ti(Ii),this.g.onreadystatechange=Bt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Un(this,t)}if(t=i||"",i=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())i.set(t,n.get(t))}n=Array.from(i.keys()).find((t=>"content-type"==t.toLowerCase())),r=Ot.FormData&&t instanceof Ot.FormData,!(0<=zt(xn,e))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of i)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hn(this),0<this.B&&((this.L=function(t){return ne&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Bt(this.ua,this)):this.A=ei(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Un(this,t)}},Lt.ua=function(){void 0!==kt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))},Lt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Bn(this))},Lt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),On.$.N.call(this)},Lt.La=function(){this.s||(this.G||this.v||this.l?jn(this):this.kb())},Lt.kb=function(){jn(this)},Lt.isActive=function(){return!!this.g},Lt.da=function(){try{return 2<Vn(this)?this.g.status:-1}catch(t){return-1}},Lt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Lt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},Lt.Ia=function(){return this.m},Lt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Lt=Gn.prototype).ra=8,Lt.H=1,Lt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Li(this,this.l,t);let s=this.s;if(this.U&&(s?(s=we(s),Ae(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,i=0;i<this.j.length;i++){var n=this.j[i];if(void 0===(n="__data__"in n.map&&"string"==typeof(n=n.map.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.j.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=tr(this,r,e),Qi(i=Wi(this.I),"RID",t),Qi(i,"CVER",22),this.F&&Qi(i,"X-HTTP-Session-Id",this.F),Zn(this,i),s&&(this.O?e="headers="+encodeURIComponent(String(zn(s)))+"&"+e:this.o&&Xn(i,this.o,s)),En(this.i,r),this.bb&&Qi(i,"TYPE","init"),this.P?(Qi(i,"$req",e),Qi(i,"SID","null"),r.aa=!0,Pi(r,i,null)):Pi(r,i,e),this.H=2}}else 3==this.H&&(t?Qn(this,t):0==this.j.length||yn(this.i)||Qn(this))},Lt.Ma=function(){if(this.u=null,rr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vi(Bt(this.jb,this),t)}},Lt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mi(10),qn(this),rr(this))},Lt.ib=function(){null!=this.v&&(this.v=null,qn(this),ir(this),mi(19))},Lt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mi(2)):(this.l.info("Failed to ping google.com"),mi(1))},Lt.isActive=function(){return!!this.h&&this.h.isActive(this)},(Lt=fr.prototype).Ba=function(){},Lt.Aa=function(){},Lt.za=function(){},Lt.ya=function(){},Lt.isActive=function(){return!0},Lt.Va=function(){},pr.prototype.g=function(t,e){return new gr(t,e)},Vt(gr,je),gr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,i=this.h||void 0;mi(0),t.Y=e,t.na=i||{},t.G=t.aa,t.I=cr(t,null,t.Y),Jn(t)},gr.prototype.close=function(){Wn(this.g)},gr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var i={};i.__data__=t,t=i}else this.v&&((i={}).__data__=Ve(t),t=i);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Jn(e)},gr.prototype.N=function(){this.g.h=null,delete this.j,Wn(this.g),delete this.g,gr.$.N.call(this)},Vt(dr,_i),Vt(mr,Ci),Vt(yr,fr),yr.prototype.Ba=function(){Be(this.g,"a")},yr.prototype.Aa=function(t){Be(this.g,new dr(t))},yr.prototype.za=function(t){Be(this.g,new mr)},yr.prototype.ya=function(){Be(this.g,"b")},Vt(vr,(function(){this.blockSize=-1})),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var i=e-this.blockSize,n=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=i;)br(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(n[r++]=t.charCodeAt(s++),r==this.blockSize){br(this,n),r=0;break}}else for(;s<e;)if(n[r++]=t[s++],r==this.blockSize){br(this,n),r=0;break}}this.h=r,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var i=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&i,i/=256;for(this.j(t),t=Array(16),e=i=0;4>e;++e)for(var n=0;32>n;n+=8)t[i++]=this.g[e]>>>n&255;return t};var wr={};function Tr(t){return-128<=t&&128>t?function(t,e){var i=wr;return Object.prototype.hasOwnProperty.call(i,t)?i[t]:i[t]=e(t)}(t,(function(t){return new Er([0|t],0>t?-1:0)})):new Er([0|t],0>t?-1:0)}function Ar(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Rr(Ar(-t));for(var e=[],i=1,n=0;t>=i;n++)e[n]=t/i|0,i*=Ir;return new Er(e,0)}var Ir=4294967296,Sr=Tr(0),_r=Tr(1),Cr=Tr(16777216);function Dr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Lr(t){return-1==t.h}function Rr(t){for(var e=t.g.length,i=[],n=0;n<e;n++)i[n]=~t.g[n];return new Er(i,~t.h).add(_r)}function Nr(t,e){return t.add(Rr(e))}function kr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Or(t,e){this.g=t,this.h=e}function Pr(t,e){if(Dr(e))throw Error("division by zero");if(Dr(t))return new Or(Sr,Sr);if(Lr(t))return e=Pr(Rr(t),e),new Or(Rr(e.g),Rr(e.h));if(Lr(e))return e=Pr(t,Rr(e)),new Or(Rr(e.g),e.h);if(30<t.g.length){if(Lr(t)||Lr(e))throw Error("slowDivide_ only works with positive integers.");for(var i=_r,n=e;0>=n.X(t);)i=Mr(i),n=Mr(n);var r=xr(i,1),s=xr(n,1);for(n=xr(n,2),i=xr(i,2);!Dr(n);){var o=s.add(n);0>=o.X(t)&&(r=r.add(i),s=o),n=xr(n,1),i=xr(i,1)}return e=Nr(t,r.R(e)),new Or(r,e)}for(r=Sr;0<=t.X(e);){for(i=Math.max(1,Math.floor(t.ea()/e.ea())),n=48>=(n=Math.ceil(Math.log(i)/Math.LN2))?1:Math.pow(2,n-48),o=(s=Ar(i)).R(e);Lr(o)||0<o.X(t);)o=(s=Ar(i-=n)).R(e);Dr(s)&&(s=_r),r=r.add(s),t=Nr(t,o)}return new Or(r,t)}function Mr(t){for(var e=t.g.length+1,i=[],n=0;n<e;n++)i[n]=t.D(n)<<1|t.D(n-1)>>>31;return new Er(i,t.h)}function xr(t,e){var i=e>>5;e%=32;for(var n=t.g.length-i,r=[],s=0;s<n;s++)r[s]=0<e?t.D(s+i)>>>e|t.D(s+i+1)<<32-e:t.D(s+i);return new Er(r,t.h)}(Lt=Er.prototype).ea=function(){if(Lr(this))return-Rr(this).ea();for(var t=0,e=1,i=0;i<this.g.length;i++){var n=this.D(i);t+=(0<=n?n:Ir+n)*e,e*=Ir}return t},Lt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(Dr(this))return"0";if(Lr(this))return"-"+Rr(this).toString(t);for(var e=Ar(Math.pow(t,6)),i=this,n="";;){var r=Pr(i,e).g,s=((0<(i=Nr(i,r.R(e))).g.length?i.g[0]:i.h)>>>0).toString(t);if(Dr(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},Lt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Lt.X=function(t){return Lr(t=Nr(this,t))?-1:Dr(t)?0:1},Lt.abs=function(){return Lr(this)?Rr(this):this},Lt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0,r=0;r<=e;r++){var s=n+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);n=o>>>16,s&=65535,o&=65535,i[r]=o<<16|s}return new Er(i,-2147483648&i[i.length-1]?-1:0)},Lt.R=function(t){if(Dr(this)||Dr(t))return Sr;if(Lr(this))return Lr(t)?Rr(this).R(Rr(t)):Rr(Rr(this).R(t));if(Lr(t))return Rr(this.R(Rr(t)));if(0>this.X(Cr)&&0>t.X(Cr))return Ar(this.ea()*t.ea());for(var e=this.g.length+t.g.length,i=[],n=0;n<2*e;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<t.g.length;r++){var s=this.D(n)>>>16,o=65535&this.D(n),a=t.D(r)>>>16,h=65535&t.D(r);i[2*n+2*r]+=o*h,kr(i,2*n+2*r),i[2*n+2*r+1]+=s*h,kr(i,2*n+2*r+1),i[2*n+2*r+1]+=o*a,kr(i,2*n+2*r+1),i[2*n+2*r+2]+=s*a,kr(i,2*n+2*r+2)}for(n=0;n<e;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=e;n<2*e;n++)i[n]=0;return new Er(i,0)},Lt.gb=function(t){return Pr(this,t).h},Lt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)&t.D(n);return new Er(i,this.h&t.h)},Lt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)|t.D(n);return new Er(i,this.h|t.h)},Lt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)^t.D(n);return new Er(i,this.h^t.h)},pr.prototype.createWebChannel=pr.prototype.g,gr.prototype.send=gr.prototype.u,gr.prototype.open=gr.prototype.m,gr.prototype.close=gr.prototype.close,bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Ei.COMPLETE="complete",Ai.EventType=Si,Si.OPEN="a",Si.CLOSE="b",Si.ERROR="c",Si.MESSAGE="d",je.prototype.listen=je.prototype.O,On.prototype.listenOnce=On.prototype.P,On.prototype.getLastError=On.prototype.Sa,On.prototype.getLastErrorCode=On.prototype.Ia,On.prototype.getStatus=On.prototype.da,On.prototype.getResponseJson=On.prototype.Wa,On.prototype.getResponseText=On.prototype.ja,On.prototype.send=On.prototype.ha,On.prototype.setWithCredentials=On.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,Er.prototype.add=Er.prototype.add,Er.prototype.multiply=Er.prototype.R,Er.prototype.modulo=Er.prototype.gb,Er.prototype.compare=Er.prototype.X,Er.prototype.toNumber=Er.prototype.ea,Er.prototype.toString=Er.prototype.toString,Er.prototype.getBits=Er.prototype.D,Er.fromNumber=Ar,Er.fromString=function t(e,i){if(0==e.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==e.charAt(0))return Rr(t(e.substring(1),i));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ar(Math.pow(i,8)),r=Sr,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),i);8>o?(o=Ar(Math.pow(i,o)),r=r.R(o).add(Ar(a))):r=(r=r.R(n)).add(Ar(a))}return r};Nt.createWebChannelTransport=function(){return new pr},Nt.getStatEventTarget=function(){return fi()},Nt.ErrorCode=bi,Nt.EventType=Ei,Nt.Event=ci,Nt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Nt.FetchXmlHttpFactory=_n,Nt.WebChannel=Ai,Nt.XhrIo=On,Nt.Md5=vr;var Ur=Nt.Integer=Er;
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
class Fr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fr.UNAUTHENTICATED=new Fr(null),Fr.GOOGLE_CREDENTIALS=new Fr("google-credentials-uid"),Fr.FIRST_PARTY=new Fr("first-party-uid"),Fr.MOCK_USER=new Fr("mock-user");
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
let jr="10.7.0";
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
 */const Br=new $("@firebase/firestore");function Hr(t,...e){if(Br.logLevel<=U.DEBUG){const i=e.map(zr);Br.debug(`Firestore (${jr}): ${t}`,...i)}}function Vr(t,...e){if(Br.logLevel<=U.ERROR){const i=e.map(zr);Br.error(`Firestore (${jr}): ${t}`,...i)}}function $r(t,...e){if(Br.logLevel<=U.WARN){const i=e.map(zr);Br.warn(`Firestore (${jr}): ${t}`,...i)}}function zr(t){if("string"==typeof t)return t;try{
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
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
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
 */function Xr(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw Vr(e),new Error(e)}function Kr(t,e){t||Xr()}
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
const Gr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Wr extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class qr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Yr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fr.UNAUTHENTICATED)))}shutdown(){}}class Qr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Zr{constructor(t){this.t=t,this.currentUser=Fr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let r=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qr,t.enqueueRetryable((()=>n(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Kr("string"==typeof e.accessToken),new Yr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Kr(null===t||"string"==typeof t),new Fr(t)}}class ts{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=Fr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class es{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new ts(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Fr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class is{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ns{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.R;return this.R=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?n(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Kr("string"==typeof t.token),this.R=t.token,new is(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function rs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
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
 */class ss{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=rs(40);for(let r=0;r<n.length;++r)i.length<20&&n[r]<e&&(i+=t.charAt(n[r]%t.length))}return i}}function os(t,e){return t<e?-1:t>e?1:0}
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
class as{constructor(t,e,i){void 0===e?e=0:e>t.length&&Xr(),void 0===i?i=t.length-e:i>t.length-e&&Xr(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===as.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof as?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),r=e.get(n);if(i<r)return-1;if(i>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class hs extends as{construct(t,e,i){return new hs(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new Wr(Gr.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new hs(e)}static emptyPath(){return new hs([])}}
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
class ls{constructor(t){this.path=t}static fromPath(t){return new ls(hs.fromString(t))}static fromName(t){return new ls(hs.fromString(t).popFirst(5))}static empty(){return new ls(hs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===hs.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return hs.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ls(new hs(t.slice()))}}
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
 */class cs{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}cs.UNKNOWN_ID=-1;function us(t){return"IndexedDbTransactionError"===t.name}
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
class fs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function ps(t){return 0===t&&1/t==-1/0}fs._e=-1;const gs=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ds=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ms=ds;
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
class ys{constructor(t,e){this.comparator=t,this.root=e||bs.EMPTY}insert(t,e){return new ys(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bs.BLACK,null,null))}remove(t){return new ys(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vs(this.root,t,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vs(this.root,t,this.comparator,!0)}}class vs{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?i(t.key,e):1,e&&n&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bs{constructor(t,e,i,n,r){this.key=t,this.value=e,this.color=null!=i?i:bs.RED,this.left=null!=n?n:bs.EMPTY,this.right=null!=r?r:bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,r){return new bs(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const r=i(t,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===r?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return bs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return bs.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xr();if(this.right.isRed())throw Xr();const t=this.left.check();if(t!==this.right.check())throw Xr();return t+(this.isRed()?0:1)}}bs.EMPTY=null,bs.RED=!0,bs.BLACK=!1,bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Xr()}get value(){throw Xr()}get color(){throw Xr()}get left(){throw Xr()}get right(){throw Xr()}copy(t,e,i,n,r){return this}insert(t,e,i){return new bs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Es{constructor(t){this.comparator=t,this.data=new ys(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ws(this.data.getIterator())}getIteratorFrom(t){return new ws(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Es))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Es(this.comparator);return e.data=t,e}}class ws{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
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
class Ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class As{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ts("Invalid base64 string: "+t):t}}(t);return new As(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new As(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return os(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}As.EMPTY_BYTE_STRING=new As("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ss(t){return"string"==typeof t?As.fromBase64String(t):As.fromUint8Array(t)}
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
class _s{constructor(t,e,i,n,r,s,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class Cs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Cs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Cs&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Ds(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
new ys(ls.comparator);new ys(ls.comparator);new ys(ls.comparator),new Es(ls.comparator);new Es(os);
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
var Ls,Rs;(Rs=Ls||(Ls={}))[Rs.OK=0]="OK",Rs[Rs.CANCELLED=1]="CANCELLED",Rs[Rs.UNKNOWN=2]="UNKNOWN",Rs[Rs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rs[Rs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rs[Rs.NOT_FOUND=5]="NOT_FOUND",Rs[Rs.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rs[Rs.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rs[Rs.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rs[Rs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rs[Rs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rs[Rs.ABORTED=10]="ABORTED",Rs[Rs.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rs[Rs.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rs[Rs.INTERNAL=13]="INTERNAL",Rs[Rs.UNAVAILABLE=14]="UNAVAILABLE",Rs[Rs.DATA_LOSS=15]="DATA_LOSS";
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
new Ur([4294967295,4294967295],0);Error;
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
 */class Ns{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(Is(t.integerValue));else if("doubleValue"in t){const i=Is(t.doubleValue);isNaN(i)?this.Tt(e,13):(this.Tt(e,15),ps(i)?e.Et(0):e.Et(i))}else if("timestampValue"in t){const i=t.timestampValue;this.Tt(e,20),"string"==typeof i?e.dt(i):(e.dt(`${i.seconds||""}`),e.Et(i.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(Ss(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.Tt(e,45),e.Et(i.latitude||0),e.Et(i.longitude||0)}else"mapValue"in t?Ds(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):Xr()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const i=t.fields||{};this.Tt(e,55);for(const t of Object.keys(i))this.At(t,e),this.Pt(i[t],e)}yt(t,e){const i=t.values||[];this.Tt(e,50);for(const t of i)this.Pt(t,e)}ft(t,e){this.Tt(e,37),ls.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}Ns.St=new Ns;
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
new Uint8Array(0);class ks{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new ks(t,ks.DEFAULT_COLLECTION_PERCENTILE,ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ks.DEFAULT_COLLECTION_PERCENTILE=10,ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ks.DEFAULT=new ks(41943040,ks.DEFAULT_COLLECTION_PERCENTILE,ks.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ks.DISABLED=new ks(-1,0,0);function Os(){return"undefined"!=typeof document?document:null}
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
class Ps{constructor(t,e,i=1e3,n=1.5,r=6e4){this.si=t,this.timerId=e,this.Fo=i,this.Mo=n,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),i=Math.max(0,Date.now()-this.Bo),n=Math.max(0,e-i);n>0&&Hr("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
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
class Ms{constructor(t,e,i,n,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,n,r){const s=Date.now()+i,o=new Ms(t,e,s,n,r);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Wr(Gr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xs(t,e){if(Vr("AsyncQueue",`${e}: ${t}`),us(t))return new Wr(Gr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
class Us{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=Fr.UNAUTHENTICATED,this.clientId=ss.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Wr(Gr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=xs(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
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
function Fs(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
 */}const js=new Map;
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
 */function Bs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const i=(e=t).constructor?e.constructor.name:null;return i?`a custom ${i} object`:"an object"}}var e;return"function"==typeof t?"a function":Xr()}function Hs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Wr(Gr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Bs(t);throw new Wr(Gr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}
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
class Vs{constructor(t){var e,i;if(void 0===t.host){if(void 0!==t.ssl)throw new Wr(Gr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Wr(Gr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,i,n){if(!0===e&&!0===n)throw new Wr(Gr.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fs(null!==(i=t.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Wr(Gr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Wr(Gr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Wr(Gr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,i=t.experimentalLongPollingOptions,e.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,i}}class $s{constructor(t,e,i,n){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Wr(Gr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Wr(Gr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vs(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Jr;switch(t.type){case"firstParty":return new es(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Wr(Gr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=js.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),js.delete(t),e.terminate())}(this),Promise.resolve()}}function zs(t,e,i,n={}){var r;const s=(t=Hs(t,$s))._getSettings(),o=`${e}:${i}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let e,i;if("string"==typeof n.mockUserToken)e=n.mockUserToken,i=Fr.MOCK_USER;else{e=_(n.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new Wr(Gr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new Fr(s)}t._authCredentials=new Qr(new Yr(e,i))}}
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
class Xs{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ps(this,"async_queue_retry"),this.iu=()=>{const t=Os();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=Os();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Os();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new qr;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!us(t))throw t;Hr("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;throw Vr("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,i){this.su(),this.ru.indexOf(t)>-1&&(e=0);const n=Ms.createAndSchedule(this,t,e,i,(t=>this.au(t)));return this.Xa.push(n),n}su(){this.eu&&Xr()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class Ks extends $s{constructor(t,e,i,n){super(t,e,i,n),this.type="firestore",this._queue=new Xs,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gs(this),this._firestoreClient.terminate()}}function Gs(t){var e,i,n;const r=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",h=t._persistenceKey,new _s(o,a,h,(l=r).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Fs(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,h,l;t._firestoreClient=new Us(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(i=r.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=r.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */!function(t,e=!0){jr="10.7.1",pt(new O("firestore",((t,{instanceIdentifier:i,options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Ks(new Zr(t.getProvider("auth-internal")),new ns(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Wr(Gr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cs(t.options.projectId,e)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC").setMultipleInstances(!0)),bt("@firebase/firestore","4.4.0",t),bt("@firebase/firestore","4.4.0","esm2017")}();const Ws=yt({apiKey:"AIzaSyAKYrF2YoqGKSaSU407C9X91DqaZMAg4q4",authDomain:"filmoteka-urraccon.firebase.com",projectId:"filmoteka-urraccon",storageBucket:"filmoteka-urraccon.appspot.com",messagingSenderId:"712511464775",appId:"1:712511464775:web:f28be5eb7fc38469c69862"}),qs=function(t,e){const i="string"==typeof t?t:e||"(default)",n=gt("object"==typeof t?t:vt(),"firestore").getImmediate({identifier:i});if(!n._initialized){const t=A("firestore");t&&zs(n,...t)}return n}(Ws);console.log(Ws),console.log(qs);
//# sourceMappingURL=index.a871afe4.js.map
