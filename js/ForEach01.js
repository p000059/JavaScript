//Este programa utiliza uma forma de somar os elementos de um Array utilizando uma função externa para isso.

var numeros = [0,1,2,3,4,5,6,7,8,9,10]
let total = 0;

function soma(item){
    total = total + item;
    //console.log(total);
    return total;
}

numeros.forEach(soma)

