import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const arrayEven = [0, 2, 4, 6, 8]
const arrayOdd = [1, 3, 5, 7, 9]

document.querySelector('#join').value = `[${arrayEven}]`
document.querySelector('#even').value = `[${arrayEven}]`
document.querySelector('#odd').value = `[${arrayOdd}]`
document.querySelector('#copy').value = `Old Array [${arrayOdd}]`

const executeToString = document.querySelector('#execute-to-string')
executeToString.addEventListener('click', (event) => showToString(event))

function showToString(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    let number = document.querySelector('#number').value
    console.log(`Number to Word: ${number}`)
    createLabel(document.querySelector('#result').innerHTML = `Word to Number: ${number.toString()}`)
}

const executeJoin = document.querySelector('#execute-join')
executeJoin.addEventListener('click', (event) => showJoin(event))

function showJoin(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    console.log(`Value Array Odd: ${arrayEven.join(' -- ')}`)
    createLabel(document.querySelector('#result').innerHTML = `[${arrayEven.join(' - ')}]`)
}

const concat = document.querySelector('#concat')
concat.addEventListener('click', (event) => showConcat(event))

function showConcat(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    console.log(`Value Array Even: ${arrayEven.concat(arrayOdd)}`)
    createLabel(document.querySelector('#result').innerHTML = `[${arrayEven.concat(arrayOdd)}]`)
}

const copyArray = document.querySelector('#copy-array')
copyArray.addEventListener('click', (event) => showArray(event))

function showArray(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    let newArray = [].concat(arrayEven)

    createLabel(document.querySelector('#result').innerHTML = `New Array [${newArray}]`)
}

const clearFields = document.querySelector('#clear-fields')
clearFields.addEventListener('click', function () {
    document.querySelector('#number').value = ''
})

const clearResult = document.querySelector('#clear-result')
clearResult.addEventListener('click', () => exeClearResult())

function exeClearResult() {
    document.querySelector('#result').innerHTML = ''
}
