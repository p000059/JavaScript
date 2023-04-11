
(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arrayEven = [0, 2, 4, 6, 8]
const arrayOdd = [1, 3, 5, 7, 9]

document.getElementById('shift').value = arrayEven

function showPush(){
    let number = document.getElementById('push').value
    arrayEven.push(number)
    document.getElementById('push').value = arrayEven
}

function showPop(){
    let number = document.getElementById('pop').value
    arrayOdd.pop(number)
    document.getElementById('pop').value = arrayOdd
}

function showShift(){
    document.getElementById('shift').value = arrayEven
    arrayEven.shift()
    document.getElementById('shift').value = arrayEven
}

function showUnShift(){
    let number = document.getElementById('unShift').value
    let newNumber = arrayOdd.unshift(number)
    document.getElementById('unShift').value = newNumber
}

function showSlice(){
    let initialNumber = document.getElementById('initialNumber').value
    let finalNumber = document.getElementById('finalNumber').value

    let resultArray = arrayEven.slice(initialNumber, finalNumber)

    document.getElementById('slice').value = resultArray
}

function showSplice(){
    let indexDelete = document.getElementById('splice').value
    let arrayNew = arrayOdd.splice(indexDelete)
    document.getElementById('splice').value = arrayNew
}