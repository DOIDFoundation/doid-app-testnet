System.register(["./index-legacy.ea3a63a3.js","./doid-symbol-legacy.0f664926.js","./list-legacy.f5e239cc.js","./vendor-legacy.09a8c222.js"],(function(s,e){"use strict";var t,i,d,r,n,a,o,h,c,p,l,g;return{setters:[s=>{t=s.T,i=s.b,d=s.v,r=s.s,n=s.g},s=>{a=s.d},null,s=>{o=s.b,h=s.y,c=s.u,p=s.q,l=s.n,g=s.e}],execute:function(){var e=Object.defineProperty,u=Object.getOwnPropertyDescriptor,v=(s,t,i,d)=>{for(var r,n=d>1?void 0:d?u(t,i):t,a=s.length-1;a>=0;a--)(r=s[a])&&(n=(d?r(t,i,n):r(n))||n);return d&&n&&e(t,i,n),n};let b=s("ViewAddress",class extends(t(":host::part(dui-nav){display:flex;margin-bottom:-2px}\n")){constructor(){super(...arguments),this.bindBridge=new o(this,i),this.bindScreen=new o(this,d),this.address="",this.action="",this.names=[],this.pending=!1,this.ts=0,this.get=async()=>{this.pending=!0,this.names=await a(this.address),this.pending=!1,this.ts++}}get bridge(){return i.bridge}get empty(){return this.ts&&!this.pending&&!this.names.length}get scan(){return this.bridge.network.current.scan}get itsme(){return this.bridge.account.toLowerCase()===this.address.toLowerCase()}get shortAddr(){return r(this.address)}connectedCallback(){this.get(),super.connectedCallback()}render(){return h`<div class="view-address"><div class="dui-container"><dui-ns-search .text="${this.address}" @search="${s=>n(`/address/${s.detail}`)}" placeholder="Search addresses"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${c(this.address,(()=>h`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between"><div><b>${d.isMobi?this.shortAddr:this.address}</b>${c(this.itsme,(()=>h`<span class="mx-1">(me)</span>`))}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`${this.scan}/address/${this.address}`}">View on Explorer</dui-link></dui-nav></div></div>`))}<doid-name-list @change="${this.get}" .names="${this.names}" .pending="${!this.ts&&this.pending}" .empty="${this.empty}"></doid-name-list></div></div>`}});v([p()],b.prototype,"address",2),v([p()],b.prototype,"action",2),v([l()],b.prototype,"names",2),v([l()],b.prototype,"pending",2),v([l()],b.prototype,"ts",2),s("ViewAddress",b=v([g("view-address")],b))}}}));
