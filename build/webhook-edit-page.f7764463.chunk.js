"use strict";(self.webpackChunkmedigenie_app=self.webpackChunkmedigenie_app||[]).push([[5162],{558:(z,b,t)=>{t.d(b,{Z:()=>je});var e=t(67294),o=t(84338),j=t(185),M=t(88767),f=t(16550),P=t(48474),me=t(45697),i=t.n(me),se=t(90321),re=t(85018),Ee=t(67109),pe=t(53979),m=t(11047),S=t(29728),fe=t(49066),k=t(41580),X=t(11276),A=t(74571),_=t(16364),I=t(41054),$=t(86896),le=t(19270),O=t(75515),oe=t(71997),ve=t(36213),Ce=t(92155),be=t(11700),Me=t.n(be);const W=({disabledEvents:n,name:s,events:r,inputValue:l,handleChange:c,handleChangeAll:v})=>{const d=r.filter(g=>!n.includes(g)),u=l.length===d.length,E=l.length>0,y=({target:{name:g}})=>{v({target:{name:g,value:!u}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(ve.X,{indeterminate:E&&!u,"aria-label":"Select all entries",name:s,onChange:y,value:u},Me()(s))),r.map(g=>e.createElement("td",{key:g},e.createElement(Ce.C,{disabled:n.includes(g),"aria-label":g,name:g,value:l.includes(g),onValueChange:p=>c({target:{name:g,value:p}})}))))};W.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},W.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};const a=W,U=n=>n.reduce((s,r)=>{const l=r.split(".")[0];return s[l]||(s[l]=[]),s[l].push(r),s},{}),G=oe.ZP.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,Z={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},F=({isDraftAndPublish:n})=>{const s=n?Z.headers.draftAndPublish:Z.headers.default,r=n?Z.events.draftAndPublish:Z.events.default,{formatMessage:l}=(0,$.Z)(),{values:c,handleChange:v}=(0,I.u6)(),d="events",u=c.events,E=[],y=U(u),g=({target:{name:h,value:w}})=>{let x=new Set(u);w?x.add(h):x.delete(h),v({target:{name:d,value:Array.from(x)}})},p=({target:{name:h,value:w}})=>{let x=new Set(u);w?r[h].forEach(B=>{E.includes(B)||x.add(B)}):r[h].forEach(B=>x.delete(B)),v({target:{name:d,value:Array.from(x)}})};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(G,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),s.map(h=>h==="app.utils.publish"||h==="app.utils.unpublish"?e.createElement("td",{key:h.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l(h))):e.createElement("td",{key:h.id},e.createElement(O.Z,{variant:"sigma",textColor:"neutral600"},l(h)))))),e.createElement("tbody",null,Object.keys(r).map(h=>e.createElement(a,{disabledEvents:E,key:h,name:h,events:r[h],inputValue:y[h],handleChange:g,handleChangeAll:p})))))};F.propTypes={isDraftAndPublish:i().bool.isRequired};const Pe=F;var ye=t(96315),xe=t(39785),J=t(29178),Y=t(90608);const ie=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],q=({name:n,onChange:s,value:r,...l})=>{const[c,v]=(0,e.useState)(r?[...ie,r]:ie),d=E=>{s({target:{name:n,value:E}})},u=E=>{v(y=>[...y,E]),s({target:{name:n,value:E}})};return e.createElement(J.XU,{...l,onChange:d,onCreateOption:u,placeholder:"",value:r},c.map(E=>e.createElement(Y.O,{value:E,key:E},E)))};q.defaultProps={value:void 0},q.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};const Ie=q,Oe=()=>{const{formatMessage:n}=(0,$.Z)(),{values:s,errors:r}=(0,I.u6)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(k.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(I.F2,{validateOnChange:!1,name:"headers",render:({push:l,remove:c})=>e.createElement(X.r,{gap:4},s.headers?.map((v,d)=>e.createElement(e.Fragment,{key:d},e.createElement(A.P,{col:6},e.createElement(I.gN,{as:Ie,name:`headers.${d}.key`,"aria-label":`row ${d+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:r.headers?.[d]?.key&&n({id:r.headers[d]?.key,defaultMessage:r.headers[d]?.key})})),e.createElement(A.P,{col:6},e.createElement(m.k,{alignItems:"flex-end"},e.createElement(k.x,{style:{flex:1}},e.createElement(I.gN,{as:_.o,"aria-label":`row ${d+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${d}.value`,error:r.headers?.[d]?.value&&n({id:r.headers[d]?.value,defaultMessage:r.headers[d]?.value})})),e.createElement(m.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:r.headers?.[d]?.value?0:5},e.createElement(o.fG,{onClick:()=>s.headers.length!==1&&c(d),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:d+1})})))))),e.createElement(A.P,{col:12},e.createElement(xe.A,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(ye.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))};var ee=t(86647),de=t(70968);const Q=oe.ZP.svg(({theme:n,color:s})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[s]};
  }
`),H=({isPending:n,statusCode:s})=>{const{formatMessage:r}=(0,$.Z)();return n?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:ee.Z}),e.createElement(O.Z,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):s>=200&&s<300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:re.Z,color:"success700"}),e.createElement(O.Z,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):s>=300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:de.Z,color:"danger700"}),e.createElement(O.Z,null,r({id:"Settings.error",defaultMessage:"error"})," ",s)):null};H.propTypes={isPending:i().bool.isRequired,statusCode:i().number},H.defaultProps={statusCode:void 0};const V=({statusCode:n,message:s})=>{const{formatMessage:r}=(0,$.Z)();return n>=200&&n<300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(O.Z,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{maxWidth:(0,o.Q1)(250),justifyContent:"flex-end",title:s},e.createElement(O.Z,{ellipsis:!0,textColor:"neutral600"},s))):null};V.propTypes={statusCode:i().number,message:i().string},V.defaultProps={statusCode:void 0,message:void 0};const te=({onCancel:n})=>{const{formatMessage:s}=(0,$.Z)();return e.createElement(m.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(O.Z,{textColor:"neutral400"},s({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(Q,{as:de.Z,color:"neutral400"}))))};te.propTypes={onCancel:i().func.isRequired};const ae=({isPending:n,onCancel:s,response:r})=>{const{statusCode:l,message:c}=r,{formatMessage:v}=(0,$.Z)();return e.createElement(k.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(X.r,{gap:4,style:{alignItems:"center"}},e.createElement(A.P,{col:3},e.createElement(O.Z,null,v({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(A.P,{col:3},e.createElement(H,{isPending:n,statusCode:l})),e.createElement(A.P,{col:6},n?e.createElement(te,{onCancel:s}):e.createElement(V,{statusCode:l,message:c}))))};ae.defaultProps={isPending:!1,onCancel(){},response:{}},ae.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};const ce=ae;var T=t(87561);const ue=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Re=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,he=T.Ry().shape({name:T.Z_(o.I0.string).required(o.I0.required).matches(ue,o.I0.regex),url:T.Z_(o.I0.string).required(o.I0.required).matches(Re,o.I0.regex),headers:T.Vo(n=>{let s=T.IX();if(n.length===1){const{key:r,value:l}=n[0];if(!r&&!l)return s}return s.of(T.Ry().shape({key:T.Z_().required(o.I0.required),value:T.Z_().required(o.I0.required)}))}),events:T.IX()}),ne=({handleSubmit:n,data:s,triggerWebhook:r,isCreating:l,isTriggering:c,triggerResponse:v,isDraftAndPublishEvents:d})=>{const{formatMessage:u}=(0,$.Z)(),[E,y]=(0,e.useState)(!1);return e.createElement(I.J9,{onSubmit:n,initialValues:{name:s?.name||"",url:s?.url||"",headers:Object.keys(s?.headers||[]).length?Object.entries(s.headers).map(([g,p])=>({key:g,value:p})):[{key:"",value:""}],events:s?.events||[]},validationSchema:he,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:g,errors:p})=>e.createElement(o.l0,{noValidate:!0},e.createElement(pe.T,{primaryAction:e.createElement(m.k,{gap:2},e.createElement(S.z,{onClick:()=>{r(),y(!0)},variant:"tertiary",startIcon:e.createElement(se.Z,null),disabled:l||c,size:"L"},u({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(S.z,{startIcon:e.createElement(re.Z,null),onClick:g,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"}))),title:l?u({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):s?.name,navigationAction:e.createElement(o.rU,{startIcon:e.createElement(Ee.Z,null),to:"/settings/webhooks"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(fe.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},E&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(ce,{isPending:c,response:v,onCancel:()=>y(!1)})),e.createElement(k.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(X.r,{gap:6},e.createElement(A.P,{col:6},e.createElement(I.gN,{as:_.o,name:"name",error:p.name&&u({id:p.name}),label:u({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(A.P,{col:12},e.createElement(I.gN,{as:_.o,name:"url",error:p.url&&u({id:p.url}),label:u({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(Oe,null),e.createElement(Pe,{isDraftAndPublish:d})))))))};ne.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},ne.defaultProps={data:void 0,triggerResponse:void 0};const ge=ne,N=n=>({...n,headers:De(n.headers)}),De=n=>n.reduce((s,r)=>{const{key:l,value:c}=r;return l!==""?{...s,[l]:c}:s},{}),L=N,je=()=>{const{params:{id:n}}=(0,f.$B)("/settings/webhooks/:id"),{replace:s}=(0,f.k6)(),{lockApp:r,unlockApp:l}=(0,o.o1)(),c=(0,o.lm)(),v=(0,M.useQueryClient)(),{isLoading:d,collectionTypes:u}=(0,P.bP)(),{put:E,get:y,post:g}=(0,o.kY)(),p=n==="create",{isLoading:h,data:w}=(0,M.useQuery)(["get-webhook",n],async()=>{try{const{data:{data:D}}=await y(`/admin/webhooks/${n}`);return D}catch{return c({type:"warning",message:{id:"notification.error"}}),null}},{enabled:!p}),{isLoading:x,data:B,isIdle:ke,mutate:C}=(0,M.useMutation)(()=>g(`/admin/webhooks/${n}/trigger`)),Se=()=>C(null,{onError(){c({type:"warning",message:{id:"notification.error"}})}}),Ze=(0,M.useMutation)(D=>g("/admin/webhooks",D)),Be=(0,M.useMutation)(({id:D,body:K})=>E(`/admin/webhooks/${D}`,K)),We=async D=>{p?(r(),Ze.mutate(L(D),{onSuccess({data:K}){c({type:"success",message:{id:"Settings.webhooks.created"}}),s(`/settings/webhooks/${K.data.id}`),l()},onError(K){c({type:"warning",message:{id:"notification.error"}}),console.log(K),l()}})):(r(),Be.mutate({id:n,body:L(D)},{onSuccess(){v.invalidateQueries(["get-webhook",n]),c({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(K){c({type:"warning",message:{id:"notification.error"}}),console.log(K),l()}}))},Ue=e.useMemo(()=>u.some(D=>D.options.draftAndPublish===!0),[u]);return h||d?e.createElement(o.dO,null):e.createElement(j.o,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(ge,{handleSubmit:We,data:w,triggerWebhook:Se,isCreating:p,isTriggering:x,isTriggerIdle:ke,triggerResponse:B?.data.data,isDraftAndPublishEvents:Ue}))}},3672:(z,b,t)=>{t.r(b),t.d(b,{default:()=>P});var e=t(67294),o=t(84338),j=t(87751),M=t(558);const P=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.create},e.createElement(M.Z,null))},42122:(z,b,t)=>{t.r(b),t.d(b,{default:()=>P});var e=t(67294),o=t(84338),j=t(87751),M=t(558);const P=()=>e.createElement(o.O4,{permissions:j.Z.settings.webhooks.update},e.createElement(M.Z,null))},29178:(z,b,t)=>{t.d(b,{Wx:()=>Me,XU:()=>$,hQ:()=>I});var e=t(85893),o=t(67294),j=t(70968),M=t(12645),f=t(61828),P=t(71997),me=t(51809),i=t(10892),se=t(2504),re=t(75368),Ee=t(15585),pe=t(77197),m=t(41580),S=t(75515),fe=t(54574),k=t(11047),X=t(19270),A=t(63428),_=t(96404);const I=({children:a,clearLabel:R="clear",creatable:U=!1,createMessage:G=N=>`Create "${N}"`,defaultFilterValue:Z,defaultTextValue:F,defaultOpen:Pe=!1,open:ye,onOpenChange:xe,disabled:J=!1,error:Y,filterValue:$e,hasMoreItems:ie=!1,hint:q,id:Ie,label:Le,labelAction:Oe,loading:ee=!1,loadingMessage:de="Loading content...",noOptionsMessage:Q=()=>"No results found",onChange:H,onClear:V,onCreateOption:te,onFilterValueChange:ae,onInputChange:ce,onTextValueChange:T,onLoadMore:ue,placeholder:Re="Select or enter a value",required:Te=!1,startIcon:he,textValue:ne,value:ge})=>{const[N,De]=(0,i.T)({prop:ye,defaultProp:Pe,onChange:xe}),[L,Ae]=(0,i.T)({prop:ne,defaultProp:F,onChange:T}),[je,n]=(0,i.T)({prop:$e,defaultProp:Z,onChange:ae}),s=o.useRef(null),r=o.useRef(null),l=o.useRef(null),c=(0,se.M)(Ie),v=C=>{V&&!J&&(Ae(""),n(""),V(C),r.current.focus())},d=C=>{De(C)},u=C=>{Ae(C)},E=C=>{n(C)},y=C=>{ce&&ce(C)},g=C=>{H&&H(C)},p=(0,se.M)(),h=`intersection-${(0,me.B)(p)}`,w=C=>{ue&&ie&&!ee&&ue(C)},x=()=>{te&&L&&te(L)};(0,re.s)(s,w,{selectorToWatch:`#${h}`,skipWhen:!N});const B=`${c}-hint`,ke=`${c}-error`;return(0,e.jsx)(fe.g,{hint:q,error:Y,id:c,required:Te,children:(0,e.jsxs)(k.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(X.Q,{action:Oe,children:Le}),(0,e.jsxs)(f.hQ.Root,{autocomplete:U?"list":"both",open:N,onOpenChange:d,onTextValueChange:u,textValue:L,allowCustomValue:!0,disabled:J,required:Te,value:ge===null?void 0:ge,onValueChange:g,filterValue:je,onFilterValueChange:E,children:[(0,e.jsxs)(O,{$hasError:!!Y,children:[(0,e.jsxs)(k.k,{flex:"1",as:"span",gap:3,children:[he?(0,e.jsx)(m.x,{as:"span","aria-hidden":!0,children:he}):null,(0,e.jsx)(oe,{placeholder:Re,id:c,"aria-invalid":!!Y,"aria-labelledby":`${B} ${ke}`,onChange:y,ref:r})]}),(0,e.jsxs)(k.k,{as:"span",gap:3,children:[L&&V?(0,e.jsx)(le,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:v,"aria-disabled":J,"aria-label":R,title:R,ref:l,children:(0,e.jsx)(j.Z,{})}):null,(0,e.jsx)(ve,{children:(0,e.jsx)(M.Z,{})})]})]}),(0,e.jsx)(f.hQ.Portal,{children:(0,e.jsx)(Ce,{sideOffset:4,children:(0,e.jsxs)(be,{ref:s,children:[a,U?(0,e.jsx)(f.hQ.CreateItem,{onPointerUp:x,onClick:x,asChild:!0,children:(0,e.jsx)(W,{children:(0,e.jsx)(S.Z,{children:G(L??"")})})}):null,!U&&!ee?(0,e.jsx)(f.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(W,{$hasHover:!1,children:(0,e.jsx)(S.Z,{children:Q(L??"")})})}):null,ee?(0,e.jsx)(k.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(pe.a,{small:!0,children:de})}):null,(0,e.jsx)(m.x,{id:h,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(A.J,{}),(0,e.jsx)(_.c,{})]})})},$=a=>(0,e.jsx)(I,{...a,creatable:!0}),le=(0,P.ZP)(m.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,O=(0,P.ZP)(f.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:R})=>R?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:R})=>(0,Ee.k3)()({theme:a,hasError:R})};
`,oe=(0,P.ZP)(f.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,ve=(0,P.ZP)(f.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ce=(0,P.ZP)(f.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,be=(0,P.ZP)(f.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,Me=o.forwardRef(({children:a,value:R,disabled:U,textValue:G,...Z},F)=>(0,e.jsx)(f.hQ.ComboboxItem,{asChild:!0,value:R,disabled:U,textValue:G,children:(0,e.jsx)(W,{ref:F,...Z,children:(0,e.jsx)(f.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(S.Z,{children:a})})})})),W=P.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:R=!0})=>R?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(z,b,t)=>{t.d(b,{O:()=>o});var e=t(29178);const o=e.Wx},67109:(z,b,t)=>{t.d(b,{Z:()=>j});var e=t(85893);const o=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),j=o}}]);
