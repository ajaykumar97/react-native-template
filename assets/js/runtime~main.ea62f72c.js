(()=>{"use strict";var e,t,r,o,n,a={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return a[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=a,f.c=c,e=[],f.O=(t,r,o,n)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],n=e[s][2];for(var c=!0,i=0;i<r.length;i++)(!1&n||a>=n)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(c=!1,n<a&&(a=n));if(c){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,f.d(n,a),n},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",162:"d589d3a7",173:"d167c9fe",195:"c4f5d8e4",414:"393be207",514:"1be78505",516:"a5f93cd8",592:"common",599:"e833177e",918:"17896441"}[e]||e)+"."+{53:"d1edc687",85:"55e6ef7a",162:"2fc0b8ff",173:"a41f6225",195:"e8097e42",414:"90c32b60",514:"d591cc98",516:"911fcd82",592:"ce3b74b1",599:"64c2ed9a",608:"7a1dfb64",918:"62b9449c",933:"74580eb2"}[e]+".js",f.miniCssF=e=>"assets/css/styles.670ddddb.css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="docs:",f.l=(e,t,r,a)=>{if(o[e])o[e].push(t);else{var c,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+r){c=l;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",n+r),c.src=e),o[e]=[t];var u=(t,r)=>{c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),i&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/react-native-template/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85",d589d3a7:"162",d167c9fe:"173",c4f5d8e4:"195","393be207":"414","1be78505":"514",a5f93cd8:"516",common:"592",e833177e:"599"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=f.p+f.u(t),c=new Error;f.l(a,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,a=r[0],c=r[1],i=r[2],d=0;if(a.some((t=>0!==e[t]))){for(o in c)f.o(c,o)&&(f.m[o]=c[o]);if(i)var s=i(f)}for(t&&t(r);d<a.length;d++)n=a[d],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(s)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();