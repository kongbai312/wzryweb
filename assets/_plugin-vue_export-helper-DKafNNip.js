import{j as y,d as _,n as I,a9 as c,b as g,a3 as m,y as P,t as S,Q as p,aI as $,k as h,aH as B,aJ as O,m as k}from"./index-Con2zwDB.js";const[w,v]=y("badge"),C={dot:Boolean,max:m,tag:P("div"),color:String,offset:Array,content:m,showZero:S,position:P("top-right")};var N=_({name:w,props:C,setup(e,{slots:o}){const s=()=>{if(o.content)return!0;const{content:t,showZero:n}=e;return p(t)&&t!==""&&(n||t!==0&&t!=="0")},i=()=>{const{dot:t,max:n,content:a}=e;if(!t&&s())return o.content?o.content():p(n)&&$(a)&&+a>+n?`${n}+`:a},f=t=>t.startsWith("-")?t.replace("-",""):`-${t}`,b=I(()=>{const t={background:e.color};if(e.offset){const[n,a]=e.offset,{position:l}=e,[r,u]=l.split("-");o.default?(typeof a=="number"?t[r]=c(r==="top"?a:-a):t[r]=r==="top"?c(a):f(a),typeof n=="number"?t[u]=c(u==="left"?n:-n):t[u]=u==="left"?c(n):f(n)):(t.marginTop=c(a),t.marginLeft=c(n))}return t}),d=()=>{if(s()||e.dot)return g("div",{class:v([e.position,{dot:e.dot,fixed:!!o.default}]),style:b.value},[i()])};return()=>{if(o.default){const{tag:t}=e;return g(t,{class:v("wrapper")},{default:()=>[o.default(),d()]})}return d()}}});const j=h(N),[z,x]=y("icon"),D=e=>e==null?void 0:e.includes("/"),E={dot:Boolean,tag:P("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var R=_({name:z,props:E,setup(e,{slots:o}){const s=B(O,null),i=I(()=>e.classPrefix||(s==null?void 0:s.iconPrefix)||x());return()=>{const{tag:f,dot:b,name:d,size:t,badge:n,color:a}=e,l=D(d);return g(j,k({dot:b,tag:f,class:[i.value,l?"":`${i.value}-${d}`],style:{color:a,fontSize:c(t)},content:n},e.badgeProps),{default:()=>{var r;return[(r=o.default)==null?void 0:r.call(o),l&&g("img",{class:x("image"),src:d},null)]}})}}});const W=h(R),Y=(e,o)=>{const s=e.__vccOpts||e;for(const[i,f]of o)s[i]=f;return s};export{j as B,W as I,Y as _};