document.addEventListener('DOMContentLoaded', function () {

    let registerObject = document.querySelector('#register-object')
    let showObject = document.querySelector('#show-object')
    let clearFields = document.querySelector('#clear-fields')


    registerObject.addEventListener('click', register)
    showObject.addEventListener('click', showObjects)
    clearFields.addEventListener('click', clearField)
});

function clearField() {

    document.querySelector('#property-one').value = ''
    document.querySelector('#property-two').value = ''

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

function showObjects() {

    document.querySelector('#result').innerHTML = `Object Keys: ${Object.keys(register())}` 
    document.querySelector('#values').innerHTML = `Object Values: ${register().name} , ${register().lastName}`
}






