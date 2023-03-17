var maximum_experience = 'maximum experience'
document.querySelector('#string-simple').innerHTML = maximum_experience

var edit_string = document.querySelector('#btn-edit-string')
edit_string.addEventListener('click', function () {
    let string_show = document.getElementById('#string-simple')
    console.log(string_show)
})

var btnInterpolation = document.querySelector('#btnInterpolation')
btnInterpolation.addEventListener('click', function () {
    let stringInterpolation = 'Experience'
    let stringInterpolationAdd = `Maximum ${stringInterpolation}`
    document.querySelector('#string-interpolation').value = stringInterpolationAdd
})

var btnSubstring = document.querySelector('#btnSubstring')
btnSubstring.addEventListener('click', function () {
    let subString = 'MMMMarcelo Guimbaaaa'
    let subStringResult = subString.substring(3, 17)
    document.querySelector('#sub-string').value = subStringResult
})

var btnCapitalize = document.querySelector('#btnCapitalize')
btnCapitalize.addEventListener('click', function () {
    let stringCapitalize = 'marcelo guimba'
    let firstName = stringCapitalize[0].toUpperCase() + stringCapitalize.substring(1, 7)
    let lastName = stringCapitalize[8].toUpperCase() + stringCapitalize.substring(9)
    document.querySelector('#string-capitalize').value = `${firstName} ${lastName}`
})

var btnFirstCharacter = document.querySelector('#btnFirstCharacter')
btnFirstCharacter.addEventListener('click', function () {
    let maximumCharacter = 'maximum character'
    let firstCaracter = maximumCharacter.substring(0, 1)
    document.querySelector('#first-caracter').value = firstCaracter
})

var btnLastCharacter = document.querySelector('#btnLastCharacter')
btnLastCharacter.addEventListener('click', function () {
    let stringCharacter = 'Maximum Experience'
    let lastCharacter = stringCharacter[stringCharacter.length - 1]
    document.querySelector('#last-character').value = lastCharacter
})

var btnLowerCase = document.querySelector('#btnLowerCase')
btnLowerCase.addEventListener('click', function () {
    let stringLowerCase = 'MAXIMUM EXPERIENCE'
    let lowerCase = stringLowerCase.toLocaleLowerCase()
    document.querySelector('#lower-case').value = lowerCase
})

var btnUpperCase = document.querySelector('#btnUpperCase')
btnUpperCase.addEventListener('click', function () {
    let stringUpperCase = 'maximum experience'
    let upperCase = stringUpperCase.toUpperCase()
    document.querySelector('#upper-case').value = upperCase
})

var btn_capitalize = document.querySelector('#btn-capitalize')
btn_capitalize.addEventListener('click', function () {
    let string_captalize = 'maximum'
    let stringResult = string_captalize[0].toUpperCase() + string_captalize.substring(1)
    document.querySelector('#stringcapitalize').value = stringResult
})
