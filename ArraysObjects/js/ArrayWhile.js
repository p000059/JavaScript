let arrayWhile = [];
let randomNumber = 0;


const random_number = document.getElementById('random-number')
random_number.addEventListener('click', function(){
     let number = parseInt(Math.random() * 20)
     arrayWhile.push(number)
     document.getElementById('number').value = arrayWhile
})

