(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arrayEven = [0, 2, 4, 6, 8]
const arrayOdd = [1, 3, 5, 7, 9]

function showToString(){
    let data = arrayEven
    console.log(`Value Array Even: ${data}`)
    document.getElementById('toString').value = data.toString() 
}

function showJoin(){
    let data = arrayOdd
    console.log(`Value Array Odd: ${data.join(' -- ')}`)
    document.getElementById('join').value = data.join(' - ')
}

function showConcat(){
    let data = arrayEven
    console.log(`Value Array Even: ${data.concat(arrayOdd)}`)
    document.getElementById('concat').value = data.concat(arrayOdd)
}

function copyArray(){
    let newArrayEven = [].concat(arrayEven)
    let newArrayOdd = [].concat(arrayOdd)

    document.getElementById('copyArrayEven').value = newArrayEven
    document.getElementById('copyArrayOdd').value = newArrayOdd
}