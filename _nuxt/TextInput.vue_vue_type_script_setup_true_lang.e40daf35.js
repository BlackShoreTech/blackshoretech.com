import{k as s,b as z,f as B,F as g,o as n,s as i,u as e,C as d,r as c,a0 as f,A as b,J as w,a1 as C,a2 as _}from"./entry.9b8be6d5.js";const E=(r,o,l)=>s({get(){return r[o]},set(t){l(`update:${o}`,t)}}),P={class:d("text-input-container relative flex")},D={class:"text-input-wrapper relative flex flex-1"},F=["type","placeholder"],A=z({__name:"TextInput",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},size:{type:String,default:"md"},type:{type:String,default:"default"}},emits:["update:modelValue"],setup(r,{emit:o}){const l=r,t=B(),x=g({xs:"px-1 py-0.5",sm:"px-2 py-1.5",md:"px-4 py-2",lg:"px-5 py-3"}),y=g({xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}),u=E(l,"modelValue",o),S=s(()=>typeof t.prefix<"u"||typeof t["prefix-disabled"]<"u"),v=s(()=>typeof t.suffix<"u"),a=s(()=>"border-gray-900/10 dark:border-gray-50/[0.2]"),$=s(()=>"dark:focus:border-white focus:border-gray-900"),h=s(()=>x[l.size]||x.md),k=s(()=>y[l.size]||y.md);return(p,m)=>(n(),i("div",P,[e(t)["prefix-disabled"]?(n(),i("div",{key:0,class:d(`flex rounded-l bg-gray-100 dark:bg-slate-800 text-gray-500 border ${e(a)}`)},[c(p.$slots,"prefix-disabled")],2)):f("",!0),e(t).prefix?(n(),i("div",{key:1,class:d(`flex rounded-l border ${e(a)}`)},[c(p.$slots,"prefix")],2)):f("",!0),b("div",D,[w(b("input",{"onUpdate:modelValue":m[0]||(m[0]=V=>_(u)?u.value=V:null),class:d(`text-input w-full flex-1 bg-transparent outline-none border ${e(S)?"":"rounded-l"} ${e(v)?"":"rounded-r"} ${e(a)} ${e($)} ${e(h)} ${e(k)}`),type:r.type,placeholder:r.placeholder},null,10,F),[[C,e(u)]])]),e(t).suffix?(n(),i("div",{key:2,class:d(`flex rounded-r border ${e(a)}`)},[c(p.$slots,"suffix")],2)):f("",!0)]))}});export{A as _,E as u};