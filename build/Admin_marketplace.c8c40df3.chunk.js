"use strict";(self.webpackChunkmedigenie_app=self.webpackChunkmedigenie_app||[]).push([[5516],{9226:(z,k,n)=>{n.d(k,{Z:()=>b});var e=n(67294);const b=(o,R)=>{const[N,w]=(0,e.useState)(o);return(0,e.useEffect)(()=>{const T=setTimeout(()=>{w(o)},R);return()=>{clearTimeout(T)}},[o,R]),N}},62085:(z,k,n)=>{n.r(k),n.d(k,{MarketPlacePage:()=>ve,default:()=>xt});var e=n(67294),v=n(86896),b=n(64593),o=n(84338),R=n(17034),N=n(185),w=n(49066),T=n(82777),f=n(11047),B=n(60633),h=n(41580),ke=n(49123),V=n(42761),_=n(45697),t=n.n(_),be=n(53979),ee=n(80994),Z=n(85893);const Re=a=>(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...a,children:(0,Z.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),Ce=Re,U=({isOnline:a,npmPackageType:s})=>{const{formatMessage:i}=(0,v.Z)(),{trackUsage:l}=(0,o.rS)(),r=s==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(be.T,{title:i({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:i({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:a&&e.createElement(ee.Q,{startIcon:e.createElement(Ce,null),variant:"tertiary",href:`https://market.strapi.io/submit-${s}`,onClick:()=>l(r),isExternal:!0},i({id:`admin.pages.MarketPlacePage.submit.${s}.link`,defaultMessage:`Submit ${s}`}))})},te=U;U.defaultProps={npmPackageType:"plugin"},U.propTypes={isOnline:t().bool.isRequired,npmPackageType:t().string};var xe=n(87751);const Se=()=>{const a=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[s,i]=(0,e.useState)(a),l=()=>i(!0),r=()=>i(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",l),window.addEventListener("offline",r),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",r)}),[]),s},Te=a=>(0,Z.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,Z.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,Z.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),Ze=Te;var ae=n(17772),D=n(52624);const De=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,o.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>s("didMissMarketplacePlugin")},e.createElement(o.Y_,{title:a({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:a({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(Ze,null),iconBackground:"alternative100",endAction:e.createElement(D.J,{as:ae.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Le=n(77197),Ne=n(11276),Oe=n(74571),L=n(71997),we=n(23450),Be=n.n(we),C=n(75515),H=n(84495),Ie=n(86783),je=n(61473),Ae=n(85018),$e=n(36625),ne=n.n($e),Q=n(29728),se=n(65186);const I=({description:a,installMessage:s,disabled:i,handleCopy:l,pluginName:r})=>e.createElement(H.u,{"data-testid":`tooltip-${r}`,description:a},e.createElement(h.x,null,e.createElement(Q.z,{size:"S",startIcon:e.createElement(se.Z,null),variant:"secondary",disabled:i,onClick:l},s))),G=({strapiPeerDepVersion:a,strapiAppVersion:s,handleCopy:i,pluginName:l})=>{const{formatMessage:r}=(0,v.Z)(),g=ne().validRange(a),c=ne().satisfies(s,g),d=r({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(s){if(!g)return e.createElement(I,{installMessage:d,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:s}),handleCopy:i});if(!c)return e.createElement(I,{installMessage:d,pluginName:l,description:r({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:s,versionRange:g}),disabled:!0})}return e.createElement(Q.z,{size:"S",startIcon:e.createElement(se.Z,null),variant:"secondary",onClick:i},d)};I.defaultProps={disabled:!1,handleCopy:null},I.propTypes={description:t().string.isRequired,installMessage:t().string.isRequired,disabled:t().bool,handleCopy:t().func,pluginName:t().string.isRequired},G.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},G.propTypes={strapiAppVersion:t().string,strapiPeerDepVersion:t().string,handleCopy:t().func.isRequired,pluginName:t().string.isRequired};const Fe=G,W=({isInstalled:a,isInDevelopmentMode:s,commandToCopy:i,strapiAppVersion:l,strapiPeerDepVersion:r,pluginName:g})=>{const c=(0,o.lm)(),{formatMessage:d}=(0,v.Z)(),{trackUsage:u}=(0,o.rS)(),m=()=>{navigator.clipboard.writeText(i),u("willInstallPlugin"),c({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})};return a?e.createElement(h.x,{paddingLeft:4},e.createElement(D.J,{as:Ae.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(C.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},d({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):s?e.createElement(Fe,{strapiAppVersion:l,strapiPeerDepVersion:r,handleCopy:m,pluginName:g}):null};W.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},W.propTypes={isInstalled:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,commandToCopy:t().string.isRequired,strapiAppVersion:t().string,strapiPeerDepVersion:t().string,pluginName:t().string.isRequired};const ze=W;var Ve=n(70004),Ue=n(57750);const He=a=>(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,Z.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),Qe=He;var Ge=n(7217);const We=(0,L.ZP)(Ve.i)`
  width: ${(0,o.Q1)(12)};
  transform: rotate(90deg);
`,K=({githubStars:a,npmDownloads:s,npmPackageType:i})=>{const{formatMessage:l}=(0,v.Z)();return e.createElement(f.k,{gap:1},!!a&&e.createElement(e.Fragment,null,e.createElement(D.J,{as:Ue.Z,height:(0,o.Q1)(12),width:(0,o.Q1)(12),"aria-hidden":!0}),e.createElement(D.J,{as:Qe,height:(0,o.Q1)(12),width:(0,o.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:a,package:i})},e.createElement(C.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},a)),e.createElement(We,{unsetMargin:!1,background:"neutral200"})),e.createElement(D.J,{as:Ge.Z,height:(0,o.Q1)(12),width:(0,o.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":l({id:`admin.pages.MarketPlacePage.${i}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:s,package:i})},e.createElement(C.Z,{variant:"pi",textColor:"neutral800",lineHeight:16},s)))};K.defaultProps={githubStars:0,npmDownloads:0},K.propTypes={githubStars:t().number,npmDownloads:t().number,npmPackageType:t().string.isRequired};const Ke=K,Je=(0,L.ZP)(C.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,J=({npmPackage:a,isInstalled:s,useYarn:i,isInDevelopmentMode:l,npmPackageType:r,strapiAppVersion:g})=>{const{attributes:c}=a,{formatMessage:d}=(0,v.Z)(),{trackUsage:u}=(0,o.rS)(),m=i?`yarn add ${c.npmPackageName}`:`npm install ${c.npmPackageName}`,P=d({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),M=`https://market.strapi.io/${Be().plural(r)}/${c.slug}`;return e.createElement(f.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(h.x,null,e.createElement(f.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(h.x,{as:"img",src:c.logo.url,alt:`${c.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(Ke,{githubStars:c.githubStars,npmDownloads:c.npmDownloads,npmPackageType:r})),e.createElement(h.x,{paddingTop:4},e.createElement(C.Z,{as:"h3",variant:"delta"},e.createElement(f.k,{alignItems:"center"},c.name,c.validated&&!c.madeByStrapi&&e.createElement(H.u,{description:d({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(f.k,null,e.createElement(D.J,{as:Ie.Z,marginLeft:2,color:"success600"}))),c.madeByStrapi&&e.createElement(H.u,{description:P},e.createElement(f.k,null,e.createElement(h.x,{as:"img",src:je,alt:P,marginLeft:1,width:6,height:"auto"})))))),e.createElement(h.x,{paddingTop:2},e.createElement(Je,{as:"p",variant:"omega",textColor:"neutral600"},c.description))),e.createElement(f.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(ee.Q,{size:"S",href:M,isExternal:!0,endIcon:e.createElement(ae.Z,null),"aria-label":d({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:c.name}),variant:"tertiary",onClick:()=>u("didPluginLearnMore")},d({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(ze,{isInstalled:s,isInDevelopmentMode:l,commandToCopy:m,strapiAppVersion:g,strapiPeerDepVersion:c.strapiVersion,pluginName:c.name})))};J.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},J.propTypes={npmPackage:t().shape({id:t().string.isRequired,attributes:t().shape({name:t().string.isRequired,description:t().string.isRequired,slug:t().string.isRequired,npmPackageName:t().string.isRequired,npmPackageUrl:t().string.isRequired,repositoryUrl:t().string.isRequired,logo:t().object.isRequired,developerName:t().string.isRequired,validated:t().bool.isRequired,madeByStrapi:t().bool.isRequired,strapiCompatibility:t().oneOf(["v3","v4"]),strapiVersion:t().string,githubStars:t().number,npmDownloads:t().number}).isRequired}).isRequired,isInstalled:t().bool.isRequired,useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool,npmPackageType:t().string.isRequired,strapiAppVersion:t().string};const Ye=J;var qe=n(86031);const ie=L.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:a})=>a.spaces[4]};
`;ie.propTypes={children:_.node.isRequired};const Xe=(0,L.ZP)(h.x)`
  background: ${({theme:a})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${a.colors.neutral150} 100%)`};
  opacity: 0.33;
`,_e=()=>e.createElement(ie,null,Array(12).fill(null).map((a,s)=>e.createElement(Xe,{key:`empty-plugin-card-${s}`,height:"234px",hasRadius:!0}))),re=({content:a})=>e.createElement(h.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(_e,null),e.createElement(h.x,{position:"absolute",top:11,width:"100%"},e.createElement(f.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(D.J,{as:qe.Z,color:"",width:"160px",height:"88px"}),e.createElement(h.x,{paddingTop:6},e.createElement(C.Z,{variant:"delta",as:"p",textColor:"neutral600"},a)))));re.propTypes={content:t().string.isRequired};const et=re,Y=({status:a,npmPackages:s,installedPackageNames:i,useYarn:l,isInDevelopmentMode:r,npmPackageType:g,strapiAppVersion:c,debouncedSearch:d})=>{const{formatMessage:u}=(0,v.Z)();if(a==="error")return e.createElement(f.k,{paddingTop:8},e.createElement(o.Hn,null));if(a==="loading")return e.createElement(f.k,{justifyContent:"center",paddingTop:8},e.createElement(Le.a,null,"Loading content..."));const m=u({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:d});return s.length===0?e.createElement(et,{content:m}):e.createElement(Ne.r,{gap:4,"data-testid":"marketplace-results"},s.map(P=>e.createElement(Oe.P,{col:4,s:6,xs:12,style:{height:"100%"},key:P.id},e.createElement(Ye,{npmPackage:P,isInstalled:i.includes(P.attributes.npmPackageName),useYarn:l,isInDevelopmentMode:r,npmPackageType:g,strapiAppVersion:c}))))};Y.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},Y.propTypes={status:t().string.isRequired,npmPackages:t().array,installedPackageNames:t().arrayOf(t().string),useYarn:t().bool.isRequired,isInDevelopmentMode:t().bool.isRequired,npmPackageType:t().string.isRequired,strapiAppVersion:t().string,debouncedSearch:t().string};const le=Y;var oe=n(40619),ce=n(82562);const tt=(0,L.ZP)(h.x)`
  font-weight: ${({theme:a})=>a.fontWeights.semiBold};

  span {
    font-size: ${({theme:a})=>a.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,de=({sortQuery:a,handleSelectChange:s})=>{const{formatMessage:i}=(0,v.Z)(),l={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(tt,null,e.createElement(oe.P,{size:"S",id:"sort-by-select",value:a,customizeContent:()=>i(l[a].selected),onChange:r=>{s({sort:r})},label:i({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(l).map(([r,g])=>e.createElement(ce.W,{key:r,value:r},i(g.option)))))};de.propTypes={sortQuery:t().string.isRequired,handleSelectChange:t().func.isRequired};const at=de;var nt=n(72775),st=n(70968),it=n(89597),rt=n(12160),lt=n(25896);const ge=({message:a,value:s,onChange:i,possibleFilters:l,onClear:r,customizeContent:g})=>{const c=(d,u)=>`${d} (${u})`;return e.createElement(oe.P,{"data-testid":`${a}-button`,label:a,placeholder:a,size:"M",onChange:i,onClear:r,value:s,customizeContent:g,multi:!0},Object.entries(l).map(([d,u])=>e.createElement(ce.W,{"data-testid":`${d}-${u}`,key:d,value:d},c(d,u))))};ge.propTypes={message:t().string.isRequired,value:t().array.isRequired,onChange:t().func.isRequired,possibleFilters:t().object.isRequired,onClear:t().func.isRequired,customizeContent:t().func.isRequired};const pe=ge,ue=({source:a,onToggle:s,query:i,npmPackageType:l,possibleCategories:r,possibleCollections:g,handleSelectChange:c,handleSelectClear:d})=>{const{formatMessage:u}=(0,v.Z)();return e.createElement(rt.J2,{source:a,padding:3,spacing:4,onBlur:()=>{}},e.createElement(lt.i,{onEscape:s},e.createElement(ct,{direction:"column",alignItems:"stretch",gap:1},e.createElement(pe,{message:u({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:i?.collections||[],onChange:m=>{c({collections:m})},onClear:()=>d("collections"),possibleFilters:g,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:m.length})}),l==="plugin"&&e.createElement(pe,{message:u({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:i?.categories||[],onChange:m=>{c({categories:m})},onClear:()=>d("categories"),possibleFilters:r,customizeContent:m=>u({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:m.length}),name:"categories"}))))};ue.propTypes={onToggle:t().func.isRequired,source:t().shape({current:t().instanceOf(Element)}).isRequired,query:t().object.isRequired,npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const ot=ue,ct=(0,L.ZP)(f.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,q=({name:a,handleRemove:s})=>e.createElement(h.x,{padding:1},e.createElement(nt.V,{icon:e.createElement(st.Z,null),onClick:s},a)),dt=(0,L.ZP)(Q.z)`
  height: ${({theme:a})=>a.sizes.input.S};
`,me=({possibleCollections:a,possibleCategories:s,npmPackageType:i,query:l,handleSelectClear:r,handleSelectChange:g})=>{const[c,d]=(0,e.useState)(!1),u=(0,e.useRef)(),{formatMessage:m}=(0,v.Z)(),P=()=>d(p=>!p),M=(p,E)=>{const x={[E]:l[E].filter(O=>O!==p)};g(x)};return e.createElement(e.Fragment,null,e.createElement(h.x,{paddingTop:1,paddingBottom:1},e.createElement(dt,{variant:"tertiary",ref:u,"data-testid":"filters-button",startIcon:e.createElement(it.Z,null),onClick:P,size:"S"},m({id:"app.utils.filters",defaultMessage:"Filters"})),c&&e.createElement(ot,{onToggle:P,source:u,query:l,handleSelectClear:r,handleSelectChange:g,possibleCollections:a,possibleCategories:s,npmPackageType:i})),l.collections?.map(p=>e.createElement(q,{name:p,key:p,handleRemove:()=>M(p,"collections")})),i==="plugin"&&l.categories?.map(p=>e.createElement(q,{name:p,key:p,handleRemove:()=>M(p,"categories")})))};q.propTypes={name:t().string.isRequired,handleRemove:t().func.isRequired},me.propTypes={npmPackageType:t().oneOf(["plugin","provider"]).isRequired,possibleCollections:t().object.isRequired,possibleCategories:t().object.isRequired,query:t().object.isRequired,handleSelectChange:t().func.isRequired,handleSelectClear:t().func.isRequired};const gt=me,fe=({pagination:a})=>e.createElement(h.x,{paddingTop:4},e.createElement(f.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(o.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(o.tU,{pagination:a})));fe.propTypes={pagination:t().shape({page:t().number.isRequired,pageCount:t().number.isRequired,pageSize:t().number.isRequired,total:t().number.isRequired}).isRequired};const pt=fe;var ut=n(9226);const mt=n.p+"9d5d788027e86620c234.svg",ft=()=>{const{formatMessage:a}=(0,v.Z)();return e.createElement(R.A,null,e.createElement(N.o,null,e.createElement(te,{isOnline:!1}),e.createElement(f.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,o.Q1)(120)},e.createElement(h.x,{paddingBottom:2},e.createElement(C.Z,{textColor:"neutral700",variant:"alpha"},a({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(h.x,{paddingBottom:6},e.createElement(C.Z,{textColor:"neutral700",variant:"epsilon"},a({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:mt,alt:"offline",style:{width:"88px",height:"88px"}}))))};var ht=n(14087),he=n(88767),Pe=n(52861),Pt=n(80129),j=n.n(Pt);const vt="https://market-api.strapi.io",Et=async(a={})=>{const{data:s}=await Pe.Z.get(`${vt}/plugins`,{params:a,paramsSerializer:{encode:j().parse,serialize:j().stringify}});return s},Mt=(a,s)=>{const i=(0,o.lm)();return(0,he.useQuery)(["list-marketplace-plugins",s],()=>Et(s),{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},yt="https://market-api.strapi.io",kt=async(a={})=>{const{data:s}=await Pe.Z.get(`${yt}/providers`,{params:a,paramsSerializer:{encode:j().parse,serialize:j().stringify}});return s},bt=(a,s)=>{const i=(0,o.lm)();return(0,he.useQuery)(["list-marketplace-providers",s],()=>kt(s),{onSuccess(){a&&a()},onError(){i({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Rt({npmPackageType:a,debouncedSearch:s,query:i,tabQuery:l}){const{notifyStatus:r}=(0,ht.G)(),{formatMessage:g}=(0,v.Z)(),c=g({id:"global.marketplace",defaultMessage:"Marketplace"}),d=()=>{r(g({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},u={page:i?.page||1,pageSize:i?.pageSize||24},{data:m,status:P}=Mt(d,{...l.plugin,pagination:u,search:s}),{data:M,status:p}=bt(d,{...l.provider,pagination:u,search:s}),E=a==="plugin"?m:M,x=a==="plugin"?P:p,[O,A]=(0,e.useState)({}),[$,F]=(0,e.useState)({});(0,e.useEffect)(()=>{x==="success"&&A(E.meta.collections),P==="success"&&F(m.meta.categories)},[m?.meta.categories,P,E?.meta.collections,x]);const{pagination:X}=x==="success"?E.meta:{};return{pluginsResponse:m,providersResponse:M,pluginsStatus:P,providersStatus:p,possibleCollections:O,possibleCategories:$,pagination:X}}const Ct=Rt,ve=()=>{const{formatMessage:a}=(0,v.Z)(),{trackUsage:s}=(0,o.rS)(),i=(0,e.useRef)(s),l=(0,o.lm)(),[{query:r},g]=(0,o.Kx)(),c=(0,ut.Z)(r?.search,500)||"",{autoReload:d,dependencies:u,useYarn:m,strapiVersion:P}=(0,o.L7)(),M=Se(),p=r?.npmPackageType||"plugin",[E,x]=(0,e.useState)({plugin:p==="plugin"?{...r}:{},provider:p==="provider"?{...r}:{}});(0,o.go)(),(0,e.useEffect)(()=>{i.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{d||l({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"},blockTransition:!0})},[l,d]);const{pluginsResponse:O,providersResponse:A,pluginsStatus:$,providersStatus:F,possibleCollections:X,possibleCategories:St,pagination:Ee}=Ct({npmPackageType:p,debouncedSearch:c,query:r,tabQuery:E});if(!M)return e.createElement(ft,null);const Tt=S=>{const y=S===0?"plugin":"provider",Dt=E[y]&&Object.keys(E[y]).length;g(Dt?{...E[y],search:r?.search||"",npmPackageType:y,page:1}:{npmPackageType:y,collections:[],categories:[],sort:"name:asc",page:1,search:r?.search||""})},Me=S=>{g({...S,page:1}),x(y=>({...y,[p]:{...y[p],...S}}))},Zt=S=>{g({[S]:[],page:null},"remove"),x(y=>({...y,[p]:{}}))},ye=Object.keys(u);return e.createElement(R.A,null,e.createElement(N.o,null,e.createElement(b.q,{title:a({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(te,{isOnline:M,npmPackageType:p}),e.createElement(w.D,null,e.createElement(T.v,{label:a({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(p),onTabChange:Tt},e.createElement(f.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(B.m,null,e.createElement(B.O,null,a({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",$==="success"?`(${O.meta.pagination.total})`:"..."),e.createElement(B.O,null,a({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",F==="success"?`(${A.meta.pagination.total})`:"...")),e.createElement(h.x,{width:"25%"},e.createElement(ke.w,{name:"searchbar",onClear:()=>g({search:"",page:1}),value:r?.search,onChange:S=>g({search:S.target.value,page:1}),clearLabel:a({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},a({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(f.k,{paddingBottom:4,gap:2},e.createElement(at,{sortQuery:r?.sort||"name:asc",handleSelectChange:Me}),e.createElement(gt,{npmPackageType:p,possibleCollections:X,possibleCategories:St,query:r||{},handleSelectChange:Me,handleSelectClear:Zt})),e.createElement(V.n,null,e.createElement(V.x,null,e.createElement(le,{npmPackages:O?.data,status:$,installedPackageNames:ye,useYarn:m,isInDevelopmentMode:d,npmPackageType:"plugin",strapiAppVersion:P,debouncedSearch:c})),e.createElement(V.x,null,e.createElement(le,{npmPackages:A?.data,status:F,installedPackageNames:ye,useYarn:m,isInDevelopmentMode:d,npmPackageType:"provider",debouncedSearch:c})))),Ee&&e.createElement(pt,{pagination:Ee}),e.createElement(h.x,{paddingTop:8},e.createElement(De,null)))))},xt=()=>e.createElement(o.O4,{permissions:xe.Z.marketplace.main},e.createElement(ve,null))},17034:(z,k,n)=>{n.d(k,{A:()=>T});var e=n(85893),v=n(67294),b=n(45697),o=n(71997),R=n(41580);const N=(0,o.ZP)(R.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:f})=>f?"auto 1fr":"1fr"};
`,w=(0,o.ZP)(R.x)`
  overflow-x: hidden;
`,T=({sideNav:f,children:B})=>(0,e.jsxs)(N,{hasSideNav:!!f,children:[f,(0,e.jsx)(w,{paddingBottom:10,children:B})]});T.defaultProps={sideNav:void 0},T.propTypes={children:b.node.isRequired,sideNav:b.node}},57750:(z,k,n)=>{n.d(k,{Z:()=>b});var e=n(85893);const v=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),b=v}}]);