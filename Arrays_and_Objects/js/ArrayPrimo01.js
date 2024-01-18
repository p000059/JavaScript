
 let frase = "The Lord of The Rings";
 let letra = "o";
    
 function vezesLetraAparece(frase, letra) {
    // Escreva seu código aqui
    
    let count = 0;
    
    for(let i = 0; i < frase.length; i++){
        if(frase[i] == letra){
            count++;
        }
    }
    
    return count;
}

console.log(vezesLetraAparece(frase, letra));