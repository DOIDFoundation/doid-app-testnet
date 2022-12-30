System.register(["./index-legacy.f30ae2b3.js","./vendor-legacy.b9eb6b11.js"],(function(e,t){"use strict";var n,i,r,s,a,o,d,c,m;return{setters:[e=>{n=e.T,i=e.g},e=>{r=e.y,s=e.j,a=e.k,o=e.m,d=e.e,c=e.n,m=e.u}],execute:function(){const t="doid.favors",h=e("g",(()=>JSON.parse(localStorage.getItem(t)||"[]"))),p=e=>localStorage.setItem(t,JSON.stringify(e)),l=(e,t=!1)=>{const n=h(),i=n.some(((i,r)=>{const s=i.name===e;return t&&s&&n.splice(r,1),s}));return t&&i&&p(n),i};var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=(e,t,n,i)=>{for(var r,s=i>1?void 0:i?f(t,n):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,n,s):r(s))||s);return i&&s&&g(t,n,s),s};let u=class extends(n(".favored{color:#f9167f}\n")){constructor(){super(...arguments),this.name="",this.favorites=h(),this.favor=e=>{e.stopImmediatePropagation(),(e=>{const t="string"==typeof e?{name:e}:e;if(!l(e,!0)){const e=h();e.push(t),p(e)}})(this.name),this.favorites=h(),this.emit("change")}}get favored(){return l(this.name)}render(){return this.name?r`<dui-button icon sm part="dui-button" @click="${this.favor}"><i class="mdi ${s(this.$c([this.favored?"mdi-heart":"mdi-heart-outline",{favored:this.favored}]))}"></i></dui-button>`:""}};v([o()],u.prototype,"name",2),v([a()],u.prototype,"favorites",2),u=v([d("doid-favorites-btn")],u);var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,$=(e,t,n,i)=>{for(var r,s=i>1?void 0:i?b(t,n):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,n,s):r(s))||s);return i&&s&&y(t,n,s),s};let x=class extends(n("")){goto(){const{name:e,available:t}=this.nameInfo;i(`/name/${e}/${t?"register":"details"}`)}change(){this.emit("change")}render(){return r`<div class="doid-name-item"><div @click="${this.goto}" class="flex justify-between items-center gap-4 border p-3 shadow-sm cursor-pointer bg-gray-50 hover_bg-gray-100 rounded-md"><b>${this.nameInfo.name}</b><div class="flex gap-4 items-center"><span class="${s(this.$c([this.nameInfo.available?"text-green-500":this.nameInfo.registered?"opacity-75":"text-red-500"]))}">${this.nameInfo.stat}</span><doid-favorites-btn @change="${this.change}" .name="${this.nameInfo.name}"></doid-favorites-btn></div></div></div>`}};$([o()],x.prototype,"nameInfo",2),x=$([d("doid-name-item")],x);var I=Object.defineProperty,O=Object.getOwnPropertyDescriptor,j=(e,t,n,i)=>{for(var r,s=i>1?void 0:i?O(t,n):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,n,s):r(s))||s);return i&&s&&I(t,n,s),s};let P=class extends(n("")){constructor(){super(...arguments),this.names=[],this.pending=!1,this.empty=!1}change(){this.emit("change")}connectedCallback(){super.connectedCallback()}render(){return r`<div class="doid-name-list">${c(this.pending,(()=>r`<i class="mdi mdi-loading"></i> Searching...`))} ${c(this.empty,(()=>r`<p class="px-3">No Data</p>`))}<div class="flex flex-col gap-2">${m(this.names,(e=>r`<doid-name-item @change="${this.change}" .nameInfo="${e}"></doid-name-item>`))}</div></div>`}};j([o()],P.prototype,"names",2),j([o()],P.prototype,"pending",2),j([o()],P.prototype,"empty",2),P=j([d("doid-name-list")],P)}}}));
