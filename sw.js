if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const n=e=>i(e,a),d={module:{uri:a},exports:c,require:n};s[a]=Promise.all(l.map((e=>d[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"756043083f9c7982cffa04ccc3367ff1"},{url:"assets/doid-symbol-999e3a20.js",revision:"52a0403534bfaf39b353df75ab34fa9a"},{url:"assets/doid-symbol-legacy.2f489d1d.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-4d65f37a.js",revision:"98847c68f1bfa0b9be009ce1bf96a746"},{url:"assets/index-512b8220.js",revision:"0faa7063192313c6693960854c4feaab"},{url:"assets/index-647b2479.js",revision:"3566eae633b08b37e53b915eb5d3ccae"},{url:"assets/index-83871445.js",revision:"7f03861905a18ff002527be28ab7f663"},{url:"assets/index-c7b6dc8e.js",revision:"4704cde31a3f27fb7377a39df1837095"},{url:"assets/index-e3420ce6.js",revision:"75e66138bc19b5eadfcc4f0b82a8c2ee"},{url:"assets/index-f8e8611f.js",revision:"f9d343443bcf594ac593f150557de0cd"},{url:"assets/index-legacy.0b8ed55f.js",revision:null},{url:"assets/index-legacy.77ac4da2.js",revision:null},{url:"assets/index-legacy.7f380322.js",revision:null},{url:"assets/index-legacy.835dac74.js",revision:null},{url:"assets/index-legacy.a47f8303.js",revision:null},{url:"assets/index-legacy.d0fa7985.js",revision:null},{url:"assets/index-legacy.fade374d.js",revision:null},{url:"assets/list-4abe60f2.js",revision:"25fb0f7c75dec9a405506bb24bc3c51c"},{url:"assets/list-legacy.66a8b791.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.375c5420.js",revision:null},{url:"assets/Resolver-826238cb.js",revision:"d0ec5f8ae5beb53684dbfc2c2f7dcebb"},{url:"assets/Resolver-legacy.fd6178ca.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-3b8086e8.js",revision:"037e3c60cbf5808f81cded781b263161"},{url:"assets/vendor-legacy.0fa2a4d9.js",revision:null},{url:"index.html",revision:"756043083f9c7982cffa04ccc3367ff1"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"acb17672abf0138b9efef4cdb4607236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
