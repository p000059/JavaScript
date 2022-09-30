function showCheckBox() {

    document.getElementById('idTable').innerHTML = registerCheckBox();
}

function registerCheckBox() {

    let fator1 = document.getElementById('fator1').value;
    let fator2 = document.getElementById('fator2').value;
    let fator3 = document.getElementById('fator3').value;
    let fatores = [];

    fatores.push(fator1);
    fatores.push(fator2);
    fatores.push(fator3);

    return fatores;
}

function clearFields() {


}