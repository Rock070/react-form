(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s(4),l=s.n(n),i=s(2);s(10);function d(){return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{className:"title",children:"\u65b0\u62d6\u5ef6\u904b\u52d5\u5831\u540d\u8868\u55ae"}),Object(c.jsxs)("section",{id:"info",children:[Object(c.jsxs)("p",{children:["\u6d3b\u52d5\u65e5\u671f\uff1a2020/12/10 ~ 2020/12/11",Object(c.jsx)("br",{}),"\u6d3b\u52d5\u5730\u9ede\uff1a\u53f0\u5317\u5e02\u5927\u5b89\u5340\u65b0\u751f\u5357\u8def\u4e8c\u6bb51\u865f"]}),Object(c.jsx)("div",{className:"mark",children:"*\u5fc5\u586b"})]})]})}function r(e){var t=e.nameRedTextEl,s=e.emailRedTextEl,a=e.phoneRedTextEl,n=e.registerRedTextEl,l=e.howKnowRedTextEl,i=e.nameValue,d=e.emailValue,r=e.phoneValue,j=e.typeValue,u=e.howknowValue,h=e.otherValue,o=e.setNameValue,b=e.setEmailValue,x=e.setPhoneValue,O=e.setTypeValue,m=e.setHowknowValue,p=e.setOtherValue;return Object(c.jsxs)("form",{action:"",children:[Object(c.jsxs)("section",{id:"form",children:[Object(c.jsxs)("div",{className:"name",children:[Object(c.jsxs)("div",{className:"title",children:["\u66b1\u7a31",Object(c.jsx)("span",{children:"*"})]}),Object(c.jsx)("input",{onChange:function(e){o(e.target.value)},value:i,type:"text",placeholder:"\u4f60\u7684\u56de\u7b54",name:"name"}),Object(c.jsx)("div",{ref:t,className:"redText hidden",children:"\u6b64\u6b04\u4f4d\u4e0d\u53ef\u70ba\u7a7a"})]}),Object(c.jsxs)("div",{className:"email",children:[Object(c.jsxs)("div",{className:"title",children:["\u96fb\u5b50\u90f5\u4ef6",Object(c.jsx)("span",{children:"*"})]}),Object(c.jsx)("input",{onChange:function(e){b(e.target.value)},value:d,type:"email",placeholder:"\u4f60\u7684\u96fb\u5b50\u90f5\u4ef6",name:"email"}),Object(c.jsx)("div",{ref:s,className:"redText hidden",children:"\u6b64\u6b04\u4f4d\u4e0d\u53ef\u70ba\u7a7a"})]}),Object(c.jsxs)("div",{className:"phone",children:[Object(c.jsxs)("div",{className:"title",children:["\u624b\u6a5f\u865f\u78bc",Object(c.jsx)("span",{children:"*"})]}),Object(c.jsx)("input",{onChange:function(e){x(e.target.value)},value:r,type:"text",placeholder:"\u4f60\u7684\u624b\u6a5f\u865f\u78bc",name:"phone"}),Object(c.jsx)("div",{ref:a,className:"redText hidden",children:"\u6b64\u6b04\u4f4d\u4e0d\u53ef\u70ba\u7a7a"})]}),Object(c.jsxs)("div",{className:"register",children:[Object(c.jsxs)("div",{className:"title",children:["\u5831\u540d\u985e\u578b",Object(c.jsx)("span",{children:"*"})]}),Object(c.jsxs)("select",{onChange:function(e){O(e.target.value)},value:j,defaultValue:"",children:[Object(c.jsx)("option",{defaultValue:"selected",disabled:"disabled",value:""}),Object(c.jsx)("option",{value:"\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c",children:"\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c"}),Object(c.jsx)("option",{value:"\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684",children:"\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684"})]}),Object(c.jsx)("div",{ref:n,className:"redText hidden",children:"\u6b64\u6b04\u4f4d\u4e0d\u53ef\u70ba\u7a7a"})]}),Object(c.jsxs)("div",{className:"howKnow",children:[Object(c.jsxs)("div",{className:"title",children:["\u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684\uff1f",Object(c.jsx)("span",{children:"*"})]}),Object(c.jsx)("input",{onChange:function(e){m(e.target.value)},value:u,type:"text",placeholder:"\u4f60\u7684\u56de\u7b54",name:"howKnow"}),Object(c.jsx)("div",{ref:l,className:"redText hidden",children:"\u6b64\u6b04\u4f4d\u4e0d\u53ef\u70ba\u7a7a"})]}),Object(c.jsxs)("div",{className:"other",children:[Object(c.jsx)("div",{className:"title",children:"\u5176\u4ed6"}),Object(c.jsx)("p",{children:"\u5c0d\u6d3b\u52d5\u7684\u4e00\u4e9b\u5efa\u8b70"}),Object(c.jsx)("input",{onChange:function(e){p(e.target.value)},value:h,type:"text",placeholder:"\u4f60\u7684\u56de\u7b54",name:"advice"})]})]}),Object(c.jsx)("input",{className:"submit",type:"submit",onClick:function(e){if(e.preventDefault(),""===i||""===d||""===r||""===j||""===u)return""===i?t.current.classList.remove("hidden"):t.current.classList.add("hidden"),""===d?s.current.classList.remove("hidden"):s.current.classList.add("hidden"),""===r?a.current.classList.remove("hidden"):a.current.classList.add("hidden"),""===j?n.current.classList.remove("hidden"):n.current.classList.add("hidden"),void(""===u?l.current.classList.remove("hidden"):l.current.classList.add("hidden"));alert("\n            \u5831\u540d\u6210\u529f\uff01\n\n            \u4ee5\u4e0b\u70ba\u5831\u540d\u7684\u8cc7\u6599\uff1a\n            \u66b1\u7a31\uff1a".concat(i,"\n            \u96fb\u5b50\u90f5\u4ef6\uff1a").concat(d,"\n            \u624b\u6a5f\u865f\u78bc\uff1a").concat(r,"\n            \u5831\u540d\u985e\u578b\uff1a").concat(j,"\n            \u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684\uff1a").concat(u,"\n            \u5c0d\u6d3b\u52d5\u7684\u4e00\u4e9b\u5efa\u8b70\uff1a").concat(h,"\n          ")),o(""),b(""),x(""),O(""),m(""),p("")}})]})}var j=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],n=t[1],l=Object(a.useState)(""),j=Object(i.a)(l,2),u=j[0],h=j[1],o=Object(a.useState)(""),b=Object(i.a)(o,2),x=b[0],O=b[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),v=p[0],f=p[1],N=Object(a.useState)(""),V=Object(i.a)(N,2),w=V[0],T=V[1],g=Object(a.useState)(""),R=Object(i.a)(g,2),y=R[0],E=R[1],L=Object(a.useRef)(null),k=Object(a.useRef)(null),C=Object(a.useRef)(null),S=Object(a.useRef)(null),K=Object(a.useRef)(null);return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"topYellow"}),Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)(d,{}),Object(c.jsx)(r,{nameRedTextEl:L,emailRedTextEl:k,phoneRedTextEl:C,registerRedTextEl:S,howKnowRedTextEl:K,nameValue:s,emailValue:u,phoneValue:x,typeValue:v,howknowValue:w,otherValue:y,setNameValue:n,setEmailValue:h,setPhoneValue:O,setTypeValue:f,setHowknowValue:T,setOtherValue:E}),Object(c.jsx)("p",{className:"remind",children:"\u8acb\u52ff\u900f\u904e\u8868\u55ae\u9001\u51fa\u60a8\u7684\u5bc6\u78bc\u3002"})]})]})};l.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.ef515ce7.chunk.js.map