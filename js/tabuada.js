
var lista = [1,2,3,4,5,6,7,8,9,10];
var coluna = [1,2,3,4,5,6,7,8,9,10];


function criaTabuada(lista, coluna){

    var resultado = [];

    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < coluna.length; j++){
            resultado = i + " x " + j + " = " + lista[i] * coluna[j];
            console.log(resultado);
        }
    }
    
}
