"use restrict"

const msg = "Esperando função 'sum()' com Delay!"

function sumDelay(a, b) {

    return new Promise(resolve => {

        setTimeout(function () {

            resolve(a + b)

        }, 5000)
    })
}

console.log(msg)
document.querySelector('#await-01').innerHTML = msg

async function resultSum(a, b, c) {

    let x = sumDelay(a, c)
    let y = b

    return await x + y
}

resultSum(1, 2, 3).then(value => console.log(`Resultado da Soma: ${value}`))
resultSum(1, 2, 3).then((value) => document.querySelector('#await-01').innerHTML = `Resultado da Soma: ${value}`)


/* Async Await */
function resolveDelay(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('Resolveu a promise')
        }, 3000)
    })
}

async function callAsync(){
    console.log('Chamando a promise e esperando ao resultado.')
    const result = await resolveDelay()
    console.log(`O resultado chegou: ${result}`)
}

callAsync()

