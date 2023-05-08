let arrayObject = ["10", "20", "30", "40", "50", "60", "70"];
let arrayString = ["a", "b", "c"];
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let arrayGrade = [
    { nome: 'nome1', nota1: 5, nota2: 4 },
    { nome: 'nome2', nota1: 4, nota2: 3 },
    { nome: 'nome3', nota1: 7, nota2: 8 },
    { nome: 'nome4', nota1: 2, nota2: 7 },
    { nome: 'nome5', nota1: 9, nota2: 9 },
];

function changeValue() {

    let valorOne = document.getElementById('valueOne').value;

    let multValue = arrayObject.map(valorOne);

    document.getElementById('resultValue').innerHTML = multValue;
}

function showArrayObject() {

    document.getElementById('objArray').innerHTML = showMapVetor();
}

function showMapVetor() {

    let stringToInt = (x) => parseInt(x);
    let vetor2 = arrayObject.map(stringToInt);

    return vetor2;
}

function showMapChange() {

    let stringToInt = arrayObject.map(x => x * x);

    document.getElementById('mult2').innerHTML = stringToInt;
}

function stringToUpper() {

    let stringUpper = arrayString.map(x => x.toUpperCase());
    document.getElementById('mult3').innerHTML = stringUpper;
}

function showNumberEven() {

    let result = arrayNumber.filter(x => x % 2 === 0);

    document.getElementById('showNumberEven').innerHTML = result;
}

function reduceArray() {

    let sumArray = arrayNumber.reduce((aux, item) => aux + item, 0);

    document.getElementById('filterNumber').innerHTML = sumArray;
}

function reduceStudentGrade() {

    let initialState = {
        somaNota1: 0,
        somaNota2: 0,
        qtdNota1: 0,
        qtdNota2: 0,
    };

    const result = arrayGrade.reduce((estado, valor) => {
        return {
            somaNota1: estado.somaNota1 + valor.nota1,
            somaNota2: estado.somaNota2 + valor.nota2,
            qtdNota1: estado.qtdNota1 + 1,
            qtdNota2: estado.qtdNota2 + 1
        };
    }, initialState);
}