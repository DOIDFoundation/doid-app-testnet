import{T as u}from"./index-9RxuMwHU.js";import{x as n,k as f,g as m,j as a,t as y}from"./vendor-fBQRa2Qg.js";const w={readText:()=>Promise.reject(),writeText:(i="")=>new Promise((o,s)=>{try{const t=document,e=t.createElement("textarea");e.value=i,t.body.appendChild(e),e.value=i,t.body.appendChild(e),e.select();const r=t.execCommand("copy");t.body.removeChild(e),r?o(!0):s(!1)}catch{s(!1)}})};let{clipboard:d=void 0}=navigator;d||(d=w);const C=d,_="";var b=Object.defineProperty,x=Object.getOwnPropertyDescriptor,c=(i,o,s,t)=>{for(var e=t>1?void 0:t?x(o,s):o,r=i.length-1,l;r>=0;r--)(l=i[r])&&(e=(t?l(o,s,e):l(e))||e);return t&&e&&b(o,s,e),e};let p=class extends u(_){constructor(){super(...arguments),this.value="",this.class="",this.icon=!1,this.sm=!1,this.interval=2.5,this.copied=!1,this.copiedShow=!1,this.timer=null}async doCopy(i){i.preventDefault(),i.stopImmediatePropagation(),clearTimeout(this.timer);const o=this.value;if(o){this.copied=!1;try{let s=this;await C.writeText(o),this.copied=!0,this.copiedShow=!0,this.timer=setTimeout(()=>{s.copiedShow=!1},this.interval*1e3)}catch{this.copied=!1}}}render(){return n`<dui-button ?icon="${this.icon}" ?sm="${this.sm}" @click="${this.doCopy}" class="${f({copied:this.copiedShow}),this.class}">${this.copied&&this.copiedShow?n`<slot name="copied">Copied</slot>`:n`<slot name="copy">Copy</slot>`}</dui-button>`}};c([a()],p.prototype,"value",2);c([a({type:String})],p.prototype,"class",2);c([a({type:Boolean})],p.prototype,"icon",2);c([a({type:Boolean})],p.prototype,"sm",2);c([a({type:Number})],p.prototype,"interval",2);c([m()],p.prototype,"copied",2);c([m()],p.prototype,"copiedShow",2);p=c([y("dui-copy")],p);const P=":host{display:inline-flex;align-items:center;vertical-align:middle}";var $=Object.defineProperty,g=Object.getOwnPropertyDescriptor,v=(i,o,s,t)=>{for(var e=t>1?void 0:t?g(o,s):o,r=i.length-1,l;r>=0;r--)(l=i[r])&&(e=(t?l(o,s,e):l(e))||e);return t&&e&&$(o,s,e),e};let h=class extends u(P){constructor(){super(...arguments),this.value=""}render(){return n`<dui-copy .value="${this.value}" sm icon><span slot="copied" class="text-green-500"><i class="mdi mdi-check-circle-outline"></i> </span><span slot="copy"><i class="mdi mdi-content-copy"></i></span></dui-copy>`}};v([a({type:String})],h.prototype,"value",2);h=v([y("dui-copy-icon")],h);
