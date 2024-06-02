import{a as g,S as h,i as c}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function d(a,t){const n="https://pixabay.com",s="/api/",e=new URLSearchParams;e.append("key","44030880-e45e37f6dd8504bc3a71fd6c0"),e.append("q",`${a}`),e.append("image_type","photo"),e.append("orientation","horizontal"),e.append("safesearch","true"),e.append("page",`${t}`),e.append("per_page","15");const r=`${n}${s}?${e}`;try{return await g.get(r)}catch(l){console.error(l.message)}}function p(a){return a.map(t=>`
         <li class="gallery-item">
         <a href="${t.largeImageURL}" class="gallery-link">
           <img src="${t.webformatURL}" alt="${t.tags}" width="358px" height="150">
         </a>
         <div class="inf-wrapper">
           <div class="likes item">
             <p class="text-one">Likes</p>
             <p class="likes-count text-two">${t.likes}</p>
           </div>
           <div class="views item">
             <p class="text-one">Views</p>
             <p class="views-count text-two">${t.views}</p>
           </div>
           <div class="comments item">
             <p class="text-one">Comments</p>
             <p class="comments-count text-two">${t.comments}</p>
           </div>
           <div class="downloads item">
             <p class="text-one">Downloads</p>
             <p class="downloads-count text-two">${t.downloads}</p>
           </div>
         </div>
       </li>
        `).join("")}const o={formEl:document.querySelector(".form"),inputFormEl:document.querySelector(".form-input"),buttonFormEl:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),parent:document.querySelector(".parent"),buttonLoadMore:document.querySelector(".btn-more")},u=new h(".gallery a",{showCounter:!1,captionsData:"alt",captionDelay:250});o.formEl.addEventListener("submit",w);let i=1,m="";async function w(a){a.preventDefault(),o.gallery.innerHTML="";const t=o.inputFormEl.value.trim();i=1,m=t,y();try{const n=await d(t,i);if(n.data.hits.length>0){const s=p(n.data.hits);o.gallery.insertAdjacentHTML("beforeend",s),u.refresh(),o.gallery.children.length>0&&(o.buttonLoadMore.style.display="inline"),n.data.totalHits===o.gallery.children.length&&(o.buttonLoadMore.style.display="none")}else c.show({title:"Error",message:"What would you like to add?",position:"topRight",color:"rgba(239, 64, 64, 1)",icon:"fas fa-exclamation-circle"}),o.buttonLoadMore.style.display="none"}catch(n){console.log(n)}finally{f()}}function y(){o.loader.style.display="inline-block",o.parent.style.display="grid"}function f(){o.loader.style.display="none",o.parent.style.display="none"}o.buttonLoadMore.addEventListener("click",b);async function b(){i+=1,y();try{const a=await d(m,i);if(a.data.hits.length>0){const n=p(a.data.hits);o.gallery.insertAdjacentHTML("beforeend",n),u.refresh()}a.data.totalHits===o.gallery.children.length&&(c.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"rgba(239, 64, 64, 1)",icon:"fas fa-exclamation-circle"}),o.buttonLoadMore.style.display="none"),document.querySelector(".gallery-item").getBoundingClientRect(),window.scrollBy({top:50,left:0,behavior:"smooth"})}catch(a){console.error(a.message)}finally{f()}}
//# sourceMappingURL=commonHelpers.js.map
