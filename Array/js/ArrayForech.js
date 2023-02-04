(function(){
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const array = [2,4,6,8,10,'two','four','six','eight','ten']

function showArray(){
    let div = document.getElementById('table-foreach')
    let table = document.createElement('table')
    let tr = document.createElement('tr')
    
    array.forEach((i,array) => {
        let td = document.createElement('td')
        td.innerHTML = i
        tr.appendChild(td)
    })
    
    table.appendChild(tr)
    div.appendChild(table)
}
