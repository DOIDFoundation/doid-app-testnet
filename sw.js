if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let d={};const c=e=>i(e,a),n={module:{uri:a},exports:d,require:c};s[a]=Promise.all(l.map((e=>n[e]||c(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b0bb8ef9ea4006416993a2980296f08d"},{url:"assets/doid-symbol-61f3eae2.js",revision:"a592e5de6f36a06c5b0fa22dde26c1a2"},{url:"assets/doid-symbol-legacy.c9754668.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-0a2e175e.js",revision:"b630ae76fb91f3a7f01a1d76beaf63f9"},{url:"assets/index-212ab152.js",revision:"a4a7db29aa2b30a3e3156c35317c61ab"},{url:"assets/index-2383ee0a.js",revision:"b845e083a05c021df6ca54ad6eefceef"},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-378f852a.js",revision:"c76df5996128fd1cf7b7d3f0540cd041"},{url:"assets/index-6d352f3b.js",revision:"240d6970d9ccd6a396983513d2170680"},{url:"assets/index-a070d2fd.js",revision:"0d8e7d34b85d68f3d61cae23ee05e72b"},{url:"assets/index-a30266e0.js",revision:"f64b998a0dc811b2edcbcc0f38eb6b2f"},{url:"assets/index-legacy.50c9a04e.js",revision:null},{url:"assets/index-legacy.64fbc1e4.js",revision:null},{url:"assets/index-legacy.819c6860.js",revision:null},{url:"assets/index-legacy.d3d08533.js",revision:null},{url:"assets/index-legacy.e2b92af0.js",revision:null},{url:"assets/index-legacy.e7fbf161.js",revision:null},{url:"assets/index-legacy.f0447d0b.js",revision:null},{url:"assets/list-880f6485.js",revision:"cccc663248f9b9380ba403f540c8550b"},{url:"assets/list-legacy.a6ff5ca2.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.375c5420.js",revision:null},{url:"assets/Resolver-4b5654b6.js",revision:"0e9bf4b92859b8d0677d198e147577dd"},{url:"assets/Resolver-legacy.716f46bb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-cc8c6684.js",revision:"3df51a1fc22a31ce2673266502efd73b"},{url:"assets/vendor-legacy.69b4e889.js",revision:null},{url:"index.html",revision:"b0bb8ef9ea4006416993a2980296f08d"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"acb17672abf0138b9efef4cdb4607236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
