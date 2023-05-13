import { showTbody } from '/JavaScript/Module/js/Publics/table.js'

const fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];

document.querySelector('#array').value = fruits

const save = document.querySelector('#save')
save.addEventListener('click', (event) => saveString(event))

const showNewArray = document.querySelector('#show-new-array')
showNewArray.addEventListener('click', (event) => showTbody(event, '#result-tbody', fruits))

function saveString(event) {
    event.stopPropagation()
    event.preventDefault()
    let stringName = document.querySelector('#add-array').value
    fruits.push(stringName)
}

const clearFields = document.querySelector('#clear-fields')
clearFields.addEventListener('click', function () {
    document.querySelector('#add-array').value = ''
})

const clearTbody = document.querySelector('#clear-tbody')
clearTbody.addEventListener('click', () => clearTbody('#result-tbody'))

