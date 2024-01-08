import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const showArraysPage = document.querySelector('#show-arrays')
showArraysPage.addEventListener('click', () => showArrays())

function showArrays() {
    document.querySelector('#array').value = `[${arrayNumber}]`
    document.querySelector('#array-even').value = `[${arrayEven()}]`
    document.querySelector('#array-odd').value = `[${arrayOdd()}]`
}

const clearArraysPage = document.querySelector('#clear-arrays')
clearArraysPage.addEventListener('click', () => clearArrays())

function clearArrays() {
    document.querySelector('#array').value = ''
    document.querySelector('#array-even').value = ''
    document.querySelector('#array-odd').value = ''
}

const showPush = document.querySelector('#show-push')
showPush.addEventListener('click', () => execPush())

function execPush() {
    let number = Number.parseInt(document.querySelector('#push-array').value)
    typeof number === 'number' ? arrayNumber.push(number) : arrayNumber.push(0)
}

const exeShowPop = document.querySelector('#show-pop')
exeShowPop.addEventListener('click', () => showPop())

function showPop() {
    let number = document.querySelector('#pop-array').value
    typeof number === 'number' ? arrayNumber.pop() : arrayNumber.pop(0)
}

const execShowShift = document.querySelector('#show-shift')
execShowShift.addEventListener('click', () => showShift())

function showShift() {
    return arrayNumber.shift()
}

const execShowUnshift = document.querySelector('#show-unshift')
execShowUnshift.addEventListener('click', () => showUnShift())

function showUnShift() {
    let number = document.querySelector('#unshift-array').value
    arrayNumber.unshift(number)
}

const execShowSlice = document.querySelector('#show-slice')
execShowSlice.addEventListener('click', () => showSlice())

function showSlice() {
    let initialNumber = document.querySelector('#initial-number').value
    let finalNumber = document.querySelector('#final-number').value

    let resultArray = arrayNumber.slice(initialNumber, finalNumber)

    document.querySelector('#array').value = `[${resultArray}]`
}

const execShowSplice = document.querySelector('#show-splice')
execShowSplice.addEventListener('click', () => showSplice())

function showSplice() {
    let startIndex = document.querySelector('#splice-number').value
    let deleteCount = 0
    let itemOne = 20
    let itemTwo = 30
    arrayNumber.splice(startIndex, deleteCount, itemOne, itemTwo)
}

function arrayEven() {
    return arrayNumber.filter((number) => number % 2 === 0)
}

function arrayOdd() {
    return arrayNumber.filter((number) => number % 2 === 1)
}