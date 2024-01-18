const text = "    Texto para Prototype"

const textNew = text.trim()
const array = textNew.split(' ')

console.log(text)
console.log(array)

console.log(Object.getPrototypeOf(text))
console.log(Object.getPrototypeOf(array))

const myObject = {
    name: "Marcelo"
}

console.log(Object.getPrototypeOf(myObject))

const myObjectNew = Object.create(myObject)

console.log(myObjectNew.name)

console.log(Object.getPrototypeOf(myObjectNew) === myObject)