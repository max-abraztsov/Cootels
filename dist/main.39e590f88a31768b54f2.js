"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{323:(e,t,l)=>{l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p,l.p;window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".level"),t=e.querySelectorAll(".level__item"),l=e.querySelectorAll(".level__sidebutton"),o=e.querySelectorAll(".level__list-description"),c=document.querySelector(".client"),r=c.querySelector(".client__items"),n=c.querySelectorAll(".client__point"),s=document.querySelector(".header"),i=s.querySelectorAll(".header__item"),d=s.querySelector(".header__stroke"),a=document.querySelector(".modal"),y=a.querySelector(".modal__cross");function u(e){for(const t of l[e].children)t.style.background="#FFFFFF";l[e].style.background="#FF620A",l[e].style.transform="rotate(0deg)",l[e].style.width="42px"}function p(){l.forEach(((e,t,o)=>{for(const e of l[t].children)e.style.background="";l[t].style.background="",l[t].style.transform="rotate(180deg)",l[t].style.width=""}))}function h(e){t[e].style.height="178px",setTimeout((()=>{o[e].style.opacity="1"}),100)}function f(){t.forEach(((e,t,l)=>{e.style.height=""})),o.forEach(((e,t,l)=>{e.style.opacity="0"}))}function m(e){e.forEach(((e,t,l)=>{e.classList.remove("active")}))}h(0),u(0),l.forEach(((e,t,l)=>{e.addEventListener("click",(()=>{o[t].classList.contains("active")?(m(o),f(),p()):(m(o),f(),p(),function(e){e.classList.add("active")}(o[t]),h(t),u(t))}))}));let v=r.children.length;function _(e){n[e].style.cssText="\n                width:10px;\n                height: 10px;\n                background-color: #FAB047;\n            "}r.style.width=793*v+"px",_(0),n.forEach(((e,t,l)=>{e.addEventListener("click",(()=>{n.forEach(((e,t,l)=>{e.style.cssText=""})),r.style.right=793*t+"px",_(t)}))})),i.forEach(((e,t,l)=>{e.addEventListener("click",(()=>{d.style.width=`${i[t].offsetWidth}px`,d.style.marginLeft=`${i[t].offsetLeft}px`}))})),setTimeout((()=>{a.style.display="block",document.body.style.overflow="hidden"}),3e3),y.addEventListener("click",(()=>{a.style.display="none",document.body.style.overflow=""}))}))}},e=>{var t;t=323,e(e.s=t)}]);