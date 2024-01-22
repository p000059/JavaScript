"use restrict"

/* setTimeout */
const msg = "Executou uma ação."
const msg01 = "Executou outra ação."
const msg02 = "Executou a ação assíncrona."

console.log(msg)
document.querySelector('#basic-01').innerHTML = msg

setTimeout(function () {
    console.log(msg02)
    document.querySelector('#basic-02').innerHTML = msg02
}, 6000)

console.log(msg01)
document.querySelector('#basic-03').innerHTML = msg01

/* Resolve */
const msg03 = "Continue..."
let p = Promise.resolve(5)

console.log(msg03)
document.querySelector('#basic-04').innerHTML = msg03

console.log(p)
document.querySelector('#basic-05').innerText = p

p.then((value) => { return value + 5 })
    .then((value) => { console.log(value + 10) })

p.then((value) => { return value + 5 })
    .then((value) => { document.querySelector('#basic-06').innerHTML = value + 10 })

/* More Resolve */
let a = 4
let b = 6
let result = Promise.resolve(a * b)

result.then((value) => console.log(`More Resolve: ${value}`))
result.then((value) => document.querySelector('#basic-07').innerHTML = `More Resolve: ${value}`)