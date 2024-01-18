import { showTbody } from '/JavaScript/Module/js/Publics/table.js'

let arrayObj = new Array();

const clearFields = document.querySelector('#clear-fields')
clearFields.addEventListener('click', function () {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('fone').value = "";
    document.getElementById('cpf').value = "";
})

const btnCreateObject = document.querySelector('#save')
btnCreateObject.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;
    let cpf = document.getElementById('cpf').value;

    let objPerson = new Object()

    objPerson.name = name;
    objPerson.email = email;
    objPerson.fone = fone;
    objPerson.cpf = cpf;

    arrayObj.push(objPerson);
    console.log(arrayObj)
})

const clearTbody = document.querySelector('#clear-tbody')
clearTbody.addEventListener('click', () => clearTbodyExe())

const show = document.querySelector('#show')
show.addEventListener('click', (event) => showTbody(event, '#result-tbody', arrayObj))

function clearTbodyExe() {
    document.getElementById('result-tbody').innerHTML = ''
}
