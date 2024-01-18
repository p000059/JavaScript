const arr = [1, 5, 10, 20, 37, "hello",'friend', true, false, true, true]

document.addEventListener('DOMContentLoaded', function(){
    
    let filterNumbers = document.querySelector('#filter-numbers')
    let filterStrings = document.querySelector('#filter-strings')
    let filterBoolean = document.querySelector('#filter-boolean')
    
    filterNumbers.addEventListener('click', showNumbers)    
    filterStrings.addEventListener('click', showStrings)    
    filterBoolean.addEventListener('click', showBooleans)
})

document.querySelector('#array-input').value = `${arr}`

function clearFields(){

    document.querySelector('#result').innerHTML = ''    
}

function showStrings () {
    
    clearFields()

    const array = arr.filter((element, index, array) => {
        if(typeof element === 'string'){
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return typeof element === 'string'
        } else {
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return null
        }
    })

    let result = document.querySelector('#result')
    let div = document.createElement('div')
    div.innerHTML = array
    result.appendChild(div)

    return array
}

function showNumbers() {
    
    clearFields()

    const array = arr.filter((element, index, array) => {
        console.log(`Index: ${index}  |  Value: ${element} | ${array[index]}`)
        return typeof element === 'number'
    })
    
    let result = document.querySelector('#result')
    let div = document.createElement('div')
    div.innerHTML = array
    result.appendChild(div)

    return array
}

function showBooleans(){

    clearFields()

    const array = arr.filter((element, index, array) => {
        console.log(`Index: ${index}  |  Value: ${element} | ${array[index]}`)
        return typeof element === 'boolean'
    })
    
    let result = document.querySelector('#result')
    let div = document.createElement('div')
    div.innerHTML = array
    result.appendChild(div)

    return array
}


