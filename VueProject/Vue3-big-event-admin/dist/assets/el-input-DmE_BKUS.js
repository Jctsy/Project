import{aA as Ve,c1 as be,b_ as xe,b4 as ae,c2 as Ae,b2 as je,aZ as et,b3 as tt,c3 as nt,v as m,a1 as Re,bz as at,by as X,r as L,w as Y,R as Q,aB as we,X as z,k as Be,n as Se,aD as ot,q as j,p as Ce,ad as st,D as ee,s as $e,c4 as lt,J as rt,t as Ie,ai as it,N as ut,Q as ct,o as v,x as C,a0 as h,a3 as te,C as g,e as o,B as _,d as T,c as E,a as B,z as U,A as $,H as Ee,b as dt,aE as pt,a2 as ft,bA as vt,ak as W,y as Pe,ag as ze,_ as mt,ax as ht,c5 as gt,c6 as yt,ah as bt,G as xt}from"./index-DQGeNbLD.js";import{i as Le,k as wt,l as St,c as Ct,d as It,a as Et,f as Pt,e as ke}from"./_plugin-vue_export-helper-XKw1at4Y.js";const zt=()=>Ve&&/firefox/i.test(window.navigator.userAgent);function kt(e){return e}function Ft(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}var Nt=800,Tt=16,Vt=Date.now;function At(e){var a=0,l=0;return function(){var n=Vt(),s=Tt-(n-l);if(l=n,s>0){if(++a>=Nt)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Rt(e){return function(){return e}}var Bt=be?function(e,a){return be(e,"toString",{configurable:!0,enumerable:!1,value:Rt(a),writable:!0})}:kt,$t=At(Bt),Fe=Math.max;function Lt(e,a,l){return a=Fe(a===void 0?e.length-1:a,0),function(){for(var n=arguments,s=-1,u=Fe(n.length-a,0),r=Array(u);++s<u;)r[s]=n[a+s];s=-1;for(var i=Array(a+1);++s<a;)i[s]=n[s];return i[a]=l(r),Ft(e,this,i)}}var Ne=xe?xe.isConcatSpreadable:void 0;function Ot(e){return ae(e)||Le(e)||!!(Ne&&e&&e[Ne])}function Ht(e,a,l,n,s){var u=-1,r=e.length;for(l||(l=Ot),s||(s=[]);++u<r;){var i=e[u];l(i)?wt(s,i):s[s.length]=i}return s}function Mt(e){var a=e==null?0:e.length;return a?Ht(e):[]}function Dt(e){return $t(Lt(e,void 0,Mt),e+"")}function mn(){if(!arguments.length)return[];var e=arguments[0];return ae(e)?e:[e]}function Kt(e,a){return e!=null&&a in Object(e)}function _t(e,a,l){a=Ae(a,e);for(var n=-1,s=a.length,u=!1;++n<s;){var r=je(a[n]);if(!(u=e!=null&&l(e,r)))break;e=e[r]}return u||++n!=s?u:(s=e==null?0:e.length,!!s&&St(s)&&et(r,s)&&(ae(e)||Le(e)))}function Ut(e,a){return e!=null&&_t(e,a,Kt)}function Wt(e,a,l){for(var n=-1,s=a.length,u={};++n<s;){var r=a[n],i=tt(e,r);l(i,r)&&nt(u,Ae(r,e),i)}return u}function Xt(e,a){return Wt(e,a,function(l,n){return Ut(e,n)})}var Yt=Dt(function(e,a){return e==null?{}:Xt(e,a)});const ne="update:modelValue",hn="change",Gt=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),Zt=["class","style"],qt=/^on[A-Z]/,Jt=(e={})=>{const{excludeListeners:a=!1,excludeKeys:l}=e,n=m(()=>((l==null?void 0:l.value)||[]).concat(Zt)),s=Re();return s?m(()=>{var u;return at(Object.entries((u=s.proxy)==null?void 0:u.$attrs).filter(([r])=>!n.value.includes(r)&&!(a&&qt.test(r))))}):m(()=>({}))};function Qt(e){let a;function l(){if(e.value==null)return;const{selectionStart:s,selectionEnd:u,value:r}=e.value;if(s==null||u==null)return;const i=r.slice(0,Math.max(0,s)),d=r.slice(Math.max(0,u));a={selectionStart:s,selectionEnd:u,value:r,beforeTxt:i,afterTxt:d}}function n(){if(e.value==null||a==null)return;const{value:s}=e.value,{beforeTxt:u,afterTxt:r,selectionStart:i}=a;if(u==null||r==null||i==null)return;let d=s.length;if(s.endsWith(r))d=s.length-r.length;else if(s.startsWith(u))d=u.length;else{const b=u[i-1],f=s.indexOf(b,i-1);f!==-1&&(d=f+1)}e.value.setSelectionRange(d,d)}return[l,n]}function jt(e,{beforeFocus:a,afterFocus:l,beforeBlur:n,afterBlur:s}={}){const u=Re(),{emit:r}=u,i=X(),d=L(!1),b=y=>{we(a)&&a(y)||d.value||(d.value=!0,r("focus",y),l==null||l())},f=y=>{var x;we(n)&&n(y)||y.relatedTarget&&((x=i.value)!=null&&x.contains(y.relatedTarget))||(d.value=!1,r("blur",y),s==null||s())},w=()=>{var y,x;(y=i.value)!=null&&y.contains(document.activeElement)&&i.value!==document.activeElement||(x=e.value)==null||x.focus()};return Y(i,y=>{y&&y.setAttribute("tabindex","-1")}),Q(i,"focus",b,!0),Q(i,"blur",f,!0),Q(i,"click",w,!0),{isFocused:d,wrapperRef:i,handleFocus:b,handleBlur:f}}function en({afterComposition:e,emit:a}){const l=L(!1),n=i=>{a==null||a("compositionstart",i),l.value=!0},s=i=>{var d;a==null||a("compositionupdate",i);const b=(d=i.target)==null?void 0:d.value,f=b[b.length-1]||"";l.value=!Gt(f)},u=i=>{a==null||a("compositionend",i),l.value&&(l.value=!1,z(()=>e(i)))};return{isComposing:l,handleComposition:i=>{i.type==="compositionend"?u(i):s(i)},handleCompositionStart:n,handleCompositionUpdate:s,handleCompositionEnd:u}}const tn=Be({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),nn=e=>Yt(tn,e);let S;const an=`
  height:0 !important;
  visibility:hidden !important;
  ${zt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,on=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function sn(e){const a=window.getComputedStyle(e),l=a.getPropertyValue("box-sizing"),n=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),s=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:on.map(r=>`${r}:${a.getPropertyValue(r)}`).join(";"),paddingSize:n,borderSize:s,boxSizing:l}}function Te(e,a=1,l){var n;S||(S=document.createElement("textarea"),document.body.appendChild(S));const{paddingSize:s,borderSize:u,boxSizing:r,contextStyle:i}=sn(e);S.setAttribute("style",`${i};${an}`),S.value=e.value||e.placeholder||"";let d=S.scrollHeight;const b={};r==="border-box"?d=d+u:r==="content-box"&&(d=d-s),S.value="";const f=S.scrollHeight-s;if(Se(a)){let w=f*a;r==="border-box"&&(w=w+s+u),d=Math.max(w,d),b.minHeight=`${w}px`}if(Se(l)){let w=f*l;r==="border-box"&&(w=w+s+u),d=Math.min(w,d)}return b.height=`${d}px`,(n=S.parentNode)==null||n.removeChild(S),S=void 0,b}const ln=Be({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:j([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:j([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:j([Object,Array,String]),default:()=>st({})},autofocus:Boolean,rows:{type:Number,default:2},...nn(["ariaLabel"])}),rn={[ne]:e=>ee(e),input:e=>ee(e),change:e=>ee(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},un=$e({name:"ElInput",inheritAttrs:!1}),cn=$e({...un,props:ln,emits:rn,setup(e,{expose:a,emit:l}){const n=e,s=lt(),u=Jt(),r=rt(),i=m(()=>[n.type==="textarea"?oe.b():c.b(),c.m(y.value),c.is("disabled",x.value),c.is("exceed",_e.value),{[c.b("group")]:r.prepend||r.append,[c.m("prefix")]:r.prefix||n.prefixIcon,[c.m("suffix")]:r.suffix||n.suffixIcon||n.clearable||n.showPassword,[c.bm("suffix","password-clear")]:K.value&&Z.value,[c.b("hidden")]:n.type==="hidden"},s.class]),d=m(()=>[c.e("wrapper"),c.is("focus",D.value)]),{form:b,formItem:f}=Ct(),{inputId:w}=It(n,{formItemContext:f}),y=Et(),x=Pt(),c=Ie("input"),oe=Ie("textarea"),O=X(),I=X(),G=L(!1),H=L(!1),se=L(),M=X(n.inputStyle),k=m(()=>O.value||I.value),{wrapperRef:Oe,isFocused:D,handleFocus:He,handleBlur:Me}=jt(k,{beforeFocus(){return x.value},afterBlur(){var t;n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"blur").catch(p=>ke()))}}),le=m(()=>{var t;return(t=b==null?void 0:b.statusIcon)!=null?t:!1}),V=m(()=>(f==null?void 0:f.validateState)||""),re=m(()=>V.value&&ht[V.value]),De=m(()=>H.value?gt:yt),Ke=m(()=>[s.style]),ie=m(()=>[n.inputStyle,M.value,{resize:n.resize}]),P=m(()=>bt(n.modelValue)?"":String(n.modelValue)),K=m(()=>n.clearable&&!x.value&&!n.readonly&&!!P.value&&(D.value||G.value)),Z=m(()=>n.showPassword&&!x.value&&!!P.value&&(!!P.value||D.value)),F=m(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!x.value&&!n.readonly&&!n.showPassword),q=m(()=>P.value.length),_e=m(()=>!!F.value&&q.value>Number(n.maxlength)),Ue=m(()=>!!r.suffix||!!n.suffixIcon||K.value||n.showPassword||F.value||!!V.value&&le.value),[We,Xe]=Qt(O);it(I,t=>{if(Ye(),!F.value||n.resize!=="both")return;const p=t[0],{width:N}=p.contentRect;se.value={right:`calc(100% - ${N+15+6}px)`}});const A=()=>{const{type:t,autosize:p}=n;if(!(!Ve||t!=="textarea"||!I.value))if(p){const N=ze(p)?p.minRows:void 0,ge=ze(p)?p.maxRows:void 0,ye=Te(I.value,N,ge);M.value={overflowY:"hidden",...ye},z(()=>{I.value.offsetHeight,M.value=ye})}else M.value={minHeight:Te(I.value).minHeight}},Ye=(t=>{let p=!1;return()=>{var N;if(p||!n.autosize)return;((N=I.value)==null?void 0:N.offsetParent)===null||(t(),p=!0)}})(A),R=()=>{const t=k.value,p=n.formatter?n.formatter(P.value):P.value;!t||t.value===p||(t.value=p)},J=async t=>{We();let{value:p}=t.target;if(n.formatter&&(p=n.parser?n.parser(p):p),!ce.value){if(p===P.value){R();return}l(ne,p),l("input",p),await z(),R(),Xe()}},ue=t=>{l("change",t.target.value)},{isComposing:ce,handleCompositionStart:de,handleCompositionUpdate:pe,handleCompositionEnd:fe}=en({emit:l,afterComposition:J}),Ge=()=>{H.value=!H.value,ve()},ve=async()=>{var t;await z(),(t=k.value)==null||t.focus()},Ze=()=>{var t;return(t=k.value)==null?void 0:t.blur()},qe=t=>{G.value=!1,l("mouseleave",t)},Je=t=>{G.value=!0,l("mouseenter",t)},me=t=>{l("keydown",t)},Qe=()=>{var t;(t=k.value)==null||t.select()},he=()=>{l(ne,""),l("change",""),l("clear"),l("input","")};return Y(()=>n.modelValue,()=>{var t;z(()=>A()),n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"change").catch(p=>ke()))}),Y(P,()=>R()),Y(()=>n.type,async()=>{await z(),R(),A()}),ut(()=>{!n.formatter&&n.parser,R(),z(A)}),a({input:O,textarea:I,ref:k,textareaStyle:ie,autosize:ct(n,"autosize"),isComposing:ce,focus:ve,blur:Ze,select:Qe,clear:he,resizeTextarea:A}),(t,p)=>(v(),C("div",{class:g([o(i),{[o(c).bm("group","append")]:t.$slots.append,[o(c).bm("group","prepend")]:t.$slots.prepend}]),style:Pe(o(Ke)),onMouseenter:Je,onMouseleave:qe},[h(" input "),t.type!=="textarea"?(v(),C(te,{key:0},[h(" prepend slot "),t.$slots.prepend?(v(),C("div",{key:0,class:g(o(c).be("group","prepend"))},[_(t.$slots,"prepend")],2)):h("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Oe,class:g(o(d))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(v(),C("span",{key:0,class:g(o(c).e("prefix"))},[T("span",{class:g(o(c).e("prefix-inner"))},[_(t.$slots,"prefix"),t.prefixIcon?(v(),E(o($),{key:0,class:g(o(c).e("icon"))},{default:B(()=>[(v(),E(U(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),T("input",Ee({id:o(w),ref_key:"input",ref:O,class:o(c).e("inner")},o(u),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?H.value?"text":"password":t.type,disabled:o(x),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,role:t.containerRole,onCompositionstart:o(de),onCompositionupdate:o(pe),onCompositionend:o(fe),onInput:J,onChange:ue,onKeydown:me}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),o(Ue)?(v(),C("span",{key:1,class:g(o(c).e("suffix"))},[T("span",{class:g(o(c).e("suffix-inner"))},[!o(K)||!o(Z)||!o(F)?(v(),C(te,{key:0},[_(t.$slots,"suffix"),t.suffixIcon?(v(),E(o($),{key:0,class:g(o(c).e("icon"))},{default:B(()=>[(v(),E(U(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),o(K)?(v(),E(o($),{key:1,class:g([o(c).e("icon"),o(c).e("clear")]),onMousedown:ft(o(vt),["prevent"]),onClick:he},{default:B(()=>[dt(o(pt))]),_:1},8,["class","onMousedown"])):h("v-if",!0),o(Z)?(v(),E(o($),{key:2,class:g([o(c).e("icon"),o(c).e("password")]),onClick:Ge},{default:B(()=>[(v(),E(U(o(De))))]),_:1},8,["class"])):h("v-if",!0),o(F)?(v(),C("span",{key:3,class:g(o(c).e("count"))},[T("span",{class:g(o(c).e("count-inner"))},W(o(q))+" / "+W(t.maxlength),3)],2)):h("v-if",!0),o(V)&&o(re)&&o(le)?(v(),E(o($),{key:4,class:g([o(c).e("icon"),o(c).e("validateIcon"),o(c).is("loading",o(V)==="validating")])},{default:B(()=>[(v(),E(U(o(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(v(),C("div",{key:1,class:g(o(c).be("group","append"))},[_(t.$slots,"append")],2)):h("v-if",!0)],64)):(v(),C(te,{key:1},[h(" textarea "),T("textarea",Ee({id:o(w),ref_key:"textarea",ref:I,class:[o(oe).e("inner"),o(c).is("focus",o(D))]},o(u),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:o(x),readonly:t.readonly,autocomplete:t.autocomplete,style:o(ie),"aria-label":t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,rows:t.rows,role:t.containerRole,onCompositionstart:o(de),onCompositionupdate:o(pe),onCompositionend:o(fe),onInput:J,onFocus:o(He),onBlur:o(Me),onChange:ue,onKeydown:me}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),o(F)?(v(),C("span",{key:0,style:Pe(se.value),class:g(o(c).e("count"))},W(o(q))+" / "+W(t.maxlength),7)):h("v-if",!0)],64))],38))}});var dn=mt(cn,[["__file","input.vue"]]);const gn=xt(dn);export{hn as C,gn as E,ne as U,jt as a,nn as b,mn as c,Ht as d,Ut as h,kt as i,Lt as o,Yt as p,$t as s,en as u};
