let execute = document.querySelector('#execute')
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
    document.querySelector('#result').innerHTML = ''
    let words = document.querySelector('#words').value
    let inversion = words.split('').reverse().join('')
    createLabel(document.querySelector('#result').innerHTML = inversion)
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}