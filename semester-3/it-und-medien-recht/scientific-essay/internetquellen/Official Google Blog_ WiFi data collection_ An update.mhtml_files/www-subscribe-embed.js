(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.i=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function pa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function qa(){this.C=!1;this.j=null;this.l=void 0;this.i=1;this.F=this.B=0;this.A=null}
function ra(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
qa.prototype.D=function(a){this.l=a};
function sa(a,b){a.A={Na:b,Pb:!0};a.i=a.B||a.F}
qa.prototype["return"]=function(a){this.A={"return":a};this.i=this.F};
function ta(a,b,c){a.i=c;return{value:b}}
function ua(a){a.B=0;var b=a.A.Na;a.A=null;return b}
function va(a){this.i=new qa;this.j=a}
function wa(a,b){ra(a.i);var c=a.i.j;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i["return"]);
a.i["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.i.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.j=null,sa(a.i,g),ya(a)}a.i.j=null;d.call(a.i,f);return ya(a)}
function ya(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.l=void 0,sa(a.i,c)}a.i.C=!1;if(a.i.A){b=a.i.A;a.i.A=null;if(b.Pb)throw b.Na;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){ra(a.i);a.i.j?b=xa(a,a.i.j.next,b,a.i.D):(a.i.D(b),b=ya(a));return b};
this["throw"]=function(b){ra(a.i);a.i.j?b=xa(a,a.i.j["throw"],b,a.i.D):(sa(a.i,b),b=ya(a));return b};
this["return"]=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new va(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.J=0;this.T=void 0;this.i=[];this.B=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.B()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.B=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.A(l)}}}this.i=null};
c.prototype.A=function(g){this.l(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ja),reject:g(this.l)}};
b.prototype.ja=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.xa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.O(g):this.A(g)}};
b.prototype.O=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.ya(h,g):this.A(g)};
b.prototype.l=function(g){this.C(2,g)};
b.prototype.A=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.J)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.J);this.J=g;this.T=h;2===this.J&&this.ka();this.D()};
b.prototype.ka=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.T)}},1)};
b.prototype.F=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.T;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.j(this.i[g]);this.i=null}};
var f=new c;b.prototype.xa=function(g){var h=this.j();g.na(h.resolve,h.reject)};
b.prototype.ya=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(u){try{l(r(u))}catch(y){m(y)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.na(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.na=function(g,h){function k(){switch(l.J){case 1:g(l.T);break;case 2:h(l.T);break;default:throw Error("Unexpected state: "+l.J);}}
var l=this;null==this.i?f.j(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())d(m.value).na(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(u){return function(y){r[u]=y;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).na(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.i)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ea(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.j[l];if(m&&Ca(h.j,l))for(var p=0;p<m.length;p++){var r=m[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:p,L:r}}return{id:l,list:m,index:-1,L:void 0}}
function e(h){this.j={};this.i=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.j[l.id]=[]);l.L?l.L.value=k:(l.L={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.L),this.i.previous.next=l.L,this.i.previous=l.L,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.L&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.j[h.id],h.L.previous.next=h.L.next,h.L.next.previous=h.L.previous,h.L.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.j={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).L};
e.prototype.get=function(h){return(h=d(this,h).L)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
t("Set",function(a){function b(c){this.i=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype["delete"]=function(c){c=this.i["delete"](c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var w=this||self;function x(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Fa(){}
function Ga(a){a.Ba=void 0;a.G=function(){return a.Ba?a.Ba:a.Ba=new a}}
function Ha(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ia(a){var b=Ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ja(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ka(a){return Object.prototype.hasOwnProperty.call(a,La)&&a[La]||(a[La]=++Ma)}
var La="closure_uid_"+(1E9*Math.random()>>>0),Ma=0;function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Na:z=Oa;return z.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ra(){return Date.now()}
function B(a,b){var c=a.split("."),d=w;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function C(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
function Ta(a){var b=null,c=w.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(d){w.console&&w.console.error(d.message)}return b}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(Ua,Error);Ua.prototype.name="CustomError";var Va;function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.A=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$a=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},ab=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},cb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function db(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function eb(a,b){return 0<=Ya(a,b)}
function fb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function jb(a,b,c,d){return Array.prototype.splice.apply(a,kb(arguments,1))}
function kb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function lb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=kb(d,e,e+8192);f=lb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function mb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function nb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;
function Eb(a,b){for(var c=0,d=vb(String(a)).split("."),e=vb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Fb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Fb(0==h[2].length,0==k[2].length)||Fb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Fb(a,b){return a<b?-1:a>b?1:0}
;function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.ga=!0;Gb.prototype.ea=function(){return this.l.toString()};
Gb.prototype.j=!0;Gb.prototype.i=function(){return 1};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Ha(a);return"type_error:SafeUrl"}
var Jb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Kb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Hb={},Mb=new Gb("about:invalid#zClosurez",Hb);var Nb;a:{var Ob=w.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function E(a){return-1!=Nb.indexOf(a)}
;function Qb(){return E("Firefox")||E("FxiOS")}
function Rb(){return E("Safari")&&!(Sb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||Qb()||E("Silk")||E("Android"))}
function Sb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")}
function Tb(){return E("Android")&&!(Sb()||Qb()||E("Opera")||E("Silk"))}
;function Ub(a,b,c){this.l=c===Vb?a:"";this.A=b}
Ub.prototype.j=!0;Ub.prototype.i=function(){return this.A};
Ub.prototype.ga=!0;Ub.prototype.ea=function(){return this.l.toString()};
function Wb(a){if(a instanceof Ub&&a.constructor===Ub)return a.l;Ha(a);return"type_error:SafeHtml"}
var Vb={};function Xb(a,b){void 0===ub&&(ub=Ta("goog#html"));var c=(c=ub)?c.createHTML(a):a;return new Ub(c,b,Vb)}
var Yb=new Ub(w.trustedTypes&&w.trustedTypes.emptyHTML||"",0,Vb);var Zb=Xa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Wb(Yb);return!b.parentElement});
function $b(a,b){if(Zb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wb(b)}
;function ac(a){return a=wb(a,void 0)}
function bc(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function cc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var dc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ec(a){return a?decodeURI(a):a}
function fc(a,b){return b.match(dc)[a]||null}
function gc(a){return ec(fc(3,a))}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a,b){for(var c=[],d=b||0;d<a.length;d+=2)ic(a[d],a[d+1],c);return c.join("&")}
function kc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function lc(a,b){var c=2==arguments.length?jc(arguments[1],0):jc(arguments,1);return hc(a,c)}
function mc(a,b){var c=kc(b);return hc(a,c)}
var nc=/#|$/;function oc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function pc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
function qc(){return pc()||E("iPad")||E("iPod")}
;function rc(a){rc[" "](a);return a}
rc[" "]=Fa;function sc(a,b){try{return rc(a[b]),!0}catch(c){}return!1}
function tc(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)}
;var uc=E("Opera"),F=E("Trident")||E("MSIE"),vc=E("Edge"),wc=vc||F,xc=E("Gecko")&&!(-1!=Nb.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),yc=-1!=Nb.toLowerCase().indexOf("webkit")&&!E("Edge"),zc=E("Macintosh"),Ac=E("Windows"),Bc=E("Android"),Cc=pc(),Dc=E("iPad"),Ec=E("iPod"),Fc=qc();function Gc(){var a=w.document;return a?a.documentMode:void 0}
var Hc;a:{var Ic="",Jc=function(){var a=Nb;if(xc)return/rv:([^\);]+)(\)|;)/.exec(a);if(vc)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(yc)return/WebKit\/(\S+)/.exec(a);if(uc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Jc&&(Ic=Jc?Jc[1]:"");if(F){var Kc=Gc();if(null!=Kc&&Kc>parseFloat(Ic)){Hc=String(Kc);break a}}Hc=Ic}var Lc=Hc,Nc={};function Oc(a){return tc(Nc,a,function(){return 0<=Eb(Lc,a)})}
var Pc;if(w.document&&F){var Qc=Gc();Pc=Qc?Qc:parseInt(Lc,10)||void 0}else Pc=void 0;var Rc=Pc;var Sc=Qb(),Tc=pc()||E("iPod"),Uc=E("iPad"),Vc=Tb(),Wc=Sb(),Xc=Rb()&&!qc();var Yc={},Zc=null;var $c=window;function ad(a){var b=x("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(g){e="Not available",c=!0}b=bd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,cd[c])c=cd[c];else{c=String(c);if(!cd[c]){var f=/function\s+([^\(]+)/m.exec(c);cd[c]=f?f[1]:"[Anonymous]"}c=cd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function bd(a,b){b||(b={});b[dd(a)]=!0;var c=a.stack||"",d=a.Gc;d&&!b[dd(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=bd(d,b));return c}
function dd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var cd={};function ed(a){this.i=a||{cookie:""}}
n=ed.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Qc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Va}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.i.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Va:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var fd=new ed("undefined"==typeof document?null:document);var gd=!F||9<=Number(Rc),hd=!xc&&!F||F&&9<=Number(Rc)||xc&&Oc("1.9.1"),id=F&&!Oc("9");function G(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=G.prototype;n.clone=function(){return new G(this.x,this.y)};
n.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function jd(a,b){return new G(a.x-b.x,a.y-b.y)}
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function kd(a,b){this.width=a;this.height=b}
n=kd.prototype;n.clone=function(){return new kd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ld(a){return a?new md(nd(a)):Va||(Va=new md)}
function H(a){return"string"===typeof a?document.getElementById(a):a}
function od(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):pd(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):pd(c,"*",a,b)[0]||null}return c||null}
function pd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&eb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function qd(a,b){mb(b,function(c,d){c&&"object"==typeof c&&c.ga&&(c=c.ea());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:rd.hasOwnProperty(d)?a.setAttribute(rd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var rd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function sd(a){a=a.document;a=td(a)?a.documentElement:a.body;return new kd(a.clientWidth,a.clientHeight)}
function ud(a){var b=vd(a);a=wd(a);return F&&Oc("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function vd(a){return a.scrollingElement?a.scrollingElement:!yc&&td(a)?a.documentElement:a.body||a.documentElement}
function wd(a){return a.parentWindow||a.defaultView}
function xd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!gd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',ac(g.name),'"');if(g.type){f.push(' type="',ac(g.type),'"');var h={};tb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=yd(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):qd(f,g));2<d.length&&zd(e,f,d);return f}
function zd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ia(f)||Ja(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ja(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?hb(f):f,d)}}}
function yd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function td(a){return"CSS1Compat"==a.compatMode}
function Ad(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Bd(a){return hd&&void 0!=a.children?a.children:$a(a.childNodes,function(b){return 1==b.nodeType})}
function Cd(a){return Ja(a)&&1==a.nodeType}
function Dd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function nd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Ed(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);c=nd(a);a.appendChild(c.createTextNode(String(b)))}}
function Fd(a,b){var c=[];return Gd(a,b,c,!0)?c[0]:void 0}
function Gd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Gd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Hd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Id={IMG:" ",BR:"\n"};function Jd(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Kd(a)||Ld(a)):Kd(a)&&Ld(a))&&F){var c;"function"!==typeof a.getBoundingClientRect||F&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Kd(a){return F&&!Oc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Ld(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Md(a){if(id&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Nd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");id||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Nd(a,b,c){if(!(a.nodeName in Hd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Id)b.push(Id[a.nodeName]);else for(a=a.firstChild;a;)Nd(a,b,c),a=a.nextSibling}
function Od(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Pd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&eb(f.className.split(/\s+/),c))},!0,d)}
function J(a,b){return Od(a,null,b,void 0)}
function Pd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function md(a){this.i=a||w.document||document}
md.prototype.getElementsByTagName=function(a,b){return(b||this.i).getElementsByTagName(String(a))};
md.prototype.createElement=function(a){return yd(this.i,a)};
md.prototype.appendChild=function(a,b){a.appendChild(b)};
md.prototype.isElement=Cd;function Qd(a){var b=Rd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Td(){var a=[];Qd(function(b){a.push(b)});
return a}
var Rd={oc:"allow-forms",pc:"allow-modals",qc:"allow-orientation-lock",sc:"allow-pointer-lock",tc:"allow-popups",uc:"allow-popups-to-escape-sandbox",wc:"allow-presentation",xc:"allow-same-origin",yc:"allow-scripts",zc:"allow-top-navigation",Ac:"allow-top-navigation-by-user-activation"},Ud=Xa(function(){return Td()});
function Vd(){var a=yd(document,"IFRAME"),b={};D(Ud(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Wd(){this.l=this.l;this.B=this.B}
Wd.prototype.l=!1;Wd.prototype.sa=function(){return this.l};
Wd.prototype.dispose=function(){this.l||(this.l=!0,this.V())};
Wd.prototype.V=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Xd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Yd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
n=Yd.prototype;n.getHeight=function(){return this.bottom-this.top};
n.clone=function(){return new Yd(this.top,this.right,this.bottom,this.left)};
n.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
n.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
n.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Zd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Zd.prototype.clone=function(){return new Zd(this.left,this.top,this.width,this.height)};
Zd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Zd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Zd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var $d={};function ae(a){if(a!==$d)throw Error("Bad secret");}
;function be(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var ce;function de(){}
function ee(a,b){ae(b);this.i=a}
pa(ee,de);ee.prototype.toString=function(){return this.i.toString()};
var fe=null===(ce=be())||void 0===ce?void 0:ce.emptyHTML;new ee(null!==fe&&void 0!==fe?fe:"",$d);var ge;function he(){}
function ie(a,b){ae(b);this.i=a}
pa(ie,he);ie.prototype.toString=function(){return this.i.toString()};
var je=null===(ge=be())||void 0===ge?void 0:ge.emptyScript;new ie(null!==je&&void 0!==je?je:"",$d);function ke(){}
function le(a,b){ae(b);this.i=a}
pa(le,ke);le.prototype.toString=function(){return this.i};new le("about:blank",$d);new le("about:invalid#zTSz",$d);function me(a,b,c){if("string"===typeof b)(b=ne(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=ne(c,d);f&&(c.style[f]=e)}}
var oe={};function ne(a,b){var c=oe[b];if(!c){var d=bc(b);c=d;void 0===a.style[d]&&(d=(yc?"Webkit":xc?"Moz":F?"ms":uc?"O":null)+cc(d),void 0!==a.style[d]&&(c=d));oe[b]=c}return c}
function pe(a,b){var c=nd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function qe(a,b){return pe(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function re(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function se(a){if(F&&!(8<=Number(Rc)))return a.offsetParent;var b=nd(a),c=qe(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=qe(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function te(a){for(var b=new Yd(0,Infinity,Infinity,0),c=ld(a),d=c.i.body,e=c.i.documentElement,f=vd(c.i);a=se(a);)if(!(F&&0==a.clientWidth||yc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=qe(a,"overflow")){var g=ue(a),h=new G(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
sd(wd(c.i)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function ue(a){var b=nd(a),c=new G(0,0);var d=b?nd(b):document;d=!F||9<=Number(Rc)||td(ld(d).i)?d.documentElement:d.body;if(a==d)return c;a=re(a);b=ud(ld(b).i);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ve(a){a=re(a);return new G(a.left,a.top)}
function we(a,b,c){if(b instanceof kd)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=xe(b,!0);a.style.height=xe(c,!0)}
function xe(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function ye(a){var b=ze;if("none"!=qe(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function ze(a){var b=a.offsetWidth,c=a.offsetHeight,d=yc&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=re(a),new kd(a.right-a.left,a.bottom-a.top)):new kd(b,c)}
function Ae(a){var b=ue(a);a=ye(a);return new Zd(b.x,b.y,a.width,a.height)}
function Be(a){return"rtl"==qe(a,"direction")}
function Ce(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function De(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Ce(a,c):0}
var Ee={thin:2,medium:4,thick:6};function Fe(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Ee?Ee[c]:Ce(a,c)}
;var Ge=(new Date).getTime();function He(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ie=window,Je=document,Ke=Ie.location;function Le(){}
var Me=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Ne(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Oe(){var a;if((a=Object.create)&&Me.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Pe=K(Ie,"gapi",{});var L;L=K(Ie,"___jsl",Oe());K(L,"I",0);K(L,"hel",10);function Qe(){var a=Ke.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Re(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Se(a){return K(K(L,"H",Oe()),a,Oe())}
;function Te(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var u=e[1],y=e[2],A=e[3],Za=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var fa=A^u&(y^A);var Pa=1518500249}else fa=u^y^A,Pa=1859775393;else 60>q?(fa=u&y|A&(u|y),Pa=2400959708):(fa=u^y^A,Pa=3395469782);fa=((p<<5|p>>>27)&4294967295)+fa+Za+Pa+r[q]&4294967295;Za=A;A=y;y=(u<<30|u>>>2)&4294967295;u=p;p=fa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+y&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+Za&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],u=0,y=p.length;u<y;++u)q.push(p.charCodeAt(u));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var u=24;0<=u;u-=8)p[r++]=e[q]>>u&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,xb:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Ue(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Ve(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Ve(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ve(a){var b=Te();b.update(a);return b.xb().toLowerCase()}
;function We(a){var b=He(String(w.location.href)),c;(c=w.__SAPISID||w.__APISID||w.__OVERRIDE_SID)?c=!0:(c=new ed(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?w.__SAPISID:w.__APISID,c||(c=new ed(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&c&&b?[b,Ue(He(d),
c,a||null)].join(" "):null}return null}
;var Xe=K(L,"perf",Oe());K(Xe,"g",Oe());var Ye=K(Xe,"i",Oe());K(Xe,"r",[]);Oe();Oe();function Ze(a,b,c){b&&0<b.length&&(b=$e(b),c&&0<c.length&&(b+="___"+$e(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(Ye,"_p",Oe()),K(b,c,Oe())[a]=(new Date).getTime(),b=Xe.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function $e(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var af=Oe(),bf=[];function cf(a){throw Error("Bad hint"+(a?": "+a:""));}
bf.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var df=/^(\/[a-zA-Z0-9_\-]+)+$/,ef=[/\/amp\//,/\/amp$/,/^\/amp$/],ff=/^[a-zA-Z0-9\-_\.,!]+$/,gf=/^gapi\.loaded_[0-9]+$/,hf=/^[a-zA-Z0-9,._-]+$/;function jf(a,b,c,d){var e=a.split(";"),f=e.shift(),g=af[f],h=null;g?h=g(e,b,c,d):cf("no hint processor for: "+f);h||cf("failed to generate load url");b=h;c=b.match(kf);(d=b.match(lf))&&1===d.length&&mf.test(b)&&c&&1===c.length||cf("failed sanity: "+a);return h}
function nf(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=of(a);gf.test(c)||cf("invalid_callback");b=pf(b);d=d&&d.length?pf(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ga?"/am="+e(a.Ga):"",a.jb?"/rs="+e(a.jb):"",a.sb?"/t="+e(a.sb):"","/cb=",e(c)].join("")}
function of(a){"/"!==a.charAt(0)&&cf("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))cf("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");df.test(b)||cf("invalid_prefix");c=0;for(d=ef.length;c<d;++c)ef[c].test(b)&&cf("invalid_prefix");c=qf(a,
"k",!0);d=qf(a,"am");e=qf(a,"rs");a=qf(a,"t");return{pathPrefix:b,version:c,Ga:d,jb:e,sb:a}}
function pf(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");hf.test(e)&&b.push(e)}return b.join(",")}
function qf(a,b,c){a=a[b];!a&&c&&cf("missing: "+b);if(a){if(ff.test(a))return a;cf("invalid: "+b)}return null}
var mf=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,lf=/\/cb=/g,kf=/\/\//g;function rf(){var a=Qe();if(!a)throw Error("Bad hint");return a}
af.m=function(a,b,c,d){(a=a[0])||cf("missing_hint");return"https://apis.google.com"+nf(a,b,c,d)};
var sf=decodeURI("%73cript"),tf=/^[-+_0-9\/A-Za-z]+={0,2}$/;function uf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function vf(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(tf)?a:L.nonce=null:Je.querySelector?(a=Je.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(tf)?L.nonce=a:L.nonce=null):null:null}
function wf(a){if("loading"!=Je.readyState)xf(a);else{var b=vf(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+sf+' src="'+encodeURI(a)+'"'+c+"></"+sf+">";Je.write(yf?yf.createHTML(a):a)}}
function xf(a){var b=Je.createElement(sf);b.setAttribute("src",yf?yf.createScriptURL(a):a);a=vf();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Je.getElementsByTagName(sf)[0])?a.parentNode.insertBefore(b,a):(Je.head||Je.body||Je.documentElement).appendChild(b)}
function zf(a,b){var c=b&&b._c;if(c)for(var d=0;d<bf.length;d++){var e=bf[d][0],f=bf[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Af(a,b,c){Bf(function(){var d=b===Qe()?K(Pe,"_",Oe()):Oe();d=K(Se(b),"_",d);a(d)},c)}
function Cf(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);zf(a,c);var d=a?a.split(":"):[],e=c.h||rf(),f=K(L,"ah",Oe());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var p=g.length;if(1<p){var r=c.callback;r&&(c.callback=function(){0==--p&&r()})}for(;d=g.shift();)Df(d.features,c,d.hint)}else Df(d||[],c,e)}
function Df(a,b,c){function d(fa,Pa){if(p)return 0;Ie.clearTimeout(m);r.push.apply(r,u);var Mc=((Pe||{}).config||{}).update;Mc?Mc(f):f&&K(L,"cu",[]).push(f);if(Pa){Ze("me0",fa,q);try{Af(Pa,c,l)}finally{Ze("me1",fa,q)}}return 1}
a=Ne(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,p=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=K(Se(c),"r",[]).sort();var r=K(Se(c),"L",[]).sort(),q=[].concat(k);0<g&&(m=Ie.setTimeout(function(){p=!0;h()},g));
var u=uf(a,r);if(u.length){u=uf(a,k);var y=K(L,"CP",[]),A=y.length;y[A]=function(fa){function Pa(){var Sd=y[A+1];Sd&&Sd()}
function Mc(Sd){y[A]=null;d(u,fa)&&Re(function(){e&&e();Sd()})}
if(!fa)return 0;Ze("ml1",u,q);0<A&&y[A-1]?y[A]=function(){Mc(Pa)}:Mc(Pa)};
if(u.length){var Za="loaded_"+L.I++;Pe[Za]=function(fa){y[A](fa);Pe[Za]=null};
a=jf(c,u,"gapi."+Za,k);k.push.apply(k,u);Ze("ml0",u,q);b.sync||Ie.___gapisync?wf(a):xf(a)}else y[A](Le)}else d(u)&&e&&e()}
var yf=Ta("goog#gapi");function Bf(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,Cf("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Pe.load=function(a,b){return Bf(function(){return Cf(a,b)})};function Ef(){this.j=[];this.i=-1}
Ef.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.j[a]!=b&&(this.j[a]=b,this.i=-1)};
Ef.prototype.get=function(a){return!!this.j[a]};
function Ff(a){-1==a.i&&(a.i=bb(a.j,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Gf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1}
Gf.prototype.stopPropagation=function(){this.i=!0};
Gf.prototype.preventDefault=function(){this.defaultPrevented=!0};var Hf=!F||9<=Number(Rc),If=F&&!Oc("9"),Jf=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{w.addEventListener("test",Fa,b),w.removeEventListener("test",Fa,b)}catch(c){}return a}();function Kf(a,b){Gf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
C(Kf,Gf);var Lf={2:"touch",3:"pen",4:"mouse"};
Kf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?xc&&(sc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Lf[a.pointerType]||"";this.state=a.state;this.j=a;a.defaultPrevented&&this.preventDefault()};
Kf.prototype.stopPropagation=function(){Kf.H.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
Kf.prototype.preventDefault=function(){Kf.H.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,If)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Mf="closure_listenable_"+(1E6*Math.random()|0),Nf=0;function Of(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.ra=e;this.key=++Nf;this.ca=this.ma=!1}
function Pf(a){a.ca=!0;a.listener=null;a.i=null;a.src=null;a.ra=null}
;function Qf(a){this.src=a;this.listeners={};this.i=0}
Qf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Rf(a,b,d,e);-1<g?(b=a[g],c||(b.ma=!1)):(b=new Of(b,this.src,f,!!d,e),b.ma=c,a.push(b));return b};
Qf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Rf(e,b,c,d);return-1<b?(Pf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Sf(a,b){var c=b.type;c in a.listeners&&fb(a.listeners[c],b)&&(Pf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Rf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ca&&f.listener==b&&f.capture==!!c&&f.ra==d)return e}return-1}
;var Tf="closure_lm_"+(1E6*Math.random()|0),Uf={},Vf=0;function Wf(a,b,c,d,e){if(d&&d.once)Xf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Wf(a,b[f],c,d,e);else c=Yf(c),a&&a[Mf]?Zf(a,b,c,Ja(d)?!!d.capture:!!d,e):$f(a,b,c,!1,d,e)}
function $f(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ja(e)?!!e.capture:!!e,h=ag(a);h||(a[Tf]=h=new Qf(a));c=h.add(b,c,d,g,f);if(!c.i){d=bg();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)Jf||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(cg(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Vf++}}
function bg(){var a=dg,b=Hf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Xf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xf(a,b[f],c,d,e);else c=Yf(c),a&&a[Mf]?a.i.add(String(b),c,!0,Ja(d)?!!d.capture:!!d,e):$f(a,b,c,!0,d,e)}
function eg(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)eg(a,b[f],c,d,e);else(d=Ja(d)?!!d.capture:!!d,c=Yf(c),a&&a[Mf])?a.i.remove(String(b),c,d,e):a&&(a=ag(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Rf(b,c,d,e)),(c=-1<a?b[a]:null)&&fg(c))}
function fg(a){if("number"!==typeof a&&a&&!a.ca){var b=a.src;if(b&&b[Mf])Sf(b.i,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(cg(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Vf--;(c=ag(b))?(Sf(c,a),0==c.i&&(c.src=null,b[Tf]=null)):Pf(a)}}}
function cg(a){return a in Uf?Uf[a]:Uf[a]="on"+a}
function gg(a,b,c,d){var e=!0;if(a=ag(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ca&&(f=hg(f,d),e=e&&!1!==f)}return e}
function hg(a,b){var c=a.listener,d=a.ra||a.src;a.ma&&fg(a);return c.call(d,b)}
function dg(a,b){if(a.ca)return!0;if(!Hf){var c=b||x("window.event"),d=new Kf(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.currentTarget=c[g];var h=gg(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.currentTarget=c[g],h=gg(c[g],f,!1,d),e=e&&h}return e}return hg(a,new Kf(b,this))}
function ag(a){a=a[Tf];return a instanceof Qf?a:null}
var ig="__closure_events_fn_"+(1E9*Math.random()>>>0);function Yf(a){if("function"===typeof a)return a;a[ig]||(a[ig]=function(b){return a.handleEvent(b)});
return a[ig]}
;function jg(){Wd.call(this);this.i=new Qf(this);this.O=this;this.C=null}
C(jg,Wd);jg.prototype[Mf]=!0;jg.prototype.addEventListener=function(a,b,c,d){Wf(this,a,b,c,d)};
jg.prototype.removeEventListener=function(a,b,c,d){eg(this,a,b,c,d)};
jg.prototype.dispatchEvent=function(a){var b=this.C;if(b){var c=[];for(var d=1;b;b=b.C)c.push(b),++d}b=this.O;d=a.type||a;if("string"===typeof a)a=new Gf(a,b);else if(a instanceof Gf)a.target=a.target||b;else{var e=a;a=new Gf(d,b);tb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.i&&0<=f;f--){var g=a.currentTarget=c[f];e=kg(g,d,!0,a)&&e}a.i||(g=a.currentTarget=b,e=kg(g,d,!0,a)&&e,a.i||(e=kg(g,d,!1,a)&&e));if(c)for(f=0;!a.i&&f<c.length;f++)g=a.currentTarget=c[f],e=kg(g,d,!1,a)&&e;return e};
jg.prototype.V=function(){jg.H.V.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Pf(d[e]);delete a.listeners[c];a.i--}}this.C=null};
function Zf(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function kg(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ca&&g.capture==c){var h=g.listener,k=g.ra||g.src;g.ma&&Sf(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function lg(a,b){this.l=a;this.A=b;this.j=0;this.i=null}
lg.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function mg(a,b){a.A(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ng(a){w.setTimeout(function(){throw a;},0)}
var og;
function pg(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=yd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=z(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ia;c.Ia=null;e()}};
return function(e){d.next={Ia:e};d=d.next;b.port2.postMessage(0)}}return function(e){w.setTimeout(e,0)}}
;function qg(){this.j=this.i=null}
var sg=new lg(function(){return new rg},function(a){a.reset()});
qg.prototype.add=function(a,b){var c=sg.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
qg.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
function rg(){this.next=this.scope=this.i=null}
rg.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
rg.prototype.reset=function(){this.next=this.scope=this.i=null};function tg(a,b){ug||vg();wg||(ug(),wg=!0);xg.add(a,b)}
var ug;function vg(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);ug=function(){a.then(yg)}}else ug=function(){var b=yg;
"function"!==typeof w.setImmediate||w.Window&&w.Window.prototype&&!E("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(og||(og=pg()),og(b)):w.setImmediate(b)}}
var wg=!1,xg=new qg;function yg(){for(var a;a=xg.remove();){try{a.i.call(a.scope)}catch(b){ng(b)}mg(sg,a)}wg=!1}
;function zg(a){this.J=0;this.T=void 0;this.ba=this.S=this.X=null;this.qa=this.Aa=!1;if(a!=Fa)try{var b=this;a.call(void 0,function(c){Ag(b,2,c)},function(c){Ag(b,3,c)})}catch(c){Ag(this,3,c)}}
function Bg(){this.next=this.context=this.onRejected=this.l=this.i=null;this.j=!1}
Bg.prototype.reset=function(){this.context=this.onRejected=this.l=this.i=null;this.j=!1};
var Cg=new lg(function(){return new Bg},function(a){a.reset()});
function Dg(a,b,c){var d=Cg.get();d.l=a;d.onRejected=b;d.context=c;return d}
function Eg(a){if(a instanceof zg)return a;var b=new zg(Fa);Ag(b,2,a);return b}
zg.prototype.then=function(a,b,c){return Fg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
zg.prototype.$goog_Thenable=!0;function Gg(a,b){var c=Dg(b,b,void 0);c.j=!0;Hg(a,c)}
zg.prototype.cancel=function(a){if(0==this.J){var b=new Ig(a);tg(function(){Jg(this,b)},this)}};
function Jg(a,b){if(0==a.J)if(a.X){var c=a.X;if(c.S){for(var d=0,e=null,f=null,g=c.S;g&&(g.j||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.J&&1==d?Jg(c,b):(f?(d=f,d.next==c.ba&&(c.ba=d),d.next=d.next.next):Kg(c),Lg(c,e,3,b)))}a.X=null}else Ag(a,3,b)}
function Hg(a,b){a.S||2!=a.J&&3!=a.J||Mg(a);a.ba?a.ba.next=b:a.S=b;a.ba=b}
function Fg(a,b,c,d){var e=Dg(null,null,null);e.i=new zg(function(f,g){e.l=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ig?g(h):f(k)}catch(l){g(l)}}:g});
e.i.X=a;Hg(a,e);return e.i}
zg.prototype.ic=function(a){this.J=0;Ag(this,2,a)};
zg.prototype.jc=function(a){this.J=0;Ag(this,3,a)};
function Ag(a,b,c){if(0==a.J){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.J=1;a:{var d=c,e=a.ic,f=a.jc;if(d instanceof zg){Hg(d,Dg(e||Fa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ja(d))try{var k=d.then;if("function"===typeof k){Ng(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.T=c,a.J=b,a.X=null,Mg(a),3!=b||c instanceof Ig||Og(a,c))}}
function Ng(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Mg(a){a.Aa||(a.Aa=!0,tg(a.Bb,a))}
function Kg(a){var b=null;a.S&&(b=a.S,a.S=b.next,b.next=null);a.S||(a.ba=null);return b}
zg.prototype.Bb=function(){for(var a;a=Kg(this);)Lg(this,a,this.J,this.T);this.Aa=!1};
function Lg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.qa;a=a.X)a.qa=!1;if(b.i)b.i.X=null,Pg(b,c,d);else try{b.j?b.l.call(b.context):Pg(b,c,d)}catch(e){Qg.call(null,e)}mg(Cg,b)}
function Pg(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Og(a,b){a.qa=!0;tg(function(){a.qa&&Qg.call(null,b)})}
var Qg=ng;function Ig(a){Ua.call(this,a)}
C(Ig,Ua);Ig.prototype.name="cancel";function Rg(a,b,c){Wd.call(this);this.i=a;this.C=b||0;this.j=c;this.A=z(this.zb,this)}
C(Rg,Wd);n=Rg.prototype;n.fa=0;n.V=function(){Rg.H.V.call(this);this.stop();delete this.i;delete this.j};
n.start=function(a){this.stop();var b=this.A;a=void 0!==a?a:this.C;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=z(b.handleEvent,b);else throw Error("Invalid listener argument");this.fa=2147483647<Number(a)?-1:w.setTimeout(b,a||0)};
n.stop=function(){this.isActive()&&w.clearTimeout(this.fa);this.fa=0};
n.isActive=function(){return 0!=this.fa};
n.zb=function(){this.fa=0;this.i&&this.i.call(this.j)};function Sg(){this.j=-1}
;function Tg(){this.j=64;this.i=[];this.C=[];this.D=[];this.A=[];this.A[0]=128;for(var a=1;a<this.j;++a)this.A[a]=0;this.B=this.l=0;this.reset()}
C(Tg,Sg);Tg.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.B=this.l=0};
function Ug(a,b,c){c||(c=0);var d=a.D;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Tg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.j,d=0,e=this.C,f=this.l;d<b;){if(0==f)for(;d<=c;)Ug(this,a,d),d+=this.j;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.j){Ug(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.j){Ug(this,e);f=0;break}}this.l=f;this.B+=b}};
Tg.prototype.digest=function(){var a=[],b=8*this.B;56>this.l?this.update(this.A,56-this.l):this.update(this.A,this.j-(this.l-56));for(var c=this.j-1;56<=c;c--)this.C[c]=b&255,b/=256;Ug(this,this.C);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};var Vg="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Wg(){}
Wg.prototype.next=function(){throw Vg;};
Wg.prototype.R=function(){return this};
function Xg(a){if(a instanceof Wg)return a;if("function"==typeof a.R)return a.R(!1);if(Ia(a)){var b=0,c=new Wg;c.next=function(){for(;;){if(b>=a.length)throw Vg;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Yg(a,b){if(Ia(a))try{D(a,b,void 0)}catch(c){if(c!==Vg)throw c;}else{a=Xg(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Vg)throw c;}}}
function Zg(a){if(Ia(a))return hb(a);a=Xg(a);var b=[];Yg(a,function(c){b.push(c)});
return b}
;function $g(a,b){this.l={};this.i=[];this.U=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof $g)for(c=ah(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ah(a){bh(a);return a.i.concat()}
n=$g.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||ch;bh(this);for(var d,e=0;d=this.i[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ch(a,b){return a===b}
n.isEmpty=function(){return 0==this.j};
n.clear=function(){this.l={};this.U=this.j=this.i.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)?(delete this.l[a],this.j--,this.U++,this.i.length>2*this.j&&bh(this),!0):!1};
function bh(a){if(a.j!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Object.prototype.hasOwnProperty.call(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.j!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Object.prototype.hasOwnProperty.call(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.l,a)||(this.j++,this.i.push(a),this.U++);this.l[a]=b};
n.forEach=function(a,b){for(var c=ah(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new $g(this)};
n.R=function(a){bh(this);var b=0,c=this.U,d=this,e=new Wg;e.next=function(){if(c!=d.U)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)throw Vg;var f=d.i[b++];return a?f:d.l[f]};
return e};function dh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function eh(a){return a.classList?a.classList:dh(a).match(/\S+/g)||[]}
function fh(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function M(a,b){return a.classList?a.classList.contains(b):eb(eh(a),b)}
function N(a,b){if(a.classList)a.classList.add(b);else if(!M(a,b)){var c=dh(a);fh(a,c+(0<c.length?" "+b:b))}}
function gh(a,b){if(a.classList)D(b,function(f){N(a,f)});
else{var c={};D(eh(a),function(f){c[f]=!0});
D(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;fh(a,d)}}
function hh(a,b){a.classList?a.classList.remove(b):M(a,b)&&fh(a,$a(eh(a),function(c){return c!=b}).join(" "))}
function ih(a,b){a.classList?D(b,function(c){hh(a,c)}):fh(a,$a(eh(a),function(c){return!eb(b,c)}).join(" "))}
function jh(a,b,c){c?N(a,b):hh(a,b)}
function kh(a,b,c){M(a,b)&&(hh(a,b),N(a,c))}
function lh(a,b){var c=!M(a,b);jh(a,b,c)}
;var mh=!F&&!Rb();function nh(a,b){if(/-[a-z]/.test(b))return null;if(mh&&a.dataset){if(Tb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function oh(a){var b=[];ph(new qh,a,b);return b.join("")}
function qh(){}
function ph(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ph(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rh(d,c),c.push(":"),ph(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var sh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},th=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function rh(a,b){b.push('"',a.replace(th,function(c){var d=sh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),sh[c]=d);return d}),'"')}
;var uh=new WeakMap;function vh(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;var wh=function(){if(Ac){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Nb))?a[1]:"0"}return zc?(a=/1[0|1][_.][0-9_.]+/,(a=a.exec(Nb))?a[0].replace(/_/g,"."):"10"):Bc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Nb))?a[1]:""):Cc||Dc||Ec?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Nb))?a[1].replace(/_/g,"."):""):""}();function xh(a){return(a=a.exec(Nb))?a[1]:""}
var yh=function(){if(Sc)return xh(/Firefox\/([0-9.]+)/);if(F||vc||uc)return Lc;if(Wc)return qc()?xh(/CriOS\/([0-9.]+)/):xh(/Chrome\/([0-9.]+)/);if(Xc&&!qc())return xh(/Version\/([0-9.]+)/);if(Tc||Uc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Nb);if(a)return a[1]+"."+a[2]}else if(Vc)return(a=xh(/Android\s+([0-9.]+)/))?a:xh(/Version\/([0-9.]+)/);return""}();function zh(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=qe(h,"position")){var l=ue(h);if(!k){k=Be(h);var m;if(m=k){m=Xc&&0<=Eb(yh,10);var p;if(p=Fc)p=0<=Eb(wh,10);var r=Wc&&0<=Eb(yh,85);m=xc||m||p||r}k=m?-h.scrollLeft:!k||wc&&Oc("8")||"visible"==qe(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=jd(l,new G(k,h.scrollTop))}}}h=l||new G;l=Ae(a);if(k=te(a))r=new Zd(k.left,k.top,k.right-k.left,k.bottom-k.top),k=Math.max(l.left,
r.left),m=Math.min(l.left+l.width,r.left+r.width),k<=m&&(p=Math.max(l.top,r.top),r=Math.min(l.top+l.height,r.top+r.height),p<=r&&(l.left=k,l.top=p,l.width=m-k,l.height=r-p));k=ld(a);p=ld(c);if(k.i!=p.i){m=k.i.body;p=wd(p.i);r=new G(0,0);var q=(q=nd(m))?wd(q):window;if(sc(q,"parent")){var u=m;do{var y=q==p?ue(u):ve(u);r.x+=y.x;r.y+=y.y}while(q&&q!=p&&q!=q.parent&&(u=q.frameElement)&&(q=q.parent))}m=jd(r,ue(m));!F||9<=Number(Rc)||td(k.i)||(m=jd(m,ud(k.i)));l.left+=m.x;l.top+=m.y}a=Ah(a,b);b=l.left;
a&4?b+=l.width:a&2&&(b+=l.width/2);b=new G(b,l.top+(a&1?l.height:0));b=jd(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var A;g&&(A=te(c))&&(A.top-=h.y,A.right-=h.x,A.bottom-=h.y,A.left-=h.x);return Bh(b,c,d,f,A,g,void 0)}
function Bh(a,b,c,d,e,f,g){a=a.clone();var h=Ah(b,c);c=ye(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new Zd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new G(f.left,f.top);a instanceof G?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=xe(g,!1);b.style.top=xe(a,!1);g=new kd(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=nd(b),a=td(ld(g).i),!F||Oc("10")||a&&Oc("8")?(b=b.style,xc?b.MozBoxSizing="border-box":yc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(F?(a=De(b,"paddingLeft"),f=De(b,"paddingRight"),d=De(b,"paddingTop"),h=De(b,"paddingBottom"),a=new Yd(d,f,h,a)):(a=pe(b,"paddingLeft"),f=pe(b,"paddingRight"),d=pe(b,"paddingTop"),h=pe(b,"paddingBottom"),a=new Yd(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!F||9<=Number(Rc)?(f=pe(b,"borderLeftWidth"),d=pe(b,"borderRightWidth"),h=pe(b,"borderTopWidth"),b=pe(b,"borderBottomWidth"),b=new Yd(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Fe(b,"borderLeft"),
d=Fe(b,"borderRight"),h=Fe(b,"borderTop"),b=Fe(b,"borderBottom"),b=new Yd(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function Ah(a,b){return(b&8&&Be(a)?b^4:b)&-9}
;function O(a){Wd.call(this);this.D=1;this.A=[];this.C=0;this.i=[];this.j={};this.F=!!a}
C(O,Wd);n=O.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.D;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.D=e+3;d.push(e);return e};
function Ch(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.da(d),b.apply(void 0,arguments))},a)}
function Dh(a,b,c){if(b=a.j[b]){var d=a.i;(b=db(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.da(b)}}
n.da=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.C?(this.A.push(a),this.i[a+1]=Fa):(c&&fb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.N=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];Eh(this.i[g+1],this.i[g+2],d)}else{this.C++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.C--,0<this.A.length&&0==this.C)for(;c=this.A.pop();)this.da(c)}}return 0!=e}return!1};
function Eh(a,b,c){tg(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(D(b,this.da,this),delete this.j[a])}else this.i.length=0,this.j={}};
function Fh(a,b){if(b){var c=a.j[b];return c?c.length:0}c=0;for(var d in a.j)c+=Fh(a,d);return c}
n.V=function(){O.H.V.call(this);this.clear();this.A.length=0};function Gh(a){this.i=a}
Gh.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,oh(b))};
Gh.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Gh.prototype.remove=function(a){this.i.remove(a)};function Hh(a){this.i=a}
C(Hh,Gh);function Ih(a){this.data=a}
function Jh(a){return void 0===a||a instanceof Ih?a:new Ih(a)}
Hh.prototype.set=function(a,b){Hh.H.set.call(this,a,Jh(b))};
Hh.prototype.j=function(a){a=Hh.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Hh.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Kh(a){this.i=a}
C(Kh,Hh);Kh.prototype.set=function(a,b,c){if(b=Jh(b)){if(c){if(c<Ra()){Kh.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ra()}Kh.H.set.call(this,a,b)};
Kh.prototype.j=function(a){var b=Kh.H.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ra()||c&&c>Ra())Kh.prototype.remove.call(this,a);else return b}};function Lh(){}
;function Mh(){}
C(Mh,Lh);Mh.prototype.clear=function(){var a=Zg(this.R(!0)),b=this;D(a,function(c){b.remove(c)})};function Nh(a){this.i=a}
C(Nh,Mh);n=Nh.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.R=function(a){var b=0,c=this.i,d=new Wg;d.next=function(){if(b>=c.length)throw Vg;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Oh(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
C(Oh,Nh);function Ph(a,b){this.j=a;this.i=null;if(F&&!(9<=Number(Rc))){Qh||(Qh=new $g);this.i=Qh.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Qh.set(a,this.i));try{this.i.load(this.j)}catch(c){this.i=null}}}
C(Ph,Mh);var Rh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Qh=null;function Sh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Rh[b]})}
n=Ph.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Sh(a),b);Th(this)};
n.get=function(a){a=this.i.getAttribute(Sh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Sh(a));Th(this)};
n.R=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Wg;d.next=function(){if(b>=c.length)throw Vg;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Th(this)};
function Th(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Uh(a,b){this.j=a;this.i=b+"::"}
C(Uh,Mh);Uh.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Uh.prototype.get=function(a){return this.j.get(this.i+a)};
Uh.prototype.remove=function(a){this.j.remove(this.i+a)};
Uh.prototype.R=function(a){var b=this.j.R(!0),c=this,d=new Wg;d.next=function(){for(var e=b.next();e.substr(0,c.i.length)!=c.i;)e=b.next();return a?e.substr(c.i.length):c.j.get(e)};
return d};var Vh=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};B("yt.config_",Vh);function Wh(a){var b=arguments;1<b.length?Vh[b[0]]=b[1]:1===b.length&&Object.assign(Vh,b[0])}
function P(a,b){return a in Vh?Vh[a]:b}
;var Xh=[];function Yh(a){Xh.forEach(function(b){return b(a)})}
function Zh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$h(b),Yh(b)}}:a}
function $h(a){var b=x("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Wh("ERRORS",b))}
function ai(a){var b=x("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Wh("ERRORS",b))}
;function bi(a,b){"function"===typeof a&&(a=Zh(a));return window.setTimeout(a,b)}
function ci(a){window.clearTimeout(a)}
;var di=w.ytPubsubPubsubInstance||new O,ei=w.ytPubsubPubsubSubscribedKeys||{},fi=w.ytPubsubPubsubTopicToKeys||{},gi=w.ytPubsubPubsubIsSynchronous||{};function hi(a,b,c){var d=ii();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var g=function(){ei[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{gi[a]?g():bi(g,0)}catch(h){$h(h)}},c);
ei[e]=!0;fi[a]||(fi[a]=[]);fi[a].push(e);return e}return 0}
function ji(a){var b=ii();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),D(a,function(c){b.unsubscribeByKey(c);delete ei[c]}))}
function ki(a,b){var c=ii();return c?c.publish.apply(c,arguments):!1}
function li(a,b){gi[a]=!0;var c=ii();c&&c.publish.apply(c,arguments);gi[a]=!1}
function ii(){return w.ytPubsubPubsubInstance}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.da;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;B("ytPubsubPubsubInstance",di);B("ytPubsubPubsubTopicToKeys",fi);B("ytPubsubPubsubIsSynchronous",gi);B("ytPubsubPubsubSubscribedKeys",ei);function mi(a,b,c){a&&(a.dataset?a.dataset[ni(b)]=String(c):a.setAttribute("data-"+b,c))}
function oi(a,b){return a?a.dataset?a.dataset[ni(b)]:a.getAttribute("data-"+b):null}
function pi(a,b){a&&(a.dataset?delete a.dataset[ni(b)]:a.removeAttribute("data-"+b))}
var qi={};function ni(a){return qi[a]||(qi[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){this.version=a;this.args=b}
;function R(a,b){this.topic=a;this.i=b}
R.prototype.toString=function(){return this.topic};function ri(){}
function si(a,b){return ti(a,1,b)}
;function ui(){ri.apply(this,arguments)}
pa(ui,ri);function ti(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):bi(a,c||0)}
function vi(a){if(!isNaN(a)){var b=x("yt.scheduler.instance.cancelJob");b?b(a):ci(a)}}
ui.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
Ga(ui);ui.G();var wi=x("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.da;O.prototype.publish=O.prototype.N;O.prototype.clear=O.prototype.clear;B("ytPubsub2Pubsub2Instance",wi);var xi=x("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",xi);var yi=x("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",yi);var zi=x("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",zi);
B("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=Ai();c&&c.publish.call(c,a.toString(),a,b)}
function Bi(a,b,c){var d=Ai();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(xi[e])try{if(g&&a instanceof R&&a!=f)try{var k=a.i,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.U){var m=new k;k.U=m.version}var p=k.U}catch(r){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,hb(l.args))}catch(r){throw r.message=
"yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,g)}catch(r){$h(r)}},zi[a.toString()]?x("yt.scheduler.instance")?si(h):bi(h,0):h())});
xi[e]=!0;yi[a.toString()]||(yi[a.toString()]=[]);yi[a.toString()].push(e);return e}
function Ci(a){var b=Ai();b&&("number"===typeof a&&(a=[a]),D(a,function(c){b.unsubscribeByKey(c);delete xi[c]}))}
function Ai(){return x("ytPubsub2Pubsub2Instance")}
;var Di=0;function Ei(a){var b=a.__yt_uid_key;b||(b=Fi(),a.__yt_uid_key=b);return b}
function Gi(a,b){a=H(a);b=H(b);return!!Pd(a,function(c){return c===b},!0,void 0)}
function Hi(a,b){var c=pd(document,a,null,b);return c.length?c[0]:null}
function Ii(){var a=document,b;cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Ji(){jh(document.body,"hide-players",!1);var a=od("preserve-players");D(a,function(b){hh(b,"preserve-players")})}
var Fi=x("ytDomDomGetNextId")||function(){return++Di};
B("ytDomDomGetNextId",Fi);var Ki={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Li(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Ki||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Li.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Li.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Li.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=w.ytEventsEventsListeners||{};B("ytEventsEventsListeners",pb);var Mi=w.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Mi);
function Ni(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ja(e[4])&&Ja(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ni(a,b,c,d);if(e)return e;e=++Mi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Li(h);if(!Pd(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Li(h);
h.currentTarget=a;return c.call(a,h)};
g=Zh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Oi()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Pi(a,b,c){var d=a||document;return T(d,"click",function(e){var f=Pd(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function Qi(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Oi=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ri(a,b,c){return Pi(a,b,function(d){return M(d,c)})}
function Si(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Ti(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Oi()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var Ui={},Vi="ontouchstart"in document;function Wi(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Pd(c,function(e){return M(e,b)},!0,d)}
function Xi(a){var b="mouseover"==a.type&&"mouseenter"in Ui||"mouseout"==a.type&&"mouseleave"in Ui,c=a.type in Ui||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Ui[b];for(var d in c.j){var e=Wi(b,d,a.target);e&&!Pd(a.relatedTarget,function(f){return f==e},!0)&&c.N(d,e,b,a)}}if(b=Ui[a.type])for(d in b.j)(e=Wi(a.type,d,a.target))&&b.N(d,e,a.type,a)}}
T(document,"blur",Xi,!0);T(document,"change",Xi,!0);T(document,"click",Xi);T(document,"focus",Xi,!0);T(document,"mouseover",Xi);T(document,"mouseout",Xi);T(document,"mousedown",Xi);T(document,"keydown",Xi);T(document,"keyup",Xi);T(document,"keypress",Xi);T(document,"cut",Xi);T(document,"paste",Xi);Vi&&(T(document,"touchstart",Xi),T(document,"touchend",Xi),T(document,"touchcancel",Xi));function Yi(a){this.B=a;this.D={};this.O=[];this.F=[]}
n=Yi.prototype;n.M=function(a){return J(a,U(this))};
function U(a,b){return"yt-uix"+(a.B?"-"+a.B:"")+(b?"-"+b:"")}
n.unregister=function(){ji(this.O);this.O.length=0;Ci(this.F);this.F.length=0};
n.init=Fa;n.dispose=Fa;function Zi(a,b,c){a.O.push(hi(b,c,a))}
function $i(a,b,c){a.F.push(Bi(b,c,a))}
function V(a,b,c,d){d=U(a,d);var e=z(c,a);b in Ui||(Ui[b]=new O);Ui[b].subscribe(d,e);a.D[c]=e}
function W(a,b,c,d){if(b in Ui){var e=Ui[b];Dh(e,U(a,d),a.D[c]);0>=Fh(e)&&(e.dispose(),delete Ui[b])}delete a.D[c]}
n.aa=function(a,b,c){var d=this.o(a,b);if(d&&(d=x(d))){var e=kb(arguments,2);jb(e,0,0,a);d.apply(null,e)}};
n.o=function(a,b){return oi(a,b)};
function aj(a,b){mi(a,"tooltip-text",b)}
;var bj=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};B("yt.uix.widgets_",bj);var cj={q:!0,search_query:!0};function dj(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ej(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],cj.hasOwnProperty(f[0])||("ReferenceError"===k.name?ai(k):$h(k))}}return c}
function fj(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ej(1<a.length?a[1]:a[0])):{}}
function gj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ej(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
function hj(a){if(!b)var b=window.location.href;var c=fc(1,a),d=gc(a);c&&d?(a=a.match(dc),b=b.match(dc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?gc(b)==d&&(Number(fc(4,b))||null)==(Number(fc(4,a))||null):!0;return a}
;function ij(a){a=void 0===a?{}:a;"function"===typeof a&&(a={callback:a});if(a.gapiHintOverride||P("GAPI_HINT_OVERRIDE")){var b=fj(document.location.href).gapi_jsh;b&&tb(a,{_c:{jsl:{h:b}}})}Cf("gapi.iframes:gapi.iframes.style.common",a)}
;function jj(){return x("gapi.iframes.getContext")()}
;function kj(a){Q.call(this,1,arguments);this.i=a}
C(kj,Q);function lj(a){Q.call(this,1,arguments);this.i=a}
C(lj,Q);function mj(a,b,c){Q.call(this,3,arguments);this.l=a;this.j=b;this.i=null!=c?!!c:null}
C(mj,Q);function nj(a,b,c,d,e,f){Q.call(this,2,arguments);this.i=a;this.j=b;this.A=c||null;this.l=d||null;this.source=e||null;this.params=f||null}
C(nj,Q);function oj(a,b,c){Q.call(this,1,arguments);this.i=a;this.j=b}
C(oj,Q);function pj(a,b,c,d,e,f,g,h){Q.call(this,1,arguments);this.i=a;this.B=b;this.j=c;this.C=d||null;this.A=e||null;this.l=f||null;this.source=g||null;this.params=h||null}
C(pj,Q);
var qj=new R("subscription-batch-subscribe",kj),rj=new R("subscription-batch-unsubscribe",kj),sj=new R("subscription-subscribe",nj),tj=new R("subscription-subscribe-loading",lj),uj=new R("subscription-subscribe-loaded",lj),vj=new R("subscription-subscribe-success",oj),wj=new R("subscription-subscribe-external",nj),xj=new R("subscription-unsubscribe",pj),yj=new R("subscription-unsubscirbe-loading",lj),zj=new R("subscription-unsubscribe-loaded",lj),Aj=new R("subscription-unsubscribe-success",lj),Bj=
new R("subscription-external-unsubscribe",pj),Cj=new R("subscription-enable-ypc",lj),Dj=new R("subscription-disable-ypc",lj),Ej=new R("subscription-prefs",mj),Fj=new R("subscription-prefs-success",mj),Gj=new R("subscription-prefs-failure",mj);function Hj(){var a=void 0===a?!1:a;var b=Ii();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function Ij(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",jh(a,"hid",!b))}
function Jj(a){return(a=H(a))?"none"!=a.style.display&&!M(a,"hid"):!1}
function Kj(a){D(arguments,function(b){!Ia(b)||b instanceof Element?Ij(b,!0):D(b,function(c){Kj(c)})})}
function Lj(a){D(arguments,function(b){!Ia(b)||b instanceof Element?Ij(b,!1):D(b,function(c){Lj(c)})})}
(function(a,b){function c(f){var g=v(f);f=g.next().value;g=ha(g);return a.apply(f,g)}
function d(f){f=v(f);f.next();f=ha(f);return b(e,f)}
b=void 0===b?vh:b;var e=Ka(a);return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];h=this||w;var k=uh.get(h);k||(k={},uh.set(h,k));return tc(k,[this].concat(g instanceof Array?g:ha(v(g))),c,d)}})(function(a){var b=yd(document,"DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=yd(document,"DIV");we(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;Ad(b);return a});function Mj(){Yi.call(this,"tooltip");this.i=0;this.j={}}
C(Mj,Yi);Ga(Mj);n=Mj.prototype;n.register=function(){V(this,"mouseover",this.ta);V(this,"mouseout",this.W);V(this,"focus",this.Oa);V(this,"blur",this.Ha);V(this,"click",this.W);V(this,"touchstart",this.nb);V(this,"touchend",this.wa);V(this,"touchcancel",this.wa)};
n.unregister=function(){W(this,"mouseover",this.ta);W(this,"mouseout",this.W);W(this,"focus",this.Oa);W(this,"blur",this.Ha);W(this,"click",this.W);W(this,"touchstart",this.nb);W(this,"touchend",this.wa);W(this,"touchcancel",this.wa);this.dispose();Mj.H.unregister.call(this)};
n.dispose=function(){for(var a in this.j)this.W(this.j[a]);this.j={}};
n.ta=function(a){if(!(this.i&&1E3>Ra()-this.i)){var b=parseInt(this.o(a,"tooltip-hide-timer"),10);b&&(pi(a,"tooltip-hide-timer"),ci(b));b=z(function(){Nj(this,a);pi(a,"tooltip-show-timer")},this);
var c=parseInt(this.o(a,"tooltip-show-delay"),10)||0;b=bi(b,c);mi(a,"tooltip-show-timer",b.toString());a.title&&(aj(a,Oj(this,a)),a.title="");b=Ka(a).toString();this.j[b]=a}};
n.W=function(a){var b=parseInt(this.o(a,"tooltip-show-timer"),10);b&&(ci(b),pi(a,"tooltip-show-timer"));b=z(function(){if(a){var c=H(Pj(this,a));c&&(Qj(c),Ad(c),pi(a,"content-id"));c=H(Pj(this,a,"arialabel"));Ad(c)}pi(a,"tooltip-hide-timer")},this);
b=bi(b,50);mi(a,"tooltip-hide-timer",b.toString());if(b=this.o(a,"tooltip-text"))a.title=b;b=Ka(a).toString();delete this.j[b]};
n.Oa=function(a,b){this.i=0;this.ta(a,b)};
n.Ha=function(a){this.i=0;this.W(a)};
n.nb=function(a,b,c){c.changedTouches&&(this.i=0,(a=Wi(b,U(this),c.changedTouches[0].target))&&this.ta(a,b))};
n.wa=function(a,b,c){c.changedTouches&&(this.i=Ra(),(a=Wi(b,U(this),c.changedTouches[0].target))&&this.W(a))};
function Rj(a,b,c){aj(b,c);a=a.o(b,"content-id");(a=H(a))&&Ed(a,c)}
function Oj(a,b){return a.o(b,"tooltip-text")||b.title}
function Nj(a,b){if(b){var c=Oj(a,b);if(c){var d=H(Pj(a,b));if(!d){d=document.createElement("div");d.id=Pj(a,b);fh(d,U(a,"tip"));var e=document.createElement("div");fh(e,U(a,"tip-body"));var f=document.createElement("div");fh(f,U(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");fh(g,U(a,"tip-content"));var h=Sj(a,b),k=Pj(a,b,"content");g.id=k;mi(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=Md(b);k=Pj(a,b,"arialabel");
f=document.createElement("div");N(f,U(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Ed(f,l);b.setAttribute("aria-labelledby",k);k=Hj()||document.body;k.appendChild(f);k.appendChild(d);Rj(a,b,c);(c=parseInt(a.o(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",N(g,U(a,"normal-wrap")));g=M(b,U(a,"reverse"));Tj(a,b,d,e,h,g)||Tj(a,b,d,e,h,!g);var m=U(a,"tip-visible");bi(function(){N(d,m)},0)}}}}
function Tj(a,b,c,d,e,f){jh(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=ye(b);f=new G((h.width-10)/2,f?h.height:0);var k=ue(b);Bh(new G(k.x+f.x,k.y+f.y),c,g);f=sd(window);if(1==c.nodeType)var l=ve(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new G(c.clientX,c.clientY);c=ye(d);var m=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<m);f=!!(f.width<l.x+m);l=(c.width+3)/-2- -5;a=a.o(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Pj(a,b,c){a=U(a)+Ei(b);c&&(a+="-"+c);return a}
function Sj(a,b){var c=null;Ac&&M(b,U(a,"masked"))&&((c=H("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Kj(c)):(c=yd(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",fh(c,U(a,"tip-mask"))));return c}
function Qj(a){var b=H("yt-uix-tooltip-shared-mask"),c=b&&Pd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Lj(b),document.body.appendChild(b))}
;function Uj(a){var b=Vj();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=hi("LOGGED_IN",function(d){ji(P("LOGGED_IN_PUBSUB_KEY",void 0));Wh("LOGGED_IN",!0);a(d)});
Wh("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function Vj(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=lc(a,"mode","subscribe");a=lc("/signin?context=popup","next",a);return a=lc(a,"feature","sub_button")}
B("yt.pubsub.publish",ki);function X(a){a=Wj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Xj(a,b){var c=Wj(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Wj(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function Yj(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Zj=window,Y=Zj.ytcsi&&Zj.ytcsi.now?Zj.ytcsi.now:Zj.performance&&Zj.performance.timing&&Zj.performance.now&&Zj.performance.timing.navigationStart?function(){return Zj.performance.timing.navigationStart+Zj.performance.now()}:function(){return(new Date).getTime()};var ak=Xj("initial_gel_batch_timeout",1E3),bk=Math.pow(2,16)-1,ck=null,dk=0,ek=void 0,fk=0,gk=0,hk=0,ik=!0,jk=w.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",jk);var kk=w.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",kk);function lk(a){a=void 0===a?!1:a;return new zg(function(b){ci(fk);ci(gk);gk=0;ek&&ek.isReady()?(mk(b,a),jk.clear()):(nk(),b())})}
function nk(){X("web_gel_timeout_cap")&&!gk&&(gk=bi(lk,6E4));ci(fk);var a=P("LOGGING_BATCH_TIMEOUT",Xj("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&ik&&(a=ak);fk=bi(lk,a)}
function mk(a,b){var c=ek;b=void 0===b?!1:b;for(var d=Math.round(Y()),e=jk.size,f=v(jk),g=f.next();!g.done;g=f.next()){var h=v(g.value);g=h.next().value;var k=h.next().value;h=rb({context:ok(c.i||pk())});h.events=k;(k=kk[g])&&qk(h,g,k);delete kk[g];rk(h,d);sk(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();dk=Math.round(Y()-d)},
onError:function(){e--;e||a()},
mc:b});ik=!1}}
function rk(a,b){a.requestTimeMs=String(b);X("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&X("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*bk/2));d++;d>bk&&(d=1);Wh("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ck&&dk&&X("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ck,roundtripMs:String(dk)});ck=c;dk=0}}
function qk(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var tk=w.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",tk);
function uk(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Y());e[a]=b;a=x("_lact",window);a=null==a?-1:Math.max(Ra()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};X("log_sequence_info_on_gel_web")&&d.kb&&(a=e.context,b=d.kb,tk[b]=b in tk?tk[b]+1:0,a.sequence={index:tk[b],groupKey:b},d.Jc&&delete tk[d.kb]);d=d.Ic;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),kk[d.token]=a,a=d.token);d=jk.get(a)||[];jk.set(a,
d);d.push(e);c&&(ek=new c);c=Xj("web_logging_max_batch")||100;e=Y();d.length>=c?lk(!0):10<=e-hk&&(nk(),hk=e)}
;function vk(a){var b=wk;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ge;e.flash="0";a:{try{var f=b.i.top.location.href}catch(y){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?$c:g;try{var h=g.history.length}catch(y){h=0}e.u_his=h;e.u_java=!!$c.navigator&&"unknown"!==typeof $c.navigator.javaEnabled&&!!$c.navigator.javaEnabled&&$c.navigator.javaEnabled();$c.screen&&(e.u_h=$c.screen.height,e.u_w=$c.screen.width,
e.u_ah=$c.screen.availHeight,e.u_aw=$c.screen.availWidth,e.u_cd=$c.screen.colorDepth);$c.navigator&&$c.navigator.plugins&&(e.u_nplug=$c.navigator.plugins.length);$c.navigator&&$c.navigator.mimeTypes&&(e.u_nmime=$c.navigator.mimeTypes.length);h=b.i;try{var k=h.screenX;var l=h.screenY}catch(y){}try{var m=h.outerWidth;var p=h.outerHeight}catch(y){}try{var r=h.innerWidth;var q=h.innerHeight}catch(y){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,
m,p,r,q];try{var u=sd(b.i.top||window).round()}catch(y){u=new kd(-12245933,-12245933)}l=u;u={};m=new Ef;w.SVGElement&&w.document.createElementNS&&m.set(0);p=Vd();p["allow-top-navigation-by-user-activation"]&&m.set(1);p["allow-popups-to-escape-sandbox"]&&m.set(2);w.crypto&&w.crypto.subtle&&m.set(3);w.TextDecoder&&w.TextEncoder&&m.set(4);m=Ff(m);u.bc=m;u.bih=l.height;u.biw=l.width;u.brdim=k.join();b=b.j;b=(u.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||
b.mozVisibilityState||""]||0,u.wgl=!!$c.WebGLRenderingContext,u);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var wk=new function(){var a=window.document;this.i=window;this.j=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return dj(vk(a))});var xk="XMLHttpRequest"in w?function(){return new XMLHttpRequest}:null;
function yk(){if(!xk)return null;var a=xk();return"open"in a?a:null}
;var zk={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ak="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Bk=!1;function Ck(a,b){b=void 0===b?{}:b;var c=hj(a),d=X("web_ajax_ignore_global_headers_if_set"),e;for(e in zk){var f=P(zk[e]);!f||!c&&gc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!gc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!gc(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!gc(a))b["X-YouTube-Ad-Signals"]=dj(vk(void 0));return b}
function Dk(a){var b=window.location.search,c=gc(a),d=ec(fc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ej(b),f={};D(Ak,function(g){e[g]&&(f[g]=e[g])});
return gj(a,f||{},!1)}
function Ek(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fk(a,b);var d=Gk(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&ci(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||w;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ha&&b.ha.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.fb&&0<b.timeout&&(f=bi(function(){e||(e=!0,ci(f),b.fb.call(b.context||w))},b.timeout))}else Hk(a,b)}
function Hk(a,b){var c=b.format||"JSON";a=Fk(a,b);var d=Gk(a,b),e=!1,f=Ik(a,function(k){if(!e){e=!0;h&&ci(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)m=Jk(a,c,k,b.Hc);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||w;
l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.ha&&b.ha.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.ua&&0<b.timeout){var g=b.ua;var h=bi(function(){e||(e=!0,f.abort(),ci(h),g.call(b.context||w,f))},b.timeout)}}
function Fk(a,b){b.Mc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=gj(a,d||{},!0));return a}
function Gk(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.K,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Kc||gc(a)&&!b.withCredentials&&gc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.K&&b.K[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ej(e),tb(e,f),e=b.ib&&"JSON"==b.ib?JSON.stringify(e):kc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Bk&&c&&"POST"!=b.method&&
(Bk=!0,$h(Error("AJAX request with postData should use POST")));return e}
function Jk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ai(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Kk(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Lk(g)})}d&&Mk(e);
return e}
function Mk(a){if(Ja(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Xb(a[b],null);a[c]=d}else Mk(a[b])}}
function Kk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Lk(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ik(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Zh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=yk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=Dk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ck(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Nk(){return"INNERTUBE_API_KEY"in Vh&&"INNERTUBE_API_VERSION"in Vh}
function pk(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ib:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Jb:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Lb:P("INNERTUBE_CONTEXT_HL",void 0),Kb:P("INNERTUBE_CONTEXT_GL",void 0),Mb:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ob:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Nb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ok(a){var b={client:{hl:a.Lb,gl:a.Kb,clientName:a.Jb,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ib}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Yj();0<c.length&&(b.request={internalExperimentFlags:c});a.appInstallData&&X("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&
!X("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=v(Object.entries(ej(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ok(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ec||P("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Dc:b=We([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Pk(a){a=Object.assign({},a);delete a.Authorization;var b=We();if(b){var c=new Tg;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ia(b);void 0===c&&(c=0);if(!Zc){Zc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Yc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Zc[k]&&(Zc[k]=h)}}}c=Yc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Qk(a,b,c,d,e){fd.set(""+a,b,{Va:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;function Rk(a){var b=new Oh;(b=b.isAvailable()?a?new Uh(b,a):b:null)||(a=new Ph(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Kh(a):null;this.j=document.domain||window.location.hostname}
Rk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Ra()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(oh(b))}catch(f){return}else e=escape(b);Qk(a,e,c,this.j)};
Rk.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=fd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rk.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;fd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Sk;function Tk(){Sk||(Sk=new Rk("yt.innertube"));return Sk}
function Uk(a,b,c,d){if(d)return null;d=Tk().get("nextId",!0)||1;var e=Tk().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pk(c),requestTime:Math.round(Y())};Tk().set("nextId",d+1,86400,!0);Tk().set("requests",e,86400,!0);return d}
function Vk(a){var b=Tk().get("requests",!0)||{};delete b[a];Tk().set("requests",b,86400,!0)}
function Wk(a){var b=Tk().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Pk(Ok(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),sk(a,d.method,e,{}));delete b[c]}}Tk().set("requests",b,86400,!0)}}
;function Xk(){this.i=!0}
function Yk(a){var b={},c=We([]);c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in Vh||(b["X-Origin"]=window.location.origin),X("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in Vh&&(b["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return b}
;var Zk={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var $k=[],al=!1;function bl(a,b){al||($k.push({type:"EVENT",eventType:a,payload:b}),10<$k.length&&$k.shift())}
;function cl(a){if(!a)throw Error();throw a;}
function dl(a){return a}
function el(a){var b=this;this.j=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];this.j(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=v(b.i);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=v(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
el.all=function(a){return new el(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Y:0};f.Y<a.length;f={Y:f.Y},++f.Y)el.resolve(a[f.Y]).then(function(g){return function(h){d[g.Y]=h;e--;0===e&&b(d)}}(f))["catch"](function(g){c(g)})})};
el.resolve=function(a){return new el(function(b,c){a instanceof el?a.then(b,c):b(a)})};
el.reject=function(a){return new el(function(b,c){c(a)})};
el.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:dl,e=null!==b&&void 0!==b?b:cl;return new el(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){fl(c,c,d,f,g)}),c.onRejected.push(function(){gl(c,c,e,f,g)})):"FULFILLED"===c.state.status?fl(c,c,d,f,g):"REJECTED"===c.state.status&&gl(c,c,e,f,g)})};
el.prototype["catch"]=function(a){return this.then(void 0,a)};
function fl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof el?hl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof el?hl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof el?hl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function il(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jl(a){return new Promise(function(b,c){il(a,b,c)})}
function kl(a){return new el(function(b,c){il(a,b,c)})}
;function ll(a,b){return new el(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function ml(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(v(c)))}
pa(ml,Error);var nl={},ol=(nl.AUTH_INVALID="No user identifier specified.",nl.EXPLICIT_ABORT="Transaction was explicitly aborted.",nl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",nl.MISSING_OBJECT_STORE="Object store not created.",nl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",nl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",nl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",nl);
function pl(a,b,c){b=void 0===b?{}:b;c=void 0===c?ol[a]:c;ml.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,pl.prototype);al||($k.push({type:"ERROR",payload:this}),10<$k.length&&$k.shift())}
pa(pl,ml);function ql(a,b,c){pl.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,ql.prototype)}
pa(ql,pl);function rl(a){pl.call(this,"MISSING_OBJECT_STORE",{Oc:a},ol.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,rl.prototype)}
pa(rl,pl);function sl(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(Y());this.j=!1}
n=sl.prototype;n.add=function(a,b,c){return tl(this,[a],"readwrite",function(d){return ul(d,a).add(b,c)})};
n.clear=function(a){return tl(this,[a],"readwrite",function(b){return ul(b,a).clear()})};
n.close=function(){var a;this.i.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return tl(this,[a],"readonly",function(c){return ul(c,a).count(b)})};
n["delete"]=function(a,b){return tl(this,[a],"readwrite",function(c){return ul(c,a)["delete"](b)})};
n.get=function(a,b){return tl(this,[a],"readwrite",function(c){return ul(c,a).get(b)})};
function tl(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.i.transaction(b,c);e=new vl(e);d=wl(e,d);xl(a,d,b.join(),c);return d}
function xl(a,b,c,d){oc(a,function f(){var g,h,k=this,l,m,p;return Aa(f,function(r){if(1==r.i)return g=Math.round(Y()),r.B=2,ta(r,b,4);if(2!=r.i)h=Math.round(Y()),yl(k,!0,c,h-g),r.i=0,r.B=0;else{l=ua(r);m=Math.round(Y());var q=l,u=k.i.name,y=k.transactionCount,A;"QuotaExceededError"===q.name?A=new pl("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:u,mode:d}):"UnknownError"===q.name&&(A=new pl("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:u,mode:d}));A&&bl("QUOTA_EXCEEDED",{dbName:u,objectStoreNames:c,
transactionCount:y,transactionMode:d});p=m-g;l instanceof ql&&(bl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.l}),k.j=!0);yl(k,!1,c,p);r.i=0}})})}
function yl(a,b,c,d){bl("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.j,duration:d,isSuccessful:b})}
function zl(a){this.i=a}
n=zl.prototype;n.add=function(a,b){return kl(this.i.add(a,b))};
n.clear=function(){return kl(this.i.clear()).then(function(){})};
n.count=function(a){return kl(this.i.count(a))};
function Al(a,b){return Bl(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?Al(this,a):kl(this.i["delete"](a))};
n.get=function(a){return kl(this.i.get(a))};
n.index=function(a){return new Cl(this.i.index(a))};
n.getName=function(){return this.i.name};
function Bl(a,b,c){a=a.i.openCursor(b.query,b.direction);return Dl(a).then(function(d){return ll(d,c)})}
function vl(a){var b=this;this.i=a;this.j=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=ql;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.i.db.name,b.i.mode);d(e)}})})}
function wl(a,b){var c=new Promise(function(d,e){b(a).then(function(f){a.commit();d(f)})["catch"](e)});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
vl.prototype.abort=function(){this.i.abort();this.aborted=!0;throw new pl("EXPLICIT_ABORT");};
vl.prototype.commit=function(){var a=this.i;a.commit&&!this.aborted&&a.commit()};
function ul(a,b){var c=a.i.objectStore(b),d=a.j.get(c);d||(d=new zl(c),a.j.set(c,d));return d}
function Cl(a){this.i=a}
Cl.prototype.count=function(a){return kl(this.i.count(a))};
Cl.prototype["delete"]=function(a){return El(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Cl.prototype.get=function(a){return kl(this.i.get(a))};
Cl.prototype.getKey=function(a){return kl(this.i.getKey(a))};
function El(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Dl(a).then(function(d){return ll(d,c)})}
function Fl(a,b){this.request=a;this.cursor=b}
function Dl(a){return kl(a).then(function(b){return null===b?null:new Fl(a,b)})}
n=Fl.prototype;n.advance=function(a){this.cursor.advance(a);return Dl(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return Dl(this.request)};
n["delete"]=function(){return kl(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.update=function(a){return kl(this.cursor.update(a))};function Gl(a,b,c){return oc(this,function e(){var f,g,h,k,l,m,p,r,q,u;return Aa(e,function(y){if(1==y.i)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.hc,m=g.upgrade,p=g.closed,q=function(){r||(r=new sl(f.result,{closed:p}));return r},f.addEventListener("upgradeneeded",function(A){if(null===A.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");A.dataLoss&&"none"!==A.dataLoss&&bl("IDB_DATA_CORRUPTED",{reason:A.dataLossMessage||"unknown reason",dbName:a});var Za=q(),fa=new vl(f.transaction);m&&m(Za,A.oldVersion,A.newVersion,fa)}),h&&f.addEventListener("blocked",function(){h()}),ta(y,jl(f),2);
u=y.l;k&&u.addEventListener("versionchange",function(){k(q())});
u.addEventListener("close",function(){bl("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:u.version});l&&l()});
return y["return"](q())})})}
function Hl(a,b){b=void 0===b?{}:b;return oc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return ta(h,jl(e),0)})})}
;var Il=Tc||Uc;function Jl(a){var b=Nb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Kl(a){this.name="YtIdbMeta";this.options=a;this.j=!1}
function Ll(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Gl(a,b,c)}
Kl.prototype["delete"]=function(a){a=void 0===a?{}:a;return Hl(this.name,a)};
Kl.prototype.open=function(){var a=this;if(!this.i){var b,c=function(){a.i===b&&(a.i=void 0)},d={blocking:function(f){f.close()},
closed:c,hc:c,upgrade:this.options.upgrade},e=function(){return oc(a,function g(){var h=this,k,l,m;return Aa(g,function(p){switch(p.i){case 1:return p.B=2,ta(p,Ll(h.name,h.options.version,d),4);case 4:k=p.l;if(!Sc){p.i=5;break}a:{var r=v(Object.keys(h.options.Xb));for(var q=r.next();!q.done;q=r.next())if(q=q.value,!k.i.objectStoreNames.contains(q)){r=q;break a}r=void 0}l=r;if(void 0===l){p.i=5;break}if(!Sc||h.j){p.i=7;break}h.j=!0;return ta(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new rl(l);
case 5:return p["return"](k);case 2:m=ua(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](Ll(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.i=b=e()}return this.i};var Ml=new Kl({Xb:{databases:!0},upgrade:function(a,b){1>b&&a.i.createObjectStore("databases",{keyPath:"actualName"})}});
function Nl(a){return oc(this,function c(){var d;return Aa(c,function(e){if(1==e.i)return ta(e,Ml.open(),2);d=e.l;return e["return"](tl(d,["databases"],"readwrite",function(f){var g=ul(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return kl(g.i.put(a,void 0)).then(function(){})})}))})})}
function Ol(){return oc(this,function b(){var c;return Aa(b,function(d){if(1==d.i)return ta(d,Ml.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new jg;var Pl;
function Ql(){return oc(this,function b(){var c,d;return Aa(b,function(e){switch(e.i){case 1:var f;if(f=Il)f=/WebKit\/([0-9]+)/.exec(Nb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!X("ytidb_allow_on_ios_safari_v8_and_v9")||vc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.B=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return ta(e,Nl(d),4);case 4:return ta(e,Ol(),5);case 5:return e["return"](!0);case 2:return ua(e),e["return"](!1)}})})}
function Rl(){if(void 0!==Pl)return Pl;al=!0;return Pl=Ql().then(function(a){al=!1;return a})}
;var Sl;function Tl(){Sl||(Sl=new Rk("yt.offline"));return Sl}
;function Ul(){jg.call(this);this.D=this.F=this.j=!1;this.A=Vl();Wl(this);Xl(this)}
pa(Ul,jg);function Vl(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Xl(a){window.addEventListener("online",function(){a.A=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");Yl(a);if(a.D&&X("offline_error_handling")){var b=Tl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new ml(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;$h(d)}Tl().set("errors",{},2592E3,!0)}}})}
function Wl(a){window.addEventListener("offline",function(){a.A=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");Yl(a)})}
function Yl(a){a.F&&(ai(new ml("NetworkStatusManager state did not match poll",Y()-0)),a.F=!1)}
;function Zl(a){a=void 0===a?{}:a;jg.call(this);var b=this;this.A=this.F=0;Ul.i||(Ul.i=new Ul);this.j=Ul.i;this.j.j=!0;a.Rb&&(this.j.D=!0);a.va?(this.va=a.va,Zf(this.j,"ytnetworkstatus-online",function(){$l(b,"publicytnetworkstatus-online")}),Zf(this.j,"ytnetworkstatus-offline",function(){$l(b,"publicytnetworkstatus-offline")})):(Zf(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),Zf(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
pa(Zl,jg);function $l(a,b){a.va?a.A?(vi(a.F),a.F=si(function(){a.D!==b&&(a.dispatchEvent(b),a.D=b,a.A=Y())},a.va-(Y()-a.A))):(a.dispatchEvent(b),a.D=b,a.A=Y()):a.dispatchEvent(b)}
;var am;function bm(a,b){b=void 0===b?{}:b;Rl().then(function(){am||(am=new Zl({Rb:!0}));var c=am.j;c.A!==Vl()&&ai(new ml("NetworkStatusManager isOnline does not match window status"));Hk(a,b)})}
function cm(a,b){b=void 0===b?{}:b;Rl().then(function(){Hk(a,b)})}
;function dm(a){var b=this;this.i=null;a?this.i=a:Nk()&&(this.i=pk());ti(function(){Wk(b)},0,5E3)}
dm.prototype.isReady=function(){!this.i&&Nk()&&(this.i=pk());return!!this.i};
function sk(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ai(new ml("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new ml("innertube xhrclient not ready",b,c,d);$h(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",K:c,ib:"JSON",ua:function(){d.ua()},
fb:d.ua,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
eb:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
Pc:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.i.Mb)&&(g=e);var h=a.i.Ob||!1,k=Ok(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.i.innertubeApiVersion+"/"+b;var l={alt:"json"};a.i.Nb&&f.headers.Authorization||(l.key=a.i.innertubeApiKey);var m=gj(""+g+e,l||{},!0);Rl().then(function(p){if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(X("networkless_gel")&&!p||!X("networkless_gel"))var r=Uk(b,
c,k,h);if(r){var q=f.onSuccess,u=f.eb;f.onSuccess=function(y,A){Vk(r);q(y,A)};
c.eb=function(y,A){Vk(r);u(y,A)}}}try{X("use_fetch_for_op_xhr")?Ek(m,f):X("networkless_gel")&&d.retry?(f.method="POST",!d.mc&&X("nwl_send_fast_on_unload")?cm(m,f):bm(m,f)):(f.method="POST",f.K||(f.K={}),Hk(m,f))}catch(y){if("InvalidAccessError"==y.name)r&&(Vk(r),r=0),ai(Error("An extension is blocking network request."));
else throw y;}r&&ti(function(){Wk(a)},0,5E3)})}
;var em=Ra().toString();
function fm(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ra();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(em)for(a=1,b=0;b<em.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^em.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var gm=w.ytLoggingDocDocumentNonce_||fm();B("ytLoggingDocDocumentNonce_",gm);function hm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function im(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
B("yt_logging_screen.getRootVeType",function(a){return P(im(void 0===a?0:a),void 0)});
function jm(){var a=P("csn-to-ctt-auth-info");a||(a={},Wh("csn-to-ctt-auth-info",a));return a}
function km(a){a=void 0===a?0:a;var b=P(hm(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(X("kevlar_client_side_screens")||X("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
B("yt_logging_screen.getCurrentCsn",km);function lm(a,b,c){var d=jm();(c=km(c))&&delete d[c];b&&(d[a]=b)}
B("yt_logging_screen.getCttAuthInfo",function(a){return jm()[a]});
B("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==P(hm(c))||b!==P(im(c)))if(lm(a,d,c),Wh(hm(c),a),Wh(im(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&uk("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:gm,clientScreenNonce:a},dm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function mm(){Yi.call(this,"button");this.i=null;this.l=[];this.j={}}
C(mm,Yi);Ga(mm);n=mm.prototype;n.register=function(){V(this,"click",this.ob);V(this,"keydown",this.Ta);V(this,"keypress",this.Ua);Zi(this,"page-scroll",this.Fb)};
n.unregister=function(){W(this,"click",this.ob);W(this,"keydown",this.Ta);W(this,"keypress",this.Ua);nm(this);this.j={};mm.H.unregister.call(this)};
n.ob=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
n.Ta=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=om(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Fd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Vb;else"table"==e&&(f=this.Ub);f&&pm(this,a,b,c,z(f,this))}}};
n.Fb=function(){var a=this.j,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,U(this));if(void 0==d||void 0==b)break;qm(this,d,b,!0)}};
function pm(a,b,c,d,e){var f=Jj(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=rm(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=mc(b.href,h)+k;h instanceof Gb||h instanceof Gb||(h="object"==typeof h&&h.ga?h.ea():String(h),Lb.test(h)||(h="about:invalid#zClosurez"),h=new Gb(h,Hb));l.href=Ib(h)}else Si(b)}else g&&
sm(a,b);else f?27==d.keyCode?(rm(a,c),sm(a,b)):e(b,c,d):(h=M(b,U(a,"reverse"))?38:40,d.keyCode==h&&(Si(b),d.preventDefault()))}
n.Ua=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=om(this,a),Jj(a)&&c.preventDefault())};
function rm(a,b){var c=U(a,"menu-item-highlight"),d=I(c,b);d&&hh(d,c);return d}
function tm(a,b,c){N(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+Ka(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
n.Ub=function(a,b,c){var d=rm(this,b);b=Hi("table",b);var e=Hi("tr",b);e=pd(document,"td",null,e).length;b=pd(document,"td",null,b);d=um(d,b,e,c);-1!=d&&(tm(this,a,b[d]),c.preventDefault())};
n.Vb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=rm(this,b);b=$a(pd(document,"li",null,b),Jj);d=um(d,b,1,c);tm(this,a,b[d]);c.preventDefault()}};
function um(a,b,c,d){var e=b.length;a=Ya(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function vm(a,b){var c=b.iframeMask;c||(c=yd(document,"IFRAME"),c.src='javascript:""',fh(c,U(a,"menu-mask")),Lj(c),b.iframeMask=c);return c}
function qm(a,b,c,d){var e=J(b,U(a,"group")),f=!!a.o(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=Ae(b);if(M(b,U(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(m){}}M(b,"flip")&&(M(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.o(b,"button-has-sibling-menu")?k=se(e):a.o(b,"button-menu-root-container")&&(k=wm(a,b));F&&!Oc("8")&&(k=null);if(k){var l=Ae(k);l=new Yd(-l.top,l.left,l.top,-l.left)}k=new G(0,1);M(b,U(a,"center-menu"))&&(k.x-=Math.round((ye(c).width-ye(b).width)/
2));d&&(k.y+=ud(document).y);if(a=vm(a,b))b=ye(c),a.style.width=b.width+"px",a.style.height=b.height+"px",zh(e,f,a,g,k,l,197),d&&me(a,"position","fixed");zh(e,f,c,g,k,l,197)}
function wm(a,b){if(a.o(b,"button-menu-root-container")){var c=a.o(b,"button-menu-root-container");return J(b,c)}return document.body}
n.qb=function(a){if(a){var b=om(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.o(a,"button-has-sibling-menu")?c=a.parentNode:c=wm(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=vm(this,a);d&&c.appendChild(d);(c=!!this.o(a,"button-menu-fixed"))&&(this.j[Ei(a).toString()]=b);qm(this,a,b,c);li("yt-uix-button-menu-before-show",a,b);Kj(b);d&&Kj(d);
this.aa(a,"button-menu-action",!0);N(a,U(this,"active"));b=z(this.pb,this,a,!1);d=z(this.pb,this,a,!0);c=z(this.lc,this,a,void 0);this.i&&om(this,this.i)==om(this,a)||nm(this);ki("yt-uix-button-menu-show",a);Ti(this.l);this.l=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.i=a}}};
function sm(a,b){if(b){var c=om(a,b);if(c){a.i=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Lj(c);a.aa(b,"button-menu-action",!1);var d=vm(a,b),e=Ei(c).toString();delete a.j[e];bi(function(){d&&d.parentNode&&(Lj(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,U(a,"group"));
var f=[U(a,"active")];e&&f.push(U(a,"group-active"));ih(b,f);ki("yt-uix-button-menu-hide",b);Ti(a.l);a.l.length=0}}
n.lc=function(a,b){var c=om(this,a);if(c){b&&(b instanceof Ub?$b(c,b):Ed(c,b));var d=!!this.o(a,"button-menu-fixed");qm(this,a,c,d)}};
n.pb=function(a,b,c){c=Qi(c);var d=J(c,U(this));if(d){d=om(this,d);var e=om(this,a);if(d==e)return}d=J(c,U(this,"menu"));e=d==om(this,a);var f=M(c,U(this,"menu-item")),g=M(c,U(this,"menu-close"));if(!d||e&&(f||g))sm(this,a),d&&b&&this.o(a,"button-menu-indicate-selected")&&((a=I(U(this,"content"),a))&&Ed(a,Md(c)),xm(this,d,c))};
function xm(a,b,c){var d=U(a,"menu-item-selected");a=od(d,b);D(a,function(e){hh(e,d)});
N(c.parentNode,d)}
function om(a,b){if(!b.widgetMenu){var c=a.o(b,"button-menu-id");c=c&&H(c);var d=U(a,"menu");c?gh(c,[d,U(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
n.isToggled=function(a){return M(a,U(this,"toggled"))};
n.toggle=function(a){if(this.o(a,"button-toggle")){var b=J(a,U(this,"group")),c=U(this,"toggled"),d=M(a,c);if(b&&this.o(b,"button-toggle-group")){var e=this.o(b,"button-toggle-group");b=od(U(this),b);D(b,function(f){f!=a||"optional"==e&&d?(hh(f,c),f.removeAttribute("aria-pressed")):(N(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),lh(a,c)}};
n.click=function(a){if(om(this,a)){var b=om(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(sm(this,c),bi(z(this.qb,this,a),1)):Jj(b)?sm(this,a):this.qb(a)}a.focus()}this.aa(a,"button-action")};
function nm(a){a.i&&sm(a,a.i)}
;function ym(a){Yi.call(this,a);this.l=null}
C(ym,Yi);n=ym.prototype;n.M=function(a){var b=Yi.prototype.M.call(this,a);return b?b:a};
n.register=function(){Zi(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
n.dispose=function(){zm(this);ym.H.dispose.call(this)};
n.o=function(a,b){var c=ym.H.o.call(this,a,b);return c?c:(c=ym.H.o.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
n.show=function(a){var b=this.M(a);if(b){N(b,U(this,"active"));var c=Am(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Bm(this,a,c);var d=U(this,"card-visible"),e=this.o(a,"card-delegate-show")&&this.o(b,"card-action");this.aa(b,"card-action",a);this.l=a;Lj(c);bi(z(function(){e||(Kj(c),ki("yt-uix-card-show",b,a,c));Cm(c);N(c,d);ki("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Am(a,b,c){var d=c||b,e=U(a,"card");c=Dm(a,d);var f=H(U(a,"card")+Ei(d));if(f)return a=I(U(a,"card-body"),f),Dd(a,c)||(Ad(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+Ei(d);fh(f,e);(d=a.o(d,"card-class"))&&gh(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.o(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Ad(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Bm(a,b,c){var d=a.o(b,"orientation")||"horizontal";var e=I(U(a,"anchor"),b)||b;var f=a.o(b,"position"),g=!!a.o(b,"force-position"),h=a.o(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var m=13;var p=8}else l&&!k?(m=12,p=9):!l&&k?(m=9,p=12):(m=8,p=13);var r=Be(document.body);f=Be(b);r!=f&&(m^=4);if(d){f=b.offsetHeight/2-12;var q=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,q=new G(b.offsetWidth+6,-12);var u=
ye(c);f=Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?q.y+=12-b.offsetHeight/2:q.x+=12-b.offsetWidth/2);u=null;g||(u=10);b=U(a,"card-flip");a=U(a,"card-reverse");jh(c,b,l);jh(c,a,k);u=zh(e,m,c,p,q,null,u);!g&&u&&(u&48&&(l=!l,m^=4,p^=4),u&192&&(k=!k,m^=1,p^=1),jh(c,b,l),jh(c,a,k),zh(e,m,c,p,q));h&&(e=parseInt(c.style.top,10),g=ud(document).y,me(c,"position","fixed"),me(c,"top",e-g+"px"));r&&(c.style.right="",e=Ae(c),e.left=e.left||parseInt(c.style.left,10),g=sd(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!r&&l||r&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=I("yt-uix-card-arrow",c);l=I("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?ye(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
n.hide=function(a){if(a=this.M(a)){var b=H(U(this,"card")+Ei(a));b&&(hh(a,U(this,"active")),hh(b,U(this,"card-visible")),Lj(b),this.l=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Ad(b.cardMask),b.cardMask=null))}};
function zm(a){a.l&&a.hide(a.l)}
n.kc=function(a,b){var c=this.M(a);if(c){if(b){var d=Dm(this,c);if(!d)return;b instanceof Ub?$b(d,b):Ed(d,b)}M(c,U(this,"active"))&&(c=Am(this,a,c),Bm(this,a,c),Kj(c),Cm(c))}};
n.isActive=function(a){return(a=this.M(a))?M(a,U(this,"active")):!1};
function Dm(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.o(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;hh(f,d);N(f,e);b.cardContentNode=c}return c}
function Cm(a){var b=a.cardMask;b||(b=yd(document,"IFRAME"),b.src='javascript:""',gh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Em(){Yi.call(this,"kbd-nav")}
var Fm;C(Em,Yi);Ga(Em);n=Em.prototype;n.register=function(){V(this,"keydown",this.Qa);Zi(this,"yt-uix-kbd-nav-move-in",this.bb);Zi(this,"yt-uix-kbd-nav-move-in-to",this.Wb);Zi(this,"yt-uix-kbd-move-next",this.cb);Zi(this,"yt-uix-kbd-nav-move-to",this.oa)};
n.unregister=function(){W(this,"keydown",this.Qa);Ti(Fm)};
n.Qa=function(a,b,c){var d=c.keyCode;if(a=J(a,U(this)))switch(d){case 13:case 32:this.bb(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=nh(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,U(this));if(!c)break a;c=nh(c,"kbdNavMoveOut")}c=H(c);this.oa(c);ki("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&M(a,U(this,"list")))switch(d){case 40:this.cb(b,a);break;case 38:d=document.activeElement==a,a=Gm(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Hm(this,a[b]))}c.preventDefault()}};
n.bb=function(a){var b=nh(a,"kbdNavMoveIn");b=H(b);Im(this,a,b);this.oa(b)};
n.Wb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Im(this,d,a);this.oa(a)};
n.oa=function(a){if(a)if(Jd(a))a.focus();else{var b=Fd(a,function(c){return Cd(c)?Jd(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Im(a,b,c){if(b&&c)if(N(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,mh&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
n.cb=function(a,b){var c=document.activeElement==b,d=Gm(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Hm(this,d[c]))};
function Hm(a,b){if(b){var c=Od(b,"LI");c&&(N(c,U(a,"highlight")),Fm=T(b,"blur",z(function(d){hh(d,U(this,"highlight"));Ti(Fm)},a,c)))}}
function Gm(a){if("UL"!=a.tagName.toUpperCase())return[];a=$a(Bd(a),function(b){return"LI"==b.tagName.toUpperCase()});
return $a(ab(a,function(b){return Jj(b)?Fd(b,function(c){return Cd(c)?Jd(c):!1}):!1}),function(b){return!!b})}
;function Jm(){Yi.call(this,"menu");this.j=this.i=null;this.l={};this.C={};this.A=null}
C(Jm,Yi);Ga(Jm);function Km(a){var b=Jm.G();if(M(a,U(b)))return a;var c=b.M(a);return c?c:J(a,U(b,"content"))==b.i?b.j:null}
n=Jm.prototype;n.register=function(){V(this,"click",this.Pa);V(this,"mouseenter",this.Db);Zi(this,"page-scroll",this.Gb);Zi(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.M(a);Lm(this,a)});
this.A=new O};
n.unregister=function(){W(this,"click",this.Pa);this.j=this.i=null;Ti(lb(nb(this.l)));this.l={};mb(this.C,function(a){Ad(a)},this);
this.C={};Xd(this.A);this.A=null;Jm.H.unregister.call(this)};
n.Pa=function(a,b,c){a&&(b=Mm(this,a),!b.disabled&&Gi(c.target,b)&&Nm(this,a))};
n.Db=function(a,b,c){a&&M(a,U(this,"hover"))&&(b=Mm(this,a),Gi(c.target,b)&&Nm(this,a,!0))};
n.Gb=function(){this.i&&this.j&&Om(this,this.j,this.i)};
function Om(a,b,c){var d=Pm(a,b);d&&we(d,ye(c));if(c==a.i){var e=9,f=8;M(b,U(a,"reversed"))&&(e^=1,f^=1);M(b,U(a,"flipped"))&&(e^=4,f^=4);a=new G(0,1);d&&zh(b,e,d,f,a,null,197);zh(b,e,c,f,a,null,197)}}
function Nm(a,b,c){Qm(a,b)&&!c?Lm(a,b):(Rm(a,b),!a.i||Gi(b,a.i)?a.rb(b):Ch(a.A,z(a.rb,a,b)))}
n.rb=function(a){if(a){var b=Sm(this,a);if(b){li("yt-uix-menu-before-show",a,b);if(this.i)Gi(a,this.i)||Lm(this,this.j);else{this.j=a;this.i=b;M(a,U(this,"sibling-content"))||(Ad(b),document.body.appendChild(b));var c=Mm(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=Pm(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);hh(b,U(this,"content-hidden"));Om(this,a,b);gh(Mm(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);ki("yt-uix-menu-show",a);Tm(b);Um(this,a);ki("yt-uix-kbd-nav-move-in-to",
b);var d=z(this.nc,this,a),e=z(this.Sb,this,a);c=Ka(a).toString();this.l[c]=[T(b,"click",e),T(document,"click",d)];M(a,U(this,"indicate-selected"))&&(d=z(this.Tb,this,a),this.l[c].push(T(b,"click",d)));M(a,U(this,"hover"))&&(a=z(this.Eb,this,a),this.l[c].push(T(document,"mousemove",a)))}}};
n.Eb=function(a,b){var c=Qi(b);if(c){var d=Mm(this,a);Gi(c,d)||Vm(this,c)||Wm(this,a)}};
n.nc=function(a,b){var c=Qi(b);if(c){if(Vm(this,c)){var d=J(c,U(this,"content")),e=Od(c,"LI");e&&d&&Dd(d,e)&&li("yt-uix-menu-item-clicked",c);c=J(c,U(this,"close-on-select"));if(!c)return;d=Km(c)}Lm(this,d||a)}};
function Rm(a,b){if(b){var c=J(b,U(a,"content"));c&&(c=od(U(a),c),D(c,function(d){!Gi(d,b)&&Qm(this,d)&&Wm(this,d)},a))}}
function Lm(a,b){if(b){var c=[];c.push(b);var d=Sm(a,b);d&&(d=od(U(a),d),d=hb(d),c=c.concat(d),D(c,function(e){Qm(this,e)&&Wm(this,e)},a))}}
function Wm(a,b){if(b){var c=Sm(a,b);ih(Mm(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);N(c,U(a,"content-hidden"));var d=Sm(a,b);d&&qd(d,{"aria-expanded":"false"});(d=Pm(a,b))&&d.parentNode&&Ad(d);c&&c==a.i&&(a.j.appendChild(c),a.i=null,a.j=null,a.A&&a.A.N("ROOT_MENU_REMOVED"));ki("yt-uix-menu-hide",b);c=Ka(b).toString();Ti(a.l[c]);delete a.l[c]}}
n.Sb=function(a,b){var c=Qi(b);c&&Xm(this,a,c)};
n.Tb=function(a,b){var c=Qi(b);if(c){var d=Mm(this,a);if(d&&(c=Od(c,"LI")))if(c=Md(c).trim(),d.hasChildNodes()){var e=mm.G();(d=I(U(e,"content"),d))&&Ed(d,c)}else Ed(d,c)}};
function Um(a,b){var c=Sm(a,b);if(c){D(c.children,function(e){"LI"==e.tagName&&qd(e,{role:"menuitem"})});
qd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ka(c),c.id=d);(c=Mm(a,b))&&qd(c,{"aria-controls":d})}}
function Xm(a,b,c){var d=Sm(a,b);d&&M(b,U(a,"checked"))&&(a=Od(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(d=od("yt-ui-menu-item-checked",d),D(d,function(e){kh(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),kh(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Qm(a,b){var c=Sm(a,b);return c?!M(c,U(a,"content-hidden")):!1}
function Tm(a){a=pd(document,"UL",null,a);D(a,function(b){b.tabIndex=0;var c=Em.G();gh(b,[U(c),U(c,"list")])})}
function Sm(a,b){var c=oi(b,"menu-content-id");return c&&(c=H(c))?(gh(c,[U(a,"content"),U(a,"content-external")]),c):b==a.j?a.i:I(U(a,"content"),b)}
function Pm(a,b){var c=Ka(b).toString(),d=a.C[c];if(!d){d=yd(document,"IFRAME");d.src='javascript:""';var e=[U(a,"mask")];D(eh(b),function(f){e.push(f+"-mask")});
gh(d,e);a.C[c]=d}return d||null}
function Mm(a,b){return I(U(a,"trigger"),b)}
function Vm(a,b){return Gi(b,a.i)||Gi(b,a.j)}
;function Ym(){ym.call(this,"clickcard");this.i={};this.j={}}
C(Ym,ym);Ga(Ym);n=Ym.prototype;n.register=function(){Ym.H.register.call(this);V(this,"click",this.Ka,"target");V(this,"click",this.Ja,"close")};
n.unregister=function(){Ym.H.unregister.call(this);W(this,"click",this.Ka,"target");W(this,"click",this.Ja,"close");for(var a in this.i)Ti(this.i[a]);this.i={};for(a in this.j)Ti(this.j[a]);this.j={}};
n.Ka=function(a,b,c){c.preventDefault();b=Od(c.target,"button");if(!b||!b.disabled){if(b=this.o(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.M(a);this.o(b,"disabled")||(M(b,U(this,"active"))?(this.hide(a),hh(b,U(this,"active"))):(this.show(a),N(b,U(this,"active"))))}};
n.show=function(a){Ym.H.show.call(this,a);var b=this.M(a),c=Ka(a).toString();if(!oi(b,"click-outside-persists")){if(this.i[c])return;b=T(document,"click",z(this.La,this,a));var d=T(window,"blur",z(this.La,this,a));this.i[c]=[b,d]}a=T(window,"resize",z(this.kc,this,a,void 0));this.j[c]=a};
n.hide=function(a){Ym.H.hide.call(this,a);a=Ka(a).toString();var b=this.i[a];b&&(Ti(b),this.i[a]=null);if(b=this.j[a])Ti(b),delete this.j[a]};
n.La=function(a,b){var c="yt-uix"+(this.B?"-"+this.B:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(Km(b.target),c));(d=d||J(document.activeElement,c)||(document.activeElement?J(Km(document.activeElement),c):null))||this.hide(a)};
n.Ja=function(a){(a=J(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Zm(){ym.call(this,"hovercard")}
C(Zm,ym);Ga(Zm);n=Zm.prototype;n.register=function(){V(this,"mouseenter",this.Xa,"target");V(this,"mouseleave",this.Za,"target");V(this,"mouseenter",this.Ya,"card");V(this,"mouseleave",this.ab,"card")};
n.unregister=function(){W(this,"mouseenter",this.Xa,"target");W(this,"mouseleave",this.Za,"target");W(this,"mouseenter",this.Ya,"card");W(this,"mouseleave",this.ab,"card")};
n.Xa=function(a){if($m!=a){$m&&(this.hide($m),$m=null);var b=z(this.show,this,a),c=parseInt(this.o(a,"delay-show"),10);b=bi(b,-1<c?c:200);mi(a,"card-timer",b.toString());$m=a;a.alt&&(mi(a,"card-alt",a.alt),a.alt="");a.title&&(mi(a,"card-title",a.title),a.title="")}};
n.Za=function(a){var b=parseInt(this.o(a,"card-timer"),10);ci(b);this.M(a).isCardHidable=!0;b=parseInt(this.o(a,"delay-hide"),10);b=-1<b?b:200;bi(z(this.Hb,this,a),b);if(b=this.o(a,"card-alt"))a.alt=b;if(b=this.o(a,"card-title"))a.title=b};
n.Hb=function(a){this.M(a).isCardHidable&&(this.hide(a),$m=null)};
n.Ya=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
n.ab=function(a){a&&this.hide(a.cardTargetNode)};
var $m=null;function an(a,b,c,d,e,f){this.i=a;this.D=null;this.l=I("yt-dialog-fg",this.i)||this.i;if(a=I("yt-dialog-title",this.l)){var g="yt-dialog-title-"+Ka(this.l);a.setAttribute("id",g);this.l.setAttribute("aria-labelledby",g)}this.l.setAttribute("tabindex","-1");this.ja=I("yt-dialog-focus-trap",this.i);this.ka=!1;this.A=new O;this.F=[];this.F.push(Ri(this.i,z(this.Yb,this),"yt-dialog-dismiss"));this.F.push(T(this.ja,"focus",z(this.Cb,this),!0));bn(this);this.xa=b;this.tb=c;this.ya=d;this.O=e;this.ub=f;
this.C=this.B=null}
var cn={LOADING:"loading",Bc:"content",Cc:"working"};function dn(a,b){a.sa()||a.A.subscribe("post-all",b)}
function bn(a){a=I("yt-dialog-fg-content",a.i);var b=[];mb(cn,function(c){b.push("yt-dialog-show-"+c)});
ih(a,b);N(a,"yt-dialog-show-content")}
n=an.prototype;
n.show=function(){if(!this.sa()){this.D=document.activeElement;if(!this.ya){this.j||(this.j=H("yt-dialog-bg"),this.j||(this.j=yd(document,"div"),this.j.id="yt-dialog-bg",fh(this.j,"yt-dialog-bg"),document.body.appendChild(this.j)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=sd(a).height,td(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.j.style.height=c+"px";Kj(this.j)}this.Ra();c=en(this);fn(c);this.B=T(document,"keydown",z(this.Qb,this));c=this.i;d=hi("player-added",this.Ra,this);mi(c,"player-ready-pubsub-key",d);this.tb&&(this.C=T(document,"click",z(this.ec,this)));Kj(this.i);this.l.setAttribute("tabindex","0");gn(this);this.O||N(document.body,"yt-dialog-active");nm(mm.G());zm(Ym.G());zm(Zm.G());ki("yt-ui-dialog-show-complete",this)}};
function hn(){var a=od("yt-dialog");return cb(a,function(b){return Jj(b)})}
n.Ra=function(){if(!this.ub){var a=this.i;jh(document.body,"hide-players",!0);a&&jh(a,"preserve-players",!0)}};
function en(a){var b=pd(document,"IFRAME",null,a.i);D(b,function(c){var d=oi(c,"onload");d&&(d=x(d))&&T(c,"load",d);if(d=oi(c,"src"))c.src=d},a);
return hb(b)}
function fn(a){D(document.getElementsByTagName("iframe"),function(b){-1==Ya(a,b)&&N(b,"iframe-hid")})}
function jn(){var a=od("iframe-hid");D(a,function(b){hh(b,"iframe-hid")})}
n.Yb=function(a){a=a.currentTarget;a.disabled||(a=oi(a,"action")||"",this.dismiss(a))};
n.dismiss=function(a){if(!this.sa()){this.A.N("pre-all");this.A.N("pre-"+a);Lj(this.i);zm(Ym.G());zm(Zm.G());this.l.setAttribute("tabindex","-1");hn()||(Lj(this.j),this.O||hh(document.body,"yt-dialog-active"),Ji(),jn());this.B&&(Ti(this.B),this.B=null);this.C&&(Ti(this.C),this.C=null);var b=this.i;if(b){var c=oi(b,"player-ready-pubsub-key");c&&(ji(c),pi(b,"player-ready-pubsub-key"))}this.A.N("post-all");ki("yt-ui-dialog-hide-complete",this);"cancel"==a&&ki("yt-ui-dialog-cancelled",this);this.A&&this.A.N("post-"+
a);this.D&&this.D.focus()}};
n.setTitle=function(a){Ed(I("yt-dialog-title",this.i),a)};
n.Qb=function(a){bi(z(function(){this.xa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&M(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
n.ec=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
n.sa=function(){return this.ka};
n.dispose=function(){Jj(this.i)&&this.dismiss("dispose");Ti(this.F);this.F.length=0;bi(z(function(){this.D=null},this),0);
this.ja=this.l=null;this.A.dispose();this.A=null;this.ka=!0};
n.Cb=function(a){a.stopPropagation();gn(this)};
function gn(a){bi(z(function(){this.l&&this.l.focus()},a),0)}
B("yt.ui.Dialog",an);function kn(){Yi.call(this,"overlay");this.A=this.j=this.l=this.i=null}
pa(kn,Yi);n=kn.prototype;n.register=function(){V(this,"click",this.Ea,"target");V(this,"click",this.hide,"close");ln(this)};
n.unregister=function(){Yi.prototype.unregister.call(this);W(this,"click",this.Ea,"target");W(this,"click",this.hide,"close");this.A&&(ji(this.A),this.A=null);this.j&&(Ti(this.j),this.j=null)};
n.Ea=function(a){if(!this.i||!Jj(this.i.i)){var b=this.M(a);a=mn(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.o(b,"disable-shortcuts")||!1,d=!!this.o(b,"disable-outside-click-dismiss")||!1;this.i=new an(a,c);this.l=b;var e=I("yt-dialog-fg",a);if(e){var f=this.o(b,"overlay-class")||"",g=this.o(b,"overlay-style")||"default",h=this.o(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,h));gh(e,f)}this.i.show();ki("yt-uix-kbd-nav-move-to",e||a);ln(this);c||
d||(c=z(function(k){M(k.target,"yt-dialog-base")&&nn(this)},this),a=I("yt-dialog-base",a),this.j=T(a,"click",c));
this.aa(b,"overlay-shown");ki("yt-uix-overlay-shown",b)}}};
function ln(a){a.A||(a.A=hi("yt-uix-overlay-hide",on));a.i&&dn(a.i,function(){var b=kn.G();b.l=null;b.i.dispose();b.i=null})}
function nn(a){if(a.i){var b=a.l;a.i.dismiss("overlayhide");b&&a.aa(b,"overlay-hidden");a.l=null;a.j&&(Ti(a.j),a.j=null);a.i=null}}
function mn(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=H("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function pn(){var a=kn.G();if(a.l)a=I("yt-dialog-fg-content",a.l.overlayContentNode);else a:{if(a=od("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(Jj(c)){a=a[b];break a}}a=null}return a}
n.hide=function(a){a&&a.disabled||ki("yt-uix-overlay-hide")};
function on(){nn(kn.G())}
n.show=function(a){this.Ea(a)};
Ga(kn);var qn={},rn=[];function sn(a){a=J(a,"yt-uix-button-subscription-container");a=I("unsubscribe-confirmation-overlay-container",a);return I("yt-dialog",a)}
function tn(a,b){Ti(rn);rn.length=0;qn[b]||(qn[b]=sn(a));kn.G().show(qn[b]);var c=pn();return new zg(function(d){rn.push(Ri(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function un(){var a=P("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!P("SESSION_INDEX")&&!P("LOGGED_IN"))}
;function vn(){Yi.call(this,"subscription-button")}
pa(vn,Yi);n=vn.prototype;n.register=function(){V(this,"click",this.Ca);$i(this,tj,this.hb);$i(this,uj,this.gb);$i(this,vj,this.cc);$i(this,yj,this.hb);$i(this,zj,this.gb);$i(this,Aj,this.dc);$i(this,Cj,this.ac);$i(this,Dj,this.Zb)};
n.unregister=function(){W(this,"click",this.Ca);Yi.prototype.unregister.call(this)};
n.isSubscribed=function(a){return!!this.o(a,"is-subscribed")};
n.Ca=function(a){var b=this.o(a,"href"),c=this.o(a,"insecure");if(b)a=this.o(a,"target")||"_self",window.open(b,a);else if(!c)if(un()){b=this.o(a,"channel-external-id");c=this.o(a,"clicktracking");var d=wn(this,a),e=this.o(a,"parent-url");if(this.o(a,"is-subscribed")){var f=this.o(a,"subscription-id"),g=this.o(a,"unsubscribe-params"),h=new pj(b,f,d,a,c,e,g);this.o(a,"show-unsub-confirm-dialog")?tn(a,b).then(function(){S(xj,h)}):S(xj,h)}else a=this.o(a,"params"),S(sj,new nj(b,d,c,e,void 0,a))}else xn(this,
a)};
n.hb=function(a){this.Z(a.i,this.lb,!0)};
n.gb=function(a){this.Z(a.i,this.lb,!1)};
n.cc=function(a){this.Z(a.i,this.mb,!0,a.j)};
n.dc=function(a){this.Z(a.i,this.mb,!1)};
n.ac=function(a){this.Z(a.i,this.Ab)};
n.Zb=function(a){this.Z(a.i,this.yb)};
n.mb=function(a,b,c){b?(mi(a,"is-subscribed","true"),c&&mi(a,"subscription-id",c)):(pi(a,"is-subscribed"),pi(a,"subscription-id"));yn(this,a)};
function wn(a,b){if(!a.o(b,"ypc-enabled"))return null;var c=a.o(b,"ypc-item-type"),d=a.o(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
n.lb=function(a,b){var c=J(a,"yt-uix-button-subscription-container");jh(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function yn(a,b){var c=a.o(b,"style-type"),d=!!a.o(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;jh(b,"yt-uix-button-subscribe"+c,!d);jh(b,e,d);a.o(b,"subscriber-count-tooltip")&&!a.o(b,"subscriber-count-show-when-subscribed")&&(c=U(Mj.G()),jh(b,c,!d),b.title=d?"":a.o(b,"subscriber-count-title"));d?bi(function(){N(b,"hover-enabled")},1E3):hh(b,"hover-enabled")}
n.Ab=function(a){var b=!!this.o(a,"ypc-item-type"),c=!!this.o(a,"ypc-item-id");!this.o(a,"ypc-enabled")&&b&&c&&(N(a,"ypc-enabled"),mi(a,"ypc-enabled","true"))};
n.yb=function(a){this.o(a,"ypc-enabled")&&(hh(a,"ypc-enabled"),pi(a,"ypc-enabled"))};
function zn(a,b){var c=od(U(a));return $a(c,function(d){return b==this.o(d,"channel-external-id")},a)}
n.vb=function(a,b,c){var d=kb(arguments,2);D(a,function(e){b.apply(this,gb(e,d))},this)};
n.Z=function(a,b,c){var d=zn(this,a);d=gb([d],kb(arguments,1));this.vb.apply(this,d)};
function xn(a,b){var c=z(function(d){d.discoverable_subscriptions&&Wh("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Ca(b)},a);
Uj(c)}
Ga(vn);function An(a,b,c){c=void 0===c?{}:c;var d=dm;P("ytLoggingEventsDefaultDisabled",!1)&&dm==dm&&(d=null);uk(a,b,d,c)}
;var Bn=[{Wa:function(a){return"Cannot read property '"+a.key+"'"},
Da:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Wa:function(a){return"Cannot call '"+a.key+"'"},
Da:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Cn(){this.i=[];this.j=[]}
var Dn;var En=new O;function Fn(a,b,c,d){c+="."+a;a=Gn(b);d[c]=a;return c.length+a.length}
function Gn(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Hn=new Set,In=0,Jn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Kn(a){Ln(a)}
function Mn(a){Ln(a,"WARNING")}
function Ln(a,b){var c=void 0===c?{}:c;c.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(X("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((!X("web_yterr_killswitch")||
window&&window.yterr||e)&&!(5<=In)&&0!==a.sampleWeight){var g=ad(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(X("kevlar_js_fixes")&&h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,m=0;m<a.args.length;m++){var p=a.args[m],r="params."+m;l+=r.length;if(p)if(Array.isArray(p))for(var q=d,u=0;u<p.length&&!(p[u]&&
(l+=Fn(u,p[u],r,q),500<l));u++);else if("object"===typeof p)for(q in q=void 0,u=d,p){if(p[q]&&(l+=Fn(q,p[q],r,u),500<l))break}else d[r]=Gn(p),l+=d[r].length;else d[r]=Gn(p),l+=d[r].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(p=a.params,"object"===typeof a.params)for(m in r=0,p){if(p[m]&&(l="params."+m,q=Gn(p[m]),d[l]=q,r+=l.length+q.length,500<r))break}else d.params=Gn(p);navigator.vendor&&!d.hasOwnProperty("vendor")&&(d.vendor=navigator.vendor);d={message:e,name:f,lineNumber:k,
fileName:g,stack:h,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=v(Bn);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.Da[d.name])for(g=v(f.Da[d.name]),k=g.next();!k.done;k=g.next())if(h=k.value,k=d.message.match(h.regexp)){d.params["error.original"]=k[0];g=h.groups;h={};for(m=0;m<g.length;m++)h[g[m]]=k[m+1],d.params["error."+g[m]]=k[m+1];d.message=f.Wa(h);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(Hn.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||
0<=d.stack.indexOf("/mytube.js"))){"ERROR"===c?En.N("handleError",d):"WARNING"===c&&En.N("handleWarning",d);if(X("kevlar_gel_error_routing")){e=c;a:{f=v(Jn);for(k=f.next();!k.done;k=f.next())if(Jl(k.value.toLowerCase())){f=!0;break a}f=!1}if(!f){k={stackTrace:d.stack};d.fileName&&(k.filename=d.fileName);f=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(k.lineNumber=Number(f[0]),k.columnNumber=
Number(f[1])):k.lineNumber=Number(f[0]));Dn||(Dn=new Cn);f=Dn;g=d.message;h=d.name;a:{m=v(f.j);for(p=m.next();!p.done;p=m.next())if(p=p.value,d.message&&d.message.match(p.i)){m=p.weight;break a}m=v(f.i);for(p=m.next();!p.done;p=m.next())if(p=p.value,p.i(d)){m=p.weight;break a}m=1}g={level:"ERROR_LEVEL_UNKNOWN",message:g,errorClassName:h,sampleWeight:m};"ERROR"===e?g.level="ERROR_LEVEL_ERROR":"WARNING"===e&&(g.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href};
P("FEXP_EXPERIMENTS")&&(k.experimentIds=P("FEXP_EXPERIMENTS"));k.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+f.j.length+"&cb="+f.i.length},{key:"client.params.serviceWorker",value:"false"}];if(f=d.params)for(h=v(Object.keys(f)),m=h.next();!m.done;m=h.next())m=m.value,k.kvPairs.push({key:"client."+m,value:String(f[m])});f=P("SERVER_NAME",void 0);h=P("SERVER_VERSION",void 0);f&&h&&(k.kvPairs.push({key:"server.name",value:f}),k.kvPairs.push({key:"server.version",value:h}));An("clientError",
{errorMetadata:k,stackTrace:e,logMessage:g});lk()}}if(!X("suppress_error_204_logging")){e=d.params||{};c={Fa:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},K:{url:P("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.K){d.stack&&(c.K.stack=d.stack);f=v(Object.keys(e));for(k=f.next();!k.done;k=f.next())k=k.value,c.K["client."+k]=e[k];if(e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(f=v(Object.keys(e)),k=f.next();!k.done;k=f.next())k=k.value,c.K[k]=e[k];e=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);e&&f&&(c.K["server.name"]=e,c.K["server.version"]=f)}Hk(P("ECATCHER_REPORT_HOST","")+"/error_204",c)}Hn.add(d.message);In++}}}}
;function Nn(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!On(a)||c.some(function(e){return!On(e)}))throw Error("Only objects may be merged.");
c=v(c);for(d=c.next();!d.done;d=c.next())Pn(a,d.value);return a}
function Pn(a,b){for(var c in b)if(On(b[c])){if(c in a&&!On(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Pn(a[c],b[c])}else if(Qn(b[c])){if(c in a&&!Qn(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Rn(a[c],b[c])}else a[c]=b[c];return a}
function Rn(a,b){for(var c=v(b),d=c.next();!d.done;d=c.next())d=d.value,On(d)?a.push(Pn({},d)):Qn(d)?a.push(Rn([],d)):a.push(d);return a}
function On(a){return"object"===typeof a&&!Array.isArray(a)}
function Qn(a){return"object"===typeof a&&Array.isArray(a)}
;var Sn={},Tn=0;
function Un(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Jl("cobalt")){if(a){a instanceof Gb||(a="object"==typeof a&&a.ga?a.ea():String(a),Lb.test(a)?a=new Gb(a,Hb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Kb))&&Jb.test(b[1])?new Gb(a,Hb):null));a=Ib(a||Mb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ub)){b="object"==typeof a;var f=null;b&&a.j&&(f=a.i());a=Xb(wb(b&&a.ga?a.ea():String(a)),f)}a=Wb(a).toString();a=encodeURIComponent(String(oh(a)))}/^[\s\xa0]*$/.test(a)||(a=
xd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),nd(a).body.appendChild(a))}}else if(e)Ik(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ik(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.l&&g.j||g.A){var h=ec(fc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(nc);d:{c=0;for(var m=2;0<=(c=a.indexOf("ri",c))&&c<l;){var p=a.charCodeAt(c-1);if(38==p||63==p){var r=a.charCodeAt(c+m);if(!r||61==r||38==r||35==r){var q=c;break d}}c+=
m+1}q=-1}if(0>q)var u=null;else{var y=a.indexOf("&",q);if(0>y||y>l)y=l;q+=3;u=decodeURIComponent(a.substr(q,y-q).replace(/\+/g," "))}k="1"!==u}f=!k;break b}}catch(A){}f=!1}f?Vn(a)?(b&&b(),f=!0):f=!1:f=!1;f||Wn(a,b)}}
function Vn(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Wn(a,b){var c=new Image,d=""+Tn++;Sn[d]=c;c.onload=c.onerror=function(){b&&Sn[d]&&b();delete Sn[d]};
c.src=a}
;function Xn(a,b){Q.call(this,1,arguments)}
pa(Xn,Q);function Yn(a,b){Q.call(this,1,arguments)}
pa(Yn,Q);var Zn=new R("aft-recorded",Xn),$n=new R("timing-sent",Yn);var ao=window;function bo(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var co=ao.performance||ao.mozPerformance||ao.msPerformance||ao.webkitPerformance||new bo;var eo=!1;z(co.clearResourceTimings||co.webkitClearResourceTimings||co.mozClearResourceTimings||co.msClearResourceTimings||co.oClearResourceTimings||Fa,co);function fo(a){var b=go(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ho(a){var b;(b=x("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},B("ytcsi."+(a||"")+"data_",b));return b}
function io(a){a=ho(a);a.info||(a.info={});return a.info}
function go(a){a=ho(a);a.tick||(a.tick={});return a.tick}
function jo(a){var b=ho(a).nonce;b||(b=fm(),ho(a).nonce=b);return b}
function ko(a){var b=go(a||""),c=fo(a);c&&!eo&&(S(Zn,new Xn(Math.round(c-b._start),a)),eo=!0)}
;function lo(){var a=x("ytcsi.debug");a||(a=[],B("ytcsi.debug",a),B("ytcsi.reference",{}));return a}
function mo(a){a=a||"";var b=x("ytcsi.reference");b||(lo(),b=x("ytcsi.reference"));if(b[a])return b[a];var c=lo(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var no=w.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",no);function oo(){this.i=0}
function po(){oo.i||(oo.i=new oo);return oo.i}
oo.prototype.tick=function(a,b,c){qo(this,"tick_"+a+"_"+b)||An("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
oo.prototype.info=function(a,b){var c=Object.keys(a).join("");qo(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,An("latencyActionInfo",c))};
oo.prototype.span=function(a,b){var c=Object.keys(a).join("");qo(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,An("latencyActionSpan",a))};
function qo(a,b){no[b]=no[b]||{count:0};var c=no[b];c.count++;c.time=Y();a.i||(a.i=ti(function(){var d=Y(),e;for(e in no)no[e]&&6E4<d-no[e].time&&delete no[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ml("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Mn(c)),!0):!1}
;var Z={},ro=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),so="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),to={},uo=(to.ccs="CANARY_STATE_",
to.mver="MEASUREMENT_VERSION_",to.pis="PLAYER_INITIALIZED_STATE_",to.yt_pt="LATENCY_PLAYER_",to.pa="LATENCY_ACTION_",to.yt_vst="VIDEO_STREAM_TYPE_",to),vo="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function wo(a){return!!P("FORCE_CSI_ON_GEL",!1)||X("csi_on_gel")||!!ho(a).useGel}
function xo(a){a=ho(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function yo(a,b,c){if(null!==b)if(io(c)[a]=b,wo(c)){var d=b;b=xo(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in ro){b=ro[a];eb(so,b)&&(d=!!d);a in uo&&"string"===typeof d&&(d=uo[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Nn({},e)}else eb(vo,a)||Mn(new ml("Unknown label logged with GEL CSI",
a)),f=void 0;f&&wo(c)&&(b=mo(c||""),Nn(b.info,f),b=xo(c),"gelInfos"in b||(b.gelInfos={}),Nn(b.gelInfos,f),c=jo(c),po().info(f,c))}else mo(c||"").info[a]=b}
function zo(a,b,c){var d=go(c);if(X("use_first_tick")&&Ao(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;co.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),co.mark(e))}e=b||Y();d[a]=e;e=xo(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||Y();if(wo(c)){mo(c||"").tick[a]=b||Y();e=jo(c);if("_start"===a){var f=po();qo(f,"baseline_"+e)||An("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else po().tick(a,e,b);ko(c);e=!0}else e=!1;if(!e){if(!x("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=go(c),x("ytglobal.timing"+(c||"")+"ready_")&&f&&Ao("_start")&&fo(c)))if(ko(c),c)Bo(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Bo(c)}mo(c||"").tick[a]=b||Y()}return d[a]}
function Ao(a,b){var c=go(b);return a in c}
function Bo(a){if(!wo(a)){var b=go(a),c=io(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=fo(a);var h=go(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&io(a).yt_pvis&&"youtube"===e&&(yo("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=Y();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;X("debug_csi_data")&&(c=x("yt.timing.csiData"),c||(c=[],B("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;Vn(f,q)||Un(f,void 0,void 0,void 0,q)}else Un(f);B("yt.timing."+(a||"")+"pingSent_",!0);S($n,new Yn(m.aft+(Number(g)||0),a))}}
var Co=window;Co.ytcsi&&(Co.ytcsi.info=yo,Co.ytcsi.tick=zo);new Rg(Do,1E3);function Do(){zo("vptl",0);zo("vpl",0)}
;function Eo(a){this.i=a;this.P=null;P("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Fo(this),T(this.i,"mouseover",z(this.A,this)),T(this.i,"mouseout",z(this.za,this)),T(this.i,"click",z(this.za,this)),Bi(vj,Qa(this.j,!0),this),Bi(Aj,Qa(this.j,!1),this),Go(this))}
function Fo(a){var b={url:P("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.i,relayOpen:"-1"};a=z(a.l,a);jj().open(b,a)}
function Go(a){un()||hi("LOGGED_IN",function(){this.P&&(this.za(),this.P.close(),this.P=null,Fo(this))},a)}
Eo.prototype.l=function(a){this.P=a;a=vn.G().isSubscribed(this.i);this.j(a)};
Eo.prototype.A=function(){this.P&&this.P.restyle({show:!0})};
Eo.prototype.za=function(){this.P&&this.P.restyle({show:!1})};
Eo.prototype.j=function(a){if(this.P){a={isSubscribed:a};try{this.P.send("msg-hovercard-subscription",a,void 0,x("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Ho(){ij(function(){var a=ye(H("yt-subscribe"));a={width:a.width,height:a.height};var b=Io;jj().ready(a,null,b)})}
function Io(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=H("yt-subscribe"),c=vn.G();if(b=I(U(c),b))a&&(vn.G(),mi(b,"parent-url",a)),new Eo(b)}}
;var Jo=x("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",Jo);function Ko(){this.i=P("ALT_PREF_COOKIE_NAME","PREF");var a=fd.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Jo[d]=c.toString())}}}
n=Ko.prototype;n.get=function(a,b){Lo(a);Mo(a);var c=No(a);return null!=c?c:b?b:""};
n.set=function(a,b){Lo(a);Mo(a);if(null==b)throw Error("ExpectedNotNull");Jo[a]=b.toString()};
function Oo(a){var b=No("f"+(Math.floor(a/31)+1));return!!(((null!=b&&/^[A-Fa-f0-9]+$/.test(b)?parseInt(b,16):null)||0)&1<<a%31)}
n.remove=function(a){Lo(a);Mo(a);delete Jo[a]};
n.save=function(){Qk(this.i,this.dump(),63072E3)};
n.clear=function(){for(var a in Jo)delete Jo[a]};
n.dump=function(){var a=[],b;for(b in Jo)a.push(b+"="+encodeURIComponent(String(Jo[b])));return a.join("&")};
function Mo(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Lo(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function No(a){return void 0!==Jo[a]?Jo[a].toString():null}
Ga(Ko);var Po=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Qo=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function Ro(){var a=void 0===a?window.location.href:a;if(X("kevlar_disable_theme_param"))return null;var b=ec(fc(5,a));if(So(b))return"USER_INTERFACE_THEME_DARK";try{var c=fj(a).theme;return Po.get(c)||null}catch(d){}return null}
function So(a){var b=Qo.map(function(c){return c.toLowerCase()});
return!X("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function To(){this.i={};var a=fd.get("CONSISTENCY",void 0);a&&Uo(this,{encryptedTokenJarContents:a})}
To.prototype.j=function(a,b){var c,d,e,f=null===(d=null===(c=b.Sa.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars,g=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar;f&&g&&this.replace(f,g)};
To.prototype.replace=function(a,b){for(var c=v(a),d=c.next();!d.done;d=c.next())delete this.i[d.value.encryptedTokenJarContents];Uo(this,b)};
function Uo(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
Qk("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;function Vo(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.localStorage=Wo(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
function Xo(){Vo.i||(Vo.i=new Vo);return Vo.i}
Vo.prototype.j=function(a){var b,c,d=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==d&&(this.locationPlayabilityToken=d,this.i=void 0,"TVHTML5"===(null===(c=a.responseContext)||void 0===c?void 0:c.clientName)?(this.localStorage=Wo(this))&&this.localStorage.set("yt-location-playability-token",d,15552E3):Qk("YT_CL",JSON.stringify({Nc:d}),15552E3,void 0,!0))};
function Wo(a){return void 0===a.localStorage?new Rk("yt-client-location"):a.localStorage}
;function Yo(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
;var Zo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};function $o(a,b,c){var d=ap.i;this.i=a;this.B=d;this.A=b;this.j=Kn;this.l=c}
function bp(a){if(!cp){var b={Ma:{playlistEditEndpoint:dp,subscribeEndpoint:ep,unsubscribeEndpoint:fp,modifyChannelNotificationPreferenceEndpoint:gp}},c=X("web_enable_client_location_service")?Xo():void 0,d=[];c&&d.push(c);if(void 0===e){Xk.i||(Xk.i=new Xk);var e=Xk.i}ap.i||(ap.i=new ap);$o.i=new $o(b,e,d);cp=$o.i}e=cp;var f=void 0===f?Zk:f;a:{var g,h;if((null===(g=a.signalServiceEndpoint)||void 0===g?0:g.signal)&&e.i.fc&&(g=e.i.fc[a.signalServiceEndpoint.signal])){var k=new g;break a}if((null===
(h=a.continuationCommand)||void 0===h?0:h.request)&&e.i.wb&&(h=e.i.wb[a.continuationCommand.request])){k=new h;break a}for(k in a)if(e.i.Ma[k]&&(h=e.i.Ma[k])){k=new h;break a}k=void 0}if(!k)return e.j(new ml("Error: No request builder found for command.",a)),Eg({});var l;h=void 0;h=void 0===h?{}:h;f=void 0===f?Zk:f;var m;b=a.clickTrackingParams;var p=void 0===p?!1:p;if(g=P("INNERTUBE_CONTEXT")){g=rb(g);var r;g.client||(g.client={});c=g.client;"MWEB"===c.clientName&&(c.clientFormFactor=P("IS_TABLET")?
"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");c.screenWidthPoints=window.innerWidth;c.screenHeightPoints=window.innerHeight;c.screenPixelDensity=Math.round(window.devicePixelRatio||1);c.screenDensityFloat=window.devicePixelRatio||1;c.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var q=void 0===q?!1:q;Ko.G();d="USER_INTERFACE_THEME_LIGHT";Oo(165)?d="USER_INTERFACE_THEME_DARK":Oo(174)?d="USER_INTERFACE_THEME_LIGHT":!X("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&
window.matchMedia("(prefers-color-scheme: dark)").matches&&(d="USER_INTERFACE_THEME_DARK");q=q?d:Ro()||d;c.userInterfaceTheme=q;if(X("web_log_connection")&&!p){c:{if(d=(q=window.navigator)?q.connection:void 0){q=Zo[d.type||"unknown"]||"CONN_UNKNOWN";d=Zo[d.i||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===q&&"CONN_UNKNOWN"!==d&&(q=d);if("CONN_UNKNOWN"!==q)break c;if("CONN_UNKNOWN"!==d){q=d;break c}}q=void 0}q&&(c.connectionType=q)}X("web_populate_graft_url_killswitch")||"MWEB"!==c.clientName&&
"WEB"!==c.clientName||(c.mainAppWebInfo={graftUrl:w.location.href});X("kevlar_woffle")&&Yo.i&&("MWEB"===c.clientName||"WEB"===c.clientName)&&(g.client.mainAppWebInfo||(g.client.mainAppWebInfo={}),g.client.mainAppWebInfo.pwaInstallabilityStatus=Yo.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN");X("web_populate_time_zone_itc_killswitch")||(q="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:void 0,q&&(c.timeZone=q));(q="MWEB"===c.clientName||
X("it_context_exp_goog_cookie_killswitch")?fd.get("EXPERIMENTS_DEBUG",void 0):fd.get("EXPERIMENTS_DEBUG"))?c.experimentsToken="ZERO"===q?"GgIQAQ%3D%3D":q:delete c.experimentsToken;q=Yj();To.i||(To.i=new To);c=nb(To.i.i);g.request=Object.assign(Object.assign({},g.request),{internalExperimentFlags:q,consistencyTokenJars:c});c=Ko.G();q=Oo(58);c=c.get("gsml","");g.user=Object.assign({},g.user);q&&(g.user.enableSafetyMode=q);c&&(g.user.lockedSafetyMode=!0);(q=P("DELEGATED_SESSION_ID"))&&!X("pageid_as_header_web")&&
(g.user.onBehalfOfUser=q);!p&&(p=km())&&(g.clientScreenNonce=p);b&&(g.clickTracking={clickTrackingParams:b});X("web_enable_client_location_service")&&(p=Xo(),g.client||(g.client={}),p.i?(g.client.locationInfo||(g.client.locationInfo={}),g.client.locationInfo.latitudeE7=1E7*p.i.coords.latitude,g.client.locationInfo.longitudeE7=1E7*p.i.coords.longitude,g.client.locationInfo.horizontalAccuracyMeters=p.i.coords.accuracy):p.locationPlayabilityToken&&(g.client.locationPlayabilityToken=p.locationPlayabilityToken));
if(X("web_enable_ad_signals_in_it_context")){p=null===(r=g.adSignalsInfo)||void 0===r?void 0:r.consentBumpParams;r=vk(void 0);b=r.bid;delete r.bid;g.adSignalsInfo={params:[],bid:b};r=v(Object.entries(r));for(b=r.next();!b.done;b=r.next())q=v(b.value),b=q.next().value,q=q.next().value,null===(m=g.adSignalsInfo.params)||void 0===m?void 0:m.push({key:b,value:""+q});!fd.get("CONSENT","").startsWith("YES+")&&p&&(g.adSignalsInfo.consentBumpParams=p)}m=g}else Ln(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
m={};m={context:m};if(r=k.l(a)){k.i(m,r,h);var u;r="/youtubei/v1/"+hp(k.j());(k=null===(u=null===(l=a.commandMetadata)||void 0===l?void 0:l.webCommandMetadata)||void 0===u?void 0:u.apiUrl)&&(r=k);r=gj(r,{key:P("INNERTUBE_API_KEY")},!1);if(l=P("INNERTUBE_HOST_OVERRIDE"))l=String(l),u=String,h=r.match(dc),r=h[5],k=h[6],h=h[7],p="",r&&(p+=r),k&&(p+="?"+k),h&&(p+="#"+h),r=l+u(p);l=r;l={input:l,ia:{method:"POST",mode:hj(l)?"same-origin":"cors",credentials:hj(l)?"same-origin":"include"},Sa:m,config:Object.assign({},
void 0)};l.config.la?l.config.la.identity=f:l.config.la={identity:f}}else Ln(new ml("Error: Failed to create Request from Command.",a)),l=void 0;if(l)return Eg(ip(e,l));e.j(new ml("Error: Failed to build request for command.",a));return Eg({})}
function ip(a,b){return oc(a,function d(){var e=this,f,g,h,k,l,m;return Aa(d,function(p){switch(p.i){case 1:f=e;p.i=2;break;case 3:if((g=p.l)&&!g.isExpired())return p["return"](Promise.resolve(g.i()));case 2:h=JSON.stringify(b.Sa);if(e.A.i){k=jp(b);p.i=4;break}return ta(p,kp(b),5);case 5:k=p.l;case 4:return b.ia=Object.assign(Object.assign({},b.ia),{headers:k}),X("enable_get_account_switcher_endpoint_on_webfe")?(l=Object.assign({},b.ia),"POST"===b.ia.method&&(l=Object.assign(Object.assign({},l),{body:h}))):
l=Object.assign(Object.assign({},b.ia),{body:h}),m=e.B.fetch(b.input,l),p["return"](m.then(function(r){if(r&&f.l)for(var q=v(f.l),u=q.next();!u.done;u=q.next())u.value.j(r,b);return Promise.resolve(r)}))}})})}
function kp(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.la)||void 0===c?void 0:c.sessionIndex;return Eg(Yk({sessionIndex:a})).then(function(d){return Promise.resolve(Object.assign(Object.assign({},lp()),d))})}
function jp(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.la)||void 0===c?void 0:c.sessionIndex;a=Yk({sessionIndex:a});return Object.assign(Object.assign({},lp()),a)}
function lp(){var a={"Content-Type":"application/json"},b=P("VISITOR_DATA");b&&(a["X-Goog-Visitor-Id"]=b);X("enable_get_account_switcher_endpoint_on_webfe")&&((b=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(a["X-Youtube-Client-Name"]=b),(b=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(a["X-Youtube-Client-Version"]=b));X("webfe_track_one_platform_auth_mismatch")&&(a["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1));return a}
;var mp=["notification/modify_channel_preference"],np=["browse/edit_playlist"],op=["subscription/subscribe"],pp=["subscription/unsubscribe"];var qp={},rp=(qp.WEB_UNPLUGGED="^unplugged/",qp.WEB_UNPLUGGED_ONBOARDING="^unplugged/",qp.WEB_UNPLUGGED_OPS="^unplugged/",qp.WEB_UNPLUGGED_PUBLIC="^unplugged/",qp.WEB_CREATOR="^creator/",qp.WEB_KIDS="^kids/",qp.WEB_EXPERIMENTS="^experiments/",qp.WEB_MUSIC="^music/",qp.WEB_REMIX="^music/",qp.WEB_MUSIC_EMBEDDED_PLAYER="^music/",qp.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",qp);
function hp(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=rp[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(rp).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function sp(){}
;function ep(){}
pa(ep,sp);ep.prototype.j=function(){return op};
ep.prototype.l=function(a){return a.subscribeEndpoint};
ep.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function fp(){}
pa(fp,sp);fp.prototype.j=function(){return pp};
fp.prototype.l=function(a){return a.unsubscribeEndpoint};
fp.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function gp(){}
pa(gp,sp);gp.prototype.j=function(){return mp};
gp.prototype.l=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
gp.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function dp(){}
pa(dp,sp);dp.prototype.j=function(){return np};
dp.prototype.l=function(a){return a.playlistEditEndpoint};
dp.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ap(){this.i=void 0}
ap.prototype.fetch=function(a,b){var c;if(null===(c=this.i)||void 0===c?0:c.j(a,b))return Eg(this.i.i(a,b)["catch"](function(e){Mn(e)}));
var d=new Request(a,b);return Eg(fetch(d).then(function(e){return tp(e)})["catch"](function(e){Mn(e)}))};
function tp(a){var b=X("enable_get_account_switcher_endpoint_on_webfe")?a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))}):a.json();
a.redirected||a.ok||(b=b.then(function(c){Mn(new ml("Error: API fetch failed",a.status,a.url,c));return Object.assign(Object.assign({},c),{errorMetadata:{status:a.status}})}));
return b}
;var cp;function up(a){Q.call(this,1,arguments)}
C(up,Q);function vp(a,b){Q.call(this,2,arguments);this.j=a;this.i=b}
C(vp,Q);function wp(a,b,c,d){Q.call(this,1,arguments);this.i=b;this.itemType=c||null;this.itemId=d||null}
C(wp,Q);function xp(a,b){Q.call(this,1,arguments);this.j=a;this.i=b||null}
C(xp,Q);function yp(a){Q.call(this,1,arguments)}
C(yp,Q);var zp=new R("ypc-core-load",up),Ap=new R("ypc-guide-sync-success",vp),Bp=new R("ypc-purchase-success",wp),Cp=new R("ypc-subscription-cancel",yp),Dp=new R("ypc-subscription-cancel-success",xp),Ep=new R("ypc-init-subscription",yp);var Fp=[];function Gp(a){a.j?S(zp,new up(function(){S(Ep,new yp(a.j))})):X("web_classic_innertube_subscription_update")?Hp(a.i,a.params):Ip(a.i,a.A,a.l,a.source,a.params)}
function Jp(a){a.j?S(zp,new up(function(){S(Cp,new yp(a.j))})):X("web_classic_innertube_subscription_update")?Kp(a.i,a.params):Lp(a.i,a.B,a.A,a.l,a.source)}
function Mp(a){Np(hb(a.i))}
function Op(a){Pp(hb(a.i))}
function Qp(a){Rp(a.l,a.j,a.i)}
function Sp(a){var b=a.itemId,c=a.i.subscriptionId;b&&c&&S(vj,new oj(b,c,a.i.channelInfo))}
function Tp(a){var b=a.i;mb(a.j,function(c,d){S(vj,new oj(d,c,b[d]))})}
function Up(a){S(Aj,new lj(a.j.itemId));a.i&&a.i.length&&(Vp(a.i,Aj),Vp(a.i,Cj))}
function Hp(a,b){var c=new lj(a);S(tj,c);Gg(bp({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(vj,new oj(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",Lc:a}))}),function(){S(uj,c)})}
function Ip(a,b,c,d,e){var f=new lj(a);S(tj,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=P("PLAYBACK_ID"))&&(c.plid=d);(d=P("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&Wp(b,c);Hk("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Fa:g,K:c,onSuccess:function(h,k){var l=k.response;S(vj,new oj(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&ki("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
ha:function(){S(uj,f)}})}
function Kp(a,b){var c=new lj(a);S(yj,c);Gg(bp({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(Aj,c)}),function(){S(zj,c)})}
function Lp(a,b,c,d,e){var f=new lj(a);S(yj,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=P("PLAYBACK_ID"))&&(d.plid=a);(a=P("EVENT_ID"))&&(d.ei=a);c&&Wp(c,d);Hk("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Fa:g,K:d,onSuccess:function(){S(Aj,f)},
ha:function(){S(zj,f)}})}
function Rp(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new mj(a,b,c);Hk("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",K:d,onError:function(){S(Gj,e)},
onSuccess:function(){S(Fj,e)}})}}
function Np(a){if(a.length){var b=jb(a,0,40);S("subscription-batch-subscribe-loading");Vp(b,tj);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Vp(b,uj)};
Hk("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",K:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Array.isArray(h)&&h.length==b.length){var k=g.channel_info_map;D(h,function(l,m){var p=b[m];S(vj,new oj(p,l,k[p]))});
a.length?Np(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Pp(a){if(a.length){var b=jb(a,0,40);S("subscription-batch-unsubscribe-loading");Vp(b,yj);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Vp(b,zj)};
Hk("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",K:c,onSuccess:function(){d();Vp(b,Aj);a.length&&Pp(a)},
onError:function(){d()}})}}
function Vp(a,b){D(a,function(c){S(b,new lj(c))})}
function Wp(a,b){var c=ej(a),d;for(d in c)b[d]=c[d]}
;B("yt.setConfig",Wh);B("yt.config.set",Wh);B("ytbin.www.subscribeembed.init",function(){var a=!0;Fp.push(Bi(sj,Gp),Bi(xj,Jp));a||Fp.push(Bi(wj,Gp),Bi(Bj,Jp),Bi(qj,Mp),Bi(rj,Op),Bi(Ej,Qp),Bi(Bp,Sp),Bi(Dp,Up),Bi(Ap,Tp));a=vn.G();var b=U(a);b in bj||(a.register(),Zi(a,"yt-uix-init-"+b,a.init),Zi(a,"yt-uix-dispose-"+b,a.dispose),bj[b]=a);Ho()});}).call(this);
