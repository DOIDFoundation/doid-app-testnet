import{T as v,d as x}from"./index-4d65f37a.js";import{y as r,d as $,f as P,h as d,e as h,n as u,k as I}from"./vendor-3b8086e8.js";const b="doid.favors",f=()=>JSON.parse(localStorage.getItem(b)||"[]"),y=t=>localStorage.setItem(b,JSON.stringify(t)),D=t=>{const s=_(t,!0),o=typeof t=="string"?{name:t}:t;if(!s){const a=f();a.push(o),y(a)}},_=(t,s=!1)=>{const o=f(),a=o.some((e,n)=>{const i=e.name===t;return s&&i&&o.splice(n,1),i});return s&&a&&y(o),a},w=`.favored{color:#f9167f}
`;var j=Object.defineProperty,N=Object.getOwnPropertyDescriptor,g=(t,s,o,a)=>{for(var e=a>1?void 0:a?N(s,o):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(a?i(s,o,e):i(e))||e);return a&&e&&j(s,o,e),e};let m=class extends v(w){constructor(){super(...arguments),this.name="",this.favorites=f(),this.favor=t=>{t.stopImmediatePropagation(),D(this.name),this.favorites=f(),this.emit("change")}}get favored(){return _(this.name)}render(){return this.name?r`<dui-button icon sm part="dui-button" @click="${this.favor}"><i class="mdi ${$(this.$c([this.favored?"mdi-heart":"mdi-heart-outline",{favored:this.favored}]))}"></i></dui-button>`:""}};g([d()],m.prototype,"name",2);g([P()],m.prototype,"favorites",2);m=g([h("doid-favorites-btn")],m);const C="";var S=Object.defineProperty,F=Object.getOwnPropertyDescriptor,O=(t,s,o,a)=>{for(var e=a>1?void 0:a?F(s,o):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(a?i(s,o,e):i(e))||e);return a&&e&&S(s,o,e),e};let p=class extends v(C){goto(){const{name:t,available:s}=this.nameInfo;x(`/name/${t}/${s?"register":"details"}`)}change(){this.emit("change")}render(){return r`<div class="doid-name-item"><div @click="${this.goto}" class="flex justify-between items-center gap-4 border p-3 shadow-sm cursor-pointer bg-gray-50 hover_bg-gray-100 rounded-md"><b>${this.nameInfo.name}</b><div class="flex gap-4 items-center"><span class="${$(this.$c([this.nameInfo.available?"text-green-500":"text-red-500"]))}">${this.nameInfo.stat}</span><doid-favorites-btn @change="${this.change}" .name="${this.nameInfo.name}"></doid-favorites-btn></div></div></div>`}};O([d()],p.prototype,"nameInfo",2);p=O([h("doid-name-item")],p);const J="";var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,l=(t,s,o,a)=>{for(var e=a>1?void 0:a?B(s,o):s,n=t.length-1,i;n>=0;n--)(i=t[n])&&(e=(a?i(s,o,e):i(e))||e);return a&&e&&T(s,o,e),e};let c=class extends v(J){constructor(){super(...arguments),this.names=[],this.pending=!1,this.empty=!1}change(){this.emit("change")}connectedCallback(){super.connectedCallback()}render(){return r`<div class="doid-name-list">${u(this.pending,()=>r`<i class="mdi mdi-loading"></i> Searching...`)} ${u(this.empty,()=>r`No Data`)}<div class="flex flex-col gap-2">${I(this.names,t=>r`<doid-name-item @change="${this.change}" .nameInfo="${t}"></doid-name-item>`)}</div></div>`}};l([d()],c.prototype,"names",2);l([d()],c.prototype,"pending",2);l([d()],c.prototype,"empty",2);c=l([h("doid-name-list")],c);export{f as g};
