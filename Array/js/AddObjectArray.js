
let num = [5, 9, 4]
let fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];

const btnShowArray = document.getElementById('show-array')
btnShowArray.addEventListener('click', () => document.getElementById('array').innerHTML = fruits)

const btnAddObject = document.getElementById('add-object')
btnAddObject.addEventListener('click', function (e) {
    let object = document.getElementById('object-array').value
    e.stopPropagation()
    fruits.push(object)
})


