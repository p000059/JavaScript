const names = ['Sam', 'John', 'Samuel', 'Paul', 'Erick', 'James']
const numbers = [3, 9, 5, 7, 12, 13, 67, 34, 56, 11, 25]

document.addEventListener('DOMContentLoaded', function () {
    
    let arrayNumber = document.querySelector('#show-array-number')
    let arrayString = document.querySelector('#show-array-string')
    let clearArrayNumber = document.querySelector('#clear-array-number')
    let clearArrayString = document.querySelector('#clear-array-string')
    let clearResult = document.querySelector('#clear-results')
    let toUpperCase = document.querySelector('#touppercase')
    
	arrayNumber.addEventListener('click', showArrayNumber)
    arrayString.addEventListener('click', showArrayString)
    clearArrayNumber.addEventListener('click', clearArrayNumbers)
    clearArrayString.addEventListener('click', clearArrayStrings)
    clearResult.addEventListener('click', clearResults)
    toUpperCase.addEventListener('click', showExecString)

});

function showArrayNumber(){
    
    document.querySelector('#array-numbers').value = `${numbers}`
}

function showArrayString(){

    document.querySelector('#array-string').value = `${names}`
}

function clearResults(){

    document.querySelector('#result').innerHTML = ''
}

function clearArrayStrings(){

    document.querySelector('#array-string').value = ''
}

function clearArrayNumbers(){

    document.querySelector('#array-numbers').value = ''
}

function showExecMap() {
    const result = numbers.map((number) => number * 2)
    document.querySelector('#show-map').innerHTML = result
    console.log(result)
}

function showExecString() {
    const result = names.map((name) => name.toUpperCase())
    document.querySelector('#result').innerHTML = result
    console.log(result)
}

function showFunctionCount() {
    return names.map((name) => name.length)
}

function showNumbers() {
    let result = 0
    numbers.map((number) => result += number)
    document.querySelector('#show-sum').innerHTML = result
    console.log(result)
    return result
}

function showAverage() {
    let result = 0
    numbers.map((number) => result += number)
    console.log(result / numbers.length)
    document.querySelector('#show-average').innerHTML = result / numbers.length
    return result / numbers.length
}

function showGreaterTen() {
    let total = new Array()
    numbers.map((number) => {
        if (number > 10) {
            total.push(number)
        }
        return total
    })
    console.log(total)
    document.querySelector('#show-greater-ten').innerHTML = total
    return total
}

function showSmallerNumbers(){
    let total = new Array()
    numbers.map((number) => {
        if(number < 10){
            total.push(number)
        }
        return total
    })
    console.log(total)
    document.querySelector('#show-smaller-numbers').innerHTML = total
    return total
}

function sumOneAndLessThanTwenty(){
    let total = new Array()
    numbers.map((number) => {
        if(number < 20){
            number++
            total.push(number)
        }
        return total
    })
    console.log(total)
    document.querySelector('#show-smaller-twenty').innerHTML = total
    return total
}

function voters(){
    let total = 0
    numbers.map((voters) => {
        if(voters >= 18){
            total++
        }
    })
    console.log(total)
    document.querySelector('#show-voters').innerHTML = total
    return(total)
}
