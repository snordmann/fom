(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
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
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.H=b.prototype}
function ma(){this.B=!1;this.j=null;this.A=void 0;this.i=1;this.D=this.o=0;this.l=null}
function na(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
ma.prototype.C=function(a){this.A=a};
function oa(a,b){a.l={ea:b,Ca:!0};a.i=a.o||a.D}
ma.prototype["return"]=function(a){this.l={"return":a};this.i=this.D};
function z(a,b,c){a.i=c;return{value:b}}
function pa(a){a.o=0;var b=a.l.ea;a.l=null;return b}
function qa(a){this.i=new ma;this.j=a}
function ra(a,b){na(a.i);var c=a.i.j;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i["return"]);
a.i["return"](b);return ta(a)}
function sa(a,b,c,d){try{var e=b.call(a.i.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.B=!1,e;var f=e.value}catch(g){return a.i.j=null,oa(a.i,g),ta(a)}a.i.j=null;d.call(a.i,f);return ta(a)}
function ta(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.B=!1,{value:b.value,done:!1}}catch(c){a.i.A=void 0,oa(a.i,c)}a.i.B=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Ca)throw b.ea;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){na(a.i);a.i.j?b=sa(a,a.i.j.next,b,a.i.C):(a.i.C(b),b=ta(a));return b};
this["throw"]=function(b){na(a.i);a.i.j?b=sa(a,a.i.j["throw"],b,a.i.C):(oa(a.i,b),b=ta(a));return b};
this["return"]=function(b){return ra(a,b)};
this[Symbol.iterator]=function(){return this}}
function va(a,b){var c=new ua(new qa(b));la&&a.prototype&&la(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
function wa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=wa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||la});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var xa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||xa});
t("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.A()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.A=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.oa),reject:g(this.A)}};
b.prototype.oa=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ra(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.na(g):this.B(g)}};
b.prototype.na=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.sa(h,g):this.B(g)};
b.prototype.A=function(g){this.D(2,g)};
b.prototype.B=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.qa();this.N()};
b.prototype.qa=function(){var g=this;e(function(){if(g.Z()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.Z=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.N=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ra=function(g){var h=this.o();g.R(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,q){return"function"==typeof p?function(w){try{l(p(w))}catch(x){m(x)}}:q}
var l,m,n=new b(function(p,q){l=p;m=q});
this.R(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.R=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).R(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){p[w]=x;q--;0==q&&l(p)}}
var p=[],q=0;do p.push(void 0),q++,d(k.value).R(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
function ya(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return ya(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return ya(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return ya(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==wa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.i)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.i)?delete k[g][this.i]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ea(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.j[l];if(m&&A(h.j,l))for(var n=0;n<m.length;n++){var p=m[n];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:n,F:p}}return{id:l,list:m,index:-1,F:void 0}}
function e(h){this.j={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.j[l.id]=[]);l.F?l.F.value=k:(l.F={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.F),this.i.previous.next=l.F,this.i.previous=l.F,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.F&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.j[h.id],h.F.previous.next=h.F.next,h.F.next.previous=h.F.previous,h.F.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.j={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).F};
e.prototype.get=function(h){return(h=d(this,h).F)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push(b[d]);return c}});
t("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype["delete"]=function(c){c=this.i["delete"](c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function za(){}
function Aa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ba(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a,b,c){return a.call.apply(a.bind,arguments)}
function Ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Fa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Fa=Da:Fa=Ea;return Fa.apply(null,arguments)}
function D(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Va=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ga(a){return a}
function Ha(a){var b=null,c=B.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Ga,createScript:Ga,createScriptURL:Ga})}catch(d){B.console&&B.console.error(d.message)}return b}
;function Ia(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ia);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(Ia,Error);Ia.prototype.name="CustomError";function Ja(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;var Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ma=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Na(a,b){var c=Ka(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Oa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Pa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Qa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ra(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ra(a[c]);return b}
var Sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Sa.length;f++)c=Sa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ua;var Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Wa(a,b){if(b)a=a.replace(Xa,"&amp;").replace(Ya,"&lt;").replace(Za,"&gt;").replace($a,"&quot;").replace(bb,"&#39;").replace(cb,"&#0;");else{if(!db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Xa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ya,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Za,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace($a,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(cb,"&#0;"))}return a}
var Xa=/&/g,Ya=/</g,Za=/>/g,$a=/"/g,bb=/'/g,cb=/\x00/g,db=/[\x00&<>"']/;function eb(a,b){return a<b?-1:a>b?1:0}
;function G(a,b){this.l=b===fb?a:""}
G.prototype.V=!0;G.prototype.S=function(){return this.l.toString()};
G.prototype.j=!0;G.prototype.i=function(){return 1};
var gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,fb={},jb=new G("about:invalid#zClosurez",fb);var H;a:{var kb=B.navigator;if(kb){var lb=kb.userAgent;if(lb){H=lb;break a}}H=""}function I(a){return-1!=H.indexOf(a)}
;function mb(a,b,c){this.l=c===nb?a:"";this.o=b}
mb.prototype.j=!0;mb.prototype.i=function(){return this.o};
mb.prototype.V=!0;mb.prototype.S=function(){return this.l.toString()};
var nb={};function ob(a,b){void 0===Ua&&(Ua=Ha("goog#html"));var c=(c=Ua)?c.createHTML(a):a;return new mb(c,b,nb)}
;function pb(a){return a=Wa(a,void 0)}
;var qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function rb(a){return a?decodeURI(a):a}
function sb(a){return rb(a.match(qb)[3]||null)}
function tb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)tb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ub(a){var b=[],c;for(c in a)tb(c,a[c],b);return b.join("&")}
var vb=/#|$/;function wb(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function xb(a){xb[" "](a);return a}
xb[" "]=za;var yb=I("Opera"),zb=I("Trident")||I("MSIE"),Ab=I("Edge"),Bb=I("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Cb=-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge");function Db(){var a=B.document;return a?a.documentMode:void 0}
var Eb;a:{var Fb="",Gb=function(){var a=H;if(Bb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ab)return/Edge\/([\d\.]+)/.exec(a);if(zb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Cb)return/WebKit\/(\S+)/.exec(a);if(yb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Gb&&(Fb=Gb?Gb[1]:"");if(zb){var Hb=Db();if(null!=Hb&&Hb>parseFloat(Fb)){Eb=String(Hb);break a}}Eb=Fb}var Jb=Eb,Kb={},Lb;if(B.document&&zb){var Mb=Db();Lb=Mb?Mb:parseInt(Jb,10)||void 0}else Lb=void 0;var Nb=Lb;var Ob=I("Firefox")||I("FxiOS"),Pb=I("iPhone")&&!I("iPod")&&!I("iPad")||I("iPod"),Qb=I("iPad");var Rb={},Sb=null;var J=window;function Tb(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ub(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Vb[c])c=Vb[c];else{c=String(c);if(!Vb[c]){var f=/function\s+([^\(]+)/m.exec(c);Vb[c]=f?f[1]:"[Anonymous]"}c=Vb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Ub(a,b){b||(b={});b[Wb(a)]=!0;var c=a.stack||"",d=a.Wa;d&&!b[Wb(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Ub(d,b));return c}
function Wb(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Vb={};function Xb(a){this.i=a||{cookie:""}}
r=Xb.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.fb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.i.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Va(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fa:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.i.cookie};
r.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Va(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yb=new Xb("undefined"==typeof document?null:document);var Zb=!zb||9<=Number(Nb);function $b(a,b){this.width=a;this.height=b}
r=$b.prototype;r.clone=function(){return new $b(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a,b){Qa(b,function(c,d){c&&"object"==typeof c&&c.V&&(c=c.S());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:bc.hasOwnProperty(d)?a.setAttribute(bc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function cc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Zb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',pb(g.name),'"');if(g.type){f.push(' type="',pb(g.type),'"');var h={};Ta(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=dc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):ac(f,g));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ba(f)||Ca(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ca(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}F(g?Oa(f):f,d)}}}
function dc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;function fc(a){var b=gc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function hc(){var a=[];fc(function(b){a.push(b)});
return a}
var gc={Ia:"allow-forms",Ja:"allow-modals",Ka:"allow-orientation-lock",La:"allow-pointer-lock",Ma:"allow-popups",Na:"allow-popups-to-escape-sandbox",Oa:"allow-presentation",Pa:"allow-same-origin",Qa:"allow-scripts",Ra:"allow-top-navigation",Sa:"allow-top-navigation-by-user-activation"},ic=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return hc()});
function jc(){var a=dc(document,"IFRAME"),b={};F(ic(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function kc(){this.l=this.l;this.A=this.A}
kc.prototype.l=!1;kc.prototype.dispose=function(){this.l||(this.l=!0,this.K())};
kc.prototype.K=function(){if(this.A)for(;this.A.length;)this.A.shift()()};var lc={};function mc(a){if(a!==lc)throw Error("Bad secret");}
;function nc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var oc;function pc(){}
function qc(a,b){mc(b);this.i=a}
v(qc,pc);qc.prototype.toString=function(){return this.i.toString()};
var rc=null===(oc=nc())||void 0===oc?void 0:oc.emptyHTML;new qc(null!==rc&&void 0!==rc?rc:"",lc);var sc;function tc(){}
function uc(a,b){mc(b);this.i=a}
v(uc,tc);uc.prototype.toString=function(){return this.i.toString()};
var vc=null===(sc=nc())||void 0===sc?void 0:sc.emptyScript;new uc(null!==vc&&void 0!==vc?vc:"",lc);function wc(){}
function xc(a,b){mc(b);this.i=a}
v(xc,wc);xc.prototype.toString=function(){return this.i};new xc("about:blank",lc);new xc("about:invalid#zTSz",lc);function yc(a){var b=a.offsetWidth,c=a.offsetHeight,d=Cb&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0}}return new $b(e.right-e.left,e.bottom-e.top)}return new $b(b,c)}
;var zc=(new Date).getTime();function Ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Bc=window,Cc=document,Dc=Bc.location;function Ec(){}
var Fc=/\[native code\]/;function M(a,b,c){return a[b]=a[b]||c}
function Gc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function N(){var a;if((a=Object.create)&&Fc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Hc=M(Bc,"gapi",{});var O;O=M(Bc,"___jsl",N());M(O,"I",0);M(O,"hel",10);function Ic(){var a=Dc.href;if(O.dpo)var b=O.h;else{b=O.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Jc(a){var b=M(O,"PQ",[]);O.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Kc(a){return M(M(O,"H",N()),a,N())}
;function Lc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],y=e[3],L=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var K=y^w&(x^y);var W=1518500249}else K=w^x^y,W=1859775393;else 60>q?(K=w&x|y&(w|x),W=2400959708):(K=w^x^y,W=3395469782);K=((n<<5|n>>>27)&4294967295)+K+L+W+p[q]&4294967295;L=y;y=x;x=(w<<30|w>>>2)&4294967295;w=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+L&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],w=0,x=n.length;w<x;++w)q.push(n.charCodeAt(w));n=q}p||(p=n.length);q=0;if(0==l)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[l++]=n[q++],m++,64==l)for(l=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var w=24;0<=w;w-=8)n[p++]=e[q]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ta:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function Mc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),Nc(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=Nc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Nc(a){var b=Lc();b.update(a);return b.ta().toLowerCase()}
;function Oc(a){var b=Ac(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new Xb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new Xb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Mc(Ac(d),
c,a||null)].join(" "):null}return null}
;var Pc=M(O,"perf",N());M(Pc,"g",N());var Qc=M(Pc,"i",N());M(Pc,"r",[]);N();N();function Rc(a,b,c){b&&0<b.length&&(b=Sc(b),c&&0<c.length&&(b+="___"+Sc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=M(Qc,"_p",N()),M(b,c,N())[a]=(new Date).getTime(),b=Pc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Sc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Tc=N(),Uc=[];function P(a){throw Error("Bad hint"+(a?": "+a:""));}
Uc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?O[b]=M(O,b,[]).concat(c):M(O,b,c)}if(b=a.u)a=M(O,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Vc=/^(\/[a-zA-Z0-9_\-]+)+$/,Wc=[/\/amp\//,/\/amp$/,/^\/amp$/],Xc=/^[a-zA-Z0-9\-_\.,!]+$/,Yc=/^gapi\.loaded_[0-9]+$/,Zc=/^[a-zA-Z0-9,._-]+$/;function $c(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Tc[f],h=null;g?h=g(e,b,c,d):P("no hint processor for: "+f);h||P("failed to generate load url");b=h;c=b.match(ad);(d=b.match(bd))&&1===d.length&&cd.test(b)&&c&&1===c.length||P("failed sanity: "+a);return h}
function dd(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=ed(a);Yc.test(c)||P("invalid_callback");b=fd(b);d=d&&d.length?fd(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ca?"/am="+e(a.ca):"",a.ka?"/rs="+e(a.ka):"",a.ma?"/t="+e(a.ma):"","/cb=",e(c)].join("")}
function ed(a){"/"!==a.charAt(0)&&P("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))P("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Vc.test(b)||P("invalid_prefix");c=0;for(d=Wc.length;c<d;++c)Wc[c].test(b)&&P("invalid_prefix");c=gd(a,
"k",!0);d=gd(a,"am");e=gd(a,"rs");a=gd(a,"t");return{pathPrefix:b,version:c,ca:d,ka:e,ma:a}}
function fd(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Zc.test(e)&&b.push(e)}return b.join(",")}
function gd(a,b,c){a=a[b];!a&&c&&P("missing: "+b);if(a){if(Xc.test(a))return a;P("invalid: "+b)}return null}
var cd=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,bd=/\/cb=/g,ad=/\/\//g;function hd(){var a=Ic();if(!a)throw Error("Bad hint");return a}
Tc.m=function(a,b,c,d){(a=a[0])||P("missing_hint");return"https://apis.google.com"+dd(a,b,c,d)};
var id=decodeURI("%73cript"),jd=/^[-+_0-9\/A-Za-z]+={0,2}$/;function kd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function ld(){var a=O.nonce;return void 0!==a?a&&a===String(a)&&a.match(jd)?a:O.nonce=null:Cc.querySelector?(a=Cc.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(jd)?O.nonce=a:O.nonce=null):null:null}
function md(a){if("loading"!=Cc.readyState)nd(a);else{var b=ld(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+id+' src="'+encodeURI(a)+'"'+c+"></"+id+">";Cc.write(od?od.createHTML(a):a)}}
function nd(a){var b=Cc.createElement(id);b.setAttribute("src",od?od.createScriptURL(a):a);a=ld();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Cc.getElementsByTagName(id)[0])?a.parentNode.insertBefore(b,a):(Cc.head||Cc.body||Cc.documentElement).appendChild(b)}
function pd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Uc.length;d++){var e=Uc[d][0],f=Uc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function qd(a,b,c){rd(function(){var d=b===Ic()?M(Hc,"_",N()):N();d=M(Kc(b),"_",d);a(d)},c)}
function sd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);pd(a,c);var d=a?a.split(":"):[],e=c.h||hd(),f=M(O,"ah",N());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var n=g.length;if(1<n){var p=c.callback;p&&(c.callback=function(){0==--n&&p()})}for(;d=g.shift();)td(d.features,c,d.hint)}else td(d||[],c,e)}
function td(a,b,c){function d(K,W){if(n)return 0;Bc.clearTimeout(m);p.push.apply(p,w);var ab=((Hc||{}).config||{}).update;ab?ab(f):f&&M(O,"cu",[]).push(f);if(W){Rc("me0",K,q);try{qd(W,c,l)}finally{Rc("me1",K,q)}}return 1}
a=Gc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,n=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=M(Kc(c),"r",[]).sort();var p=M(Kc(c),"L",[]).sort(),q=[].concat(k);0<g&&(m=Bc.setTimeout(function(){n=!0;h()},g));
var w=kd(a,p);if(w.length){w=kd(a,k);var x=M(O,"CP",[]),y=x.length;x[y]=function(K){function W(){var Ib=x[y+1];Ib&&Ib()}
function ab(Ib){x[y]=null;d(w,K)&&Jc(function(){e&&e();Ib()})}
if(!K)return 0;Rc("ml1",w,q);0<y&&x[y-1]?x[y]=function(){ab(W)}:ab(W)};
if(w.length){var L="loaded_"+O.I++;Hc[L]=function(K){x[y](K);Hc[L]=null};
a=$c(c,w,"gapi."+L,k);k.push.apply(k,w);Rc("ml0",w,q);b.sync||Bc.___gapisync?md(a):nd(a)}else x[y](Ec)}else d(w)&&e&&e()}
var od=Ha("goog#gapi");function rd(a,b){if(O.hee&&0<O.hel)try{return a()}catch(c){b&&b(c),O.hel--,sd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Hc.load=function(a,b){return rd(function(){return sd(a,b)})};function ud(){this.j=[];this.i=-1}
ud.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.j[a]!=b&&(this.j[a]=b,this.i=-1)};
ud.prototype.get=function(a){return!!this.j[a]};
function vd(a){-1==a.i&&(a.i=Ma(a.j,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function wd(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=!1}
wd.prototype.j=function(){this.defaultPrevented=!0};var xd=!zb||9<=Number(Nb),yd;
if(yd=zb){var zd;if(Object.prototype.hasOwnProperty.call(Kb,"9"))zd=Kb["9"];else{for(var Ad=0,Bd=Va(String(Jb)).split("."),Cd=Va("9").split("."),Dd=Math.max(Bd.length,Cd.length),Ed=0;0==Ad&&Ed<Dd;Ed++){var Fd=Bd[Ed]||"",Gd=Cd[Ed]||"";do{var Hd=/(\d*)(\D*)(.*)/.exec(Fd)||["","","",""],Id=/(\d*)(\D*)(.*)/.exec(Gd)||["","","",""];if(0==Hd[0].length&&0==Id[0].length)break;Ad=eb(0==Hd[1].length?0:parseInt(Hd[1],10),0==Id[1].length?0:parseInt(Id[1],10))||eb(0==Hd[2].length,0==Id[2].length)||eb(Hd[2],Id[2]);
Fd=Hd[3];Gd=Id[3]}while(0==Ad)}zd=Kb["9"]=0<=Ad}yd=!zd}var Jd=yd,Kd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",za,b),B.removeEventListener("test",za,b)}catch(c){}return a}();function Ld(a,b){wd.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
E(Ld,wd);var Md={2:"touch",3:"pen",4:"mouse"};
Ld.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;var e=a.relatedTarget;if(e){if(Bb){a:{try{xb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Md[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&this.j()};
Ld.prototype.j=function(){Ld.H.j.call(this);var a=this.l;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Jd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Nd="closure_listenable_"+(1E6*Math.random()|0),Od=0;function Pd(a,b,c,d,e){this.listener=a;this.i=null;this.src=b;this.type=c;this.capture=!!d;this.U=e;this.key=++Od;this.M=this.P=!1}
function Qd(a){a.M=!0;a.listener=null;a.i=null;a.src=null;a.U=null}
;function Rd(a){this.src=a;this.listeners={};this.i=0}
Rd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Sd(a,b,d,e);-1<g?(b=a[g],c||(b.P=!1)):(b=new Pd(b,this.src,f,!!d,e),b.P=c,a.push(b));return b};
Rd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Sd(e,b,c,d);return-1<b?(Qd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Td(a,b){var c=b.type;c in a.listeners&&Na(a.listeners[c],b)&&(Qd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Sd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.M&&f.listener==b&&f.capture==!!c&&f.U==d)return e}return-1}
;var Ud="closure_lm_"+(1E6*Math.random()|0),Vd={},Wd=0;function Xd(a,b,c,d,e){if(d&&d.once)Yd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Xd(a,b[f],c,d,e);else c=Zd(c),a&&a[Nd]?$d(a,b,c,Ca(d)?!!d.capture:!!d,e):ae(a,b,c,!1,d,e)}
function ae(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ca(e)?!!e.capture:!!e,h=be(a);h||(a[Ud]=h=new Rd(a));c=h.add(b,c,d,g,f);if(!c.i){d=ce();c.i=d;d.src=a;d.listener=c;if(a.addEventListener)Kd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(de(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Wd++}}
function ce(){var a=ee,b=xd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Yd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Yd(a,b[f],c,d,e);else c=Zd(c),a&&a[Nd]?a.i.add(String(b),c,!0,Ca(d)?!!d.capture:!!d,e):ae(a,b,c,!0,d,e)}
function fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)fe(a,b[f],c,d,e);else(d=Ca(d)?!!d.capture:!!d,c=Zd(c),a&&a[Nd])?a.i.remove(String(b),c,d,e):a&&(a=be(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Sd(b,c,d,e)),(c=-1<a?b[a]:null)&&ge(c))}
function ge(a){if("number"!==typeof a&&a&&!a.M){var b=a.src;if(b&&b[Nd])Td(b.i,a);else{var c=a.type,d=a.i;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(de(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Wd--;(c=be(b))?(Td(c,a),0==c.i&&(c.src=null,b[Ud]=null)):Qd(a)}}}
function de(a){return a in Vd?Vd[a]:Vd[a]="on"+a}
function he(a,b,c,d){var e=!0;if(a=be(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.M&&(f=ie(f,d),e=e&&!1!==f)}return e}
function ie(a,b){var c=a.listener,d=a.U||a.src;a.P&&ge(a);return c.call(d,b)}
function ee(a,b){if(a.M)return!0;if(!xd){var c=b||C("window.event"),d=new Ld(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.i;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;0<=g;g--){d.i=c[g];var h=he(c[g],f,!0,d);e=e&&h}for(g=0;g<c.length;g++)d.i=c[g],h=he(c[g],f,!1,d),e=e&&h}return e}return ie(a,new Ld(b,this))}
function be(a){a=a[Ud];return a instanceof Rd?a:null}
var je="__closure_events_fn_"+(1E9*Math.random()>>>0);function Zd(a){if("function"===typeof a)return a;a[je]||(a[je]=function(b){return a.handleEvent(b)});
return a[je]}
;function Q(){kc.call(this);this.i=new Rd(this);this.N=this;this.B=null}
E(Q,kc);Q.prototype[Nd]=!0;Q.prototype.addEventListener=function(a,b,c,d){Xd(this,a,b,c,d)};
Q.prototype.removeEventListener=function(a,b,c,d){fe(this,a,b,c,d)};
Q.prototype.dispatchEvent=function(a){var b=this.B;if(b){var c=[];for(var d=1;b;b=b.B)c.push(b),++d}b=this.N;d=a.type||a;if("string"===typeof a)a=new wd(a,b);else if(a instanceof wd)a.target=a.target||b;else{var e=a;a=new wd(d,b);Ta(a,e)}e=!0;if(c)for(var f=c.length-1;0<=f;f--){var g=a.i=c[f];e=ke(g,d,!0,a)&&e}g=a.i=b;e=ke(g,d,!0,a)&&e;e=ke(g,d,!1,a)&&e;if(c)for(f=0;f<c.length;f++)g=a.i=c[f],e=ke(g,d,!1,a)&&e;return e};
Q.prototype.K=function(){Q.H.K.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Qd(d[e]);delete a.listeners[c];a.i--}}this.B=null};
function $d(a,b,c,d,e){a.i.add(String(b),c,!1,d,e)}
function ke(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.M&&g.capture==c){var h=g.listener,k=g.U||g.src;g.P&&Td(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function le(a,b){this.l=a;this.o=b;this.j=0;this.i=null}
le.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function me(a,b){a.o(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function ne(a){B.setTimeout(function(){throw a;},0)}
var oe;
function pe(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=dc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Fa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.da;c.da=null;e()}};
return function(e){d.next={da:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function qe(){this.j=this.i=null}
var se=new le(function(){return new re},function(a){a.reset()});
qe.prototype.add=function(a,b){var c=se.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
qe.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
function re(){this.next=this.scope=this.i=null}
re.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
re.prototype.reset=function(){this.next=this.scope=this.i=null};function te(a,b){ue||ve();we||(ue(),we=!0);xe.add(a,b)}
var ue;function ve(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);ue=function(){a.then(ye)}}else ue=function(){var b=ye;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!I("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(oe||(oe=pe()),oe(b)):B.setImmediate(b)}}
var we=!1,xe=new qe;function ye(){for(var a;a=xe.remove();){try{a.i.call(a.scope)}catch(b){ne(b)}me(se,a)}we=!1}
;function ze(a){this.i=0;this.C=void 0;this.o=this.j=this.l=null;this.A=this.B=!1;if(a!=za)try{var b=this;a.call(void 0,function(c){Ae(b,2,c)},function(c){Ae(b,3,c)})}catch(c){Ae(this,3,c)}}
function Be(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Be.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Ce=new le(function(){return new Be},function(a){a.reset()});
function De(a,b,c){var d=Ce.get();d.j=a;d.onRejected=b;d.context=c;return d}
ze.prototype.then=function(a,b,c){return Ee(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ze.prototype.$goog_Thenable=!0;ze.prototype.cancel=function(a){if(0==this.i){var b=new Fe(a);te(function(){Ge(this,b)},this)}};
function Ge(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?Ge(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):He(c),Ie(c,e,3,b)))}a.l=null}else Ae(a,3,b)}
function Je(a,b){a.j||2!=a.i&&3!=a.i||Ke(a);a.o?a.o.next=b:a.j=b;a.o=b}
function Ee(a,b,c,d){var e=De(null,null,null);e.i=new ze(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Fe?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;Je(a,e);return e.i}
ze.prototype.N=function(a){this.i=0;Ae(this,2,a)};
ze.prototype.Z=function(a){this.i=0;Ae(this,3,a)};
function Ae(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.N,f=a.Z;if(d instanceof ze){Je(d,De(e||za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ca(d))try{var k=d.then;if("function"===typeof k){Le(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Ke(a),3!=b||c instanceof Fe||Me(a,c))}}
function Le(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ke(a){a.B||(a.B=!0,te(a.D,a))}
function He(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.o=null);return b}
ze.prototype.D=function(){for(var a;a=He(this);)Ie(this,a,this.i,this.C);this.B=!1};
function Ie(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.A;a=a.l)a.A=!1;if(b.i)b.i.l=null,Ne(b,c,d);else try{b.l?b.j.call(b.context):Ne(b,c,d)}catch(e){Oe.call(null,e)}me(Ce,b)}
function Ne(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Me(a,b){a.A=!0;te(function(){a.A&&Oe.call(null,b)})}
var Oe=ne;function Fe(a){Ia.call(this,a)}
E(Fe,Ia);Fe.prototype.name="cancel";function Pe(a,b,c){kc.call(this);this.i=a;this.B=b||0;this.j=c;this.o=Fa(this.ua,this)}
E(Pe,kc);r=Pe.prototype;r.O=0;r.K=function(){Pe.H.K.call(this);this.stop();delete this.i;delete this.j};
r.start=function(a){this.stop();var b=this.o;a=void 0!==a?a:this.B;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=Fa(b.handleEvent,b);else throw Error("Invalid listener argument");this.O=2147483647<Number(a)?-1:B.setTimeout(b,a||0)};
r.stop=function(){this.isActive()&&B.clearTimeout(this.O);this.O=0};
r.isActive=function(){return 0!=this.O};
r.ua=function(){this.O=0;this.i&&this.i.call(this.j)};function Qe(){this.j=-1}
;function Re(){this.j=64;this.i=[];this.B=[];this.C=[];this.o=[];this.o[0]=128;for(var a=1;a<this.j;++a)this.o[a]=0;this.A=this.l=0;this.reset()}
E(Re,Qe);Re.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.A=this.l=0};
function Se(a,b,c){c||(c=0);var d=a.C;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Re.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.j,d=0,e=this.B,f=this.l;d<b;){if(0==f)for(;d<=c;)Se(this,a,d),d+=this.j;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.j){Se(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.j){Se(this,e);f=0;break}}this.l=f;this.A+=b}};
Re.prototype.digest=function(){var a=[],b=8*this.A;56>this.l?this.update(this.o,56-this.l):this.update(this.o,this.j-(this.l-56));for(var c=this.j-1;56<=c;c--)this.B[c]=b&255,b/=256;Se(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};var Te="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function Ue(){}
Ue.prototype.next=function(){throw Te;};
Ue.prototype.J=function(){return this};
function Ve(a){if(a instanceof Ue)return a;if("function"==typeof a.J)return a.J(!1);if(Ba(a)){var b=0,c=new Ue;c.next=function(){for(;;){if(b>=a.length)throw Te;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function We(a,b){if(Ba(a))try{F(a,b,void 0)}catch(c){if(c!==Te)throw c;}else{a=Ve(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Te)throw c;}}}
function Xe(a){if(Ba(a))return Oa(a);a=Ve(a);var b=[];We(a,function(c){b.push(c)});
return b}
;function Ye(a,b){this.l={};this.i=[];this.o=this.j=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ye)for(c=Ze(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ze(a){$e(a);return a.i.concat()}
r=Ye.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.j!=a.j)return!1;var c=b||af;$e(this);for(var d,e=0;d=this.i[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function af(a,b){return a===b}
r.isEmpty=function(){return 0==this.j};
r.clear=function(){this.l={};this.o=this.j=this.i.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.l,a)?(delete this.l[a],this.j--,this.o++,this.i.length>2*this.j&&$e(this),!0):!1};
function $e(a){if(a.j!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Object.prototype.hasOwnProperty.call(a.l,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.j!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Object.prototype.hasOwnProperty.call(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.l,a)||(this.j++,this.i.push(a),this.o++);this.l[a]=b};
r.forEach=function(a,b){for(var c=Ze(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Ye(this)};
r.J=function(a){$e(this);var b=0,c=this.o,d=this,e=new Ue;e.next=function(){if(c!=d.o)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)throw Te;var f=d.i[b++];return a?f:d.l[f]};
return e};function bf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function cf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function df(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:bf(a).match(/\S+/g)||[],c=0<=Ka(c,b);return c}
function ef(a,b){if(a.classList)a.classList.add(b);else if(!df(a,b)){var c=bf(a);cf(a,c+(0<c.length?" "+b:b))}}
function ff(a,b){a.classList?a.classList.remove(b):df(a,b)&&cf(a,La(a.classList?a.classList:bf(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function gf(a){var b=[];hf(new jf,a,b);return b.join("")}
function jf(){}
function hf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),kf(d,c),c.push(":"),hf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":kf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var lf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},mf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function kf(a,b){b.push('"',a.replace(mf,function(c){var d=lf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),lf[c]=d);return d}),'"')}
;function R(a){kc.call(this);this.C=1;this.o=[];this.B=0;this.i=[];this.j={};this.D=!!a}
E(R,kc);r=R.prototype;r.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.C;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.C=e+3;d.push(e);return e};
r.Y=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.B?(this.o.push(a),this.i[a+1]=za):(c&&Na(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
r.T=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];nf(this.i[g+1],this.i[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.B--,0<this.o.length&&0==this.B)for(;c=this.o.pop();)this.Y(c)}}return 0!=e}return!1};
function nf(a,b,c){te(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.j[a];b&&(F(b,this.Y,this),delete this.j[a])}else this.i.length=0,this.j={}};
r.K=function(){R.H.K.call(this);this.clear();this.o.length=0};function of(a){this.i=a}
of.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,gf(b))};
of.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
of.prototype.remove=function(a){this.i.remove(a)};function pf(a){this.i=a}
E(pf,of);function qf(a){this.data=a}
function rf(a){return void 0===a||a instanceof qf?a:new qf(a)}
pf.prototype.set=function(a,b){pf.H.set.call(this,a,rf(b))};
pf.prototype.j=function(a){a=pf.H.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pf.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sf(a){this.i=a}
E(sf,pf);sf.prototype.set=function(a,b,c){if(b=rf(b)){if(c){if(c<Date.now()){sf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}sf.H.set.call(this,a,b)};
sf.prototype.j=function(a){var b=sf.H.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())sf.prototype.remove.call(this,a);else return b}};function tf(){}
;function uf(){}
E(uf,tf);uf.prototype.clear=function(){var a=Xe(this.J(!0)),b=this;F(a,function(c){b.remove(c)})};function vf(a){this.i=a}
E(vf,uf);r=vf.prototype;r.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.i.removeItem(a)};
r.J=function(a){var b=0,c=this.i,d=new Ue;d.next=function(){if(b>=c.length)throw Te;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.i.clear()};
r.key=function(a){return this.i.key(a)};function wf(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
E(wf,vf);function xf(a,b){this.j=a;this.i=null;if(zb&&!(9<=Number(Nb))){yf||(yf=new Ye);this.i=yf.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),yf.set(a,this.i));try{this.i.load(this.j)}catch(c){this.i=null}}}
E(xf,uf);var zf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yf=null;function Af(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zf[b]})}
r=xf.prototype;r.isAvailable=function(){return!!this.i};
r.set=function(a,b){this.i.setAttribute(Af(a),b);Bf(this)};
r.get=function(a){a=this.i.getAttribute(Af(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.i.removeAttribute(Af(a));Bf(this)};
r.J=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Ue;d.next=function(){if(b>=c.length)throw Te;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bf(this)};
function Bf(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Cf(a,b){this.j=a;this.i=b+"::"}
E(Cf,uf);Cf.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Cf.prototype.get=function(a){return this.j.get(this.i+a)};
Cf.prototype.remove=function(a){this.j.remove(this.i+a)};
Cf.prototype.J=function(a){var b=this.j.J(!0),c=this,d=new Ue;d.next=function(){for(var e=b.next();e.substr(0,c.i.length)!=c.i;)e=b.next();return a?e.substr(c.i.length):c.j.get(e)};
return d};var Df=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",Df);function Ef(a){var b=arguments;1<b.length?Df[b[0]]=b[1]:1===b.length&&Object.assign(Df,b[0])}
function S(a,b){return a in Df?Df[a]:b}
;var Ff=[];function Gf(a){Ff.forEach(function(b){return b(a)})}
function Hf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){If(b),Gf(b)}}:a}
function If(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Ef("ERRORS",b))}
function Jf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Ef("ERRORS",b))}
;var Kf={q:!0,search_query:!0};function Lf(a){var b=[];Qa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Mf(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?Pa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){k.args=[{key:f[0],value:f[1],query:a}],Kf.hasOwnProperty(f[0])||("ReferenceError"===k.name?Jf(k):If(k))}}return c}
function Nf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Mf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=ub(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function Of(){return C("gapi.iframes.getContext")()}
function Pf(){return C("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function T(a){a=Qf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Rf(a,b){var c=Qf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Qf(a){var b=S("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:S("EXPERIMENT_FLAGS",{})[a]}
;var Sf=0;D("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Sf});D("ytEventsEventsListeners",B.ytEventsEventsListeners||{});D("ytEventsEventsCounter",B.ytEventsEventsCounter||{count:0});function Tf(a,b){"function"===typeof a&&(a=Hf(a));return window.setTimeout(a,b)}
;function Uf(){}
function Vf(a,b){return Wf(a,1,b)}
;function Xf(){Uf.apply(this,arguments)}
v(Xf,Uf);function Wf(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Tf(a,c||0)}
function Yf(a){if(!isNaN(a)){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
Xf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Xf.i=void 0;Xf.j=function(){Xf.i||(Xf.i=new Xf)};
Xf.j();var Zf=B.ytPubsubPubsubInstance||new R,$f=B.ytPubsubPubsubSubscribedKeys||{},ag=B.ytPubsubPubsubTopicToKeys||{},bg=B.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Y;R.prototype.publish=R.prototype.T;R.prototype.clear=R.prototype.clear;D("ytPubsubPubsubInstance",Zf);D("ytPubsubPubsubTopicToKeys",ag);D("ytPubsubPubsubIsSynchronous",bg);D("ytPubsubPubsubSubscribedKeys",$f);var cg=window,U=cg.ytcsi&&cg.ytcsi.now?cg.ytcsi.now:cg.performance&&cg.performance.timing&&cg.performance.now&&cg.performance.timing.navigationStart?function(){return cg.performance.timing.navigationStart+cg.performance.now()}:function(){return(new Date).getTime()};var dg=Rf("initial_gel_batch_timeout",1E3),eg=Math.pow(2,16)-1,fg=null,gg=0,hg=void 0,ig=0,jg=0,kg=0,lg=!0,mg=B.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",mg);var ng=B.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",ng);function og(a){a=void 0===a?!1:a;return new ze(function(b){window.clearTimeout(ig);window.clearTimeout(jg);jg=0;hg&&hg.isReady()?(pg(b,a),mg.clear()):(qg(),b())})}
function qg(){T("web_gel_timeout_cap")&&!jg&&(jg=Tf(og,6E4));window.clearTimeout(ig);var a=S("LOGGING_BATCH_TIMEOUT",Rf("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&lg&&(a=dg);ig=Tf(og,a)}
function pg(a,b){var c=hg;b=void 0===b?!1:b;for(var d=Math.round(U()),e=mg.size,f=u(mg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Ra({context:rg(c.i||sg())});h.events=k;(k=ng[g])&&tg(h,g,k);delete ng[g];ug(h,d);vg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();gg=Math.round(U()-d)},
onError:function(){e--;e||a()},
Ha:b});lg=!1}}
function ug(a,b){a.requestTimeMs=String(b);T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=S("EVENT_ID",void 0);if(c){var d=S("BATCH_CLIENT_COUNTER",void 0)||0;!d&&T("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*eg/2));d++;d>eg&&(d=1);Ef("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;fg&&gg&&T("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:fg,roundtripMs:String(gg)});fg=c;gg=0}}
function tg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var wg=B.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",wg);
function xg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;a=C("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};T("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,wg[b]=b in wg?wg[b]+1:0,a.sequence={index:wg[b],groupKey:b},d.Za&&delete wg[d.la]);d=d.Ya;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ng[d.token]=a,a=d.token);d=mg.get(a)||[];mg.set(a,
d);d.push(e);c&&(hg=new c);c=Rf("web_logging_max_batch")||100;e=U();d.length>=c?og(!0):10<=e-kg&&(qg(),kg=e)}
;function yg(a){var b=zg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=zc;e.flash="0";a:{try{var f=b.i.top.location.href}catch(L){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?J:g;try{var h=g.history.length}catch(L){h=0}e.u_his=h;e.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(e.u_h=J.screen.height,e.u_w=J.screen.width,
e.u_ah=J.screen.availHeight,e.u_aw=J.screen.availWidth,e.u_cd=J.screen.colorDepth);J.navigator&&J.navigator.plugins&&(e.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(e.u_nmime=J.navigator.mimeTypes.length);h=b.i;try{var k=h.screenX;var l=h.screenY}catch(L){}try{var m=h.outerWidth;var n=h.outerHeight}catch(L){}try{var p=h.innerWidth;var q=h.innerHeight}catch(L){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,m,n,p,q];
l=b.i.top;try{var w=(l||window).document,x="CSS1Compat"==w.compatMode?w.documentElement:w.body;var y=(new $b(x.clientWidth,x.clientHeight)).round()}catch(L){y=new $b(-12245933,-12245933)}w=y;y={};x=new ud;B.SVGElement&&B.document.createElementNS&&x.set(0);l=jc();l["allow-top-navigation-by-user-activation"]&&x.set(1);l["allow-popups-to-escape-sandbox"]&&x.set(2);B.crypto&&B.crypto.subtle&&x.set(3);B.TextDecoder&&B.TextEncoder&&x.set(4);x=vd(x);y.bc=x;y.bih=w.height;y.biw=w.width;y.brdim=k.join();b=
b.j;b=(y.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,y.wgl=!!J.WebGLRenderingContext,y);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var zg=new function(){var a=window.document;this.i=window;this.j=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Lf(yg(a))});var Ag="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Bg(){if(!Ag)return null;var a=Ag();return"open"in a?a:null}
;var Cg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Dg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Eg=!1;
function Fg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(qb)[1]||null,e=sb(a);d&&e?(d=c,c=a.match(qb),d=d.match(qb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?sb(c)==e&&(Number(c.match(qb)[4]||null)||null)==(Number(a.match(qb)[4]||null)||null):!0;d=T("web_ajax_ignore_global_headers_if_set");for(var f in Cg)e=S(Cg[f]),!e||!c&&sb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!sb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!sb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!sb(a))b["X-YouTube-Ad-Signals"]=Lf(yg(void 0));return b}
function Gg(a){var b=window.location.search,c=sb(a),d=rb(a.match(qb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Mf(b),f={};F(Dg,function(g){e[g]&&(f[g]=e[g])});
return Nf(a,f||{},!1)}
function Hg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ig(a,b);var d=Jg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.aa&&b.aa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ia&&0<b.timeout&&(f=Tf(function(){e||(e=!0,window.clearTimeout(f),b.ia.call(b.context||B))},b.timeout))}else Kg(a,b)}
function Kg(a,b){var c=b.format||"JSON";a=Ig(a,b);var d=Jg(a,b),e=!1,f=Lg(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,p=500<=k.status&&600>k.status;if(l||n||p)m=Mg(a,c,k,b.Xa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.aa&&b.aa.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.W&&0<b.timeout){var g=b.W;var h=Tf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function Ig(a,b){b.bb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME",void 0),d=b.Ga;d&&(d[c]&&delete d[c],a=Nf(a,d||{},!0));return a}
function Jg(a,b){var c=S("XSRF_FIELD_NAME",void 0),d=S("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.G,g=S("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.ab||sb(a)&&!b.withCredentials&&sb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.G&&b.G[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Mf(e),Ta(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):ub(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Eg&&c&&"POST"!=b.method&&
(Eg=!0,If(Error("AJAX request with postData should use POST")));return e}
function Mg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ng(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=Og(g)})}d&&Pg(e);
return e}
function Pg(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=ob(a[b],null);a[c]=d}else Pg(a[b])}}
function Ng(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Og(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Lg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Hf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Bg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;T("debug_forward_web_query_parameters")&&(a=Gg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Fg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Qg(){return"INNERTUBE_API_KEY"in Df&&"INNERTUBE_API_VERSION"in Df}
function sg(){return{innertubeApiKey:S("INNERTUBE_API_KEY",void 0),innertubeApiVersion:S("INNERTUBE_API_VERSION",void 0),va:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wa:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ya:S("INNERTUBE_CONTEXT_HL",void 0),xa:S("INNERTUBE_CONTEXT_GL",void 0),za:S("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ba:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Aa:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function rg(a){var b={client:{hl:a.ya,gl:a.xa,clientName:a.wa,clientVersion:a.innertubeContextClientVersion,configInfo:a.va}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=S("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=S("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&T("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(Mf(S("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ua||S("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Ta:b=Oc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=S("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return d}
;function Sg(a){a=Object.assign({},a);delete a.Authorization;var b=Oc();if(b){var c=new Re;c.update(S("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Sb){Sb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Rb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Sb[k]&&(Sb[k]=h)}}}c=Rb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Tg(a){var b=new wf;(b=b.isAvailable()?a?new Cf(b,a):b:null)||(a=new xf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new sf(a):null;this.j=document.domain||window.location.hostname}
Tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(gf(b))}catch(f){return}else e=escape(b);b=this.j;Yb.set(""+a,e,{fa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Tg.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Yb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Tg.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Yb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ug;function Vg(){Ug||(Ug=new Tg("yt.innertube"));return Ug}
function Wg(a,b,c,d){if(d)return null;d=Vg().get("nextId",!0)||1;var e=Vg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sg(c),requestTime:Math.round(U())};Vg().set("nextId",d+1,86400,!0);Vg().set("requests",e,86400,!0);return d}
function Xg(a){var b=Vg().get("requests",!0)||{};delete b[a];Vg().set("requests",b,86400,!0)}
function Yg(a){var b=Vg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState;var f=Sg(Rg(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),vg(a,d.method,e,{}));delete b[c]}}Vg().set("requests",b,86400,!0)}}
;function Zg(a,b){this.version=a;this.args=b}
;function $g(a){this.topic=a}
$g.prototype.toString=function(){return this.topic};var ah=C("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Y;R.prototype.publish=R.prototype.T;R.prototype.clear=R.prototype.clear;D("ytPubsub2Pubsub2Instance",ah);D("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});D("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});D("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});D("ytPubsub2Pubsub2SkipSubKey",null);
function bh(a,b){var c=C("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var ch=[],dh=!1;function eh(a,b){dh||(ch.push({type:"EVENT",eventType:a,payload:b}),10<ch.length&&ch.shift())}
;function fh(a){if(!a)throw Error();throw a;}
function gh(a){return a}
function V(a){var b=this;this.j=a;this.state={status:"PENDING"};this.i=[];this.onRejected=[];this.j(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.i);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
V.all=function(a){return new V(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={L:0};f.L<a.length;f={L:f.L},++f.L)hh(V.resolve(a[f.L]).then(function(g){return function(h){d[g.L]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
V.resolve=function(a){return new V(function(b,c){a instanceof V?a.then(b,c):b(a)})};
V.reject=function(a){return new V(function(b,c){c(a)})};
V.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:gh,e=null!==b&&void 0!==b?b:fh;return new V(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){ih(c,c,d,f,g)}),c.onRejected.push(function(){jh(c,c,e,f,g)})):"FULFILLED"===c.state.status?ih(c,c,d,f,g):"REJECTED"===c.state.status&&jh(c,c,e,f,g)})};
function hh(a,b){a.then(void 0,b)}
function ih(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?kh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function jh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?kh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function kh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?kh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function lh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function mh(a){return new Promise(function(b,c){lh(a,b,c)})}
function X(a){return new V(function(b,c){lh(a,b,c)})}
;function nh(a,b){return new V(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Y(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);d=[];var e=d.concat;if(!(c instanceof Array)){c=u(c);for(var f,g=[];!(f=c.next()).done;)g.push(f.value);c=g}this.args=e.call(d,c)}
v(Y,Error);var oh={},ph=(oh.AUTH_INVALID="No user identifier specified.",oh.EXPLICIT_ABORT="Transaction was explicitly aborted.",oh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",oh.MISSING_OBJECT_STORE="Object store not created.",oh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",oh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",oh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",oh);
function qh(a,b,c){b=void 0===b?{}:b;c=void 0===c?ph[a]:c;Y.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,qh.prototype);dh||(ch.push({type:"ERROR",payload:this}),10<ch.length&&ch.shift())}
v(qh,Y);function rh(a,b,c){qh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,rh.prototype)}
v(rh,qh);function sh(a){qh.call(this,"MISSING_OBJECT_STORE",{cb:a},ph.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,sh.prototype)}
v(sh,qh);function th(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(U());this.j=!1}
r=th.prototype;r.add=function(a,b,c){return uh(this,[a],"readwrite",function(d){return vh(d,a).add(b,c)})};
r.clear=function(a){return uh(this,[a],"readwrite",function(b){return vh(b,a).clear()})};
r.close=function(){var a;this.i.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return uh(this,[a],"readonly",function(c){return vh(c,a).count(b)})};
r["delete"]=function(a,b){return uh(this,[a],"readwrite",function(c){return vh(c,a)["delete"](b)})};
r.get=function(a,b){return uh(this,[a],"readwrite",function(c){return vh(c,a).get(b)})};
function uh(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.i.transaction(b,c);e=new wh(e);d=xh(e,d);yh(a,d,b.join(),c);return d}
function yh(a,b,c,d){wb(a,function f(){var g,h,k=this,l,m,n;return va(f,function(p){if(1==p.i)return g=Math.round(U()),p.o=2,z(p,b,4);if(2!=p.i)h=Math.round(U()),zh(k,!0,c,h-g),p.i=0,p.o=0;else{l=pa(p);m=Math.round(U());var q=l,w=k.i.name,x=k.transactionCount,y;"QuotaExceededError"===q.name?y=new qh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}):"UnknownError"===q.name&&(y=new qh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}));y&&eh("QUOTA_EXCEEDED",{dbName:w,objectStoreNames:c,
transactionCount:x,transactionMode:d});n=m-g;l instanceof rh&&(eh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.l}),k.j=!0);zh(k,!1,c,n);p.i=0}})})}
function zh(a,b,c,d){eh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.j,duration:d,isSuccessful:b})}
function Ah(a){this.i=a}
r=Ah.prototype;r.add=function(a,b){return X(this.i.add(a,b))};
r.clear=function(){return X(this.i.clear()).then(function(){})};
r.count=function(a){return X(this.i.count(a))};
function Bh(a,b){return Ch(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Bh(this,a):X(this.i["delete"](a))};
r.get=function(a){return X(this.i.get(a))};
r.index=function(a){return new Dh(this.i.index(a))};
r.getName=function(){return this.i.name};
function Ch(a,b,c){a=a.i.openCursor(b.query,b.direction);return Eh(a).then(function(d){return nh(d,c)})}
function wh(a){var b=this;this.i=a;this.j=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.aborted){e=rh;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.i.db.name,b.i.mode);d(e)}})})}
function xh(a,b){var c=new Promise(function(d,e){hh(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
wh.prototype.abort=function(){this.i.abort();this.aborted=!0;throw new qh("EXPLICIT_ABORT");};
wh.prototype.commit=function(){var a=this.i;a.commit&&!this.aborted&&a.commit()};
function vh(a,b){var c=a.i.objectStore(b),d=a.j.get(c);d||(d=new Ah(c),a.j.set(c,d));return d}
function Dh(a){this.i=a}
Dh.prototype.count=function(a){return X(this.i.count(a))};
Dh.prototype["delete"]=function(a){return Fh(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Dh.prototype.get=function(a){return X(this.i.get(a))};
Dh.prototype.getKey=function(a){return X(this.i.getKey(a))};
function Fh(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Eh(a).then(function(d){return nh(d,c)})}
function Gh(a,b){this.request=a;this.cursor=b}
function Eh(a){return X(a).then(function(b){return null===b?null:new Gh(a,b)})}
r=Gh.prototype;r.advance=function(a){this.cursor.advance(a);return Eh(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Eh(this.request)};
r["delete"]=function(){return X(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return X(this.cursor.update(a))};function Hh(a,b,c){return wb(this,function e(){var f,g,h,k,l,m,n,p,q,w;return va(e,function(x){if(1==x.i)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.Fa,m=g.upgrade,n=g.closed,q=function(){p||(p=new th(f.result,{closed:n}));return p},f.addEventListener("upgradeneeded",function(y){if(null===y.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");y.dataLoss&&"none"!==y.dataLoss&&eh("IDB_DATA_CORRUPTED",{reason:y.dataLossMessage||"unknown reason",dbName:a});var L=q(),K=new wh(f.transaction);m&&m(L,y.oldVersion,y.newVersion,K)}),h&&f.addEventListener("blocked",function(){h()}),z(x,mh(f),2);
w=x.A;k&&w.addEventListener("versionchange",function(){k(q())});
w.addEventListener("close",function(){eh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return x["return"](q())})})}
function Ih(a,b){b=void 0===b?{}:b;return wb(this,function d(){var e,f,g;return va(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,mh(e),0)})})}
;var Jh=Pb||Qb;function Kh(a){var b=H;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Lh(a){this.name="YtIdbMeta";this.options=a;this.j=!1}
function Mh(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Hh(a,b,c)}
Lh.prototype["delete"]=function(a){a=void 0===a?{}:a;return Ih(this.name,a)};
Lh.prototype.open=function(){var a=this;if(!this.i){var b,c=function(){a.i===b&&(a.i=void 0)},d={blocking:function(f){f.close()},
closed:c,Fa:c,upgrade:this.options.upgrade},e=function(){return wb(a,function g(){var h=this,k,l,m;return va(g,function(n){switch(n.i){case 1:return n.o=2,z(n,Mh(h.name,h.options.version,d),4);case 4:k=n.A;if(!Ob){n.i=5;break}a:{var p=u(Object.keys(h.options.Ea));for(var q=p.next();!q.done;q=p.next())if(q=q.value,!k.i.objectStoreNames.contains(q)){p=q;break a}p=void 0}l=p;if(void 0===l){n.i=5;break}if(!Ob||h.j){n.i=7;break}h.j=!0;return z(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new sh(l);
case 5:return n["return"](k);case 2:m=pa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](Mh(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.i=b=e()}return this.i};var Nh=new Lh({Ea:{databases:!0},upgrade:function(a,b){1>b&&a.i.createObjectStore("databases",{keyPath:"actualName"})}});
function Oh(a){return wb(this,function c(){var d;return va(c,function(e){if(1==e.i)return z(e,Nh.open(),2);d=e.A;return e["return"](uh(d,["databases"],"readwrite",function(f){var g=vh(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return X(g.i.put(a,void 0)).then(function(){})})}))})})}
function Ph(){return wb(this,function b(){var c;return va(b,function(d){if(1==d.i)return z(d,Nh.open(),2);c=d.A;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new Q;var Qh;
function Rh(){return wb(this,function b(){var c,d;return va(b,function(e){switch(e.i){case 1:var f;if(f=Jh)f=/WebKit\/([0-9]+)/.exec(H),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(H),f=!(f&&602<=parseInt(f[1],10)));if(f&&!T("ytidb_allow_on_ios_safari_v8_and_v9")||Ab)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.o=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(e,Oh(d),4);case 4:return z(e,Ph(),5);case 5:return e["return"](!0);case 2:return pa(e),e["return"](!1)}})})}
function Sh(){if(void 0!==Qh)return Qh;dh=!0;return Qh=Rh().then(function(a){dh=!1;return a})}
;var Th;function Uh(){Th||(Th=new Tg("yt.offline"));return Th}
;function Vh(){Q.call(this);this.C=this.D=this.j=!1;this.o=Wh();Xh(this);Yh(this)}
v(Vh,Q);function Wh(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Yh(a){window.addEventListener("online",function(){a.o=!0;a.j&&a.dispatchEvent("ytnetworkstatus-online");Zh(a);if(a.C&&T("offline_error_handling")){var b=Uh().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Y(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;If(d)}Uh().set("errors",{},2592E3,!0)}}})}
function Xh(a){window.addEventListener("offline",function(){a.o=!1;a.j&&a.dispatchEvent("ytnetworkstatus-offline");Zh(a)})}
function Zh(a){a.D&&(Jf(new Y("NetworkStatusManager state did not match poll",U()-0)),a.D=!1)}
;function $h(a){a=void 0===a?{}:a;Q.call(this);var b=this;this.o=this.D=0;Vh.i||(Vh.i=new Vh);this.j=Vh.i;this.j.j=!0;a.Da&&(this.j.C=!0);a.X?(this.X=a.X,$d(this.j,"ytnetworkstatus-online",function(){ai(b,"publicytnetworkstatus-online")}),$d(this.j,"ytnetworkstatus-offline",function(){ai(b,"publicytnetworkstatus-offline")})):($d(this.j,"ytnetworkstatus-online",function(){b.dispatchEvent("publicytnetworkstatus-online")}),$d(this.j,"ytnetworkstatus-offline",function(){b.dispatchEvent("publicytnetworkstatus-offline")}))}
v($h,Q);function ai(a,b){a.X?a.o?(Yf(a.D),a.D=Vf(function(){a.C!==b&&(a.dispatchEvent(b),a.C=b,a.o=U())},a.X-(U()-a.o))):(a.dispatchEvent(b),a.C=b,a.o=U()):a.dispatchEvent(b)}
;var bi;function ci(a,b){b=void 0===b?{}:b;Sh().then(function(){bi||(bi=new $h({Da:!0}));bi.j.o!==Wh()&&Jf(new Y("NetworkStatusManager isOnline does not match window status"));Kg(a,b)})}
function di(a,b){b=void 0===b?{}:b;Sh().then(function(){Kg(a,b)})}
;function ei(a){var b=this;this.i=null;a?this.i=a:Qg()&&(this.i=sg());Wf(function(){Yg(b)},0,5E3)}
ei.prototype.isReady=function(){!this.i&&Qg()&&(this.i=sg());return!!this.i};
function vg(a,b,c,d){!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jf(new Y("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Y("innertube xhrclient not ready",b,c,d);If(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",G:c,ja:"JSON",W:function(){d.W()},
ia:d.W,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
ha:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
eb:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.i.za)&&(g=e);var h=a.i.Ba||!1,k=Rg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.i.innertubeApiVersion+"/"+b;var l={alt:"json"};a.i.Aa&&f.headers.Authorization||(l.key=a.i.innertubeApiKey);var m=Nf(""+g+e,l||{},!0);Sh().then(function(n){if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(T("networkless_gel")&&!n||!T("networkless_gel"))var p=Wg(b,
c,k,h);if(p){var q=f.onSuccess,w=f.ha;f.onSuccess=function(x,y){Xg(p);q(x,y)};
c.ha=function(x,y){Xg(p);w(x,y)}}}try{T("use_fetch_for_op_xhr")?Hg(m,f):T("networkless_gel")&&d.retry?(f.method="POST",!d.Ha&&T("nwl_send_fast_on_unload")?di(m,f):ci(m,f)):(f.method="POST",f.G||(f.G={}),Kg(m,f))}catch(x){if("InvalidAccessError"==x.name)p&&(Xg(p),p=0),Jf(Error("An extension is blocking network request."));
else throw x;}p&&Wf(function(){Yg(a)},0,5E3)})}
;function fi(a,b,c){c=void 0===c?{}:c;var d=ei;S("ytLoggingEventsDefaultDisabled",!1)&&ei==ei&&(d=null);xg(a,b,d,c)}
;var gi=Date.now().toString();
function hi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(gi)for(a=1,b=0;b<gi.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^gi.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ii=B.ytLoggingDocDocumentNonce_||hi();D("ytLoggingDocDocumentNonce_",ii);function ji(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function ki(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
D("yt_logging_screen.getRootVeType",function(a){return S(ki(void 0===a?0:a),void 0)});
function li(){var a=S("csn-to-ctt-auth-info");a||(a={},Ef("csn-to-ctt-auth-info",a));return a}
function mi(a){a=void 0===a?0:a;var b=S(ji(a));if(!b&&!S("USE_CSN_FALLBACK",!0))return null;b||0!=a||(T("kevlar_client_side_screens")||T("c3_client_side_screens")?b="UNDEFINED_CSN":b=S("EVENT_ID"));return b?b:null}
D("yt_logging_screen.getCurrentCsn",mi);function ni(a,b,c){var d=li();(c=mi(c))&&delete d[c];b&&(d[a]=b)}
D("yt_logging_screen.getCttAuthInfo",function(a){return li()[a]});
D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==S(ji(c))||b!==S(ki(c)))if(ni(a,d,c),Ef(ji(c),a),Ef(ki(c),b),0==c||T("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&xg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ii,clientScreenNonce:a},ei)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});var oi=[{ga:function(a){return"Cannot read property '"+a.key+"'"},
ba:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ga:function(a){return"Cannot call '"+a.key+"'"},
ba:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function pi(){this.i=[];this.j=[]}
var qi;var ri=new R;function si(a,b,c,d){c+="."+a;a=ti(b);d[c]=a;return c.length+a.length}
function ti(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var ui=new Set,vi=0,wi=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];
function xi(a){var b=void 0===b?{}:b;b.name=S("INNERTUBE_CONTEXT_CLIENT_NAME",1);b.version=S("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var c=b||{};b="WARNING";b=void 0===b?"ERROR":b;var d=void 0===d?!1:d;if(a){if(T("console_log_js_exceptions")){var e=[];e.push("Name: "+a.name);e.push("Message: "+a.message);a.hasOwnProperty("params")&&e.push("Error Params: "+JSON.stringify(a.params));e.push("File name: "+a.fileName);e.push("Stacktrace: "+a.stack);window.console.log(e.join("\n"),a)}if((!T("web_yterr_killswitch")||
window&&window.yterr||d)&&!(5<=vi)&&0!==a.sampleWeight){var f=Tb(a);d=f.message||"Unknown Error";e=f.name||"UnknownError";var g=f.stack||a.i||"Not available";if(T("kevlar_js_fixes")&&g.startsWith(e+": "+d)){var h=g.split("\n");h.shift();g=h.join("\n")}h=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],n="params."+l;k+=n.length;if(m)if(Array.isArray(m))for(var p=c,q=0;q<m.length&&!(m[q]&&
(k+=si(q,m[q],n,p),500<k));q++);else if("object"===typeof m)for(p in p=void 0,q=c,m){if(m[p]&&(k+=si(p,m[p],n,q),500<k))break}else c[n]=ti(m),k+=c[n].length;else c[n]=ti(m),k+=c[n].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in n=0,m){if(m[l]&&(k="params."+l,p=ti(m[l]),c[k]=p,n+=k.length+p.length,500<n))break}else c.params=ti(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:d,name:e,lineNumber:h,
fileName:f,stack:g,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(oi);for(d=a.next();!d.done;d=a.next())if(d=d.value,d.ba[c.name])for(h=u(d.ba[c.name]),e=h.next();!e.done;e=h.next())if(f=e.value,e=c.message.match(f.regexp)){c.params["error.original"]=e[0];h=f.groups;f={};for(g=0;g<h.length;g++)f[h[g]]=e[g+1],c.params["error."+h[g]]=e[g+1];c.message=d.ga(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(ui.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||
0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?ri.T("handleError",c):"WARNING"===b&&ri.T("handleWarning",c);if(T("kevlar_gel_error_routing")){a=b;a:{d=u(wi);for(e=d.next();!e.done;e=d.next())if(Kh(e.value.toLowerCase())){d=!0;break a}d=!1}if(!d){e={stackTrace:c.stack};c.fileName&&(e.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=
Number(d[1])):e.lineNumber=Number(d[0]));qi||(qi=new pi);d=qi;h=c.message;f=c.name;a:{g=u(d.j);for(l=g.next();!l.done;l=g.next())if(l=l.value,c.message&&c.message.match(l.i)){g=l.weight;break a}g=u(d.i);for(l=g.next();!l.done;l=g.next())if(l=l.value,l.callback(c)){g=l.weight;break a}g=1}h={level:"ERROR_LEVEL_UNKNOWN",message:h,errorClassName:f,sampleWeight:g};"ERROR"===a?h.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(h.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href};
S("FEXP_EXPERIMENTS")&&(e.experimentIds=S("FEXP_EXPERIMENTS"));e.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+d.j.length+"&cb="+d.i.length},{key:"client.params.serviceWorker",value:"false"}];if(d=c.params)for(f=u(Object.keys(d)),g=f.next();!g.done;g=f.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(d[g])});d=S("SERVER_NAME",void 0);f=S("SERVER_VERSION",void 0);d&&f&&(e.kvPairs.push({key:"server.name",value:d}),e.kvPairs.push({key:"server.version",value:f}));fi("clientError",
{errorMetadata:e,stackTrace:a,logMessage:h});og()}}if(!T("suppress_error_204_logging")){a=c.params||{};b={Ga:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},G:{url:S("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.G){c.stack&&(b.G.stack=c.stack);d=u(Object.keys(a));for(e=d.next();!e.done;e=d.next())e=e.value,b.G["client."+e]=a[e];if(a=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(d=u(Object.keys(a)),e=d.next();!e.done;e=d.next())e=e.value,b.G[e]=a[e];a=S("SERVER_NAME",void 0);d=S("SERVER_VERSION",void 0);a&&d&&(b.G["server.name"]=a,b.G["server.version"]=d)}Kg(S("ECATCHER_REPORT_HOST","")+"/error_204",b)}ui.add(c.message);vi++}}}}
;function yi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!zi(a)||c.some(function(e){return!zi(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Ai(a,d.value);return a}
function Ai(a,b){for(var c in b)if(zi(b[c])){if(c in a&&!zi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ai(a[c],b[c])}else if(Bi(b[c])){if(c in a&&!Bi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ci(a[c],b[c])}else a[c]=b[c];return a}
function Ci(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,zi(d)?a.push(Ai({},d)):Bi(d)?a.push(Ci([],d)):a.push(d);return a}
function zi(a){return"object"===typeof a&&!Array.isArray(a)}
function Bi(a){return"object"===typeof a&&Array.isArray(a)}
;var Di={},Ei=0;
function Fi(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Kh("cobalt")){if(a){a instanceof G||(a="object"==typeof a&&a.V?a.S():String(a),ib.test(a)?a=new G(a,fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(hb))&&gb.test(b[1])?new G(a,fb):null));a=a||jb;a instanceof G&&a.constructor===G?a=a.l:(Aa(a),a="type_error:SafeUrl");if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof mb)){b="object"==typeof a;var f=null;b&&a.j&&(f=a.i());a=ob(Wa(b&&a.V?a.S():String(a)),f)}a instanceof
mb&&a.constructor===mb?a=a.l:(Aa(a),a="type_error:SafeHtml");a=encodeURIComponent(String(gf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=cc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Lg(a,b,"POST",e,d);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Lg(a,b,"GET","",d);else{b:{try{var g=new Ja({url:a});if(g.l&&g.j||g.o){var h=rb(a.match(qb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=
a.search(vb);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var p=c;break d}}c+=3}p=-1}if(0>p)var q=null;else{var w=a.indexOf("&",p);if(0>w||w>l)w=l;p+=3;q=decodeURIComponent(a.substr(p,w-p).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(x){}f=!1}f?Gi(a)?(b&&b(),f=!0):f=!1:f=!1;f||Hi(a,b)}}
function Gi(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Hi(a,b){var c=new Image,d=""+Ei++;Di[d]=c;c.onload=c.onerror=function(){b&&Di[d]&&b();delete Di[d]};
c.src=a}
;function Ii(a,b){Zg.call(this,1,arguments)}
v(Ii,Zg);function Ji(a,b){Zg.call(this,1,arguments)}
v(Ji,Zg);var Ki=new $g("aft-recorded"),Li=new $g("timing-sent");var Mi=window;function Ni(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Oi=Mi.performance||Mi.mozPerformance||Mi.msPerformance||Mi.webkitPerformance||new Ni;var Pi=!1;Fa(Oi.clearResourceTimings||Oi.webkitClearResourceTimings||Oi.mozClearResourceTimings||Oi.msClearResourceTimings||Oi.oClearResourceTimings||za,Oi);function Qi(a){var b=Ri(a);if(b.aft)return b.aft;a=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Si(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ti(a){a=Si(a);a.info||(a.info={});return a.info}
function Ri(a){a=Si(a);a.tick||(a.tick={});return a.tick}
function Ui(a){var b=Si(a).nonce;b||(b=hi(),Si(a).nonce=b);return b}
function Vi(a){var b=Ri(a||""),c=Qi(a);c&&!Pi&&(bh(Ki,new Ii(Math.round(c-b._start),a)),Pi=!0)}
;function Wi(){var a=C("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Xi(a){a=a||"";var b=C("ytcsi.reference");b||(Wi(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=Wi(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Yi=B.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Yi);function Zi(){this.i=0}
function $i(){Zi.i||(Zi.i=new Zi);return Zi.i}
Zi.prototype.tick=function(a,b,c){aj(this,"tick_"+a+"_"+b)||fi("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Zi.prototype.info=function(a,b){var c=Object.keys(a).join("");aj(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,fi("latencyActionInfo",c))};
Zi.prototype.span=function(a,b){var c=Object.keys(a).join("");aj(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,fi("latencyActionSpan",a))};
function aj(a,b){Yi[b]=Yi[b]||{count:0};var c=Yi[b];c.count++;c.time=U();a.i||(a.i=Wf(function(){var d=U(),e;for(e in Yi)Yi[e]&&6E4<d-Yi[e].time&&delete Yi[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Y("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||xi(c)),!0):!1}
;var Z={},bj=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),cj="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),dj={},ej=(dj.ccs="CANARY_STATE_",
dj.mver="MEASUREMENT_VERSION_",dj.pis="PLAYER_INITIALIZED_STATE_",dj.yt_pt="LATENCY_PLAYER_",dj.pa="LATENCY_ACTION_",dj.yt_vst="VIDEO_STREAM_TYPE_",dj),fj="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function gj(a){return!!S("FORCE_CSI_ON_GEL",!1)||T("csi_on_gel")||!!Si(a).useGel}
function hj(a){a=Si(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function ij(a,b,c){if(null!==b)if(Ti(c)[a]=b,gj(c)){var d=b;b=hj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in bj){b=bj[a];0<=Ka(cj,b)&&(d=!!d);a in ej&&"string"===typeof d&&(d=ej[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=yi({},e)}else 0<=Ka(fj,a)||xi(new Y("Unknown label logged with GEL CSI",
a)),f=void 0;f&&gj(c)&&(b=Xi(c||""),yi(b.info,f),b=hj(c),"gelInfos"in b||(b.gelInfos={}),yi(b.gelInfos,f),c=Ui(c),$i().info(f,c))}else Xi(c||"").info[a]=b}
function jj(a,b,c){var d=Ri(c);if(T("use_first_tick")&&kj(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Oi.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Oi.mark(e))}e=b||U();d[a]=e;e=hj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||U();if(gj(c)){Xi(c||"").tick[a]=b||U();e=Ui(c);if("_start"===a){var f=$i();aj(f,"baseline_"+e)||fi("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else $i().tick(a,e,b);Vi(c);e=!0}else e=!1;if(!e){if(!C("yt.timing."+(c||"")+"pingSent_")&&
(f=S((c||"")+"TIMING_ACTION",void 0),e=Ri(c),C("ytglobal.timing"+(c||"")+"ready_")&&f&&kj("_start")&&Qi(c)))if(Vi(c),c)lj(c);else{f=!0;var g=S("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&lj(c)}Xi(c||"").tick[a]=b||U()}return d[a]}
function kj(a,b){var c=Ri(b);return a in c}
function lj(a){if(!gj(a)){var b=Ri(a),c=Ti(a),d=b._start,e=S("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:S((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Qi(a);var h=Ri(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Ti(a).yt_pvis&&"youtube"===e&&(ij("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=U();m={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),m[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;T("debug_csi_data")&&(c=C("yt.timing.csiData"),c||(c=[],D("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var p in f)f.hasOwnProperty(p)&&(c+="&"+p+"="+f[p]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;Gi(f,q)||Fi(f,void 0,void 0,void 0,q)}else Fi(f);D("yt.timing."+(a||"")+"pingSent_",!0);bh(Li,new Ji(m.aft+(Number(g)||0),a))}}
var mj=window;mj.ytcsi&&(mj.ytcsi.info=ij,mj.ytcsi.tick=jj);new Pe(nj,1E3);function nj(){jj("vptl",0);jj("vpl",0)}
;function oj(a){try{a.register("msg-hovercard-subscription",pj,Pf())}catch(b){}}
function pj(a){if(a){a=!!a.isSubscribed;var b=document.getElementById("yt-subscribe-card");a?ff(b,"subscribe"):ef(b,"subscribe");a?ef(b,"subscribed"):ff(b,"subscribed")}}
;function qj(){var a=document.getElementById("yt-subscribe-card");b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=yc(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=yc(a);b.display=
c;b.position=e;b.visibility=d}a={width:a.width,height:a.height};Of().ready(a,null,void 0);a=Pf();Of().addOnOpenerHandler(oj,null,a)}
var rj=qj;rj=void 0===rj?{}:rj;"function"===typeof rj&&(rj={callback:rj});qj=rj;if(qj.gapiHintOverride||S("GAPI_HINT_OVERRIDE")){var sj;var tj=document.location.href;if(-1!=tj.indexOf("?")){tj=(tj||"").split("#")[0];var uj=tj.split("?",2);sj=Mf(1<uj.length?uj[1]:uj[0])}else sj={};var vj=sj.gapi_jsh;vj&&Ta(qj,{_c:{jsl:{h:vj}}})}sd("gapi.iframes:gapi.iframes.style.common",qj);}).call(this);
