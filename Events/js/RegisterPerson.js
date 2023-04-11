const arrayObject = []

const clear_form = document.getElementById('clear-form')
clear_form.addEventListener('click', () => clearFields())

function clearFields() {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
}

const form_control = document.getElementById('form-control')
form_control.addEventListener('submit', function(e){
    e.preventDefault()
    addObject()
})

function addObject(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    let objectPerson = new Object()
    objectPerson.name = name
    objectPerson.email = email

    arrayObject.push(objectPerson)
}

console.log(arrayObject)

const show_object = document.getElementById('show-object')
show_object.addEventListener('click', () => showObject()) 

function showObject(){
    console.log(arrayObject)
    
    document.getElementById('object-array').innerHTML = arrayObject[0].name
}