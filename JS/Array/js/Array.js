let arrayObj = new Array();

//Arrow Function
// let somar = (a,b) => a+b;
// let somar = function(a,b) => {return a+b;}

// Mascara CNPJ
// replace
// /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/ 
// "$1.$2.$3/$4-$5"

// Mascara CPF
// replace
// /^(\d{3})(\d{3})(\d{3})(\d{2})/ => Mascara CPF
// "$1.$2.$3-$4"

function createObject() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let fone = document.getElementById('fone').value;

    let objPerson = new Object()

    objPerson.name = name;
    objPerson.email = email;
    objPerson.fone = mtel(fone);

    arrayObj.push(objPerson);

    console.log(objPerson);
    console.log(objPerson.name, objPerson.email, objPerson.fone);

}

function mtel(v) {

    if (v.length === 11) {

        v = v.replace(/D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1)$2-$3");

    } else if (v.length !== 10) {

        v = v.replace(/D/g, ""); //Remove tudo o que não é dígito
        v = v.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1)$2-$3");
    }

    return v;
}

function openModal() {

    let modal = document.getElementById('openModal');

    if (typeof modal == 'undefined' || modal == null) {
        return;
    }
    modal.style.display = 'block';

}

function closeModal() {
    let modal = document.getElementById('openModal');

    if (typeof modal == 'undefined' || modal == null) {
        return;
    }
    modal.style.display = 'none';
}

function showArray() {

    let table = document.getElementById('tableArray1');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = arrayObj;
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function clearFields() {

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('fone').value = "";
}