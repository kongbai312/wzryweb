import{C as r,aw as f,aE as l,l as p,b as u}from"./index-DWTpD4jv.js";const a="van-hairline",T=`${a}--top`,B=`${a}--left`,P=`${a}--bottom`,_=`${a}--surround`,m=`${a}--top-bottom`,b="van-haptics-feedback",D=Symbol("van-form"),S=5;function h(o,{args:s=[],done:t,canceled:n,error:c}){if(o){const e=o.apply(null,s);r(e)?e.then(i=>{i?t():n&&n()}).catch(c||f):e?t():n&&n()}else t()}const O=Symbol();function F(o){const s=l(O,null);s&&p(s,t=>{t&&o()})}const $={to:[String,Object],url:String,replace:Boolean};function R({to:o,url:s,replace:t,$router:n}){o&&n?n[t?"replace":"push"](o):s&&(t?location.replace(s):location.href=s)}function g(){const o=u().proxy;return()=>R(o)}export{m as B,D as F,b as H,O as P,S as T,P as a,R as b,h as c,B as d,T as e,_ as f,F as o,$ as r,g as u};
