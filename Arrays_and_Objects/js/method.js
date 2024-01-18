const animal = {
    nome:"Bob",
    latir: function(){
        console.log("au au")
    }
}

console.log(animal.nome)

console.log(animal.latir())

const person = {

    name: "Marcelo",

    getName: function(){
        return this.name
    },

    setName: function(name){
        this.name = name
    }
}

console.log(person.getName())

person.setName("Marcelo Guimba")

console.log(person.getName())