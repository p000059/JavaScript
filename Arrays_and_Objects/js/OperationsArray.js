const arrayNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myElements = ["Pêra", "Uva", "Maçã", "Laranja", "Banana", "Melancia", "Manga"]
const myArrayForeach = [0, 1, 2, 3, 4, 5, "Pêra", "Uva", "Maçã", "Laranja", "Banana", true, false]
const myArrayIncludes = ["Volks", "BMW", "GM", "Ford", "Fiat", "Gurgel", "Mercedes", "Aston Martin", "Nissan", "Subaru"]
const arrayReverse = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const arrayString = ["Pêra", "Uva", "Maçã", "Laranja", "Banana", "Melancia", "Manga", "Maracujá"]
const posts = [
    { title: "Primeiro Post", category: "PHP" },
    { title: "Segundo Post", category: "Javascript" },
    { title: "Terceiro Post", category: "Python" }
]

document.querySelector('#array-number').innerHTML = `Array[${arrayNumber}]`
document.querySelector('#array-number-shift').innerHTML = `Array[${arrayNumber}]`
document.querySelector('#array-indexOf-lastIndexOf').innerHTML = `Array[${myElements}]`
document.querySelector('#array-slice-splice').innerHTML = `Array[${arrayNumber}]`
document.querySelector('#array-reverse-init').value = `[${arrayReverse}]`

document.addEventListener('DOMContentLoaded', function () {

    let showPush = document.querySelector('#show-push')
    let showPop = document.querySelector('#show-pop')
    let showShift = document.querySelector('#show-shift')
    let showUnshift = document.querySelector('#show-unshift')
    let showArrays = document.querySelector('#show-arrays')
    let clearArrays = document.querySelector('#clear-arrays')
    let showIndexOf = document.querySelector('#show-indexOf')
    let showLastIndexOf = document.querySelector('#show-last-indexOf')
    let showSlice = document.querySelector('#show-slice')
    let showSplice = document.querySelector('#show-splice')
    let execForeach = document.querySelector('#exec-foreach')
    let clearForeach = document.querySelector('#clear-foreach')
    let execForeachObject = document.querySelector('#exec-foreach-object')
    let clearForeachObject = document.querySelector('#clear-foreach-object')
    let execArrayIncludes = document.querySelector('#exec-array-includes')
    let clearArrayIncludes = document.querySelector('#clear-array-includes')
    let execArrayReverse = document.querySelector('#exec-array-reverse')
    let clearArrayReverse = document.querySelector('#clear-array-reverse')


    showPush.addEventListener('click', execPush)
    showPop.addEventListener('click', execPop)
    showShift.addEventListener('click', showShiftH)
    showUnshift.addEventListener('click', showUnShift)
    showArrays.addEventListener('click', showArraysH)
    clearArrays.addEventListener('click', clearArraysH)
    showIndexOf.addEventListener('click', showIndexOfM)
    showLastIndexOf.addEventListener('click', showLastIndexOfM)
    showSlice.addEventListener('click', showSliceM)
    showSplice.addEventListener('click', showSpliceM)
    execForeach.addEventListener('click', showForeach)
    clearForeach.addEventListener('click', clearFieldsArray)
    execForeachObject.addEventListener('click', showForeachObject)
    clearForeachObject.addEventListener('click', clearFieldsArrayObject)
    execArrayIncludes.addEventListener('click', showArrayElementIncluded)
    clearArrayIncludes.addEventListener('click', clearArrayIncludesM)
    execArrayReverse.addEventListener('click', showArrayReverse)
    clearArrayReverse.addEventListener('click', clearArrayReverseF)
})

function arrayEven() {
    return arrayNumber.filter((number) => number % 2 === 0)
}

function arrayOdd() {
    return arrayNumber.filter((number) => number % 2 === 1)
}

function showArraysH() {
    document.querySelector('#array').value = arrayNumber
    document.querySelector('#array-even').value = arrayEven()
    document.querySelector('#array-odd').value = arrayOdd()
    document.querySelector('#array-foreach-show').value = myArrayForeach
    document.querySelector('#array-includes').value = myArrayIncludes
    document.querySelector('#array-reverse').value = arrayReverse
}

function clearArraysH() {
    document.querySelector('#array').value = ''
    document.querySelector('#array-even').value = ''
    document.querySelector('#array-odd').value = ''
    document.querySelector('#array-foreach-show').value = ''
    document.querySelector('#array-includes').value = ''
    document.querySelector('#array-reverse').value = ''
}

function execPush() {
    let number = Number.parseInt(document.querySelector('#push-array').value)
    typeof number === 'number' ? arrayNumber.push(number) : arrayNumber.push(0)
    document.querySelector('#array-number').innerHTML = `Array[${arrayNumber}]`
}

function execPop() {
    let number = document.querySelector('#pop-array').value
    typeof number === 'number' ? arrayNumber.pop() : arrayNumber.pop(0)
    document.querySelector('#array-number').innerHTML = `Array[${arrayNumber}]`
}

function showShiftH() {
    arrayNumber.shift()
    document.querySelector('#array-number-shift').innerHTML = `Array[${arrayNumber}]`
}

function showUnShift() {
    let number = document.querySelector('#unshift-array').value
    arrayNumber.unshift(number)
    document.querySelector('#array-number-shift').innerHTML = `Array[${arrayNumber}]`
}

function showIndexOfM() {

    let indexOfElement = document.querySelector('#indexOf-array').value
    document.querySelector('#array-indexOf-lastIndexOf').innerHTML = myElements.indexOf(indexOfElement)
}

function showLastIndexOfM() {

    let lastIndexOfArray = document.querySelector('#last-indexOf-array').value
    document.querySelector('#array-indexOf-lastIndexOf').innerHTML = myElements.lastIndexOf(lastIndexOfArray)
}

function showSliceM() {
    let initialNumber = document.querySelector('#initial-number').value
    let finalNumber = document.querySelector('#final-number').value

    let resultArray = arrayNumber.slice(initialNumber, finalNumber + 1)

    document.querySelector('#array-slice-splice').innerHTML = `Origim Array[${arrayNumber}] <br/> Slice Array[${resultArray}]`
}

function showSpliceM() {
    let startIndex = document.querySelector('#splice-number').value
    let deleteCount = 0
    let itemOne = 20
    let itemTwo = 30

    document.querySelector('#array-slice-splice').innerHTML = `Origim Array[${arrayNumber}] <br/> Splice Array[${arrayNumber.splice(startIndex, deleteCount, itemOne, itemTwo)}]`
}

function showForeach() {

    let div = document.querySelector('#show-foreach')
    let divOne = ''

    myArrayForeach.forEach((element) => {
        divOne = document.createElement('div')
        divOne.innerHTML = element
        div.appendChild(divOne)
    })
}

function clearFieldsArray() {
    document.querySelector('#show-foreach').innerHTML = ''
}

function showForeachObject() {

    let div = document.querySelector('#show-foreach-object')
    let divOne = ''
    let p = ''

    posts.forEach((element) => {
        divOne = document.createElement('div')
        p = document.querySelector('p')
        p.innerHTML = `Título: ${element.title} <br /> Categoria: ${element.category}`
        divOne.appendChild(p)
        div.appendChild(divOne)
    })

}

function clearFieldsArrayObject() {
    document.querySelector('#show-foreach-object').innerHTML = ''
}

function showArrayElementIncluded() {

    let verifyElement = document.querySelector('#included-element').value

    if (myArrayIncludes.includes(verifyElement)) {
        document.querySelector('#shows-included-element').innerHTML = `Includes: ${verifyElement}`
    } else {
        document.querySelector('#shows-included-element').innerHTML = `[${verifyElement}] not included in Array!`
    }
}

function clearArrayIncludesM() {
    document.querySelector('#shows-included-element').innerHTML = ''
}

function showArrayReverse() {

    document.querySelector('#shows-array-reverse').innerHTML = `Array Reverse => [${arrayReverse.reverse()}]`
}

function clearArrayReverseF() {
    document.querySelector('#shows-array-reverse').innerHTML = ''
}


function stringTrim() {
    const trimTest = " Testanto \n\n"

    console.log(trimTest)

    console.log(trimTest.trim())

    console.log(trimTest.length)

    console.log(trimTest.trim().length)
}

function stringPadStart() {

    const testPadStat = "1"

    const number = testPadStat.padStart(4, "0")

    console.log(testPadStat)
    console.log(`\n\n ${number}`)

}

function stringPadEnd() {

    const testPadEnd = "1"

    const number = testPadEnd.padEnd(10, "0")

    console.log(testPadEnd)
    console.log(`\n\n ${number}`)

}

function stringSplit() {

    const word = "O rato roeu a roupa do rei de Roma."

    const arrayWord = word.split(" ")

    console.log(word)

    console.log(arrayWord)
}

function stringJoin() {

    const wordArray = ['Muita', 'calma', 'nessa', 'hora.']

    const wordResult = wordArray.join(' ')

    console.log(`Array[${wordResult}]`)
    console.log(`Tipo: ${typeof wordResult}`)

}

function stringRepeat() {

    const testWord = "Repetindo... \n\n"

    console.log(testWord.repeat(5))
}


const restOperator = (...args) => {

    let total = 0

    for (let i = 0; i < args.length; i++) {

        total += args[i];

    }
    
    return total 
}

const forOfArray = (...args) => {

    let total = 0

    for(num of args){

        total += num
    }

    return total;
}

const destructuringObject = () => {

    const userDetails = {
        firstName: "Marcelo",
        lastName: "Guimba"
    }

    const {firstName,lastName} = userDetails

    console.log(firstName, lastName)

    const { firstName: primeiroNome, asd} = userDetails

    console.log(firstName)
    
}

const destructuringArray = () => {

    const myList = ["Carro","Caminhão","Moto"]

    const [var1,var2,var3] = myList

    console.log(`\n\n${var1} \n${var2} \n${var3}`)
}