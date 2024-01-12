document.addEventListener('DOMContentLoaded', function () {

    let registerObject = document.querySelector('#register-object')
    let showObject = document.querySelector('#show-object')
    let clearFields = document.querySelector('#clear-fields')
    let clearResult = document.querySelector('#clear-result')
    let copy = document.querySelector('#copy')
    let prop = document.querySelector('#prop')


    registerObject.addEventListener('click', register)
    showObject.addEventListener('click', showObjects)
    clearFields.addEventListener('click', clearField)
    clearResult.addEventListener('click', clearResults)
    copy.addEventListener('click', copyObject)
    prop.addEventListener('click',showPropertiesObject)
});

function clearField() {

    document.querySelector('#property-one').value = ''
    document.querySelector('#property-two').value = ''

}

function clearResults(){
    document.querySelector('#result').innerHTML = ''
    document.querySelector('#values').innerHTML = ''
}

function register() {

    let prop1 = document.querySelector('#property-one').value;
    let prop2 = document.querySelector('#property-two').value;

    let propertyOneCapitalize = prop1.toUpperCase()
    let propertyTwoCapitalize = prop2.toUpperCase()

    let data = {
        name: propertyOneCapitalize,
        lastName: propertyTwoCapitalize
    }

    return data
}

function copyObject(){

    const objectOne = {
        a:"test",
        b:true
    }

    const objectTwo = {
        c:[1,2,3]
    }

    Object.assign(objectTwo, objectOne)
    document.querySelector('#result').innerHTML = `objectTwo.a = ${objectTwo.a} <br>objectTwo.b = ${objectTwo.b} <br>objectTwo.c = ${objectTwo.c}`
    console.log(objectTwo)
}

function showObjects() {

    document.querySelector('#result').innerHTML = `Object Keys: ${Object.keys(register())}` 
    document.querySelector('#values').innerHTML = `Object Values: ${register().name} , ${register().lastName}`

}

function showPropertiesObject(){

    const objectOne = {
        a:"test",
        b:true
    }

    const objectTwo = {
        c:[1,2,3]
    }

    Object.entries(objectTwo)
    document.querySelector('#result').innerHTML = `objectTwo = ${Object.entries(objectTwo)}`
    document.querySelector('#values').innerHTML = `objectOne = ${Object.entries(objectOne)}`
    console.log(Object.entries(objectTwo))
}






