let arrayMultType = [39, "40", true];

function showArray() {

    listArray();
}

function listArray() {

    let list = document.getElementById("list");
    let ul = document.createElement("ul");

    for (let i in arrayMultType) {

        let li = document.createElement("li");
        li.innerHTML = arrayMultType[i];
        ul.appendChild(li);
    }

    list.appendChild(ul);
}

