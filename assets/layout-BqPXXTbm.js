import{c as V,t as C,n as g,m as N,d as x,r as k,u as O,a as c,g as $,w as y,e as j,b as z,f as E,h as F,i as M,j as q,k as D,l as K,o as A,p as U,q as _,s as v,v as Y,x as Z,y as G,z as H,F as J}from"./index-CBCQ6Rvf.js";import{u as L}from"./use-placeholder-C3Puacb7.js";import{B as Q,r as W,u as X}from"./use-route-CObrCZIx.js";import{c as ee}from"./interceptor-BBcVuyCw.js";import{B as ae,I as te,_ as ne}from"./_plugin-vue_export-helper-Cmma1cYV.js";const[R,I]=V("tabbar"),oe={route:Boolean,fixed:C,border:C,zIndex:g,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:N(0),safeAreaInsetBottom:{type:Boolean,default:null}},T=Symbol(R);var re=x({name:R,props:oe,emits:["change","update:modelValue"],setup(e,{emit:s,slots:a}){const i=k(),{linkChildren:u}=O(T),n=L(i,I),d=()=>{var o;return(o=e.safeAreaInsetBottom)!=null?o:e.fixed},t=()=>{var o;const{fixed:r,zIndex:l,border:f}=e;return c("div",{ref:i,role:"tablist",style:$(l),class:[I({fixed:r}),{[Q]:f,"van-safe-area-bottom":d()}]},[(o=a.default)==null?void 0:o.call(a)])};return u({props:e,setActive:(o,r)=>{ee(e.beforeChange,{args:[o],done(){s("update:modelValue",o),s("change",o),r()}})}}),()=>e.fixed&&e.placeholder?n(t):t()}});const ce=y(re),[se,h]=V("tabbar-item"),le=j({},W,{dot:Boolean,icon:String,name:g,badge:g,badgeProps:Object,iconPrefix:String});var ie=x({name:se,props:le,emits:["click"],setup(e,{emit:s,slots:a}){const i=X(),u=z().proxy,{parent:n,index:d}=E(T);if(!n)return;const t=F(()=>{var r;const{route:l,modelValue:f}=n.props;if(l&&"$route"in u){const{$route:p}=u,{to:b}=e,m=q(b)?b:{path:b};return!!p.matched.find(P=>{const w="path"in m&&m.path===P.path,S="name"in m&&m.name===P.name;return w||S})}return((r=e.name)!=null?r:d.value)===f}),B=r=>{var l;t.value||n.setActive((l=e.name)!=null?l:d.value,i),s("click",r)},o=()=>{if(a.icon)return a.icon({active:t.value});if(e.icon)return c(te,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var r;const{dot:l,badge:f}=e,{activeColor:p,inactiveColor:b}=n.props,m=t.value?p:b;return c("div",{role:"tab",class:h({active:t.value}),style:{color:m},tabindex:0,"aria-selected":t.value,onClick:B},[c(ae,M({dot:l,class:h("icon"),content:f},e.badgeProps),{default:o}),c("div",{class:h("text")},[(r=a.default)==null?void 0:r.call(a,{active:t.value})])])}}});const ue=y(ie),de=x({__name:"narbar",setup(e){const s=D();let a=k("home");return K(()=>s.path,()=>{a.value=s.path.slice(1)},{immediate:!0}),(i,u)=>{const n=ue,d=ce;return A(),U(d,{modelValue:Y(a),"onUpdate:modelValue":u[0]||(u[0]=t=>Z(a)?a.value=t:a=t),"active-color":"#2196f3","inactive-color":"#8896b8",placeholder:""},{default:_(()=>[c(n,{to:"/home",name:"home",icon:"wap-home-o"},{default:_(()=>[v("主页")]),_:1}),c(n,{to:"/search",name:"search",icon:"search"},{default:_(()=>[v("搜索")]),_:1}),c(n,{to:"/toolpage",name:"toolpage",icon:"friends-o"},{default:_(()=>[v("工具")]),_:1}),c(n,{to:"/settingpage",name:"settingpage",icon:"setting-o"},{default:_(()=>[v("设置")]),_:1})]),_:1},8,["modelValue"])}}}),me={};function fe(e,s){const a=G("RouterView"),i=de;return A(),H(J,null,[c(a),c(i)],64)}const ge=ne(me,[["render",fe]]);export{ge as default};
