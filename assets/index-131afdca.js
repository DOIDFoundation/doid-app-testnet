import{T as n,g as l}from"./index-6e29754d.js";import"./doid-symbol-e6254a38.js";import{y as d,e as p}from"./vendor-dd2d0584.js";const m="";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(s,r,a,o)=>{for(var e=o>1?void 0:o?u(r,a):r,t=s.length-1,i;t>=0;t--)(i=s[t])&&(e=(o?i(r,a,e):i(e))||e);return o&&e&&h(r,a,e),e};let c=class extends n(m){constructor(){super(...arguments),this.goto=s=>{l(`/search/${s.detail}`)}}render(){return d`<div class="home"><p class="my-4 text-center">If you have locked a name with lockpass before, click <dui-link href="https://lockpass.doid.tech/passes">here</dui-link> to redeem your DOID.</p><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search DOID names"></dui-ns-search></div></div></div>`}};c=v([p("view-home")],c);export{c as ViewHome};
