const arr = [1, 5, 10, 20, 37, "hello",'friend', true]

document.querySelector('#array-js').innerHTML = `Array [ ${arr} ]`

let btnFilter = document.querySelector('#btn-filter')
btnFilter.addEventListener('click', () => showFilter())

let btnFilterString = document.querySelector('#btn-filter-string')
btnFilterString.addEventListener('click', () => showString())

function showString() {
    console.clear()
    clearTable()
    const array = arr.filter((element, index, array) => {
        if(typeof element === 'string'){
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return typeof element === 'string'
        } else {
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return null
        }
    })
    console.log(`${array}`)
    createTable(array)
    return array
}

function showFilter() {
    console.clear()
    clearTable()
    const array = arr.filter((element, index, array) => {
        console.log(`Index: ${index}  |  Value: ${element} | ${array[index]}`)
        return typeof element === 'number'
    })

    createTable(array)
    return array
}

function createTable(array) {
    let div = document.getElementById('tableArray')
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')

    array.forEach(element => {
        let td = document.createElement('td')
        td.innerHTML = element
        tr.appendChild(td)
    });

    tbody.appendChild(tr)
    table.appendChild(tbody)
    table.className = 'tables'
    div.appendChild(table)
}

function clearTable() {
    document.querySelector('#tableArray').innerHTML = ''
}

