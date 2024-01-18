let array = ['Aula','Estudo','Curso','Diretriz','Operacao','Faculdade','Instituto','Propriedade']

document.addEventListener('DOMContentLoaded', function () {

    let removeElement = document.querySelector('#remove-element')
    let showArray = document.querySelector('#show-array')


    removeElement.addEventListener('click', removeElementPop)
    showArray.addEventListener('click', showArrayPop)
})

function removeElementPop() {

    array.pop()
}

function showArrayPop() {

    document.querySelector('#result').innerHTML = array
}






