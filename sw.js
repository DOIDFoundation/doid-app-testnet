if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,l)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let n={};const r=e=>i(e,d),c={module:{uri:d},exports:n,require:r};s[d]=Promise.all(a.map((e=>c[e]||r(e)))).then((e=>(l(...e),n)))}}define(["./workbox-d2983725"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"5648da75d5db4bc165faf8fedc29bf7c"},{url:"assets/doid-symbol-23db9cd0.js",revision:"12a60264764f2a4e8ddf3e1cabb224c7"},{url:"assets/doid-symbol-85c4d290.js",revision:"d583de3e2683f83543fe7bf8015dd0df"},{url:"assets/doid-symbol-99ec7a74.js",revision:"ab4fae6704afe10fee566bde9f215c34"},{url:"assets/doid-symbol-b4fb6f8f.js",revision:"fa2eb44c53990a988fac6c682e89b30e"},{url:"assets/doid-symbol-c2940204.js",revision:"b2d1f56a5113dd6ae62f74e82f1eedbe"},{url:"assets/doid-symbol-legacy.49b4c8fc.js",revision:null},{url:"assets/doid-symbol-legacy.4d1e261f.js",revision:null},{url:"assets/doid-symbol-legacy.586e3c54.js",revision:null},{url:"assets/doid-symbol-legacy.a8b0eb62.js",revision:null},{url:"assets/doid-symbol-legacy.ce5f0c23.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:"b01607ebc12cbdbd3a40882d0959a4d8"},{url:"assets/Erc1155-legacy.af2590d4.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:"0ece22c05ff262c21507d53b414b5781"},{url:"assets/Erc721-legacy.df326043.js",revision:null},{url:"assets/index-09a90b25.js",revision:"ea84dac3558bb39b8af7c2ac6acf97e2"},{url:"assets/index-0ad464a7.js",revision:"6158db35ccc80a13695282fcec1cec92"},{url:"assets/index-19f07381.js",revision:"c7698b40e34548526d1cfcd4e6bf16ac"},{url:"assets/index-1d812629.js",revision:"076e700e7977f7b966df250997ecb217"},{url:"assets/index-1f7c80e2.js",revision:"fc5905b69774db84ac7efb06e29efd0f"},{url:"assets/index-29800d26.js",revision:"90ca34b139d663cdf7aa17eb680466fe"},{url:"assets/index-2aa52b4e.css",revision:"969d8aeb1c802ec5e05b9d623a9fb5fd"},{url:"assets/index-2b2122a3.js",revision:"8fc8f402afee70b0d0dbbacf1b5b4475"},{url:"assets/index-3435d869.js",revision:"b263adcc5bdd14879cf7d8405b088683"},{url:"assets/index-3496180d.js",revision:"57128e9a52ebdbd39f0722df0dec74bb"},{url:"assets/index-38b1f274.js",revision:"d038ab5d8c3bf4071b2d48d0e83a0eec"},{url:"assets/index-3cd365b3.js",revision:"1846817df75091ca8481da9b5e9cddec"},{url:"assets/index-3cec2fec.js",revision:"d6eeeb925a3d291612a3a5313de426d0"},{url:"assets/index-45700e12.js",revision:"283afdb11555370e8d27c0dfe06ae01b"},{url:"assets/index-4defa9dd.js",revision:"991de9f497f3e071034c1abc2fcb1f26"},{url:"assets/index-4ed5fb49.js",revision:"231f9684a1b288bebb6e73ec2cada43b"},{url:"assets/index-4ffc99a8.js",revision:"da97281258a34a494e0ad476b8dbdc4b"},{url:"assets/index-528afaff.js",revision:"a607980e7f6a62215b8ce6f28c1b5d06"},{url:"assets/index-5b049b88.js",revision:"5d369fe9862f20c8987e98feb63c983c"},{url:"assets/index-7f48263d.js",revision:"1a0ab2b21d4d768e0fbe819d49fbedb3"},{url:"assets/index-836520a0.js",revision:"a8d036174683c8d791e759febcd5c289"},{url:"assets/index-8bf6d720.js",revision:"6afa833a24e2ae20a6b87ed95a5a48b4"},{url:"assets/index-a7e8af1a.js",revision:"e847bb055f3f8420c90eacf2073f3415"},{url:"assets/index-ab559d5e.js",revision:"d7b46a2ec25b139b8e23f56a92102d2c"},{url:"assets/index-b2c0327c.js",revision:"cefbbf6b13e0874064f7c826a3deb3c1"},{url:"assets/index-b90b61ea.js",revision:"be062fbc4bd2ea5b709fa12abacab014"},{url:"assets/index-c86f3bd2.js",revision:"83037887a1e5ee966877322e9ee9468a"},{url:"assets/index-cfa71dc4.js",revision:"be2703b43f7d2e3c1e894b68bc92dc9c"},{url:"assets/index-d8b7be2e.js",revision:"a839d3af5e5cfb805d63f6fb351a65b7"},{url:"assets/index-ddbab419.js",revision:"e63a4a531728dcd5841e2efb20050b0b"},{url:"assets/index-e735c971.js",revision:"febe52b5c2c5f0506c91ba78125231a6"},{url:"assets/index-eb55aa12.js",revision:"690115653028488193c6550deea9f9be"},{url:"assets/index-edc55b56.js",revision:"7640a7ecfc1cb6b9d8fa7a717814b097"},{url:"assets/index-edf3e85a.js",revision:"a319796652e380219df1af8f03f372e6"},{url:"assets/index-efc6e48e.js",revision:"f5c0032cafc682302e2c33e7cc4ca98a"},{url:"assets/index-f8e31e8e.js",revision:"01236907bd233a693c85acc339fcc06c"},{url:"assets/index-f9c96c93.js",revision:"65f17a54926741d10c939ffe55486c87"},{url:"assets/index-fa0c08ff.js",revision:"f73ad8d1f20bb2a320e0bdf2dcf0fdd9"},{url:"assets/index-legacy.08e45421.js",revision:null},{url:"assets/index-legacy.0ca4f216.js",revision:null},{url:"assets/index-legacy.17bd6c95.js",revision:null},{url:"assets/index-legacy.1b75cda1.js",revision:null},{url:"assets/index-legacy.26c65fb5.js",revision:null},{url:"assets/index-legacy.27d1468b.js",revision:null},{url:"assets/index-legacy.319cfd73.js",revision:null},{url:"assets/index-legacy.3411c2ee.js",revision:null},{url:"assets/index-legacy.3944e245.js",revision:null},{url:"assets/index-legacy.3ab14d3b.js",revision:null},{url:"assets/index-legacy.3cd4d411.js",revision:null},{url:"assets/index-legacy.4168378a.js",revision:null},{url:"assets/index-legacy.44cf9ae6.js",revision:null},{url:"assets/index-legacy.4890ab53.js",revision:null},{url:"assets/index-legacy.5402d218.js",revision:null},{url:"assets/index-legacy.565f6cf8.js",revision:null},{url:"assets/index-legacy.5751bcb6.js",revision:null},{url:"assets/index-legacy.58357abe.js",revision:null},{url:"assets/index-legacy.5adf26c7.js",revision:null},{url:"assets/index-legacy.5ec58ea6.js",revision:null},{url:"assets/index-legacy.7f09341e.js",revision:null},{url:"assets/index-legacy.90305222.js",revision:null},{url:"assets/index-legacy.9178779a.js",revision:null},{url:"assets/index-legacy.91e043c8.js",revision:null},{url:"assets/index-legacy.93c53def.js",revision:null},{url:"assets/index-legacy.9a7eca80.js",revision:null},{url:"assets/index-legacy.9bba3abd.js",revision:null},{url:"assets/index-legacy.a3326b41.js",revision:null},{url:"assets/index-legacy.a6cf13ab.js",revision:null},{url:"assets/index-legacy.a6e8c661.js",revision:null},{url:"assets/index-legacy.c000a5d9.js",revision:null},{url:"assets/index-legacy.d2e00c7e.js",revision:null},{url:"assets/index-legacy.e4944f85.js",revision:null},{url:"assets/index-legacy.f0db26d0.js",revision:null},{url:"assets/index-legacy.f30ae2b3.js",revision:null},{url:"assets/index-legacy.f588b521.js",revision:null},{url:"assets/index-legacy.f9e4dc6d.js",revision:null},{url:"assets/index.umd-a7a63994.js",revision:"7f1022cf3f068fdb51e9d0dc3e1ed181"},{url:"assets/index.umd-legacy.d3b1294f.js",revision:null},{url:"assets/list-04af8da4.js",revision:"4070e274516977fa5eeb9f86d429a648"},{url:"assets/list-08f8cb13.js",revision:"b55dd93e6745dfc444d4f567d1864c14"},{url:"assets/list-65b36841.js",revision:"f9e21793e8b7442fe3cbd930c8871726"},{url:"assets/list-b84a1b8b.js",revision:"d5abe53176f14949881aa456e4e99288"},{url:"assets/list-fbe031e6.js",revision:"af1193a6d73e1351dd5245e419743dc4"},{url:"assets/list-legacy.740c12c1.js",revision:null},{url:"assets/list-legacy.874b13a7.js",revision:null},{url:"assets/list-legacy.a902b677.js",revision:null},{url:"assets/list-legacy.aca6dde6.js",revision:null},{url:"assets/list-legacy.f7dde0d4.js",revision:null},{url:"assets/Locker-8ef30f6f.js",revision:"c8ecd825b6241815171679a3c019fa62"},{url:"assets/Locker-legacy.af9c6a62.js",revision:null},{url:"assets/Locker.codes-d3f42ed5.js",revision:"006e5a4daf6eca87e5671d3f73eed3c6"},{url:"assets/Locker.codes-legacy.d5ca7e1e.js",revision:null},{url:"assets/polyfills-legacy.7e08ed81.js",revision:null},{url:"assets/polyfills-legacy.9b0b1562.js",revision:null},{url:"assets/Resolver-4b5654b6.js",revision:"0e9bf4b92859b8d0677d198e147577dd"},{url:"assets/Resolver-legacy.716f46bb.js",revision:null},{url:"assets/Resolver.codes-ee4f74d3.js",revision:"dfc2119dfa40fdf2d9e1ae364f26be40"},{url:"assets/Resolver.codes-legacy.77c566ca.js",revision:null},{url:"assets/vendor-7fa7464a.js",revision:"8c23be1968acfcfd506e7573c4acc5b0"},{url:"assets/vendor-legacy.b9eb6b11.js",revision:null},{url:"index.html",revision:"5648da75d5db4bc165faf8fedc29bf7c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"acb17672abf0138b9efef4cdb4607236"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
