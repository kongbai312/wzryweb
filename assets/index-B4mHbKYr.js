import{aC as he,ak as be,j as ve,aA as ye,at as Ie,c as Ce,n as _,A as w,m as Se,e as ke,K as xe,d as Ee,I as Ve,r as L,f as we,h as I,aj as K,an as Me,aD as Te,l as Ae,ad as V,O as Le,E as Pe,a as d,C,aE as H,aF as Re,X as P,i as Be,s as _e,aG as Oe,w as ze}from"./index-CBCQ6Rvf.js";import{c as De,C as Fe}from"./index-DJ23qM7C.js";import{u as Ne}from"./use-id-gROM3XTf.js";import{u as We}from"./use-expose-C8j5eqMI.js";import{I as R}from"./_plugin-vue_export-helper-Cmma1cYV.js";import{F as je}from"./use-route-CObrCZIx.js";function G(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function qe(t,r){if(G(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function $e(t,r){return new Promise(l=>{const f=r.validator(t,r);if(ye(f)){f.then(l);return}l(f)})}function U(t,r){const{message:l}=r;return Ie(l)?l(t,r):l||""}function Ke({target:t}){t.composing=!0}function Y({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function He(t,r){const l=he();t.style.height="auto";let f=t.scrollHeight;if(ve(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(f=Math.min(f,i)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,be(l))}function Ue(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function B(t,r){return[...t].slice(0,r).join("")}const[Ye,m]=Ce("field"),Ge={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:w("clear"),modelValue:Se(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:w("focus"),formatTrigger:w("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=ke({},De,Ge,{rows:_,type:w("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:xe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Xe=Ee({name:Ye,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const f=Ne(),i=Ve({status:"unvalidated",focused:!1,validateMessage:""}),c=L(),O=L(),M=L(),{parent:h}=we(je),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},u=e=>{if(C(t[e]))return t[e];if(h&&C(h.props[e]))return h.props[e]},J=I(()=>{const e=u("readonly");if(t.clearable&&!e){const n=y()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return n&&a}return!1}),z=I(()=>M.value&&l.input?M.value():t.modelValue),X=I(()=>{var e;const n=u("required");return n==="auto"?(e=t.rules)==null?void 0:e.some(a=>a.required):n}),Q=e=>e.reduce((n,a)=>n.then(()=>{if(i.status==="failed")return;let{value:o}=z;if(a.formatter&&(o=a.formatter(o,a)),!qe(o,a)){i.status="failed",i.validateMessage=U(o,a);return}if(a.validator)return G(o)&&a.validateEmpty===!1?void 0:$e(o,a).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=U(o,a))})}),Promise.resolve()),S=()=>{i.status="unvalidated",i.validateMessage=""},D=()=>r("endValidate",{status:i.status,message:i.validateMessage}),F=(e=t.rules)=>new Promise(n=>{S(),e?(r("startValidate"),Q(e).then(()=>{i.status==="failed"?(n({name:t.name,message:i.validateMessage}),D()):(i.status="passed",n(),D())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=H(n).includes(e),o=t.rules.filter(s=>s.trigger?H(s.trigger).includes(e):a);o.length&&F(o)}},Z=e=>{var n;const{maxlength:a}=t;if(C(a)&&v(e)>+a){const o=y();if(o&&v(o)===+a)return o;const s=(n=c.value)==null?void 0:n.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+a;return g.splice(s-b,b),g.join("")}return B(e,+a)}return e},k=(e,n="onChange")=>{const a=e;e=Z(e);const o=v(a)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Re(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),C(b)&&v(e)>+b&&(e=B(e,+b)),c.value&&i.focused){const{selectionEnd:E}=c.value,$=B(a,E);s=v(g($))-v($)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,C(g)&&C(b)){const E=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,E),Math.min(b,E))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},p=e=>{e.target.composing||k(e.target.value)},A=()=>{var e;return(e=c.value)==null?void 0:e.blur()},N=()=>{var e;return(e=c.value)==null?void 0:e.focus()},x=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&He(e,t.autosize)},ee=e=>{i.focused=!0,r("focus",e),V(x),u("readonly")&&A()},te=e=>{i.focused=!1,k(y(),"onBlur"),r("blur",e),!u("readonly")&&(T("onBlur"),V(x),Oe())},W=e=>r("clickInput",e),ne=e=>r("clickLeftIcon",e),ae=e=>r("clickRightIcon",e),re=e=>{P(e),r("update:modelValue",""),r("clear",e)},j=I(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),ie=I(()=>{const e=u("labelWidth"),n=u("labelAlign");if(e&&n!=="top")return{width:K(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&P(e),t.type==="search"&&A()),r("keypress",e)},q=()=>t.id||`${f}-input`,oe=()=>i.status,se=()=>{const e=m("control",[u("inputAlign"),{error:j.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return d("div",{class:e,onClick:W},[l.input()]);const n={id:q(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:u("disabled"),readonly:u("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:W,onChange:Y,onKeypress:le,onCompositionend:Y,onCompositionstart:Ke};return t.type==="textarea"?d("textarea",n,null):d("input",Be(Ue(t.type),n),null)},ce=()=>{const e=l["left-icon"];if(t.leftIcon||e)return d("div",{class:m("left-icon"),onClick:ne},[e?e():d(R,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=l["right-icon"];if(t.rightIcon||e)return d("div",{class:m("right-icon"),onClick:ae},[e?e():d(R,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return d("div",{class:m("word-limit")},[d("span",{class:m("word-num")},[e]),_e("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const n=l["error-message"],a=u("errorMessageAlign");return d("div",{class:m("error-message",a)},[n?n({message:e}):e])}},ge=()=>{const e=u("labelWidth"),n=u("labelAlign"),a=u("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return d("label",{id:`${f}-label`,for:l.input?void 0:q(),onClick:o=>{P(o),N()},style:n==="top"&&e?{width:K(e)}:void 0},[t.label+a])},me=()=>[d("div",{class:m("body")},[se(),J.value&&d(R,{ref:O,name:t.clearIcon,class:m("clear")},null),ue(),l.button&&d("div",{class:m("button")},[l.button()])]),de(),fe()];return We({blur:A,focus:N,validate:F,formValue:z,resetValidation:S,getValidationStatus:oe}),Me(Te,{customValue:M,resetValidation:S,validateWithTrigger:T}),Ae(()=>t.modelValue,()=>{k(y()),S(),T("onChange"),V(x)}),Le(()=>{k(y(),t.formatTrigger),V(x)}),Pe("touchstart",re,{target:I(()=>{var e;return(e=O.value)==null?void 0:e.$el})}),()=>{const e=u("disabled"),n=u("labelAlign"),a=ce(),o=()=>{const s=ge();return n==="top"?[a,s].filter(Boolean):s||[]};return d(Fe,{size:t.size,class:m({error:j.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:X.value}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:me,extra:l.extra})}}});const at=ze(Xe);export{at as F,Ge as f};
