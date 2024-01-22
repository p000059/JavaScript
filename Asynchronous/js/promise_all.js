"use restrict"

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(11)
    }, 3000)
})

const p2 = Promise.resolve(50)

const p3 = new Promise((resolve, reject) => {
    resolve(10)
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))

Promise.all([p1,p2,p3]).then((values) => document.querySelector('#promise-01').innerHTML = values)



const p4 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    },6000)
})

const p5 = Promise.resolve(10 * 15)

const p6 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else {
        reject("Erro!")
    }
})

Promise.all([p4,p5,p6]).then((values) => console.log(values))

Promise.all([p4,p5,p6]).then((values) => document.querySelector('#promise-02').innerHTML = values)