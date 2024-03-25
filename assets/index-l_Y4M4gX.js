import{n as b,t as C,K as B,r as i,a1 as Q,a9 as L,aa as ee,l as z,ax as te,X as R,b as oe,c as N,d as K,E as Y,a as y,ay as M,e as X,g as ne,C as F,M as $,N as H,w as j,A as x,h as ae,ad as se,O as le,ag as ce,an as re,T as ie,F as ue,az as de,i as A}from"./index-CBCQ6Rvf.js";import{u as ve}from"./use-expose-C8j5eqMI.js";import{T as E,P as fe,H as me}from"./use-route-CObrCZIx.js";import{I as ye}from"./_plugin-vue_export-helper-Cmma1cYV.js";import{c as he}from"./interceptor-BBcVuyCw.js";const G={show:Boolean,zIndex:b,overlay:C,duration:b,teleport:[String,Object],lockScroll:C,lazyRender:C,beforeClose:Function,overlayStyle:Object,overlayClass:B,transitionAppear:Boolean,closeOnClickOverlay:C},pe=Object.keys(G);function Ie(e,t){return e>t?"horizontal":t>e?"vertical":""}function Oe(){const e=i(0),t=i(0),o=i(0),r=i(0),n=i(0),l=i(0),a=i(""),c=i(!0),P=()=>a.value==="vertical",O=()=>a.value==="horizontal",u=()=>{o.value=0,r.value=0,n.value=0,l.value=0,a.value="",c.value=!0};return{move:d=>{const v=d.touches[0];o.value=(v.clientX<0?0:v.clientX)-e.value,r.value=v.clientY-t.value,n.value=Math.abs(o.value),l.value=Math.abs(r.value);const I=10;(!a.value||n.value<I&&l.value<I)&&(a.value=Ie(n.value,l.value)),c.value&&(n.value>E||l.value>E)&&(c.value=!1)},start:d=>{u(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:o,deltaY:r,offsetX:n,offsetY:l,direction:a,isVertical:P,isHorizontal:O,isTap:c}}let w=0;const _="van-overflow-hidden";function Ce(e,t){const o=Oe(),r="01",n="10",l=u=>{o.move(u);const h=o.deltaY.value>0?n:r,k=te(u.target,e.value),{scrollHeight:d,offsetHeight:v,scrollTop:I}=k;let f="11";I===0?f=v>=d?"00":"01":I+v>=d&&(f="10"),f!=="11"&&o.isVertical()&&!(parseInt(f,2)&parseInt(h,2))&&R(u,!0)},a=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",l,{passive:!1}),w||document.body.classList.add(_),w++},c=()=>{w&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",l),w--,w||document.body.classList.remove(_))},P=()=>t()&&a(),O=()=>t()&&c();Q(P),L(O),ee(O),z(t,u=>{u?a():c()})}function U(e){const t=i(!1);return z(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const D=()=>{var e;const{scopeId:t}=((e=oe())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[Pe,we]=N("overlay"),ke={show:Boolean,zIndex:b,duration:b,className:B,lockScroll:C,lazyRender:C,customStyle:Object};var Se=K({name:Pe,props:ke,setup(e,{slots:t}){const o=i(),r=U(()=>e.show||!e.lazyRender),n=a=>{e.lockScroll&&R(a,!0)},l=r(()=>{var a;const c=X(ne(e.zIndex),e.customStyle);return F(e.duration)&&(c.animationDuration=`${e.duration}s`),$(y("div",{ref:o,style:c,class:[we(),e.className]},[(a=t.default)==null?void 0:a.call(t)]),[[H,e.show]])});return Y("touchmove",n,{target:o}),()=>y(M,{name:"van-fade",appear:!0},{default:l})}});const be=j(Se),Te=X({},G,{round:Boolean,position:x("center"),closeIcon:x("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:x("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[xe,p]=N("popup");var ze=K({name:xe,inheritAttrs:!1,props:Te,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:r}){let n,l;const a=i(),c=i(),P=U(()=>e.show||!e.lazyRender),O=ae(()=>{const s={zIndex:a.value};if(F(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";s[m]=`${e.duration}s`}return s}),u=()=>{n||(n=!0,a.value=e.zIndex!==void 0?+e.zIndex:de(),t("open"))},h=()=>{n&&he(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},k=s=>{t("clickOverlay",s),e.closeOnClickOverlay&&h()},d=()=>{if(e.overlay)return y(be,A({show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},D(),{onClick:k}),{default:r["overlay-content"]})},v=s=>{t("clickCloseIcon",s),h()},I=()=>{if(e.closeable)return y(ye,{role:"button",tabindex:0,name:e.closeIcon,class:[p("close-icon",e.closeIconPosition),me],classPrefix:e.iconPrefix,onClick:v},null)};let f;const V=()=>{f&&clearTimeout(f),f=setTimeout(()=>{t("opened")})},Z=()=>t("closed"),W=s=>t("keydown",s),q=P(()=>{var s;const{round:m,position:S,safeAreaInsetTop:T,safeAreaInsetBottom:J}=e;return $(y("div",A({ref:c,style:O.value,role:"dialog",tabindex:0,class:[p({round:m,[S]:S}),{"van-safe-area-top":T,"van-safe-area-bottom":J}],onKeydown:W},o,D()),[(s=r.default)==null?void 0:s.call(r),I()]),[[H,e.show]])}),g=()=>{const{position:s,transition:m,transitionAppear:S}=e,T=s==="center"?"van-fade":`van-popup-slide-${s}`;return y(M,{name:m||T,appear:S,onAfterEnter:V,onAfterLeave:Z},{default:q})};return z(()=>e.show,s=>{s&&!n&&(u(),o.tabindex===0&&se(()=>{var m;(m=c.value)==null||m.focus()})),!s&&n&&(n=!1,t("close"))}),ve({popupRef:c}),Ce(c,()=>e.show&&e.lockScroll),Y("popstate",()=>{e.closeOnPopstate&&(h(),l=!1)}),le(()=>{e.show&&u()}),ce(()=>{l&&(t("update:show",!0),l=!1)}),L(()=>{e.show&&e.teleport&&(h(),l=!0)}),re(fe,()=>e.show),()=>e.teleport?y(ie,{to:e.teleport},{default:()=>[d(),g()]}):y(ue,null,[d(),g()])}});const Be=j(ze);export{Be as P,G as a,Oe as b,pe as p,D as u};
