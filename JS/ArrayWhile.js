let arrayWhile = [];
let randomNumber = 0;

function generateRamdomInteger(max) {
    return parseInt(Math.random() * max)
}

function onLoadNumber(){
    let i = 0;
    while(arrayWhile <= 50){
        randomNumber = generateRamdomInteger(50)        
        if(arrayWhile.indexOf(randomNumber) < 0){
            arrayWhile.push(randomNumber);
        }
        i++;
    }
    console.log("Variable i: " + i)
}

console.log(arrayWhile)


