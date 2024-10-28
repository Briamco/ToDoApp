import './style.css'
import { setupTodo } from './todo.js'
import {darkMode} from '/darkmode.js'

// document.querySelector('#app').innerHTML = `
//   <div class="flex sm:justify-center min-h-screen p-4 sm:items-center flex-col gap-5">
//     <button
//       id="darkModeBtn"
//       class="absolute w-10 h-10 font-semibold text-black rounded-full dark:text-gray-100 flex items-center justify-center sm:top-5 sm:left-5"
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" id="sunIcon">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
//       </svg>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden" id="moonIcon">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
//       </svg>
//     </button>

//     <h1 class="text-4xl font-bold text-center">ToDo App</h1>

//     <form id="todoForm" class="flex">
//       <input type="text" 
//         id="todoInput"
//         placeholder="What are you thinking?" 
//         class="w-full px-4 py-3 mr-2 text-xl font-semibold border rounded-full hover:border-gray-700 bg-inherit"
//       >
//       <button type="submit" 
//         class="px-4 py-3 text-xl font-semibold text-white bg-blue-500 rounded-full cursor-pointer border-3 hover:bg-blue-600"
//       >
//         Create
//       </button>
//     </form>
//     <ul id="todoList" class="grid gap-3 mx-full bg-center"></ul>
//   </div>
// `

setupTodo()
darkMode()
