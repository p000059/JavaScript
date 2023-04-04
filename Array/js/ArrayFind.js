let names = ['Marcelo', 'Ruth', 'Mauricio', 10, 37, 48]

let findName = document.querySelector('#find-name')
findName.addEventListener('click', () => showName())

let filterNames = document.querySelector('#filter-names')
filterNames.addEventListener('click', () => showFilterNames())

let filterNumbers = document.querySelector('#filter-numbers')
filterNumbers.addEventListener('click', () => showFilterNumbers())

function showName () {
    let findWord = document.querySelector('#name').value
    let result = names.prototype.find((name) => name === findWord)
    document.querySelector('#result-name').innerHTML = `Found: ${result}`
    console.log(result)
}

function showFilterNames () {
    let stringNames = new Array()
    let resultString = names.filter((name) => {
        if (typeof name === 'string') {
            stringNames.push(name)
            return stringNames
        }
    })
    document.querySelector('#string-names').innerHTML = resultString
    console.log(stringNames)
}

function showFilterNumbers(){
    let stringNumber = new Array()
    let result = names.filter((number) => {
        if(typeof number === 'number'){
            stringNumber.push(number)
            return stringNumber
        }
    })
    document.querySelector('#numbers-names').innerHTML = result
    console.log(result)
}

document.querySelector('#array').innerHTML = `Array [ ${names} ]`