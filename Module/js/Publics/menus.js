
fetch('js/json/string.json')
  .then(response => response.json())
  .then(data => receiveString(data))
  .catch(error => console.error(error));

function receiveString(json) {
  let idStrings = document.querySelector('#strings')

  for (let i in json) {
    let a = document.createElement('a')
    a.className = json[i].class
    a.href = json[i].href
    a.target = json[i].target
    a.innerHTML = json[i].name
    idStrings.appendChild(a)
  }
}

fetch('js/json/numbers.json')
  .then(response => response.json())
  .then(data => receiveNumbers(data))
  .catch(error => console.error(error))

function receiveNumbers(json) {
  let idNumbers = document.querySelector('#numbers')

  for (let i in json) {
    let a = document.createElement('a')
    a.className = json[i].class
    a.href = json[i].href
    a.target = json[i].target
    a.innerHTML = json[i].name
    idNumbers.appendChild(a)
  }
}

fetch('js/json/arrays.json')
  .then(response => response.json())
  .then(data => receiveArrays(data))
  .catch(error => console.error(error))

function receiveArrays(json) {
  let idNumbers = document.querySelector('#arrays')

  for (let i in json) {
    let a = document.createElement('a')
    a.className = json[i].class
    a.href = json[i].href
    a.target = json[i].target
    a.innerHTML = json[i].name
    idNumbers.appendChild(a)
  }
}

fetch('js/json/basicHTML.json')
  .then(response => response.json())
  .then(data => receiveBasicHTML(data))
  .catch(error => console.error(error))

function receiveBasicHTML(json) {
  let idNumbers = document.querySelector('#basic-html')

  for (let i in json) {
    let a = document.createElement('a')
    a.className = json[i].class
    a.href = json[i].href
    a.target = json[i].target
    a.innerHTML = json[i].name
    idNumbers.appendChild(a)
  }
}

fetch('js/json/ObjectAJAX.json')
  .then(response => response.json())
  .then(data => receiveObject(data))
  .catch(error => console.error(error))

function receiveObject(json) {
  let idNumbers = document.querySelector('#object-ajax')

  for (let i in json) {
    let a = document.createElement('a')
    a.className = json[i].class
    a.href = json[i].href
    a.target = json[i].target
    a.innerHTML = json[i].name
    idNumbers.appendChild(a)
  }
}