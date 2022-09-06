import{_ as S}from"./Anchor.vue_vue_type_script_setup_true_lang.d4150bff.js";import{_ as N}from"./Button.vue_vue_type_script_setup_true_lang.c2021050.js";import{_ as A,a as V,b as L,c as P,d as F,e as H,f as M}from"./Footer.vue_vue_type_script_setup_true_lang.87e6612b.js";import{u as T}from"./useLang.8f06f2f5.js";import{b as D,k as E,o as s,c,p as r,A as o,s as i,Q as v,H as g,B as p,a0 as y,u as b,P as k,v as n,C as O,S as Q,r as _}from"./entry.18e9a376.js";import{_ as j}from"./_plugin-vue_export-helper.a1a6add7.js";import"./transition.9acd2689.js";const q={class:"relative hidden lg:flex items-center ml-auto"},G={class:"text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300",role:"navigation"},I={class:"flex items-center space-x-8"},J={class:"flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"},K={class:"leading-6 font-semibold text-gray-600 dark:text-gray-300"},R={class:"flex flex-col"},U={class:"mt-6 text-sm font-bold capitalize"},W={class:"mt-2"},X={class:"mt-6 text-sm font-bold capitalize"},Y={class:"mt-2"},Z=D({__name:"Navbar",setup(a){const{t:l}=T(),d=E(()=>[{type:"link",text:l("pages.about.nav"),route:{name:"about"}},{type:"link",text:l("pages.test.nav"),route:{name:"test"}},{type:"link",text:l("pages.post.nav"),route:{name:"post"}},{type:"link",text:l("pages.setting.nav"),route:{name:"setting"}}]);return(f,le)=>{const h=S,u=N,x=A,m=V,$=L,w=P,C=F,z=H;return s(),c(z,null,{menu:r(()=>[o("div",q,[o("nav",G,[o("ul",I,[(s(!0),i(k,null,v(b(d),(t,e)=>(s(),i("li",{key:e},[t.type==="link"?(s(),c(h,{key:0,to:t.route?t.route:void 0,href:t.href?t.href:void 0,class:"hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"},{default:r(()=>[g(p(t.text),1)]),_:2},1032,["to","href"])):t.type==="button"?(s(),c(u,{key:1,text:t.text,size:"xs",class:"font-extrabold capitalize",to:t.route?t.route:void 0,href:t.href?t.href:void 0},null,8,["text","to","href"])):y("",!0)]))),128))])]),o("div",J,[n(x),n(m)])])]),options:r(({toggleOptions:t})=>[n(C,{onOnClose:e=>t(!1)},{default:r(()=>[n(w,null,{default:r(()=>[n($,{text:"Menu"}),o("nav",K,[o("ul",R,[(s(!0),i(k,null,v(b(d),(e,B)=>(s(),i("li",{key:B,class:O(["flex w-full",{"pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]":e.type==="link"}])},[e.type==="link"?(s(),c(h,{key:0,to:e.route?e.route:void 0,href:e.href?e.href:void 0,class:"flex-1 hover:no-underline capitalize"},{default:r(()=>[g(p(e.text),1)]),_:2},1032,["to","href"])):e.type==="button"?(s(),c(u,{key:1,text:e.text,size:"xs",class:"flex-1 font-extrabold capitalize",to:e.route?e.route:void 0,href:e.href?e.href:void 0},null,8,["text","to","href"])):y("",!0)],2))),128))])]),o("div",U,p(f.$t("components.theme_switcher.change_theme")),1),o("div",W,[n(m,{type:"select-box"})]),o("div",X,p(f.$t("components.language_switcher.change_language")),1),o("div",Y,[n(x,{type:"select-box"})])]),_:1}),n(u,{text:"Close",type:"secondary",onClick:Q(e=>t(!1),["prevent"])},null,8,["onClick"])]),_:2},1032,["onOnClose"])]),_:1})}}}),ee={},te=o("div",{id:"app-before"},null,-1),oe={class:"flex flex-col min-h-screen"},se={class:"flex-1 w-full flex flex-col"},ne={class:"relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"},ae=o("div",{id:"app-after"},null,-1);function re(a,l){const d=Z,f=M;return s(),i("div",null,[_(a.$slots,"app-before"),te,o("div",oe,[_(a.$slots,"header",{},()=>[n(d)]),o("div",se,[o("div",ne,[_(a.$slots,"default")])]),_(a.$slots,"footer",{},()=>[n(f)])]),_(a.$slots,"app-after"),ae])}const he=j(ee,[["render",re]]);export{he as default};