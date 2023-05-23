(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[7692],{76539:(M,u,e)=>{"use strict";e.d(u,{Z:()=>s});var t=e(67294),o=e(86896),n=e(45697),a=e.n(n),E=e(86597),i=e(85018),T=e(67109),f=e(53979),c=e(11047),A=e(29728),v=e(30815),P=e(48474);const l=({onRegenerate:y,idToRegenerate:R,backUrl:K,onError:U})=>{const{formatMessage:b}=(0,o.Z)(),[D,N]=(0,t.useState)(!1),{regenerateData:S,isLoadingConfirmation:H}=(0,P.rW)(K,R,y,U),Z=async()=>{S(),N(!1)};return t.createElement(t.Fragment,null,t.createElement(A.z,{startIcon:t.createElement(v.Z,null),type:"button",size:"S",variant:"tertiary",onClick:()=>N(!0),name:"regenerate"},b({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(E.QH,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(v.Z,null),isConfirmButtonLoading:H,isOpen:D,onToggleDialog:()=>N(!1),onConfirm:Z,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};l.defaultProps={onRegenerate(){},onError:void 0},l.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired,onError:a().func};const r=l,p=({title:y,token:R,setToken:K,canEditInputs:U,canRegenerate:b,isSubmitting:D,backUrl:N,regenerateUrl:S,onErrorRegenerate:H})=>{const{formatMessage:Z}=(0,o.Z)(),G=Q=>{K({...R,accessKey:Q})};return t.createElement(f.T,{title:R?.name||Z(y),primaryAction:U?t.createElement(c.k,{gap:2},b&&R?.id&&t.createElement(r,{backUrl:S,onRegenerate:G,idToRegenerate:R?.id,onError:H}),t.createElement(A.z,{disabled:D,loading:D,startIcon:t.createElement(i.Z,null),type:"submit",size:"S"},Z({id:"global.save",defaultMessage:"Save"}))):b&&R?.id&&t.createElement(r,{onRegenerate:G,idToRegenerate:R?.id,backUrl:S}),navigationAction:t.createElement(E.rU,{startIcon:t.createElement(T.Z,null),to:N},Z({id:"global.back",defaultMessage:"Back"})),ellipsis:!0})};p.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired,onErrorRegenerate:a().func},p.defaultProps={token:void 0,onErrorRegenerate:void 0};const s=p},60401:(M,u,e)=>{"use strict";e.d(u,{Z:()=>A});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(40619),i=e(82562),T=e(75515),f=e(75056);const c=({token:v,errors:P,values:l,onChange:r,isCreating:p})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(t.Fragment,null,t.createElement(E.P,{name:"lifespan",label:s({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:l.lifespan!==null?l.lifespan:"0",error:P.lifespan?s(P.lifespan?.id?P.lifespan:{id:P.lifespan,defaultMessage:P.lifespan}):null,onChange:y=>{r({target:{name:"lifespan",value:y}})},required:!0,disabled:!p,placeholder:"Select"},t.createElement(i.W,{value:"604800000"},s({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(i.W,{value:"2592000000"},s({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(i.W,{value:"7776000000"},s({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(i.W,{value:"0"},s({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(T.Z,{variant:"pi",textColor:"neutral600"},!p&&`${s({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,f.IX)(v?.createdAt,parseInt(l.lifespan,10))}`))};c.propTypes={errors:n().shape({lifespan:n().string}),onChange:n().func.isRequired,values:n().shape({lifespan:n().oneOfType([n().number,n().string])}).isRequired,isCreating:n().bool.isRequired,token:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},c.defaultProps={errors:{},token:{}};const A=c},24122:(M,u,e)=>{"use strict";e.d(u,{Z:()=>P});var t=e(67294),o=e(86896),n=e(86597),a=e(12028),E=e(65186),i=e(69427),T=e(45697),f=e.n(T),c=e(74855),A=e.n(c);const v=({token:l,tokenType:r})=>{const{formatMessage:p}=(0,o.Z)(),s=(0,n.lm)(),{trackUsage:y}=(0,n.rS)(),R=(0,t.useRef)(y);return t.createElement(n.Y_,{endAction:l&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(c.CopyToClipboard,{onCopy:()=>{R.current("didCopyTokenKey",{tokenType:r}),s({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:l},t.createElement(a.h,{label:p({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(E.Z,null),style:{padding:0,height:"1rem"}}))),title:l||p({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:p(l?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(i.Z,null),iconBackground:"neutral100"})};v.defaultProps={token:null},v.propTypes={token:f().string,tokenType:f().string.isRequired};const P=v},40695:(M,u,e)=>{"use strict";e.d(u,{Z:()=>T});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(64256);const i=({errors:f,values:c,onChange:A,canEditInputs:v})=>{const{formatMessage:P}=(0,a.Z)();return t.createElement(E.g,{label:P({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:f.description?P(f.description?.id?f.description:{id:f.description,defaultMessage:f.description}):null,onChange:A,disabled:!v},c.description)};i.propTypes={errors:n().shape({description:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({description:n().string}).isRequired},i.defaultProps={errors:{}};const T=i},61053:(M,u,e)=>{"use strict";e.d(u,{Z:()=>T});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(16364);const i=({errors:f,values:c,onChange:A,canEditInputs:v})=>{const{formatMessage:P}=(0,a.Z)();return t.createElement(E.o,{name:"name",error:f.name?P(f.name?.id?f.name:{id:f.name,defaultMessage:f.name}):null,label:P({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:A,value:c.name,disabled:!v,required:!0})};i.propTypes={errors:n().shape({name:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string}).isRequired},i.defaultProps={errors:{}};const T=i},31065:(M,u,e)=>{"use strict";e.d(u,{Z:()=>f});var t=e(67294),o=e(45697),n=e.n(o),a=e(86896),E=e(40619),i=e(82562);const T=({name:c,errors:A,values:v,onChange:P,canEditInputs:l,options:r,label:p})=>{const{formatMessage:s}=(0,a.Z)();return t.createElement(E.P,{name:c,label:s({id:p.id,defaultMessage:p.defaultMessage}),value:v&&v[c],error:A[c]?s(A[c]?.id?A[c]:{id:A[c],defaultMessage:A[c]}):null,onChange:P,placeholder:"Select",required:!0,disabled:!l},r&&r.map(({value:y,label:R})=>t.createElement(i.W,{key:y,value:y},s(R))))};T.propTypes={name:n().string,options:n().arrayOf(n().shape({label:n().shape({id:n().string,defaultMessage:n().string}),value:n().string})),errors:n().shape({type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({type:n().string}).isRequired,label:n().shape({id:n().string,defaultMessage:n().string}).isRequired},T.defaultProps={name:"type",errors:{},options:[]};const f=T},47670:(M,u,e)=>{"use strict";e.d(u,{Z:()=>t,f:()=>o});const t="api-token",o="transfer-token"},57692:(M,u,e)=>{"use strict";e.d(u,{Z:()=>_e});var t=e(67294),o=e(86896),n=e(86597),a=e(185),E=e(49066),i=e(11047),T=e(41054),f=e(16550),c=e(88767),A=e(19631),v=e(75056),P=e(53979),l=e(29728),r=e(85018),p=e(45697),s=e.n(p);const y=({apiTokenName:d})=>{const{formatMessage:g}=(0,o.Z)();return(0,n.go)(),t.createElement(a.o,{"aria-busy":"true"},t.createElement(n.SL,{name:"API Tokens"}),t.createElement(P.T,{primaryAction:t.createElement(l.z,{disabled:!0,startIcon:t.createElement(r.Z,null),type:"button",size:"L"},g({id:"global.save",defaultMessage:"Save"})),title:d||g({id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"})}),t.createElement(E.D,null,t.createElement(n.dO,null)))};y.defaultProps={apiTokenName:null},y.propTypes={apiTokenName:s().string};const R=y;var K=e(87751);const U=(0,t.createContext)({}),b=({children:d,...g})=>t.createElement(U.Provider,{value:g},d),D=()=>(0,t.useContext)(U);b.propTypes={children:s().node.isRequired};const S=(d,g=[])=>({...d,selectedAction:null,routes:[],selectedActions:[],data:(0,v.mk)(g)});var H=e(18172),Z=e(97019),G=e.n(Z);const Q={data:{},selectedActions:[]},J=(d,g)=>(0,H.ZP)(d,m=>{switch(g.type){case"ON_CHANGE":{m.selectedActions.includes(g.value)?G()(m.selectedActions,g.value):m.selectedActions.push(g.value);break}case"SELECT_ALL_IN_PERMISSION":{g.value.every(x=>m.selectedActions.includes(x.actionId))?g.value.forEach(x=>{G()(m.selectedActions,x.actionId)}):g.value.forEach(x=>{m.selectedActions.push(x.actionId)});break}case"SELECT_ALL_ACTIONS":{m.selectedActions=[...m.data.allActionsIds];break}case"ON_CHANGE_READ_ONLY":{const I=m.data.allActionsIds.filter(x=>x.includes("find")||x.includes("findOne"));m.selectedActions=[...I];break}case"UPDATE_PERMISSIONS_LAYOUT":{m.data=(0,v.mk)(g.value);break}case"UPDATE_ROUTES":{m.routes={...g.value};break}case"UPDATE_PERMISSIONS":{m.selectedActions=[...g.value];break}case"SET_SELECTED_ACTION":{m.selectedAction=g.value;break}default:return m}});var w=e(11276),V=e(74571),$=e(75515),z=e(41580),ce=e(48403),se=e.n(ce),ae=e(48734),oe=e(74756),Ae=e(63081),ve=e(36213),Ce=e(78114),re=e(46449);const Pe=re.iv`
  background: ${d=>d.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Me=(0,re.ZP)(z.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${d=>d.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${d=>d.isActive&&Pe}
  &:hover {
    ${Pe}
  }
`,xe=re.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:d})=>d.colors.neutral150};
`,pe=({controllers:d,label:g,orderNumber:m,disabled:I,onExpanded:x,indexExpandendCollapsedContent:h})=>{const{value:{onChangeSelectAll:j,onChange:Y,selectedActions:W,setSelectedAction:_,selectedAction:ee}}=D(),[F,le]=(0,t.useState)(!1),{formatMessage:te}=(0,o.Z)(),L=()=>{le(B=>!B),x(m)};(0,t.useEffect)(()=>{h!==null&&h!==m&&F&&le(!1)},[h,m,F]);const q=B=>B===ee;return t.createElement(ae.U,{expanded:F,onToggle:L,variant:m%2?"primary":"secondary"},t.createElement(oe.B,{title:se()(g)}),t.createElement(Ae.v,null,d?.map(B=>{const de=B.actions.every(O=>W.includes(O.actionId)),Ee=B.actions.some(O=>W.includes(O.actionId));return t.createElement(z.x,{key:`${g}.${B?.controller}`},t.createElement(i.k,{justifyContent:"space-between",alignItems:"center",padding:4},t.createElement(z.x,{paddingRight:4},t.createElement($.Z,{variant:"sigma",textColor:"neutral600"},B?.controller)),t.createElement(xe,null),t.createElement(z.x,{paddingLeft:4},t.createElement(ve.X,{value:de,indeterminate:!de&&Ee,onValueChange:()=>{j({target:{value:[...B.actions]}})},disabled:I},te({id:"app.utils.select-all",defaultMessage:"Select all"})))),t.createElement(w.r,{gap:4,padding:4},B?.actions&&B?.actions.map(O=>t.createElement(V.P,{col:6,key:O.actionId},t.createElement(Me,{isActive:q(O.actionId),padding:2,hasRadius:!0},t.createElement(ve.X,{value:W.includes(O.actionId),name:O.actionId,onValueChange:()=>{Y({target:{value:O.actionId}})},disabled:I},O.action),t.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>_({target:{value:O.actionId}}),style:{display:"inline-flex",alignItems:"center"}},t.createElement(Ce.Z,null)))))))})))};pe.defaultProps={controllers:[],orderNumber:0,disabled:!1,onExpanded:()=>null,indexExpandendCollapsedContent:null},pe.propTypes={controllers:s().array,orderNumber:s().number,label:s().string.isRequired,disabled:s().bool,onExpanded:s().func,indexExpandendCollapsedContent:s().number};const Oe=pe,ue=({section:d,...g})=>{const[m,I]=(0,t.useState)(null),x=h=>I(h);return t.createElement(z.x,{padding:4,background:"neutral0"},d&&d.map((h,j)=>t.createElement(Oe,{key:h.apiId,label:h.label,controllers:h.controllers,orderNumber:j,indexExpandendCollapsedContent:m,onExpanded:x,name:h.apiId,...g})))};ue.defaultProps={section:null},ue.propTypes={section:s().arrayOf(s().object)};const Re=ue;var De=e(35161),Ie=e.n(De),Se=e(13217),ke=e.n(Se);const Le=d=>{switch(d){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Be=(0,re.ZP)(z.x)`
  margin: -1px;
  border-radius: ${({theme:d})=>d.spaces[1]} 0 0 ${({theme:d})=>d.spaces[1]};
`;function ge({route:d}){const{formatMessage:g}=(0,o.Z)(),{method:m,handler:I,path:x}=d,h=x?ke()(x.split("/")):[],[j="",Y=""]=I?I.split("."):[],W=Le(d.method);return t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},g({id:"Settings.apiTokens.createPage.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",t.createElement("span",null,j),t.createElement($.Z,{variant:"delta",textColor:"primary600"},".",Y)),t.createElement(i.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},t.createElement(Be,{background:W.background,borderColor:W.border,padding:2},t.createElement($.Z,{fontWeight:"bold",textColor:W.text},m)),t.createElement(z.x,{paddingLeft:2,paddingRight:2},Ie()(h,_=>t.createElement($.Z,{key:_,textColor:_.includes(":")?"neutral600":"neutral900"},"/",_)))))}ge.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},ge.propTypes={route:s().shape({handler:s().string,method:s().string,path:s().string})};const Ue=ge,be=()=>{const{value:{selectedAction:d,routes:g}}=D(),{formatMessage:m}=(0,o.Z)(),I=d?.split(".")[0];return t.createElement(V.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},d?t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},g[I]?.map(x=>x.config.auth?.scope?.includes(d)||x.handler===d?t.createElement(Ue,{key:x.handler,route:x}):null)):t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h3"},m({id:"Settings.apiTokens.createPage.permissions.header.title",defaultMessage:"Advanced settings"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},m({id:"Settings.apiTokens.createPage.permissions.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Ze=({...d})=>{const{value:{data:g}}=D(),{formatMessage:m}=(0,o.Z)();return t.createElement(w.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},t.createElement(V.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:2},t.createElement($.Z,{variant:"delta",as:"h2"},m({id:"Settings.apiTokens.createPage.permissions.title",defaultMessage:"Permissions"})),t.createElement($.Z,{as:"p",textColor:"neutral600"},m({id:"Settings.apiTokens.createPage.permissions.description",defaultMessage:"Only actions bound by a route are listed below."}))),g?.permissions&&t.createElement(Re,{section:g?.permissions,...d})),t.createElement(be,null))},We=(0,t.memo)(Ze);var Ke=e(60401),Ne=e(61053),$e=e(40695),je=e(31065);const me=({errors:d,onChange:g,canEditInputs:m,isCreating:I,values:x,apiToken:h,onDispatch:j,setHasChangedPermissions:Y})=>{const{formatMessage:W}=(0,o.Z)(),_=({target:{value:F}})=>{Y(!1),F==="full-access"&&j({type:"SELECT_ALL_ACTIONS"}),F==="read-only"&&j({type:"ON_CHANGE_READ_ONLY"})},ee=[{value:"read-only",label:{id:"Settings.tokens.types.read-only",defaultMessage:"Read-only"}},{value:"full-access",label:{id:"Settings.tokens.types.full-access",defaultMessage:"Full access"}},{value:"custom",label:{id:"Settings.tokens.types.custom",defaultMessage:"Custom"}}];return t.createElement(z.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:4},t.createElement($.Z,{variant:"delta",as:"h2"},W({id:"global.details",defaultMessage:"Details"})),t.createElement(w.r,{gap:5},t.createElement(V.P,{key:"name",col:6,xs:12},t.createElement(Ne.Z,{errors:d,values:x,canEditInputs:m,onChange:g})),t.createElement(V.P,{key:"description",col:6,xs:12},t.createElement($e.Z,{errors:d,values:x,canEditInputs:m,onChange:g})),t.createElement(V.P,{key:"lifespan",col:6,xs:12},t.createElement(Ke.Z,{isCreating:I,errors:d,values:x,onChange:g,token:h})),t.createElement(V.P,{key:"type",col:6,xs:12},t.createElement(je.Z,{values:x,errors:d,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:F=>{_({target:{value:F}}),g({target:{name:"type",value:F}})},options:ee,canEditInputs:m})))))};me.propTypes={errors:s().shape({name:s().string,description:s().string,lifespan:s().string,type:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string,description:s().string,lifespan:s().oneOfType([s().number,s().string]),type:s().string}).isRequired,isCreating:s().bool.isRequired,apiToken:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string}),onDispatch:s().func.isRequired,setHasChangedPermissions:s().func.isRequired},me.defaultProps={errors:{},apiToken:{}};const Fe=me;var ze=e(24122),He=e(76539),ie=e(47670);const Ve="Name already taken",_e=()=>{(0,n.go)();const{formatMessage:d}=(0,o.Z)(),{lockApp:g,unlockApp:m}=(0,n.o1)(),I=(0,n.lm)(),x=(0,f.k6)(),[h,j]=(0,t.useState)(x.location.state?.apiToken.accessKey?{...x.location.state.apiToken}:null),{trackUsage:Y}=(0,n.rS)(),W=(0,t.useRef)(Y),{setCurrentStep:_}=(0,n.c1)(),{allowedActions:{canCreate:ee,canUpdate:F,canRegenerate:le}}=(0,n.ss)(K.Z.settings["api-tokens"]),[te,L]=(0,t.useReducer)(J,Q,C=>S(C,{})),{params:{id:q}}=(0,f.$B)("/settings/api-tokens/:id"),{get:B,post:de,put:Ee}=(0,n.kY)(),O=q==="create";(0,c.useQuery)("content-api-permissions",async()=>{const[C,X]=await Promise.all(["/admin/content-api/permissions","/admin/content-api/routes"].map(async ne=>{const{data:k}=await B(ne);return k.data}));L({type:"UPDATE_PERMISSIONS_LAYOUT",value:C}),L({type:"UPDATE_ROUTES",value:X}),h&&(h?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),h?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),h?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:h?.permissions}))},{onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),(0,t.useEffect)(()=>{W.current(O?"didAddTokenFromList":"didEditTokenFromList",{tokenType:ie.Z})},[O]);const{status:Ge}=(0,c.useQuery)(["api-token",q],async()=>{const{data:{data:C}}=await B(`/admin/api-tokens/${q}`);return j({...C}),C?.type==="read-only"&&L({type:"ON_CHANGE_READ_ONLY"}),C?.type==="full-access"&&L({type:"SELECT_ALL_ACTIONS"}),C?.type==="custom"&&L({type:"UPDATE_PERMISSIONS",value:C?.permissions}),C},{enabled:!O&&!h,onError(){I({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ye=async(C,X)=>{W.current(O?"willCreateToken":"willEditToken",{tokenType:ie.Z}),g();const ne=C.lifespan&&parseInt(C.lifespan,10)&&C.lifespan!=="0"?parseInt(C.lifespan,10):null;try{const{data:{data:k}}=O?await de("/admin/api-tokens",{...C,lifespan:ne,permissions:C.type==="custom"?te.selectedActions:null}):await Ee(`/admin/api-tokens/${q}`,{name:C.name,description:C.description,type:C.type,permissions:C.type==="custom"?te.selectedActions:null});O&&(x.replace(`/settings/api-tokens/${k.id}`,{apiToken:k}),_("apiTokens.success")),m(),j({...k}),I({type:"success",message:d(O?{id:"notification.success.apitokencreated",defaultMessage:"API Token successfully created"}:{id:"notification.success.apitokenedited",defaultMessage:"API Token successfully edited"})}),W.current(O?"didCreateToken":"didEditToken",{type:h.type,tokenType:ie.Z})}catch(k){const he=(0,A.Iz)(k.response.data);X.setErrors(he),k?.response?.data?.error?.message===Ve?I({type:"warning",message:k.response.data.message||"notification.error.tokennamenotunique"}):I({type:"warning",message:k?.response?.data?.message||"notification.error"}),m()}},[Xe,fe]=(0,t.useState)(!1),Qe={...te,onChange:({target:{value:C}})=>{fe(!0),L({type:"ON_CHANGE",value:C})},onChangeSelectAll:({target:{value:C}})=>{fe(!0),L({type:"SELECT_ALL_IN_PERMISSION",value:C})},setSelectedAction:({target:{value:C}})=>{L({type:"SET_SELECTED_ACTION",value:C})}},ye=F&&!O||ee&&O;return!O&&!h&&Ge!=="success"?t.createElement(R,{apiTokenName:h?.name}):t.createElement(b,{value:Qe},t.createElement(a.o,null,t.createElement(n.SL,{name:"API Tokens"}),t.createElement(T.J9,{validationSchema:v.fK,validateOnChange:!1,initialValues:{name:h?.name||"",description:h?.description||"",type:h?.type,lifespan:h?.lifespan?h.lifespan.toString():h?.lifespan},enableReinitialize:!0,onSubmit:(C,X)=>Ye(C,X)},({errors:C,handleChange:X,isSubmitting:ne,values:k,setFieldValue:he})=>(Xe&&k?.type!=="custom"&&he("type","custom"),t.createElement(n.l0,null,t.createElement(He.Z,{backUrl:"/settings/api-tokens",title:{id:"Settings.apiTokens.createPage.title",defaultMessage:"Create API Token"},token:h,setToken:j,canEditInputs:ye,canRegenerate:le,isSubmitting:ne,regenerateUrl:"/admin/api-tokens/"}),t.createElement(E.D,null,t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:6},Boolean(h?.name)&&t.createElement(ze.Z,{token:h?.accessKey,tokenType:ie.Z}),t.createElement(Fe,{errors:C,onChange:X,canEditInputs:ye,isCreating:O,values:k,apiToken:h,onDispatch:L,setHasChangedPermissions:fe}),t.createElement(We,{disabled:!ye||k?.type==="read-only"||k?.type==="full-access"}))))))))}},75056:(M,u,e)=>{"use strict";e.d(u,{IX:()=>E,fK:()=>c,mk:()=>v});var t=e(66115),o=e(77349),n=e(51991);const E=(P,l,r="en")=>{if(l&&typeof l=="number"){const p=l/24/60/60/1e3;return(0,t.Z)((0,o.Z)(new Date(P),p),"PPP",{locale:n[r]})}return"Unlimited"};var i=e(87561),T=e(86597);const c=i.Ry().shape({name:i.Z_(T.I0.string).max(100).required(T.I0.required),type:i.Z_(T.I0.string).oneOf(["read-only","full-access","custom"]).required(T.I0.required),description:i.Z_().nullable(),lifespan:i.Rx().integer().min(0).nullable().defined(T.I0.required)}),v=P=>{const l={allActionsIds:[],permissions:[]};return l.permissions=Object.keys(P).map(r=>({apiId:r,label:r.split("::")[1],controllers:Object.keys(P[r].controllers).map(p=>({controller:p,actions:P[r].controllers[p].map(s=>{const y=`${r}.${p}.${s}`;return r.includes("api::")&&l.allActionsIds.push(y),{action:s,actionId:y}}).flat()})).flat()})),l}},41848:M=>{function u(e,t,o,n){for(var a=e.length,E=o+(n?1:-1);n?E--:++E<a;)if(t(e[E],E,e))return E;return-1}M.exports=u},42118:(M,u,e)=>{var t=e(41848),o=e(62722),n=e(42351);function a(E,i,T){return i===i?n(E,i,T):t(E,o,T)}M.exports=a},74221:M=>{function u(e,t,o,n){for(var a=o-1,E=e.length;++a<E;)if(n(e[a],t))return a;return-1}M.exports=u},62722:M=>{function u(e){return e!==e}M.exports=u},65464:(M,u,e)=>{var t=e(29932),o=e(42118),n=e(74221),a=e(7518),E=e(278),i=Array.prototype,T=i.splice;function f(c,A,v,P){var l=P?n:o,r=-1,p=A.length,s=c;for(c===A&&(A=E(A)),v&&(s=t(c,a(v)));++r<p;)for(var y=0,R=A[r],K=v?v(R):R;(y=l(s,K,y,P))>-1;)s!==c&&T.call(s,y,1),T.call(c,y,1);return c}M.exports=f},42351:M=>{function u(e,t,o){for(var n=o-1,a=e.length;++n<a;)if(e[n]===t)return n;return-1}M.exports=u},97019:(M,u,e)=>{var t=e(5976),o=e(45604),n=t(o);M.exports=n},45604:(M,u,e)=>{var t=e(65464);function o(n,a){return n&&n.length&&a&&a.length?t(n,a):n}M.exports=o},13217:(M,u,e)=>{var t=e(14259);function o(n){var a=n==null?0:n.length;return a?t(n,1,a):[]}M.exports=o},48734:(M,u,e)=>{"use strict";e.d(u,{U:()=>P,y:()=>A});var t=e(85893),o=e(67294),n=e(46449),a=e(13819),E=e(2504),i=e(75515),T=e(11047),f=e(41580);const c=({theme:l,expanded:r,variant:p,disabled:s,error:y})=>y?`1px solid ${l.colors.danger600} !important`:s?`1px solid ${l.colors.neutral150}`:r?`1px solid ${l.colors.primary600}`:p==="primary"?`1px solid ${l.colors.neutral0}`:`1px solid ${l.colors.neutral100}`,A=(0,n.ZP)(i.Z)``,v=(0,n.ZP)(f.x)`
  border: ${c};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:l})=>l.colors.primary600};

    ${A} {
      color: ${({theme:l,expanded:r})=>r?void 0:l.colors.primary700};
    }

    ${i.Z} {
      color: ${({theme:l,expanded:r})=>r?void 0:l.colors.primary600};
    }

    & > ${T.k} {
      background: ${({theme:l})=>l.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:l})=>l.colors.primary200};
    }
  }
`,P=({children:l,disabled:r=!1,error:p,expanded:s=!1,hasErrorMessage:y=!0,id:R,onToggle:K,toggle:U,size:b="M",variant:D="primary",shadow:N})=>{const S=(0,E.M)(R),H=o.useMemo(()=>({expanded:s,onToggle:K,toggle:U,id:S,size:b,variant:D,disabled:r}),[r,s,S,K,b,U,D]);return(0,t.jsxs)(a.S.Provider,{value:H,children:[(0,t.jsx)(v,{"data-strapi-expanded":s,disabled:r,"aria-disabled":r,expanded:s,hasRadius:!0,variant:D,error:p,shadow:N,children:l}),p&&y&&(0,t.jsx)(f.x,{paddingTop:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"danger600",children:p})})]})}},63081:(M,u,e)=>{"use strict";e.d(u,{v:()=>a});var t=e(85893),o=e(13819),n=e(41580);const a=({children:E,...i})=>{const{expanded:T,id:f}=(0,o.A)();if(!T)return null;const c=`accordion-content-${f}`,A=`accordion-label-${f}`,v=`accordion-desc-${f}`;return(0,t.jsx)(n.x,{role:"region",id:c,"aria-labelledby":A,"aria-describedby":v,...i,children:E})}},13819:(M,u,e)=>{"use strict";e.d(u,{A:()=>n,S:()=>o});var t=e(67294);const o=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(o)},74756:(M,u,e)=>{"use strict";e.d(u,{B:()=>l});var t=e(85893),o=e(12645),n=e(46449),a=e(48734),E=e(13819);const i=({expanded:r,disabled:p,variant:s})=>{let y="neutral100";return r?y="primary100":p?y="neutral150":s==="primary"&&(y="neutral0"),y};var T=e(39785),f=e(52624),c=e(11047),A=e(75515);const v=(0,n.ZP)(T.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:p})=>p?r.colors.primary600:r.colors.neutral500};
    }
  }
`,P=(0,n.ZP)(c.k)`
  min-height: ${({theme:r,size:p})=>r.sizes.accordions[p]};
  border-radius: ${({theme:r,expanded:p})=>p?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,l=({title:r,description:p,as:s="span",togglePosition:y="right",action:R,...K})=>{const{onToggle:U,toggle:b,expanded:D,id:N,size:S,variant:H,disabled:Z}=(0,E.A)(),G=`accordion-content-${N}`,Q=`accordion-label-${N}`,Te=`accordion-desc-${N}`,J=S==="M"?6:4,w=S==="M"?J:J-2,V=i({expanded:D,disabled:Z,variant:H}),$={as:s,fontWeight:S==="S"?"bold":void 0,id:Q,textColor:D?"primary600":"neutral700",ellipsis:!0,variant:S==="M"?"delta":void 0},z=D?"primary600":"neutral600",ce=D?"primary200":"neutral200",se=S==="M"?`${32/16}rem`:`${24/16}rem`,ae=()=>{Z||(b&&!U?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),b()):U&&U())},oe=(0,t.jsx)(c.k,{justifyContent:"center",borderRadius:"50%",height:se,width:se,transform:D?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ce,cursor:Z?"not-allowed":"pointer",onClick:ae,shrink:0,children:(0,t.jsx)(f.J,{as:o.Z,width:S==="M"?`${11/16}rem`:`${8/16}rem`,color:D?"primary600":"neutral600"})});return(0,t.jsx)(P,{paddingBottom:w,paddingLeft:J,paddingRight:J,paddingTop:w,background:V,expanded:D,size:S,justifyContent:"space-between",cursor:Z?"not-allowed":"",children:(0,t.jsxs)(c.k,{gap:3,flex:1,maxWidth:"100%",children:[y==="left"&&oe,(0,t.jsx)(v,{onClick:ae,"aria-disabled":Z,"aria-expanded":D,"aria-controls":G,"aria-labelledby":Q,"data-strapi-accordion-toggle":!0,expanded:D,type:"button",flex:1,minWidth:0,...K,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.y,{...$,children:r}),p&&(0,t.jsx)(A.Z,{as:"p",id:Te,textColor:z,children:p})]})}),y==="right"&&(0,t.jsxs)(c.k,{gap:3,children:[oe,R]}),y==="left"&&R]})})}}}]);
