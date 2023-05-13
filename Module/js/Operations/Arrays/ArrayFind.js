import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

let names = ['Marcelo', 'Ruth', 'Mauricio', 10, 37, 48, 400, 113, 45, 76]
document.querySelector('#array').value = `[${names.join(' - ')}]`

let findName = document.querySelector('#find-name')
findName.addEventListener('click', () => showName())

let filterNames = document.querySelector('#filter-names')
filterNames.addEventListener('click', () => showFilterNames())

let filterNumbers = document.querySelector('#filter-numbers')
filterNumbers.addEventListener('click', () => showFilterNumbers())

function showName () {
    exeClearResult()
    let word = document.querySelector('#word').value
    let result = names.find((name) => name === word)
    createLabel(document.querySelector('#result').innerHTML = `Found: ${result}`)
}

function showFilterNames () {
    exeClearResult()
    let stringNames = new Array()
    stringNames = names.filter((name) => typeof name === 'string')

    createLabel(document.querySelector('#result').innerHTML = `Array [${stringNames}]`)
    console.log(stringNames)
}

function showFilterNumbers(){
    exeClearResult()
    let stringNumber = new Array()
    stringNumber = names.filter((number) => typeof number === 'number')
    createLabel(document.querySelector('#result').innerHTML = `Array [${stringNumber}]`)
    console.log(result)
}

const clearFields = document.querySelector('#clear-fields')
clearFields.addEventListener('click', function(){
    document.querySelector('#word').value = ''
})

const clearResult = document.querySelector('#clear-result')
clearResult.addEventListener('click', () => exeClearResult())

function exeClearResult(){
    document.querySelector('#result').innerHTML = ''
}