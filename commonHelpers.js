import{a as i}from"./assets/vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=i.create({baseURL:"https://dummyjson.com"}),u=async()=>{try{return(await l.get("/products")).data.products}catch(r){console.log(r)}},a=r=>r.map(({title:o,thumbnail:s,price:n,description:e})=>`<li>
        <img src="${s}" alt="" />
        <h3>Title:${o}</h3>
        <p>Description:${e}</p>
        <p>Price:${n}</p>
      </li>`).join(""),d=document.querySelector("#allProducts"),p=async()=>{try{const r=await u(),o=a(r);d.innerHTML=o}catch(r){console.log(r)}};p();
//# sourceMappingURL=commonHelpers.js.map
