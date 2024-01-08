function sumDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(a+b)
        }, 3000)
    })
}

async function resultSum(a,b,c){

    let x = sumDelay(a,b)
    let y = c

    return await x + y
}

resultSum(1,2,3).then(value => console.log(value))