import{_ as r,h as l,o as i,c as d,a as e,t as s,F as f,i as g}from"./index.03db0594.js";const u={setup(){const n=l({a:1,first:{b:2,second:{c:3}}});return{state:n,changeFirst:()=>{n.value={a:5,first:{b:6,second:{c:7}}}},changeSecond:()=>{n.value.a=8,n.value.first.b=9,n.value.first.second.c=10,g(n),console.log(n)}}}},b=e("br",null,null,-1);function h(a,n,c,t,v,_){return i(),d(f,null,[e("div",null,"a: "+s(t.state.a),1),e("div",null,"b: "+s(t.state.first.b),1),e("div",null,"c: "+s(t.state.first.second.c),1),e("button",{onClick:n[0]||(n[0]=(...o)=>t.changeFirst&&t.changeFirst(...o))},"\u91CD\u65B0\u8D4B\u503C"),b,e("button",{onClick:n[1]||(n[1]=(...o)=>t.changeSecond&&t.changeSecond(...o))},"\u76F4\u63A5\u4FEE\u6539\u6570\u636E")],64)}const m=r(u,[["render",h]]);export{m as default};
