const users = ['Sam','Alex','Charley','John Connor','James Bond','Clark Kent','Peter Park','Bruce Wayne','Logan','T1000','T800']
const arrayEvenNumber = [0, 2, 4, 6, 8]
const arrayOddNumber = [1, 3, 5, 7, 9]

document.querySelector('#array-users').textContent = `users [ ${users} ]`
document.querySelector('#array-even').textContent = `even [ ${arrayEvenNumber} ]`
document.querySelector('#array-odd').textContent = `odd [ ${arrayOddNumber} ]`

const arrayAt = document.querySelector('#btn-at')
arrayAt.addEventListener('click', function(){
    document.querySelector('#array-at').value = users.at(1)
})

const addUser = document.querySelector('#btn-push')
addUser.addEventListener('click', function(){
    users.push('Max')
    document.querySelector('#array-push').value = users
})

const removeLastElement = document.querySelector('#btn-remove-last-element')
removeLastElement.addEventListener('click', function(){
    let lastElement = users.pop()
    document.querySelector('#remove-last-element').value = lastElement
})

const getLastElement = document.querySelector('#btn-get-last-element')
getLastElement.addEventListener('click', function(){
    let lastElement = users.at(-1)
    document.querySelector('#get-last-element').value = lastElement
})

function showIndexOf() {
    let number = document.getElementById('indexOf').value
    const array = arrayEvenNumber.indexOf(parseInt(number))
    console.log(`Position ${array}`)
    document.getElementById('indexOf').value = array
}

function showLastIndexOf() {
    let number = document.getElementById('lastIndexOf').value
    const lastNumber = arrayOddNumber.lastIndexOf(parseInt(number))
    console.log(`Position ${lastNumber}`)
    document.getElementById('lastIndexOf').value = lastNumber
}

function showIncludes() {
    let number = document.getElementById('includes').value
    const existNumber = arrayOddNumber.includes(number)
    console.log(`Position ${number}`)
    document.getElementById('includes').value = existNumber
}

function findObject() {
    let number = document.getElementById('findObject').value
    const numberObject = arrayOddNumber.find(element => number > element)
    console.log(`Position ${numberObject}`)
    document.getElementById('findObject').value = numberObject
}

function findIndex() {
    let number = document.getElementById('findIndex').value
    const numberIndex = arrayEvenNumber.findIndex(element => number > element)
    console.log(`Position ${numberIndex}`)
    document.getElementById('findIndex').value = numberIndex
}