(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arrayEven = [0, 2, 4, 6, 8]
const arrayOdd = [1, 3, 5, 7, 9]

document.getElementById('arrayEven').innerHTML = `ArrayEven[ ${arrayEven.toString()} ]`

function showReverse(){
    let arrayReverse = arrayEven.reverse()
    document.getElementById('reverse').value = arrayReverse
}

function showReduce(){

}
