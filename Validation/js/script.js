"use strict"

function checkNumber(num){

    const result = Number(num)

    if(Number.isNaN(result)){
        return
    }

    return result
}

debugger

function checkNumberZero(n){

    try {
        
        if(n === 0){
            throw new Error("Invalid! Number zero")
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log(`the number entered was:${n}`)
    }

}

checkNumberZero(0)

debugger

function checkString(name){

    try {
        const result = name
    } catch (error) {
        console.log("Invalid Parameter!")      
    }
}

checkString()