const array = [2, 4, 6, 8, 10, 'two', 'four', 'six', 'eight', 'ten']
const rows = [['Carbs', '17g'], ['Protein', '19g'], ['Fat', '5g']]

const showTable = document.querySelector('#show-table')
showTable.addEventListener('click', () => showTableArray())

function showTableArray() {
    let idTable = document.querySelector('#id-table')
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')

    rows.forEach((row) => {
        console.log(row)
        let tr = document.createElement('tr')
        for(let i in row){
            let td = document.createElement('td')
            td.innerText = row[i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })

    table.className = 'tables'
    table.appendChild(tbody)
    idTable.appendChild(table)
}

const btnShowArray = document.getElementById('show-array')
btnShowArray.addEventListener('click', () => showArray())

function showArray() {
    let div = document.querySelector('#table-foreach')
    let table = document.createElement('table')
    let tr = document.createElement('tr')

    array.forEach((i) => {
        let td = document.createElement('td')
        td.innerHTML = i
        tr.appendChild(td)
    })

    table.appendChild(tr)
    div.appendChild(table)
}

const elements = [10, 8, 13, 23, -3, -5, -4];
const divShowArrayForeach = document.querySelector('#show-array-foreach')
const showArrayForeach = document.querySelector('#btn-show-array')

showArrayForeach.addEventListener('click', function () {
    elements.forEach(callBackElements)
})

const numberEven = document.querySelector('#number-even')
const btnEvenNumber = document.querySelector('#btn-show-even')

btnEvenNumber.addEventListener('click', function () {
    let div = document.createElement('div')
    div.innerHTML = showEvenNumber()
    numberEven.appendChild(div)
})

const positiveNumber = document.querySelector('#positive-number')
const btnShowPositiveNumber = document.querySelector('#btn-show-positive-number')
btnShowPositiveNumber.addEventListener('click', () => {
    let div = document.createElement('div')
    div.innerText = showPositiveNumber()
    positiveNumber.appendChild(div)
})

const sumOddNumber = document.querySelector('#sum-odd-number')
const btnShowSumOdd = document.querySelector('#btn-show-sum-odd')
btnShowSumOdd.addEventListener('click', function () {
    let div = document.createElement('div')
    div.innerText = showAddOddAndNegativeNumbers()
    sumOddNumber.appendChild(div)
})

const showSelect = document.querySelector('#show-select')
showSelect.addEventListener('click', populateSelect())
/* let html = `<option value="">Please select</option>`;
countries.forEach(function (country) {
    html += `<option value="${country.toLowerCase()}">${country}</option>`;
});
return html; */

//All functions have the same result.
elements.forEach((element) => callBackGrade(element));
elements.forEach(callBackGrade)
elements.forEach(function (element) {
    console.log(element)
})

function populateSelect() {
    let option = document.createElement('option')
    elements.forEach((element) => {
        option.innerHTML = element
        showSelect.appendChild(option)
    })
}

function callBackGrade(element) {
    console.log(element)
}

function callBackElements(element) {
    let div = document.createElement('div')
    div.innerHTML = element
    divShowArrayForeach.appendChild(div)
}

function showEvenNumber() {
    let sum = 0
    elements.forEach((number) => {
        if (number % 2 === 0) {
            sum += number
        }
    })
    console.log(sum)
    return sum
}

function showPositiveNumber() {
    let sum = 0
    elements.forEach((element) => {
        if (element > 0) {
            sum += element
        }
    })
    console.log(sum)
    return sum
}

function showAddOddAndNegativeNumbers() {
    let sum = 0
    elements.forEach((element) => {
        if ((element % 2 !== 0)) {
            sum += element
        }
    })
    console.log(sum)
    return sum
}