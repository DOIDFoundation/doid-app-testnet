if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const d=e=>a(e,r),c={module:{uri:r},exports:n,require:d};s[r]=Promise.all(i.map((e=>c[e]||d(e)))).then((e=>(l(...e),n)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f5b091f54dd675f3346f46030aa41862"},{url:"assets/doid-symbol-e6254a38.js",revision:"a600875cdeb3a86226e150a8576723d7"},{url:"assets/doid-symbol-legacy.686c5a4b.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-131afdca.js",revision:"735ebbfdaee684389f92789641baef36"},{url:"assets/index-26c4874a.js",revision:"6acb3ebe9461aceaefd270b3b9348abe"},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-5b049b88.js",revision:"5d369fe9862f20c8987e98feb63c983c"},{url:"assets/index-6215b3bb.js",revision:"70c4e744b16afa45e5017f948adfa336"},{url:"assets/index-6e29754d.js",revision:"3040cf24158a9aceac9326a19d6e5973"},{url:"assets/index-98013fcd.js",revision:"f84ba827d58726c6bc2fe931a94374ad"},{url:"assets/index-991bbe8f.js",revision:"70098f35d96c94bb8a0e7b8ae136516e"},{url:"assets/index-a72654d5.js",revision:"631aafbfa76c9ea9153e442890f79b20"},{url:"assets/index-e1c303c9.js",revision:"d89c1ca652dba06afb368fc5e9ca1834"},{url:"assets/index-f045e6d9.js",revision:"cc83adf53f9a34cb5039c77c6b475ee4"},{url:"assets/index-legacy.02f0908f.js",revision:null},{url:"assets/index-legacy.049fe797.js",revision:null},{url:"assets/index-legacy.1809ada5.js",revision:null},{url:"assets/index-legacy.5c0e1807.js",revision:null},{url:"assets/index-legacy.89fe0a5c.js",revision:null},{url:"assets/index-legacy.90e4509a.js",revision:null},{url:"assets/index-legacy.a6e8c661.js",revision:null},{url:"assets/index-legacy.b4ef5449.js",revision:null},{url:"assets/index-legacy.c30e37a5.js",revision:null},{url:"assets/index-legacy.ffea80f4.js",revision:null},{url:"assets/index.umd-347f9194.js",revision:"463d6d213703a125a3dd69aa49001184"},{url:"assets/index.umd-legacy.e9ae619d.js",revision:null},{url:"assets/list-a42d4092.js",revision:"700c5ba78a898782fdb67387569bfaca"},{url:"assets/list-legacy.a689f490.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.024e4cb7.js",revision:null},{url:"assets/Resolver-4b5654b6.js",revision:"0e9bf4b92859b8d0677d198e147577dd"},{url:"assets/Resolver-legacy.716f46bb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-dd2d0584.js",revision:"850ec3aeb5ed633f78de7037532bc193"},{url:"assets/vendor-legacy.25bbea8c.js",revision:null},{url:"index.html",revision:"f5b091f54dd675f3346f46030aa41862"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"acb17672abf0138b9efef4cdb4607236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
