const names = ['Sam', 'John', 'Samuel', 'Paul', 'Erick', 'James']
const numbers = [3, 9, 5, 7, 12, 13, 67, 34, 56, 11, 25]

document.querySelector('#array').innerHTML = `Array [ ${names} ]`

const execMap = document.querySelector('#exec-map')
execMap.addEventListener('click', () => showExecMap())

const execString = document.querySelector('#string-show')
execString.addEventListener('click', () => showExecString())

const execInclude = document.querySelector('#exec-include')
execInclude.addEventListener('click', () => showExecInclude())

const execCount = document.querySelector('#exec-count')
execCount.addEventListener('click', () => {
    document.querySelector('#show-count').innerHTML = showFunctionCount()
})

const sumNumbers = document.querySelector('#sum-numbers')
sumNumbers.addEventListener('click', () => showNumbers())

const numbersAverage = document.querySelector('#numbers-average')
numbersAverage.addEventListener('click', () => showAverage())

const numbersGreaterTen = document.querySelector('#numbers-greater-ten')
numbersGreaterTen.addEventListener('click', () => showGreaterTen())

const smallerNumbers = document.querySelector('#smaller-numbers')
smallerNumbers.addEventListener('click', () => showSmallerNumbers())

const smallerTwenty = document.querySelector('#smaller-twenty')
smallerTwenty.addEventListener('click', () => sumOneAndLessThanTwenty())

const checkVoter = document.querySelector('#check-voter')
checkVoter.addEventListener('click', () => voters())

function showExecMap() {
    const result = numbers.map((number) => number * 2)
    document.querySelector('#show-map').innerHTML = result
    console.log(result)
}

function showExecString() {
    const result = names.map((name) => name.toUpperCase())
    document.querySelector('#show-string').innerHTML = result
    console.log(result)
}

function showExecInclude() {
    const searchWord = document.querySelector('#search-word').value
    const result = names.includes(searchWord)
    document.querySelector('#show-include').innerHTML = result
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

function getVotersCount() {
    const totalVoters = numbers.filter((age) => age >= 18)
    console.log(totalVoters)
    document.querySelector('#show-voters').innerHTML = totalVoters
    return totalVoters.length
}