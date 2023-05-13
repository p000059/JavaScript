import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const users = ['Sam', 'Alex', 'Charley', 'John Connor', 'James Bond', 'Clark Kent', 'Peter Park', 'Bruce Wayne', 'Logan', 'T1000', 'T800']
const arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const btnShowUsers = document.querySelector('#array-users')
btnShowUsers.addEventListener('click', (event) => showArrayUsers(event))

const btnShowNumbers = document.querySelector('#array-numbers')
btnShowNumbers.addEventListener('click', (event) => showArrayNumbers(event))

const btnShowEven = document.querySelector('#array-even')
btnShowEven.addEventListener('click', (event) => showArrayEven(event))

const btnShowOdd = document.querySelector('#array-odd')
btnShowOdd.addEventListener('click', (event) => showArrayOdd(event))

const addUserEnd = document.querySelector('#add-user-end')
addUserEnd.addEventListener('click', function () {
    let newUser = document.querySelector('#new-user-end').value
    users.push(newUser)
})

const addUserStart = document.querySelector('#add-user-start')
addUserStart.addEventListener('click', function () {
    let newUser = document.querySelector('#new-user-start').value
    users.unshift(newUser)
})

const removeInitialUser = document.querySelector('#remove-initial-user')
removeInitialUser.addEventListener('click', function (event) {
    document.querySelector('#result').innerHTML = ''
    event.preventDefault()
    event.stopPropagation()
    let removedUser = users.shift()
    document.querySelector('#remove-first-user').value = `[${removedUser}]`
    createLabel(document.querySelector('#result').innerHTML = `<br/>Removed User: ${removedUser} <br/><br/>Actual[${users}]`)
})

const removeLastUser = document.querySelector('#remove-final-user')
removeLastUser.addEventListener('click', function (event) {
    document.querySelector('#result').innerHTML = ''
    event.preventDefault()
    event.stopPropagation()
    let removedUser = users.pop()
    console.log(removedUser)
    document.querySelector('#remove-last-user').value = `[${removedUser}]`
    createLabel(document.querySelector('#result').innerHTML = `<br/>Removed User: ${removedUser} <br/><br/>Actual[${users}]`)
})

function showArrayUsers(event) {
    event.preventDefault()
    event.stopPropagation()
    createLabel(document.querySelector('#show-array-users').value = `[${users}]`)
}

function showArrayNumbers(event) {
    event.preventDefault()
    event.stopPropagation()
    createLabel(document.querySelector('#show-array-numbers').value = `[${arrayNumbers}]`)
}

function showArrayEven(event) {
    event.preventDefault()
    event.stopPropagation()
    createLabel(document.querySelector('#show-array-even').value = `[ ${filterEven()} ]`)
}

function showArrayOdd(event) {
    event.preventDefault()
    event.stopPropagation()
    createLabel(document.querySelector('#show-array-odd').value = `[${filterOdd()}]`)
}

const getFirstElement = document.querySelector('#get-first-element')
getFirstElement.addEventListener('click', function () {
    createLabel(document.querySelector('#result').innerHTML = `First Element: [ ${users.at(0)} ]`)
})

const getLastElement = document.querySelector('#get-last-element')
getLastElement.addEventListener('click', function () {
    createLabel(document.querySelector('#result').innerHTML = `Last Element: [${users.at(-1)}]`)
})

const findIndexUsers = document.querySelector('#find-index-users')
findIndexUsers.addEventListener('click', () => showIndexOf())

function showIndexOf() {
    let word = document.querySelector('#word-index').value
    const indexFound = users.indexOf(word)
    console.log(`Position ${indexFound}`)
    document.querySelector('#result').innerHTML = `<br/>Position: ${indexFound}<br/>Word: ${word}`
}

const lastIndex = document.querySelector('#last-index')
lastIndex.addEventListener('click', () => showLastIndexOf())

function showLastIndexOf() {
    let word = document.querySelector('#word').value
    const lastIndex = users.lastIndexOf(word)
    console.log(`Position ${lastIndex}`)
    createLabel(document.querySelector('#result').innerHTML = `<br/>Position: ${lastIndex}<br/>Word: ${word}`)
}

const findElement = document.querySelector('#find-element')
findElement.addEventListener('click', ()=>showIncludes())

function showIncludes() {
    let user = document.querySelector('#user').value
    const userFound = users.includes(user)
    createLabel(document.querySelector('#result').innerHTML = `User Found: ${userFound}`)
}

function filterOdd() {
    return arrayNumbers.filter((odd) => odd % 2 === 1)
}

function filterEven() {
    return arrayNumbers.filter((even) => even % 2 === 0)
}

const clearUsers = document.querySelector('#clear-users')
clearUsers.addEventListener('click', function (event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#show-array-users').value = ''
})

const clearNumbers = document.querySelector('#clear-numbers')
clearNumbers.addEventListener('click', function (event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#show-array-numbers').value = ''
})

const clearEven = document.querySelector('#clear-even')
clearEven.addEventListener('click', function (event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#show-array-even').value = ''
})

const clearOdd = document.querySelector('#clear-odd')
clearOdd.addEventListener('click', function (event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#show-array-odd').value = ''
})

const clearFields = document.querySelector('#clear-fields')
clearFields.addEventListener('click', (event) => clearFieldsArray(event))

function clearFieldsArray(event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#show-array-users').value = ''
    document.querySelector('#show-array-numbers').value = ''
    document.querySelector('#show-array-even').value = ''
    document.querySelector('#show-array-odd').value = ''
}

const clearResult = document.querySelector('#clear-result')
clearResult.addEventListener('click', (event) => clearResultPage(event))

function clearResultPage(event) {
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#result').innerHTML = ''
}

const clearFirstIndex = document.querySelector('#clear-first-index')
clearFirstIndex.addEventListener('click', function(event){
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#word-index').value = ''
})

const clearLastIndex = document.querySelector('#clear-last-index')
clearLastIndex.addEventListener('click', function(event){
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#word').value = ''
})

const clearFindElement = document.querySelector('#clear-find-element')
clearFindElement.addEventListener('click', function(){
    document.querySelector('#user').value = ''
})
