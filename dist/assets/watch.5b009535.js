import{_ as g,r as f,w as r,g as u,k as d,o as h,c as w,a as s,t as l,F as _}from"./index.03db0594.js";const v={setup(){const a=f(0);r(a,(e,c)=>{console.log(`\u539F\u503C\u4E3A${e}`),console.log(`\u65B0\u503C\u4E3A${c}`)}),setTimeout(()=>{a.value++},1e3);const n=u({count:0});r(()=>n.count,(e,c)=>{console.log(`\u539F\u503C\u4E3A${c}`),console.log(`\u65B0\u503C\u4E3A${e}`)}),setTimeout(()=>{n.count++},1e3);const o=u({count:0,name:"zs"});r([()=>o.count,()=>o.name],([e,c],[i,m])=>{console.log(i),console.log(e),console.log(m),console.log(c)}),setTimeout(()=>{o.count++,o.name="ls"},1e3);const t=u({count:0,name:"zs"});return d(()=>{console.log(t.count),console.log(t.name)}),setTimeout(()=>{t.count++,t.name="ls"},1e3),{state:a,state2:n,state3:o,state4:t}}};function p(a,n,o,t,e,c){return h(),w(_,null,[s("div",null,"watch ref: "+l(t.state),1),s("div",null,"watch reactive: "+l(t.state2),1),s("div",null,"watch reactive \u591A\u4E2A\u503C: "+l(t.state3),1),s("div",null,"watch watchEffect: "+l(t.state4),1)],64)}const T=g(v,[["render",p]]);export{T as default};
