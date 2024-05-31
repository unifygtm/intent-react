var Q=Object.defineProperty,Y=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,C=(t,e,n)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))et.call(e,n)&&C(t,n,e[n]);if(w)for(var n of w(e))nt.call(e,n)&&C(t,n,e[n]);return t},k=(t,e)=>Y(t,tt(e)),R="https://unifyintent.com/analytics/api/v1",rt=/^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/;function S(t,e){var n;return((n=e==null?void 0:e.getTime())!=null?n:new Date().getTime())+t*60*1e3}var K=()=>({path:window.location.pathname,query:it(window.location.href),referrer:document.referrer,title:document.title,url:window.location.href}),j=()=>({userAgent:window.navigator.userAgent,userAgentData:window.navigator.userAgentData}),M=t=>{if(rt.test(t))return t},it=t=>{let e=new URL(t).searchParams,n={};for(let[r,o]of e.entries())n[r]=o;return n},ot=()=>{var t,e,n,r,o;let i=new URL(location.href),a={source:(t=i.searchParams.get("utm_source"))!=null?t:void 0,medium:(e=i.searchParams.get("utm_medium"))!=null?e:void 0,campaign:(n=i.searchParams.get("utm_campaign"))!=null?n:void 0,term:(r=i.searchParams.get("utm_term"))!=null?r:void 0,content:(o=i.searchParams.get("utm_content"))!=null?o:void 0};return k(h({locale:navigator.language},j()),{utm:a})},at=class{constructor(t){this.getBaseActivityPayload=()=>({type:this.getActivityType(),anonymousUserId:this._intentContext.identityManager.getOrCreateAnonymousUserId(),sessionId:this._intentContext.sessionManager.getOrCreateSession().sessionId,context:ot(),timestamp:new Date().toISOString()}),this._intentContext=t}track(){this._intentContext.apiClient.post(this.getActivityURL(),h(h({},this.getBaseActivityPayload()),this.getActivityData()))}},z=at,st=`${R}/page`,L=class extends z{constructor(){super(...arguments),this.getActivityData=()=>({type:"page",properties:K()})}getActivityType(){return"page"}getActivityURL(){return st}},ut=`${R}/identify`,V=class extends z{constructor(t,{email:e}){super(t),this.getActivityData=()=>({type:"identify",traits:{email:this._email}}),this._email=e}getActivityType(){return"identify"}getActivityURL(){return ut}},y,ct=new Uint8Array(16);function lt(){if(!y&&(y=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(ct)}var s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));function ht(t,e=0){return s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]}var dt=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),x={randomUUID:dt};function ft(t,e,n){if(x.randomUUID&&!e&&!t)return x.randomUUID();t=t||{};let r=t.random||(t.rng||lt)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let o=0;o<16;++o)e[n+o]=r[o];return e}return ht(r)}var Z=ft;function p(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}var yt={read:function(t){return t[0]==='"'&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function _(t,e){function n(o,i,a){if(typeof document!="undefined"){a=p({},e,a),typeof a.expires=="number"&&(a.expires=new Date(Date.now()+a.expires*864e5)),a.expires&&(a.expires=a.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var l in a)a[l]&&(c+="; "+l,a[l]!==!0&&(c+="="+a[l].split(";")[0]));return document.cookie=o+"="+t.write(i,o)+c}}function r(o){if(!(typeof document=="undefined"||arguments.length&&!o)){for(var i=document.cookie?document.cookie.split("; "):[],a={},c=0;c<i.length;c++){var l=i[c].split("="),X=l.slice(1).join("=");try{var v=decodeURIComponent(l[0]);if(a[v]=t.read(X,v),o===v)break}catch(Wt){}}return o?a[o]:a}}return Object.create({set:n,get:r,remove:function(o,i){n(o,"",p({},i,{expires:-1}))},withAttributes:function(o){return _(this.converter,p({},this.attributes,o))},withConverter:function(o){return _(p({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(t)}})}var U=_(yt,{path:"/"}),d=typeof Buffer=="function",b=typeof TextDecoder=="function"?new TextDecoder:void 0,P=typeof TextEncoder=="function"?new TextEncoder:void 0,pt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=Array.prototype.slice.call(pt),g=(t=>{let e={};return t.forEach((n,r)=>e[n]=r),e})(f),gt=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,u=String.fromCharCode.bind(String),E=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),mt=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),H=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),vt=t=>{let e,n,r,o,i="",a=t.length%3;for(let c=0;c<t.length;){if((n=t.charCodeAt(c++))>255||(r=t.charCodeAt(c++))>255||(o=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");e=n<<16|r<<8|o,i+=f[e>>18&63]+f[e>>12&63]+f[e>>6&63]+f[e&63]}return a?i.slice(0,a-3)+"===".substring(a):i},N=typeof btoa=="function"?t=>btoa(t):d?t=>Buffer.from(t,"binary").toString("base64"):vt,It=d?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let n=0,r=t.length;n<r;n+=4096)e.push(u.apply(null,t.subarray(n,n+4096)));return N(e.join(""))},At=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?u(192|e>>>6)+u(128|e&63):u(224|e>>>12&15)+u(128|e>>>6&63)+u(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return u(240|e>>>18&7)+u(128|e>>>12&63)+u(128|e>>>6&63)+u(128|e&63)}},_t=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,wt=t=>t.replace(_t,At),D=d?t=>Buffer.from(t,"utf8").toString("base64"):P?t=>It(P.encode(t)):t=>N(wt(t)),$=(t,e=!1)=>e?mt(D(t)):D(t),Ct=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,St=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),n=e-65536;return u((n>>>10)+55296)+u((n&1023)+56320);case 3:return u((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return u((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},xt=t=>t.replace(Ct,St),Ut=t=>{if(t=t.replace(/\s+/g,""),!gt.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,n="",r,o;for(let i=0;i<t.length;)e=g[t.charAt(i++)]<<18|g[t.charAt(i++)]<<12|(r=g[t.charAt(i++)])<<6|(o=g[t.charAt(i++)]),n+=r===64?u(e>>16&255):o===64?u(e>>16&255,e>>8&255):u(e>>16&255,e>>8&255,e&255);return n},q=typeof atob=="function"?t=>atob(H(t)):d?t=>Buffer.from(t,"base64").toString("binary"):Ut,bt=d?t=>E(Buffer.from(t,"base64")):t=>E(q(t).split("").map(e=>e.charCodeAt(0))),Pt=d?t=>Buffer.from(t,"base64").toString("utf8"):b?t=>b.decode(bt(t)):t=>xt(q(t)),Et=t=>H(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),Dt=t=>Pt(Et(t)),I="test";function T(t){return $(JSON.stringify(t))}function Tt(t){return JSON.parse(Dt(t))}function Ot(){try{return localStorage.setItem(I,I),localStorage.removeItem(I),!0}catch(t){return!1}}var Bt=class{constructor(t){this.get=e=>{let n=this.retrieveValue(this.buildKey(e));return n?Tt(n):null},this.set=(e,n)=>{this.storeValue(this.buildKey(e),T(n))},this.buildKey=e=>T(`${this._writeKey}_${e}`),this._writeKey=t}},J=Bt,Ft=class extends J{retrieveValue(t){var e;return(e=U.get(t))!=null?e:null}storeValue(t,e){U.set(t,e)}},kt=class extends J{constructor(t){super(t),this.retrieveValue=e=>this._localStorageAvailable?localStorage.getItem(e):null,this.storeValue=(e,n)=>{this._localStorageAvailable&&localStorage.setItem(e,n)},this._localStorageAvailable=Ot()}},O="anonymousUserId",Rt=class{constructor(t){this.getOrCreateAnonymousUserId=()=>{if(this._anonymousUserId)return this._anonymousUserId;let e=this.getAnonymousUserId()||this.createAnonymousUserId();return this._anonymousUserId=e,e},this.getAnonymousUserId=()=>this._storageService.get(O),this.createAnonymousUserId=()=>{let e=Z();return this._storageService.set(O,e),e},this._storageService=new Ft(t),this._anonymousUserId=null}},B="clientSession",F=30,Kt=class{constructor(t){this.getOrCreateSession=()=>this.getAndUpdateSession()||this.createSession(),this.getAndUpdateSession=()=>{let e=this._currentSession||this.getStoredSession();if(e&&e.expiration>new Date().getTime())return this.updateSessionExpiration(e)},this.createSession=(e=F)=>{let n=h({sessionId:Z(),startTime:new Date,expiration:S(e),initial:K()},j());return this._currentSession=n,this.setStoredSession(n),n},this.updateSessionExpiration=(e,n=F)=>{let r=k(h({},e),{expiration:S(n)});return this._currentSession=r,this.setStoredSession(r),r},this.getStoredSession=()=>this._storageService.get(B),this.setStoredSession=e=>{this._storageService.set(B,e)},this._writeKey=t,this._storageService=new kt(this._writeKey),this._currentSession=null}},jt=class{constructor(t){this.post=(e,n)=>{let r=JSON.stringify(n),o=this.getAuthString(this._writeKey);if(fetch)fetch(e,{method:"POST",body:r,credentials:"include",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:this.getAuthString(this._writeKey)},keepalive:!0}).catch(()=>{});else{let i=new XMLHttpRequest;i.open("POST",e,!0),i.setRequestHeader("Content-type","application/json; charset=UTF-8"),i.setRequestHeader("Authorization",o),i.send(r)}},this._writeKey=t}getAuthString(t){return`Basic ${$(t+":")}`}},A=class{constructor(t){this.startAutoPage=()=>{this._historyMonitored||this.monitorHistory(),this._autoPage=!0},this.stopAutoPage=()=>{this._autoPage=!1},this.startAutoIdentify=()=>{this._autoIdentify=!0,this.refreshMonitoredInputs(),setInterval(this.refreshMonitoredInputs,2e3)},this.stopAutoIdentify=()=>{this._monitoredInputs.forEach(r=>{r.isConnected&&(r.removeEventListener("blur",this.handleInputBlur),r.removeEventListener("keydown",this.handleInputKeydown))}),this._monitoredInputs.clear(),this._autoIdentify=!1},this.monitorHistory=()=>{let r=history.pushState;history.pushState=(...i)=>{r.apply(history,i),this.maybeTrackPage()};let o=history.replaceState;history.replaceState=(...i)=>{let a=h({},window.location);o.apply(history,i),Mt(a,window.location)&&this.maybeTrackPage()},window.addEventListener("popstate",()=>{this.maybeTrackPage()}),this._historyMonitored=!0},this.maybeTrackPage=()=>{this._autoPage&&new L(this._intentContext).track()},this.refreshMonitoredInputs=()=>{this._autoIdentify&&(this._monitoredInputs.forEach(r=>{r.isConnected||this._monitoredInputs.delete(r)}),Array.from(document.getElementsByTagName("input")).filter(r=>!this._monitoredInputs.has(r)&&zt(r)).forEach(r=>{r.addEventListener("blur",this.handleInputBlur),r.addEventListener("keydown",this.handleInputKeydown),this._monitoredInputs.add(r)}))},this.handleInputBlur=r=>{this._autoIdentify&&this.maybeIdentifyInputEmail(r)},this.handleInputKeydown=r=>{this._autoIdentify&&r.key==="Enter"&&this.maybeIdentifyInputEmail(r)},this.maybeIdentifyInputEmail=r=>{var o;if(!this._autoIdentify||!(r.target instanceof HTMLInputElement))return;let i=(o=r.target)==null?void 0:o.value;if(i){if(!M(i)||this._submittedEmails.has(i))return;new V(this._intentContext,{email:i}).track(),this._submittedEmails.add(i)}},this.__getMonitoredInputs=()=>this._monitoredInputs,this.__getSubmittedEmails=()=>this._submittedEmails;var e,n;this._intentContext=t,this._monitoredInputs=new Set,this._submittedEmails=new Set,this._autoPage=(e=t.clientConfig.autoPage)!=null?e:!1,this._autoIdentify=(n=t.clientConfig.autoIdentify)!=null?n:!1,this._historyMonitored=!1,this._autoPage&&(this.startAutoPage(),this.maybeTrackPage()),this._autoIdentify&&this.startAutoIdentify()}};function Mt(t,e){return t.hostname!==e.hostname||t.pathname!==e.pathname}function zt(t){return t.type==="email"||t.type==="text"}var Lt={autoPage:!1,autoIdentify:!1},W=class{constructor(t,e=Lt){this.page=()=>{new L(this._context).track()},this.identify=i=>{let a=M(i);return a?(new V(this._context,{email:a}).track(),!0):!1},this.startAutoPage=()=>{this._intentAgent||(this._intentAgent=new A(this._context)),this._intentAgent.startAutoPage()},this.stopAutoPage=()=>{var i;(i=this._intentAgent)==null||i.stopAutoPage()},this.startAutoIdentify=()=>{this._intentAgent||(this._intentAgent=new A(this._context)),this._intentAgent.startAutoIdentify()},this.stopAutoIdentify=()=>{var i;(i=this._intentAgent)==null||i.stopAutoIdentify()},window.unify!==void 0&&!Array.isArray(window.unify)&&console.warn("Global UnifyIntentClient already exists, a new one will not be created.");let n=new jt(t),r=new Kt(t);r.getOrCreateSession();let o=new Rt(t);o.getOrCreateAnonymousUserId(),this._context={writeKey:t,clientConfig:e,apiClient:n,sessionManager:r,identityManager:o},(e.autoPage||e.autoIdentify)&&(this._intentAgent=new A(this._context))}};import G,{useState as Vt}from"react";var Zt={client:null},m=G.createContext(Zt);m.displayName="UnifyIntentContext";var Ht=({children:t,writeKey:e,config:n})=>{let[r]=Vt(new W(e,n));return G.createElement(m.Provider,{value:{client:r}},t)},Nt=Ht;import{useContext as $t}from"react";function qt(){let{client:t}=$t(m);if(t===null)throw new Error("useUnifyIntent can only be used within a UnifyIntentProvider.");return t}var Jt=qt;export{Nt as UnifyIntentProvider,Jt as useUnifyIntent};
/*! Bundled license information:

@unifygtm/intent-client/dist/js/client/index.esm.js:
  (*! Bundled license information:
  
  js-cookie/dist/js.cookie.mjs:
    (*! js-cookie v3.0.5 | MIT *)
  *)
*/
