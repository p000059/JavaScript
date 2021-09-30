/*  
    Escreva um código que imprima um quadrado de asteriscos onde:
    - a quantidade de asteriscos por linha é o valor da variável
    - e a quantidade de linhas também é o valor da variável

    Quando o valor de n é 5:

    *****
    *****
    *****
    *****
    *****
*/

let n = 2;

function imprimaQuadradosAsterisco(n){

    
    for(let i = 0; i < n; i ++){
        for(let j = 0; j < n; n++){
            console.log("*");
        }
    }

}

imprimaQuadradosAsterisco(n);