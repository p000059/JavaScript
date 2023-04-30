var execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function createLabel(object) {
    let label = document.createElement('label')
    label.textContent = object
    return label
}

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').innerHTML = ''
    let words = document.querySelector('#words').value
    let firstCaracter = words.substring(0, 1)
    createLabel(document.querySelector('#result').innerHTML = firstCaracter)
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}