(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const arr = [1, 5, 10, 20, 37, "hello", true]

document.getElementById('input-foreach').value = arr

function showFilter() {
    console.clear()
    const array1 = arr.filter(function (el, i, array) {
        console.log(`Index: ${i}  |  Value: ${el}`)
        return typeof el === 'number'
    })

    createTable(array1)

    document.getElementById('input-foreach').value = array1
    console.log(`Array Full: ${arr}`)
    console.log(`Only Numbers: ${array1}`)

    return array1
}

function createTable(array) {
    let div = document.getElementById('tableArray')
    let table = document.createElement('table')
    let tr = document.createElement('tr')

    array.forEach(element => {
        let td = document.createElement('td')
        td.innerHTML = element
        tr.appendChild(td)
    });

    table.appendChild(tr)
    div.appendChild(table)
}

