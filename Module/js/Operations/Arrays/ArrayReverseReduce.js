const data = [
    { name: "Marcelo", age: '40', sallary: 2000, driverLicense: true },
    { name: "Mauricio", age: '41', sallary: 2300, driverLicense: true },
    { name: "Ruth", age: '35', sallary: 2500, driverLicense: true },
    { name: "Lucas", age: '28', sallary: 2700, driverLicense: false },
    { name: "Gabriela", age: '35', sallary: 3000, driverLicense: false }
]

const reverse_array = document.querySelector('#reverse-array')
reverse_array.addEventListener('click', () => { showThead(), showTbody(showReverse()) })

function showReverse() {
    clearTable()
    return data.reverse()
}

function tableReverse(array) {
    let table = document.querySelector('#table')
    let tbody = document.querySelector('#tbody')

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

/* const reduce_array = document.querySelector('#reduce-array')
reduce_array.addEventListener('click', () => showReduce())

function showReduce() {
    let arrayReduce = data.reduce(function (index, value) {
        let valueActual = value[0]
        if (arrayReduce[valueActual]) {
            arrayReduce[index]++
        }
        return arrayReduce
    })
    document.getElementById('reduce').value = arrayReduce
} */

const show_array = document.querySelector('#show-array')
show_array.addEventListener('click', () => { showThead(); showTbody(data) })

function showThead() {
    let table = document.querySelector('#table')
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

function showTbody(array) {

    let table = document.querySelector('#table')
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
}



const clear_tbody = document.querySelector('#clear-tbody')
clear_tbody.addEventListener('click', (event) => {
    event.stopPropagation()
    event.preventDefault()
    clearTable()
})

function clearTable() {
    document.querySelector('#table').innerHTML = ''
}