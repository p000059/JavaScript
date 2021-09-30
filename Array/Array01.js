

let fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("tamanhoArray").innerHTML = fruits.length; //retorna o tamanho total do array
document.getElementById("elemento_0").innerHTML = fruits[0]; //Retorna o primeiro elemento do array
document.getElementById("elementoFinal").innerHTML = fruits[fruits.length - 1]; //retorna o último elemento do array

//O for abaixo, em maneira de programação imperativa, retorna os elementos de um array.
for(let i = 0; i < fruits.length; i++){
    document.getElementById("arrayTotal").innerHTML = fruits[i];
}

//O for abaixo vai retornar os valores de um array de forma mais simples.
for(let i in fruits){
    console.log(fruits[i]);
}


