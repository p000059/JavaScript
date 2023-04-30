


function loadHTML(htmlLoad) {
    console.log(htmlLoad)
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector('#content').innerHTML = this.responseText
        }
    }
    xhr.open('GET', htmlLoad)
    xhr.send()
}