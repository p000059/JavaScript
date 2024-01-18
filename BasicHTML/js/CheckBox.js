var numberList = [];
var listThead = ["Fator", "Produto"];

function showResult() {
    createTable();
}

function clearFields() {

    document.getElementById('fator1').innerHTML = "";
    document.getElementById('fator2').innerHTML = "";
    document.getElementById('fator3').innerHTML = "";
    document.getElementById('fator4').innerHTML = "";
    document.getElementById('fator5').innerHTML = "";
    document.getElementById('fator6').innerHTML = "";
    document.getElementById('fator7').innerHTML = "";
    document.getElementById('fator8').innerHTML = "";
    document.getElementById('fator9').innerHTML = "";
    document.getElementById('fator10').innerHTML = "";
}

function createTable() {

    let idTable = document.getElementById('idTable');
    let table = document.createElement('table');


    table.className = "table table-striped table-bordered table-hover";
    table.appendChild(createThead());
    table.appendChild(createTbody());
    idTable.appendChild(table);
}

function createThead() {

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    for (let i = 0; i < listThead.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = listThead[i];
        tr.appendChild(th);
    }

    thead.className = "table-success";
    thead.appendChild(tr);

    return thead;
}

function createTbody() {

    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    for (let i = 0; i < numberList.length; i++) {
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = numberList[j] * i;
            tr.appendChild(td);
        }
    }

    tbody.appendChild(tr);
    return tbody;
}

function captureCheckBox() {

    let fator1 = document.getElementById('fator1').value;
    // let fator2 = document.getElementById('fator2').value;
    // let fator3 = document.getElementById('fator3').value;
    // let fator4 = document.getElementById('fator4').value;
    // let fator5 = document.getElementById('fator5').value;
    // let fator6 = document.getElementById('fator6').value;
    // let fator7 = document.getElementById('fator7').value;
    // let fator8 = document.getElementById('fator8').value;
    // let fator9 = document.getElementById('fator9').value;
    // let fator10 = document.getElementById('fator10').value;

    numberList.push(fator1);

    return fator1;
}