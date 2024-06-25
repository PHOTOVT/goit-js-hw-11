import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function d(e){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44576070-519b0fb3235ae96b7cd44aad7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>console.log("Error:",r))}function u(e){return e.map(p).join("")}function p(e){return`<li class="gallery-item">
    <a href="${e.largeImageURL}" class="gallery-item-link"
      ><img
        class="gallery-item-img"
        src="${e.webformatURL}"
        alt="${e.tags}"
        width="360"
    /></a>
    <ul class="photo-info-list">
      <li class="photo-info-item">
        <p class="photo-data-name">Likes</p>
        <p class="photo-data">${e.likes}</p>
      </li>
      <li class="photo-info-item">
        <p class="photo-data-name">Views</p>
        <p class="photo-data">${e.views}</p>
      </li>
      <li class="photo-info-item">
        <p class="photo-data-name">Comments</p>
        <p class="photo-data">${e.comments}</p>
      </li>
      <li class="photo-info-item">
        <p class="photo-data-name">Downloads</p>
        <p class="photo-data">${e.downloads}</p>
      </li>
    </ul>
  </li>`}const f=document.querySelector(".search-form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});f.addEventListener("submit",g);function g(e){e.preventDefault();const a=e.target.elements.searchField.value.trim();if(a===""){n.innerHTML="",l.show({message:"Please enter a query",position:"bottomCenter",backgroundColor:"#ffbd59",messageColor:"#ffffff",theme:"dark",maxWidth:"350px"});return}c.classList.remove("visually-hidden"),d(a).then(s=>{if(s.hits.length===0)n.innerHTML="",l.show({message:"No images matching your search query. Please try again!",position:"bottomCenter",backgroundColor:"#ff5757",messageColor:"#ffffff",theme:"dark",maxWidth:"350px"});else{const r=u(s.hits);n.innerHTML=r,h.refresh()}c.classList.add("visually-hidden")}).catch(s=>{l.show({message:"An error occurred while fetching photos. Please, try again later.",position:"bottomCenter",backgroundColor:"#ff3131",messageColor:"#ffffff",theme:"dark",maxWidth:"350px"}),c.classList.add("visually-hidden")}),f.reset()}
//# sourceMappingURL=commonHelpers.js.map
