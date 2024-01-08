
document.addEventListener('DOMContentLoaded', function(){

    let execute = document.querySelector('#execute')
    let clear = document.querySelector('#clear')
    
    execute.addEventListener('click', showResult)
    clear.addEventListener('click', clearFields)
})


function showResult(event) {

    event.preventDefault()
    event.stopPropagation()
    
    document.querySelector('#result').innerHTML = ''

    let number = document.querySelector('#number').value

    let resultNumber =  number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(resultNumber)

    document.querySelector('#result').innerHTML = `<br/>The Locale number is: ${resultNumber}`
    return resultNumber
}

function clearFields(){

    document.querySelector('#number').value = ''
    document.querySelector('#result').innerHTML = ''
}