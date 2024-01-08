
let array = [15, 8, 4, 89, 47, 5, 12, 26]

document.addEventListener('DOMContentLoaded', function(){

    let execute = document.querySelector('#execute')
    let clear = document.querySelector('#clear')
    let showArray = document.querySelector('#show-array')
    
    clear.addEventListener('click', clearFields)
    execute.addEventListener('click', showResult)
    showArray.addEventListener('click', showArrayInput)
})

function clearFields(){

    document.querySelector('#array-input').value = ''
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#number').value = ''
}

function showArrayInput(){

    document.querySelector('#array-input').value = array
}

function showResult(event) {
    
    event.preventDefault()
    event.stopPropagation()
    
    document.querySelector('#number').innerHTML = ''
    
    let number = parseInt(document.querySelector('#number').value)
    let resultNumber = 0
    let position = 0

    resultNumber = array.find((element, index) => {
        if(element === number){
            position = index
        }
        return element === number
    })
   
    document.querySelector('#result').innerHTML = `<br/>Array Position: ${position} <br/>Array Element: ${resultNumber}`
    return resultNumber
}
