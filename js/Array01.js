
let num = [5,9,4] // cria uma variável do tipo array
console.log("Adiciona na posição 3 o valor 7 = " + (num[3] = 7))  // adiciona na posição 3 o valor de 7 no array
console.log("Adiciona na ultima posição = " + num.push(8)) // adiciona na última posição o valor 8
console.log("Tamanho do Array = " + num.length) //retorna o valor do tamanho do array 
console.log("Ultima posição do Array = " + num[num.length -1]) //retorna a ultima posição do array
let total = 0;

console.log("\n\n")

let fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];

for(let i = 0; i < fruits.length; i ++){
    console.log(fruits[i]);
}

console.log("\n\n");

for(let i in fruits){
    console.log(fruits[i].toUpperCase());
}

console.log("\n\n");


