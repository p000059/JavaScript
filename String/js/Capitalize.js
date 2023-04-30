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
    document.querySelector('#words').innerHTML = ''
    let words = document.querySelector('#words').value
    let stringCapitalize = words[0].toUpperCase() + words.substring(1)
    createLabel(document.querySelector('#result').innerHTML = stringCapitalize)
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}

/* function capitalizeString() {
    let stringCapitalize = 'marcelo guimba'
    let firstName = stringCapitalize[0].toUpperCase() + stringCapitalize.substring(1, 7)
    let lastName = stringCapitalize[8].toUpperCase() + stringCapitalize.substring(9)
    let stringResult = `${firstName} ${lastName}`
    let result = document.querySelector('#result')
    result.appendChild(createLabel(stringResult))
} */