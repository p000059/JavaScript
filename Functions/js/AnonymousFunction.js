(function() {

    $('carregando').ride();

});

let arrayObject = ["10", "20", "30", "40"]

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

function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat;
}

function showArray() {

    let table = document.getElementById('tableArray');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let td = document.createElement('td');

    td.innerHTML = arrayObject;
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
}

function arrayMap() {

    const stringToInt = (x) => parseInt(x);
    const arrayResult = arrayObject.map(stringToInt);
    document.getElementById('')
}

function bodyMap() {
    document.getElementById('carregando').innerHTML = '<a href="pages/Map.html" >Map</a>';
}

const subtrair = (a, b) => a - b;
const aplicacaoOperacao = (a, b, operacao) => operacao(a, b);

let resultado = aplicacaoOperacao(4, 3, subtrair);

console.log(resultado);

const sumX = (x) => (y) => x + y;

const sumTwo = sumX(2);

console.log(sumTwo(5));

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.header-tab'), //class of your tab button
        info = document.querySelector('.header'), //class of  your menu with tab buttons
        tabContent = document.querySelectorAll('.tab-content'); //class of your tab with some content

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('header-tab')) { //class of your tab button
            for (let i = 0; i < tab.length; i++) {
                tab[i].classList.remove('show'); //if you want to delete some styles from unactive button
                event.target.classList.add('show'); //if you want to add some styles on active button
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });


});