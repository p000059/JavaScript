let arrayObj = new Array();

const objectPerson = {name:"Marcelo",email:"marcelo.acad@gmail.com"}
arrayObj.push(objectPerson)


const btnclearFields = document.getElementById('btn-clear')
btnclearFields.addEventListener('click', function () {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('fone').value = "";
    document.getElementById('cpf').value = "";
})

const btnCreateObject = document.getElementById('create-object')
btnCreateObject.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;
    let cpf = document.getElementById('cpf').value;

    let objPerson = new Object()

    objPerson.name = name;
    objPerson.email = email;
    objPerson.fone = fone;
    objPerson.cpf = maskCPFinput(cpf);

    arrayObj.push(objPerson);
})

const btnClearTbody = document.getElementById('resultTbody')
btnClearTbody.addEventListener('click', (e) => e.innerHTML = '')

const listAllObjects = document.getElementById('show-objects')
listAllObjects.addEventListener('click', function (e) {
    clearTable()
    e.stopPropagation()
    let tbody = document.getElementById('resultTbody');

    arrayObj.forEach(increment);

    function increment(element) {

        let tr = document.createElement('tr');

        for (let i in element) {

            let td = document.createElement('td');
            td.innerHTML = element[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
    e.innerHTML = tbody
})

const btnClearTable = document.getElementById('clear-table')
btnClearTable.addEventListener('click', () => clearTable())

function clearTable() {
    document.getElementById('resultTbody').innerHTML = ''
}
