/* Element Selection */

const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
const searchInput = document.querySelector('#search-input')
const eraseButton = document.querySelector('#erase-button')
const filterSelect = document.querySelector('#filter-select')

let oldInputValue

/* Functions */

const filterAllTodo = (filterValue) => {

    const todoAll = document.querySelectorAll('.todo')

    switch (filterValue) {
        case 'all':
            todoAll.forEach((todo) => (todo.style.display = 'flex'))
            break;

        case 'done':
            todoAll.forEach((todo) => {
                todo.classList.contains('done') ? (todo.style.display = 'flex') : (todo.style.display = 'none')
            })
            break;

        case 'todo':
            todoAll.forEach((todo) => {
                !todo.classList.contains('done') ? (todo.style.display = 'flex') : (todo.style.display = 'none')
            })
            break;

        default: break
    }
}

const getSearchTodos = (search) => {

    const todoAll = document.querySelectorAll('.todo')

    todoAll.forEach((todo) => {

        let todoTitle = todo.querySelector('h3').innerText.toLowerCase()

        const normalizedSearch = search.toLowerCase()

        todo.style.display = 'flex'

        if (!todoTitle.includes(normalizedSearch)) {
            todo.style.display = 'none'
        }

    })
}

const updateTodo = (text) => {

    //create array
    const todoAll = document.querySelectorAll('.todo')

    todoAll.forEach((todo) => {

        let todoTitle = todo.querySelector('h3')

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text

            updateTodoLocalStorage(oldInputValue, text)
        }
    })

}

const toggleForms = () => {

    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const saveTodo = (inputValue, done = 0, save = 1) => {

    const todo = document.querySelector('#todo')
    const todoDiv = document.createElement('div')
    todoDiv.id = 'todo'
    todoDiv.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = inputValue
    todoDiv.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    const i1 = document.createElement('i')
    i1.classList.add('fa-solid', 'fa-check')
    doneBtn.appendChild(i1)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    const i2 = document.createElement('i')
    i2.classList.add('fa-solid', 'fa-pen')
    editBtn.appendChild(i2)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-todo')
    const i3 = document.createElement('i')
    i3.classList.add('fa-solid', 'fa-xmark')
    deleteBtn.appendChild(i3)

    //Using Local Storage Data
    if (done) {
        todo.classList.add('done')
    }

    if (save) {
        saveTodoLocalStorage({ inputValue, done })
    }

    todoDiv.appendChild(doneBtn)
    todoDiv.appendChild(editBtn)
    todoDiv.appendChild(deleteBtn)

    todoList.appendChild(todoDiv)
    todoInput.value = ''
    todoInput.focus()
}

/* Events */

todoForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const inputValue = todoInput.value

    if (inputValue) {
        console.log(inputValue)
        saveTodo(inputValue)
    }
})

document.addEventListener('click', (e) => {

    const targetElement = e.target
    const parentElement = targetElement.closest('div')

    let todoTitle

    if (parentElement && parentElement.querySelector('h3')) {
        todoTitle = parentElement.querySelector('h3').innerText
    }

    if (targetElement.classList.contains('finish-todo')) {
        
        parentElement.classList.toggle('done')

        updateTodoStatusLocalStorage(todoTitle)
    }

    if (targetElement.classList.contains('edit-todo')) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

    if (targetElement.classList.contains('remove-todo')) {

        console.log('clicou em remove-todo')

        parentElement.remove()

        removeTodoLocalStorage(todoTitle)
    }
})

cancelEditBtn.addEventListener('click', (e) => {

    e.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const editInputValue = editInput.value

    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()

})

searchInput.addEventListener('keyup', (e) => {

    const search = e.target.value

    getSearchTodos(search)

})

eraseButton.addEventListener('click', (e) => {
    e.preventDefault()

    searchInput.value = ''

    searchInput.dispatchEvent(new Event('keyup'))
})

filterSelect.addEventListener('change', (e) => {

    const filterValue = e.target.value

    console.log(filterValue)
    filterAllTodo(filterValue)
})


//Local Storage

const getTodoLocalStorage = () => {

    const todoAll = JSON.parse(localStorage.getItem('todos')) || []

    return todoAll
}

const loadTodo = () => {
    const todos = getTodoLocalStorage()

    todos.forEach((todo) => {
        saveTodo(todo.inputValue, todo.done, 0)
    })
}

const saveTodoLocalStorage = (todo) => {

    //read todo
    const todoAll = getTodoLocalStorage()

    //add todo
    todoAll.push(todo)

    //save todo
    localStorage.setItem('todos', JSON.stringify(todoAll))

}

const removeTodoLocalStorage = (todoText) => {

    //create array
    const todoAll = getTodoLocalStorage()

    const filteredTodoAll = todoAll.filter((todo) => todo.inputValue !== todoText)

    localStorage.setItem('todos', JSON.stringify(filteredTodoAll))
}

const updateTodoStatusLocalStorage = (todoText) => {

    //create array
    const todoAll = getTodoLocalStorage()

    todoAll.map((todo) => todo.inputValue === todoText ? (todo.done = !todo.done) : (null))

    localStorage.setItem('todos', JSON.stringify(todoAll))
}

const updateTodoLocalStorage = (todoOldText, todoNewText) => {

    //create array
    const todoAll = getTodoLocalStorage()

    todoAll.map((todo) => todo.inputValue === todoOldText ? (todo.inputValue = todoNewText) : (null))

    localStorage.setItem('todos', JSON.stringify(todoAll))
}

loadTodo()