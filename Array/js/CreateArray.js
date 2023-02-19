
let arrayData = new Array();
let jsonObj = {"name":"Marcelo","email":"marcelo.guimba@gmail.com","password":"dxdiag"}
localStorage.setItem('jsonObj', JSON.stringify(jsonObj))

const id_register = document.getElementById('id-register')
id_register.addEventListener('click', () => registerArray())

function registerArray() {    
    valuesObject = insertValues()
    arrayData.push(valuesObject)
    
    //Object into a String JSON
    const objJsonString = JSON.stringify(arrayData)
    
    //JSON String into Javascript Object
    const objJavaScript = JSON.parse(objJsonString)
    
    console.log(objJsonString)
    console.log(objJavaScript)
    
    return arrayData
}

function insertValues(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let objData = new Object();
    
    objData.name = name
    objData.email = email
    objData.password = password
    
    return objData
}
