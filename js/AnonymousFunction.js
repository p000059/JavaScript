var power = function(base, exponent) {

    var result = 1;

    for (let count = 0; count < exponent; count++) {
        result = result * base;
    }

    return result;
}

//Essa função anônima retorna um resultado para a variável makeNoise.
var makeNoise = function() {
    var msg = "Pling!";
    return msg;
}

//Essa função anônima recebe um parâmetro e retorna um resultado de acordo com a condição estabelecida no if.
var retornaResultado = function(n) {
    if (n % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

//Essa função utiliza de parâmetros opcionais 
var retornaResultado = function(x = 2, y = 3) {
    if (x !== y) {
        return x + y;
    } else if (x === y) {
        return x - y;
    }
}

//Retorna o fatoria de um número.
function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

//Retorna o array para uma tabela
function showArray() {

    let idTable = document.getElementById('idTable');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let trThead = document.createElement('tr');
    let trTbody = document.createElement('tr');
    let th = document.createElement('th');
    let td = document.createElement('td');

    td.innerHTML = "Array[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]";
    trTbody.appendChild(td);
    tbody.appendChild(tr);

    th.innerHTML = "Cabeçalho";
    trThead.appendChild(th);
    thead.appendChild(trThead);

    table.className = "table table-bordered table-hover table-striped";
    table.appendChild(thead);
    table.appendChild(tbody);

    idTable.appendChild(table);
}

function arrayMap() {

    const stringToInt = (x) => parseInt(x);
    const arrayResult = arrayObject.map(stringToInt);
    document.getElementById('')
}

function bodyMap() {
    document.getElementById('carregando').innerHTML = '<a href="pages/Map.html" >Map</a>';
}