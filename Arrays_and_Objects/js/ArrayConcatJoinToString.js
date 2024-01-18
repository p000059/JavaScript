
const arrayEven = [0, 2, 4, 6, 8]
const arrayOdd = [1, 3, 5, 7, 9]

document.querySelector('#join').value = `[${arrayEven}]`
document.querySelector('#even').value = `[${arrayEven}]`
document.querySelector('#odd').value = `[${arrayOdd}]`
document.querySelector('#copy').value = `Old Array [${arrayOdd}]`

document.addEventListener('DOMContentLoaded', function () {
    
    const executeToString = document.querySelector('#execute-to-string')
    const executeJoin = document.querySelector('#execute-join')
    const concat = document.querySelector('#concat')
    const copyArray = document.querySelector('#copy-array')
    const clearFields = document.querySelector('#clear-fields')
    const clearResult = document.querySelector('#clear-result')
    
    concat.addEventListener('click', (event) => showConcat(event))
    executeToString.addEventListener('click', (event) => showToString(event))
    executeJoin.addEventListener('click', (event) => showJoin(event))
    copyArray.addEventListener('click', (event) => showArray(event))
    clearResult.addEventListener('click', () => exeClearResult())
})


function showToString(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    let number = document.querySelector('#number').value
    console.log(`Number to Word: ${number}`)
    document.querySelector('#result').innerHTML = `Word to Number: ${number.toString()}`
}


function showJoin(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    console.log(`Value Array Odd: ${arrayEven.join(' -- ')}`)
    cdocument.querySelector('#result').innerHTML = `[${arrayEven.join(' - ')}]`
}


function showConcat(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    console.log(`Value Array Even: ${arrayEven.concat(arrayOdd)}`)
    document.querySelector('#result').innerHTML = `[${arrayEven.concat(arrayOdd)}]`
}

function showArray(event) {
    event.preventDefault()
    event.stopPropagation()
    exeClearResult()
    let newArray = [].concat(arrayEven)

    document.querySelector('#result').innerHTML = `New Array [${newArray}]`
}

clearFields.addEventListener('click', function () {
    document.querySelector('#number').value = ''
})


function exeClearResult() {
    document.querySelector('#result').innerHTML = ''
}
