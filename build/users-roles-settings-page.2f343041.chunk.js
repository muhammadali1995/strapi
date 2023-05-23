(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8853],{20400:(E,f,t)=>{"use strict";t.r(f),t.d(f,{default:()=>jt});var e=t(67294),i=t(16550),n=t(86597),o=t(31498),l=t(81912),u=t(14087),g=t(17034),p=t(185),v=t(53979),y=t(29728),b=t(36989),L=t(49066),O=t(38939),R=t(8060),c=t(79031),x=t(37909),d=t(75515),Z=t(63237),j=t(96315),B=t(86896),W=t(88767),S=t(89031);const z=async(s,r)=>{try{const{get:a}=(0,n.tg)(),{data:m}=await a((0,S.Gc)("roles"));return r("The roles have loaded successfully"),m}catch{throw s({type:"warning",message:{id:"notification.error"}}),new Error("error")}},N=async(s,r)=>{try{const{del:a}=(0,n.tg)();await a(`${(0,S.Gc)("roles")}/${s}`)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}};var ee=t(45697),U=t.n(ee),ue=t(15234),k=t(11047),ae=t(12028),Q=t(4585),re=t(20022);const te=({sortedRoles:s,canDelete:r,permissions:a,setRoleToDelete:m,onDelete:C})=>{const{formatMessage:h}=(0,B.Z)(),{push:M}=(0,i.k6)(),[A,D]=C,T=P=>r&&!["public","authenticated"].includes(P.type),I=P=>{m(P),D(!A)},$=P=>{M(`/settings/${o.Z}/roles/${P}`)};return e.createElement(ue.p,null,s?.map(P=>e.createElement(c.Tr,{key:P.name,...(0,n.X7)({fn:()=>$(P.id)})},e.createElement(x.Td,{width:"20%"},e.createElement(d.Z,null,P.name)),e.createElement(x.Td,{width:"50%"},e.createElement(d.Z,null,P.description)),e.createElement(x.Td,{width:"30%"},e.createElement(d.Z,null,`${P.nb_users} ${h({id:"global.users",defaultMessage:"users"}).toLowerCase()}`)),e.createElement(x.Td,null,e.createElement(k.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:a.updateRole},e.createElement(ae.h,{onClick:()=>$(P.id),noBorder:!0,icon:e.createElement(Q.Z,null),label:h({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${P.name}`})})),T(P)&&e.createElement(n.jW,{permissions:a.deleteRole},e.createElement(ae.h,{onClick:()=>I(P.id),noBorder:!0,icon:e.createElement(re.Z,null),label:h({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${P.name}`})})))))))},me=te;te.defaultProps={canDelete:!1},te.propTypes={onDelete:U().array.isRequired,permissions:U().object.isRequired,setRoleToDelete:U().func.isRequired,sortedRoles:U().array.isRequired,canDelete:U().bool};const ge=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:r,locale:a}=(0,B.Z)(),{push:m}=(0,i.k6)(),C=(0,n.lm)(),{notifyStatus:h}=(0,u.G)(),[{query:M}]=(0,n.Kx)(),A=M?._q||"",[D,T]=(0,e.useState)(!1),[I,$]=(0,e.useState)(!1),[P,H]=(0,e.useState)();(0,n.go)();const V=(0,W.useQueryClient)(),G=(0,e.useMemo)(()=>({create:l.Z.createRole,read:l.Z.readRoles,update:l.Z.updateRole,delete:l.Z.deleteRole}),[]),{isLoading:F,allowedActions:{canRead:K,canDelete:q}}=(0,n.ss)(G),{isLoading:Zt,data:{roles:Ze},isFetching:St}=(0,W.useQuery)("get-roles",()=>z(C,h),{initialData:{},enabled:K}),{includes:Se}=(0,n.L0)(a,{sensitivity:"base"}),Ue=(0,n.Xe)(a,{sensitivity:"base"}),Ie=Zt||St,Ut=()=>{s("willCreateRole"),m(`/settings/${o.Z}/roles/new`)},It=()=>{T(!D)},$t={roles:{id:(0,S.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,S.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Wt=r({id:"global.roles",defaultMessage:"Roles"}),kt=(0,W.useMutation)(X=>N(X,C),{async onSuccess(){await V.invalidateQueries("get-roles")}}),Nt=async()=>{$(!0),await kt.mutateAsync(P),T(!D),$(!1)},de=(Ze||[]).filter(X=>Se(X.name,A)||Se(X.description,A)).sort((X,$e)=>Ue.compare(X.name,$e.name)||Ue.compare(X.description,$e.description)),Gt=A&&!de.length?"search":"roles",Ft=4,Kt=(Ze?.length||0)+1;return e.createElement(g.A,null,e.createElement(n.SL,{name:Wt}),e.createElement(p.o,{"aria-busy":Ie},e.createElement(v.T,{title:r({id:"global.roles",defaultMessage:"Roles"}),subtitle:r({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:l.Z.createRole},e.createElement(y.z,{onClick:Ut,startIcon:e.createElement(j.Z,null),size:"S"},r({id:(0,S.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(b.Z,{startActions:e.createElement(n.m,{label:r({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(L.D,null,!K&&e.createElement(n.ZF,null),(Ie||F)&&e.createElement(n.dO,null),K&&de&&de?.length?e.createElement(O.i,{colCount:Ft,rowCount:Kt},e.createElement(R.h,null,e.createElement(c.Tr,null,e.createElement(x.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.name",defaultMessage:"Name"}))),e.createElement(x.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.description",defaultMessage:"Description"}))),e.createElement(x.Th,null,e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.users",defaultMessage:"Users"}))),e.createElement(x.Th,null,e.createElement(Z.T,null,r({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(me,{sortedRoles:de,canDelete:q,permissions:l.Z,setRoleToDelete:H,onDelete:[D,T]})):e.createElement(n.x7,{content:$t[Gt]})),e.createElement(n.QH,{isConfirmButtonLoading:I,onConfirm:Nt,onToggleDialog:It,isOpen:D})))},oe=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(ge,null));var ne=t(41054),w=t(41580),ie=t(11276),Y=t(74571),ve=t(16364),ye=t(64256),xe=t(85018),We=t(67109),J=t(84757),ke=t(27361),se=t.n(ke),Ne=t(41609),Ge=t.n(Ne),Fe=t(82569),Ke=t.n(Fe);const Re=(0,e.createContext)({}),Pe=({children:s,value:r})=>e.createElement(Re.Provider,{value:r},s),he=()=>(0,e.useContext)(Re);Pe.propTypes={children:U().node.isRequired,value:U().object.isRequired};var le=t(46449),we=t(35161),ze=t.n(we),He=t(13217),Ve=t.n(He);const Ye=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Xe=(0,le.ZP)(w.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function Ee({route:s}){const{formatMessage:r}=(0,B.Z)(),{method:a,handler:m,path:C}=s,h=C?Ve()(C.split("/")):[],[M="",A=""]=m?m.split("."):[],D=Ye(s.method);return e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h3"},r({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,M),e.createElement(d.Z,{variant:"delta",textColor:"primary600"},".",A)),e.createElement(k.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Xe,{background:D.background,borderColor:D.border,padding:2},e.createElement(d.Z,{fontWeight:"bold",textColor:D.text},a)),e.createElement(w.x,{paddingLeft:2,paddingRight:2},ze()(h,T=>e.createElement(d.Z,{key:T,textColor:T.includes(":")?"neutral600":"neutral900"},"/",T)))))}Ee.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},Ee.propTypes={route:U().shape({handler:U().string,method:U().string,path:U().string})};const Qe=Ee,Je=()=>{const{formatMessage:s}=(0,B.Z)(),{selectedAction:r,routes:a}=he(),m=Ke()(r.split("."),"controllers"),C=se()(a,m[0]),h=m.slice(1).join("."),M=Ge()(C)?[]:C.filter(A=>A.handler.endsWith(h));return e.createElement(Y.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},r?e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},M.map((A,D)=>e.createElement(Qe,{key:D,route:A}))):e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))};var _e=t(48734),qe=t(74756),et=t(63081),tt=t(11700),nt=t.n(tt);function st(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return nt()(s.replace("api::","").replace("plugin::",""))}}const at=st;var rt=t(89734),Ce=t.n(rt),Ae=t(36213),ot=t(78114);const Te=le.iv`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,it=(0,le.ZP)(w.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&Te}
  &:hover {
    ${Te}
  }
`,lt=le.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,De=({subCategory:s})=>{const{formatMessage:r}=(0,B.Z)(),{onChange:a,onChangeSelectAll:m,onSelectedAction:C,selectedAction:h,modifiedData:M}=he(),A=(0,e.useMemo)(()=>se()(M,s.name,{}),[M,s]),D=(0,e.useMemo)(()=>Object.values(A).every(P=>P.enabled===!0),[A]),T=(0,e.useMemo)(()=>Object.values(A).some(P=>P.enabled===!0)&&!D,[A,D]),I=(0,e.useCallback)(({target:{name:P}})=>{m({target:{name:P,value:!D}})},[D,m]),$=(0,e.useCallback)(P=>h===P,[h]);return e.createElement(w.x,null,e.createElement(k.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(w.x,{paddingRight:4},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(lt,null),e.createElement(w.x,{paddingLeft:4},e.createElement(Ae.X,{name:s.name,value:D,onValueChange:P=>I({target:{name:s.name,value:P}}),indeterminate:T},r({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(k.k,{paddingTop:6,paddingBottom:6},e.createElement(ie.r,{gap:2,style:{flex:1}},s.actions.map(P=>{const H=`${P.name}.enabled`;return e.createElement(Y.P,{col:6,key:P.name},e.createElement(it,{isActive:$(P.name),padding:2,hasRadius:!0},e.createElement(Ae.X,{value:se()(M,H,!1),name:H,onValueChange:V=>a({target:{name:H,value:V}})},P.label),e.createElement("button",{type:"button","data-testid":"action-cog",onClick:()=>C(P.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(ot.Z,null))))}))))};De.propTypes={subCategory:U().object.isRequired};const ct=De,Me=({name:s,permissions:r})=>{const a=(0,e.useMemo)(()=>Ce()(Object.values(r.controllers).reduce((m,C,h)=>{const M=`${s}.controllers.${Object.keys(r.controllers)[h]}`,A=Ce()(Object.keys(C).reduce((D,T)=>[...D,{...C[T],label:T,name:`${M}.${T}`}],[]),"label");return[...m,{actions:A,label:Object.keys(r.controllers)[h],name:M}]},[]),"label"),[s,r]);return e.createElement(w.x,{padding:6},a.map(m=>e.createElement(ct,{key:m.name,subCategory:m})))};Me.propTypes={name:U().string.isRequired,permissions:U().object.isRequired};const dt=Me,ut=(s,r)=>{const a=Object.keys(r).sort().map(m=>({name:m,isOpen:!1}));return{...s,collapses:a}};var ce=t(18172);const mt={collapses:[]},gt=(s,r)=>(0,ce.ZP)(s,a=>{switch(r.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((m,C)=>C===r.index?{...m,isOpen:!m.isOpen}:{...m,isOpen:!1});break}default:return a}}),pt=()=>{const{modifiedData:s}=he(),{formatMessage:r}=(0,B.Z)(),[{collapses:a},m]=(0,e.useReducer)(gt,mt,h=>ut(h,s)),C=h=>m({type:"TOGGLE_COLLAPSE",index:h});return e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:1},a.map((h,M)=>e.createElement(_e.U,{expanded:h.isOpen,onToggle:()=>C(M),key:h.name,variant:M%2===0?"secondary":void 0},e.createElement(qe.B,{title:at(h.name),description:r({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:h.name}),variant:M%2?"primary":"secondary"}),e.createElement(et.v,null,e.createElement(w.x,null,e.createElement(dt,{permissions:s[h.name],name:h.name}))))))};var ht=t(36968),Le=t.n(ht),Et=t(69572),ft=t.n(Et);const vt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},yt=(s,r)=>(0,ce.ZP)(s,a=>{switch(r.type){case"ON_CHANGE":{const m=r.keys.length,C=r.keys[m-1]==="enabled";if(r.value&&C){const h=ft()(r.keys,m-1).join(".");a.selectedAction=h}Le()(a,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_SELECT_ALL":{const m=["modifiedData",...r.keys],C=se()(s,m,{}),h=Object.keys(C).reduce((M,A)=>(M[A]={...C[A],enabled:r.value},M),{});Le()(a,m,h);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:m}=r;a.selectedAction=m===s.selectedAction?"":m;break}default:return a}}),xt=(s,r,a)=>({...s,initialData:r,modifiedData:r,routes:a}),be=(0,e.forwardRef)(({permissions:s,routes:r},a)=>{const{formatMessage:m}=(0,B.Z)(),[C,h]=(0,e.useReducer)(yt,vt,I=>xt(I,s,r));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:C.modifiedData}},resetForm(){h({type:"ON_RESET"})},setFormAfterSubmit(){h({type:"ON_SUBMIT_SUCCEEDED"})}}));const T={...C,onChange:({target:{name:I,value:$}})=>h({type:"ON_CHANGE",keys:I.split("."),value:$==="empty__string_value"?"":$}),onChangeSelectAll:({target:{name:I,value:$}})=>h({type:"ON_CHANGE_SELECT_ALL",keys:I.split("."),value:$}),onSelectedAction:I=>h({type:"SELECT_ACTION",actionToSelect:I})};return e.createElement(Pe,{value:T},e.createElement(ie.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(Y.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(d.Z,{variant:"delta",as:"h2"},m({id:(0,J.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(d.Z,{as:"p",textColor:"neutral600"},m({id:(0,J.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(pt,null))),e.createElement(Je,null)))});be.propTypes={permissions:U().object.isRequired,routes:U().object.isRequired};const Oe=(0,e.memo)(be),Jt={isLoading:!0,modifiedData:{}},_t=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=r.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=r.data;break}default:return a}}),qt=null,en=(s,r)=>{const{isLoading:a,allowedActions:m}=useRBAC(r),[{isLoading:C,modifiedData:h},M]=useReducer(reducer,initialState),A=useNotification(),D=useRef(!0),{get:T}=useFetchClient();useEffect(()=>(a||(async()=>{try{M({type:"GET_DATA"});const{data:P}=await T(getRequestURL(s));M({type:"GET_DATA_SUCCEEDED",data:P})}catch(P){D.current&&(M({type:"GET_DATA_ERROR"}),console.error(P),A({type:"warning",message:{id:"notification.error"}}))}})(),()=>{D.current=!1}),[a,s,T,A]);const I=useCallback($=>{M({type:"ON_SUBMIT_SUCCEEDED",data:$})},[]);return{allowedActions:m,dispatchSubmitSucceeded:I,isLoading:C,isLoadingForPermissions:a,modifiedData:h}},tn=null,nn={roles:[],isLoading:!0},sn=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=r.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),an=null,rn=(s=!0)=>{const[{roles:r,isLoading:a},m]=useReducer(reducer,initialState,()=>init(initialState,s)),C=useNotification(),h=useRef(!0),M=useFetchClient(),A=useCallback(async()=>{try{m({type:"GET_DATA"});const{data:{roles:D}}=await M.get(`/${pluginId}/roles`);m({type:"GET_DATA_SUCCEEDED",data:D})}catch(D){const T=get(D,["response","payload","message"],"An error occured");h.current&&(m({type:"GET_DATA_ERROR"}),T!=="Forbidden"&&C({type:"warning",message:T}))}},[M,C]);return useEffect(()=>(s&&A(),()=>{h.current=!1}),[s,A]),{roles:r,isLoading:a,getData:A}},on=null,Rt=(s,r)=>({...s,isLoading:r}),Be={permissions:{},routes:{},isLoading:!0},Pt=(s,r)=>(0,ce.ZP)(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.permissions={},a.routes={};break}case"GET_DATA_SUCCEEDED":{a.permissions=r.permissions,a.routes=r.routes,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),je=(s=!0)=>{const r=(0,n.lm)(),[{permissions:a,routes:m,isLoading:C},h]=(0,e.useReducer)(Pt,Be,()=>Rt(Be,s)),M=(0,n.kY)(),A=(0,e.useCallback)(async()=>{try{h({type:"GET_DATA"});const[{permissions:D},{routes:T}]=await Promise.all([`/${o.Z}/permissions`,`/${o.Z}/routes`].map(async I=>(await M.get(I)).data));h({type:"GET_DATA_SUCCEEDED",permissions:(0,S.YX)(D),routes:T})}catch(D){const T=se()(D,["response","payload","message"],"An error occured");h({type:"GET_DATA_ERROR"}),T!=="Forbidden"&&r({type:"warning",message:T})}},[r]);return(0,e.useEffect)(()=>{s&&A()},[A,s]),{permissions:a,routes:m,getData:A,isLoading:C}},Ct={role:{},isLoading:!0},At=(s,r)=>(0,ce.ZP)(s,a=>{switch(r.type){case"GET_DATA_SUCCEEDED":{a.role=r.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=r.name,a.role.description=r.description;break}default:return a}}),Tt=s=>{const[r,a]=(0,e.useReducer)(At,Ct),m=(0,n.lm)(),C=(0,e.useRef)(null),{get:h}=(0,n.kY)();(0,e.useEffect)(()=>(C.current=!0,s?M(s):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>C.current=!1),[s]);const M=async D=>{try{const{data:{role:T}}=await h(`/${o.Z}/roles/${D}`);C.current&&a({type:"GET_DATA_SUCCEEDED",role:T})}catch(T){console.error(T),a({type:"GET_DATA_ERROR"}),m({type:"warning",message:{id:"notification.error"}})}},A=(0,e.useCallback)(D=>{a({type:"ON_SUBMIT_SUCCEEDED",...D})},[]);return{...r,onSubmitSucceeded:A}};var _=t(87561);const Dt=_.Ry().shape({name:_.Z_().required(n.I0.required),description:_.Z_().required(n.I0.required)}),Mt=()=>{const{formatMessage:s}=(0,B.Z)(),[r,a]=(0,e.useState)(!1),m=(0,n.lm)(),{lockApp:C,unlockApp:h}=(0,n.o1)(),{params:{id:M}}=(0,i.$B)(`/settings/${o.Z}/roles/:id`),{isLoading:A,routes:D}=je(),{role:T,onSubmitSucceeded:I,isLoading:$}=Tt(M),P=(0,e.useRef)(),{put:H}=(0,n.kY)(),V=async G=>{C(),a(!0);try{const F=P.current.getPermissions();await H(`/${o.Z}/roles/${M}`,{...G,...F,users:[]}),I({name:G.name,description:G.description}),m({type:"success",message:{id:(0,J.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch(F){console.error(F),m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),h()};return $?e.createElement(n.dO,null):e.createElement(p.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(ne.J9,{enableReinitialize:!0,initialValues:{name:T.name,description:T.description},onSubmit:V,validationSchema:Dt},({handleSubmit:G,values:F,handleChange:K,errors:q})=>e.createElement(n.l0,{noValidate:!0,onSubmit:G},e.createElement(v.T,{primaryAction:!A&&e.createElement(y.z,{disabled:T.code==="strapi-super-admin",type:"submit",loading:r,startIcon:e.createElement(xe.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:T.name,subtitle:T.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(We.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(L.D,null,e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(w.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:F.name||"",onChange:K,label:s({id:"global.name",defaultMessage:"Name"}),error:q.name?s({id:q.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(ye.g,{name:"description",value:F.description||"",onChange:K,label:s({id:"global.description",defaultMessage:"Description"}),error:q.description?s({id:q.description,defaultMessage:"Invalid value"}):null}))))),!A&&e.createElement(Oe,{ref:P,permissions:T.permissions,routes:D}))))))},Lt=()=>e.createElement(n.O4,{permissions:l.Z.updateRole},e.createElement(Mt,null)),bt=_.Ry().shape({name:_.Z_().required(n.I0.required),description:_.Z_().required(n.I0.required)}),Ot=()=>{const{formatMessage:s}=(0,B.Z)(),[r,a]=(0,e.useState)(!1),m=(0,n.lm)(),{goBack:C}=(0,i.k6)(),{lockApp:h,unlockApp:M}=(0,n.o1)(),{isLoading:A,permissions:D,routes:T}=je(),{trackUsage:I}=(0,n.rS)(),$=(0,e.useRef)(),{post:P}=(0,n.kY)(),H=async V=>{h(),a(!0);try{const G=$.current.getPermissions();await P(`/${o.Z}/roles`,{...V,...G,users:[]}),I("didCreateRole"),m({type:"success",message:{id:(0,J.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),C()}catch(G){console.error(G),m({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),M()};return e.createElement(p.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(ne.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:H,validationSchema:bt},({handleSubmit:V,values:G,handleChange:F,errors:K})=>e.createElement(n.l0,{noValidate:!0,onSubmit:V},e.createElement(v.T,{primaryAction:!A&&e.createElement(y.z,{type:"submit",loading:r,startIcon:e.createElement(xe.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(L.D,null,e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(w.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(k.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:(0,J.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(ie.r,{gap:4},e.createElement(Y.P,{col:6},e.createElement(ve.o,{name:"name",value:G.name||"",onChange:F,label:s({id:"global.name",defaultMessage:"Name"}),error:K.name?s({id:K.name,defaultMessage:"Invalid value"}):null})),e.createElement(Y.P,{col:6},e.createElement(ye.g,{name:"description",value:G.description||"",onChange:F,label:s({id:"global.description",defaultMessage:"Description"}),error:K.description?s({id:K.description,defaultMessage:"Invalid value"}):null}))))),!A&&e.createElement(Oe,{ref:$,permissions:D,routes:T}))))))},Bt=()=>e.createElement(n.O4,{permissions:l.Z.createRole},e.createElement(Ot,null)),jt=()=>e.createElement(n.O4,{permissions:l.Z.accessRoles},e.createElement(i.rs,null,e.createElement(i.AW,{path:`/settings/${o.Z}/roles/new`,component:Bt,exact:!0}),e.createElement(i.AW,{path:`/settings/${o.Z}/roles/:id`,component:Lt,exact:!0}),e.createElement(i.AW,{path:`/settings/${o.Z}/roles`,component:oe,exact:!0}),e.createElement(i.AW,{path:"",component:n.Hn})))},89031:(E,f,t)=>{"use strict";t.d(f,{YX:()=>o,Gc:()=>g,OB:()=>p.Z});var e=t(41609),i=t.n(e);const o=v=>Object.keys(v).reduce((y,b)=>{const L=v[b].controllers,O=Object.keys(L).reduce((R,c)=>(i()(L[c])||(R[c]=L[c]),R),{});return i()(O)||(y[b]={controllers:O}),y},{});var l=t(31498);const g=v=>`/${l.Z}/${v}`;var p=t(84757)},47443:(E,f,t)=>{var e=t(42118);function i(n,o){var l=n==null?0:n.length;return!!l&&e(n,o,0)>-1}E.exports=i},1196:E=>{function f(t,e,i){for(var n=-1,o=t==null?0:t.length;++n<o;)if(i(e,t[n]))return!0;return!1}E.exports=f},20731:(E,f,t)=>{var e=t(88668),i=t(47443),n=t(1196),o=t(29932),l=t(7518),u=t(74757),g=200;function p(v,y,b,L){var O=-1,R=i,c=!0,x=v.length,d=[],Z=y.length;if(!x)return d;b&&(y=o(y,l(b))),L?(R=n,c=!1):y.length>=g&&(R=u,c=!1,y=new e(y));e:for(;++O<x;){var j=v[O],B=b==null?j:b(j);if(j=L||j!==0?j:0,c&&B===B){for(var W=Z;W--;)if(y[W]===B)continue e;d.push(j)}else R(y,B,L)||d.push(j)}return d}E.exports=p},89881:(E,f,t)=>{var e=t(47816),i=t(99291),n=i(e);E.exports=n},41848:E=>{function f(t,e,i,n){for(var o=t.length,l=i+(n?1:-1);n?l--:++l<o;)if(e(t[l],l,t))return l;return-1}E.exports=f},42118:(E,f,t)=>{var e=t(41848),i=t(62722),n=t(42351);function o(l,u,g){return u===u?n(l,u,g):e(l,i,g)}E.exports=o},62722:E=>{function f(t){return t!==t}E.exports=f},69199:(E,f,t)=>{var e=t(89881),i=t(98612);function n(o,l){var u=-1,g=i(o)?Array(o.length):[];return e(o,function(p,v,y){g[++u]=l(p,v,y)}),g}E.exports=n},82689:(E,f,t)=>{var e=t(29932),i=t(97786),n=t(67206),o=t(69199),l=t(71131),u=t(7518),g=t(85022),p=t(6557),v=t(1469);function y(b,L,O){L.length?L=e(L,function(x){return v(x)?function(d){return i(d,x.length===1?x[0]:x)}:x}):L=[p];var R=-1;L=e(L,u(n));var c=o(b,function(x,d,Z){var j=e(L,function(B){return B(x)});return{criteria:j,index:++R,value:x}});return l(c,function(x,d){return g(x,d,O)})}E.exports=y},71131:E=>{function f(t,e){var i=t.length;for(t.sort(e);i--;)t[i]=t[i].value;return t}E.exports=f},26393:(E,f,t)=>{var e=t(33448);function i(n,o){if(n!==o){var l=n!==void 0,u=n===null,g=n===n,p=e(n),v=o!==void 0,y=o===null,b=o===o,L=e(o);if(!y&&!L&&!p&&n>o||p&&v&&b&&!y&&!L||u&&v&&b||!l&&b||!g)return 1;if(!u&&!p&&!L&&n<o||L&&l&&g&&!u&&!p||y&&l&&g||!v&&g||!b)return-1}return 0}E.exports=i},85022:(E,f,t)=>{var e=t(26393);function i(n,o,l){for(var u=-1,g=n.criteria,p=o.criteria,v=g.length,y=l.length;++u<v;){var b=e(g[u],p[u]);if(b){if(u>=y)return b;var L=l[u];return b*(L=="desc"?-1:1)}}return n.index-o.index}E.exports=i},99291:(E,f,t)=>{var e=t(98612);function i(n,o){return function(l,u){if(l==null)return l;if(!e(l))return n(l,u);for(var g=l.length,p=o?g:-1,v=Object(l);(o?p--:++p<g)&&u(v[p],p,v)!==!1;);return l}}E.exports=i},42351:E=>{function f(t,e,i){for(var n=i-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}E.exports=f},35161:(E,f,t)=>{var e=t(29932),i=t(67206),n=t(69199),o=t(1469);function l(u,g){var p=o(u)?e:n;return p(u,i(g,3))}E.exports=l},89734:(E,f,t)=>{var e=t(21078),i=t(82689),n=t(5976),o=t(16612),l=n(function(u,g){if(u==null)return[];var p=g.length;return p>1&&o(u,g[0],g[1])?g=[]:p>2&&o(g[0],g[1],g[2])&&(g=[g[0]]),i(u,e(g,1),[])});E.exports=l},13217:(E,f,t)=>{var e=t(14259);function i(n){var o=n==null?0:n.length;return o?e(n,1,o):[]}E.exports=i},69572:(E,f,t)=>{var e=t(14259),i=t(40554);function n(o,l,u){return o&&o.length?(l=u||l===void 0?1:i(l),e(o,0,l<0?0:l)):[]}E.exports=n},82569:(E,f,t)=>{var e=t(20731),i=t(5976),n=t(29246),o=i(function(l,u){return n(l)?e(l,u):[]});E.exports=o},48734:(E,f,t)=>{"use strict";t.d(f,{U:()=>L,y:()=>y});var e=t(85893),i=t(67294),n=t(46449),o=t(13819),l=t(2504),u=t(75515),g=t(11047),p=t(41580);const v=({theme:O,expanded:R,variant:c,disabled:x,error:d})=>d?`1px solid ${O.colors.danger600} !important`:x?`1px solid ${O.colors.neutral150}`:R?`1px solid ${O.colors.primary600}`:c==="primary"?`1px solid ${O.colors.neutral0}`:`1px solid ${O.colors.neutral100}`,y=(0,n.ZP)(u.Z)``,b=(0,n.ZP)(p.x)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:O})=>O.colors.primary600};

    ${y} {
      color: ${({theme:O,expanded:R})=>R?void 0:O.colors.primary700};
    }

    ${u.Z} {
      color: ${({theme:O,expanded:R})=>R?void 0:O.colors.primary600};
    }

    & > ${g.k} {
      background: ${({theme:O})=>O.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:O})=>O.colors.primary200};
    }
  }
`,L=({children:O,disabled:R=!1,error:c,expanded:x=!1,hasErrorMessage:d=!0,id:Z,onToggle:j,toggle:B,size:W="M",variant:S="primary",shadow:z})=>{const N=(0,l.M)(Z),ee=i.useMemo(()=>({expanded:x,onToggle:j,toggle:B,id:N,size:W,variant:S,disabled:R}),[R,x,N,j,W,B,S]);return(0,e.jsxs)(o.S.Provider,{value:ee,children:[(0,e.jsx)(b,{"data-strapi-expanded":x,disabled:R,"aria-disabled":R,expanded:x,hasRadius:!0,variant:S,error:c,shadow:z,children:O}),c&&d&&(0,e.jsx)(p.x,{paddingTop:1,children:(0,e.jsx)(u.Z,{variant:"pi",textColor:"danger600",children:c})})]})}},63081:(E,f,t)=>{"use strict";t.d(f,{v:()=>o});var e=t(85893),i=t(13819),n=t(41580);const o=({children:l,...u})=>{const{expanded:g,id:p}=(0,i.A)();if(!g)return null;const v=`accordion-content-${p}`,y=`accordion-label-${p}`,b=`accordion-desc-${p}`;return(0,e.jsx)(n.x,{role:"region",id:v,"aria-labelledby":y,"aria-describedby":b,...u,children:l})}},13819:(E,f,t)=>{"use strict";t.d(f,{A:()=>n,S:()=>i});var e=t(67294);const i=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,e.useContext)(i)},74756:(E,f,t)=>{"use strict";t.d(f,{B:()=>O});var e=t(85893),i=t(12645),n=t(46449),o=t(48734),l=t(13819);const u=({expanded:R,disabled:c,variant:x})=>{let d="neutral100";return R?d="primary100":c?d="neutral150":x==="primary"&&(d="neutral0"),d};var g=t(39785),p=t(52624),v=t(11047),y=t(75515);const b=(0,n.ZP)(g.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:R,expanded:c})=>c?R.colors.primary600:R.colors.neutral500};
    }
  }
`,L=(0,n.ZP)(v.k)`
  min-height: ${({theme:R,size:c})=>R.sizes.accordions[c]};
  border-radius: ${({theme:R,expanded:c})=>c?`${R.borderRadius} ${R.borderRadius} 0 0`:R.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:R})=>R.colors.primary600};
      }
    }
  }
`,O=({title:R,description:c,as:x="span",togglePosition:d="right",action:Z,...j})=>{const{onToggle:B,toggle:W,expanded:S,id:z,size:N,variant:ee,disabled:U}=(0,l.A)(),ue=`accordion-content-${z}`,k=`accordion-label-${z}`,ae=`accordion-desc-${z}`,Q=N==="M"?6:4,re=N==="M"?Q:Q-2,te=u({expanded:S,disabled:U,variant:ee}),me={as:x,fontWeight:N==="S"?"bold":void 0,id:k,textColor:S?"primary600":"neutral700",ellipsis:!0,variant:N==="M"?"delta":void 0},fe=S?"primary600":"neutral600",ge=S?"primary200":"neutral200",pe=N==="M"?`${32/16}rem`:`${24/16}rem`,oe=()=>{U||(W&&!B?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),W()):B&&B())},ne=(0,e.jsx)(v.k,{justifyContent:"center",borderRadius:"50%",height:pe,width:pe,transform:S?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ge,cursor:U?"not-allowed":"pointer",onClick:oe,shrink:0,children:(0,e.jsx)(p.J,{as:i.Z,width:N==="M"?`${11/16}rem`:`${8/16}rem`,color:S?"primary600":"neutral600"})});return(0,e.jsx)(L,{paddingBottom:re,paddingLeft:Q,paddingRight:Q,paddingTop:re,background:te,expanded:S,size:N,justifyContent:"space-between",cursor:U?"not-allowed":"",children:(0,e.jsxs)(v.k,{gap:3,flex:1,maxWidth:"100%",children:[d==="left"&&ne,(0,e.jsx)(b,{onClick:oe,"aria-disabled":U,"aria-expanded":S,"aria-controls":ue,"aria-labelledby":k,"data-strapi-accordion-toggle":!0,expanded:S,type:"button",flex:1,minWidth:0,...j,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.y,{...me,children:R}),c&&(0,e.jsx)(y.Z,{as:"p",id:ae,textColor:fe,children:c})]})}),d==="right"&&(0,e.jsxs)(v.k,{gap:3,children:[ne,Z]}),d==="left"&&Z]})})}},36989:(E,f,t)=>{"use strict";t.d(f,{Z:()=>v});var e=t(85893),i=t(67294),n=t(45697),o=t(46449),l=t(11047),u=t(41580);const g=(0,o.ZP)(l.k)`
  & > * + * {
    margin-left: ${({theme:y})=>y.spaces[2]};
  }

  margin-left: ${({pullRight:y})=>y?"auto":void 0};
`,p=(0,o.ZP)(g)`
  flex-shrink: 0;
`,v=({startActions:y,endActions:b})=>y||b?(0,e.jsx)(u.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(u.x,{paddingBottom:4,children:(0,e.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",children:[y&&(0,e.jsx)(g,{wrap:"wrap",children:y}),b&&(0,e.jsx)(p,{pullRight:!0,children:b})]})})}):null;v.defaultProps={endActions:void 0,startActions:void 0},v.propTypes={endActions:n.node,startActions:n.node}},49066:(E,f,t)=>{"use strict";t.d(f,{D:()=>l});var e=t(85893),i=t(67294),n=t(45697),o=t(41580);const l=({children:u})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:u});l.propTypes={children:n.node.isRequired}},53979:(E,f,t)=>{"use strict";t.d(f,{A:()=>R,T:()=>L});var e=t(85893),i=t(67294),n=t(45697),o=t(46449);const l=c=>{const x=(0,i.useRef)(null),[d,Z]=(0,i.useState)(!0),j=([B])=>{Z(B.isIntersecting)};return(0,i.useEffect)(()=>{const B=x.current,W=new IntersectionObserver(j,c);return B&&W.observe(x.current),()=>{B&&W.disconnect()}},[x,c]),[x,d]};var u=t(95355);const g=(c,x)=>{const d=(0,u.W)(x);(0,i.useLayoutEffect)(()=>{const Z=new ResizeObserver(d);return Array.isArray(c)?c.forEach(j=>{j.current&&Z.observe(j.current)}):c.current&&Z.observe(c.current),()=>{Z.disconnect()}},[c,d])};var p=t(41580),v=t(11047),y=t(75515);const b=()=>{const c=(0,i.useRef)(null),[x,d]=(0,i.useState)(null),[Z,j]=l({root:null,rootMargin:"0px",threshold:0});return g(Z,()=>{Z.current&&d(Z.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{c.current&&d(c.current.getBoundingClientRect())},[c]),{containerRef:Z,isVisible:j,baseHeaderLayoutRef:c,headerSize:x}},L=c=>{const{containerRef:x,isVisible:d,baseHeaderLayoutRef:Z,headerSize:j}=b();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:j?.height},ref:x,children:d&&(0,e.jsx)(R,{ref:Z,...c})}),!d&&(0,e.jsx)(R,{...c,sticky:!0,width:j?.width})]})};L.displayName="HeaderLayout";const O=(0,o.ZP)(p.x)`
  width: ${c=>c.width}px;
  z-index: ${({theme:c})=>c.zIndices[1]};
`,R=i.forwardRef(({navigationAction:c,primaryAction:x,secondaryAction:d,subtitle:Z,title:j,sticky:B,width:W,...S},z)=>{const N=typeof Z=="string";return B?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:W,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[c&&(0,e.jsx)(p.x,{paddingRight:3,children:c}),(0,e.jsxs)(p.x,{children:[(0,e.jsx)(y.Z,{variant:"beta",as:"h1",...S,children:j}),N?(0,e.jsx)(y.Z,{variant:"pi",textColor:"neutral600",children:Z}):Z]}),d?(0,e.jsx)(p.x,{paddingLeft:4,children:d}):null]}),(0,e.jsx)(v.k,{children:x?(0,e.jsx)(p.x,{paddingLeft:2,children:x}):void 0})]})}):(0,e.jsxs)(p.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,e.jsx)(p.x,{paddingBottom:2,children:c}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(y.Z,{as:"h1",variant:"alpha",...S,children:j}),d?(0,e.jsx)(p.x,{paddingLeft:4,children:d}):null]}),x]}),N?(0,e.jsx)(y.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:Z}):Z]})});R.displayName="BaseHeaderLayout",R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},R.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,sticky:n.bool,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired,width:n.number},L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},L.propTypes={navigationAction:n.node,primaryAction:n.node,secondaryAction:n.node,subtitle:n.oneOfType([n.string,n.node]),title:n.string.isRequired}},17034:(E,f,t)=>{"use strict";t.d(f,{A:()=>p});var e=t(85893),i=t(67294),n=t(45697),o=t(46449),l=t(41580);const u=(0,o.ZP)(l.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:v})=>v?"auto 1fr":"1fr"};
`,g=(0,o.ZP)(l.x)`
  overflow-x: hidden;
`,p=({sideNav:v,children:y})=>(0,e.jsxs)(u,{hasSideNav:!!v,children:[v,(0,e.jsx)(g,{paddingBottom:10,children:y})]});p.defaultProps={sideNav:void 0},p.propTypes={children:n.node.isRequired,sideNav:n.node}},185:(E,f,t)=>{"use strict";t.d(f,{o:()=>l});var e=t(85893),i=t(46449),n=t(41580);const o=(0,i.ZP)(n.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:u="main-content-title",...g})=>(0,e.jsx)(o,{"aria-labelledby":u,as:"main",id:"main-content",tabIndex:-1,...g})},67109:(E,f,t)=>{"use strict";t.d(f,{Z:()=>n});var e=t(85893);const i=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=i},78114:(E,f,t)=>{"use strict";t.d(f,{Z:()=>n});var e=t(85893);const i=o=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...o,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),n=i}}]);
