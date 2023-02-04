(function(){
    let dateFull = new Date()
    let year = dateFull.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arr = [1,5,10,"hello",true]

function showArray(){
    document.getElementById('resultArray').value = arr
    let number = arr.every( function(el){return typeof el === 'number'})
    console.log(number)
    
    let sum = arr.some(function(el){return typeof el === 'number'})
    document.getElementById('resultArray').value = sum
}
