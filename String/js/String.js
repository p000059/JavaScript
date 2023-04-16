function createLabel(object) {
    let label = document.createElement('label')
    label.className = 'labels'
    label.textContent = object
    return label
}

function clearResult(object) {
    document.querySelector(object).innerHTML = ''
}

var btnInterpolation = document.querySelector('#btnInterpolation')
btnInterpolation.addEventListener('click', () => stringInterpolation())

var btnSubstring = document.querySelector('#btnSubstring')
btnSubstring.addEventListener('click', () => showSubtring())

var btnInvertString = document.querySelector('#btn-invert-string')
btnInvertString.addEventListener('click', () => invertString())

var btnCapitalize = document.querySelector('#btnCapitalize')
btnCapitalize.addEventListener('click', () => capitalizeString())

var btnFirstCharacter = document.querySelector('#btnFirstCharacter')
btnFirstCharacter.addEventListener('click', () => firstCharacterString())

var btnLastCharacter = document.querySelector('#btnLastCharacter')
btnLastCharacter.addEventListener('click', () => lastCharacterString())

var btnLowerCase = document.querySelector('#btn-lower-case')
btnLowerCase.addEventListener('click', () => lowerCaseString())

var btnUpperCase = document.querySelector('#btn-upper-case')
btnUpperCase.addEventListener('click', () => upperCaseString())

var btn_capitalize = document.querySelector('#btn-capitalize-one')
btn_capitalize.addEventListener('click', () => stringCapitalize())

var btnVowel = document.querySelector('#btn-vowel')
btnVowel.addEventListener('click', () => vowelCount())

function stringInterpolation() {
    document.querySelector('#result-interpolation').innerHTML = ''
    let stringInterpolation = document.querySelector('#string-interpolation').value
    let stringInterpolationAdd = `Maximum ${stringInterpolation}`
    let result = document.querySelector('#result-interpolation')
    result.appendChild(createLabel(stringInterpolationAdd))
}

function showSubtring() {
    let subString = 'MMMMarcelo Guimbaaaa'
    let subStringResult = subString.substring(3, 17)
    let result = document.querySelector('#sub-string')
    result.appendChild(createLabel(subStringResult))
}

function capitalizeString() {
    let stringCapitalize = 'marcelo guimba'
    let firstName = stringCapitalize[0].toUpperCase() + stringCapitalize.substring(1, 7)
    let lastName = stringCapitalize[8].toUpperCase() + stringCapitalize.substring(9)
    let stringResult = `${firstName} ${lastName}`
    let result = document.querySelector('#string-capitalize')
    result.appendChild(createLabel(stringResult))
}

function firstCharacterString() {
    let maximumCharacter = 'maximum character'
    let firstCaracter = maximumCharacter.substring(0, 1)
    let result = document.querySelector('#first-character')
    result.appendChild(createLabel(firstCaracter))
}

function lastCharacterString() {
    let stringCharacter = 'Maximum Experience'
    let lastCharacter = stringCharacter[stringCharacter.length - 1]
    let result = document.querySelector('#div-last-character')
    result.appendChild(createLabel(lastCharacter))
}

function lowerCaseString() {
    document.querySelector('#lower-case').innerHTML = ''
    let stringLowerCase = document.querySelector('#lower-case').value
    let upperCase = stringLowerCase.toLowerCase()
    let result = document.querySelector('#string-lower-case')
    result.appendChild(createLabel(upperCase))
}

function upperCaseString() {
    document.querySelector('#upper-case').innerHTML = ''
    let stringUpperCase = document.querySelector('#upper-case').value
    let upperCase = stringUpperCase.toUpperCase()
    let result = document.querySelector('#string-upper-case')
    result.appendChild(createLabel(upperCase))
}

function stringCapitalize() {
    let string_captalize = document.querySelector('#string-capitalize-one').value
    let stringResult = string_captalize[0].toUpperCase() //+ string_captalize.substring(1)
    let result = document.querySelector('#string-capitalize-one')
    result.appendChild(createLabel(stringResult))
}

function invertString() {
    document.querySelector('#result-invert').innerHTML = ''
    let stringName = document.querySelector('#invert-string').value
    let resultString = stringName.split('').reverse().join('')
    let result = document.querySelector('#result-invert')
    result.appendChild(createLabel(resultString))
}

function vowelCount(){
    document.querySelector('#result-vowel').innerHTML = ''
    let 
}