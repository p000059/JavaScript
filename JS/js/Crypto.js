let arrayEncWord = [];
let arrayDecWord = [];

function clearEncryptField() {

    document.getElementById('EncryptWord').value = "";
}

function clearDecryptField() {

    document.getElementById('DescryptWord').value = "";
}

function encryptWord() {

    let encWord = document.getElementById('EncryptWord');

    arrayEncWord.push(encWord);

    clearEncryptField();
}

function decryptWord() {

    let decWord = document.getElementById('DescryptWord');

    arrayDecWord.push(decWord);

    clearDecryptField();
}

function listEncryptWord() {

    listTBodyEncryptWord();

}

function listDecryptWord() {

    return arrayDecWord;
}

function listTBodyEncryptWord() {

    let table = document.getElementById('tableEncryptWord');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = arrayEncWord;
    tr.appendChild(td);

    tbody.appendChild(tr);
    table.className = "table table-striped table-bordered table-hover";
    table.appendChild(tbody);
}

function listTBodyDecryptWord() {

}