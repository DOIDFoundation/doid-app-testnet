System.register(["./index-legacy.df1f546a.js","./doid-symbol-legacy.ba0e1b56.js","./vendor-legacy.25bbea8c.js"],(function(e,s){"use strict";var t,r,a,i;return{setters:[e=>{t=e.T,r=e.g},null,e=>{a=e.y,i=e.e}],execute:function(){var s=Object.defineProperty,c=Object.getOwnPropertyDescriptor;let o=e("ViewHome",class extends(t("")){constructor(){super(...arguments),this.goto=e=>{r(`/search/${e.detail}`)}}render(){return a`<div class="home"><p class="my-4 text-center"><dui-link class="ml-1" href="https://lockpass.doid.tech/passes">Click here to claim your locked names</dui-link></p><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search DOID names"></dui-ns-search></div></div></div>`}});e("ViewHome",o=((e,t,r,a)=>{for(var i,o=a>1?void 0:a?c(t,r):t,n=e.length-1;n>=0;n--)(i=e[n])&&(o=(a?i(t,r,o):i(o))||o);return a&&o&&s(t,r,o),o})([i("view-home")],o))}}}));
