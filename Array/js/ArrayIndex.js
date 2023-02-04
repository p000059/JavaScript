(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arrayEvenNumber = [0, 2, 4, 6, 8]
const arrayOddNumber = [1, 3, 5, 7, 9]

document.getElementById('arrayEvenNumber').value = arrayEvenNumber
document.getElementById('arrayOddNumber').value = arrayOddNumber

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