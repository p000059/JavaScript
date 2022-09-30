function showTypeVariable() {

    let number1 = document.getElementById('variableOne').value;
    let number2 = document.getElementById('variableTwo').value;

    document.getElementById('number1').innerHTML = `${typeof number1}`;
    document.getElementById('number2').innerHTML = `${typeof number2}`;
}

function clearFields() {

    document.getElementById('variableOne').value = '';
    document.getElementById('variableTwo').value = '';
}