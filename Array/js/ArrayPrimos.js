//Programa que identifica se um número é primo ou não.
//Um número primo é divisível por um e por ele mesmo.
//O número de divisores é 2, ou seja, 1 ou ele mesmo.

var numeroPrimo = 7;
var numeroDivisores = 0;
var numerosPrimos = [];

for(let i = 0; i <= numeroPrimo; i++){
    if(numeroPrimo % i == 0){
        numeroDivisores++;
    }
}

if(numeroDivisores == 2){
    console.log("É primo!");
}
else{
    console.log("Não é primo!");
}

