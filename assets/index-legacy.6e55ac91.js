System.register(["./index-legacy.f95b9e85.js","./list-legacy.b7e12872.js","./doid-symbol-legacy.fb79197c.js","./vendor-legacy.97abf310.js"],(function(e,t){"use strict";var s,i,r,a,n,o,d;return{setters:[e=>{s=e.T,i=e.g},e=>{r=e.g},e=>{a=e.n},e=>{n=e.y,o=e.f,d=e.e}],execute:function(){var t=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=(e,s,i,r)=>{for(var a,n=r>1?void 0:r?c(s,i):s,o=e.length-1;o>=0;o--)(a=e[o])&&(n=(r?a(s,i,n):a(n))||n);return r&&n&&t(s,i,n),n};let p=class extends(s("")){constructor(){super(...arguments),this.favorites=r(),this.names=[],this.pending=!1,this.ts=0,this.get=async()=>{this.pending=!0,this.favorites=r(),this.names=await a(this.favorites.map((e=>e.name))),this.pending=!1,this.ts++}}get empty(){return!this.pending&&!this.names.length}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.favorites.length?n`<doid-name-list @change="${this.get}" .names="${this.names}" .pending="${!this.ts&&this.pending}" .empty="${this.empty}"></doid-name-list>`:n`<div class="text-center my-4"><b class="block my-4"><i class="mdi mdi-heart-outline text-2xl text-gray-200"></i></b><p class="text-base">No names have been favorited</p><p>To add names to favorites, click the heart icon next to any desired name.</p></div>`}};l([o()],p.prototype,"favorites",2),l([o()],p.prototype,"names",2),l([o()],p.prototype,"pending",2),l([o()],p.prototype,"ts",2),p=l([d("doid-favorites")],p);var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor;let g=e("ViewFavorites",class extends(s("")){render(){return n`<div class="view-favorites"><div class="dui-container"><dui-ns-search @search="${e=>i(`/search/${e.detail}`)}" placeholder="Search names"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search><doid-favorites></doid-favorites></div></div>`}});e("ViewFavorites",g=((e,t,s,i)=>{for(var r,a=i>1?void 0:i?v(t,s):t,n=e.length-1;n>=0;n--)(r=e[n])&&(a=(i?r(t,s,a):r(a))||a);return i&&a&&h(t,s,a),a})([d("view-favorites")],g))}}}));
