function verifyNumber(num){
    return new Promise((resolve, reject) => {
        if(num == 2){
            resolve(console.log(`O número é ${num}`))
        } else {
            reject(new Error('Falhou'))
        }
    })    
}

verifyNumber(2)
verifyNumber(3)