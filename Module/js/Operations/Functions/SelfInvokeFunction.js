
const myFunction = function (a, b) { return a * b }

const x = function (a, b) { return a + b }

const expression = function (a, b = 23) {
    return a * b + 10
}

//Arrow Function
const y = (x) => { return x * 30 }

(function (numberOne, numberTwo) {
    let variableOne = myFunction(numberOne, numberTwo)
    let variableTwo = x(numberOne, numberTwo)
    let variableThree = expression(numberOne, numberTwo)
    let variableFour = y(3)
    let variableFive = sum(4, 9, 16, 25, 29, 100, 66, 77)
    let variableSix = sumAll(29, 100, 66, 77)
    
    console.log(
        "\nOne: " + variableOne,
        "\nTwo: " + variableTwo,
        "\nThree: " + variableThree,
        "\nFour: " + variableFour,
        "\nFive: " + variableFive,
        "\nSix: " + variableSix
        
    )
})(10, 20);

function sum(...args) {
    let sum = 0
    for (let arg of args) {
        sum += arg
    }
    return sum
}

function sumAll(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}



