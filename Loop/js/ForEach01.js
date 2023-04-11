const data = [
    { name: "Marcelo", age: '40', sallary: 2000, driverLicense: true },
    { name: "Mauricio", age: '41', sallary: 2300, driverLicense: true },
    { name: "Ruth", age: '35', sallary: 2500, driverLicense: true },
    { name: "Lucas", age: '28', sallary: 2700, driverLicense: false },
    { name: "Gabriela", age: '35', sallary: 3000, driverLicense: false }
]

const files = [
    "Marcelo", "Ruth", "Lucas", "Mauricio", "Gabriela"
]

let filesForEach = files.forEach((element) => element.toUpperCase())

console.log(filesForEach)

let filesMap = files.map((element) => element.toUpperCase())

console.log(filesMap)