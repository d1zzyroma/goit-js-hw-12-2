import{a as g,S as c,i as d}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();async function u(r,t){const l="https://pixabay.com",n="/api/",e=new URLSearchParams({key:"44030880-e45e37f6dd8504bc3a71fd6c0",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${t}`,per_page:"15"}),a=`${l}${n}?${e}`;return await g.get(a)}function p(r){return r.map(t=>`
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
        `).join("")}const o={formEl:document.querySelector(".form"),inputFormEl:document.querySelector(".form-input"),buttonFormEl:document.querySelector(".form-button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),parent:document.querySelector(".parent"),buttonLoadMore:document.querySelector(".btn-more")};o.formEl.addEventListener("submit",h);let s=1,m="";function h(r){r.preventDefault(),o.gallery.innerHTML="";const t=o.inputFormEl.value.trim();s=1,m=t,f(),u(t,s).then(l=>{if(l.data.hits.length>0){const n=p(l.data.hits);o.gallery.insertAdjacentHTML("beforeend",n),new c(".gallery a",{showCounter:!1,captionsData:"alt",captionDelay:250}).refresh()}else d.show({title:"Error",message:"What would you like to add?",position:"topRight",color:"rgba(239, 64, 64, 1)",icon:"fas fa-exclamation-circle"}),o.buttonLoadMore.style.display="none";o.gallery.children.length>0&&(o.buttonLoadMore.style.display="inline")}).catch(l=>console.log(l)).finally(()=>{y()})}function f(){o.loader.style.display="inline-block",o.parent.style.display="grid"}function y(){o.loader.style.display="none",o.parent.style.display="none"}o.buttonLoadMore.addEventListener("click",w);function w(){s+=1,f(),u(m,s).then(r=>{if(r.data.hits.length>0){const l=p(r.data.hits);o.gallery.insertAdjacentHTML("beforeend",l),new c(".gallery a",{showCounter:!1,captionsData:"alt",captionDelay:250}).refresh()}r.data.totalHits===o.gallery.children.length&&(d.show({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"rgba(239, 64, 64, 1)",icon:"fas fa-exclamation-circle"}),o.buttonLoadMore.style.display="none"),document.querySelector(".gallery-item").getBoundingClientRect(),window.scrollBy({top:340,left:0,behavior:"smooth"})}).catch(r=>console.log(r)).finally(()=>{y()})}
//# sourceMappingURL=commonHelpers.js.map
