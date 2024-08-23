import './main.css'
import { v4 } from 'uuid'

let todos = [{ id: v4(), body: 'Lorem ipsum dolor sit amet.', strikethrough: false }]

const itemTodoTemplate = ({ id, body, strikethrough }) => `
  <div id="${id}" class="flex p-5 items-center justify-between border-b border-dark-500">
    <div class="text-xs body ${strikethrough ? 'line-through' : ''}" data-id="${id}" data-type="toggle-strikethrough">${body}</div>
    <div class="flex gap-1">
      <i data-type="strikethrough" data-id="${id}"
        class="fa-solid ${strikethrough ? 'text-indigo-500' : ''} fa-strikethrough w-8 h-8 hover:text-indigo-500 cursor-pointer flex items-center justify-center"></i>
      <i data-type="erase" data-id="${id}"
        class="fa-solid fa-eraser w-8 h-8 hover:text-red-500 cursor-pointer flex items-center justify-center"></i>
    </div>
  </div>
`

const renderTodos = () => {
  const listElement = document.querySelector('#todos')
  listElement.innerHTML = todos.map(itemTodoTemplate).join('')
}

const formElement = document.querySelector('form')
const listElement = document.querySelector('#todos')

renderTodos()

function addTodo (value) {
  if (value.trim()) {
    todos.push({ id: v4(), body: value })
    renderTodos()
  }
}

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id)
  renderTodos()
}

const toggleStrikethrough = (id) => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, strikethrough: !todo.strikethrough } : todo))
  renderTodos()
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = formElement.querySelector('input')
  const { value } = input
  addTodo(value)
})

listElement.addEventListener('click', (e) => {
  const { id, type } = e.target.dataset

  switch (type) {
    case 'strikethrough':
      e.target.classList.add('text-indigo-500')
      toggleStrikethrough(id)
      break
    case 'erase':
      removeTodo(id)
      break
  }
  renderTodos()
})
