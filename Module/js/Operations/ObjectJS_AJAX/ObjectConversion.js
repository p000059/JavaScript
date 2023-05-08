let celcius = {}
let fahrenheit = {}
let kelvin = {}

let properties = ['celcius','fahrenheit','kelvin']

let celciusToFahrenheit = document.querySelector('#celcius-to-fahrenheit')
celciusToFahrenheit.addEventListener('click', () => celciusToFahrenheitFunc())

let celciusToKelvin = document.querySelector('#celcius-to-kelvin')
celciusToKelvin.addEventListener('click', () => celciusToKelvinFunc())

let fahrenheitToCelcius = document.querySelector('#fahrenheit-to-celcius')
fahrenheitToCelcius.addEventListener('click', () => fahrenheitToCelciusFunc())

let fahrenheitToKelvin = document.querySelector('#fahrenheit-to-kelvin')
fahrenheitToKelvin.addEventListener('click', () => fahrenheitToKelvinFunc())

let kelvinToCelcius = document.querySelector('#kelvin-to-celcius')
kelvinToCelcius.addEventListener('click', () => kelvinToCelciusFunc())

let kelvinToFahrenheit = document.querySelector('#kelvin-to-fahrenheit')
kelvinToFahrenheit.addEventListener('click', () => kelvinToFahrenheitFunc())

function celciusToFahrenheitFunc() {
    celcius.number = document.querySelector('#temperature-celcius-fahrenheit').value
    fahrenheit.name = 'fahrenheit'
    fahrenheit.number = ((celcius.number) * (9 / 5)) + 32
    showTable(fahrenheit)
    console.log(celcius.number)
    console.log(fahrenheit.number)
}

function celciusToKelvinFunc() {
    celcius.number = document.querySelector('#temperature-celcius-kelvin').value
    kelvin.name = 'kelvin'
    kelvin.number = (parseInt(celcius.number) + 273.15)
    showTable(kelvin)
    console.log(celcius.number)
    console.log(kelvin.number)
}

function fahrenheitToCelciusFunc() {
    fahrenheit.number = document.querySelector('#temperature-fahrenheit-celcius').value
    celcius.name = 'celcius'
    celcius.number = ((fahrenheit.number - 32) * (5 / 9))
    showTable(celcius)
    console.log(fahrenheit.number)
    console.log(celcius.number)
}

function fahrenheitToKelvinFunc() {
    fahrenheit.number = document.querySelector('#temperature-fahrenheit-kelvin').value
    kelvin.name = 'kelvin'
    kelvin.number = ((parseInt(fahrenheit.number) - 32)) * (5 / 9) + 273.15
    showTable(kelvin)
    console.log(fahrenheit.number)
    console.log(kelvin.number)
}

function kelvinToCelciusFunc() {
    kelvin.number = document.querySelector('#temperature-kelvin-celcius').value
    celcius.name = 'celcius'
    celcius.number = (kelvin.number - 273.15)
    showTable(celcius)
    console.log(kelvin.number)
    console.log(celcius.number)
}

function kelvinToFahrenheitFunc() {
    kelvin.number = document.querySelector('#temperature-kelvin-fahrenheit').value
    fahrenheit.name = 'fahrenheit'
    fahrenheit.number = ((kelvin.number - 273.15) * (9 / 5)) + 32
    showTable(fahrenheit)
    console.log(kelvin.number)
    console.log(fahrenheit.number)
}

function showTable(obj) {
    clearTable()
    let div = document.querySelector('#idTable')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    table.className = 'table table-bordered'
    thead.className = 'table-success'
    thead.appendChild(showThead(obj))
    tbody.appendChild(showTbody(obj))
    table.appendChild(thead)
    table.appendChild(tbody)
    div.appendChild(table)
}

function showThead(obj) {
    let tr = document.createElement('tr')
    for (let i in obj) {
        let th = document.createElement('th')
        let string_captalize = i
        let stringResult = string_captalize[0].toUpperCase() + string_captalize.substring(1)
        th.innerHTML = stringResult
        tr.appendChild(th)
    }
    return tr
}

function showTbody(obj) {
    let tr = document.createElement('tr')
    for (let i in obj) {
        let td = document.createElement('td')
        if(typeof(obj[i]) === 'string'){
            let string_captalize = obj[i]
            let stringResult = string_captalize[0].toUpperCase() + string_captalize.substring(1)
            td.innerHTML = stringResult
            tr.appendChild(td)
        } else {
            td.innerHTML = obj[i]
            tr.appendChild(td)
        }
    }
    return tr
}

function clearTable(){
    document.querySelector('#idTable').innerHTML = ''
}