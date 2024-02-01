/* Element Selection */

const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')



/* Functions */

function saveTodo(inputValue){

    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = inputValue
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    const i = document.createElement('i')
    i.classList.add('fa-solid')
    i.classList.add('fa-check')
    doneBtn.appendChild(i)
    todo.appendChild(doneBtn)

    console.log(todo)
}



/* Events */

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    if(inputValue){
        saveTodo(inputValue)
    }
})