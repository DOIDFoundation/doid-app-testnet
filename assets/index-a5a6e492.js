import{T as l,g as n}from"./index-5ec1b972.js";import"./doid-symbol-c6cad4af.js";import{y as d,e as p}from"./vendor-dd2d0584.js";const m="";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(s,r,t,a)=>{for(var e=a>1?void 0:a?u(r,t):r,o=s.length-1,i;o>=0;o--)(i=s[o])&&(e=(a?i(r,t,e):i(e))||e);return a&&e&&h(r,t,e),e};let c=class extends l(m){constructor(){super(...arguments),this.goto=s=>{n(`/search/${s.detail}`)}}render(){return d`<div class="home"><p class="my-4 text-center"><dui-link class="ml-1" href="https://lockpass.doid.tech/passes">Click here to claim your locked names</dui-link></p><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg" class="my-2">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search DOID names"></dui-ns-search></div></div></div>`}};c=v([p("view-home")],c);export{c as ViewHome};
