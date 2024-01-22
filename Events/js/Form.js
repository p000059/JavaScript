var form = document.querySelector('form')
var fname = document.querySelector('#fname')
var lname = document.querySelector('#lname')
var submit = document.querySelector('#submit')
var p = document.querySelector('p')

form.onsubmit = function (e){
    if(fname.value === '' || lname.value === ''){
        e.preventDefault();
        p.textContent = 'You need to fill in both fields!'
    }
}

//form.addEventListener('onsubmit', validate)

/* function validate(e){
    if(fname.value === '' || lname.value === ''){
        e.preventDefault();
        p.textContent = 'You need to fill in both names!'
    }
} */
