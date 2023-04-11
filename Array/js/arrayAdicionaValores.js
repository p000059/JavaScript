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

let n = 3;

function imprimaQuadradosAsterisco(n){

    for (var index = 0; index < n; index++) {
        
        var linhaDeAsteriscos = '';
      
        for (var linha = 0; linha < n; linha++) {
          linhaDeAsteriscos = linhaDeAsteriscos + '*';
        }
      
        console.log(linhaDeAsteriscos);
    }
}

imprimaQuadradosAsterisco(n);