function* creatorID(){

    let id = 0;
    while(true){
        yield id++
    }
}

let run = creatorID()

console.log(run.next().value)
console.log(run.next().value)