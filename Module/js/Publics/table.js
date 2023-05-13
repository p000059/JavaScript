function showTbody(event, idTbody, array) {

    let tbody = document.querySelector(idTbody);

    array.forEach(increment);

    function increment(element) {

        let tr = document.createElement('tr');

        for (let i in element) {

            let td = document.createElement('td');
            td.innerHTML = element[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
    event.innerHTML = tbody
}

function clearTbody(idTbody) {
    document.querySelector(idTbody).innerHTML = ''
}

export { showTbody, clearTbody }