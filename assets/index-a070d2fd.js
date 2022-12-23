import{c as _,u as ot,d as ct,n as dt,e as k,_ as lt,f as z,h as B,i as M,b as G,T as y,s as ht,a as pt,j as mt,g as L,r as ut}from"./index-2383ee0a.js";import{g as H,b as X,u as gt,w as K,n as ft}from"./doid-symbol-61f3eae2.js";import{p as vt,S as yt,z as Z,b as F,y as o,h as l,e as b,n as d,j as bt,f as c,m as wt,d as I}from"./vendor-cc8c6684.js";var xt=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,_t=(t,s,i,r)=>{for(var e=r>1?void 0:r?$t(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&xt(s,i,e),e};class tt extends yt{constructor(s){super(),this.key="",this.key=s}save(){this.queue=[...this.queue],localStorage.setItem(this.key,JSON.stringify(this.queue))}}_t([vt({value:[]})],tt.prototype,"queue",2);const Ot=7200*1e3;class St{constructor(s){this.provider=ot().bridgeStore.bridge.provider,this.store=new tt(`evm.txs.${s||this.provider.account}`),this.checking=new Set,this.check(!0)}get queue(){return this.store.queue}async add(s){if(!s.chainId){const{network:i}=this.provider;s.chainId=i.chainId,s.scan=i.scan}s.pending=!0,this.queue.unshift(s),this.store.save(),this.provider.nonce=+s.nonce+1}delDelay(s,i=0){setTimeout(()=>this.del(s),i)}del(s){var r,e;const i=(e=(r=s.hash)!=null?r:s.ts)!=null?e:s;this.queue.some((a,n)=>{if([a.hash,a.ts,a].includes(i)){n===0&&(this.provider.nonce=0);const p=this.queue.splice(n,1);return this.store.save(),p}})}async check(s){this.queue.forEach(async(i,r)=>{if(s&&r===0){const e=await ct(this.provider.account),a=+i.nonce;this.provider.nonce=a>e?a+1:e}if(i.done||new Date().getTime()-i.ts>=Ot)return this.del(i);if(!i.err&&!(!s&&i.pending)){i.pending=!0;try{const e=await this.provider.waitForTransaction(i.hash),{status:a}=e;i.status=a,a===1?(i.done=!0,this.del(i)):i.err=!0}catch(e){i.err=e}i.pending=!1}}),this.store.save()}}const W={},N=(t=_.bridge.account)=>W[t]||(W[t]=new St(t)),Pt=async t=>t?typeof t=="object"?t:await lt(Object.assign({"./abi/Locker.codes.json":()=>z(()=>import("./Locker.codes-d3f42ed5.js"),[]),"./abi/Resolver.codes.json":()=>z(()=>import("./Resolver.codes-ee4f74d3.js"),[])}),`./abi/${t}.codes.json`):{};class U{constructor(s,{errorCodes:i="",seq:r=void 0,delay:e=0,allowAlmostSuccess:a=!1,onSent:n=()=>{},onSuccess:p=()=>{},onError:C=()=>{}}={}){this.pending=!0,this.status=-1,this.allowAlmostSuccess=a,this.txPromise=s,this.err=void 0,this.hash="",this.errorCodes=i,this.seq=r,this.delay=e,this.onSent=n,this.onSuccess=p,this.onError=C}get success(){return this.status===1}get processing(){return this.status===2}get almostSuccess(){return this.status===4}get ignored(){return this.status===3}async wait(s=!1){return(async()=>{let i=!1;const r=await Pt(this.errorCodes);try{const e=await this.txPromise;this.onSent(e);const{hash:a,nonce:n}=e;this.seq.nonce=n,this.seq&&(delete this.seq.overrides,N().add(Object.assign(this.seq,{hash:a}))),this.hash=a,this.status=2;const p=async()=>{const{status:C,events:it}=await e.wait(1);if(C!==1)throw this.seq&&(this.seq.err=!0),new Error("Failed");it.some(({event:rt,args:at}={})=>{if(rt==="Failure"){let{info:E,detail:A,error:q}=at;const Y=q.toString(),J=r[q],nt={code:Y,message:J,error:q,info:E==null?void 0:E.toString(),detail:A==null?void 0:A.toString()};this.seq&&(this.seq.err=!0);const Q=new Error(J);throw Object.assign(Q,{code:Y,raw:nt}),this.allowAlmostSuccess&&(this.status=4),Q}}),this.status=1,this.seq&&(this.seq.done=!0),this.delay?N().delDelay(a,this.delay):N().del(a)};s?(i=!0,p()):await p(),this.onSuccess(e)}catch(e){throw await dt(e),e.code===4001?this.status=3:this.status!==4&&(this.status=0),this.err=e,this.onError(e),e}finally{this.pending=!1;const e=this.status===1;k.emit("tx-status",this.hash),e&&k.emit("tx-success",this.hash),i=e}return i})()}}const Ct=async(t,s=localStorage)=>{const i=async()=>{const r=s.getItem(await B(t));if(r)return JSON.parse(r)};return{get:i,set:async(r,{merge:e=!1}={})=>{var n;const a=await B(t);e&&(r=Object.assign((n=await i())!=null?n:{},r)),s.setItem(a,JSON.stringify(r))},remove:async()=>s.removeItem(await B(t))}},w=()=>new Date().getTime(),j=async t=>await Ct(`reg.${t}`,sessionStorage),et="secret",It=async t=>{const s=await j(t),i=await s.get();if(i&&w()-i.ts>=86400*1e3){s.remove();return}return i},Tt=async t=>(await j(t)).remove(),Dt=async(t,s=et,i=[])=>{const r=await j(t),e=await r.get();if(e)return e;const n={secret:await(await H()).makeCommitment(X(t),await G(),Z(s),i),ts:w()};return await r.set(n,{merge:!0}),n},kt=async t=>{const s=await Dt(t),i=await H(),[r,e]=["commit",{}],a=[s.secret];await M(e,i,r,a);const n=i[r](...a),p=await j(t);return new U(n,{errorCodes:"Resolver",seq:{type:"commit",title:"Commit",ts:w(),overrides:e},onSent:()=>p.set({ts:w()},{merge:!0}),onSuccess:()=>p.set({ts:w()},{merge:!0}),onError:()=>p.remove()})},jt=async(t,s=et,i=[])=>{const r=await H(),[e,a]=["register",{}],n=[X(t),await G(),Z(s),i];await M(a,r,e,n);const p=r[e](...n);return new U(p,{errorCodes:"Resolver",seq:{type:"register",title:"Register",ts:w(),overrides:a}})},Rt="";var Et=Object.defineProperty,At=Object.getOwnPropertyDescriptor,st=(t,s,i,r)=>{for(var e=r>1?void 0:r?At(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Et(s,i,e),e};let V=class extends y(Rt){constructor(){super(...arguments),this.bindBridge=new F(this,_)}get bridge(){return _.bridge}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return o`<dui-link class="uri mt-4" href="${this.txScanUri}" target="_blank" rel="noopener">View Transaction: ${ht(this.tx.hash)}</dui-link>`}};st([l({type:Object})],V.prototype,"tx",2);V=st([b("tx-view")],V);const qt=`.tx-state{display:flex;flex-direction:column;align-items:center;flex-grow:1}.tx-state-icon.success{color:green}.tx-state-icon.failed{color:red}.tx-state-icon.warn{color:orange}.tx-state-msg{word-break:break-word;white-space:normal}
`;var Bt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,D=(t,s,i,r)=>{for(var e=r>1?void 0:r?Nt(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Bt(s,i,e),e};let O=class extends y(qt){constructor(){super(),this.bindBridge=new F(this,_),this.txType=!1,this.onlyAwaitHash=!1,this.opts={}}get bridge(){return _.bridge}get icons(){var e;const[t='<i class="mdi mdi-check-all"></i>',s='<i class="mdi mdi-check"></i>',i='<i class="mdi mdi-close"></i>',r='<i class="mdi mdi-loading"></i>']=(e=this.opts.icons)!=null?e:[];return{success:t,failed:i,wait:r,almostSuccess:s}}get hashOk(){return this.onlyAwaitHash&&this.tx.hash}get state(){var e,a,n;let[t,s,i]=["","",""];const{state:r}=this.opts;switch(this.tx.status){case-1:[t,s,i]=[this.icons.wait,(r==null?void 0:r.wait)||"Waiting for confirmation...","wait"];break;case 0:[t,s,i]=[this.icons.failed,(a=(e=this.tx.err)==null?void 0:e.message)!=null?a:"Something went wrong","failed"];break;case 1:[t,s,i]=[this.icons.success,(r==null?void 0:r.success)||"Success","success"];break;case 2:[t,s]=[this.icons.wait,"Confirm the transaction."];break;case 4:[t,s,i]=[this.icons.almostSuccess,((n=this.tx.err)==null?void 0:n.message)||"Almost Success","warn"];break}return this.hashOk&&([t,s,i]=[this.icons.success,(r==null?void 0:r.success)||"Success","success"]),{icon:t,txt:s,css:i}}get txScanUri(){const{hash:t}=this.tx;return t?`${this.bridge.network.current.scan}/tx/${t}`:""}render(){return o`<div class="tx-state m-4"><div class="tx-state-icon my-3 text-3xl mx-auto ${this.state.css}">${d(this.tx.pending&&!this.hashOk,()=>o`<slot name="pending"><i class="mdi mdi-loading"></i></slot>`,()=>o`<span>${bt(this.state.icon)}</span>`)}</div><div class="tx-state-msg my-4"><slot>${this.state.txt}</slot></div><div class="flex gap-4">${d(this.tx.hash,()=>o`${d(this.tx.success||this.tx.almostSuccess,()=>o`<slot name="view"><tx-view .tx="${this.tx}"></tx-view></slot>`,()=>o`<tx-view .tx="${this.tx}"></tx-view>`)}`)}</div></div>`}};D([l({type:Object})],O.prototype,"tx",2);D([l({type:Boolean})],O.prototype,"txType",2);D([l({type:Boolean})],O.prototype,"onlyAwaitHash",2);D([l({type:Object})],O.prototype,"opts",2);O=D([b("tx-state")],O);var Lt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,S=(t,s,i,r)=>{for(var e=r>1?void 0:r?Vt(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Lt(s,i,e),e};const Mt=async t=>{const s=await pt("Locker",{account:(await mt()).bridge.account}),[i,r,e]=["claimDoid",{},[+t]];await M(r,s,i,e);const a=s[i](...e);return new U(a,{errorCodes:"Locker",seq:{type:"claim-name",title:"Claim Name",ts:new Date().getTime(),overrides:r}})};let x=class extends y(""){constructor(){super(...arguments),this.bindBridge=new F(this,_),this.sm=!1,this.tx=null,this.success=!1,this.dialog=!1,this.claim=async()=>{try{this.tx=await Mt(+this.passId),this.success=await this.tx.wait()}catch(t){if(t.code===4001)return this.close()}}}get name(){var t;return(t=this.nameInfo)==null?void 0:t.name}get passId(){var t;return((t=this.nameInfo)==null?void 0:t.id)||0}get txPending(){var t;return this.tx&&!((t=this.tx)!=null&&t.ignored)}close(t=!1){this.dialog=!1,this.tx=void 0,t&&this.emit("success"),this.emit("show",!1)}open(){this.dialog=!0,this.emit("show",!0)}render(){return o`<dui-button ?disabled="${this.dialog}" ?pending="${this.dialog}" class="success" @click="${this.open}" ?sm="${this.sm}"><slot>Claim</slot></dui-button>${d(this.dialog,()=>{var t;return o`<dui-dialog @close="${()=>this.close()}"><div slot="header">Claim DOID name</div><div class="min-h-10">${d(!((t=this.tx)!=null&&t.success),()=>o`<div class="text-center">You are claiming for:<p class="text-black my-4 text-lg"><b class="text-blue-600">${this.name}</b>.doid</p><p>${o`(Note: This pass <b class="text-base text-orange-500">#${this.passId}</b> will be burned after claiming.)`}</p></div>`)} ${d(this.txPending,()=>o`<tx-state .tx="${this.tx}" .opts="${{state:{success:`Success. You are the registrant of ${this.name} now`}}}"><dui-button slot="view" @click="${()=>this.close(!0)}">Close</dui-button></tx-state>`,()=>o`<p class="mt-8 text-center"><dui-button class="success" @click="${this.claim}">Continue</dui-button></p>`)}</div></dui-dialog>`})}`}};S([l({type:Object})],x.prototype,"nameInfo",2);S([l({type:Boolean})],x.prototype,"sm",2);S([c()],x.prototype,"tx",2);S([c()],x.prototype,"success",2);S([c()],x.prototype,"dialog",2);x=S([b("doid-claim-name")],x);const Ht=`.per{background:linear-gradient(90deg,rgba(96,184,100,1) 0%,rgba(76,175,80,1) 100%)}
`;var Ft=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,f=(t,s,i,r)=>{for(var e=r>1?void 0:r?Ut(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Ft(s,i,e),e};let u=class extends y(Ht){constructor(){super(...arguments),this.percent=0,this.randomTo=0,this.precision=2,this.label=!1,this.state=!1,this.pending=!1,this.randomProgress=this.randomTo,this.randomTimer=null}get progress(){return Math.min(this.percent,100)}get per(){return(this.randomTo?Math.max(this.progress,this.randomProgress):this.progress).toFixed(this.precision)}shouldUpdate(t){return t.has("randomTo")&&(this.randomTo?(this.randomProgress=this.percent,this.randomTimer=setInterval(()=>{this.randomProgress+=Math.floor(Math.random()*(.5-.1+1)+.1),this.randomProgress>=this.randomTo&&clearInterval(this.randomTimer)},200)):clearInterval(this.randomTimer)),!0}render(){return o`<div class="relative flex grow w-full items-center"><div class="bar bg-gray-300 relative block w-full h-1.5 overflow-hidden rounded-full"><p class="per pr-1 absolute top-0 h-full rounded-full transition-all bg-green-600" style="${wt({width:`${this.per}%`})}"></p></div></div>`}};f([l({type:Number})],u.prototype,"percent",2);f([l({type:Number})],u.prototype,"randomTo",2);f([l({type:Number})],u.prototype,"precision",2);f([l({type:Boolean})],u.prototype,"label",2);f([l({type:Boolean})],u.prototype,"state",2);f([c()],u.prototype,"pending",2);f([c()],u.prototype,"randomProgress",2);f([c()],u.prototype,"randomTimer",2);u=f([b("progress-bar")],u);const Yt=`ol{margin-top:1rem;margin-bottom:1rem;display:grid;grid-gap:1rem;gap:1rem}@media (min-width: 768px){ol{grid-template-columns:repeat(3,minmax(0,1fr))}}ol li{position:relative;display:inline-flex;flex-direction:column;gap:.5rem;border-radius:.375rem;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(243,244,246,var(--tw-bg-opacity));padding:1.25rem 1rem 1rem 3.5rem}ol li:before{position:absolute;left:.75rem;top:.75rem;display:flex;height:2rem;width:2rem;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;--tw-bg-opacity: 1;background-color:rgba(255,255,255,var(--tw-bg-opacity));font-weight:700}ol li.active,ol li.done{border-style:dashed;--tw-border-opacity: 1;border-color:rgba(156,163,175,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(226,232,240,var(--tw-bg-opacity))}ol li.active:before,ol li.done:before{--tw-border-opacity: 1;border-color:rgba(148,163,184,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(248,250,252,var(--tw-bg-opacity))}ol li.done{border-color:transparent}ol li.done:before{--tw-border-opacity: 1;border-color:rgba(22,163,74,var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:rgba(240,253,244,var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgba(22,163,74,var(--tw-text-opacity))}ol li>b{display:block}ol li>p{line-height:1.375}ol li:nth-child(1):before{content:"1"}ol li:nth-child(2):before{content:"2"}ol li:nth-child(3):before{content:"3"}
`;var Jt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,m=(t,s,i,r)=>{for(var e=r>1?void 0:r?Qt(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Jt(s,i,e),e};let h=class extends y(Yt){constructor(){super(...arguments),this.name="",this.done=!1,this.pending=!1,this.err="",this.ts=0,this.step=1,this.tx=null,this.commitment={},this.cd=0,this.timer=null,this.goStep2=()=>{this.step=2;const t=60;this.cd=t,this.timer=setInterval(()=>{this.cd--<=0&&this.goStep3()},1e3)},this.goStep3=()=>{this.step=3,clearInterval(this.timer)},this.getCommitment=async()=>{this.commitment=await It(this.name)||{}},this.get=async()=>{await this.getCommitment();const{secret:t,ts:s}=this.commitment;s&&w()-s>60*1e3?this.goStep3():t&&this.goStep2(),this.ts++},this.commit=async()=>{this.pending=!0,this.err="";try{this.tx=await kt(this.name),await this.tx.wait(),this.goStep2()}catch(t){t.code!==4001&&/( IC)/.test(t.message)&&(this.err="This name is already committed by someone else, please try again later"),Tt(this.name),this.tx=null}finally{this.pending=!1}},this.register=async()=>{if(this.done)return L(`/name/${this.name}/details`);if(this.step!==3)return this.commit();this.pending=!0,this.err="";try{this.tx=await jt(this.name),this.done=await this.tx.wait()}catch(t){t.code!==4001&&(this.err=t.message),this.tx=null}finally{this.pending=!1}},this.go2success=()=>{L(this.detailsLink)}}get btn(){return{disabled:this.err||this.pending||this.step===2,title:this.done?"Manage name":this.step>1?"Register":"Request to Register"}}get txSuccess(){return this.tx&&!this.tx.ignored}get lockedByMe(){const{locked:t,itsme:s}=this.nameInfo;return t&&s}get detailsLink(){return`/name/${this.name}/details`}get txPending(){var t;return this.tx&&!((t=this.tx)!=null&&t.ignored)}get percent(){if(this.done)return 100;if(this.step===1){if(this.pending&&!this.tx)return 2;if(this.tx)return 5}if(this.step===2)return 35;if(this.step===3){if(this.pending&&!this.tx)return 70;if(this.tx)return 75}return this.step===3?68:0}get randomTo(){return this.step===1&&this.tx?35:this.step===2?68:this.step===3&&this.tx?99:0}connectedCallback(){super.connectedCallback(),this.get()}render(){return this.nameInfo.available?this.lockedByMe?o`<div class="px-3"><h3 class="text-base mb-4">${`This DOID name is already locked by pass #${this.nameInfo.locked}`}</h3><doid-claim-name @success="${this.go2success}" .nameInfo="${this.nameInfo}">Claim this name</doid-claim-name></div>`:o`<div class="px-3"><h3 class="text-base">${this.done?"You’ve completed all the steps, manage your name now!":"Registering a name requires you to complete 3 steps"}</h3><ol><li class="${I({done:this.done||this.step>1,active:this.step>=1})}"><b>Request to register</b><p>Your wallet will open and you will be asked to confirm the first of two transactions required for registration. If the second transaction is not processed within 7 days of the first, you will need to start again from step 1.</p></li><li class="${I({done:this.done||this.step>2,active:this.step>=2})}"><b>Wait for ${this.cd?`${this.cd} seconds`:"1 minute"}</b><p>The waiting period is required to ensure another person hasn’t tried to register the same name and protect you after your request.</p></li><li class="${I({done:this.done,active:this.step>=3})}"><b>Complete Registration</b><p>Click ‘register’ and your wallet will re-open. Only after the 2nd transaction is confirmed you'll know if you got the name.</p></li></ol><progress-bar .percent="${this.percent}" .randomTo="${this.randomTo}" class="my-4"></progress-bar><div class="my-4 flex justify-center items-center h-9"><dui-button @click="${this.register}" ?disabled="${this.btn.disabled}" class="${I({secondary:this.done})}" ?pending="${this.pending}">${this.btn.title}${d(this.cd,()=>o`<span class="ml-2">(${this.cd})</span>`,()=>o`<i class="mdi ml-2 ${I(this.$c([this.pending?"mdi-loading":"mdi-chevron-right"]))}"></i>`)}</dui-button></div><div class="text-center">${d(this.done,()=>o`<p class="text-green-600">Success!</p>`)} ${d(this.err,()=>o`<p class="text-red-500">${this.err}</p>`)}</div></div>`:o`${d(this.nameInfo.itsme,()=>o`<div class="px-3"><dui-button class="secondary" href="${this.detailsLink}">Manage your name <i class="mdi mdi-chevron-right"></i></dui-button></div>`,()=>o`<div class="px-3">This DOID name is already taken.<dui-link class="mx-1" href="${this.detailsLink}">See Details</dui-link></div>`)}`}};m([l()],h.prototype,"name",2);m([l({type:Object})],h.prototype,"nameInfo",2);m([c()],h.prototype,"done",2);m([c()],h.prototype,"pending",2);m([c()],h.prototype,"err",2);m([c()],h.prototype,"ts",2);m([c()],h.prototype,"step",2);m([c()],h.prototype,"tx",2);m([c()],h.prototype,"commitment",2);m([c()],h.prototype,"cd",2);m([c()],h.prototype,"timer",2);h=m([b("view-name-register")],h);const zt=`.addr_name{min-width:100px;max-width:140px}.edit{margin-top:0;margin-bottom:0}.edit .addr_edit{width:14rem}@media (min-width: 1024px){.edit .addr_edit{width:24rem}}@media (max-width: 1024px){.addr_name{min-width:50px;max-width:60px}}
`;var Kt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,v=(t,s,i,r)=>{for(var e=r>1?void 0:r?Wt(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Kt(s,i,e),e};let g=class extends y(zt){constructor(){super(...arguments),this.type="ETH",this.address="",this.tip={addr:""},this.err={addr:"",tx:""},this.pending={addr:!1,tx:!1},this.addr="",this.addrValid=!1,this.mode="",this.validate=()=>(this.addr?this.err={...this.err,addr:""}:this.err={...this.err,addr:"Required"},!this.inputErr),this.validAddrByType=(t=this.type)=>{this.err={...this.err,addr:""};const s=gt(this.addr);switch(this.addrValid=!1,t){case"ETH":s!=42&&(this.err={...this.err,addr:"Invalid address"});break;default:s<32&&(this.err={...this.err,addr:"Invalid address"});break}this.addrValid=!this.err.addr},this.onInputAddr=t=>{this.addr=t.detail,this.err={...this.err,addr:"",tx:""},this.validAddrByType()},this.saveAddr=()=>{!this.validate()||!this.addrValid||(console.info(`save addr of ${this.type}: ${this.addr}`),setTimeout(()=>this.mode=""))},this.cancel=()=>{this.mode="",this.err={...this.err,addr:""},this.pending={...this.pending,addr:!1}},this.disconnectedCallback=()=>{super.disconnectedCallback()}}get inputErr(){for(let t in this.err)if(t!=="tx"&&this.err[t])return!0;return!1}connectedCallback(){super.connectedCallback(),this.addr=this.address}render(){return o`<div class="flex justify-start items-center my-3 ${this.mode}"><div class="addr_name text-gray-400">${this.type}</div><div class="grow flex items-center"><div class="addr_edit">${d(this.mode==="edit",()=>o`<dui-input-text value="${this.addr}" class="sm" @input="${this.onInputAddr}" ?disabled="${this.pending.tx}"><span slot="msg">${d(this.err.addr,()=>o`<span class="text-red-500">${this.err.addr}</span>`,()=>o``)}</span></dui-input-text>`,()=>o`${d(this.address,()=>o`${this.address}<dui-copy .value="${this.address}" sm icon><span slot="copied" class="text-green-500"><i class="mdi mdi-check-circle-outline"></i> </span><span slot="copy"><i class="mdi mdi-content-copy"></i></span></dui-copy>`,()=>o`<span class="text-gray-400">No set</span>`)}`)}</div>${d(this.mode==="edit",()=>o`<dui-button sm text class="ml-1 outlined" @click="${this.saveAddr}">Save</dui-button><dui-button sm text class="ml-1 outlined" @click="${this.cancel}">Cancel</dui-button>`,()=>o`<dui-button sm icon class="ml-1"><i class="mdi mdi-pencil-outline" @click="${()=>this.mode="edit"}"></i></dui-button>`)}</div></div>`}};v([l({type:String})],g.prototype,"type",2);v([l({type:String})],g.prototype,"address",2);v([c()],g.prototype,"tip",2);v([c()],g.prototype,"err",2);v([c()],g.prototype,"pending",2);v([c()],g.prototype,"addr",2);v([c()],g.prototype,"addrValid",2);v([c()],g.prototype,"mode",2);g=v([b("edit-addr-inline")],g);const Gt=`.item_key{width:13rem;font-weight:500;min-width:140px;max-width:180px}
`;var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,R=(t,s,i,r)=>{for(var e=r>1?void 0:r?Zt(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&Xt(s,i,e),e};let T=class extends y(Gt){constructor(){super(...arguments),this.name="",this.pending=!1,this.ts=0,this.get=async()=>{this.ts++}}get empty(){return!1}connectedCallback(){this.get(),super.connectedCallback()}render(){return o`<div class="px-3 py-4"><div class="flex justify-start items-center mb-3"><div class="item_key">PARENT</div><div><a href="/name/doid/details" class="text-blue-500">doid</a></div></div><hr class="mb-3 border-t border-dashed border-gray-300"><div class="flex flex-col lg_flex-row justify-start items-start mb-3"><div class="item_key">ADDRESS</div><div class="flex flex-col"><edit-addr-inline address=""></edit-addr-inline><edit-addr-inline type="BSC"></edit-addr-inline><edit-addr-inline type="OKC"></edit-addr-inline></div></div></div>`}};R([l()],T.prototype,"name",2);R([c()],T.prototype,"pending",2);R([c()],T.prototype,"ts",2);T=R([b("view-name-details")],T);const te=`:host::part(dui-nav){display:flex;margin-bottom:-2px}
`;var ee=Object.defineProperty,se=Object.getOwnPropertyDescriptor,P=(t,s,i,r)=>{for(var e=r>1?void 0:r?se(s,i):s,a=t.length-1,n;a>=0;a--)(n=t[a])&&(e=(r?n(s,i,e):n(e))||e);return r&&e&&ee(s,i,e),e};let $=class extends y(te){constructor(){super(...arguments),this.name="",this.action="",this.pending=!1,this.disconnected=!1,this.nameInfo=null,this.goto=()=>{ut(`/name/${K(this.name)}/${this.action}`)},this.check=async(t,s=!1)=>{if(this.pending||await this.isDisconnected(s))return;this.pending=!0;const i=K(this.name);if(this.name!==i)this.name=i;else try{if(await this.isDisconnected(!0)||(this.nameInfo=await ft(this.name),await this.isDisconnected(!0)))return;this.action||(this.action=this.nameInfo.available?"register":"details")}catch(r){this.nameInfo=null}this.goto(),this.pending=!1}}get inReg(){return this.nameInfo&&!this.pending&&this.action==="register"}get inDetails(){return this.name&&!this.pending&&this.action==="details"}get empty(){return!this.name}connectedCallback(){super.connectedCallback(),this.check(null,!0),k.on("router-change",this.check)}disconnectedCallback(){super.disconnectedCallback(),k.off("router-change",this.check)}render(){return o`<div class="view-name"><div class="dui-container"><dui-ns-search .text="${this.name}" @search="${t=>L(`/search/${t.detail}`)}" placeholder="Search names"><span slot="label"></span> <span slot="msgd"></span></dui-ns-search>${d(this.name,()=>o`<div class="border-b-2 flex my-4 px-3 pr-4 justify-between items-end"><div><b class="text-lg">${this.name}</b> ${d(this.name==="doid",()=>o`<em>(Registrant)</em>`)}</div><div><dui-nav slot="center" part="dui-nav"><dui-link href="${`/name/${this.name}/register`}" alias="${`/name/${this.name}`}" exact nav>Register</dui-link><dui-link href="${`/name/${this.name}/details`}" exact nav>Details</dui-link></dui-nav></div></div>`)} ${d(this.pending,()=>o`<i class="mdi mdi-loading"></i> Loading...`)} ${d(this.inReg,()=>o`<view-name-register .name="${this.name}" .nameInfo="${this.nameInfo}"></view-name-register>`)} ${d(this.inDetails,()=>o`<view-name-details .name="${this.name}"></view-name-details>`)}</div></div>`}};P([l()],$.prototype,"name",2);P([l()],$.prototype,"action",2);P([c()],$.prototype,"pending",2);P([c()],$.prototype,"disconnected",2);P([c()],$.prototype,"nameInfo",2);$=P([b("view-name")],$);export{$ as ViewName};
