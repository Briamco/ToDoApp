export function setupTodo() {
  const todoForm = document.getElementById('todoForm')
  const todoInput = document.getElementById('todoInput')
  const todoList = document.getElementById('todoList')

  let todos = JSON.parse(localStorage.getItem('todos')) || []

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  function renderTodos() {
    todoList.innerHTML = todos
      .map(
        (todo, index) => `
        <li class="flex items-center gap-3 pt-2 border-t-2">
          <input 
            type="checkbox" 
            ${todo.completed ? 'checked' : ''} 
            data-index="${index}"
            class="w-5 h-5 accent-blue-500"
          >
          ${
            todo.isEditing
              ? `<input type="text" data-index="${index}" value="${todo.text}" class="edit-input w-full px-2 py-1 text-xl font-semibold border rounded-lg bg-inherit" />`
              : `<span class="text-xl font-semibold ${
                  todo.completed ? 'line-through text-gray-400 dark:text-gray-300 transition-all duration-700' : 'text-gray-800 dark:text-gray-100 transition-all duration-700'
                }">${todo.text}</span>`
          }
          <div class="ml-auto flex gap-3">
            <button
              name="edit"
              data-index="${index}" 
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 transition-all duration-700" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            <button
              name="delete"
              data-index="${index}" 
              class="text-red-500 hover:text-red-600" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>
        </li>
      `
      )
      .join('')
  }

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = todoInput.value.trim()
    if (text) {
      todos.push({ text, completed: false, isEditing: false })
      saveTodos()
      renderTodos()
      todoInput.value = ''
    }
  })

  todoList.addEventListener('click', (e) => {
    const index = e.target.closest('[data-index]')?.dataset.index

    if (e.target.matches('input[type="checkbox"]')) {
      todos[index].completed = e.target.checked
      saveTodos()
      renderTodos()
    } else if (e.target.closest('button[name="delete"]')) {
      todos.splice(index, 1)
      saveTodos()
      renderTodos()
    } else if (e.target.closest('button[name="edit"]')) {
      todos[index].isEditing = true
      renderTodos()
    }
  })

  todoList.addEventListener('input', (e) => {
    if (e.target.matches('.edit-input')) {
      const index = e.target.dataset.index
      todos[index].text = e.target.value
    }
  })

  todoList.addEventListener('blur', (e) => {
    if (e.target.matches('.edit-input')) {
      const index = e.target.dataset.index
      todos[index].isEditing = false
      saveTodos()
      renderTodos()
    }
  }, true)

  renderTodos()
}