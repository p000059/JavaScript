var numeros = [0,1,2,3,4,5,6,7,8,9,10]
let total = 0;

function soma(item){
    total = total + item;
    return total;
}

for(let i in numeros){
    console.log(soma(numeros[i]));
}









