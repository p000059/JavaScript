let varName = "";

function registerName() {

    varName = document.getElementById('namePerson').value;
    console.log(`Cadastrador: ${varName}`);
}


function listName() {
    document.getElementById('textDOM').innerHTML = varName;
    console.log(`Listar: ${varName}`);
}

function readyUpdateName() {
    let varName = document.getElementById('textDOM').innerText;
    document.getElementById('namePerson').value = varName;
}

function updateNameAction(varName) {
    return varName;
}

function deleteName() {
    document.getElementById('textDOM').value = "";
}

function clearFields() {
    document.getElementById('namePerson').value = "";
}