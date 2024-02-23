fetch('/JavaScript/Module/js/json/table.json')
  .then(response => response.json())
  .then(data => receiveObject(data, '#tables'))
  .catch(error => console.error(error))

function receiveObject(json, id) {
  let objects = document.querySelector(id)

  json.forEach(element => {
    let a = document.createElement('a')
    a.className = element.class
    a.href = element.href
    a.target = element.target
    a.innerHTML = element.name
    objects.appendChild(a)
  })
}