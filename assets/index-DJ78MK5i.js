import{c as x,d as I,h as y,I as r,a as g,n as m,E as b,t as $,O as p,aF as w,w as S,aE as B,aG as O,i as _}from"./index-DWTpD4jv.js";const[C,h]=x("badge"),E={dot:Boolean,max:m,tag:b("div"),color:String,offset:Array,content:m,showZero:$,position:b("top-right")};var N=I({name:C,props:E,setup(e,{slots:a}){const c=()=>{if(a.content)return!0;const{content:t,showZero:n}=e;return p(t)&&t!==""&&(n||t!==0&&t!=="0")},f=()=>{const{dot:t,max:n,content:o}=e;if(!t&&c())return a.content?a.content():p(n)&&w(o)&&+o>+n?`${n}+`:o},d=t=>t.startsWith("-")?t.replace("-",""):`-${t}`,P=y(()=>{const t={background:e.color};if(e.offset){const[n,o]=e.offset,{position:l}=e,[s,u]=l.split("-");a.default?(typeof o=="number"?t[s]=r(s==="top"?o:-o):t[s]=s==="top"?r(o):d(o),typeof n=="number"?t[u]=r(u==="left"?n:-n):t[u]=u==="left"?r(n):d(n)):(t.marginTop=r(o),t.marginLeft=r(n))}return t}),i=()=>{if(c()||e.dot)return g("div",{class:h([e.position,{dot:e.dot,fixed:!!a.default}]),style:P.value},[f()])};return()=>{if(a.default){const{tag:t}=e;return g(t,{class:h("wrapper")},{default:()=>[a.default(),i()]})}return i()}}});const z=S(N),[j,v]=x("icon"),k=e=>e==null?void 0:e.includes("/"),D={dot:Boolean,tag:b("i"),name:String,size:m,badge:m,color:String,badgeProps:Object,classPrefix:String};var F=I({name:j,props:D,setup(e,{slots:a}){const c=B(O,null),f=y(()=>e.classPrefix||(c==null?void 0:c.iconPrefix)||v());return()=>{const{tag:d,dot:P,name:i,size:t,badge:n,color:o}=e,l=k(i);return g(z,_({dot:P,tag:d,class:[f.value,l?"":`${f.value}-${i}`],style:{color:o,fontSize:r(t)},content:n},e.badgeProps),{default:()=>{var s;return[(s=a.default)==null?void 0:s.call(a),l&&g("img",{class:v("image"),src:i},null)]}})}}});const R=S(F);export{z as B,R as I};
