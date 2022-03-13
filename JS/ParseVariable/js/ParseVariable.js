function executeOperation() {

    let number1 = document.getElementById('variableOne').value;
    let number2 = document.getElementById('variableTwo').value;

    number1 = parseInt(number1);
    returnVariable1(number1);
    number2 = parseFloat(number2);
    returnVariable2(number2);
    return number1 / number2;
}

function returnVariable1(varNumber) {
    return varNumber;
}

function returnVariable2(varNumber) {
    return varNumber;
}

function showResult() {

    let n1 = document.getElementById('variableOne').value;
    let n2 = document.getElementById('variableTwo').value;

    document.getElementById('variable1').innerHTML = n1;
    document.getElementById('variable2').innerHTML = n2;
    document.getElementById('result1').innerHTML = executeOperation();
}

function clearFields() {

    document.getElementById('variableOne').value = "";
    document.getElementById('variableTwo').value = "";
}