"use strict"

async function sum(a, b) {
    return a + b;
}

async function mostrarResultado() {
    try {

        const resultado = await sum(3, 3);

        console.log(resultado)
        document.querySelector('#async-01').textContent = `Resultado: ${resultado}`;

    } catch (erro) {

        console.log(erro)
        document.querySelector('#async-01').textContent = "Ocorreu um erro ao calcular a soma.";
    }
}

mostrarResultado();

/* Simple */
sum(7, 6).then(value => document.querySelector('#async-02').textContent = `Resultado: ${value}`)
sum(7, 6).then(value => console.log(value))



const varPromise = Promise.resolve(5 * 150)

console.log('Primeira Ação')

varPromise.then((value) => {
    console.log(`Sum:${value}`)
    return value
})
    .then(value => value - 1)
    .then(value => `Agora é: ${value}`)

console.log('Segunda Ação')

/* Async */
async function operationDelay(a,b){
    return a * b
}

operationDelay(2,56).then((value) => {
    console.log(`Value: ${value}`)
})