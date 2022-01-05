let arrayVariable = [];

function showArray() {

    document.getElementById('idTable').innerHTML = addArray();
}

function createDiv() {

    let divCol = document.getElementById('divForm');
    let div = document.createElement('div');
    div.className = "input-group bt-2 mt-2";

    let span = document.createElement('span');
    span.className = "input-group-text";
    span.innerHTML = "Variable";

    let input = document.createElement('input');
    input.className = "form-control";
    input.type = "text";
    input.id = "variable" + 1;
    input.placeholder = "Digite uma Variavel";

    div.appendChild(span);
    div.appendChild(input);
    divCol.appendChild(div);
}

function returnCount() {
    let i = 0;
    i + 1;
    return i;
}

function registerArray() {

    let variableText = document.getElementById('variableOne').value;
    addArray(variableText);
}

function addArray(dataValue) {

    arrayVariable.push(dataValue);

    return arrayVariable;
}

function clearFields() {

    document.getElementById('variableOne').value = "";
}