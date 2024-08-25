import{a as u}from"./assets/vendor-a2e8d7fa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const i=u.create({baseURL:"https://dummyjson.com"}),a=async r=>{try{return(await i.get(`/products/${r}`)).data}catch(t){console.log(t)}},l=async r=>{try{return await i.post("/products/add",r)}catch{}},d=({title:r,thumbnail:t,price:n,description:c})=>`<div>
        <img src="${t}" alt="" />
        <h3>Title:${r}</h3>
        <p>Description:${c}</p>
        <p>Price:${n}</p>
      </div>`,p=({title:r,description:t,price:n})=>`<div>
        <h3>Title:${r}</h3>
        <p>Description:${t}</p>
        <p>Price:${n}</p>
      </div>`;document.querySelector("#allProducts");const m=document.querySelector("#singleProductForm"),f=document.querySelector("#singleProduct");m.addEventListener("submit",async r=>{r.preventDefault();const t=r.currentTarget.elements.id.value.trim();try{const n=await a(t),c=d(n);f.innerHTML=c}catch(n){console.log(n)}});const y=document.querySelector(".product-form"),g=document.querySelector("#newProductSection"),P=async r=>{r.preventDefault();const t=r.target.elements.title.value.trim(),n=r.target.elements.description.value.trim(),c=r.target.elements.price.value.trim();if(t===""||n===""||c===""){alert("Заповніть всі поля!");return}const e={title:t,description:n,price:c},o=await l(e);console.log(o),o.status===201?g.innerHTML=p(e):alert(`${o.statusText}`)};y.addEventListener("submit",P);
//# sourceMappingURL=commonHelpers.js.map
