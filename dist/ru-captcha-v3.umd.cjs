(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,e["ru-captcha-v3"]=n(e.Vue))})(this,function(e){"use strict";const c=[{__name:"RuSlideVerify",setup(o){const t=()=>{console.log("dark")};return(s,u)=>(e.openBlock(),e.createElementBlock("button",{onClick:t},"暗流"))}}];return{install:o=>{c.forEach(t=>{o.component(t.__name,t)})}}});
