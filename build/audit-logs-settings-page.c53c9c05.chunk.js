"use strict";(self.webpackChunkmedigenie_app=self.webpackChunkmedigenie_app||[]).push([[2812],{94699:(Z,O,t)=>{t.d(O,{Z:()=>f});var e=t(67294),l=t(45697),h=t.n(l),y=t(86896),m=t(41580),E=t(29728),v=t(89597),x=t(84338);const P=({displayedFilters:g})=>{const[n,A]=(0,e.useState)(!1),{formatMessage:j}=(0,y.Z)(),B=(0,e.useRef)(),C=()=>{A(I=>!I)};return e.createElement(e.Fragment,null,e.createElement(m.x,{paddingTop:1,paddingBottom:1},e.createElement(E.z,{variant:"tertiary",ref:B,startIcon:e.createElement(v.Z,null),onClick:C,size:"S"},j({id:"app.utils.filters",defaultMessage:"Filters"})),n&&e.createElement(x.J5,{displayedFilters:g,isVisible:n,onToggle:C,source:B})),e.createElement(x.W$,{filtersSchema:g}))};P.propTypes={displayedFilters:h().arrayOf(h().shape({name:h().string.isRequired,metadatas:h().shape({label:h().string}),fieldSchema:h().shape({type:h().string})})).isRequired};const f=P},35915:(Z,O,t)=>{t.r(O),t.d(O,{default:()=>Pe});var e=t(67294),l=t(84338),h=t(87751),y=t(86896),m=t(17034),E=t(49066),v=t(41580),x=t(185),P=t(53979),f=t(36989),g=t(45697),n=t.n(g),A=t(15234),j=t(79031),B=t(37909),C=t(75515),I=t(11047),oe=t(12028),re=t(8934),G=t(23855);const w=()=>{const{formatDate:s}=(0,y.Z)();return p=>{const o=(0,G.Z)(p),u=s(o,{dateStyle:"long"}),d=s(o,{timeStyle:"medium",hourCycle:"h24"});return`${u}, ${d}`}},k={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},V=s=>k[s]||s,Q=({headers:s,rows:c,onOpenModal:p})=>{const{formatMessage:o}=(0,y.Z)(),u=w(),d=({type:i,value:r,model:M})=>i==="date"?u(r):i==="action"?o({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:V(r)},{model:M}):r||"-";return e.createElement(A.p,null,c.map(i=>e.createElement(j.Tr,{key:i.id,...(0,l.X7)({fn:()=>p(i.id)})},s.map(({key:r,name:M,cellFormatter:R})=>e.createElement(B.Td,{key:r},e.createElement(C.Z,{textColor:"neutral800"},d({type:r,value:R?R(i[M]):i[M],model:i.payload?.model})))),e.createElement(B.Td,{...l.UW},e.createElement(I.k,{justifyContent:"end"},e.createElement(oe.h,{onClick:()=>p(i.id),"aria-label":o({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${i.action} action`}),noBorder:!0,icon:e.createElement(re.Z,null)}))))))};Q.defaultProps={rows:[]},Q.propTypes={headers:n().array.isRequired,rows:n().array,onOpenModal:n().func.isRequired};const le=Q,ie=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:s=>s?s.displayName:""}],U=({pagination:s})=>e.createElement(v.x,{paddingTop:4},e.createElement(I.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(l.v4,null),e.createElement(l.tU,{pagination:s})));U.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},U.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};const a=U;var L=t(88767),b=t(42866),N=t(24969),W=t(2407),H=t(59946),de=t(77197),ce=t(11276),me=t(26614);const K=({actionLabel:s,actionName:c})=>e.createElement(I.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(C.Z,{textColor:"neutral600",variant:"sigma"},s),e.createElement(C.Z,{textColor:"neutral600"},c));K.propTypes={actionLabel:n().string.isRequired,actionName:n().string.isRequired};const $=K,z=({status:s,data:c,formattedDate:p})=>{const{formatMessage:o}=(0,y.Z)();if(s==="loading")return e.createElement(I.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(de.a,null,"Loading content..."));const{action:u,user:d,payload:i}=c;return e.createElement(e.Fragment,null,e.createElement(v.x,{marginBottom:3},e.createElement(C.Z,{variant:"delta",id:"title"},o({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ce.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement($,{actionLabel:o({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:o({id:`Settings.permissions.auditLogs.${u}`,defaultMessage:V(u)},{model:i?.model})}),e.createElement($,{actionLabel:o({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:p}),e.createElement($,{actionLabel:o({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:d?.displayName||"-"}),e.createElement($,{actionLabel:o({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:d?.id.toString()||"-"})),e.createElement(me.V,{value:JSON.stringify(i,null,2),disabled:!0,label:o({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};z.defaultProps={data:{}},z.propTypes={status:n().oneOf(["idle","loading","error","success"]).isRequired,data:n().shape({action:n().string,date:n().string,payload:n().object,user:n().object}),formattedDate:n().string.isRequired};const ue=z,q=({handleClose:s,logId:c})=>{const{get:p}=(0,l.kY)(),o=(0,l.lm)(),u=async R=>{const{data:T}=await p(`/admin/audit-logs/${R}`);if(!T)throw new Error("Audit log not found");return T},{data:d,status:i}=(0,L.useQuery)(["audit-log",c],()=>u(c),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),s()}}),r=w(),M=d?r(d.date):"";return e.createElement(b.P,{onClose:s,labelledBy:"title"},e.createElement(N.x,null,e.createElement(W.O,{label:M,id:"title"},e.createElement(W.$,null,M))),e.createElement(H.f,null,e.createElement(ue,{status:i,data:d,formattedDate:M})))};q.propTypes={handleClose:n().func.isRequired,logId:n().string.isRequired};const ge=q;var pe=t(94699),he=t(29178),J=t(90608);const Y=({value:s,options:c,onChange:p})=>{const{formatMessage:o}=(0,y.Z)(),u=o({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(he.hQ,{"aria-label":u,value:s,onChange:p},c.map(({label:d,customValue:i})=>e.createElement(J.O,{key:i,value:i},d)))};Y.defaultProps={value:null},Y.propTypes={value:n().string,options:n().arrayOf(n().shape({label:n().string.isRequired,customValue:n().string.isRequired}).isRequired).isRequired,onChange:n().func.isRequired};const ee=Y,X=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],ae=({formatMessage:s,users:c,canReadUsers:p})=>{const o=Object.keys(k).map(d=>({label:s({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:V(d)},{model:void 0}),customValue:d})),u=[{name:"action",metadatas:{customOperators:X,label:s({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:o,customInput:ee},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:s({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(p&&c){const d=r=>r.username?r.username:r.firstname&&r.lastname?s({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,i=c.results.map(r=>({label:d(r),customValue:r.id.toString()}));return[...u,{name:"user",metadatas:{customOperators:X,label:s({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i,customInput:ee},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return u};var Ee=t(16550);const Me=({canReadAuditLogs:s,canReadUsers:c})=>{const{get:p}=(0,l.kY)(),{search:o}=(0,Ee.TH)(),u=(0,l.lm)(),d=async({queryKey:S})=>{const ve=S[1],{data:De}=await p(`/admin/audit-logs${ve}`);return De},i=async()=>{const{data:S}=await p("/admin/users");return S},r={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:S=>u({type:"warning",message:S.message})},{data:M,isLoading:R,isError:T}=(0,L.useQuery)(["auditLogs",o],d,{...r,enabled:s}),{data:F,isError:_}=(0,L.useQuery)(["auditLogsUsers"],i,{...r,enabled:c,staleTime:2*(1e3*60)}),Le=T||_;return{auditLogs:M,users:F?.data,isLoading:R,hasError:Le}},se={...h.Z.settings.auditLogs,readUsers:h.Z.settings.users.read},ne=()=>{const{formatMessage:s}=(0,y.Z)(),{allowedActions:{canRead:c,canReadUsers:p}}=(0,l.ss)(se),[{query:o},u]=(0,l.Kx)(),{auditLogs:d,users:i,isLoading:r,hasError:M}=Me({canReadAuditLogs:c,canReadUsers:p});(0,l.go)();const R=ae({formatMessage:s,users:i,canReadUsers:p}),T=s({id:"global.auditLogs",defaultMessage:"Audit Logs"}),F=ie.map(_=>({..._,metadatas:{..._.metadatas,label:s(_.metadatas.label)}}));return M?e.createElement(m.A,null,e.createElement(E.D,null,e.createElement(v.x,{paddingTop:8},e.createElement(l.Hn,null)))):e.createElement(x.o,{"aria-busy":r},e.createElement(l.SL,{name:T}),e.createElement(P.T,{title:T,subtitle:s({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(f.Z,{startActions:e.createElement(pe.Z,{displayedFilters:R})}),e.createElement(E.D,{canRead:c},e.createElement(l.tM,{contentType:"Audit logs",headers:F,rows:d?.results||[],withBulkActions:!0,isLoading:r},e.createElement(le,{headers:F,rows:d?.results||[],onOpenModal:_=>u({id:_})})),e.createElement(a,{pagination:d?.pagination})),o?.id&&e.createElement(ge,{handleClose:()=>u({id:null},"remove"),logId:o.id}))},Pe=()=>e.createElement(l.O4,{permissions:h.Z.settings.auditLogs.main},e.createElement(ne,null))},2407:(Z,O,t)=>{t.d(O,{$:()=>P,O:()=>f});var e=t(85893),l=t(16405),h=t(71997),y=t(63237),m=t(11047),E=t(41580),v=t(75515);const x=(0,h.ZP)(m.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${E.x} {
    display: none;
  }
  :last-of-type ${v.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,P=({children:g})=>(0,e.jsxs)(x,{inline:!0,as:"li",children:[(0,e.jsx)(v.Z,{variant:"pi",textColor:"neutral600",children:g}),(0,e.jsx)(E.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(l.Z,{})})]});P.displayName="Crumb";const f=({children:g,label:n,...A})=>(0,e.jsxs)(m.k,{...A,children:[(0,e.jsx)(y.T,{children:n}),(0,e.jsx)("ol",{"aria-hidden":!0,children:g})]});f.displayName="Breadcrumbs"},29178:(Z,O,t)=>{t.d(O,{Wx:()=>ie,XU:()=>Oe,hQ:()=>G});var e=t(85893),l=t(67294),h=t(70968),y=t(12645),m=t(61828),E=t(71997),v=t(51809),x=t(10892),P=t(2504),f=t(75368),g=t(15585),n=t(77197),A=t(41580),j=t(75515),B=t(54574),C=t(11047),I=t(19270),oe=t(63428),re=t(96404);const G=({children:a,clearLabel:L="clear",creatable:b=!1,createMessage:N=c=>`Create "${c}"`,defaultFilterValue:W,defaultTextValue:H,defaultOpen:de=!1,open:ce,onOpenChange:me,disabled:K=!1,error:$,filterValue:z,hasMoreItems:ue=!1,hint:q,id:ge,label:pe,labelAction:he,loading:J=!1,loadingMessage:Y="Loading content...",noOptionsMessage:ee=()=>"No results found",onChange:X,onClear:te,onCreateOption:ae,onFilterValueChange:Ee,onInputChange:fe,onTextValueChange:Me,onLoadMore:se,placeholder:Ce="Select or enter a value",required:ne=!1,startIcon:ye,textValue:Pe,value:s})=>{const[c,p]=(0,x.T)({prop:ce,defaultProp:de,onChange:me}),[o,u]=(0,x.T)({prop:Pe,defaultProp:H,onChange:Me}),[d,i]=(0,x.T)({prop:z,defaultProp:W,onChange:Ee}),r=l.useRef(null),M=l.useRef(null),R=l.useRef(null),T=(0,P.M)(ge),F=D=>{te&&!K&&(u(""),i(""),te(D),M.current.focus())},_=D=>{p(D)},Le=D=>{u(D)},S=D=>{i(D)},ve=D=>{fe&&fe(D)},De=D=>{X&&X(D)},Ae=(0,P.M)(),Te=`intersection-${(0,v.B)(Ae)}`,je=D=>{se&&ue&&!J&&se(D)},Re=()=>{ae&&o&&ae(o)};(0,f.s)(r,je,{selectorToWatch:`#${Te}`,skipWhen:!c});const _e=`${T}-hint`,Ie=`${T}-error`;return(0,e.jsx)(B.g,{hint:q,error:$,id:T,required:ne,children:(0,e.jsxs)(C.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(I.Q,{action:he,children:pe}),(0,e.jsxs)(m.hQ.Root,{autocomplete:b?"list":"both",open:c,onOpenChange:_,onTextValueChange:Le,textValue:o,allowCustomValue:!0,disabled:K,required:ne,value:s===null?void 0:s,onValueChange:De,filterValue:d,onFilterValueChange:S,children:[(0,e.jsxs)(k,{$hasError:!!$,children:[(0,e.jsxs)(C.k,{flex:"1",as:"span",gap:3,children:[ye?(0,e.jsx)(A.x,{as:"span","aria-hidden":!0,children:ye}):null,(0,e.jsx)(V,{placeholder:Ce,id:T,"aria-invalid":!!$,"aria-labelledby":`${_e} ${Ie}`,onChange:ve,ref:M})]}),(0,e.jsxs)(C.k,{as:"span",gap:3,children:[o&&te?(0,e.jsx)(w,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:F,"aria-disabled":K,"aria-label":L,title:L,ref:R,children:(0,e.jsx)(h.Z,{})}):null,(0,e.jsx)(Q,{children:(0,e.jsx)(y.Z,{})})]})]}),(0,e.jsx)(m.hQ.Portal,{children:(0,e.jsx)(le,{sideOffset:4,children:(0,e.jsxs)(xe,{ref:r,children:[a,b?(0,e.jsx)(m.hQ.CreateItem,{onPointerUp:Re,onClick:Re,asChild:!0,children:(0,e.jsx)(U,{children:(0,e.jsx)(j.Z,{children:N(o??"")})})}):null,!b&&!J?(0,e.jsx)(m.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(U,{$hasHover:!1,children:(0,e.jsx)(j.Z,{children:ee(o??"")})})}):null,J?(0,e.jsx)(C.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(n.a,{small:!0,children:Y})}):null,(0,e.jsx)(A.x,{id:Te,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(oe.J,{}),(0,e.jsx)(re.c,{})]})})},Oe=a=>(0,e.jsx)(G,{...a,creatable:!0}),w=(0,E.ZP)(A.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,k=(0,E.ZP)(m.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:L})=>L?a.colors.danger600:a.colors.neutral200};
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

  ${({theme:a,$hasError:L})=>(0,g.k3)()({theme:a,hasError:L})};
`,V=(0,E.ZP)(m.hQ.TextInput)`
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
`,Q=(0,E.ZP)(m.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,le=(0,E.ZP)(m.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,xe=(0,E.ZP)(m.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,ie=l.forwardRef(({children:a,value:L,disabled:b,textValue:N,...W},H)=>(0,e.jsx)(m.hQ.ComboboxItem,{asChild:!0,value:L,disabled:b,textValue:N,children:(0,e.jsx)(U,{ref:H,...W,children:(0,e.jsx)(m.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(j.Z,{children:a})})})})),U=E.ZP.div`
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

    ${j.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:L=!0})=>L?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${j.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90608:(Z,O,t)=>{t.d(O,{O:()=>l});var e=t(29178);const l=e.Wx},36989:(Z,O,t)=>{t.d(O,{Z:()=>P});var e=t(85893),l=t(67294),h=t(45697),y=t(71997),m=t(11047),E=t(41580);const v=(0,y.ZP)(m.k)`
  & > * + * {
    margin-left: ${({theme:f})=>f.spaces[2]};
  }

  margin-left: ${({pullRight:f})=>f?"auto":void 0};
`,x=(0,y.ZP)(v)`
  flex-shrink: 0;
`,P=({startActions:f,endActions:g})=>f||g?(0,e.jsx)(E.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(E.x,{paddingBottom:4,children:(0,e.jsxs)(m.k,{justifyContent:"space-between",alignItems:"flex-start",children:[f&&(0,e.jsx)(v,{wrap:"wrap",children:f}),g&&(0,e.jsx)(x,{pullRight:!0,children:g})]})})}):null;P.defaultProps={endActions:void 0,startActions:void 0},P.propTypes={endActions:h.node,startActions:h.node}}}]);
