(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const data = [
    { name: "Marcelo", age: '40', sallary: 2000, driverLicense: true },
    { name: "Mauricio", age: '41', sallary: 2300, driverLicense: true },
    { name: "Ruth", age: '35', sallary: 2500, driverLicense: true },
    { name: "Lucas", age: '28', sallary: 2700, driverLicense: false },
    { name: "Gabriela", age: '35', sallary: 3000, driverLicense: false }
]

const reverse_array = document.getElementById('reverse-array')
reverse_array.addEventListener('click', () => {showThead(), showReverse()})

function showReverse() {
    let arrayReverse = data.reverse()
    console.log(arrayReverse)
    document.getElementById('table').innerHTML = tableReverse(arrayReverse)
}

function tableReverse(array) {
    let table = document.getElementById('table')
    let tbody = document.createElement('tbody')

    array.forEach(showTbody)

    function showTbody(object) {
        let tr = document.createElement('tr')

        for (let i in object) {
            let td = document.createElement('td')

            td.innerHTML = object[i]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    return table
}

const reduce_array = document.getElementById('reduce-array')
reduce_array.addEventListener('click', () => showReduce())

function showReduce() {
    let arrayReduce = arrayOdd.reduce(function (index, value) {
        let valueActual = value[0]
        if (arrayOdd[valueActual]) {
            arrayOdd[index]++
        }
        return arrayOdd
    })
    document.getElementById('reduce').value = arrayReduce
}

const show_array = document.getElementById('show-array')
show_array.addEventListener('click', () => { showThead(); showTbody() })

function showThead() {
    let table = document.getElementById('table')
    let thead = document.createElement('thead')

    let arrayHead = ['Name', 'Age', 'Sallary', 'Driver License']
    let tr = document.createElement('tr')

    arrayHead.forEach(function (object) {
        let th = document.createElement('td')
        th.innerHTML = object
        tr.appendChild(th)
        thead.appendChild(tr)
    })
    table.appendChild(thead)
}

function showTbody() {

    let table = document.getElementById('table')
    let tbody = document.createElement('tbody')

    data.forEach(showTbody)

    function showTbody(object) {
        let tr = document.createElement('tr')

        for (let i in object) {
            let td = document.createElement('td')

            td.innerHTML = object[i]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
}



const clear_tbody = document.getElementById('clear-tbody')
clear_tbody.addEventListener('click', (e) => {
    e.stopPropagation()
    clearTbody()
})

function clearTbody() {
    document.querySelector('tbody').innerHTML = ''
}