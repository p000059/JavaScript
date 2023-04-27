function showOption() {

    let table = document.querySelector('table');
    let tbody = document.createElement('tbody');

    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let td1 = document.createElement('td');

    td.innerHTML = createOption();
    td1.innerHTML = returnSortNumber();
    tr.appendChild(td);
    tr.appendChild(td1);
    tbody.appendChild(tr);
    table.appendChild(tbody);

}

function makeBet() {

    if (returnSortNumber() == createOption()) {

    }
}

function createOption() {

    let number1 = document.getElementById('textNumber1').value;

    parseInt(number1);

    console.log(number1);

    return number1;
}

function clearFields() {

    document.getElementById('textNumber1').value = "";
}

function returnSortNumber() {

    let cnpj = 38300599000151;
    let numberSort = 0;
    numberSort = Math.round(Math.random() * 100000000);

    let convertString = cnpj + ""
    let convertNumberSort = numberSort + "";
    // replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}))/, "$1.$2.$3/$4-$5") -> CNPJ
    // replace(/^(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4") -> Sort Number

    console.log(convertNumberSort.replace(/^(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3-$4"));

    return convertNumberSort.replace(/^(\d{2})(\d{2})(\d{2})(\d{2})/, "$1-$2-$3-$4");
}