(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function l(){const a=document.getElementById("todoForm"),r=document.getElementById("todoInput"),i=document.getElementById("todoList");let n=JSON.parse(localStorage.getItem("todos"))||[];function t(){localStorage.setItem("todos",JSON.stringify(n))}function o(){i.innerHTML=n.map((e,s)=>`
        <li class="flex items-center gap-3 pt-2 border-t-2">
          <input 
            type="checkbox" 
            ${e.completed?"checked":""} 
            data-index="${s}"
            class="w-5 h-5 accent-blue-500"
          >
          ${e.isEditing?`<input type="text" data-index="${s}" value="${e.text}" class="edit-input w-full px-2 py-1 text-xl font-semibold border rounded-lg bg-inherit" />`:`<span class="text-xl font-semibold ${e.completed?"line-through text-gray-400 dark:text-gray-300 transition-all duration-700":"text-gray-800 dark:text-gray-100 transition-all duration-700"}">${e.text}</span>`}
          <div class="ml-auto flex gap-3">
            <button
              name="edit"
              data-index="${s}" 
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 transition-all duration-700" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button
              name="delete"
              data-index="${s}" 
              class="text-red-500 hover:text-red-600" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </li>
      `).join("")}a.addEventListener("submit",e=>{e.preventDefault();const s=r.value.trim();s&&(n.push({text:s,completed:!1,isEditing:!1}),t(),o(),r.value="")}),i.addEventListener("click",e=>{var d;const s=(d=e.target.closest("[data-index]"))==null?void 0:d.dataset.index;e.target.matches('input[type="checkbox"]')?(n[s].completed=e.target.checked,t(),o()):e.target.closest('button[name="delete"]')?(n.splice(s,1),t(),o()):e.target.closest('button[name="edit"]')&&(n[s].isEditing=!0,o())}),i.addEventListener("input",e=>{if(e.target.matches(".edit-input")){const s=e.target.dataset.index;n[s].text=e.target.value}}),i.addEventListener("blur",e=>{if(e.target.matches(".edit-input")){const s=e.target.dataset.index;n[s].isEditing=!1,t(),o()}},!0),o()}function c(){const a=document.querySelector("#darkModeBtn"),r=document.querySelector("#sunIcon"),i=document.querySelector("#moonIcon");function n(t){t?(r.classList.add("hidden"),i.classList.remove("hidden")):(r.classList.remove("hidden"),i.classList.add("hidden"))}localStorage.getItem("theme")==="dark"?(document.documentElement.classList.add("dark"),n(!0)):n(!1),a.addEventListener("click",()=>{document.documentElement.classList.toggle("dark"),document.documentElement.classList.contains("dark")?(localStorage.setItem("theme","dark"),n(!0)):(localStorage.setItem("theme","light"),n(!1))})}l();c();
