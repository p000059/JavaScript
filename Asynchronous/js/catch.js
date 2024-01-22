let p = Promise.resolve(new Error('Não deu Certo'))

console.log('Continue...')

p.then((value) => { console.log(value) })
    .catch(reason => console.log(`Falhou: ${reason}`))

p.then((value) => { document.querySelector('#catch-01').innerHTML = value })
    .catch(reason => console.log(document.querySelector('#cacth-01').innerHTML = `Falhou: ${reason}`))

/* Catch */
function checkNumber(n) {

    return new Promise((resolve, reject) => {

        if (n > 10) {

            resolve('Número maior que 10')

        } else {

            reject(new Error('Número muito baixo.'))
        }
    })
}

const a = checkNumber(10)

const b = checkNumber(20)

a.then((v) => console.log(`O resulto é ${v}`))
    .catch((err) => console.log(err))

a.then((v) => document.querySelector('#catch-02').innerHTML = `${v}`)
    .catch((err) => document.querySelector('#catch-02').innerHTML = `${err}`)

b.then((v) => console.log(`O resulto é ${v}`))
    .catch((err) => console.log(err))

b.then((v) => document.querySelector('#catch-03').innerHTML = `${v}`)
    .catch((err) => console.log(err))

Promise.resolve(4 * "asd")
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error("Valores inválidos")
        }
    })
    .catch((err) => console.log(`${err}`))
