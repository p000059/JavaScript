let p = Promise.resolve(new Error('Não deu Certo'))

console.log('Continue...')

p.then((value) => { console.log(value) })
    .catch(reason => console.log(`Falhou: ${reason}`))