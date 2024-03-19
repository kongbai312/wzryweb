import{e as z,b as Y,c as _,a as i,d as A,h as K,az as ne,n as O,E as k,I as oe,w as D,t as C,G as M,r as u,a7 as ae,ah as F,a6 as le,l as E,aA as se,R as X,N as H,aB as j,g as ce,O as G,_ as U,a8 as V,L as re,M as ie,ao as ue,J as de,aC as ve,F as fe,aD as ye,i as L}from"./index-U7dfd7Xi.js";import{T as p,P as me,c as he,H as Ie,I as Se}from"./index-DyayAJ1x.js";function Ce(e){const t=Y();t&&z(t.proxy,e)}const[Oe,w]=_("loading"),xe=Array(12).fill(null).map((e,t)=>i("i",{class:w("line",String(t+1))},null)),Pe=i("svg",{class:w("circular"),viewBox:"25 25 50 50"},[i("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),we={size:O,type:k("circular"),color:String,vertical:Boolean,textSize:O,textColor:String};var be=A({name:Oe,props:we,setup(e,{slots:t}){const n=K(()=>z({color:e.color},ne(e.size))),r=()=>{const o=e.type==="spinner"?xe:Pe;return i("span",{class:w("spinner",e.type),style:n.value},[t.icon?t.icon():o])},a=()=>{var o;if(t.default)return i("span",{class:w("text"),style:{fontSize:oe(e.textSize),color:(o=e.textColor)!=null?o:e.color}},[t.default()])};return()=>{const{type:o,vertical:l}=e;return i("div",{class:w([o,{vertical:l}]),"aria-live":"polite","aria-busy":!0},[r(),a()])}}});const $e=D(be),Z={show:Boolean,zIndex:O,overlay:C,duration:O,teleport:[String,Object],lockScroll:C,lazyRender:C,beforeClose:Function,overlayStyle:Object,overlayClass:M,transitionAppear:Boolean,closeOnClickOverlay:C},Ye=Object.keys(Z);function ge(e,t){return e>t?"horizontal":t>e?"vertical":""}function ke(){const e=u(0),t=u(0),n=u(0),r=u(0),a=u(0),o=u(0),l=u(""),c=u(!0),x=()=>l.value==="vertical",S=()=>l.value==="horizontal",d=()=>{n.value=0,r.value=0,a.value=0,o.value=0,l.value="",c.value=!0};return{move:v=>{const f=v.touches[0];n.value=(f.clientX<0?0:f.clientX)-e.value,r.value=f.clientY-t.value,a.value=Math.abs(n.value),o.value=Math.abs(r.value);const I=10;(!l.value||a.value<I&&o.value<I)&&(l.value=ge(a.value,o.value)),c.value&&(a.value>p||o.value>p)&&(c.value=!1)},start:v=>{d(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:d,startX:e,startY:t,deltaX:n,deltaY:r,offsetX:a,offsetY:o,direction:l,isVertical:x,isHorizontal:S,isTap:c}}let P=0;const R="van-overflow-hidden";function ze(e,t){const n=ke(),r="01",a="10",o=d=>{n.move(d);const h=n.deltaY.value>0?a:r,b=se(d.target,e.value),{scrollHeight:v,offsetHeight:f,scrollTop:I}=b;let y="11";I===0?y=f>=v?"00":"01":I+f>=v&&(y="10"),y!=="11"&&n.isVertical()&&!(parseInt(y,2)&parseInt(h,2))&&X(d,!0)},l=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",o,{passive:!1}),P||document.body.classList.add(R),P++},c=()=>{P&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",o),P--,P||document.body.classList.remove(R))},x=()=>t()&&l(),S=()=>t()&&c();ae(x),F(S),le(S),E(t,d=>{d?l():c()})}function J(e){const t=u(!1);return E(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const N=()=>{var e;const{scopeId:t}=((e=Y())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[Te,_e]=_("overlay"),Ae={show:Boolean,zIndex:O,duration:O,className:M,lockScroll:C,lazyRender:C,customStyle:Object};var De=A({name:Te,props:Ae,setup(e,{slots:t}){const n=u(),r=J(()=>e.show||!e.lazyRender),a=l=>{e.lockScroll&&X(l,!0)},o=r(()=>{var l;const c=z(ce(e.zIndex),e.customStyle);return G(e.duration)&&(c.animationDuration=`${e.duration}s`),U(i("div",{ref:n,style:c,class:[_e(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[V,e.show]])});return H("touchmove",a,{target:n}),()=>i(j,{name:"van-fade",appear:!0},{default:o})}});const Ee=D(De),Be=z({},Z,{round:Boolean,position:k("center"),closeIcon:k("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:k("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Le,$]=_("popup");var pe=A({name:Le,inheritAttrs:!1,props:Be,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:r}){let a,o;const l=u(),c=u(),x=J(()=>e.show||!e.lazyRender),S=K(()=>{const s={zIndex:l.value};if(G(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";s[m]=`${e.duration}s`}return s}),d=()=>{a||(a=!0,l.value=e.zIndex!==void 0?+e.zIndex:ye(),t("open"))},h=()=>{a&&he(e.beforeClose,{done(){a=!1,t("close"),t("update:show",!1)}})},b=s=>{t("clickOverlay",s),e.closeOnClickOverlay&&h()},v=()=>{if(e.overlay)return i(Ee,L({show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},N(),{onClick:b}),{default:r["overlay-content"]})},f=s=>{t("clickCloseIcon",s),h()},I=()=>{if(e.closeable)return i(Se,{role:"button",tabindex:0,name:e.closeIcon,class:[$("close-icon",e.closeIconPosition),Ie],classPrefix:e.iconPrefix,onClick:f},null)};let y;const W=()=>{y&&clearTimeout(y),y=setTimeout(()=>{t("opened")})},q=()=>t("closed"),Q=s=>t("keydown",s),ee=x(()=>{var s;const{round:m,position:g,safeAreaInsetTop:T,safeAreaInsetBottom:te}=e;return U(i("div",L({ref:c,style:S.value,role:"dialog",tabindex:0,class:[$({round:m,[g]:g}),{"van-safe-area-top":T,"van-safe-area-bottom":te}],onKeydown:Q},n,N()),[(s=r.default)==null?void 0:s.call(r),I()]),[[V,e.show]])}),B=()=>{const{position:s,transition:m,transitionAppear:g}=e,T=s==="center"?"van-fade":`van-popup-slide-${s}`;return i(j,{name:m||T,appear:g,onAfterEnter:W,onAfterLeave:q},{default:ee})};return E(()=>e.show,s=>{s&&!a&&(d(),n.tabindex===0&&re(()=>{var m;(m=c.value)==null||m.focus()})),!s&&a&&(a=!1,t("close"))}),Ce({popupRef:c}),ze(c,()=>e.show&&e.lockScroll),H("popstate",()=>{e.closeOnPopstate&&(h(),o=!1)}),ie(()=>{e.show&&d()}),ue(()=>{o&&(t("update:show",!0),o=!1)}),F(()=>{e.show&&e.teleport&&(h(),o=!0)}),de(me,()=>e.show),()=>e.teleport?i(ve,{to:e.teleport},{default:()=>[v(),B()]}):i(fe,null,[v(),B()])}});const Ke=D(pe);export{$e as L,Ke as P,Ye as a,ke as b,Z as p,Ce as u};