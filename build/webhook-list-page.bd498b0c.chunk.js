"use strict";(self.webpackChunkmedigenie_app=self.webpackChunkmedigenie_app||[]).push([[4121],{11199:(H,L,t)=>{t.r(L),t.d(L,{default:()=>fe});var e=t(67294),a=t(84338),b=t(87751),f=t(16550),T=t(86896),p=t(14087),y=t(17034),M=t(185),O=t(53979),E=t(36989),d=t(75515),h=t(29728),j=t(49066),W=t(41580),ne=t(38939),se=t(49386),oe=t(8060),G=t(79031),m=t(37909),N=t(92155),le=t(63237),ae=t(15234),R=t(11047),C=t(85893),x=t(45697),V=t(71997);const $=V.ZP.div`
  background: ${({theme:s})=>s.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:s})=>s?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:s})=>s.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:s})=>s.spaces[1]};
    top: ${({theme:s})=>s.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ie=V.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:s})=>s.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,P=e.forwardRef(({label:s,onChange:i,onLabel:l,offLabel:c,selected:D,visibleLabels:v,...g},o)=>(0,C.jsx)(ie,{ref:o,role:"switch","aria-checked":D,"aria-label":s,onClick:i,visibleLabels:v,type:"button",...g,children:(0,C.jsxs)(R.k,{children:[(0,C.jsxs)($,{children:[(0,C.jsx)("span",{children:l}),(0,C.jsx)("span",{children:c})]}),v&&(0,C.jsx)(W.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:D?"success600":"danger600",children:D?l:c})]})}));P.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},P.propTypes={label:x.string.isRequired,offLabel:x.string,onChange:x.func.isRequired,onLabel:x.string,selected:x.bool.isRequired,visibleLabels:x.bool},P.displayName="Switch";var F=t(12028),re=t(89722),K=t(96315),z=t(20022),de=t(4585),ce=t(86031),Ee=t(18172),he=t(36968),me=t.n(he);const ge={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},ue=(s,i)=>(0,Ee.ZP)(s,l=>{switch(i.type){case"GET_DATA_SUCCEEDED":{l.webhooks=i.data,l.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{l.loadingWebhooks=!s.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{me()(l,["webhooks",...i.keys],i.value);break}case"SET_WEBHOOK_TO_DELETE":{l.webhookToDelete=i.id;break}case"SET_WEBHOOKS_TO_DELETE":{i.value?l.webhooksToDelete.push(i.id):l.webhooksToDelete=s.webhooksToDelete.filter(c=>c!==i.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{s.webhooksToDelete.length===0?l.webhooksToDelete=s.webhooks.map(c=>c.id):l.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{l.webhooks=s.webhooks.filter(c=>!s.webhooksToDelete.includes(c.id)),l.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{l.webhooks=s.webhooks.filter((c,D)=>D!==i.index),l.webhookToDelete=null;break}default:return l}}),be=()=>{const{isLoading:s,allowedActions:{canCreate:i,canRead:l,canUpdate:c,canDelete:D}}=(0,a.ss)(b.Z.settings.webhooks),v=(0,a.lm)(),g=(0,e.useRef)(!0),{formatMessage:o}=(0,T.Z)(),[Te,B]=(0,e.useState)(!1),[{webhooks:A,webhooksToDelete:Z,webhookToDelete:I,loadingWebhooks:U},u]=(0,e.useReducer)(ue,ge),{notifyStatus:Q}=(0,p.G)(),{get:X,del:De,post:ve,put:Oe}=(0,a.kY)();(0,a.go)();const{push:Le}=(0,f.k6)(),{pathname:Y}=(0,f.TH)(),w=A.length,k=Z.length,J=n=>A.findIndex(r=>r.id===n);(0,e.useEffect)(()=>(g.current=!0,()=>{g.current=!1}),[]),(0,e.useEffect)(()=>{l&&(async()=>{try{const{data:{data:r}}=await X("/admin/webhooks");g.current&&(u({type:"GET_DATA_SUCCEEDED",data:r}),Q("webhooks have been loaded"))}catch(r){console.log(r),g.current&&(r.code!==20&&v({type:"warning",message:{id:"notification.error"}}),u({type:"TOGGLE_LOADING"}))}})()},[l,X,Q,v]);const pe=()=>{B(n=>!n)},ye=()=>{I?Ce():xe()},Ce=async()=>{try{await De(`/admin/webhooks/${I}`),u({type:"WEBHOOK_DELETED",index:J(I)})}catch(n){n.code!==20&&v({type:"warning",message:{id:"notification.error"}})}B(!1)},xe=async()=>{const n={ids:Z};try{await ve("/admin/webhooks/batch-delete",n),g.current&&u({type:"WEBHOOKS_DELETED"})}catch(r){g.current&&r.code!==20&&v({type:"warning",message:{id:"notification.error"}})}B(!1)},q=n=>{B(!0),n!=="all"&&u({type:"SET_WEBHOOK_TO_DELETE",id:n})},Me=async(n,r)=>{const _=J(r),Pe=A[_],ee=[_,"isEnabled"],te={...Pe,isEnabled:n};delete te.id;try{u({type:"SET_WEBHOOK_ENABLED",keys:ee,value:n}),await Oe(`/admin/webhooks/${r}`,te)}catch(Be){g.current&&(u({type:"SET_WEBHOOK_ENABLED",keys:ee,value:!n}),Be.code!==20&&v({type:"warning",message:{id:"notification.error"}}))}},ke=()=>{u({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},We=(n,r)=>{u({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:r})},S=n=>{Le(`${Y}/${n}`)};return e.createElement(y.A,null,e.createElement(a.SL,{name:"Webhooks"}),e.createElement(M.o,{"aria-busy":s||U},e.createElement(O.T,{title:o({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:o({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:i&&!U&&e.createElement(a.Qj,{startIcon:e.createElement(K.Z,null),variant:"default",to:`${Y}/create`,size:"S"},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),k>0&&D&&e.createElement(E.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(d.Z,{variant:"epsilon",textColor:"neutral600"},o({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:k})),e.createElement(h.z,{onClick:()=>q("all"),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},o({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.D,null,s||U?e.createElement(W.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(a.dO,null)):w>0?e.createElement(ne.i,{colCount:5,rowCount:w+1,footer:e.createElement(se.c,{onClick:()=>i?S("create"):{},icon:e.createElement(K.Z,null)},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(oe.h,null,e.createElement(G.Tr,null,e.createElement(m.Th,null,e.createElement(N.C,{"aria-label":o({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:k>0&&k<w,value:k===w,onValueChange:ke})),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"global.name",defaultMessage:"Name"}))),e.createElement(m.Th,{width:"60%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(m.Th,null,e.createElement(le.T,null,o({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,A.map(n=>e.createElement(G.Tr,{key:n.id,...(0,a.X7)({fn:()=>S(n.id),condition:c})},e.createElement(m.Td,{...a.UW},e.createElement(N.C,{"aria-label":`${o({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:Z?.includes(n.id),onValueChange:r=>We(r,n.id),id:"select",name:"select"})),e.createElement(m.Td,null,e.createElement(d.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(m.Td,null,e.createElement(d.Z,{textColor:"neutral800"},n.url)),e.createElement(m.Td,null,e.createElement(R.k,{...a.UW},e.createElement(P,{onLabel:o({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:o({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${o({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>Me(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(m.Td,null,e.createElement(R.k,{gap:1,...a.UW},c&&e.createElement(F.h,{onClick:()=>{S(n.id)},label:o({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(de.Z,null),noBorder:!0}),D&&e.createElement(F.h,{onClick:()=>q(n.id),label:o({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(z.Z,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(re.x,{icon:e.createElement(ce.Z,{width:"160px"}),content:o({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(h.z,{variant:"secondary",startIcon:e.createElement(K.Z,null),onClick:()=>i?S("create"):{}},o({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(a.QH,{isOpen:Te,onToggleDialog:pe,onConfirm:ye}))},fe=()=>e.createElement(a.O4,{permissions:b.Z.settings.webhooks.main},e.createElement(be,null))},36989:(H,L,t)=>{t.d(L,{Z:()=>O});var e=t(85893),a=t(67294),b=t(45697),f=t(71997),T=t(11047),p=t(41580);const y=(0,f.ZP)(T.k)`
  & > * + * {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }

  margin-left: ${({pullRight:E})=>E?"auto":void 0};
`,M=(0,f.ZP)(y)`
  flex-shrink: 0;
`,O=({startActions:E,endActions:d})=>E||d?(0,e.jsx)(p.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(p.x,{paddingBottom:4,children:(0,e.jsxs)(T.k,{justifyContent:"space-between",alignItems:"flex-start",children:[E&&(0,e.jsx)(y,{wrap:"wrap",children:E}),d&&(0,e.jsx)(M,{pullRight:!0,children:d})]})})}):null;O.defaultProps={endActions:void 0,startActions:void 0},O.propTypes={endActions:b.node,startActions:b.node}},49386:(H,L,t)=>{t.d(L,{c:()=>d});var e=t(85893),a=t(67294),b=t(45697),f=t(71997),T=t(41580),p=t(70004),y=t(11047),M=t(75515);const O=(0,f.ZP)(T.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:h})=>h.colors.primary600};
  }
`,E=(0,f.ZP)(T.x)`
  border-radius: 0 0 ${({theme:h})=>h.borderRadius} ${({theme:h})=>h.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:h,icon:j,...W})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(p.i,{}),(0,e.jsx)(E,{as:"button",background:"primary100",padding:5,...W,children:(0,e.jsxs)(y.k,{children:[(0,e.jsx)(O,{"aria-hidden":!0,background:"primary200",children:j}),(0,e.jsx)(T.x,{paddingLeft:3,children:(0,e.jsx)(M.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:h})})]})})]});d.propTypes={children:b.string.isRequired,icon:b.node.isRequired}}}]);
