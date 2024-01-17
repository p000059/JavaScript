const myJSON = '{"name":"Marcelo", "age":31, "skills":["php","java","javascript","sql","html","css"]}'

console.log(myJSON)

console.log(typeof myJSON)

/* JSON for object */

let myObject = JSON.parse(myJSON)

console.log(myObject)

let myJSON_String = JSON.stringify(myObject)

console.log(myJSON_String)

