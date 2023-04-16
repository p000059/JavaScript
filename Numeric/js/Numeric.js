(function () {
    let div = document.querySelector('#box')
    div.appendChild(createDiv(`Large Number One: ${largeNumberOne(1_000_00)}`))
    div.appendChild(createDiv(`Large Number Two: ${largeNumberTwo(1_200)}`))
    div.appendChild(createDiv(`Number.parseInt('n'): ${parseIntNumber('46.4856')}`))
    div.appendChild(createDiv(`Number.parseFloat('n'): ${parseFloatNumber('46.4856')}`))
    div.appendChild(createDiv(`variable.toFixed(46.4856): ${roundedNumber(46.4856)}`))
    div.appendChild(createDiv(`variable.toLocale(46.4856): ${roundedNumberLocale(46.4856)}`))
    div.appendChild(createDiv(`Floor (46.4856): ${numberFloor(46.4856)}`))
    div.appendChild(createDiv(`Ceil (46.4856): ${numberCeil(46.4856)}`))
    div.appendChild(createDiv(`Prime Number: ${primeNumber(40)}`))
    div.appendChild(createDiv(`Fibonnaci: ${fibonnaciNumber(15)}`))
    div.appendChild(createDiv(`Number greater than variable? ${evaluateCondition(11)}`))
    div.appendChild(createDiv(`Factorial Number: ${factorialNumber(5)}`))
    div.appendChild(createDiv(`Bigger Number: ${biggerNumber(4, 5)}`))
    div.appendChild(createDiv(`Search Number in Array: ${searchNumber(8)}`))
    div.appendChild(createDiv(`Bigger number in Array: ${searchBiggerNumber()}`))
    div.appendChild(createDiv(`Small number in Array: ${searchSmallNumber()}`))
    div.appendChild(createDiv(`Small number in array.find(): ${searchSmallNumberFind()}`))
})()

function createDiv(object) {
    let div = document.createElement('div')
    div.textContent = object
    return div
}

function largeNumberOne(number) {
    const largeNumber = number
    return largeNumber
}

function largeNumberTwo(number) {
    const largeNumber = number
    return largeNumber
}

function parseIntNumber(number) {
    let objNumber = Number.parseInt(number)
    return objNumber
}

function parseFloatNumber(number) {
    let objNumber = Number.parseFloat(number)
    return objNumber
}

function roundedNumber(number) {
    let numberRound = number.toFixed(2)
    return numberRound
}

function roundedNumberLocale(number) {
    let numberLocale = number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return numberLocale
}

function numberFloor(number) {
    return Math.floor(number)
}

function numberCeil(number) {
    return Math.ceil(number)
}

function primeNumber(n) {
    let array = new Array()
    for (let i = 0; i <= n; i++) {
        if ((n > 0) && ((i === 2) || (i % 2 === 1))) {
            array.push(i)
        }
    }
    return array
}

function fibonnaciNumber(number) {
    let previous = 0
    let current = 1
    let next = 1
    let array = new Array()

    for (let i = 0; i < number; i++) {
        array.push(next)
        previous = current + next
        current = next
        next = previous
    }

    return array
}

function factorialNumber(number) {
    let resultNumber = number

    for (let i = (number - 1); i > 0; i--) {
        resultNumber = resultNumber * i
    }
    return resultNumber

    /* if (number === 0 || number === 1) {
        return 1
    } else {
        return number * factorialNumber(number - 1)
    } */
}

function biggerNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne
    }
    return numberTwo
}

function searchNumber(number) {
    let array = [15, 8, 4, 89, 47, 5, 12, 26]
    let resultNumber = 0

    array.forEach((x) => {
        if (number === x) {
            resultNumber = x
        }
    })

    return resultNumber
}

function searchBiggerNumber() {
    let array = [15, 113, 4, 89, 47, 175, 12, 26]
    let resultNumber = 0

    /* for(let i = 0; i < array.length; i++){
        if(array[i] > resultNumber){
            resultNumber = array[i]
        } 
    } */

    array.forEach((x) => {
        if (x > resultNumber) {
            resultNumber = x
        }
    })
    return resultNumber
}

function searchSmallNumber() {
    let array = [15, 113, 4, 89, 47, 200, 3, 12, 26]
    let resultNumber = 0

    array.forEach((x) => {
        if (x < array[x]) {
            resultNumber = x
        }
    })

    return resultNumber
}

function searchSmallNumberFind() {
    let array = [15, 113, 3, 89, 47, 200, 2, 12, 26]
    let resultNumber = 0

    array.find((x) => {
        if (x < array[x]) {
            resultNumber = x
        }
    })

    return resultNumber
}

function evaluateCondition(number) {
    return number >= 10
}
