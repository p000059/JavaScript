"use restrict"

function verifyNumberOne(num) {
    
    return new Promise((resolve, reject) => {
        
        if (num == 2) {
            
            resolve(console.log(`O número é ${num}`))
            resolve(document.querySelector('#reject-01').innerHTML = `O número é: ${num}`)

        } else {
            
            reject(new Error('Falhou'))
            reject(new Error(document.querySelector('#reject-01').innerHTML = "Falhou"))

        }
    })
}

function verifyNumberTwo(num) {

    return new Promise((resolve, reject) => {

        if(num == 2){

            resolve(console.log(`O número é ${num}`))
            resolve(document.querySelector('#reject-02').innerHTML = `O número é ${num}`)
        } else{

            reject(new Error('Reject, Falhou'))
            reject(document.querySelector('#reject-02').innerHTML = `Reject, Falhou`)
        }
    })
}

verifyNumberOne(2)
verifyNumberTwo(3)

/* Reject */
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

b.then((v) => console.log(`O resulto é ${v}`))
.catch((err) => console.log(err))