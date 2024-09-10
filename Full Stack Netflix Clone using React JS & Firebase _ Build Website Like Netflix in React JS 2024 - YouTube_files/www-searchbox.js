(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ia(a,a)}
function ia(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ea=b.prototype}
function sa(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ta(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
sa.prototype.A=function(a){this.l=a};
function ua(a,b){a.i={Jd:b,de:!0};a.g=a.o||a.s}
sa.prototype.return=function(a){this.i={return:a};this.g=this.s};
function z(a,b,c){a.g=c;return{value:b}}
sa.prototype.M=function(a){this.g=a};
function va(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function wa(a){a.o=0;var b=a.i.Jd;a.i=null;return b}
function xa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.de?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function ya(a){this.g=new sa;this.l=a}
function za(a,b){ta(a.g);var c=a.g.m;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ua(a.g,g),Ba(a)}a.g.m=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ua(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.de)throw b.Jd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.m?b=Aa(a,a.g.m["throw"],b,a.g.A):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,l=ea.dispatchEvent;if(typeof l==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.Zb(h.resolve,h.reject)};
b.prototype.O=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return typeof r=="function"?function(t){try{k(r(t))}catch(u){m(u)}}:q}
var k,m,p=new b(function(r,q){k=r;m=q});
this.Zb(l(g,k),l(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;this.l==null?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).Zb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function p(t){return function(u){r[t]=u;q--;q==0&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).Zb(p(r.length-1),m),l=h.next();while(!l.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
function Ga(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return k==="object"&&l!==null||k==="function"}
function e(l){if(!ja(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(m.get(l)!=2||m.get(k)!=3)return!1;m.delete(l);m.set(k,4);return!m.has(l)&&m.get(k)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ja(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ja(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;k=="object"||k=="function"?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&ja(h[0],k))for(h=0;h<m.length;h++){var p=m[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:m,index:h,entry:p}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if(l.get(h)!="s"||l.size!=1||l.get({x:4})||l.set({x:4},"t")!=l||l.size!=2)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=h===0?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ga(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ia(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ja(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ja(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ma(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Na:Oa;return E.apply(null,arguments)}
function F(){return Date.now()}
function G(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.Ea=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Pa(a){return a}
;function Qa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Qa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
H(Qa,Error);Qa.prototype.name="CustomError";function Ra(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Sa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ta(a,b){return a<b?-1:a>b?1:0}
;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Va(a){return{valueOf:a}.valueOf()}
;var Wa;function Xa(){if(Wa===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Pa,createScript:Pa,createScriptURL:Pa})}catch(c){C.console&&C.console.error(c.message)}Wa=a}else Wa=a}return Wa}
;var Ya={};function Za(a){this.g=a}
Za.prototype.toString=function(){return this.g+""};
function $a(a){if(a instanceof Za&&a.constructor===Za)return a.g;Ja(a);return"type_error:TrustedResourceUrl"}
function ab(a){var b=Xa();a=b?b.createScriptURL(a):a;return new Za(a,Ya)}
;function bb(a){this.g=a}
bb.prototype.toString=function(){return this.g};
var cb=new bb("about:invalid#zClosurez");function db(a){this.ig=a}
function eb(a){return new db(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var hb=[eb("data"),eb("http"),eb("https"),eb("mailto"),eb("ftp"),new db(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ib(a){for(var b=Fa.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new bb(c.join(""))}
var jb=Va(function(){return typeof URL==="function"}),kb=["data:",
"http:","https:","mailto:","ftp:"],lb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function mb(a){if(a instanceof bb)if(a instanceof bb)a=a.g;else throw Error("");else a=lb.test(a)?a:void 0;return a}
;function nb(a,b){b=mb(b);b!==void 0&&(a.href=b)}
;function ob(a){this.g=a}
ob.prototype.toString=function(){return this.g+""};
function pb(a){var b=Xa();return new ob(b?b.createHTML(a):a)}
function qb(a){if(a instanceof ob)return a.g;throw Error("");}
;function rb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=qb(b)}
;function sb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function tb(a,b){a.src=$a(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function ub(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function vb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function yb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return yb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var zb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ab=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function Cb(a,b){b=zb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Eb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Fb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Gb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hb(a){return a?decodeURI(a):a}
function Ib(a){return Hb(a.match(Gb)[3]||null)}
function Jb(a){var b=a.match(Gb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Kb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
function Nb(a,b){b=Mb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ob(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Pb=/#|$/,Qb=/[?&]($|#)/;function Rb(a){C.setTimeout(function(){throw a;},0)}
;var Sb=Ia(610401301,!1),Tb=Ia(645172343,!0);function Ub(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Vb,Wb=C.navigator;Vb=Wb?Wb.userAgentData||null:null;function Xb(a){return Sb?Vb?Vb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Ub().indexOf(a)!=-1}
;function Yb(){return Sb?!!Vb&&Vb.brands.length>0:!1}
function Zb(){return Yb()?!1:I("Opera")}
function $b(){return Yb()?!1:I("Trident")||I("MSIE")}
function ac(){return Yb()?Xb("Microsoft Edge"):I("Edg/")}
function bc(){return I("Safari")&&!(cc()||(Yb()?0:I("Coast"))||Zb()||(Yb()?0:I("Edge"))||ac()||(Yb()?Xb("Opera"):I("OPR"))||I("Firefox")||I("FxiOS")||I("Silk")||I("Android"))}
function cc(){return Yb()?Xb("Chromium"):(I("Chrome")||I("CriOS"))&&!(Yb()?0:I("Edge"))||I("Silk")}
function dc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ec(){var a=Ub();if($b()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=dc(b);return Zb()?a(["Version","Opera"]):
(Yb()?0:I("Edge"))?a(["Edge"]):ac()?a(["Edg"]):I("Silk")?a(["Silk"]):cc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function fc(){return Sb&&Vb&&Vb.platform?Vb.platform==="Android":I("Android")}
function gc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;var hc=$b(),ic=I("Edge"),jc=fc();var kc=gc()||I("iPod"),lc=I("iPad");!I("Android")||cc();cc();var mc=bc()&&!(gc()||I("iPad")||I("iPod"));var nc={},oc=null;
function pc(a,b){La(a);b===void 0&&(b=0);if(!oc){oc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));nc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];oc[h]===void 0&&(oc[h]=g)}}}b=nc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var qc=typeof Uint8Array!=="undefined",rc=!hc&&typeof btoa==="function";var sc;function tc(){var a=Error();Eb(a,"incident");Rb(a)}
function uc(a){a=Error(a);Eb(a,"warning");return a}
;function vc(){return typeof BigInt==="function"}
;var wc=typeof Symbol==="function"&&typeof Symbol()==="symbol";function xc(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var yc=xc(),zc=xc("2ex"),Ac=xc("1oa");Math.max.apply(Math,x(Object.values({sh:1,qh:2,ph:4,vh:8,uh:16,th:32,kh:64,xh:128,oh:256,nh:512,rh:1024,lh:2048,wh:4096,mh:8192})));var Bc=wc?function(a,b){a[yc]|=b}:function(a,b){a.g!==void 0?a.g|=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Cc=wc?function(a,b){a[yc]&=~b}:function(a,b){a.g!==void 0&&(a.g&=~b)},Dc=wc?function(a){return a[yc]|0}:function(a){return a.g|0},Ec=wc?function(a){return a[yc]}:function(a){return a.g},Fc=wc?function(a,b){a[yc]=b}:function(a,b){a.g!==void 0?a.g=b:Object.defineProperties(a,{g:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Gc(a,b){Fc(b,(a|0)&-14591)}
function Hc(a,b){Fc(b,(a|34)&-14557)}
;var Ic={},Jc={};function Kc(a){return!(!a||typeof a!=="object"||a.g!==Jc)}
function Lc(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Mc(a){return!Array.isArray(a)||a.length?!1:Dc(a)&1?!0:!1}
var Nc,Oc=[];Fc(Oc,55);Nc=Object.freeze(Oc);function Pc(a){if(a&2)throw Error();}
;var Qc=0,Rc=0;function Sc(a){var b=a>>>0;Qc=b;Rc=(a-b)/4294967296>>>0}
function Tc(a){if(a<0){Sc(0-a);var b=w(Uc(Qc,Rc));a=b.next().value;b=b.next().value;Qc=a>>>0;Rc=b>>>0}else Sc(a)}
function Vc(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else vc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Wc(c)+Wc(a));return c}
function Wc(a){a=String(a);return"0000000".slice(a.length)+a}
function Xc(){var a=Qc,b=Rc;b&2147483648?vc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Uc(a,b)),a=b.next().value,b=b.next().value,a="-"+Vc(a,b)):a=Vc(a,b);return a}
function Uc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Yc(a){a.Wh=!0;return a}
;var Zc=Yc(function(a){return typeof a==="number"}),$c=Yc(function(a){return typeof a==="string"}),ad=Yc(function(a){return typeof a==="boolean"});var bd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function cd(a){var b=a;if($c(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Zc(b)&&!Number.isSafeInteger(b))throw Error(String(b));return bd?BigInt(a):a=ad(a)?a?"1":"0":$c(a)?a.trim()||"0":String(a)}
var id=Yc(function(a){return bd?a>=dd&&a<=ed:a[0]==="-"?fd(a,gd):fd(a,hd)}),gd=Number.MIN_SAFE_INTEGER.toString(),dd=bd?BigInt(Number.MIN_SAFE_INTEGER):void 0,hd=Number.MAX_SAFE_INTEGER.toString(),ed=bd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function fd(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;function jd(a){return a.displayName||a.name||"unknown type name"}
var kd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ld(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:kd.test(a)}
function md(a){var b=0;b=b===void 0?0:b;if(!ld(a))throw uc("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return nd(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ld(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),od(b)?a=b:(Tc(a),a=Xc())),a}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=cd(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=vc()?cd(BigInt.asIntN(64,BigInt(a))):cd(pd(a))),a;case "bigint":return cd(BigInt.asIntN(64,
a));default:return cd(qd(a))}case 0:switch(c){case "string":return nd(a);case "bigint":return cd(BigInt.asIntN(64,a));default:return qd(a)}default:return sb(b,"Unknown format requested type for int64")}}
function rd(a){return a==null?a:md(a)}
function od(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function pd(a){if(od(a))return a;if(a.length<16)Tc(Number(a));else if(vc())a=BigInt(a),Qc=Number(a&BigInt(4294967295))>>>0,Rc=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Rc=Qc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Rc*=1E6,Qc=Qc*1E6+d,Qc>=4294967296&&(Rc+=Math.trunc(Qc/4294967296),Rc>>>=0,Qc>>>=0);b&&(b=w(Uc(Qc,Rc)),a=b.next().value,b=b.next().value,Qc=a,Rc=b)}return Xc()}
function qd(a){ld(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Tc(a);var b=Qc,c=Rc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function nd(a){ld(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return pd(a)}
function sd(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function td(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+jd(b)+" but got "+(a&&jd(a.constructor)));return a}
function ud(a,b,c){if(a!=null&&typeof a==="object"&&a.bd===Ic)return a;if(Array.isArray(a)){var d=Dc(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Fc(a,e);return new b(a)}}
;function vd(a){var b=wd(a);if(b)return b;if(Math.random()>.01)return a;if(xd===void 0)if(typeof Proxy!=="function")xd=null;else try{xd=Proxy.toString().indexOf("[native code]")!==-1?Proxy:null}catch(c){xd=null}b=xd;if(!b)return a;b=new b(a,{set:function(c,d,e){yd();c[d]=e;return!0}});
zd(a,b);return b}
function yd(){tc()}
var Ad=void 0,Bd=void 0;function wd(a){var b;return(b=Ad)==null?void 0:b.get(a)}
function zd(a,b){(Ad||(Ad=new WeakMap)).set(a,b);(Bd||(Bd=new WeakMap)).set(b,a)}
var xd=void 0;var Cd;
function Dd(a,b,c){a==null&&(a=Cd);Cd=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=Dc(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Lc(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}Fc(a,d);return a}
;function Ed(a,b){return Fd(b)}
function Fd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return id(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Mc(a))return}else if(qc&&a!=null&&a instanceof Uint8Array){if(rc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=pc(a);return a}}return a}
;function Gd(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Hd(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Mc(a)?void 0:e&&Dc(a)&2?a:Id(a,b,c,d!==void 0,e);else if(Lc(a)){var f={},g;for(g in a)f[g]=Hd(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Id(a,b,c,d,e){var f=d||c?Dc(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Hd(a[g],b,c,d,e);c&&c(f,a);return a}
function Jd(a){return a.bd===Ic?a.toJSON():Fd(a)}
;function Kd(a,b,c){c=c===void 0?Hc:c;if(a!=null){if(qc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Dc(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Fc(a,(d|34)&-12293),a):Id(a,Kd,d&4?Hc:c,!0,!0)}a.bd===Ic&&(c=a.U,d=Ec(c),a=d&2?a:Ld(a,c,d,!0));return a}}
function Ld(a,b,c,d){a=a.constructor;b=Md(b,c,d);Dc(b);Cd=b;b=new a(b);Cd=void 0;return b}
function Md(a,b,c){var d=c||b&2?Hc:Gc,e=!!(b&32);a=Gd(a,b,function(f){return Kd(f,e,d)});
Bc(a,32|(c?2:0));return a}
function Nd(a){var b=a.U,c=Ec(b);return c&2?Ld(a,b,c,!1):a}
;function Od(a,b){a=a.U;return Pd(a,Ec(a),b)}
function Qd(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Pd(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Qd(a,b,e,c)&&zc!=null){var g;a=(g=sc)!=null?g:sc={};g=a[zc]||0;g>=4||(a[zc]=g+1,tc())}return d}return Qd(a,b,e,c)}}
function Rd(a,b,c){var d=a.U,e=Ec(d);Pc(e);Sd(d,e,b,c);return a}
function Sd(a,b,c,d,e){Lc(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Tb){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Fc(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Td(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Ud(a){if(wc){var b;return(b=a[Ac])!=null?b:a[Ac]=new Map}if(Ac in a)return a[Ac];b=new Map;Object.defineProperty(a,Ac,{value:b});return b}
function Vd(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Pd(b,c,g)!=null&&(e!==0&&(c=Sd(b,c,e)),e=g)}a.set(d,e);return e}
function Wd(a,b,c){var d=d===void 0?!1:d;var e=a.U;var f=Ec(e),g=Pd(e,f,c,d);b=ud(g,b,f);b!==g&&b!=null&&Sd(e,f,c,b,d);e=b;if(e==null)return e;a=a.U;f=Ec(a);f&2||(g=Nd(e),g!==e&&(e=g,Sd(a,f,c,e,d)));return e}
function Xd(a,b,c,d){d!=null?td(d,b):d=void 0;return Rd(a,c,d)}
function Yd(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function Zd(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function $d(a,b,c,d){a=a.U;var e=Ec(a);Pc(e);var f,g,h=!!(2&e),l=h?1:2;g&&(g=!h);h=Pd(a,e,b);h=Array.isArray(h)?h:Nc;var k=Dc(h),m=!!(4&k);if(!m){var p=k;p===0&&(p=Yd(p,e));k=h;p|=1;var r=e,q=!!(2&p);q&&(r|=2);for(var t=!q,u=!0,A=0,K=0;A<k.length;A++){var O=ud(k[A],c,r);if(O instanceof c){if(!q){var X=!!(Dc(O.U)&2);t&&(t=!X);u&&(u=X)}k[K++]=O}}K<A&&(k.length=K);p|=4;p=u?p|16:p&-17;p=t?p|8:p&-9;Fc(k,p);q&&Object.freeze(k);k=p}if(g&&!(8&k||!h.length&&(l===1||l===4&&32&k))){Td(k)&&(h=Array.prototype.slice.call(h),
k=Yd(k,e),e=Sd(a,e,b,h));g=h;for(p=0;p<g.length;p++)r=g[p],q=Nd(r),r!==q&&(g[p]=q);k|=8;k=g.length?k&-17:k|16;Fc(g,k)}l===1||l===4&&32&k?Td(k)||(b=k,a=!!(32&k),k|=!h.length||16&k&&(!m||a)?2:2048,k!==b&&Fc(h,k),Object.freeze(h)):(m=l!==5?!1:!!(32&k)||Td(k)||!!wd(h),(l===2||m)&&Td(k)&&(h=Array.prototype.slice.call(h),k=Yd(k,e),k=Zd(k,e),Fc(h,k),e=Sd(a,e,b,h)),Td(k)||(b=k,k=Zd(k,e),k!==b&&Fc(h,k)),m&&(f=vd(h)));f=f||h;c=d!=null?td(d,c):new c;f.push(c);Dc(c.U)&2?Cc(f,8):Cc(f,16)}
function ae(a,b){var c=0;c=c===void 0?0:c;a=Od(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function be(a,b){var c=ce;var d=a.U;c=Vd(Ud(d),d,Ec(d),c);a=Od(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function J(a,b,c){return Rd(a,b,sd(c))}
function de(a,b,c){if(c!=null){if(!Number.isFinite(c))throw uc("enum");c|=0}return Rd(a,b,c)}
;var ee;function fe(a,b,c){this.U=Dd(a,b,c)}
fe.prototype.toJSON=function(){return ge(this)};
fe.prototype.clone=function(){var a=this.U;return Ld(this,a,Ec(a),!1)};
fe.prototype.bd=Ic;fe.prototype.toString=function(){try{return ee=!0,ge(this).toString()}finally{ee=!1}};
function ge(a){var b;ee?b=a.U:b=Id(a.U,Jd,void 0,void 0,!1);var c=!ee;Ec(c?a.U:b);if(a=b.length){var d=b[a-1],e=Lc(d);e?a--:d=void 0;var f=b;if(e){b:{var g=d;var h={};e=!1;if(g)for(var l in g)if(isNaN(+l))h[l]=g[l];else{var k=g[l];Array.isArray(k)&&(Mc(k)||Kc(k)&&k.size===0)&&(k=null);k==null&&(e=!0);k!=null&&(h[l]=k)}if(e){for(var m in h)break b;h=null}else h=g}g=h==null?d!=null:h!==d}for(;a>0;a--){l=f[a-1];if(!(l==null||Mc(l)||Kc(l)&&l.size===0))break;var p=!0}if(f!==b||g||p){if(!c)f=Array.prototype.slice.call(f,
0,a);else if(p||g||h)f.length=a;h&&f.push(h)}p=f}else p=b;return p}
;var he=window;function ie(){}
;function je(){var a=ke;return document.createRange().createContextualFragment(qb(pb(a[0])))}
;function le(a,b){var c=b.createRange();c.selectNode(b.body);a=pb(a);return c.createContextualFragment(qb(a))}
;function me(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function ne(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var oe="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
pe=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["IMG",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["VIDEO",new Map([["src",{ja:5}]])],["AUDIO",new Map([["src",{ja:5}]])]],qe="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
re=[["dir",{ja:3,conditions:Va(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Va(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Va(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Va(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],se=new function(){var a=new Set(qe),b=new Map(re),c=new Map(pe);
this.l=new Set(oe);this.g=c;this.i=a;this.m=b};function te(){this.g=se}
function ue(a,b){var c=document.implementation.createHTMLDocument("");a=ve(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return pb(c)}
function ve(a,b,c){b=le(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(ne(h))if(h=me(h),h===null)h=2;else{var l=a.g;h=h!=="FORM"&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(ne(d))g=we(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function we(a,b,c){var d=me(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(l==null?0:l.has(f))?l.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(l=h.conditions){l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value);k=m.next().value;m=m.next().value;var p=void 0;if((k=(p=b.getNamedItem(k))==null?void 0:p.value)&&!m.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ja){case 1:xe(c,f,g);break;
case 2:a:if(h=void 0,jb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}xe(c,f,h!==void 0&&kb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:xe(c,f,g.toLowerCase());break;case 4:xe(c,f,g);break;case 5:xe(c,f,g);break;case 6:xe(c,f,g)}}return c}
function xe(a,b,c){a.setAttribute(b,c)}
var ye=Va(function(){return new te});function ze(a){var b=Fa.apply(1,arguments);if(b.length===0)return ab(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return ab(c)}
function Ae(a,b,c,d){function e(g,h){g!=null&&(Array.isArray(g)?g.forEach(function(l){return e(l,h)}):(b+=f+encodeURIComponent(h)+"="+encodeURIComponent(g),f="&"))}
var f=b.length?"&":"?";d.constructor===Object&&(d=Object.entries(d));Array.isArray(d)?d.forEach(function(g){return e(g[1],g[0])}):d.forEach(e);
return ab(a+b+c)}
;function Be(a,b){this.width=a;this.height=b}
n=Be.prototype;n.clone=function(){return new Be(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ce(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function De(){return Sb&&Vb?Vb.mobile:!(Sb&&Vb?!Vb.mobile&&(I("iPad")||I("Android")||I("Silk")):I("iPad")||I("Android")&&!I("Mobile")||I("Silk"))&&(I("iPod")||I("iPhone")||I("Android")||I("IEMobile"))}
;function Ee(a){var b=Fe;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ge(){var a=[];Ee(function(b){a.push(b)});
return a}
var Fe={Yg:"allow-forms",Zg:"allow-modals",ah:"allow-orientation-lock",bh:"allow-pointer-lock",dh:"allow-popups",eh:"allow-popups-to-escape-sandbox",fh:"allow-presentation",gh:"allow-same-origin",hh:"allow-scripts",ih:"allow-top-navigation",jh:"allow-top-navigation-by-user-activation"},He=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Ge()});
function Ie(){var a=Je(),b={};Ab(He(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Je(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Ke(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Le=(new Date).getTime();function Me(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Ne(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],A=e[3],K=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var O=A^t&(u^A);var X=1518500249}else O=t^u^A,X=1859775393;else q<60?(O=t&u|A&(t|u),X=2400959708):(O=t^u^A,X=3395469782);O=((p<<5|p>>>27)&4294967295)+O+K+X+r[q]&4294967295;K=A;A=u;u=(t<<30|t>>>2)&4294967295;t=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+K&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(k==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[k++]=p[q++],m++,k==64)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;k<56?c(h,56-k):c(h,64-(k-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;l<64;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Ye:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Oe(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Pe(Me(d),a,c||null)].join(" "):null}
function Pe(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Ab(d,function(h){e.push(h)}),Qe(e.join(" "));
var f=[],g=[];Ab(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Ab(d,function(h){e.push(h)});
a=Qe(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Qe(a){var b=Ne();b.update(a);return b.Ye().toLowerCase()}
;var Re={};function Se(a){this.g=a||{cookie:""}}
n=Se.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Zc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ki;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Zc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Sa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Zc:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Sa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Te=new Se(typeof document=="undefined"?null:document);function Ue(a){return!!Re.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Ve(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ue(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Se(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Ue(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function We(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Se(document)).get(b));return a?Oe(a,c,d):null}
function Xe(a){var b=b===void 0?!1:b;var c=Me(String(C.location.href)),d=[];if(Ve(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Se(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Oe(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ue(b)&&((b=We("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=We("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Ye(){this.Za=this.Za;this.m=this.m}
Ye.prototype.Za=!1;Ye.prototype.dispose=function(){this.Za||(this.Za=!0,this.Ba())};
Ye.prototype[Symbol.dispose]=function(){this.dispose()};
Ye.prototype.addOnDisposeCallback=function(a,b){this.Za?b!==void 0?a.call(b):a():(this.m||(this.m=[]),b&&(a=a.bind(b)),this.m.push(a))};
Ye.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Ze(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Ze.prototype.stopPropagation=function(){this.i=!0};
Ze.prototype.preventDefault=function(){this.defaultPrevented=!0};var $e=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function af(a,b){Ze.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
H(af,Ze);
af.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.l=a;a.defaultPrevented&&af.Ea.preventDefault.call(this)};
af.prototype.stopPropagation=function(){af.Ea.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
af.prototype.preventDefault=function(){af.Ea.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var bf="closure_listenable_"+(Math.random()*1E6|0);var cf=0;function df(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.kc=e;this.key=++cf;this.Rb=this.Yb=!1}
function ef(a){a.Rb=!0;a.listener=null;a.proxy=null;a.src=null;a.kc=null}
;function ff(a){this.src=a;this.listeners={};this.g=0}
ff.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=gf(a,b,d,e);g>-1?(b=a[g],c||(b.Yb=!1)):(b=new df(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
ff.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gf(e,b,c,d);return b>-1?(ef(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function hf(a,b){var c=b.type;c in a.listeners&&Cb(a.listeners[c],b)&&(ef(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function gf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Rb&&f.listener==b&&f.capture==!!c&&f.kc==d)return e}return-1}
;var jf="closure_lm_"+(Math.random()*1E6|0),kf={},lf=0;function mf(a,b,c,d,e){if(d&&d.once)nf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)mf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.ra(b,c,Ma(d)?!!d.capture:!!d,e):pf(a,b,c,!1,d,e)}
function pf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=qf(a);h||(a[jf]=h=new ff(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)$e||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");lf++}}
function rf(){function a(c){return b.call(a.src,a.listener,c)}
var b=tf;return a}
function nf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):pf(a,b,c,!0,d,e)}
function uf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)uf(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=of(c),a&&a[bf])?a.g.remove(String(b),c,d,e):a&&(a=qf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=gf(b,c,d,e)),(c=a>-1?b[a]:null)&&vf(c))}
function vf(a){if(typeof a!=="number"&&a&&!a.Rb){var b=a.src;if(b&&b[bf])hf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);lf--;(c=qf(b))?(hf(c,a),c.g==0&&(c.src=null,b[jf]=null)):ef(a)}}}
function sf(a){return a in kf?kf[a]:kf[a]="on"+a}
function tf(a,b){if(a.Rb)a=!0;else{b=new af(b,this);var c=a.listener,d=a.kc||a.src;a.Yb&&vf(a);a=c.call(d,b)}return a}
function qf(a){a=a[jf];return a instanceof ff?a:null}
var wf="__closure_events_fn_"+(Math.random()*1E9>>>0);function of(a){if(typeof a==="function")return a;a[wf]||(a[wf]=function(b){return a.handleEvent(b)});
return a[wf]}
;function xf(){Ye.call(this);this.g=new ff(this);this.B=this;this.u=null}
H(xf,Ye);xf.prototype[bf]=!0;xf.prototype.addEventListener=function(a,b,c,d){mf(this,a,b,c,d)};
xf.prototype.removeEventListener=function(a,b,c,d){uf(this,a,b,c,d)};
function yf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Ze(b,a):b instanceof Ze?b.target=b.target||a:(e=b,b=new Ze(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=zf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=zf(g,c,!0,b)&&e,b.i||(e=zf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=zf(g,c,!1,b)&&e}
xf.prototype.Ba=function(){xf.Ea.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ef(d[e]);delete a.listeners[c];a.g--}}this.u=null};
xf.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function zf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Rb&&g.capture==c){var h=g.listener,l=g.kc||g.src;g.Yb&&hf(a.g,g);e=h.call(l,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Af(a){xf.call(this);var b=this;this.A=this.i=0;this.Da=a!=null?a:{Ga:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return z(e,Bf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||Cf(this)}
y(Af,xf);function Df(){var a=Ef;Af.g||(Af.g=new Af(a));return Af.g}
Af.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Da.xa(this.A);delete Af.g};
Af.prototype.ya=function(){return this.l};
function Cf(a){a.A=a.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):z(c,Bf(a),3):z(c,Bf(a),3);Cf(a);c.g=0})},3E4)}
function Bf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.Da.Ga(function(){d.abort()},b||2E4)),z(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Da.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?yf(a,"networkstatus-online"):yf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.M(3)}})})}
;function Ff(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Ff.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Gf(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Hf(a){typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(If||(If=Jf()),If(a)):C.setImmediate(a)}
var If;function Jf(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Ce("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=E(function(l){if((h=="*"||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Ed;c.Ed=null;e()}};
return function(e){d.next={Ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Kf(){this.l=this.g=null}
Kf.prototype.add=function(a,b){var c=Lf.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
Kf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var Lf=new Ff(function(){return new Mf},function(a){return a.reset()});
function Mf(){this.next=this.scope=this.g=null}
Mf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Mf.prototype.reset=function(){this.next=this.scope=this.g=null};var Nf,Of=!1,Pf=new Kf;function Qf(a,b){Nf||Rf();Of||(Nf(),Of=!0);Pf.add(a,b)}
function Rf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Nf=function(){a.then(Sf)}}else Nf=function(){Hf(Sf)}}
function Sf(){for(var a;a=Pf.remove();){try{a.g.call(a.scope)}catch(b){Rb(b)}Gf(Lf,a)}Of=!1}
;function Tf(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=ie)try{var b=this;a.call(void 0,function(c){Uf(b,2,c)},function(c){Uf(b,3,c)})}catch(c){Uf(this,3,c)}}
function Vf(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Vf.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Wf=new Ff(function(){return new Vf},function(a){a.reset()});
function Xf(a,b,c){var d=Wf.get();d.i=a;d.l=b;d.context=c;return d}
Tf.prototype.then=function(a,b,c){return Yf(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Tf.prototype.$goog_Thenable=!0;Tf.prototype.cancel=function(a){if(this.g==0){var b=new Zf(a);Qf(function(){$f(this,b)},this)}};
function $f(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?$f(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):ag(c),bg(c,e,3,b)))}a.i=null}else Uf(a,3,b)}
function cg(a,b){a.l||a.g!=2&&a.g!=3||dg(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Yf(a,b,c,d){var e=Xf(null,null,null);e.g=new Tf(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);l===void 0&&h instanceof Zf?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;cg(a,e);return e.g}
Tf.prototype.B=function(a){this.g=0;Uf(this,2,a)};
Tf.prototype.D=function(a){this.g=0;Uf(this,3,a)};
function Uf(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Tf){cg(d,Xf(e||ie,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var l=d.then;if(typeof l==="function"){eg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,dg(a),b!=3||c instanceof Zf||fg(a,c))}}
function eg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function dg(a){a.s||(a.s=!0,Qf(a.A,a))}
function ag(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Tf.prototype.A=function(){for(var a;a=ag(this);)bg(this,a,this.g,this.u);this.s=!1};
function bg(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,gg(b,c,d);else try{b.m?b.i.call(b.context):gg(b,c,d)}catch(e){hg.call(null,e)}Gf(Wf,b)}
function gg(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function fg(a,b){a.o=!0;Qf(function(){a.o&&hg.call(null,b)})}
var hg=Rb;function Zf(a){Qa.call(this,a)}
H(Zf,Qa);Zf.prototype.name="cancel";function ig(a,b){xf.call(this);this.i=a||1;this.l=b||C;this.o=E(this.Rg,this);this.s=F()}
H(ig,xf);n=ig.prototype;n.enabled=!1;n.Ka=null;n.Rg=function(){if(this.enabled){var a=F()-this.s;a>0&&a<this.i*.8?this.Ka=this.l.setTimeout(this.o,this.i-a):(this.Ka&&(this.l.clearTimeout(this.Ka),this.Ka=null),yf(this,"tick"),this.enabled&&(jg(this),this.start()))}};
n.start=function(){this.enabled=!0;this.Ka||(this.Ka=this.l.setTimeout(this.o,this.i),this.s=F())};
function jg(a){a.enabled=!1;a.Ka&&(a.l.clearTimeout(a.Ka),a.Ka=null)}
n.Ba=function(){ig.Ea.Ba.call(this);jg(this);delete this.l};var kg=/^[6-9]$/,lg=/<\/?(?:b|em)>/gi;function mg(a){this.g=a}
var ng=new mg({});function og(a){a=pg(a);return pb(a)}
function qg(a){a=pg(a);return ab(a)}
function pg(a){return a===null?"null":a===void 0?"undefined":a}
;function rg(a,b,c,d,e,f){this.A=a instanceof ob?a:og(a);this.g=b;this.l=c;this.s=d;this.i=e;this.m=f||ng;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
rg.prototype.getHtml=function(){return qb(this.A).toString()};
rg.prototype.u=function(){return this.l};
rg.prototype.getType=function(){return this.s};var sg=/^\s/,tg=/\s+/,ug=/\s+/g,vg=/^\s+|\s+$/g,wg=/^\s+$/,xg=/<[^>]*>/g,yg=/&nbsp;/g,zg=/&#x3000;/g,Ag=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Bg=document.getElementsByTagName("head")[0],Cg=0,Dg=1;function Eg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Fg(a,b){function c(){return b}
b===void 0&&(b=a);return{Mb:c,Sd:function(){return a},
tf:c,Th:function(){return a<b},
equals:function(d){return d&&a==d.Sd()&&b==d.tf()}}}
function Gg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Hg(a,b){var c=[],d;for(d in a)Gg(d,a[d],c,b);return c.join("&")}
function Ig(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Jg(a){return!!a&&!wg.test(a)}
function Kg(a){for(var b=Ag.length,c=0;c<b;c+=2)a=a.replace(Ag[c],Ag[c+1].source);return a}
function Lg(a){for(var b=Ag.length,c=0;c<b;c+=2)a=a.replace(Ag[c+1],Ag[c].source);a=a.replace(yg," ");return a.replace(zg,"\u3000")}
function Mg(a,b){return a&&(a.indexOf(" ")>-1||tg.test(a))?(a=a.replace(ug," "),a.replace(b?vg:sg,"")):a}
function Ng(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Og(){}
function Pg(a){var b=Qg;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Rg(){return 0}
function Sg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Tg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(zb(b,173)!=-1?14:1));return a}
;function Ug(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(Cg++).toString(36);this.B=this.g.toLowerCase();this.l=Mg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Ug.prototype.getId=function(){return this.u};
function Vg(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Wg(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Xg(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=ng)}
Xg.prototype.getType=function(){return this.s};function Yg(){}
Yg.prototype.xd=function(){};
Yg.prototype.redirect=function(){};
Yg.prototype.wd=function(){return""};
Yg.prototype.ge=function(){};function Zg(){this.l={};this.g={}}
Zg.prototype.set=function(a,b){this.l[a]=b};
Zg.prototype.has=function(a){return!!this.l[a]};
function $g(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function ah(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(bh);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.ge(this.o);this.o.Se();for(g=0;a=this.g[g++];)a.N(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.lb(this.config_);
for(g=0;a=this.g[g++];)a.P(this.config_);this.l=!0}
function ch(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Fa();a.l=!1}}
ah.prototype.isActive=function(){return this.l};
ah.prototype.get=function(a){return this.u[a]};
function dh(a,b){return a.m[b]||[]}
function bh(a,b){a=Pg(a.getType());b=Pg(b.getType());return a<0?1:b<0?-1:a-b}
var Qg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function L(a){this.l=a}
n=L.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.lb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Fa=function(){};function eh(){this.l=149;this.g={};this.i=0}
y(eh,L);n=eh.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.ob()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.dc;this.u=b.wc;this.m=b.Be}};
n.Fa=function(){fh(this);this.i=0};
n.ze=function(a,b,c){gh(this,a.getId(),a.g,b,c);return!0};
n.ob=function(){return 1};
n.Oc=function(){return this.i};
n.Kc=function(a){var b=this.g[a];b&&(hh(b),delete this.g[a])};
function gh(a,b,c,d,e){a.config_.Id||fh(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Kc(b)}};
a.g[b]=f;f.send(null)}
function fh(a){for(var b in a.g)hh(a.g[b]);a.g={}}
function hh(a){a.onreadystatechange=Og;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var ih;function jh(){this.l=153}
y(jh,L);function kh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function lh(a){this.o=a}
lh.prototype.getType=function(){return this.o};
lh.prototype.s=function(){return!0};function mh(a){this.l=152;this.D=a}
H(mh,L);mh.prototype.yb=Og;var nh=$b(),oh;if(oh=nh){for(var ph=ec(),qh=0,rh=Sa(String(ph)).split("."),sh=Sa("10").split("."),th=Math.max(rh.length,sh.length),uh=0;qh==0&&uh<th;uh++){var vh=rh[uh]||"",wh=sh[uh]||"";do{var xh=/(\d*)(\D*)(.*)/.exec(vh)||["","","",""],yh=/(\d*)(\D*)(.*)/.exec(wh)||["","","",""];if(xh[0].length==0&&yh[0].length==0)break;qh=Ta(xh[1].length==0?0:parseInt(xh[1],10),yh[1].length==0?0:parseInt(yh[1],10))||Ta(xh[2].length==0,yh[2].length==0)||Ta(xh[2],yh[2]);vh=xh[3];wh=yh[3]}while(qh==0)}oh=qh>=0}
var zh=oh,Ah=I("Gecko")&&!(Ub().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Bh=Zb(),Ch=Ub().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");bc();var Dh=cc(),Eh=De()&&bc(),Fh=fc(),Gh=Sb&&Vb&&Vb.platform?Vb.platform==="macOS":I("Macintosh"),Hh=De();var Ih;yb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Jh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Kh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Ih||(c={},Ih=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Ih,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Lh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Mh(a,b){var c="";b&&(c=b.id);Kh(a,"activedescendant",c)}
;var Nh=document.documentElement.style.opacity!=void 0,Oh={rtl:"right",ltr:"left"};function Ph(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Qh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Ac:b,Sa:c}}
function Rh(a){try{return Sh(a).activeElement==a}catch(b){}return!1}
function M(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function N(a){return M("div",a)}
function Th(a,b){a.innerHTML!=b&&rb(a,og(b))}
function Uh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Oh[b])}
function Vh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Wh(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Vh(a)}
function Xh(a){var b=M("a");nb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Yh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Ie:c,Xd:b}}
function Sh(a){return a?a.ownerDocument||a.document:window.document}
function Zh(a){return a?(a=Sh(a),a.defaultView||a.parentWindow):window}
function $h(){return Nh?"opacity":"filter"}
function ai(a){return Nh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function bi(){this.o=507;ci(this)}
y(bi,lh);bi.prototype.g=function(){return this.i};
function di(a,b,c,d){ci(a,c,d);rb(a.l,ue(ye,b))}
function ci(a,b,c){a.i=N("sbfl_a");a.l=N("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var ei=[30,35,33,41],fi=[39,10,21];function gi(a,b){mh.call(this,507);this.m=a;this.g=b}
y(gi,mh);gi.prototype.N=function(a){this.i=a.get(128)};
gi.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
gi.prototype.Gb=function(){return new bi};
function hi(a){return a.map(function(b){return{label:b.g}})}
gi.prototype.zb=function(a,b){a=Bb(this.i.m,function(c){a:if(ei.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(fi),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(di(b,this.m,hi(a),this.g),b.g().style.display=""):b.g().style.display="none"};var ke=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),ii=ha(["#ps"]);
function ji(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=N("sbpqs_d");this.u=N();this.O=M("span","sbpqs_a");this.J&&(this.l=M("a"),nb(this.l,ib(ii)),this.l.className="sbsb_i",this.I=N("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=N("sbpqs_c"),rb(this.m,ue(ye,this.Y)),Jh(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(ji,lh);ji.prototype.g=function(){return this.i};
ji.prototype.s=function(){return this.B};
function ki(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";rb(a.O,ue(ye,b));a.J&&(a.m.style.display="none",b=je(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){li(a,f)},a.l.title=e)}
function li(a,b){a.A=!0;mi(a.X,a.ca,function(){a.A&&(ni(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&oi(a.H),a.D.g==a.F&&(pi(a.D),qi(a.H)),a.B=!1)});
Wh(b)}
;function ri(){mh.call(this,35)}
y(ri,mh);n=ri.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.qd;this.s=a.ld;this.o=a.kd};
n.Gb=function(){return new ji(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.zb=function(a,b){ki(b,a.getHtml(),a.g,a.l,this.s)};
n.yb=function(a,b,c){si(c,b.g,1)};function ti(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=N("sbpqs_d");this.m=N();this.O=M("span","sbpqs_a");this.J&&(this.u=M("a"),nb(this.u,"#ps"),this.u.className="sbsb_i",this.I=N("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=N("sbpqs_c"),rb(this.i,ue(ye,this.Y)),Jh(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(ti,lh);ti.prototype.g=function(){return this.l};
ti.prototype.s=function(){return this.B};
ti.prototype.ea=function(a){this.A=!0;mi(this.X,this.ca,E(this.na,this));return Wh(a)};
ti.prototype.na=function(){this.A&&(ni(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&oi(this.H),this.D.g==this.F&&(pi(this.D),qi(this.H)),this.B=!1)};function ui(){mh.call(this,35)}
y(ui,mh);n=ui.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.qd;this.s=a.ld;this.o=a.kd};
n.Gb=function(a){return new ti(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.zb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l;var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";rb(b.O,ue(ye,c));b.J&&(b.i.style.display="none",rb(b.u,ue(ye,e)),b.u.onclick=E(b.ea,b))};
n.yb=function(a,b,c){si(c,b.g,1)};function vi(){this.l=134;this.i={}}
y(vi,L);n=vi.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=E(this.Ne,this)};
n.P=function(a){this.A=qg("//"+(a.md||"clients1."+a.dc)+"/complete/deleteitems");this.s=a.ud;this.o=a.authuser;this.u=a.clientName};
n.Fa=function(){wi(this)};
function wi(a){a.g&&(xi.removeChild(a.g),a.g=null)}
n.Ne=function(a){wi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var xi=Bg;function yi(){this.l=189}
y(yi,L);yi.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
yi.prototype.ga=function(a){this.o=a.nf};
yi.prototype.P=function(a){this.m=a.ud;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(E(this.B,this),a),this.o=!1)};
function mi(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Ig(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=M("script");b=$a(b).toString();var d=b.split(/[?#]/),e=/[?]/.test(b)?"?"+d[1]:"";c=Ae(d[0],e,/[#]/.test(b)?"#"+(e?d[2]:d[1]):"",c);tb(a.g,c);xi.appendChild(a.g)}
yi.prototype.B=function(){var a=zi(this.A,"",void 0,void 0,!0);Ai(this.i,a);Bi(this.i)};function Ci(){this.l=156}
y(Ci,L);Ci.prototype.N=function(a){this.m=a.get(189)};
Ci.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Ig(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Wg(a,d,c[d]);return 1};
Ci.prototype.g=function(){return 12};function Di(a){this.l=156;this.o=a;this.m=null}
H(Di,L);Di.prototype.i=function(a){var b=1,c=a.D;a=Jg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Di.prototype.g=function(){return 2};
Di.prototype.N=function(a){this.m=a.get(128)};function Ei(){this.l=157}
y(Ei,L);function Fi(){this.l=156}
y(Fi,L);Fi.prototype.i=function(a){var b=Ig(Fb(window.location.href));b.v&&Wg(a,"video_id",b.v,!0);return 1};
Fi.prototype.g=function(){return 24};function Gi(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(Gi,L);Gi.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Gi.prototype.ga=function(a){this.m=a.jd;this.H=a.kf};
function Hi(a,b){a.s=b;a.F.pd(a.s)}
function Ii(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Ji(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Ji(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new rg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Ki(a.g,c,!1);return!1}
;function Li(){this.l=156}
y(Li,L);Li.prototype.N=function(a){this.m=a.get(598)};
Li.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Ig(Fb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Hi(b,c)):d||b.s==""?d&&b.s==""&&Hi(b,b.m):Hi(b,"");return a.D!="mousedown"&&a.D!="focus"||!Ii(this.m)?1:2};
Li.prototype.g=function(){return 46};function Mi(){this.l=149;this.i=Bg;this.g={}}
y(Mi,L);n=Mi.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.ob()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.wc,this.A=a.Be,this.F="https:"==document.location.protocol,Ni(this,E(this.Oe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Fa=function(){Ni(this,null);Oi(this)};
n.ze=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Id||Oi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Gg("q",e,a,!0);this.config_.He||Gg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);Gg("gs_gbg",e,a)}e=M("script");this.config_.jg&&e.setAttribute("nonce",this.config_.jg);
tb(e,qg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.ob=function(){return 0};
n.Oc=function(){return 0};
n.Kc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Oi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Oe=function(a){this.m&&this.m(a)};
function Ni(a,b){b||(b=Og);var c=window.google;a.config_.He?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Pi(){this.l=115;this.o={}}
y(Pi,L);n=Pi.prototype;n.N=function(a){this.m=a.get(116);if(a=dh(a,154))for(var b,c=0;b=a[c++];)this.o[Qi]=b};
n.P=function(){this.g=!1};
n.Fa=function(){Ri(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Ri(a){if(a.g){var b=a.m;b.B=0;Si(b.o.m,!1);Ti(b.O,!1);Ti(b.i,!1);Ui(b,b.W);Vi(b.F,9);a.g=!1}}
var Wi={Yd:"left",fg:!0,nb:null,marginWidth:0};function Xi(){this.l=118}
y(Xi,L);n=Xi.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=dh(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;Yi(this)};
function Zi(a){var b={};Vi(a.s,11,b);!b.cancel&&a.config_.Qf&&Hf(function(){var c=a.i;Bi(c.D);$i(c)})}
function aj(a,b){if(a.config_.zc==0||a.config_.zc==2||a.config_.zc==3&&!a.o&&!b)return!1;a:{if(bj(a.i)&&(a.i.i!=null?b=cj(a.i):(b=a.i,b=bj(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Ng(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),dj(a,b,Fg(b.length),"",!0),ej(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function dj(a,b,c,d,e){a.config_.bf&&!a.i.isVisible()&&d=="mousedown"&&fj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Ng(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,gj(a,b),Vi(a.s,1,{Ub:d,nb:a.u}),g=F(),a.H||(a.H=g),a.W=g,Jg(b)&&(e=!0),g=!0;b=zi(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(E(f.clear,f),f.config_.Rf))),a.O&&Wg(b,"gs_is",1),Ai(a.I,b)):g&&(a.i.clear(),Bi(a.I));Vi(a.s,2,{Ub:d})}
function qi(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,hj(a)}catch(b){}}
function ij(a,b){gj(a,b);jj(a.m);Vi(a.s,4,{nb:a.u,input:b})}
function oi(a){a.g!=a.o&&gj(a,a.o);Vi(a.s,5,{input:a.o,Ng:a.i.m,nb:a.u});jj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function kj(a){if(a.ca){if(a.config_.Rc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(gj(this,""),this.m.clear(),Vi(this.s,1),Vi(this.s,16),this.i.clear())};
function lj(a,b){var c=a.m.s.Mb();a.u==b?bj(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.ic&&!a.config_.Ma&&si(a.F,cj(a.i).g,6):a.config_.fe&&aj(a,!0)):a.A&&c==0&&a.A.g()}
function mj(a){var b=a.m.s.Mb();return a.config_.Ma&&bj(a.i)&&a.i.i!=null&&b===a.g.length}
function ej(a,b,c){a.g=b||"";Yi(a);jj(a.m);c||Vi(a.s,4,{nb:a.u,input:a.g})}
function Yi(a){var b=nj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Ab){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function gj(a,b){a.g=a.o=b||"";Yi(a)}
;function oj(){this.l=128}
y(oj,L);n=oj.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=dh(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Rg)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Fa=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;$i(this)};
function Ki(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=bj(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,l=0,k;l<f.length;++l)if(k=f.charAt(l),!pj.test(k)&&(qj.test(k)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=nj(a.O,e);if(a.config_.yg&&bj(a)&&c&&!Hh){a.F=!0;c=a.o;if(c.o){c.F=a.B;rj(c);e=!1;for(f=0;g=b[f++];)sj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Lg(e);b=a.ca;f=0;e&&(b.g||tj(b),uj(b),e in b.m?f=b.m[e]:(Th(b.g,Kg(e)),b.m[e]=f=b.g.offsetWidth,Th(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Jg&&!bj(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!kh(a.m,e););(f=e?e.length:0)&&(f-=vj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=vj(e,c,1));a.config_.Nf&&c.push(1);f&&(f-=vj(e,c,2));f&&vj(e,c,3);a.config_.Vd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;rj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=M("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=N(),g.i.className="sbsb_g",g.config_.Vd&&(g.i.style.paddingBottom="1px"),wj(g,g.config_.Gg,g.i,13),g.config_.Mf?wj(g,g.config_.Ld,g.i,8):g.config_.Of&&wj(g,g.config_.Hg,g.i,14),h.appendChild(g.i),h.onmousedown=E(g.hd,g),h.className=g.config_.yc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=N("sbsb_j "+g.config_.yc);l=M("a");l.id="sbsb_f";nb(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Vc+"&answer=106230");var m=g.config_.kg;k={zg:!0};
k=k===void 0?{}:k;m instanceof ob?k=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),k.gi&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),k.zg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),k.hi&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),k=pb(m));rb(l,k);h.appendChild(l);h.onmousedown=E(g.hd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=M("li"),Kh(h,"hidden",!0),h.l=!0,l=M("div","sbsb_e"),h.appendChild(l)),
g.g.appendChild(h)):sj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),xj(a,a.H.g()));c?Ji(a):a.clear()}
function xj(a,b){if(a.g!=b){var c=a.g;a.g=b;yj(a,c)}}
n.xe=function(){if(bj(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;zj(this,a,E(this.xe,this))}else Ji(this)};
n.ye=function(){if(bj(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;zj(this,a,E(this.ye,this))}else Ji(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function cj(a){return a.i!=null?a.m[a.i]:null}
function bj(a){return!(!a.m||!a.m.length)}
function Ji(a){if(!a.s){a:{var b=a.I,c=Qi;if(c in b.o){if(b.i){if(c==Qi)break a;Ri(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Sg(Wi);if(c.i){var e=c.i.i;d.nb=e.B;d.marginWidth=e.J;var f=e.config_.Og;f||(f=e.B=="rtl"?"right":"left");d.Yd=f}Ui(b,d.nb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.fg;b.ca=d.Yd;Si(b.o.m,!0);Ti(b.O,!0);Ti(b.i,
!0);Vi(b.F,14);b.zd();c.g=!0}a.s=!0}}
function $i(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Ri(a.I),a.s=!1)}
n.clear=function(){$i(this);this.m=null;this.F=!1;this.g!=null&&Aj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function pi(a){a.g!=null&&Aj(a.o,a.g);a.i=a.g=null}
function fj(a,b,c){if(bj(a))Ji(a);else{var d=a.u.o;d&&(b=zi(a.Y,d,b||a.u.m.s,c),Ai(a.D,b))}}
function vj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function zj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(yj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Ma&&(c=c.querySelector('[role="gridcell"]')),c&&Mh(b.u,c)),a.g==null?oi(a.u):(b=a.m[a.g],b.getType(),ej(a.u,b.g))):(Aj(a.o,b),c())}
function yj(a,b){b!=null&&Aj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&Bj(a.g().parentNode,b.X))}
var Qi=Dg++;function Cj(){this.l=154}
y(Cj,L);Cj.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function Dj(){this.l=145;this.g=qj.test("x")}
y(Dj,L);Dj.prototype.sa=function(a){this.i=a.jc()};
function nj(a,b){var c=a.i;a.g&&(qj.test(b)?c="ltr":pj.test(b)||(c="rtl"));return c}
var pj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),qj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Ej(){this.l=117;this.i=[];this.g={Me:1}}
y(Ej,L);function Fj(a,b,c,d,e,f){var g=Gj(a,b);g||(g={},a.i.push({element:b,If:g}));var h=g[c];h||(h=g[c]=[],a=Hj(a,c,b.Me?window:Zh(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({eg:!!f,Yc:!1,priority:e||0,process:d});h.sort(Ij);d.jf=c}
function Jj(a,b,c){if(a=Gj(a,b))if(a=a[c.jf])for(var d=0;b=a[d++];)if(b.process==c){b.Yc=!0;break}}
function Vi(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Ub)}
Ej.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Hj(a,b,c,d){return E(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.dg=!0)}e.Ub=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.Yc?l=!0:h||(g.eg?Kj(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.Yc?d.splice(l,1):++l;if(e.nc)return delete e.nc,e.dg&&(e=c.event||e),Wh(e),e.returnValue=!1}},a)}
function Gj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.If;return null}
function Kj(a,b){Hf(function(){a.process(b)})}
function Ij(a,b){return b.priority-a.priority}
;function Lj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Lj,L);Lj.prototype.P=function(){this.reset()};
Lj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Mj(){this.l=374}
y(Mj,L);Mj.prototype.P=function(){this.reset()};
Mj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Mj.prototype.reset=function(){this.g={}};function Nj(){this.l=120;this.D=-1}
y(Nj,L);Nj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=dh(a,311)};
Nj.prototype.ga=function(a){this.u=a.mg};
Nj.prototype.P=function(a){this.config_=a;this.reset()};
function Oj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Pj(a.config_.clientName);d[28]=Pj(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Oc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Tg(h.getType(),h.i||[]);if(h!=l){e>1&&(f+="l"+e);f+=(l?"j":"")+h;e=0;var l=h}++e}e>1&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var k=Tg(g.getType(),
g.i||[]);k in b&&delete b[k]}if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;k=a.i.i;d[33]=k>-1?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=F()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Bb;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.ef?"a":"")+(a.config_.Gd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.na;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Ab;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=Qj;++b)f=k.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.O;k=0;for(var m in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=Pj(a.config_.sd);m=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,m.m>1&&(l|=2)):m.m>0&&(l|=2);m=l;d[20]=m==0?"":m+"";for(m=0;k=a.F[m++];)l=k.l,Rj[l]&&(d[l]=d[l]==void 0?Pj(k.g()):"");d=d.join(".").replace(Sj,"");if(a.H&&a.u){m=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){g=k.charCodeAt(e);if(g<32||g>127||!Tj[g-32]){k=[];break b}f<<=6;f|=Tj[g-32]-1;b+=6;b>=8&&(l.push(f>>b-8&255),
b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.Xg=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;l<64;++l)k.padding[l]=0;Uj(k);l=Array(64);f.length>64&&(Uj(k),Vj(k,f),f=Wj(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;b<64;++b)l[b]=92;Uj(k);for(b=0;b<64;++b)k.buffer[b]=l[b]^106;Xj(k,k.buffer);k.total=64;Vj(k,Yj(m));m=Wj(k);Uj(k);Xj(k,l);k.total=64;Vj(k,m);m=Wj(k);m=m.slice(0,8);typeof m==="string"&&(m=Yj(m));k="";if(m){l=m.length;for(e=b=f=0;l--;)for(b<<=8,b|=m[e++],f+=8;f>=
6;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=k}else m="";c={oq:c,gs_l:d+"."+m};a.config_.gg&&(c.q=a.m.g);return c}
Nj.prototype.reset=function(){this.s=F();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Bb=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Ab=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=Qj;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Pj(a){return a?a.replace(Zj,"-"):""}
var Sj=/\.+$/,Zj=/\./g,Rj=Eg([23]);function ak(){this.l=121}
y(ak,L);ak.prototype.sa=function(a){this.m=a.Pd()};
ak.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=dh(a,294)};
ak.prototype.P=function(a){this.config_=a};
function si(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Jg(b)||a.config_.jb||a.s&&a.s.jb()){if(kg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=M("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Lc&&bk(a.g,c);a.u.xd(c);ck(a);Vi(a.F,12,{query:b})}}
ak.prototype.redirect=function(a){this.g&&this.config_.Lc&&bk(this.g);this.u.redirect(a);ck(this)};
function ck(a){Bi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function dk(){this.l=553}
y(dk,L);dk.prototype.N=function(a){this.g=dh(a,156);a.get(126)};
dk.prototype.ga=function(){this.g.sort(ek)};
dk.prototype.P=function(a){this.config_=a;this.i=a.jd};
dk.prototype.pd=function(a){this.i=a};
function zi(a,b,c,d,e){b=new Ug(b,c||Fg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Ic!=null&&Wg(b,"ds",a.config_.Ic,!0);a.config_.Ae!=null&&Wg(b,"swl",a.config_.Ae,!0);Wg(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=F(),"cp"in b.A||(a=b.J.Mb(),Wg(b,"cp",a,!0)),Wg(b,"gs_id",b.u),b.i=Hg(b.A)+":"+b.B,b.m=!0);return b}
function ek(a,b){return a.g()-b.g()}
;function fk(){this.l=123;this.A=!1;this.F=-1}
y(fk,L);n=fk.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Dc=a.get(118);this.Ec=a.get(120);this.X=a.get(494);this.Te=a.get(124);this.Cb=a.get(125);this.Db=a.get(230);this.Fc=a.get(127)};
n.P=function(a){this.u=this.Fc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Pe=a.pf;this.Qe=a.Uf;this.Xa=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Fa=function(){this.A=!1;gk(this);this.m=this.o=null;Bi(this)};
function Ai(a,b){if(!(!a.A||a.Qe||a.W&&a.W.l())){var c=!0,d=Vg(b);d>a.F&&(a.F=d);++a.Bb;a.X.g[b.getId()]=!0;Jg(a.Dc.g)||Jg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=F();for(var e in a.m)d-a.m[e].s>2500&&hk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Pe||b.I)&&a.config_.Vf&&(b.o=!0),a.Cb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.ne())}}
function Bi(a){a.Xa=a.F}
function ni(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function ik(a,b){return E(function(c){this.yd(c,b)},a)}
n.ne=function(){gk(this);if(!(this.u.Oc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Gg(d,c[d],b);b=this.u.ze(a,b.join("&"),ik(this,a),E(this.yd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(E(this.ne,this),a)}}};
function gk(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function hk(a,b){a.u.Kc(b);delete a.m[b];a.s&&--a.s}
n.yd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Te;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,m=0;k=f[m++];)if((k[1]||0)==33?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(m=0;k=f[m++];){var p=k[1]||0;if(!h||p!=33){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),Lg(r).replace(xg,"")));var q=l,t=q.push,u=Lg(r).replace(xg,""),A=a++,K=k[3];t.call(q,new rg(r,u,A,p,k[2]||[],K?new mg(K):ng))}}c=
new Xg(d,l,new mg(g),!1,!0,!1);this.Db&&(c=ue(this.Db,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Vg(b)<=this.Xa?!b||b.g||c.o||(this.O=F()-b.s):(++this.ea,this.Cb.process(c)||++this.Ab,this.D=c.i.g.d||0,b&&(hk(this,b.getId()),d=b.s,d=F()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>jk?Qj:kk[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Ec.u=b)}}};
var kk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Qj=kk[kk.length-1]+1,jk=kk.length*100-1;function lk(){this.l=124;this.g={}}
y(lk,L);lk.prototype.N=function(a){this.i=a.get(150);if(a=dh(a,158))for(var b,c=0;b=a[c++];)this.g[b.Qh()]=b};
lk.prototype.P=function(a){this.m=a.Qc};function mk(){this.l=125}
y(mk,L);mk.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=dh(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(nk)};
mk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Mg(c);var e=b.l;b=e?e.l:Mg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Ki(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Jg(g.g)||(b.i=h),g=g.s,g=F()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Tg(h,f.i||[])]=!0;Vi(this.o,3,{input:a,Ng:e})}return c};
function nk(a,b){return a.g()-b.g()}
;function ok(){this.l=126}
y(ok,L);ok.prototype.N=function(a){this.i=a.get(123)};
ok.prototype.P=function(){this.g=null};var pk=["expflags","plugin"];function qk(){this.l=127;this.m={}}
y(qk,L);qk.prototype.N=function(a){a=dh(a,149);for(var b,c=0;b=a[c++];)this.m[b.ob()]=b};
qk.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];Gg("client",a.clientName,c);Gg("hl",a.Vc,c);Gg("gl",a.De,c);Gg("sugexp",a.sd,c);Gg("gs_rn",64,c);Gg("gs_ri",a.requestIdentifier,c);var d=Ig(a.url||C.location.href);pk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Gg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.md||"clients1."+a.dc,wc:a.wc||"/complete/search",Be:c.length?c.join("&"):""};this.g&&this.g.ob()==a.connectionType||(this.g=this.m[a.connectionType])};function rk(){this.l=191}
y(rk,L);function Yj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Uj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Wb=a.total=0}
function Xj(a,b){for(var c=a.Xg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;k<64;++k)k<16?(g=f^b&(d^f),h=k):k<32?(g=d^f&(b^d),h=5*k+1&15):k<48?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+sk[k]+c[h]&4294967295,g=tk[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Vj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Wb++]=b[d],a.Wb==64&&(Xj(a,a.buffer),a.Wb=0)}
function Wj(a){var b=Array(16),c=a.total*8,d=a.Wb;Vj(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;Xj(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Tj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],tk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],sk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function uk(){this.l=150}
H(uk,L);
uk.prototype.bold=function(a,b){b=Kg(b.replace(lg,""));a=Kg(Mg(a,!0));if(Ng(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Sb:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Sb:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Sb:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Sb:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Sb].Sb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function vk(){this.l=146}
H(vk,L);function wk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
wk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");wk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");wk("D1,D4,D7,DA,DD");wk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");wk("D1__,D4__,D7__,DA__,DD");wk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");wk("CF,D2,D5,D8,DB");function xk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(xk,L);n=xk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.jc();b.addRule(".sbdd_a",(Hh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Hh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.lb=function(a){this.g=N();this.g.className="gstl_"+this.Y+" sbdd_a";Ti(this.g,!1);this.O=this.g;this.H=N("fl");this.g.appendChild(this.H);this.A=N();this.g.appendChild(this.A);this.s=N("sbdd_b");this.A.appendChild(this.s);this.na=N();this.A.appendChild(this.na);this.config_.Ud&&(this.i=M("iframe","gstl_"+this.Y+" sbdd_c"),Ti(this.i,!1),(this.config_.Ha||document.body).appendChild(this.i));if(this.m=this.config_.cf)typeof this.m==="number"&&(this.m+=this.config_.fc[2],this.m-=yk(this)),zk(this,this.g,
this.m);Ak(this);(a.Ha||document.body).appendChild(this.g);a=this.F;var b=E(this.zd,this);Fj(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Kb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.zd=function(){this.B=0;Ak(this);if(this.i){var a=this.config_.Bd[0],b=this.i.style;this.config_.Kb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";zk(this,this.i,this.s.offsetWidth)}this.u&&rj(this.u.g)};
function Ak(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Lf||c.H==c.F?c.Xa:null;var d=(b=c)?b.offsetWidth:Bk(a.o.m);var e=a.m;c=yk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.fc[2]-c,zk(a,a.g,e));if(a.config_.Kb!="relative"){var f="rtl"==Ke()!=(a.D=="rtl"),g=a.config_.Ha;var h={Sa:0,Ac:0};if(f||!g||g==document.body||a.config_.Nd)h=Qh(a.o.m.F),b&&(h.Sa=Qh(b).Sa);b=h;h=e;e=a.config_.fc;g=e[1];e=e[0];e=b.Ac+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Ke()!=(a.D=="rtl");var l=a.config_.Ha;g=-g;if(h||!l||l==document.body)g+=(Zh(a.g)||window).document.documentElement.clientWidth-d-b.Sa;d=g;h=e;b=void 0}else b=b.Sa+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Sa:0,Ac:0};a.config_.Kb=="absolute"&&a.config_.Ha&&a.config_.Ha!=document.body&&(f||a.config_.Nd)&&(e=Qh(a.config_.Ha));g=a.g.style;g.top=h-e.Ac+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Sa+"px":(b=0,a.config_.Ha&&f&&(b=document.body.clientWidth-(e.Sa+a.config_.Ha.offsetWidth)),
g.right=d+c-b+"px")}}
function zk(a,b,c){typeof c==="number"?c>0&&(a.config_.Wg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Ti(a,b){a&&(a.style.display=b?"":"none")}
function Ui(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ha;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");Uh(a.g,b)}}
function yk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function Ck(){this.l=119;this.W=!1;this.s=Fg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(Ck,L);n=Ck.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Pc();Jh(this.g,"combobox");Kh(this.g,"haspopup",!1);Kh(this.g,"autocomplete","list");this.Dc=a.jc();a.Gc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Gh&&Ch||nh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),zh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Ab=!!a.get(136);this.Ec=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Nb;this.O=a.cg;this.Fc=a.Hd;this.u=Rh(this.g);this.Cc();var b=this;nh&&Fj(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.nc=!0)},10);
a=(gc()||I("iPad")||I("iPod"))&&Dh;Ah&&Dk(this);(Eh||a)&&Ek(this);this.F=this.g};
n.lb=function(a){var b=!!a.hf[130];if(this.Ab||kj(this.i)||b||a.qf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=N("gstl_"+this.Ec+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=Bh||nh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Uc,b&&(this.B=N("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),kj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Dc,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=N("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Fk(this,this.A,this.o)),this.config_.od&&this.g&&this.o&&(this.g.removeAttribute("role"),Jh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Kh(this.o,"haspopup",!0)),this.config_.Ma&&this.g&&(b=this.D.getId("sbsg"),Kh(this.g,"controls",b),this.config_.od&&this.o?(Kh(this.o,"haspopup","grid"),Kh(this.o,
"owns",b)):Kh(this.g,"haspopup","grid")),this.config_.Kg||this.config_.Ze||Gk(this,this.A),this.F=this.A;this.Fc&&(b=E(this.le,this),Fj(this.m,this.g,"blur",b,10),b=E(this.te,this),Fj(this.m,this.g,"focus",b,10),this.Db=!0);b=this.m;a=E(this.Hf,this);Fj(b,b.g,8,a);Hk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.he?"":"none";this.Bb=this.g.value;this.Db&&this.te();Ik(this)};
n.Fa=function(){this.Db&&this.le();Jk(this)};
function Fk(a,b,c){Jk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Bg&&(nh||Ah?Hf(function(){a.g.focus();Ph(a.g,a.s.Mb())}):a.g.focus());
Ik(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function Bk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Cc()};
function jj(a){Fh&&(a.g.value="");a.g.value=a.i.g;Fh&&(a.g.value=a.g.value);hj(a)}
function Kk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function hj(a){if(a.u){var b=a.g.value.length;a.s=Fg(b);Ph(a.g,b)}}
function Gk(a,b){Fj(a.m,b,"mouseup",function(){a.g.focus()})}
function Hk(a){function b(e){Fj(a.m,a.g,e,E(a.re,a),10,c)}
Fj(a.m,a.g,"keydown",E(a.Ff,a));(Bh||a.config_.We)&&Fj(a.m,a.g,"keypress",E(a.Gf,a));Fj(a.m,a.g,"select",E(a.Cc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=E(a.Cf,a);Fj(a.m,a.g,"compositionstart",d);Fj(a.m,a.g,"compositionend",d)}
n.Cf=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Ff=function(a){var b=a.keyCode;this.ca=b;var c=(Ch||Ah)&&(b==38||b==40)&&bj(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=aj(this.i));if(d){(b=cj(this.X))&&b.getType();var f=this;Hf(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&cj(g).getType();g=g.u;si(g.F,g.g,h)})}if(c||d||e||this.Y)a.nc=!0};
n.Gf=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.nc=!0};
n.re=function(a){if(!this.Cb){var b=a.Ub;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Fg?si(a.F,a.g,5):(a.i.isVisible()?(c=a.i,Bi(c.D),$i(c)):Kk(a.m),oi(a));break;case 37:a=this.i;lj(a,"rtl");if(mj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Lk(a,c.i))&&!(c.length<=1))))for(d=Lh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Mh(a.u,c[e-1]);break;case 39:a=this.i;lj(a,"ltr");if(mj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Lk(a,c.i))))for(d=Lh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Mh(a.u,c[e+1]);break;case 38:this.i.i.ye();break;case 40:a=this.i;c=this.s;bj(a.i)?a.i.xe():fj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Sd()==a.g.length&&(a.J&&a.J.clear(),a.config_.Eg&&si(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Mb()==0&&a.A.g()}}this.Cc();dj(this.i,this.g.value,this.s,b)}};
n.Bf=function(){this.u=!0;Vi(this.i.s,10)};
n.zf=function(){this.u=!1;Zi(this.i)};
function Ik(a){a.W||(a.W=!0,a.Xa=E(a.Bf,a),Fj(a.m,a.g,"focus",a.Xa,99),a.na=E(a.zf,a),Fj(a.m,a.g,"blur",a.na,99))}
function Jk(a){a.W&&(a.W=!1,Jj(a.m,a.g,a.Xa),Jj(a.m,a.g,a.na))}
n.te=function(){this.H||(this.H=new ig(this.config_.xg||50),this.H.ra("tick",this.wg,void 0,this),this.H.start())};
n.le=function(){this.H&&(jg(this.H),this.H=null)};
n.wg=function(){this.re({Ub:"polling"})};
n.Hf=function(){if(Ah){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Cc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Sh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=Fg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Dk(a){var b;a.m.ra(window,"pagehide",function(){a.Cb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Cb=!1;(c.persisted||b!==void 0)&&ij(a.i,b)})}
function Ek(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Bb&&ij(a.i,a.Bb)})}
function Si(a,b){a.config_.od&&a.o?Kh(a.o,"expanded",b):Kh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Mk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Nk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ok(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Mk(a).match(/\S+/g)||[],b=zb(a,b)>=0);return b}
function Bj(a,b){if(a.classList)a.classList.add(b);else if(!Ok(a,b)){var c=Mk(a);Nk(a,c+(c.length>0?" "+b:b))}}
function Pk(a,b){a.classList?a.classList.remove(b):Ok(a,b)&&Nk(a,Array.prototype.filter.call(a.classList?a.classList:Mk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Qk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Qk,L);n=Qk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Pc();this.H=a.jc();Hh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Hh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Ch?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Hh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=dh(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.lb=function(a){this.o=N();a.Ma?(this.g=N("sbsb_b"),Jh(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=M("ul","sbsb_b"),Jh(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.qe;b&&(this.Xa=this.O.Od(b));this.o.className=a.Pg||"sbsb_a";this.X=a.Mg||"sbsb_d"};
function Lk(a,b){if(a.config_.Ma&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function Aj(a,b){(b=a.m[b])&&Pk(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function sj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Rk(a,d));d.zb(b,c);a.W.push(c);var e=c.g();if(a.config_.Ma)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Sk(a);f.appendChild(e);if(b.u!==void 0){a.m.push(c);g=a.F;var h=b.l;a.config_.Sf&&(e.onmouseover=function(){xj(a.D,h)},e.onmouseout=function(){pi(a.D)});
var l=c.g();l.onclick=function(k){Kk(a.s.m);b.o&&ej(a.s,b.g);pi(a.D);var m=a.D;m.i=m.g=h;k=k||Zh(l).event;d.yb(k,b,a.I)}}else g=a.H;
Uh(f,g);return!0}
function Rk(a,b){b=b.Gb(a.I);var c=b.g();Bj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Ma&&Jh(c,"option");a.ea++;return b}
function wj(a,b,c,d){var e=M("input");e.type="button";e.value=Lg(b);e.onclick=function(){si(a.I,a.s.g,d)};
if(a.config_.Kf){b="lsb";var f=M("span");var g=M("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Sk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Ma?(b=N(),Jh(b,"row")):(b=M("li"),Jh(b,"presentation"));b.className="sbsb_c "+a.config_.yc;b.onmousedown=E(a.hd,a);a.g.appendChild(b);return b}
n.hd=function(a){a=a||Zh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):nh&&!Bh&&(this.s.m.ea=!0);return!1};
function rj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=Bk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Tk(){this.l=147}
H(Tk,L);Tk.prototype.sa=function(a){this.u=a.Pd()||document.body};
Tk.prototype.ga=function(a){this.config_=a};
Tk.prototype.getHeight=function(){this.g||tj(this);uj(this);this.i||(Th(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function tj(a){var b=N(a.config_.Uc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function uj(a){var b=F();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Zh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Uk(){Zg.call(this);this.set(191,new rk);this.set(150,new uk);this.set(146,new vk);this.set(147,new Tk);$g(this,149,new Mi);this.set(145,new Dj);this.set(117,new Ej);this.set(494,new Lj);this.set(374,new Mj);this.set(120,new Nj);this.set(121,new ak);this.set(553,new dk);this.set(124,new lk);this.set(125,new mk);this.set(123,new fk);this.set(126,new ok);this.set(127,new qk);this.set(115,new Pi);this.set(118,new Xi);this.set(128,new oj);$g(this,154,new Cj);this.set(116,new xk);this.set(119,
new Ck);this.set(129,new Qk)}
y(Uk,Zg);function Vk(){this.l=347;this.i=[];this.m=0}
y(Vk,L);Vk.prototype.N=function(a){this.o=a.get(120)};
Vk.prototype.P=function(a){this.s="//"+(a.lg||"www."+a.dc)+"/gen_204?";this.g=a.Lg||{}};
function bk(a,b){b=Oj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Hg(b,!0);Wk(a,a.s+c)}
function Wk(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Xk(){this.l=151;this.g=!0;this.i={}}
y(Xk,L);n=Xk.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Eg([0])};
n.P=function(a){this.o=a.Qc;this.g=a.Gd};
n.Fa=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Ng(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,m,p=0;m=k[p++];)l=m.g,h=f?this.m.bold(c,l):Kg(l),g.push(new rg(h,l,m.l,m.getType(),m.i||[],m.m));delete this.i[d];return new Xg(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function Yk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Yk,L);Yk.prototype.N=function(a){this.g=dh(a,151);this.g.sort(Zk)};
Yk.prototype.P=function(){this.o=this.m=0};
Yk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Xg(a,b.g,b.i,b.o,b.m,b.u):null};
Yk.prototype.has=function(a){return!!this.i[a.i]};
function Zk(){return 0}
;function $k(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function al(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function bl(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function cl(){this.l=570;this.m=!1}
H(cl,L);n=cl.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Lb;if(this.g=b?this.u.Od(b):null){b=this.s;var c=E(this.Af,this);Fj(b,b.g,10,c);b=this.s;c=E(this.yf,this);Fj(b,b.g,11,c);Fj(this.s,this.g,"mouseover",E(this.Ef,this));Fj(this.s,this.g,"mouseout",E(this.Df,this));a.Nc&&(this.o=new $k(a.Nc));a.Mc&&(this.i=new $k(a.Mc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&al(this.i,this.g)};
n.Fa=function(){this.m=!1;this.g&&(this.o&&bl(this.o,this.g),this.i&&bl(this.i,this.g))};
n.Ef=function(){this.m&&this.o&&al(this.o,this.g)};
n.Df=function(){this.m&&this.o&&bl(this.o,this.g)};
n.Af=function(){this.m&&this.i&&al(this.i,this.g)};
n.yf=function(){this.m&&this.i&&bl(this.i,this.g)};var dl=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function el(){this.l=160}
H(el,L);n=el.prototype;n.sa=function(a,b){this.m=a;a.Gc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.lc;this.A=a.je;this.D=a.pc;this.H=a.ug;this.F=a.tg};
n.lb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=M("img"),this.g.src=this.A+"/tia.png",this.i=M("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=E(this.af,this);this.g.setAttribute("tia_field_name",this.m.Pc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Rc&&(this.o=!!a.lc);this.g.setAttribute("tia_property",a.ke)};
n.isEnabled=function(){return this.o};
n.Rd=function(){return{tooltip:this.F}};
n.Ad=function(a){if(!this.B){a=Ce("SCRIPT");var b=ze(dl,this.H,this.D);tb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.af=function(){var a=this.u;Bi(a.D);$i(a)};
var fl=Dg++;var gl=ha(["#"]);function hl(){this.l=173;this.m={}}
y(hl,L);n=hl.prototype;
n.sa=function(a,b){this.o=a;a.Gc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+($h()+":"+ai(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",$h()+":"+ai(.8)+";"),b.addRule(".gsst_a:active .gsst_e",$h()+":"+
ai(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=dh(a,160)};
n.ga=function(a){this.A=a.Rc;this.i.sort(il)};
n.lb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=N("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Nb)this.g.style.lineHeight=a+"px";jl(this)}kl(this)};
n.P=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[fl];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);jl(this);kl(this);break}}};
function il(){return 0}
function jl(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=M("a","gsst_a");ll(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function kl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=fl,e=c.i.parentNode;e.onclick=E(c.Ad,c);a.m[d]=e;c.Rd&&(c=c.Rd(),c.Xh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function ll(a,b,c){nb(b,ib(gl));b.addEventListener("click",function(){return!1});
Bh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Ad(d),qi(a.u),Wh(d)}}
Dg++;function ml(){this.o=33;this.l=N();this.l.className="gspr_a"}
H(ml,lh);ml.prototype.g=function(){return this.l};function nl(){mh.call(this,33)}
y(nl,mh);nl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
nl.prototype.Gb=function(){return new ml};
nl.prototype.zb=function(a,b){rb(b.l,ue(ye,a.m.g.b||""))};
nl.prototype.yb=function(a,b,c){si(c,b.g,1)};function ol(a,b){this.o=0;this.u=a;this.D=b;this.m=N();this.l=N("sbqs_a");this.m.appendChild(this.l);this.B=N("sbqs_c");this.m.appendChild(this.B)}
y(ol,lh);ol.prototype.g=function(){return this.m};
function pl(a,b,c,d){rb(a.B,og(b));a.A=c;d&&!a.i&&(a.i=Xh(a.l),a.i.onclick=E(function(e){Kk(this.u.m);ej(this.u,this.A);si(this.D,this.A,9);return Wh(e)},a));
d?(rb(a.i,og(d+" &raquo;")),a.l.style.display="",Kh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function ql(){mh.call(this,0)}
H(ql,mh);n=ql.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Kd?a.Ld:""};
n.Gb=function(a){return new ol(this.g,a)};
n.zb=function(a,b){pl(b,a.getHtml(),a.g,this.i)};
n.yb=function(a,b,c){si(c,b.g,1)};function rl(a){Uk.call(this);$g(this,149,new eh);this.set(347,new Vk);this.set(133,new Yk);$g(this,151,new Xk);this.set(570,new cl);this.set(134,new vi);this.set(189,new yi);$g(this,156,new Ci);a.ENABLE_DELETE_ICON?$g(this,152,new ri):$g(this,152,new ui);$g(this,152,new nl);$g(this,152,new ql);this.set(173,new hl);$g(this,160,new el);this.set(157,new Ei);$g(this,156,new Fi);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&$g(this,156,new Di(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&($g(this,153,new jh),$g(this,152,new gi(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Gi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),$g(this,156,new Li))}
y(rl,Uk);function sl(){return{sf:function(){return{clientName:"hp",requestIdentifier:"hp",dc:"google.com",De:"",Vc:"en",Ic:"",jd:"",videoId:"",ud:"",authuser:0,mg:"",wi:"",Ae:null,sd:"",Id:!1,md:"",wc:"",connectionType:0,transport:null,He:!1,ji:!1,Uf:!1,enableCaching:!0,kf:10,Ph:10,ef:!0,Gd:!0,Lh:!1,pf:!1,gg:!1,hg:!1,ai:!1,Qf:!0,bf:!1,Rf:500,Rc:!1,Jf:!0,Uh:!0,ni:!1,lc:!1,pc:"",je:"//www.google.com/textinputassistant",ke:"",ug:7,Rh:!1,Sh:!1,Nf:!1,Mf:!0,Of:!1,Vd:!1,Ma:!1,Fg:!1,Eg:!1,zc:1,fe:!0,ic:!1,Kd:!1,Hd:!1,
xg:10,Qc:!1,Bg:!0,Ha:document.body,Pf:!0,Ee:null,hf:{},Oh:{},ii:0,qf:!1,Vf:!0,jb:!1,nf:!1,Jg:!1,ri:null,ff:!1,lg:null,Lg:null,Lc:!1,Sf:!0,od:!1,We:!1,ti:1,he:!1,Gg:"Search",Ld:"I'm  Feeling Lucky",Hg:"",kg:"Learn more",ld:"Remove",kd:"This search was removed from your Web History",Vh:"",Kh:"Did you mean:",tg:"",li:"",zi:"Search by voice",yi:'Listening for "Ok Google"',xi:'Say "Ok Google"',Jh:"Clear Search",Nb:0,cg:0,Uc:"",yc:"",Zh:!1,Kb:"absolute",Kf:!1,Ud:!1,qe:null,Lf:!0,fc:[0,0,0],cf:null,Og:null,
Bd:[0],qd:!0,Ge:"",Pg:"",Mg:"",Lb:null,Nc:"",Mc:"",Ih:1,Wg:!1,Nd:!1,ci:0,Kg:!1,Ze:!1,Mh:!1,yg:!0}}}}
;function tl(a,b,c,d,e){var f=Ah?"-moz-":nh?"-ms-":Bh?"-o-":Ch?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,m){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",m,"}")}},
Se:function(){if(b&&l.length){b=!1;var k=M("style");k.setAttribute("type","text/css");(a||Bg).appendChild(k);var m=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=m:k.appendChild(document.createTextNode(m))}},
prefix:function(k,m){var p=k+(m||"");f&&(p+=m?k+f+m:f+k);return p}}}
;function ul(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=ul.prototype;n.install=function(a){if(!this.D){a=vl(a);this.l<0&&(this.l=wl(a));var b=Sh(this.i),c=xl(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Ge&&f.push(a.Ge);f=tl(a.Ee,a.Pf,a.ff,this.l,f);this.A=a.jb;this.g=new ah(this.F,this.H,{Gc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Od:function(g){return b.getElementById(g)},
Pd:function(){return e.I},
jc:function(){return c},
getId:function(g){return g+e.l},
Pc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Zh(this.i);this.s=Yh(a);this.B=E(this.Dg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function yl(a,b){function c(d){si(a.X,a.J.g,12);return Vh(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.jb=function(){return this.A||!!this.u&&this.u.jb()};
n.pd=function(a){this.W.pd(a)};
function wl(a){a=Zh(a.Ee||Bg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function xl(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function vl(a){a=Sg(a);var b=a.pc;b?a.pc=b.toLowerCase():a.lc=!1;a.ic&&!a.Kd&&(a.ic=!1);Dh||(a.hg=!1);return a}
n.Dg=function(){var a=Yh(Zh(this.i));if(a.Ie!=this.s.Ie||a.Xd!=this.s.Xd)this.s=a,Vi(this.m,8)};function zl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
G("ytvoicesearchloggingparams",E(this.uf,this))}
y(zl,Yg);n=zl.prototype;n.uf=function(){this.g.O.add(6);return Oj(this.g.o,15)};
n.xd=function(a){Kk(this.g.Y);this.u(Oj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.wd(a))};
n.wd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Oj(this.g.o);var d=this.g;c||(c=Oj(d.o));d=Hg(c);return a+b+d};
n.ge=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=sl().sf();f.clientName="youtube";f.requestIdentifier="youtube";f.Ic="yt";f.Vc=d.REQUEST_LANGUAGE;f.De=d.REQUEST_DOMAIN;f.Jf=!1;f.zc=0;f.fe=!1;f.ic=!1;f.he=!1;f.Qc=!0;f.Uc=this.D;f.yc=this.i;f.Nc=this.B;f.Mc=this.A;f.Yh=!0;f.lc=d.HAS_ON_SCREEN_KEYBOARD;f.pc=d.REQUEST_LANGUAGE;f.je="//www.gstatic.com/inputtools/images";f.ke="youtube";f.Lc=!0;f.Kb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.md="suggestqueries-clients6.youtube.com";d.PQ&&(f.jd=d.PQ);f.ud=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.kd=e.SUGGESTION_DISMISSED_LABEL;f.ld=e.SUGGESTION_DISMISS_LABEL;f.qd=!d.HIDE_REMOVE_LINK;f.si=Eg([0,33,35]);this.o?(f.Lb="search-container",f.Nb=24):this.m?(f.Lb="masthead-search",f.Nb=24):(f.Lb="masthead-search-terms",f.Nb=30);Zb()||(f.Ud=!0);f.qe=f.Lb;e=this.l.offsetHeight;f.fc=[e+(56-e)/2-40+4,0,0];e=[0];$b()&&ec()=="8.0"&&
(e[0]=-1);f.Bd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Hd=!0);if(e=d.SUGG_EXP_ID)f.sd=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Zh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);ch(a.g);b=vl(b);a.A=b.jb;a=a.g;ch(a);for(c=0;d=a.g[c++];)d.P(b);a.l=!0}else d=new rl(d),this.g=new ul(b,a,this,d),
this.g.install(f),c&&(yl(this.g,c),c.onclick=null)};function Al(){this.data=[];this.g=-1}
Al.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Al.prototype.get=function(a){return!!this.data[a]};
function Bl(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Cl(){this.blockSize=-1}
;function Dl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
H(Dl,Cl);Dl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function El(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else e<60?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
Dl.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)El(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){El(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){El(this,e);f=0;break}}this.l=f;this.m+=b}};
Dl.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;El(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Fl(){}
Fl.prototype.next=function(){return Gl};
var Gl={done:!0,value:void 0};Fl.prototype.ib=function(){return this};function Hl(a){if(a instanceof Il||a instanceof Jl||a instanceof Kl)return a;if(typeof a.next=="function")return new Il(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Il(function(){return a[Symbol.iterator]()});
if(typeof a.ib=="function")return new Il(function(){return a.ib()});
throw Error("Not an iterator or iterable.");}
function Il(a){this.g=a}
Il.prototype.ib=function(){return new Jl(this.g())};
Il.prototype[Symbol.iterator]=function(){return new Kl(this.g())};
Il.prototype.l=function(){return new Kl(this.g())};
function Jl(a){this.g=a}
y(Jl,Fl);Jl.prototype.next=function(){return this.g.next()};
Jl.prototype[Symbol.iterator]=function(){return new Kl(this.g)};
Jl.prototype.l=function(){return new Kl(this.g)};
function Kl(a){Il.call(this,function(){return a});
this.i=a}
y(Kl,Il);Kl.prototype.next=function(){return this.i.next()};function Ll(a){var b=[];Ml(new Nl,a,b);return b.join("")}
function Nl(){}
function Ml(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ml(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ol(d,c),c.push(":"),Ml(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ol(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pl={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ql=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ol(a,b){b.push('"',a.replace(Ql,function(c){var d=Pl[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Pl[c]=d);return d}),'"')}
;function Rl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function P(a){Ye.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
H(P,Ye);n=P.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Bc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&Cb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.oe=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Sl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Za;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Bc(c)}}return e!=0}return!1};
function Sl(a,b,c){Qf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Bc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){P.Ea.Ba.call(this);this.clear();this.i.length=0};function Tl(a){this.g=a}
Tl.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Ll(b))};
Tl.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Tl.prototype.remove=function(a){this.g.remove(a)};function Ul(a){this.g=a}
H(Ul,Tl);function Vl(a){this.data=a}
function Wl(a){return a===void 0||a instanceof Vl?a:new Vl(a)}
Ul.prototype.set=function(a,b){Ul.Ea.set.call(this,a,Wl(b))};
Ul.prototype.l=function(a){a=Ul.Ea.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ul.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xl(a){this.g=a}
H(Xl,Ul);Xl.prototype.set=function(a,b,c){if(b=Wl(b)){if(c){if(c<F()){Xl.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}Xl.Ea.set.call(this,a,b)};
Xl.prototype.l=function(a){var b=Xl.Ea.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())Xl.prototype.remove.call(this,a);else return b}};function Yl(){}
;function Zl(){}
H(Zl,Yl);Zl.prototype[Symbol.iterator]=function(){return Hl(this.ib(!0)).l()};
Zl.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function $l(a){this.g=a;this.l=null}
H($l,Zl);n=$l.prototype;n.set=function(a,b){am(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){am(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){am(this);this.g.removeItem(a)};
n.ib=function(a){am(this);var b=0,c=this.g,d=new Fl;d.next=function(){if(b>=c.length)return Gl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){am(this);this.g.clear()};
n.key=function(a){am(this);return this.g.key(a)};
function am(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=bm(a.g))||Rb(Error("Storage mechanism: Storage unavailable"))}
function bm(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function cm(){var a=null;try{a=C.localStorage||null}catch(b){}$l.call(this,a)}
H(cm,$l);function dm(a,b){this.l=a;this.g=b+"::"}
H(dm,Zl);dm.prototype.set=function(a,b){this.l.set(this.g+a,b)};
dm.prototype.get=function(a){return this.l.get(this.g+a)};
dm.prototype.remove=function(a){this.l.remove(this.g+a)};
dm.prototype.ib=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Fl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var Q={},em=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";Q.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
Q.rd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var fm={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Md:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},gm={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Md:function(a){return[].concat.apply([],a)}};
Q.Ig=function(){em?(Q.hb=Uint8Array,Q.Ja=Uint16Array,Q.Le=Int32Array,Q.assign(Q,fm)):(Q.hb=Array,Q.Ja=Array,Q.Le=Array,Q.assign(Q,gm))};
Q.Ig();var hm=!0;try{new Uint8Array(1)}catch(a){hm=!1}
function im(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new Q.hb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var jm={};jm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var km={},lm,mm=[],nm=0;nm<256;nm++){lm=nm;for(var om=0;om<8;om++)lm=lm&1?3988292384^lm>>>1:lm>>>1;mm[nm]=lm}km=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^mm[(a^b[d])&255];return a^-1};var pm={};pm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function qm(a){for(var b=a.length;--b>=0;)a[b]=0}
var rm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],sm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],tm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],um=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],vm=Array(576);qm(vm);var wm=Array(60);qm(wm);var xm=Array(512);qm(xm);var ym=Array(256);qm(ym);var zm=Array(29);qm(zm);var Am=Array(30);qm(Am);function Bm(a,b,c,d,e){this.Ce=a;this.mf=b;this.lf=c;this.df=d;this.qg=e;this.Wd=a&&a.length}
var Cm,Dm,Em;function Fm(a,b){this.Fd=a;this.ub=0;this.Ta=b}
function Gm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Hm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Gm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Im(a,b,c){Hm(a,c[b*2],c[b*2+1])}
function Jm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Km(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Jm(d[e]++,e))}
function Lm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Qa=a.xb=0;a.za=a.matches=0}
function Mm(a){a.ha>8?Gm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Nm(a,b,c){Mm(a);Gm(a,c);Gm(a,~c);Q.kb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Om(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Pm(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Pa;){e<a.Pa&&Om(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Om(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Qm(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Hb+d*2]<<8|a.ba[a.Hb+d*2+1];var f=a.ba[a.Xc+d];d++;if(e===0)Im(a,f,b);else{var g=ym[f];Im(a,g+256+1,b);var h=rm[g];h!==0&&(f-=zm[g],Hm(a,f,h));e--;g=e<256?xm[e]:xm[256+(e>>>7)];Im(a,g,c);h=sm[g];h!==0&&(e-=Am[g],Hm(a,e,h))}}while(d<a.za)}Im(a,256,b)}
function Rm(a,b){var c=b.Fd,d=b.Ta.Ce,e=b.Ta.Wd,f=b.Ta.df,g,h=-1;a.Pa=0;a.qb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Pa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Pa<2;){var l=a.da[++a.Pa]=h<2?++h:0;c[l*2]=1;a.depth[l]=0;a.Qa--;e&&(a.xb-=d[l*2+1])}b.ub=h;for(g=a.Pa>>1;g>=1;g--)Pm(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Pa--],Pm(a,c,1),d=a.da[1],a.da[--a.qb]=g,a.da[--a.qb]=d,c[l*2]=c[g*2]+c[d*2],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=l,a.da[1]=l++,Pm(a,c,1);while(a.Pa>=
2);a.da[--a.qb]=a.da[1];g=b.Fd;l=b.ub;d=b.Ta.Ce;e=b.Ta.Wd;f=b.Ta.mf;var k=b.Ta.lf,m=b.Ta.qg,p,r=0;for(p=0;p<=15;p++)a.La[p]=0;g[a.da[a.qb]*2+1]=0;for(b=a.qb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>l)){a.La[p]++;var t=0;q>=k&&(t=f[q-k]);var u=g[q*2];a.Qa+=u*(p+t);e&&(a.xb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.La[p]===0;)p--;a.La[p]--;a.La[p+1]+=2;a.La[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.La[p];q!==0;)d=a.da[--b],d>l||(g[d*2+1]!==p&&(a.Qa+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Km(c,h,a.La)}
function Sm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];++g<h&&k===f||(g<l?a.ka[k*2]+=g:k!==0?(k!==e&&a.ka[k*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=k,f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function Tm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];if(!(++g<h&&k===f)){if(g<l){do Im(a,k,a.ka);while(--g!==0)}else k!==0?(k!==e&&(Im(a,k,a.ka),g--),Im(a,16,a.ka),Hm(a,g-3,2)):g<=10?(Im(a,17,a.ka),Hm(a,g-3,3)):(Im(a,18,a.ka),Hm(a,g-11,7));g=0;e=k;f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function Um(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var Vm=!1;function Wm(a,b,c){a.ba[a.Hb+a.za*2]=b>>>8&255;a.ba[a.Hb+a.za*2+1]=b&255;a.ba[a.Xc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(ym[c]+256+1)*2]++,a.ab[(b<256?xm[b]:xm[256+(b>>>7)])*2]++);return a.za===a.Pb-1}
;function Xm(a,b){a.msg=pm[b];return b}
function Ym(a){for(var b=a.length;--b>=0;)a[b]=0}
function Zm(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(Q.kb(a.output,b.ba,b.Qb,c,a.vb),a.vb+=c,b.Qb+=c,a.td+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.Qb=0))}
function $m(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.R.Jc===2&&(a.R.Jc=Um(a));Rm(a,a.oc);Rm(a,a.ec);Sm(a,a.ta,a.oc.ub);Sm(a,a.ab,a.ec.ub);Rm(a,a.Cd);for(e=18;e>=3&&a.ka[um[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.xb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Hm(a,b?1:0,3),Nm(a,c,d);else if(a.strategy===4||g===f)Hm(a,2+(b?1:0),3),Qm(a,vm,wm);else{Hm(a,4+(b?1:0),3);c=a.oc.ub+1;d=a.ec.ub+1;e+=1;Hm(a,c-257,5);Hm(a,d-1,5);Hm(a,e-4,4);for(f=0;f<e;f++)Hm(a,a.ka[um[f]*
2+1],3);Tm(a,a.ta,c-1);Tm(a,a.ab,d-1);Qm(a,a.ta,a.ab)}Lm(a);b&&Mm(a);a.va=a.C;Zm(a.R)}
function R(a,b){a.ba[a.pending++]=b}
function an(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function bn(a,b){var c=a.ee,d=a.C,e=a.wa,f=a.ie,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,l=a.Va,k=a.Ia,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Td&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.tb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&--c!==0);return e<=
a.G?e:a.G}
function cn(a){var b=a.ma,c;do{var d=a.Je-a.G-a.C;if(a.C>=b+(b-262)){Q.kb(a.window,a.window,b,b,0);a.tb-=b;a.C-=b;a.va-=b;var e=c=a.mc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,Q.kb(c,e.input,e.fb,g,f),e.state.wrap===1?e.L=jm(e.L,c,g,f):e.state.wrap===2&&(e.L=km(e.L,c,g,f)),e.fb+=g,e.gb+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.S=a.window[d],
a.S=(a.S<<a.Oa^a.window[d+1])&a.Na;a.la&&!(a.S=(a.S<<a.Oa^a.window[d+3-1])&a.Na,a.Ia[d&a.Va]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.R.oa!==0)}
function dn(a,b){for(var c;;){if(a.G<262){cn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=bn(a,c));if(a.V>=3)if(c=Wm(a,a.C-a.tb,a.V-3),a.G-=a.V,a.V<=a.ad&&a.G>=3){a.V--;do a.C++,a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.S=a.window[a.C],a.S=(a.S<<a.Oa^a.window[a.C+1])&a.Na;else c=Wm(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&($m(a,!1),a.R.T===0))return 1}a.la=a.C<2?a.C:2;return b===4?($m(a,!0),a.R.T===0?3:4):a.za&&($m(a,!1),a.R.T===0)?1:2}
function en(a,b){for(var c,d;;){if(a.G<262){cn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,c=a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);a.wa=a.V;a.me=a.tb;a.V=2;c!==0&&a.wa<a.ad&&a.C-c<=a.ma-262&&(a.V=bn(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.tb>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=Wm(a,a.C-1-a.me,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.S=(a.S<<a.Oa^a.window[a.C+3-1])&a.Na,a.Ia[a.C&a.Va]=a.head[a.S],a.head[a.S]=a.C);
while(--a.wa!==0);a.cb=0;a.V=2;a.C++;if(c&&($m(a,!1),a.R.T===0))return 1}else if(a.cb){if((c=Wm(a,0,a.window[a.C-1]))&&$m(a,!1),a.C++,a.G--,a.R.T===0)return 1}else a.cb=1,a.C++,a.G--}a.cb&&(Wm(a,0,a.window[a.C-1]),a.cb=0);a.la=a.C<2?a.C:2;return b===4?($m(a,!0),a.R.T===0?3:4):a.za&&($m(a,!1),a.R.T===0)?1:2}
function fn(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){cn(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=Wm(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Wm(a,0,a.window[a.C]),a.G--,a.C++);if(c&&($m(a,!1),a.R.T===0))return 1}a.la=0;return b===4?($m(a,!0),a.R.T===0?3:4):
a.za&&($m(a,!1),a.R.T===0)?1:2}
function gn(a,b){for(var c;;){if(a.G===0&&(cn(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=Wm(a,0,a.window[a.C]);a.G--;a.C++;if(c&&($m(a,!1),a.R.T===0))return 1}a.la=0;return b===4?($m(a,!0),a.R.T===0?3:4):a.za&&($m(a,!1),a.R.T===0)?1:2}
function hn(a,b,c,d,e){this.wf=a;this.pg=b;this.sg=c;this.og=d;this.rf=e}
var jn;jn=[new hn(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){cn(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,$m(a,!1),a.R.T===0)return 1;if(a.C-a.va>=a.ma-262&&($m(a,!1),a.R.T===0))return 1}a.la=0;if(b===4)return $m(a,!0),a.R.T===0?3:4;a.C>a.va&&$m(a,!1);return 1}),
new hn(4,4,8,4,dn),new hn(4,5,16,8,dn),new hn(4,6,32,32,dn),new hn(4,4,16,16,en),new hn(8,16,32,32,en),new hn(8,16,128,128,en),new hn(8,32,128,256,en),new hn(32,128,258,1024,en),new hn(32,258,258,4096,en)];
function kn(){this.R=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Qb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.rb=-1;this.Va=this.vd=this.ma=0;this.window=null;this.Je=0;this.head=this.Ia=null;this.ie=this.Td=this.strategy=this.level=this.ad=this.ee=this.wa=this.G=this.tb=this.C=this.cb=this.me=this.V=this.va=this.Oa=this.Na=this.Sc=this.mc=this.S=0;this.ta=new Q.Ja(1146);this.ab=new Q.Ja(122);this.ka=new Q.Ja(78);Ym(this.ta);Ym(this.ab);Ym(this.ka);this.Cd=this.ec=this.oc=
null;this.La=new Q.Ja(16);this.da=new Q.Ja(573);Ym(this.da);this.qb=this.Pa=0;this.depth=new Q.Ja(573);Ym(this.depth);this.ha=this.pa=this.la=this.matches=this.xb=this.Qa=this.Hb=this.za=this.Pb=this.Xc=0}
function ln(a,b){if(!a||!a.state||b>5||b<0)return a?Xm(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return Xm(a,a.T===0?-5:-2);c.R=a;var d=c.rb;c.rb=b;if(c.status===42)if(c.wrap===2)a.L=0,R(c,31),R(c,139),R(c,8),c.K?(R(c,(c.K.text?1:0)+(c.K.Ra?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),R(c,c.K.time&255),R(c,c.K.time>>8&255),R(c,c.K.time>>16&255),R(c,c.K.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.K.fi&255),c.K.extra&&c.K.extra.length&&
(R(c,c.K.extra.length&255),R(c,c.K.extra.length>>8&255)),c.K.Ra&&(a.L=km(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.vd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;an(c,e+(31-e%31));c.C!==0&&(an(c,a.L>>>16),an(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Ra&&c.pending>e&&(a.L=km(a.L,c.ba,c.pending-e,e)),Zm(a),e=c.pending,c.pending!==c.Aa));)R(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Ra&&c.pending>e&&(a.L=km(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=km(a.L,c.ba,c.pending-e,e)),Zm(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>
e&&(a.L=km(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Ra&&c.pending>e&&(a.L=km(a.L,c.ba,c.pending-e,e)),Zm(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;R(c,f)}while(f!==0);c.K.Ra&&c.pending>e&&(a.L=km(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Ra?(c.pending+2>c.Aa&&Zm(a),c.pending+2<=c.Aa&&(R(c,
a.L&255),R(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(Zm(a),a.T===0)return c.rb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Xm(a,-5);if(c.status===666&&a.oa!==0)return Xm(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?gn(c,b):c.strategy===3?fn(c,b):jn[c.level].rf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.rb=-1),0;if(d===2&&(b===1?(Hm(c,2,3),Im(c,256,vm),c.ha===16?(Gm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(Hm(c,0,3),Nm(c,0,0),b===3&&(Ym(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),Zm(a),a.T===0))return c.rb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.L&255),R(c,a.L>>8&255),R(c,a.L>>16&255),R(c,a.L>>24&255),R(c,a.gb&255),R(c,a.gb>>8&255),R(c,a.gb>>16&255),R(c,a.gb>>24&255)):(an(c,a.L>>>16),an(c,a.L&65535));Zm(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var mn={};mn=function(){this.input=null;this.gb=this.oa=this.fb=0;this.output=null;this.td=this.T=this.vb=0;this.msg="";this.state=null;this.Jc=2;this.L=0};var nn=Object.prototype.toString;
function on(a){if(!(this instanceof on))return new on(a);a=this.options=Q.assign({level:-1,method:8,chunkSize:16384,Wa:15,rg:8,strategy:0,Ua:""},a||{});a.raw&&a.Wa>0?a.Wa=-a.Wa:a.xf&&a.Wa>0&&a.Wa<16&&(a.Wa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new mn;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.Wa,f=a.rg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Xm(b,-2);else{e===8&&(e=9);var l=new kn;
b.state=l;l.R=b;l.wrap=h;l.K=null;l.vd=e;l.ma=1<<l.vd;l.Va=l.ma-1;l.Sc=f+7;l.mc=1<<l.Sc;l.Na=l.mc-1;l.Oa=~~((l.Sc+3-1)/3);l.window=new Q.hb(l.ma*2);l.head=new Q.Ja(l.mc);l.Ia=new Q.Ja(l.ma);l.Pb=1<<f+6;l.Aa=l.Pb*4;l.ba=new Q.hb(l.Aa);l.Hb=1*l.Pb;l.Xc=3*l.Pb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.gb=b.td=0;b.Jc=2;c=b.state;c.pending=0;c.Qb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.rb=0;if(!Vm){d=Array(16);for(f=g=0;f<28;f++)for(zm[f]=g,e=0;e<1<<rm[f];e++)ym[g++]=
f;ym[g-1]=f;for(f=g=0;f<16;f++)for(Am[f]=g,e=0;e<1<<sm[f];e++)xm[g++]=f;for(g>>=7;f<30;f++)for(Am[f]=g<<7,e=0;e<1<<sm[f]-7;e++)xm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)vm[e*2+1]=8,e++,d[8]++;for(;e<=255;)vm[e*2+1]=9,e++,d[9]++;for(;e<=279;)vm[e*2+1]=7,e++,d[7]++;for(;e<=287;)vm[e*2+1]=8,e++,d[8]++;Km(vm,287,d);for(e=0;e<30;e++)wm[e*2+1]=5,wm[e*2]=Jm(e,5);Cm=new Bm(vm,rm,257,286,15);Dm=new Bm(wm,sm,0,30,15);Em=new Bm([],tm,0,19,7);Vm=!0}c.oc=new Fm(c.ta,Cm);c.ec=new Fm(c.ab,Dm);c.Cd=
new Fm(c.ka,Em);c.pa=0;c.ha=0;Lm(c);c=0}else c=Xm(b,-2);c===0&&(b=b.state,b.Je=2*b.ma,Ym(b.head),b.ad=jn[b.level].pg,b.Td=jn[b.level].wf,b.ie=jn[b.level].sg,b.ee=jn[b.level].og,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.cb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(pm[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Ib){var k;typeof a.Ib==="string"?k=im(a.Ib):nn.call(a.Ib)==="[object ArrayBuffer]"?k=new Uint8Array(a.Ib):k=a.Ib;a=this.R;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,b===2||b===1&&k.status!==42||k.G)b=-2;else{b===1&&(a.L=jm(a.L,f,g,0));k.wrap=0;g>=k.ma&&(b===0&&(Ym(k.head),k.C=0,k.va=0,k.la=0),c=new Q.hb(k.ma),Q.kb(c,f,g-k.ma,k.ma,0),f=c,g=k.ma);c=a.oa;d=a.fb;e=a.input;a.oa=g;a.fb=0;a.input=f;for(cn(k);k.G>=3;){f=k.C;g=k.G-2;do k.S=(k.S<<k.Oa^k.window[f+3-1])&k.Na,k.Ia[f&k.Va]=k.head[k.S],k.head[k.S]=f,f++;while(--g);k.C=f;k.G=2;cn(k)}k.C+=k.G;k.va=k.C;k.la=k.G;k.G=0;k.V=k.wa=2;k.cb=0;a.fb=d;a.input=e;a.oa=c;k.wrap=b;b=0}else b=-2;if(b!==0)throw Error(pm[b]);
this.Dh=!0}}
on.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=im(a):nn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.oa=c.input.length;do{c.T===0&&(c.output=new Q.hb(d),c.vb=0,c.T=d);a=ln(c,e);if(a!==1&&a!==0)return pn(this,a),this.ended=!0,!1;if(c.T===0||c.oa===0&&(e===4||e===2))if(this.options.Ua==="string"){var f=Q.rd(c.output,c.vb);b=f;f=f.length;if(f<65537&&(b.subarray&&hm||!b.subarray))b=
String.fromCharCode.apply(null,Q.rd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=Q.rd(c.output,c.vb),this.chunks.push(b)}while((c.oa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Xm(c,-2):(c.state=null,a=d===113?Xm(c,-3):0)):a=-2,pn(this,a),this.ended=!0,a===0;e===2&&(pn(this,0),c.T=0);return!0};
function pn(a,b){b===0&&(a.result=a.options.Ua==="string"?a.chunks.join(""):Q.Md(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
;function qn(a){this.name=a}
;var rn=new qn("rawColdConfigGroup");var sn=new qn("rawHotConfigGroup");function tn(a){this.U=Dd(a)}
y(tn,fe);tn.prototype.g=function(a){J(this,5,a)};function un(a){this.U=Dd(a)}
y(un,fe);function vn(a){this.U=Dd(a)}
y(vn,fe);function wn(a){this.U=Dd(a)}
y(wn,fe);wn.prototype.ob=function(){return ae(this,61)};
wn.prototype.getPlayerType=function(){return ae(this,36)};
wn.prototype.setHomeGroupInfo=function(a){return Xd(this,vn,81,a)};function xn(a){this.U=Dd(a)}
y(xn,fe);var yn=[2,3,4,5,6];function zn(a){this.U=Dd(a)}
y(zn,fe);function An(a){this.U=Dd(a)}
y(An,fe);function Bn(a){this.U=Dd(a)}
y(Bn,fe);function Cn(a){this.U=Dd(a)}
y(Cn,fe);Cn.prototype.setSafetyMode=function(a){return de(this,5,a)};function Dn(a){this.U=Dd(a)}
y(Dn,fe);var En={Ch:"WEB_DISPLAY_MODE_UNKNOWN",yh:"WEB_DISPLAY_MODE_BROWSER",Ah:"WEB_DISPLAY_MODE_MINIMAL_UI",Bh:"WEB_DISPLAY_MODE_STANDALONE",zh:"WEB_DISPLAY_MODE_FULLSCREEN"};function Fn(a){this.U=Dd(a,497)}
y(Fn,fe);function Gn(a){this.U=Dd(a)}
y(Gn,fe);function Hn(a){this.U=Dd(a)}
y(Hn,fe);Hn.prototype.getPlaylistId=function(){return be(this,2)};
var ce=[1,2];function In(a){this.U=Dd(a)}
y(In,fe);var Jn=C.window,Kn,Ln,Mn=(Jn==null?void 0:(Kn=Jn.yt)==null?void 0:Kn.config_)||(Jn==null?void 0:(Ln=Jn.ytcfg)==null?void 0:Ln.data_)||{};G("yt.config_",Mn);function Nn(){var a=arguments;a.length>1?Mn[a[0]]=a[1]:a.length===1&&Object.assign(Mn,a[0])}
function S(a,b){return a in Mn?Mn[a]:b}
;var On={};function Pn(){return On.clicktracking||(On.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function T(a){a=Qn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function V(a,b){a=Qn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Qn(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Rn(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function Sn(a,b,c,d){Te.set(""+a,b,{Zc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var Tn=[];function Un(a){Tn.forEach(function(b){return b(a)})}
function Vn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Wn(b)}}:a}
function Wn(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Nn("ERRORS",b));Un(a)}
function Xn(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Nn("ERRORS",f))}
;var Yn=/^[\w.]*$/,Zn={q:!0,search_query:!0};function $n(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=ao(f[0]||""),h=ao(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?Db(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,m=f[0],p=String($n);k.args=[{key:m,value:f[1],query:a,method:bo===p?"unchanged":p}];Zn.hasOwnProperty(m)||Xn(k)}}return c}
var bo=String($n);function co(a){var b=[];ub(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Ab(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function eo(a){a.charAt(0)==="?"&&(a=a.substring(1));return $n(a,"&")}
function fo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=eo(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Nb(a,e)+d}
function go(a){if(!b)var b=window.location.href;var c=a.match(Gb)[1]||null,d=Ib(a);c&&d?(a=a.match(Gb),b=b.match(Gb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ib(b)===d&&(Number(b.match(Gb)[4]||null)||null)===(Number(a.match(Gb)[4]||null)||null):!0;return a}
function ao(a){return a&&a.match(Yn)?a:Fb(a)}
;var ho=kc||lc;function io(a){var b=Ub();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var jo=Date.now().toString();function ko(a){var b=lo;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Le;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?he:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=(l=he.screen)==null?void 0:l.height;var k;e.u_w=(k=he.screen)==null?void 0:k.width;var m;e.u_ah=(m=he.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=he.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=he.screen)==null?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var u=h.outerWidth;var A=h.outerHeight}catch(fb){}try{var K=h.innerWidth;var O=h.innerHeight}catch(fb){}try{var X=h.screenLeft;var U=h.screenTop}catch(fb){}try{K=h.innerWidth,O=h.innerHeight}catch(fb){}try{var da=h.screen.availWidth;var Ua=h.screen.availTop}catch(fb){}q=[X,U,q,t,da,Ua,u,A,K,O];t=b.g.top;try{var gb=(t||window).document,ra=
gb.compatMode=="CSS1Compat"?gb.documentElement:gb.body;var Ea=(new Be(ra.clientWidth,ra.clientHeight)).round()}catch(fb){Ea=new Be(-12245933,-12245933)}gb=Ea;Ea={};var Ka=Ka===void 0?C:Ka;ra=new Al;"SVGElement"in Ka&&"createElementNS"in Ka.document&&ra.set(0);t=Ie();t["allow-top-navigation-by-user-activation"]&&ra.set(1);t["allow-popups-to-escape-sandbox"]&&ra.set(2);Ka.crypto&&Ka.crypto.subtle&&ra.set(3);"TextDecoder"in Ka&&"TextEncoder"in Ka&&ra.set(4);Ka=Bl(ra);Ea.bc=Ka;Ea.bih=gb.height;Ea.biw=
gb.width;Ea.brdim=q.join();b=b.l;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!he.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var lo=new function(){var a=window.document;this.g=window;this.l=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return co(ko(a))});F();var mo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function no(){if(!mo)return null;var a=mo();return"open"in a?a:null}
;function oo(a,b){typeof a==="function"&&(a=Vn(a));return window.setTimeout(a,b)}
;var po="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(po);var qo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ro="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(po)),so=!1;
function to(a,b,c,d,e,f,g,h){function l(){(k&&"readyState"in k?k.readyState:0)===4&&b&&Vn(b)(k)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var k=no();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;T("debug_forward_web_query_parameters")&&(a=uo(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=vo(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){Xn(p)}}k.send(d);return k}
function vo(a,b){b=b===void 0?{}:b;var c=go(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in qo){var g=S(qo[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var l;if(!(l=!g)){if(!(l=c||(Ib(a)?!1:!0))){l=a;var k;if(k=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))k=Ib(l),k=k!==null?k.split(".").reverse():null,k=k===null?
!1:k[1]==="google"?!0:k[2]==="google"?k[0]==="au"&&k[1]==="com"?!0:k[0]==="uk"&&k[1]==="co"?!0:!1:!1;k&&(l=Hb(l.match(Gb)[5]||null)||"",l=l.split("/"),l="/"+(l.length>1?l[1]:""),k=l==="/pagead");l=k?!0:!1}l=!l}l||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ib(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ib(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Ib(a)||(b["X-YouTube-Ad-Signals"]=co(ko()));return b}
function wo(a,b){b.method="POST";b.postParams||(b.postParams={});return xo(a,b)}
function xo(a,b){var c=b.format||"JSON";a=yo(a,b);var d=zo(a,b),e=!1,f=Ao(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,p=400<=l.status&&l.status<500,r=500<=l.status&&l.status<600;if(k||p||r)m=Bo(a,c,l,b.convertToSafeHtml);k&&(k=Co(c,l,m));m=m||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,m):b.onError&&b.onError.call(p,l,m);b.onFinish&&
b.onFinish.call(p,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=oo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function yo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fo(a,b||{},!0);return a}
function zo(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ib(a)&&!b.withCredentials&&Ib(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=eo(e),xb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!so&&a&&b.method!=="POST"&&(so=!0,Wn(Error("AJAX request with postData should use POST")));return e}
function Bo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Xn(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Do(a):null)e={},Ab(a.getElementsByTagName("*"),function(g){e[g.tagName]=Eo(g)})}d&&Fo(e);
return e}
function Fo(a){if(Ma(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=pb(a[b]);a[c]=d}else Fo(a[b])}}
function Co(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Do(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Eo(a){var b="";Ab(a.childNodes,function(c){b+=c.nodeValue});
return b}
function uo(a){var b=window.location.search,c=Ib(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&go(a)&&(c=document.location.hostname);var d=Hb(a.match(Gb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=eo(b),f={};Ab(ro,function(g){e[g]&&(f[g]=e[g])});
return fo(a,f||{},!1)}
var Ao=to;function Go(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Ho(){}
;function Io(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;G("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Jo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ko={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Lo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Mo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function No(){var a=C.navigator;return a?a.connection:void 0}
;function Oo(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Oo,Error);function Po(){try{return Qo(),!0}catch(a){return!1}}
function Qo(){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new Oo("Datasync ID not set","unknown");}
;function Ro(){}
function So(a,b){return Ef.Ya(a,0,b)}
Ro.prototype.Ga=function(a,b){return this.Ya(a,1,b)};
Ro.prototype.Eb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var To=V("web_emulated_idle_callback_delay",300),Uo=1E3/60-3,Vo=[8,5,4,3,2,1,0];
function Wo(a){a=a===void 0?{}:a;Ye.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(Vo),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=Uo;this.u=0;this.O=this.vg.bind(this);this.ea=this.Sg.bind(this);this.X=this.Re.bind(this);this.Y=this.Tf.bind(this);this.ca=this.Ag.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(Wo,Ye);n=Wo.prototype;n.Eb=function(a){var b=F();Xo(a);a=F()-b;this.s||(this.A-=a)};
n.Ya=function(a,b,c){++this.I;if(b===10)return this.Eb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&Yo(this)!==this.u&&Zo(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function $o(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};Zo(a)}
function Yo(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function ap(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Xo(a){try{a()}catch(b){ap(b)}}
function bp(a){for(var b=w(Vo),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Tf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;cp(this,b);this.J=!1};
n.Sg=function(){cp(this)};
n.Re=function(){dp(this)};
n.Ag=function(a){this.D=!0;var b=Yo(this);b===4&&b!==this.u&&(Zo(this),this.start());cp(this,void 0,a);this.D=!1};
n.vg=function(){document.hidden||dp(this);this.g&&(Zo(this),this.start())};
function dp(a){Zo(a);a.s=!0;for(var b=F(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Xo(e)}ep(a);a.s=!1;bp(a)&&a.start();b=F()-b;a.A-=b}
function ep(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function cp(a,b,c){a.D&&a.u===4&&a.g||Zo(a);a.s=!0;b=F()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){ap(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Xo(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(F()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&Xo(c)}while(c&&F()<b)}a.s=!1;ep(a);a.A=Uo;bp(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=Yo(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,To);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function Zo(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){$o(this);Zo(this);this.F&&document.removeEventListener("visibilitychange",this.O);Ye.prototype.Ba.call(this)};var fp=D("yt.scheduler.instance.timerIdMap_")||{},gp=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),hp=0,ip=0;function jp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Za)a=new Wo(S("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function kp(){lp();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),G("ytglobal.schedulerInstanceInstance_",null))}
function lp(){$o(jp());for(var a in fp)fp.hasOwnProperty(a)&&delete fp[Number(a)]}
function mp(a,b,c){if(!c)return c=c===void 0,-jp().Ya(a,b,c);var d=window.setTimeout(function(){var e=jp().Ya(a,b);fp[d]=e},c);
return d}
function np(a){jp().Eb(a)}
function op(a){var b=jp();if(a<0)b.xa(-a);else{var c=fp[a];c?(b.xa(c),delete fp[a]):window.clearTimeout(a)}}
function pp(){qp()}
function qp(){window.clearTimeout(hp);jp().start()}
function rp(){var a=jp();Zo(a);a.H=!0;window.clearTimeout(hp);hp=window.setTimeout(pp,gp)}
function sp(){window.clearTimeout(ip);ip=window.setTimeout(function(){tp(0)},gp)}
function tp(a){sp();var b=jp();b.o=a;b.start()}
function up(a){sp();var b=jp();b.o>a&&(b.o=a,b.start())}
function vp(){window.clearTimeout(ip);var a=jp();a.o=0;a.start()}
;function wp(){Ro.apply(this,arguments)}
y(wp,Ro);function xp(){wp.g||(wp.g=new wp);return wp.g}
wp.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):oo(a,c||0)};
wp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Ef=xp();
T("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(G("yt.scheduler.instance.dispose",kp),G("yt.scheduler.instance.addJob",mp),G("yt.scheduler.instance.addImmediateJob",np),G("yt.scheduler.instance.cancelJob",op),G("yt.scheduler.instance.cancelAllJobs",lp),G("yt.scheduler.instance.start",qp),G("yt.scheduler.instance.pause",rp),G("yt.scheduler.instance.setPriorityThreshold",tp),G("yt.scheduler.instance.enablePriorityThreshold",up),G("yt.scheduler.instance.clearPriorityThreshold",vp),G("yt.scheduler.initialized",
!0));function yp(a){var b=new cm;this.g=(a=(b.l=bm(b.g))?a?new dm(b,a):b:null)?new Xl(a):null;this.l=document.domain||window.location.hostname}
yp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Ll(b))}catch(f){return}else e=escape(b);Sn(a,e,c,this.l)};
yp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Te.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Te.remove(""+a,"/",b===void 0?"youtube.com":b)};var zp=function(){var a;return function(){a||(a=new yp("ytidb"));return a}}();
function Ap(){var a;return(a=zp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bp=[],Cp=!1;function Dp(a){Cp||(Bp.push({type:"ERROR",payload:a}),Bp.length>10&&Bp.shift())}
function Ep(a,b){Cp||(Bp.push({type:"EVENT",eventType:a,payload:b}),Bp.length>10&&Bp.shift())}
;function Fp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Gp(a){return a.substr(0,a.indexOf(":"))||a}
;var Hp={},Ip=(Hp.AUTH_INVALID="No user identifier specified.",Hp.EXPLICIT_ABORT="Transaction was explicitly aborted.",Hp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Hp.MISSING_INDEX="Index not created.",Hp.MISSING_OBJECT_STORES="Object stores not created.",Hp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Hp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Hp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Hp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Hp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Hp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Hp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Hp),Jp={},Kp=(Jp.AUTH_INVALID="ERROR",Jp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Jp.EXPLICIT_ABORT="IGNORED",Jp.IDB_NOT_SUPPORTED="ERROR",Jp.MISSING_INDEX=
"WARNING",Jp.MISSING_OBJECT_STORES="ERROR",Jp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Jp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Jp.QUOTA_EXCEEDED="WARNING",Jp.QUOTA_MAYBE_EXCEEDED="WARNING",Jp.UNKNOWN_ABORT="WARNING",Jp.INCOMPATIBLE_DB_VERSION="WARNING",Jp),Lp={},Mp=(Lp.AUTH_INVALID=!1,Lp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Lp.EXPLICIT_ABORT=!1,Lp.IDB_NOT_SUPPORTED=!1,Lp.MISSING_INDEX=!1,Lp.MISSING_OBJECT_STORES=!1,Lp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Lp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Lp.QUOTA_EXCEEDED=!1,Lp.QUOTA_MAYBE_EXCEEDED=!0,Lp.UNKNOWN_ABORT=!0,Lp.INCOMPATIBLE_DB_VERSION=!1,Lp);function W(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Ip[a]:c;d=d===void 0?Kp[a]:d;e=e===void 0?Mp[a]:e;Oo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,W.prototype)}
y(W,Oo);function Np(a,b){W.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ip.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Np.prototype)}
y(Np,W);function Op(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Op.prototype)}
y(Op,Error);var Pp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qp(a,b,c,d){b=Gp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof W)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new W("QUOTA_EXCEEDED",a);if(mc&&e.name==="UnknownError")return new W("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Op)return new W("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Pp.some(function(f){return e.message.includes(f)}))return new W("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new W("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",di:e.name})];e.level="WARNING";return e}
function Rp(a,b,c){var d=Ap();return new W("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Sp(a){if(!a)throw Error();throw a;}
function Tp(a){return a}
function Up(a){this.g=a}
function Vp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Vp.resolve=function(a){return new Vp(new Up(function(b,c){a instanceof Vp?a.then(b,c):b(a)}))};
Vp.reject=function(a){return new Vp(new Up(function(b,c){c(a)}))};
Vp.prototype.then=function(a,b){var c=this,d=a!=null?a:Tp,e=b!=null?b:Sp;return new Vp(new Up(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){Wp(c,c,d,f,g)}),c.l.push(function(){Xp(c,c,e,f,g)})):c.state.status==="FULFILLED"?Wp(c,c,d,f,g):c.state.status==="REJECTED"&&Xp(c,c,e,f,g)}))};
function Yp(a,b){a.then(void 0,b)}
function Wp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Vp?Zp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Vp?Zp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Vp?Zp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function $p(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function aq(a){return new Promise(function(b,c){$p(a,b,c)})}
function bq(a){return new Vp(new Up(function(b,c){$p(a,b,c)}))}
;function cq(a,b){return new Vp(new Up(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var dq=window,Y=dq.ytcsi&&dq.ytcsi.now?dq.ytcsi.now:dq.performance&&dq.performance.timing&&dq.performance.now&&dq.performance.timing.navigationStart?function(){return dq.performance.timing.navigationStart+dq.performance.now()}:function(){return(new Date).getTime()};function eq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=eq.prototype;n.add=function(a,b,c){return fq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return fq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function gq(a,b,c){a=a.g.createObjectStore(b,c);return new hq(a)}
n.delete=function(a,b){return fq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return fq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function iq(a,b,c){return fq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return bq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function fq(a,b,c,d){var e,f,g,h,l,k,m,p,r,q,t,u;return B(function(A){switch(A.g){case 1:var K={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){A.M(4);break}g++;l=Math.round(Y());va(A,5);k=a.g.transaction(b,e.mode);K=new jq(k);K=kq(K,d);return z(A,K,7);case 7:return m=A.l,p=Math.round(Y()),lq(a,l,p,g,void 0,b.join(),e),A.return(m);case 5:r=wa(A);q=Math.round(Y());t=Qp(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof W&&!t.g)||g>=f)lq(a,l,q,g,t,b.join(),e),h=t;A.M(2);break;case 4:return A.return(Promise.reject(h))}})}
function lq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof W&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Ep("QUOTA_EXCEEDED",{dbName:Gp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof W&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),Ep("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),mq(a,!1,d,f,b,g.tag),Dp(e)):mq(a,!0,d,f,b,g.tag)}
function mq(a,b,c,d,e,f){Ep("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function hq(a){this.g=a}
n=hq.prototype;n.add=function(a,b){return bq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return bq(this.g.clear()).then(function(){})};
function nq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function oq(a,b){return pq(a,{query:b},function(c){return c.delete().then(function(){return qq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?oq(this,a):bq(this.g.delete(a))};
n.get=function(a){return bq(this.g.get(a))};
n.index=function(a){try{return new rq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Op(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function pq(a,b,c){a=a.g.openCursor(b.query,b.direction);return sq(a).then(function(d){return cq(d,c)})}
function jq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=W;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(l===null)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function kq(a,b){var c=new Promise(function(d,e){try{Yp(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
jq.prototype.abort=function(){this.g.abort();this.l=!0;throw new W("EXPLICIT_ABORT");};
jq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new hq(a),this.i.set(a,b));return b};
function rq(a){this.g=a}
rq.prototype.delete=function(a){return tq(this,{query:a},function(b){return b.delete().then(function(){return qq(b)})})};
rq.prototype.get=function(a){return bq(this.g.get(a))};
rq.prototype.keyPath=function(){return this.g.keyPath};
rq.prototype.unique=function(){return this.g.unique};
function tq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return sq(a).then(function(d){return cq(d,c)})}
function uq(a,b){this.request=a;this.cursor=b}
function sq(a){return bq(a).then(function(b){return b?new uq(a,b):null})}
function qq(a){a.cursor.continue(void 0);return sq(a.request)}
uq.prototype.delete=function(){return bq(this.cursor.delete()).then(function(){})};
uq.prototype.update=function(a){return bq(this.cursor.update(a))};function vq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new eq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ue,l=c.Ve,k=c.Qg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Ep("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Gp(a)});var t=f(),u=new jq(g.transaction);m&&
m(t,function(A){return q.oldVersion<A&&q.newVersion>=A},u);
u.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){Ep("IDB_UNEXPECTEDLY_CLOSED",{dbName:Gp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function wq(a,b,c){c=c===void 0?{}:c;return vq(a,b,c)}
function xq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ue)&&c.addEventListener("blocked",function(){e()}),z(g,aq(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=wa(g),Qp(f,a,"",-1);})}
;function yq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
yq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return wq(a,b,c)};
yq.prototype.delete=function(a){a=a===void 0?{}:a;return xq(this.name,a)};
function zq(a,b){return new W("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Aq(a,b){if(!b)throw Rp("openWithToken",Gp(a.name));return Bq(a)}
function Bq(a){function b(){var f,g,h,l,k,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",va(u,2),z(u,a.l(a.name,a.options.version,d),4);case 4:for(var A=h=u.l,K=a.options,O=[],X=w(Object.keys(K.wb)),U=X.next();!U.done;U=X.next()){U=U.value;var da=K.wb[U],Ua=da.Cg===void 0?Number.MAX_VALUE:da.Cg;!(A.g.version>=da.Fb)||A.g.version>=Ua||A.g.objectStoreNames.contains(U)||O.push(U)}l=O;if(l.length===0){u.M(5);break}k=Object.keys(a.options.wb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),Dp(new W("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.m<V("ytidb_remake_db_retries",1))){u.M(6);break}a.m++;return z(u,a.delete(),7);case 7:return Dp(new W("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Np(m,k);case 5:return u.return(h);case 2:p=wa(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.M(8);break}return z(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,zq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!T("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Qp(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw zq(a);if(a.g)return a.g;var d={Ve:function(f){f.close()},
closed:c,Qg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Cq=new yq("YtIdbMeta",{wb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&gq(a,"databases",{keyPath:"actualName"})}});
function Dq(a,b){var c;return B(function(d){if(d.g==1)return z(d,Aq(Cq,b),2);c=d.l;return d.return(fq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return bq(f.g.put(a,void 0)).then(function(){})})}))})}
function Eq(a,b){var c;return B(function(d){if(d.g==1)return a?z(d,Aq(Cq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Fq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],z(e,Aq(Cq,b),2)):e.g!=3?(d=e.l,z(e,fq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return pq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return qq(g)})}),3)):e.return(c)})}
function Gq(a){return Fq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Hq,Iq=new function(){}(new function(){});
function Jq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Ap();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ho)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&parseInt(f[1],10)>=602));if(f||ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return z(e,Dq(d,Iq),4);case 4:return z(e,Eq("yt-idb-test-do-not-use",Iq),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Kq(){if(Hq!==void 0)return Hq;Cp=!0;return Hq=Jq().then(function(a){Cp=!1;var b;if((b=zp())!=null&&b.g){var c;b={hasSucceededOnce:((c=Ap())==null?void 0:c.hasSucceededOnce)||a};var d;(d=zp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Lq(){return D("ytglobal.idbToken_")||void 0}
function Mq(){var a=Lq();return a?Promise.resolve(a):Kq().then(function(b){(b=b?Iq:void 0)&&G("ytglobal.idbToken_",b);return b})}
;new Rl;function Nq(a){if(!Po())throw a=new W("AUTH_INVALID",{dbName:a}),Dp(a),a;var b=Qo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Oq(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",z(m,Mq(),2);case 2:g=m.l;if(!g)throw h=Rp("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Dp(h),h;Fp(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Nq(a);va(m,3);return z(m,Dq(l,g),5);case 5:return z(m,wq(l.actualName,b,d),6);case 6:return m.return(m.l);case 3:return k=wa(m),va(m,7),z(m,Eq(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw k;}})}
function Pq(a,b,c){c=c===void 0?{}:c;return Oq(a,b,!1,c)}
function Qq(a,b,c){c=c===void 0?{}:c;return Oq(a,b,!0,c)}
function Rq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return z(e,Mq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Fp(a);d=Nq(a);return z(e,xq(d.actualName,b),3)}return z(e,Eq(d.actualName,c),0)})}
function Sq(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?z(e,xq(d.actualName,b),2):z(e,Eq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Tq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return z(d,Mq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Fp("LogsDatabaseV2");return z(d,Gq(b),3)}c=d.l;return z(d,Sq(c,a,b),0)})}
function Uq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return z(d,Mq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Fp(a);return z(d,xq(a,b),3)}return z(d,Eq(a,c),0)})}
;function Vq(a,b){yq.call(this,a,b);this.options=b;Fp(a)}
y(Vq,yq);function Wq(a,b){var c;return function(){c||(c=new Vq(a,b));return c}}
Vq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Qq:Pq)(a,b,Object.assign({},c))};
Vq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Uq:Rq)(this.name,a)};
function Xq(a,b){return Wq(a,b)}
;var Yq={},Zq=Xq("ytGcfConfig",{wb:(Yq.coldConfigStore={Fb:1},Yq.hotConfigStore={Fb:1},Yq),shared:!1,upgrade:function(a,b){b(1)&&(nq(gq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),nq(gq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function $q(a){return Aq(Zq(),a)}
function ar(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},z(g,$q(c),2);case 2:return e=g.l,z(g,e.clear("hotConfigStore"),3);case 3:return z(g,iq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function br(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},z(h,$q(d),2);case 2:return f=h.l,z(h,f.clear("coldConfigStore"),3);case 3:return z(h,iq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function cr(a){var b,c;return B(function(d){return d.g==1?z(d,$q(a),2):d.g!=3?(b=d.l,c=void 0,z(d,fq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return tq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function dr(a){var b,c;return B(function(d){return d.g==1?z(d,$q(a),2):d.g!=3?(b=d.l,c=void 0,z(d,fq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return tq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function er(){Ye.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],G("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(er,Ye);er.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Ye.prototype.Ba.call(this)};function fr(){this.l=0;this.i=new er}
function gr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!T("start_client_gcf")){g.M(0);break}c&&(a.m=c,G("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Lq();if(!d){g.M(3);break}if(c){g.M(4);break}return z(g,dr(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return z(g,ar(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function hr(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!T("start_client_gcf"))return h.M(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Lq())?c?h.M(4):z(h,cr(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return z(h,br(c,b,g,d),0)})}
fr.prototype.g=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function ir(){return"INNERTUBE_API_KEY"in Mn&&"INNERTUBE_API_VERSION"in Mn}
function jr(){return{Wf:S("INNERTUBE_API_KEY"),Xf:S("INNERTUBE_API_VERSION"),Tc:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Yf:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),ae:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),ce:S("INNERTUBE_CONTEXT_HL"),be:S("INNERTUBE_CONTEXT_GL"),Zf:S("INNERTUBE_HOST_OVERRIDE")||"",bg:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ag:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function kr(a){var b={client:{hl:a.ce,gl:a.be,clientName:a.Zd,clientVersion:a.ae,configInfo:a.Tc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Rn();c.length>0&&(b.request={internalExperimentFlags:c});lr(a,void 0,b);mr(void 0,b);nr(void 0,b);or(a,void 0,b);pr(void 0,b);T("start_client_gcf")&&qr(void 0,b);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&
(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(eo(S("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function lr(a,b,c){a=a.Zd;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=Wd(b,un,96)||new un;var d=Go();d=Object.keys(En).indexOf(d);d=d===-1?null:d;d!==null&&de(c,3,d);Xd(b,un,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Go())}
function mr(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Wd(a,An,7)||new An,J(b,4,c),Xd(a,An,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function nr(a,b){var c;if(T("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?Rd(a,95,rd(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function or(a,b,c){if(a.appInstallData)if(b){var d;c=(d=Wd(b,tn,62))!=null?d:new tn;J(c,6,a.appInstallData);Xd(b,tn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function pr(a,b){a:{var c=No();if(c){var d=Jo[c.type||"unknown"]||"CONN_UNKNOWN";c=Jo[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?de(a,61,Ko[d]):b&&(b.client.connectionType=d));T("web_log_effective_connection_type")&&(d=No(),d=d!=null&&d.effectiveType?Mo.hasOwnProperty(d.effectiveType)?Mo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?de(a,94,Lo[d]):
b&&(b.client.effectiveConnectionType=d)))}
function rr(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Fh||S("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Eh;else{Ho.g||(Ho.g=new Ho);a={};c=[];var e=T("enable_first_party_auth_v2")||void 0;"USER_SESSION_ID"in Mn&&e&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=Xe(c))a.Authorization=c,c=void 0,
c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Mn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Mn&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));T("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function qr(a,b){if(!fr.g){var c=new fr;fr.g=c}c=fr.g;var d=Y()-c.l;if(c.l!==0&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=Wd(a,tn,62))!=null?g:new tn;g=J(b,1,d);J(g,3,c).g(e);Xd(a,tn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var sr=typeof TextEncoder!=="undefined"?new TextEncoder:null,tr=sr?function(a){return sr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var ur=D("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Bc;P.prototype.publish=P.prototype.oe;P.prototype.clear=P.prototype.clear;G("ytPubsub2Pubsub2Instance",ur);G("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);function vr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={vi:a,ui:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var wr=void 0,xr=void 0;function yr(){if(!xr){var a=S("WORKER_SERIALIZATION_URL");xr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ab(a):null:null}return xr||void 0}
function zr(){var a=yr();wr||a===void 0||(wr=new Worker($a(a),void 0));return wr}
;var Ar=V("max_body_size_to_compress",5E5),Br=V("min_body_size_to_compress",500),Cr=!0,Dr=0,Er=0,Fr=V("compression_performance_threshold_lr",250),Gr=V("slow_compressions_before_abandon_count",4),Hr=!1,Ir=new Map,Jr=1,Kr=!0;function Lr(){if(typeof Worker==="function"&&yr()&&!Hr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Ir.get(c.key);d&&(Mr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Ir.delete(c.key))}},b=zr();
b&&(b.addEventListener("message",a),b.onerror=function(){Ir.clear()},Hr=!0)}}
function Nr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Cr)try{try{var g=(new Blob(b.split(""))).size}catch(m){Xn(m),g=null}if(g!=null&&(g>Ar||g<Br))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Kr||!T("initial_gzip_use_main_thread"))){Hr||Lr();var h=zr();if(h&&!e){Ir.set(Jr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Jr});Jr++;return}}var l=tr(b);b=(b=void 0,{});b.xf=!0;var k=new on(b);
k.push(l,!0);if(k.err)throw k.msg||pm[k.err];Mr(k.result,f,a,c,d)}}catch(m){Xn(m),d(a,c)}else d(a,c)}
function Mr(a,b,c,d,e){Kr=!1;var f=Y();b.ticks.gelc=f;Er++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Fr&&(Dr++,T("abandon_compression_after_N_slow_zips")?Er===V("compression_disable_point")&&Dr>Gr&&(Cr=!1):Cr=!1);T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||vr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Or(a){a=Object.assign({},a);delete a.Authorization;var b=Xe();if(b){var c=new Dl;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=pc(c.digest(),3)}return a}
;var Pr;function Qr(){Pr||(Pr=new yp("yt.innertube"));return Pr}
function Rr(a,b,c,d){if(d)return null;d=Qr().get("nextId",!0)||1;var e=Qr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Or(c),requestTime:Math.round(Y())};Qr().set("nextId",d+1,86400,!0);Qr().set("requests",e,86400,!0);return d}
function Sr(a){var b=Qr().get("requests",!0)||{};delete b[a];Qr().set("requests",b,86400,!0)}
function Tr(a){var b=Qr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Or(rr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Ur(a,d.method,e,{}));delete b[c]}}Qr().set("requests",b,86400,!0)}}
;function Vr(a){this.Xb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Jb=!1;var b;this.Fe=(b=a.Fe)!=null?b:100;var c;this.we=(c=a.we)!=null?c:1;var d;this.se=(d=a.se)!=null?d:2592E6;var e;this.pe=(e=a.pe)!=null?e:12E4;var f;this.ue=(f=a.ue)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.hc=!!a.hc;var h;this.cc=(h=a.cc)!=null?h:.1;var l;this.sc=(l=a.sc)!=null?l:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Jb&&(this.Jb=a.Jb);a.Xb&&(this.Xb=a.Xb);this.aa=a.aa;this.Da=a.Da;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.gd=a.gd;this.dd=a.dd;Wr(this)&&(!this.aa||this.aa("networkless_logging"))&&Xr(this)}
function Xr(a){Wr(a)&&!a.Jb&&(a.g=!0,a.hc&&Math.random()<=a.cc&&a.fa.Xe(a.Z),Yr(a),a.ia.ya()&&a.Tb(),a.ia.ra(a.gd,a.Tb.bind(a)),a.ia.ra(a.dd,a.Dd.bind(a)))}
n=Vr.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Wr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&Zr(c,d)}).catch(function(e){Zr(c,d);
$r(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Wr(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(l.g==1)return z(l,d.fa.set(e,d.Z).catch(function(k){$r(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
$r(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Wr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.mb(d.id,c.Z):e=!0;c.ia.eb&&c.aa&&c.aa("vss_network_hint")&&c.ia.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.mb(d.id,c.Z)}).catch(function(g){$r(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Tb=function(){var a=this;if(!Wr(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Da.Ga(function(){var b;return B(function(c){if(c.g==1)return z(c,a.fa.Qd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?z(c,Zr(a,b),3):(a.Dd(),c.return());a.l&&(a.l=0,a.Tb());c.g=0})},this.Fe))};
n.Dd=function(){this.Da.xa(this.l);this.l=0};
function Zr(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Wr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return z(d,a.fa.ng(b.id,a.Z),3);case 3:(c=d.l)||a.pb(Error("The request cannot be found in the database."));case 2:if(as(a,b,a.se)){d.M(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return z(d,a.fa.mb(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=bs(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return z(d,a.fa.mb(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function bs(a,b){if(!Wr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=cs(f);(h=ds(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.sc)){m.M(2);break}if(!a.ia.xc){m.M(3);break}return z(m,a.ia.xc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((l=b)==null?void 0:l.id)===
void 0){m.M(6);break}return z(m,a.fa.nd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.sc)return m.return();a.potentialEsfErrorCounter++;if(((k=b)==null?void 0:k.id)===void 0){m.M(8);break}return b.sendCount<a.we?z(m,a.fa.nd(b.id,a.Z,!0,h?!1:void 0),12):z(m,a.fa.mb(b.id,a.Z),8);case 12:a.Da.Ga(function(){a.ia.ya()&&a.Tb()},a.ue);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):z(h,a.fa.mb(b.id,a.Z),2);a.ia.eb&&a.aa&&a.aa("vss_network_hint")&&a.ia.eb(!0);d(e,f);h.g=0})};
return b}
function as(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Yr(a){if(!Wr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Qd("QUEUED",a.Z).then(function(b){b&&!as(a,b,a.pe)?a.Da.Ga(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):z(c,a.fa.nd(b.id,a.Z),2);Yr(a);c.g=0})}):a.ia.ya()&&a.Tb()})}
function $r(a,b){a.Ke&&!a.ia.ya()?a.Ke(b):a.handleError(b)}
function Wr(a){return!!a.Z||a.Xb}
function cs(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function ds(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var es;
function fs(){if(es)return es();var a={};es=Xq("LogsDatabaseV2",{wb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&gq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),nq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return es()}
;function gs(a){return Aq(fs(),a)}
function hs(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},z(g,gs(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),z(g,iq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();is(c);return g.return(f)})}
function js(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},z(m,gs(b),2);if(m.g!=3)return d=m.l,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",T("use_fifo_for_networkless")&&(l="next"),k=void 0,z(m,fq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return tq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,a==="NEW"&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();is(c);return m.return(k)})}
function ks(a,b){var c;return B(function(d){if(d.g==1)return z(d,gs(b),2);c=d.l;return d.return(fq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",bq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function ls(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return z(f,gs(b),2);e=f.l;return f.return(fq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),d!==void 0&&(l.options.compress=d),bq(h.g.put(l,void 0)).then(function(){return l})):Vp.resolve(void 0)})}))})}
function ms(a,b){var c;return B(function(d){if(d.g==1)return z(d,gs(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function ns(a){var b,c;return B(function(d){if(d.g==1)return z(d,gs(a),2);b=d.l;c=Y()-2592E6;return z(d,fq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return pq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return qq(f)})})}),0)})}
function os(){B(function(a){return z(a,Tq(),0)})}
function is(a){T("nwl_csi_killswitch")||vr("networkless_performance",a,{sampleRate:1})}
;var ps={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var qs={},rs=Xq("ServiceWorkerLogsDatabase",{wb:(qs.SWHealthLog={Fb:1},qs),shared:!0,upgrade:function(a,b){b(1)&&nq(gq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ss(a){return Aq(rs(),a)}
function ts(a){var b,c;B(function(d){if(d.g==1)return z(d,ss(a),2);b=d.l;c=Y()-2592E6;return z(d,fq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return pq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return qq(f)})})}),0)})}
function us(a){var b;return B(function(c){if(c.g==1)return z(c,ss(a),2);b=c.l;return z(c,b.clear("SWHealthLog"),0)})}
;var vs={},ws=0;function xs(a){var b=new Image,c=""+ws++;vs[c]=b;b.onload=b.onerror=function(){delete vs[c]};
b.src=a}
;var ys;function zs(){ys||(ys=new yp("yt.offline"));return ys}
function As(a){if(T("offline_error_handling")){var b=zs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);zs().set("errors",b,2592E3,!0)}}
;function Bs(){this.g=new Map;this.l=!1}
function Cs(){if(!Bs.g){var a=D("yt.networkRequestMonitor.instance")||new Bs;G("yt.networkRequestMonitor.instance",a);Bs.g=a}return Bs.g}
Bs.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Bs.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
Bs.prototype.removeParams=function(a){return a.split("?")[0]};
Bs.prototype.removeParams=Bs.prototype.removeParams;Bs.prototype.isEndpointCFR=Bs.prototype.isEndpointCFR;Bs.prototype.requestComplete=Bs.prototype.requestComplete;Bs.getInstance=Cs;function Z(){xf.call(this);var a=this;this.i=!1;this.l=Df();this.l.ra("networkstatus-online",function(){if(a.i&&T("offline_error_handling")){var b=zs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Oo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Wn(d)}zs().set("errors",{},2592E3,!0)}}})}
y(Z,xf);function Ds(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;G("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.eb=function(a){this.l.l=a};
n.vf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.gf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.xc=function(a){a=Bf(this.l,a);a.then(function(b){T("use_cfr_monitor")&&Cs().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.xc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.gf;Z.prototype.getWindowStatus=Z.prototype.vf;Z.prototype.networkStatusHint=Z.prototype.eb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Ds;function Es(a){a=a===void 0?{}:a;xf.call(this);var b=this;this.l=this.s=0;this.i=Ds();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.vc?(this.vc=a.vc,c("networkstatus-online",function(){Fs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Fs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yf(b,"publicytnetworkstatus-offline")})))}
y(Es,xf);Es.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Es.prototype.eb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Es.prototype.xc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return T("skip_network_check_if_cfr")&&Cs().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Fs(a,b){a.vc?a.l?(Ef.xa(a.s),a.s=Ef.Ga(function(){a.o!==b&&(yf(a,b),a.o=b,a.l=Y())},a.vc-(Y()-a.l))):(yf(a,b),a.o=b,a.l=Y()):yf(a,b)}
;var Gs;function Hs(){var a=Vr.call;Gs||(Gs=new Es({bi:!0,Nh:!0}));a.call(Vr,this,{fa:{Xe:ns,mb:ms,Qd:js,ng:ks,nd:ls,set:hs},ia:Gs,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Xn(new Oo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Wn(b)},
pb:Xn,sendFn:Is,now:Y,Ke:As,Da:xp(),gd:"publicytnetworkstatus-online",dd:"publicytnetworkstatus-offline",hc:!0,cc:.1,sc:V("potential_esf_error_limit",10),aa:T,Jb:!(Po()&&Ib(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Rl;T("networkless_immediately_drop_all_requests")&&os();Uq("LogsDatabaseV2")}
y(Hs,Vr);function Js(){var a=D("yt.networklessRequestController.instance");a||(a=new Hs,G("yt.networklessRequestController.instance",a),T("networkless_logging")&&Mq().then(function(b){a.Z=b;Xr(a);a.i.resolve();a.hc&&Math.random()<=a.cc&&a.Z&&ts(a.Z);T("networkless_immediately_drop_sw_health_store")&&Ks(a)}));
return a}
Hs.prototype.writeThenSend=function(a,b){b||(b={});b=Ls(a,b);Po()||(this.g=!1);Vr.prototype.writeThenSend.call(this,a,b)};
Hs.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Ls(a,b);Po()||(this.g=!1);Vr.prototype.sendThenWrite.call(this,a,b,c)};
Hs.prototype.sendAndWrite=function(a,b){b||(b={});b=Ls(a,b);Po()||(this.g=!1);Vr.prototype.sendAndWrite.call(this,a,b)};
Hs.prototype.awaitInitialization=function(){return this.i.promise};
function Ks(a){var b;B(function(c){if(!a.Z)throw b=Rp("clearSWHealthLogsDb"),b;return c.return(us(a.Z).catch(function(d){a.handleError(d)}))})}
function Is(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Ms(a,b);if(T("use_request_time_ms_header"))b.headers&&go(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)to(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)to(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Ra({url:a});if(l.i&&l.l||l.m){var k=Hb(a.match(Gb)[5]||null),m;if(!(m=!k||!k.endsWith("/aclk"))){var p=a.search(Pb),r=Ob(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Fb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(K){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(K){}A=!1}c=A?!0:!1}else c=!1;c||xs(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Nr(a,b.postBody,b,xo,d)):Nr(a,JSON.stringify(b.postParams),b,wo,d):xo(a,b)}
function Ls(a,b){T("use_event_time_ms_header")&&go(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Ms(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Cs().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Cs().requestComplete(a,!0);d(e,f)}}
;var Ns=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};G("ytNetworklessLoggingInitializationOptions",Ns);function Os(a){var b=this;this.config_=null;a?this.config_=a:ir()&&(this.config_=jr());So(function(){Tr(b)},5E3)}
Os.prototype.isReady=function(){!this.config_&&ir()&&(this.config_=jr());return!!this.config_};
function Ur(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=Rr(b,c,k,l)),u)){var A=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(U,da){Sr(u);A(U,da)};
c.onFetchSuccess=function(U,da){Sr(u);K(U,da)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Js().writeThenSend(q,g):Js().sendAndWrite(q,g);
else if(d.compress){var O=!d.networklessOptions.writeThenSend;if(g.postBody){var X=g.postBody;typeof X!=="string"&&(X=JSON.stringify(g.postBody));Nr(q,X,g,xo,O)}else Nr(q,JSON.stringify(g.postParams),g,wo,O)}else T("web_all_payloads_via_jspb")?xo(q,g):wo(q,g)}catch(U){if(U.name==="InvalidAccessError")u&&(Sr(u),u=0),Xn(Error("An extension is blocking network request."));else throw U;}u&&So(function(){Tr(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Xn(new Oo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Oo("innertube xhrclient not ready",b,c,d);Wn(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Zf)&&(h=f);var l=a.config_.bg||!1,k=rr(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Xf+"/"+b,p={alt:"json"},r=a.config_.ag&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.Wf);var q=fo(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Ns.isNwlInitialized?Kq().then(function(t){e(t)}):e(!1)}
;var Ps=0;G("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Ps});G("ytEventsEventsListeners",C.ytEventsEventsListeners||{});G("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});var Qs=C.ytPubsubPubsubInstance||new P,Rs=C.ytPubsubPubsubSubscribedKeys||{},Ss=C.ytPubsubPubsubTopicToKeys||{},Ts=C.ytPubsubPubsubIsSynchronous||{};P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.Bc;P.prototype.publish=P.prototype.oe;P.prototype.clear=P.prototype.clear;G("ytPubsubPubsubInstance",Qs);G("ytPubsubPubsubTopicToKeys",Ss);G("ytPubsubPubsubIsSynchronous",Ts);G("ytPubsubPubsubSubscribedKeys",Rs);var Us=Symbol("injectionDeps");function Vs(){this.key=fr}
function Ws(){this.l=new Map;this.g=new Map}
Ws.prototype.resolve=function(a){return a instanceof Vs?Xs(this,a.key,[],!0):Xs(this,a,[])};
function Xs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Vg!==void 0)var e=d.Vg;else if(d.Ug)e=d[Us]?Ys(a,d[Us],c):[],e=d.Ug.apply(d,x(e));else if(d.Tg){e=d.Tg;var f=e[Us]?Ys(a,e[Us],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.oi||a.g.set(b,e);return e}
function Ys(a,b,c){return b?b.map(function(d){return d instanceof Vs?Xs(a,d.key,c,!0):Xs(a,d,c)}):[]}
;var Zs;function $s(){Zs||(Zs=new Ws);return Zs}
;var at=window;function bt(){var a,b;return"h5vcc"in at&&((a=at.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=at.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in at&&at.performance.mark&&at.performance.measure?2:0}
function ct(a){var b=bt();switch(b){case 1:at.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:at.performance.mark(a+"-start");break;case 0:break;default:sb(b,"unknown trace type")}}
function dt(a){var b=bt();switch(b){case 1:at.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";at.performance.mark(c);at.performance.measure(a,b,c);break;case 0:break;default:sb(b,"unknown trace type")}}
;var et=T("web_enable_lifecycle_monitoring")&&bt()!==0,ft=T("web_enable_lifecycle_monitoring");function gt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?xp():d;this.m=c;this.l=d;this.i=new Rl;this.g=a;for(a={bb:0};a.bb<this.g.length;a={qc:void 0,bb:a.bb},a.bb++)a.qc=this.g[a.bb],c=function(e){return function(){e.qc.Wc();b.g[e.bb].uc=!0;b.g.every(function(f){return f.uc===!0})&&b.i.resolve()}}(a),d=this.l.Ya(c,ht(this,a.qc)),this.g[a.bb]=Object.assign({},a.qc,{Wc:c,
jobId:d})}
function it(a){var b=Array.from(a.g.keys()).sort(function(d,e){return ht(a,a.g[e])-ht(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.uc||(a.l.xa(c.jobId),a.l.Ya(c.Wc,10))}
gt.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.uc||this.l.xa(b.jobId),b.uc=!0;this.i.resolve()};
function ht(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function jt(a){this.state=a;this.i=[];this.o=void 0;this.u={};et&&ct(this.state)}
jt.prototype.install=function(a){this.i.push(a);return this};
function kt(a){et&&dt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Ua==="none"}):d.from===a.state&&d.Ua==="none"});
if(b){a.l&&(it(a.l),a.l=void 0);ft&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";et&&ct(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(lt(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function lt(a,b){var c=b.filter(function(e){return mt(a,e)===10}),d=b.filter(function(e){return mt(a,e)!==10});
return a.u.mi?function(){var e=Fa.apply(0,arguments);return B(function(f){if(f.g==1)return z(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
jt.prototype.F=function(a){for(var b=Fa.apply(1,arguments),c=xp(),d=w(a),e=d.next(),f={};!e.done;f={Ob:void 0},e=d.next())f.Ob=e.value,c.Eb(function(g){return function(){nt(g.Ob.name);g.Ob.Hc.apply(g.Ob,x(b));ot(g.Ob.name)}}(f))};
jt.prototype.D=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=xp(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.sb=e.value;f.Vb=void 0;g=function(l){return function(){nt(l.sb.name);var k=l.sb.Hc.apply(l.sb,x(b));typeof(k==null?void 0:k.then)==="function"?l.Vb=k.then(function(){ot(l.sb.name)}):ot(l.sb.name)}}(f);
c.Eb(g);return f.Vb?z(h,f.Vb,3):h.M(3)}f={sb:void 0,Vb:void 0};e=d.next();return h.M(2)})};
jt.prototype.s=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Wc:function(){nt(e.name);e.Hc.apply(e,x(b));ot(e.name)},
priority:mt(c,e)}});
d.length&&(this.l=new gt(d))};
function mt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function nt(a){et&&a&&ct(a)}
function ot(a){et&&a&&dt(a)}
ea.Object.defineProperties(jt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function pt(a){jt.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ua:"application_navigating",action:this.A},{from:"application_navigating",Ua:"none",action:this.B},{from:"application_navigating",Ua:"application_navigating",action:function(){}},
{from:"none",Ua:"none",action:function(){}}]}
var qt;y(pt,jt);pt.prototype.A=function(a,b){var c=this;this.g=So(function(){c.m==="application_navigating"&&kt(c)},5E3);
a(b==null?void 0:b.event)};
pt.prototype.B=function(a,b){this.g&&(Ef.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function rt(){qt||(qt=new pt);return qt}
;var st=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return st});function tt(){this.store={};this.g={}}
tt.prototype.storePayload=function(a,b){a=ut(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
tt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=vt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
tt.prototype.extractMatchingEntries=function(a){a=vt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
tt.prototype.getSequenceCount=function(a){a=vt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function vt(a,b){var c=ut(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&ut(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(wt(b.auth,g[0])){var h=b.isJspb;wt(h===void 0?"undefined":h?"true":"false",g[1])&&wt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),wt(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function wt(a,b){return a===void 0||a==="undefined"?!0:a===b}
tt.prototype.getSequenceCount=tt.prototype.getSequenceCount;tt.prototype.extractMatchingEntries=tt.prototype.extractMatchingEntries;tt.prototype.smartExtractMatchingEntries=tt.prototype.smartExtractMatchingEntries;tt.prototype.storePayload=tt.prototype.storePayload;function ut(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var xt=V("initial_gel_batch_timeout",2E3),zt=V("gel_queue_timeout_max_ms",6E4),At=Math.pow(2,16)-1,Bt=V("gel_min_batch_size",5),Ct=void 0;function Dt(){this.m=this.g=this.l=0;this.i=!1}
var Et=new Dt,Ft=new Dt,Gt=new Dt,Ht=new Dt,It,Jt=!0,Kt=1,Lt=new Map,Mt=C.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",Mt);var Nt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};G("ytLoggingTransportTokensToJspbCttTargetIds_",Nt);var Ot={};function Pt(){var a=D("yt.logging.ims");a||(a=new tt,G("yt.logging.ims",a));return a}
function Qt(a,b){if(a.endpoint==="log_event"){Rt(a);var c=St(a),d=Tt(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=ps[d||""];var f,g;if($s().resolve(new Vs)==null)var h=void 0;else{var l;h=(l=D("yt.gcf.config.hotConfigGroup"))!=null?l:S("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;
f=Ut(e.tier);if(f===400){Vt(a,b);return}}Ot[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Pt().storePayload(e,a.payload);Wt(b,c,e,d==="gelDebuggingEvent")}}
function Wt(a,b,c,d){function e(){Xt(T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Ct=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("tvhtml5_logging_max_batch")||V("web_logging_max_batch")||100;var g=Y(),h=Yt(f,c.tier),l=h.m;d&&(h.i=!0);d=0;c&&(d=Pt().getSequenceCount(c));d>=1E3?e():d>=a?It||(It=Zt(function(){e();It=void 0},0)):g-l>=10&&($t(f,c.tier),h.m=g)}
function Vt(a,b){if(a.endpoint==="log_event"){Rt(a);var c=St(a),d=new Map;d.set(c,[a.payload]);var e=Tt(a.payload)||"";b&&(Ct=new b);return new Tf(function(f,g){Ct&&Ct.isReady()?au(d,Ct,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function St(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Mt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Xt(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Tf(function(e,f){var g=Yt(b,c),h=g.i;g.i=!1;bu(g.l);bu(g.g);g.g=0;Ct&&Ct.isReady()?c===void 0&&T("enable_web_tiered_gel")?cu(e,f,d,a,b,300,h):cu(e,f,d,a,b,c,h):($t(b,c),e())})}
function cu(a,b,c,d,e,f,g){var h=Ct;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=T("enable_web_tiered_gel")?Pt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Pt().extractMatchingEntries(p),l.set(d,b),du(l,h,a,c,g)):(l=T("enable_web_tiered_gel")?Pt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Pt().extractMatchingEntries(p),k.set(d,l),au(k,h,a,b,
c,!1,g));else if(e){b=w(Object.keys(Ot));for(k=b.next();!k.done;k=b.next())k=k.value,f=T("enable_web_tiered_gel")?Pt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Pt().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),f.length>0&&l.set(k,f),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Ot[k];du(l,h,a,c,g)}else{l=w(Object.keys(Ot));for(m=l.next();!m.done;m=l.next())m=m.value,p=T("enable_web_tiered_gel")?Pt().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Pt().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&k.set(m,p),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Ot[m];au(k,h,a,b,c,!1,g)}}
function $t(a,b){function c(){Xt(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Yt(a,b),e=d===Ht||d===Gt?5E3:zt;T("web_gel_timeout_cap")&&!d.g&&(e=Zt(function(){c()},e),d.g=e);
bu(d.l);e=S("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Jt&&(e=xt);e=Zt(function(){V("gel_min_batch_size")>0?Pt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Bt&&c():c()},e);
d.l=e}
function au(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),l=a.size,k=eu(g);a=w(a);var m=a.next();for(g={};!m.done;g={cd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,fd:void 0,ed:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=vb({context:kr(b.config_||jr())});if(!La(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Mt[m])&&fu(g.batchRequest,m,p);delete Mt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";gu(g.batchRequest,h,g.dangerousLogToVisitorSession);hu(e);g.fd=function(r){T("start_client_gcf")&&Ef.Ga(function(){return B(function(q){return z(q,iu(r),0)})});
l--;l||c()};
g.cd=0;g.ed=function(r){return function(){r.cd++;if(e.bypassNetworkless&&r.cd===1)try{Ur(b,k,r.batchRequest,ju({writeThenSend:!0},r.dangerousLogToVisitorSession,r.fd,r.ed,f)),Jt=!1}catch(q){Wn(q),d()}l--;l||c()}}(g);
try{Ur(b,k,g.batchRequest,ju(e,g.dangerousLogToVisitorSession,g.fd,g.ed,f)),Jt=!1}catch(r){Wn(r),d()}}}
function du(a,b,c,d,e){d=d===void 0?{}:d;var f=Math.round(Y()),g={value:a.size},h=new Map([].concat(x(a))),l=w(h);for(h=l.next();!h.done;h=l.next()){var k=w(h.value).next().value,m=a.get(k);h=new In;var p=b.config_||jr(),r=new Dn,q=new wn;J(q,1,p.ce);J(q,2,p.be);de(q,16,p.Yf);J(q,17,p.ae);if(p.Tc){var t=p.Tc,u=new tn;t.coldConfigData&&J(u,1,t.coldConfigData);t.appInstallData&&J(u,6,t.appInstallData);t.coldHashData&&J(u,3,t.coldHashData);t.hotHashData&&u.g(t.hotHashData);Xd(q,tn,62,u)}if((t=C.devicePixelRatio)&&
t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);Rd(q,65,t)}t=S("EXPERIMENTS_TOKEN","");t!==""&&J(q,54,t);t=Rn();if(t.length>0){u=new zn;for(var A=0;A<t.length;A++){var K=new xn;J(K,1,t[A].key);a:{var O=K,X=sd(t[A].value),U=yn;O=O.U;var da=Ec(O);Pc(da);if(X==null){var Ua=Ud(O);if(Vd(Ua,O,da,U)===2)Ua.set(U,0);else break a}else{Ua=O;U.includes(2);var gb=Ud(Ua),ra=Vd(gb,Ua,da,U);ra!==2&&(ra&&(da=Sd(Ua,da,ra)),gb.set(U,2))}Sd(O,
da,2,X)}$d(u,15,xn,K)}Xd(r,zn,5,u)}lr(p,q);mr(r);nr(q);or(p,q);pr(q);T("start_client_gcf")&&qr(q);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(p=new Cn,J(p,3,S("DELEGATED_SESSION_ID")));!T("fill_delegate_context_in_gel_killswitch")&&(t=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Wd(r,Cn,3)||new Cn,p=r,t=J(u,18,t),Xd(p,Cn,3,t));p=q;t=w(Object.entries(eo(S("DEVICE",""))));for(u=t.next();!u.done;u=t.next())A=w(u.value),u=A.next().value,A=A.next().value,u==="cbrand"?J(p,12,A):
u==="cmodel"?J(p,13,A):u==="cbr"?J(p,87,A):u==="cbrver"?J(p,88,A):u==="cos"?J(p,18,A):u==="cosver"?J(p,19,A):u==="cplatform"&&de(p,42,Io(A));Xd(r,wn,1,q);Xd(h,Dn,1,r);if(q=Nt[k])a:{if(be(q,1))r=1;else if(q.getPlaylistId())r=2;else break a;Xd(h,Hn,4,q);q=Wd(h,Dn,1)||new Dn;p=Wd(q,Cn,3)||new Cn;t=new Bn;J(t,2,k);de(t,1,r);$d(p,12,Bn,t);Xd(q,Cn,3,p)}delete Nt[k];k=k==="visitorOnlyApprovedKey";ku()||Rd(h,2,rd(f));!k&&(r=S("EVENT_ID"))&&(q=lu(),p=new Gn,J(p,1,r),Rd(p,2,rd(q)),Xd(h,Gn,5,p));hu(d);if(T("jspb_serialize_with_worker")&&
(r=zr())&&d.writeThenSend){Lt.set(Kt,{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=r;b=a.postMessage;c=ge(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:m,key:Kt});Kt++;break}if(m){r=[];for(q=0;q<m.length;q++)try{r.push(new Fn(m[q]))}catch(Ka){Wn(new Oo("Transport failed to deserialize "+String(m[q])))}m=r}else m=[];m=w(m);for(r=m.next();!r.done;r=m.next())$d(h,3,Fn,r.value);m={startTime:Y(),ticks:{},
infos:{}};try{ee=!0;var Ea=JSON.stringify(ge(h),Ed)}finally{ee=!1}m.ticks.geljspc=Y();T("log_jspb_serialize_latency")&&vr("gel_jspb_serialize",m,{sampleRate:.1});mu(Ea,b,c,d,e,k,g)}}
function mu(a,b,c,d,e,f,g){d=d===void 0?{}:d;g=g===void 0?{value:0}:g;e=eu(e);d=ju(d,f,function(h){T("start_client_gcf")&&Ef.Ga(function(){return B(function(l){return z(l,iu(h),0)})});
g.value--;g.value||c()},function(){g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Ur(b,e,"",d);Jt=!1}
function hu(a){T("always_send_and_write")&&(a.writeThenSend=!1)}
function ju(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Hh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};ku()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function gu(a,b,c){ku()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&(c=lu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function lu(){var a=S("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*At/2));a++;a>At&&(a=1);Nn("BATCH_CLIENT_COUNTER",a);return a}
function fu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Rt(a){if(!D("yt.logging.transport.enableScrapingForTest")){var b=Qn("il_payload_scraping");if((b!==void 0?String(b):"")==="enable_il_payload_scraping")st=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",st),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
G("yt.logging.transport.scrapeClientEvent",!0);else return}b=D("yt.logging.transport.scrapedPayloadsForTesting");var c=D("yt.logging.transport.payloadToScrape"),d=D("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function ku(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Zt(a,b){return T("transport_use_scheduler")===!1?oo(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?So(function(){if(rt().m==="none")a();else{var c={};rt().install((c.none={Hc:a},c))}},b):So(a,b)}
function bu(a){T("transport_use_scheduler")?Ef.xa(a):window.clearTimeout(a)}
function iu(a){var b,c,d,e,f,g,h,l,k,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[sn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[rn.name]:void 0;h=r;k=(l=d)==null?void 0:l.coldHashData;return(m=$s().resolve(new Vs))?g?e?z(p,gr(m,g,e),2):z(p,gr(m,g),2):p.M(2):p.return()}return k?h?z(p,hr(m,k,h),0):z(p,hr(m,k),0):p.M(0)})}
function Yt(a,b){b=b===void 0?200:b;return a?b===300?Ht:Ft:b===300?Gt:Et}
function Tt(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ps[b])return b}
function Ut(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function eu(a){return(a===void 0?0:a)&&T("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var nu=C.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",nu);var ou,pu=C.ytLoggingDocDocumentNonce_;
if(!pu){var qu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var ru=Array(16),su=new Uint8Array(16);window.crypto.getRandomValues(su);for(var tu=0;tu<ru.length;tu++)ru[tu]=su[tu];qu=ru;break a}catch(a){}for(var uu=Array(16),vu=0;vu<16;vu++){for(var wu=Date.now(),xu=0;xu<wu%23;xu++)uu[vu]=Math.random();uu[vu]=Math.floor(Math.random()*256)}if(jo)for(var yu=1,zu=0;zu<jo.length;zu++)uu[yu%16]=uu[yu%16]^uu[(yu-1)%16]/4^jo.charCodeAt(zu),yu++;qu=uu}for(var Au=qu,Bu=[],Cu=0;Cu<Au.length;Cu++)Bu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Au[Cu]&
63));pu=Bu.join("");G("ytLoggingDocDocumentNonce_",pu)}ou=pu;function Du(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function Eu(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},Nn("client-screen-nonce-store",c));c[b]=a}
function Fu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
G("yt_logging_screen.getRootVeType",function(a){return S(Fu(a===void 0?0:a))});
function Gu(){var a=S("csn-to-ctt-auth-info");a||(a={},Nn("csn-to-ctt-auth-info",a));return a}
function Hu(a){a=Du(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",Hu);function Iu(a,b,c){var d=Gu();(c=Hu(c))&&delete d[c];b&&(d[a]=b)}
G("yt_logging_screen.getCttAuthInfo",function(a){return Gu()[a]});
G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Du(c)||b!==S(Fu(c)))if(Iu(a,d,c),Eu(a,c),Nn(Fu(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:ou,clientScreenNonce:a};var f=f===void 0?{}:f;var g=Os;S("ytLoggingEventsDefaultDisabled",!1)&&Os===Os&&(g=null);f=f===void 0?{}:f;var h={},l=Math.round(f.timestamp||Y());h.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0;h.foregroundHeartbeatScreenAssociated=e;e=D("_lact",window);e=e==null?-1:Math.max(Date.now()-
e,0);h.context={lastActivityMs:String(f.timestamp||!isFinite(e)?-1:e)};f.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(e=h.context,l=f.sequenceGroup,nu[l]=l in nu?nu[l]+1:0,e.sequence={index:nu[l],groupKey:l},f.endOfSequence&&delete nu[f.sequenceGroup]);(f.sendIsolatedPayload?Vt:Qt)({endpoint:"log_event",payload:h,cttAuthInfo:f.cttAuthInfo,dangerousLogToVisitorSession:f.dangerousLogToVisitorSession},g)}},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ju="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Ku(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ib(window.location.href);e&&d.push(e);e=Ib(a);if(zb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),nb(d,a),a=d.href)if(a=Jb(a),a=Kb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Hu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Lu(a,b,f)}else Lu(a,b)}
function Lu(a,b,c){a=Mu(a);b=b?Mb(b):"";c=c||5;(Ve()||(kc||lc)&&io("applewebkit")&&!io("version")&&(!io("safari")||io("gsa/"))||jc&&io("version/")||!S("EOM_VISITOR_DATA"))&&Sn(a,b,c)}
function Mu(a){var b=a;a=w(Ju);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Pb),f=0,g=[];(c=Ob(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Qb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new P;function Nu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function Ou(a,b){b=b?{feature:b}:{};var c=S("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Pn()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,Ku(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Nb(a,d);S("LOGGED_IN",!0)&&Nu()&&(d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Ib(window.location.href))&&d.push(b),b=Ib(a),zb(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Jb(a),(d=Kb(d))?
(d=Mu(d),d=(d=Te.get(""+d,void 0)||null)?eo(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,Nu()?(c||(c=S("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&Ku(a,d));e=a+e;var g=g===void 0?hb:g;a:if(g=g===void 0?hb:g,e instanceof bb)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof db&&d.ig(e)){g=new bb(e);break a}g=void 0}f=f.location;g=mb(g||cb);g!==void 0&&(f.href=g)}}
;G("searchbox.yt.install",function(a,b,c,d,e,f,g){ih||(ih=new zl);ih.install(a,b,c,d,e,f,g)});
G("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=Ef.Ga;if(a&&e){var f=S("SBOX_SETTINGS"),g=S("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Ou,d))&&e(a,100)}});}).call(this);
