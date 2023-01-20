import{a as G,b as P,u as W,c as X,n as Y,e as I,_ as Z,d as L,f as z,h as v,i as tt,j as et,k as st,l as it,w as b,m as C,g as rt,T as N}from"./index-8112e7c5.js";import{p as x,S as M,x as F,B as nt,z as at,A as ot,y as f,j as lt,k as y,m as d,e as A,c as q,D as ut,n as dt}from"./vendor-dd2d0584.js";const w=async()=>G("Resolver");var ct=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ht=(e,s,i,r)=>{for(var t=r>1?void 0:r?pt(s,i):s,n=e.length-1,a;n>=0;n--)(a=e[n])&&(t=(r?a(s,i,t):a(t))||t);return r&&t&&ct(s,i,t),t};class U extends M{constructor(s){super(),this.key="",this.key=s}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}ht([x({value:[]})],U.prototype,"queue",2);const gt=7200*1e3;class mt{constructor(s){this.provider=W().bridgeStore.bridge.provider,this.store=new U(`evm.txs.${s||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(s){if(!s.chainId){const{network:i}=this.provider;s.chainId=i.chainId,s.scan=i.scan}s.pending=!0,this.queue.unshift(s),this.store.save(),this.provider.nonce=+s.nonce+1}delDelay(s,i=0){setTimeout(()=>this.del(s),i)}del(s){var r,t;const i=(t=(r=s.hash)!=null?r:s.ts)!=null?t:s;this.queue.some((n,a)=>{if([n.hash,n.ts,n].includes(i)){a===0&&(this.provider.nonce=0);const o=this.queue.splice(a,1);return this.store.save(),o}})}async check(s){this.queue.forEach(async(i,r)=>{if(s&&r===0){const t=await X(this.provider.account),n=+i.nonce;this.provider.nonce=n>t?n+1:t}if(i.done||new Date().getTime()-i.ts>=gt)return this.del(i);if(!i.err&&!(!s&&i.pending)){i.pending=!0;try{const t=await this.provider.waitForTransaction(i.hash),{status:n}=t;i.status=n,n===1?(i.done=!0,this.del(i)):i.err=!0}catch(t){i.err=t}i.pending=!1}}),this.store.save()}}const V={},D=(e=P.bridge.account)=>V[e]||(V[e]=new mt(e)),ft=async e=>e?typeof e=="object"?e:await Z(Object.assign({"./abi/Locker.codes.json":()=>L(()=>import("./Locker.codes-d3f42ed5.js"),[]),"./abi/Resolver.codes.json":()=>L(()=>import("./Resolver.codes-ee4f74d3.js"),[])}),`./abi/${e}.codes.json`):{};class yt{constructor(s,{errorCodes:i="",seq:r=void 0,delay:t=0,allowAlmostSuccess:n=!1,onSent:a=()=>{},onSuccess:o=()=>{},onError:l=()=>{}}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=n,this.txPromise=s,this.err=void 0,this.hash="",this.errorCodes=i,this.seq=r,this.delay=t,this.onSent=a,this.onSuccess=o,this.onError=l}get success(){return this.status===1}get processing(){return this.status===2}get almostSuccess(){return this.status===4}get ignored(){return this.status===3}async wait(s=!1){return(async()=>{let i=!1;const r=await ft(this.errorCodes);try{const t=await this.txPromise;this.onSent(t);const{hash:n,nonce:a}=t;this.seq.nonce=a,this.seq&&(delete this.seq.overrides,D().add(Object.assign(this.seq,{hash:n}))),this.hash=n,this.status=2;const o=async()=>{const{status:l,events:p}=await t.wait(1);if(l!==1)throw this.seq&&(this.seq.err=!0),new Error("Failed");p.some(({event:h,args:T}={})=>{if(h==="Failure"){let{info:S,detail:_,error:O}=T;const k=O.toString(),E=r[O],J={code:k,message:E,error:O,info:S==null?void 0:S.toString(),detail:_==null?void 0:_.toString()};this.seq&&(this.seq.err=!0);const R=new Error(E);throw Object.assign(R,{code:k,raw:J}),this.allowAlmostSuccess&&(this.status=4),R}}),this.status=1,this.seq&&(this.seq.done=!0),this.delay?D().delDelay(n,this.delay):D().del(n)};s?(i=!0,o()):await o(),this.onSuccess(t)}catch(t){throw await Y(t),t.code===4001?this.status=3:this.status!==4&&(this.status=0),this.err=t,this.onError(t),t}finally{this.pending=!1;const t=this.status===1;I.emit("tx-status",this.hash),t&&I.emit("tx-success",this.hash),i=t}return i})()}}const Q=(e,s={})=>{const i={...e,...s},{owner:r,status:t,account:n}=i,a=!!n&&r.toLowerCase()===n.toLowerCase(),o=t==="locked",l=t==="available"||a&&o,p=t==="registered";let h=o?"Locked by pass":l?"Available":"Unavailable";return p&&a&&(h="Registered"),{name:b(i.name),owner:r,available:l,registered:p,stat:h,status:t,itsme:a,id:F(i.id||0,0),locked:o}},wt=async(e,s)=>{const i=async r=>{s||(s=await z());const t=await w();r=b(r);const n={name:r,account:s};try{const a=await t.statusOfName(v(r));Object.assign(n,Q(a,n))}catch(a){}return n};return Array.isArray(e)?await Promise.all(e.map(i)):await i(e)},kt=async(e,s)=>{s||(s=await z());const i=await w(),r=[];try{const t=await i.namesOfOwner(e);r.push(...t.map(n=>Q(n,{owner:e,account:s,status:"registered"})))}catch(t){}return r},Et=async e=>{if(!e)return;let s=v(e),i=await w();const r=await i.nameHash(s),t=await i.addrs(r),n=await tt();return t.forEach(([a,o])=>{const l=F(a,0);n[l]&&(n[l].address=o)}),Object.values(n)},Rt=async(e,s,i)=>{let r=await w();const t=await et(),n=v(e),a=await t.getBlockNumber(),o=(await t.getBlock(a)).timestamp,l=nt.from(at(32)),p=await r.makeAddrMessage(n,i,s,o,l);return{name:e,dest:s,timestamp:o,nonce:l._hex,message:p}},Lt=async e=>({signature:await(await st()).signMessage(e)}),qt=async(e,s,i,r,t,n)=>{let a=await w();const o="setAddr",l={},p=[v(e),s,i,+r,t,n];await it(l,a,o,p);const h=a[o](...p);return new yt(h,{errorCodes:"Resolver",allowAlmostSuccess:!0,seq:{type:"setAddr",title:`set Address ${i}`,ts:new Date().getTime(),overrides:l}})};var vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,B=(e,s,i,r)=>{for(var t=r>1?void 0:r?bt(s,i):s,n=e.length-1,a;n>=0;n--)(a=e[n])&&(t=(r?a(s,i,t):a(t))||t);return r&&t&&vt(s,i,t),t};class $ extends M{constructor(){super(...arguments),this.search=async s=>{this.pending=!0,this.names=[];const{address:i,name:r}=await C(s,{allowAddress:!0,wrap:!0});if(i)return rt(`/address/${i}`);if(r){const t=await wt([r]);this.names=[t[0]]}this.ts++,this.pending=!1}}get len(){return this.names.length}get empty(){return!this.pending&&!this.len}}B([x({value:!1})],$.prototype,"pending",2);B([x({value:[]})],$.prototype,"names",2);B([x({value:0})],$.prototype,"ts",2);const xt=new $,$t=function(e={}){return this.validateDOIDName=async s=>{const i=s.detail;this.DOID={};const r=isNaN(this.nameMinLen)?e.len:this.nameMinLen,t=await C(i,{...e,len:r}),{name:n="",address:a="",error:o,msg:l}=t;if(o)return{error:o,msg:l};const p=e.allowAddress&&a,h=p?a:/\..+$/.test(i)?b(n):n;return(p||n&&!/[^.]\.{1}$/.test(i))&&(this.input$?this.input$.value.$("input").value=h:console.warn("Please use ref(this.input$) on inputElement first")),this.DOID=t,t}},St=(e,s={})=>class extends e{constructor(){super(...arguments),this.validateDOIDName=$t.bind(this,s)(),this.DOID={},this.input$=ot()}},_t=`.dui-input-text{position:relative;margin-left:auto;margin-right:auto;display:flex;width:100%;padding-top:1.25rem;padding-bottom:1.25rem}.dui-input-text input[type]{font-family:var(--fontFamily);position:relative;display:inline-flex;height:2rem;width:100%;border-radius:.375rem;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));padding:1.5rem .75rem;font-size:1rem;line-height:1.5rem;border:1px solid #ccc}.dui-input-text[disabled]{opacity:.6}.dui-input-text.sm{padding-top:0;padding-bottom:0}.dui-input-text.sm input[type]{height:1.5rem;padding-top:1rem;padding-bottom:1rem;font-size:.875rem;line-height:1.25rem}.dui-input-text.sm .dui-input-right,.dui-input-text.sm .dui-input-left{padding-top:1rem;padding-bottom:1rem;line-height:1rem}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{line-height:1!important}.dui-input-text .dui-input-msg,.dui-input-text .dui-input-tip,.dui-input-text label{position:absolute;display:flex;height:1rem;flex-wrap:wrap;align-items:center;padding-left:.75rem;padding-right:.75rem;font-size:.875rem;line-height:1.25rem;margin-left:1px;top:.15rem}.dui-input-text .dui-input-msg{top:auto;bottom:.15rem}.dui-input-text .dui-input-tip{left:auto;right:0px}.dui-input-text .dui-input-right,.dui-input-text .dui-input-left{pointer-events:none;position:absolute;display:flex;height:1.5rem;align-items:center;justify-content:center;border-top-right-radius:.375rem;border-bottom-right-radius:.375rem;padding:1.5rem .5rem;min-width:1.5rem;z-index:1;right:1px;margin-top:1px;font-size:1em;line-height:1em}.dui-input-text .dui-input-right:empty,.dui-input-text .dui-input-left:empty{--tw-bg-opacity: 1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dui-input-text .dui-input-right>*,.dui-input-text .dui-input-left>*{pointer-events:auto}.dui-input-text .dui-input-left{right:auto;left:1px}.dui-input-text[required] label:after{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-weight:600;line-height:1;--tw-text-opacity: 1;color:rgba(239,68,68,var(--tw-text-opacity));content:"*";height:1em;margin-left:.25em}.dui-input-text[rightSlotted] input[type]{padding-right:5rem}.dui-input-text.sm[rightSlotted] input[type]{padding-right:2.5rem}.dui-input-text[leftSlotted] input[type]{padding-left:2.75rem}.dui-input-text.sm[leftSlotted] input[type]{padding-left:2rem}
`;var Ot=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,c=(e,s,i,r)=>{for(var t=r>1?void 0:r?Dt(s,i):s,n=e.length-1,a;n>=0;n--)(a=e[n])&&(t=(r?a(s,i,t):a(t))||t);return r&&t&&Ot(s,i,t),t};const H=(e,s,{lower:i=!1,upper:r=!1}={})=>(e&&(e=e==null?void 0:e.trim(),i?e=e.toLowerCase():r&&(e=e.toUpperCase())),e);let u=class extends N(_t){constructor(){super(...arguments),this.placeholder="",this.type="text",this.class="",this.sm=!1,this.disabled=!1,this.autoforce=!1,this.required=!1,this.lower=!1,this.upper=!1,this.err=!1,this.value="",this.debounce=300,this.rightSlotted=!1,this.leftSlotted=!1,this.onKeyup=e=>{e.key==="Enter"&&(this.emit("submit",this.value),setTimeout(()=>this.updateVal()))}}onSlotChange(e){const s=e.target;if(!s)return;s.assignedNodes({flatten:!0}).length}onSlotRight(e){this.rightSlotted=!!e.target}onSlotLeft(e){this.leftSlotted=!!e.target}firstUpdated(){if(this.autoforce){const e=this.$("input");e.focus(),e.select()}}onFocus(e){e.target.select()}updateVal(){const e=this.$("input");e&&(e.value=this.value)}onInput(e){e.stopImmediatePropagation();let s=e.target.value;this.value=H(s,null,{lower:this.lower,upper:this.upper})||"",this.updateVal(),this.emit("input",s)}render(){return f`<div class="dui-input-text ${lt(this.$c([this.class,{sm:this.sm}]))}" ?required="${this.required}" ?rightSlotted="${this.rightSlotted}" ?leftSlotted="${this.leftSlotted}" part="dui-input-text"><label><slot name="label" @slotchange="${this.onSlotChange}"></slot></label> <span class="dui-input-left"><slot name="left" @slotchange="${this.onSlotLeft}"></slot></span><input .type="${this.type}" .disabled="${this.disabled}" placeholder="${this.placeholder}" value="${this.value}" title="${this.title}" @focus="${this.onFocus}" @input="${this.onInput}" @keyup="${this.onKeyup}"><div class="dui-input-right"><slot name="right" @slotchange="${this.onSlotRight}"></slot></div><div class="dui-input-msg"><slot name="msg" @slotchange="${this.onSlotChange}"></slot></div><div class="dui-input-tip"><slot name="tip" @slotchange="${this.onSlotChange}"></slot></div></div>`}};c([d({type:String})],u.prototype,"placeholder",2);c([d({type:String})],u.prototype,"type",2);c([d({type:String})],u.prototype,"class",2);c([d({type:Boolean})],u.prototype,"sm",2);c([d({type:Boolean})],u.prototype,"disabled",2);c([d({type:Boolean})],u.prototype,"autoforce",2);c([d({type:Boolean})],u.prototype,"required",2);c([d({type:Boolean})],u.prototype,"lower",2);c([d({type:Boolean})],u.prototype,"upper",2);c([d({type:Boolean})],u.prototype,"err",2);c([d({type:String,converter:H})],u.prototype,"value",2);c([d({type:Number})],u.prototype,"debounce",2);c([y()],u.prototype,"rightSlotted",2);c([y()],u.prototype,"leftSlotted",2);u=c([A("dui-input-text")],u);const Pt="";var It=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,m=(e,s,i,r)=>{for(var t=r>1?void 0:r?jt(s,i):s,n=e.length-1,a;n>=0;n--)(a=e[n])&&(t=(r?a(s,i,t):a(t))||t);return r&&t&&It(s,i,t),t};let g=class extends St(N(Pt),{allowAddress:!0}){constructor(){super(...arguments),this.bindStore=new q(this,xt),this.bindBridge=new q(this,P),this.placeholder="Search names or addresses",this.entire=!1,this.keyword="",this.err="",this.pending=!1,this.onInput=async e=>{const{val:s,error:i,msg:r}=await this.validateDOIDName(e);this.err=r,!i&&(this.keyword=s)}}doSearch(){if(!P.bridge.account)return I.emit("connect-wallet");this.err||(this.DOID.name&&(this.keyword=b(this.keyword)),this.emit("search",this.keyword))}async connectedCallback(){if(super.connectedCallback(),typeof this.default>"u")return;const{name:e="",address:s=""}=await C(this.default,{allowAddress:!0,wrap:!0});this.keyword=e||s}render(){return f`<dui-input-text ${ut(this.input$)} @input="${this.onInput}" @submit="${this.doSearch}" value="${this.keyword}" placeholder="${this.placeholder}" ?disabled="${this.pending}"><span slot="label"><slot name="label"></slot></span><span slot="right" class="-mr-1"><dui-button @click="${this.doSearch}" icon sm class="text-blue-500"><i class="mdi mdi-magnify text-lg"></i></dui-button></span><span slot="msg">${dt(this.err,()=>f`<span class="text-red-500">${this.err}</span>`,()=>f`<slot name="msg"></slot>`)}</span></dui-input-text>`}};m([d()],g.prototype,"placeholder",2);m([d()],g.prototype,"default",2);m([d({type:Boolean})],g.prototype,"entire",2);m([y()],g.prototype,"keyword",2);m([y()],g.prototype,"err",2);m([y()],g.prototype,"pending",2);g=m([A("dui-ns-search")],g);const Ct="/assets/doid-15c8a698.svg";var Nt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,K=(e,s,i,r)=>{for(var t=r>1?void 0:r?At(s,i):s,n=e.length-1,a;n>=0;n--)(a=e[n])&&(t=(r?a(s,i,t):a(t))||t);return r&&t&&Nt(s,i,t),t};let j=class extends N(""){constructor(){super(...arguments),this.icon=""}render(){return f`<strong class="block w-24 h-24 m-12 mx-auto" href="/"><img class="w-full h-full object-contain select-none pointer-events-none" src="${this.icon||Ct}"></strong><div class="my-8 text-center"><strong class="block"><slot name="h1"></slot></strong><slot name="msg"></slot></div>`}};K([d()],j.prototype,"icon",2);j=K([A("doid-symbol")],j);export{Rt as a,Lt as b,qt as c,kt as d,w as g,wt as n,Et as o,xt as s,yt as t};
