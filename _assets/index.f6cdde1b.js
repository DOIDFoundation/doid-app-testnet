import{T as l,e as d}from"./index.754fcb64.js";import"./doid-symbol.25ec4d57.js";import{y as p,e as c}from"./vendor.8aefb782.js";const m="";var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,u=(s,r,t,a)=>{for(var e=a>1?void 0:a?v(r,t):r,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&h(r,t,e),e};let i=class extends l(m){constructor(){super(...arguments),this.goto=s=>{d.emit("router-goto",`/search/${s.detail}`)}}render(){return p`<div class="home"><div class="dui-container"><doid-symbol><span slot="h1">Your Decentralized OpenID</span><p slot="msg">Safer, faster and easier entrance to chains, contacts and dApps</p></doid-symbol><div class="max-w-xl mx-auto"><dui-ns-search @search="${this.goto}" placeholder="Search name or addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search></div></div></div>`}};i=u([c("view-home")],i);export{i as ViewHome};
