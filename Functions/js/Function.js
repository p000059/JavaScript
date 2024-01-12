let vector = new Array()

document.addEventListener('DOMContentLoaded', function(){

    let callBack = document.querySelector('#call-back')
    let showResult = document.querySelector('#show-result')

    callBack.addEventListener('click', returnVariable)
    showResult.addEventListener('click', sum)

})

function returnVariable() {
    
    let variableOne = document.querySelector('#variableOne').value
    let variableTwo = document.querySelector('#variableTwo').value
    vector.push(Number.parseInt(variableOne))
    vector.push(Number.parseInt(variableTwo))
}

function sum() {
    
    let result = 0

    for (let i = 0; i < vector.length; i++) {
        result += vector[i]
    }

    document.querySelector('#result').innerHTML = result
}
