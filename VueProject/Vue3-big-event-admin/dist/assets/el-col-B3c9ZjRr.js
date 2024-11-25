import{k as g,s as f,t as _,v as n,L as R,o as $,c as h,a as v,B as w,C as j,e as c,y as N,z as C,_ as x,G as E,q as u,ad as r,M as S,n as b,ag as K}from"./index-DQGeNbLD.js";const O=Symbol("rowContextKey"),k=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],L=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:k,default:"start"},align:{type:String,values:B}}),P=f({name:"ElRow"}),q=f({...P,props:L,setup(p){const e=p,l=_("row"),a=n(()=>e.gutter);R(O,{gutter:a});const i=n(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=n(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,y)=>($(),h(C(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var A=x(q,[["__file","row.vue"]]);const F=E(A),D=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),G=f({name:"ElCol"}),I=f({...G,props:D,setup(p){const e=p,{gutter:l}=S(O,{gutter:n(()=>0)}),a=_("col"),i=n(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=n(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const o=e[s];b(o)&&(s==="span"?t.push(a.b(`${e[s]}`)):o>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([o,m])=>{t.push(o!=="span"?a.b(`${s}-${o}-${m}`):a.b(`${s}-${m}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,y)=>($(),h(C(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var J=x(I,[["__file","col.vue"]]);const H=E(J);export{H as E,F as a};
