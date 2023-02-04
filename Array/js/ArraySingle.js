let arrayData = new Array();
let objData = new Object();

function registerArray() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    objData.name = name.toLowerCase();
    objData.email = email.toLowerCase();
    objData.password = password;

    arrayData.push(objData);

    console.log(objData);
    console.log(objData.name);
    console.log(objData.email);
    console.log(objData.password);
}

function showArray() {

    
    let section = document.getElementById('idTable');
    let table = document.createElement('table');
    let thead = document.createElement('tbody');
    let tr = document.createElement('tr');

    for(i in objData){

        let td = document.createElement('td');
        td.innerHTML = objData[i];
        tr.appendChild(td);
    }

    thead.appendChild(tr);
    table.className = "form-table";
    table.appendChild(thead);
    section.appendChild(table);    
}

function clearFields() {

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
}