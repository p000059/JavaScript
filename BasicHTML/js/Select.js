var optionList = ["", "Opção de Texto - 1", "Opção de Texto - 2", "Opção de Texto - 3", "Opção de Texto - 4", "Opção de Texto - 5", "Opção de Texto - 6"];
var theadValue = ["Opções Selecionadas"];
var optionListChoise = [];

showSelect();

function showSelect() {

    let select = document.querySelector('select');

    for (let i = 0; i < optionList.length; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = optionList[i];
        select.appendChild(option);
    }
    console.log(select);
}

function createOption() {

    let option = document.getElementById('idSelect').value;
    optionListChoise.push(option);
}

function showOption() {
    document.getElementById('selectChoise').innerHTML = optionListChoise;
}

function clearFields() {
    document.getElementById('idSelect').value = "";
}