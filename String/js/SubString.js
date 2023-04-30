var execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

var clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', (event) => clearFields(event))

function createLabel(object) {
    let label = document.createElement('label')
    label.textContent = object
    return label
}

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').innerHTML = ''
    let words = 'MMMMarcelo Guimbaaaa'
    let subStringResult = words.substring(3, 17)
    let result = document.querySelector('#result')
    result.appendChild(createLabel(subStringResult))
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}