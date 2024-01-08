async function sum(a, b){
    return a * b;
}

console.log(sum(3,3))

sum(3,3).then(value => console.log(value))