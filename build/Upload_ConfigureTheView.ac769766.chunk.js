"use strict";(self.webpackChunkmedigenie_app=self.webpackChunkmedigenie_app||[]).push([[9514],{87532:(st,v,t)=>{t.r(v),t.d(v,{default:()=>X});var e=t(67294),h=t(86896),B=t(18446),N=t.n(B),z=t(45697),d=t.n(z),I=t(17034),O=t(185),W=t(53979),P=t(29728),$=t(49066),g=t(84338),G=t(67109),y=t(85018),H=t(41580),b=t(11276),E=t(74571),p=t(40619),C=t(82562),o=t(15537),D=t(49826);const Z=({sort:s="",pageSize:l=10,onChange:n})=>{const{formatMessage:i}=(0,h.Z)();return e.createElement(H.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(b.r,{gap:4},e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.entries.title"),defaultMessage:"Entries per page"}),hint:i({id:(0,o.Z)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>n({target:{name:"pageSize",value:a}}),name:"pageSize",value:l},D.ay.map(a=>e.createElement(C.W,{key:a,value:a},a)))),e.createElement(E.P,{s:12,col:6},e.createElement(p.P,{label:i({id:(0,o.Z)("config.sort.title"),defaultMessage:"Default sort order"}),hint:i({id:(0,o.Z)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>n({target:{name:"sort",value:a}}),name:"sort",value:s,"test-sort":s,"data-testid":"sort-select"},D.Fo.map(a=>e.createElement(C.W,{"data-testid":`sort-option-${a.value}`,key:a.key,value:a.value},i({id:(0,o.Z)(a.key),defaultMessage:`${a.value}`})))))))};Z.propTypes={sort:d().string.isRequired,pageSize:d().number.isRequired,onChange:d().func.isRequired};var U=t(18172),x=t(36968),F=t.n(x),V=t(27361),Q=t.n(V),m=t(55994);const S=`${m.Z}/ON_CHANGE`,M=`${m.Z}/SET_LOADED`,c={initialData:{},modifiedData:{}},L=s=>({...c,initialData:s,modifiedData:s}),Y=(s=c,l)=>(0,U.ZP)(s,n=>{switch(l.type){case S:{F()(n,["modifiedData",...l.keys.split(".")],l.value);break}case M:{const i=L(Q()(n,["modifiedData"],{}));n.initialData=i.initialData,n.modifiedData=i.modifiedData;break}default:return n}}),j=({name:s,value:l})=>({type:S,keys:s,value:l}),J=()=>({type:M});var K=t(60862);const T=({config:s})=>{const{trackUsage:l}=(0,g.rS)(),{formatMessage:n}=(0,h.Z)(),i=(0,g.lm)(),{mutateConfig:a}=(0,K.Z)(),{isLoading:A}=a,[k,w]=(0,e.useState)(!1),f=()=>w(r=>!r),[q,R]=(0,e.useReducer)(Y,c,()=>L(s)),{initialData:_,modifiedData:u}=q,tt=r=>{r.preventDefault(),f()},et=async()=>{l("willEditMediaLibraryConfig"),await a.mutateAsync(u),f(),R(J()),i({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},at=({target:{name:r,value:nt}})=>{R(j({name:r,value:nt}))};return(0,g.go)(),e.createElement(I.A,null,e.createElement(O.o,{"aria-busy":A},e.createElement("form",{onSubmit:tt},e.createElement(W.T,{navigationAction:e.createElement(g.rU,{startIcon:e.createElement(G.Z,null),to:`/plugins/${m.Z}`,id:"go-back"},n({id:(0,o.Z)("config.back"),defaultMessage:"Back"})),primaryAction:e.createElement(P.z,{size:"S",startIcon:e.createElement(y.Z,null),disabled:N()(u,_),type:"submit"},n({id:"global.save",defaultMessage:"Save"})),subtitle:n({id:(0,o.Z)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:n({id:(0,o.Z)("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.createElement($.D,null,e.createElement(Z,{"data-testid":"settings",pageSize:u.pageSize||"",sort:u.sort||"",onChange:at})),e.createElement(g.QH,{bodyText:{id:(0,o.Z)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(y.Z,null),isConfirmButtonLoading:A,isOpen:k,onToggleDialog:f,onConfirm:et,variantRightButton:"success-light"}))))};T.propTypes={config:d().shape({pageSize:d().number,sort:d().string}).isRequired};const X=T}}]);
