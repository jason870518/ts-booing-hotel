import{d,r as _,a as m,o as p,c as u,b as s,k as l,v as r,l as v,e as i,f,w as h,s as g}from"./index-m8etEGRW.js";import{_ as w}from"./logo-jEqb8i2D.js";import{_ as k,l as b}from"./auth-sBvV8GS1.js";const x={class:"register-page"},y=s("nav",{class:"top-nav"},[s("div",{class:"logo"},[s("img",{src:w,alt:""})])],-1),V={class:"content-wrap"},C=s("div",{class:"img-wrap"},[s("img",{src:k,alt:""})],-1),L={class:"form-wrap"},N={class:"form-inner"},B=s("div",{class:"sub-title"},"享樂酒店，誠摯歡迎",-1),S=s("div",{class:"form-title"},"立即開始旅程",-1),T={class:"form",action:""},U=s("label",{for:""},"電子信箱",-1),I=s("label",{for:""},"密碼",-1),M=s("div",{class:"func"},[s("div",{class:"remember-account"},[s("input",{type:"checkbox",name:"",id:""}),i(" 記住帳號 ")]),s("a",{href:""},"忘記密碼?")],-1),R={class:"has-account"},O=d({__name:"Login",setup(D){const e=_({email:null,password:null}),c=async()=>{const{status:n,result:t,token:o}=await b(e.value);n&&(localStorage.setItem("User",JSON.stringify(t)),localStorage.setItem("Token",o),g.push("./room"))};return(n,t)=>{const o=m("RouterLink");return p(),u("div",x,[y,s("div",V,[C,s("div",L,[s("div",N,[B,S,s("form",T,[U,l(s("input",{type:"text",placeholder:"請輸入電子信箱","onUpdate:modelValue":t[0]||(t[0]=a=>e.value.email=a)},null,512),[[r,e.value.email]]),I,l(s("input",{type:"password",placeholder:"請輸入密碼","onUpdate:modelValue":t[1]||(t[1]=a=>e.value.password=a)},null,512),[[r,e.value.password]]),M,s("button",{class:"btn gray",onClick:v(c,["prevent"])},"會員登入"),s("div",R,[i("沒有會員嗎? "),f(o,{to:"/register"},{default:h(()=>[i("前往註冊")]),_:1})])])])])])])}}});export{O as default};
