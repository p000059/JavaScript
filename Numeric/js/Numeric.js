(function(){
    let id_divBox = document.querySelector('#div-box')
    
    const largeNumberOne = 1_000
    let divOne = document.createElement('div')
    divOne.id = 'numberOne'
    divOne.textContent = largeNumberOne
    
    const largeNumberTwo = 1_200
    let divTwo = document.createElement('div')
    divTwo.id = 'numberTwo'
    divTwo.textContent = largeNumberTwo
    
    const numberThree = '46'
    let divThree = document.createElement('div')
    divThree.id = 'numberThree'
    divThree.textContent = Number.parseInt(numberThree, 10)

    const numberRound = 2.6
    let divNumberRound = document.createElement('div')
    divNumberRound.id = 'number-round'
    divNumberRound.textContent = `Round 2.6 = ${Math.round(numberRound)}`

    const numberFloor = 2.6
    let divNumberFloor = document.createElement('div')
    divNumberFloor.id = 'number-floor'
    divNumberFloor.textContent = `Floor 2.6 = ${Math.floor(numberFloor)}`

    const numberCeil = 2.6
    let divNumberCeil = document.createElement('div')
    divNumberCeil.id = 'number-ceil'
    divNumberCeil.textContent = `Ceil 2.6 = ${Math.ceil(numberCeil)}`

    id_divBox.appendChild(divOne)
    id_divBox.appendChild(divTwo)
    id_divBox.appendChild(divThree)
    id_divBox.appendChild(divNumberRound)
    id_divBox.appendChild(divNumberFloor)
    id_divBox.appendChild(divNumberCeil)
})()

function evaluateCondition(grade){
    //wrong
    /* if (grade >= 10) {
        return true;
    } else {
        return false;
    } */
    
    //Sure
    return grade >= 10
}

console.log(evaluateCondition(10))