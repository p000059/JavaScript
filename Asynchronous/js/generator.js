"use restrict"

function* creatorID(){

    let id = 0;
    while(true){
        yield id++
    }
}

let run = creatorID()

console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)
console.log(run.next().value)

/* Generator Simple */
function* generator(){
    yield 1;
    yield 2;
}

const gen = generator()

console.log('\n\n\n')
console.log(gen.next().value)
console.log(gen.next().value)