"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{323:(e,t,c)=>{c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p,c.p;window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".level"),t=e.querySelectorAll(".level__item"),c=e.querySelectorAll(".level__sidebutton"),l=e.querySelectorAll(".level__list-description"),o=document.querySelector(".client"),r=o.querySelector(".client__items"),n=o.querySelectorAll(".client__point"),s=document.querySelector(".header"),i=s.querySelectorAll(".header__item"),a=s.querySelector(".header__stroke");function d(e){for(const t of c[e].children)t.style.background="#FFFFFF";c[e].style.background="#FF620A",c[e].style.transform="rotate(0deg)",c[e].style.width="42px"}function h(){c.forEach(((e,t,l)=>{for(const e of c[t].children)e.style.background="";c[t].style.background="",c[t].style.transform="rotate(180deg)",c[t].style.width=""}))}function p(e){t[e].style.height="178px",setTimeout((()=>{l[e].style.opacity="1"}),100)}function u(){t.forEach(((e,t,c)=>{e.style.height=""})),l.forEach(((e,t,c)=>{e.style.opacity="0"}))}function y(e){e.forEach(((e,t,c)=>{e.classList.remove("active")}))}p(0),d(0),c.forEach(((e,t,c)=>{e.addEventListener("click",(()=>{l[t].classList.contains("active")?(y(l),u(),h()):(y(l),u(),h(),function(e){e.classList.add("active")}(l[t]),p(t),d(t))}))}));let f=r.children.length;function _(e){n[e].style.cssText="\n                width:10px;\n                height: 10px;\n                background-color: #FAB047;\n            "}r.style.width=793*f+"px",_(0),n.forEach(((e,t,c)=>{e.addEventListener("click",(()=>{n.forEach(((e,t,c)=>{e.style.cssText=""})),r.style.right=793*t+"px",_(t)}))})),i.forEach(((e,t,c)=>{e.addEventListener("click",(()=>{a.style.width=`${i[t].offsetWidth}px`,a.style.marginLeft=`${i[t].offsetLeft}px`}))}))}))}},e=>{var t;t=323,e(e.s=t)}]);