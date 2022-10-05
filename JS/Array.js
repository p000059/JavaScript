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
    let cpf = document.getElementById('cpf').value;

    let objPerson = new Object()

    objPerson.name = name;
    objPerson.email = email;
    objPerson.fone = maskFoneInput(fone);
    objPerson.cpf = maskCPFinput(cpf);

    arrayObj.push(objPerson);
}

function maskFoneInput(fone) {

    if (fone.length === 11) {

        fone = fone.replace(/D/g, ""); //Remove tudo o que não é dígito
        fone = fone.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1)$2-$3");

    } else if (fone.length !== 10) {

        fone = fone.replace(/D/g, ""); //Remove tudo o que não é dígito
        fone = fone.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1)$2-$3");
    }

    return fone;
}

function maskCPFinput(cpf) {

    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

    return cpf;
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

function listAllObjects() {

    clearTable();

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

    return tbody;
}

function clearTable() {

    let tbody = document.getElementById('resultTbody');

    tbody.innerHTML = "";
}