import{_ as V}from"./PageContainer-BHrjUJTy.js";import{r as n,u as k,c as E,a as t,o as U,b as e,f as x,bN as y,E as w}from"./index-C8ybJ9Eg.js";import{E as B,a as F}from"./el-form-item-DtV7rRmw.js";import{E as I}from"./_plugin-vue_export-helper-BegnIwYg.js";import{E as N}from"./el-input-CvG-3Gcr.js";import"./_baseClone-a3CAQbi1.js";const $={__name:"UserProfile",setup(S){const u=n(),{user:{email:s,id:i,nickname:p,username:d},getUser:_}=k(),l=n({id:i,username:d,nickname:p,email:s}),f=n({nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}),c=async()=>{await u.value.validate(),await y(l.value),_(),w.success("修改成功")};return(q,a)=>{const m=N,r=B,g=I,b=F,v=V;return U(),E(v,{title:"基本资料"},{default:t(()=>[e(b,{model:l.value,rules:f.value,ref_key:"formRef",ref:u,"label-width":"100px",size:"large"},{default:t(()=>[e(r,{label:"登录名称"},{default:t(()=>[e(m,{modelValue:l.value.username,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value.username=o),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:t(()=>[e(m,{modelValue:l.value.nickname,"onUpdate:modelValue":a[1]||(a[1]=o=>l.value.nickname=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:t(()=>[e(m,{modelValue:l.value.email,"onUpdate:modelValue":a[2]||(a[2]=o=>l.value.email=o)},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(g,{type:"primary",onClick:c},{default:t(()=>a[3]||(a[3]=[x("提交修改")])),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}};export{$ as default};