"use strict";

/* Getter and Setter */
class Post {
    constructor(title, description, tags){
        this.title = title,
        this.description = description,
        this.tags = tags
    }

    get getTitle(){
        return this.title;
    }

    /**
     * @param {String} title
     */
    set setTitle(title){
        this.title = title
    }

    get getDescription(){
        return this.description
    }

    /**
     * @param {String} description
     */
    set setDescription(description){
        this.description = description
    }

    get getTags(){
        return this.tags
    }

    /**
     * @param {string} tags
     */
    set setTags(tags){
        const tagsArray = tags.split(",")
        this.tags = tagsArray
    }
}

const postA = new Post("001","Post Recomendado")

postA.setTitle = "002"

console.log(postA)

document.querySelector('#class-0').innerHTML = `Título:${postA.getTitle} <br/>Descrição:${postA.getDescription}`

debugger

/* Inheritance */

class Mammal {
    constructor(paws){
        this.paws = paws
    }

    get getPaws(){
        return this.paws
    }

    /**
     * @param {string} paws
     */
    set setPaws(paws){
        const paramPaws = paws.split(' ')
        this.paws = paramPaws
    }
}

class Wolf extends Mammal {
    constructor(name, paws){
        super(paws),
        this.name = name        
    }

    get getName(){
        return this.name
    }

    /**
     * @param {string} name
     */
    set setName(name){
        const paramName = name.split(' ')
        this.name = paramName
    }
}



const pet = new Wolf()

pet.setPaws = '6'
pet.setName = 'Toto'

console.log(pet)
console.log(pet instanceof Mammal ? `1 - pet is instance of Mammal` : `2 - pet no instance of Mammal`)

document.querySelector('#class-5').innerHTML = `Name:${pet.getName} <br/>Patas:${pet.getPaws}`

debugger

const dog = {
    breed: "Fila"
}

dog.breed = "Pastor Alemão"

document.querySelector('#class-1').innerHTML = dog.breed

console.log(dog.breed)

debugger

class dogTwo {
    constructor(name, breed) {
        this.name = name,
            this.breed = breed
    }
}

const husky = new dogTwo("Ozzy", "Husky")

console.log(husky)

document.querySelector('#class-2').innerHTML = `${husky.name} ${husky.breed}`

dogTwo.prototype.bark = function () {
    console.log("Auuuuuu!")
}

console.log(dogTwo.prototype)

debugger

class dogOne {

    constructor(name, breed){
        this.name = name,
        this.breed = breed
    }
}

const jeff = new dogOne("Jeff", "Labrador")

console.log(jeff)

document.querySelector('#class-3').innerHTML = `Name:${jeff.name} <br/>Breed:${jeff.breed}`

debugger

class truck {
    constructor(axle, color){
        this.axle = axle,
        this.color = color
    }

    truckDescribe(){
        console.log(`Eixos:${this.axle} \nColor:${this.color}`)
    }

    truckDescribeHtml(){
        return `Eixos:${this.axle} <br/> Color:${this.color}`
    }
}

const scania = new truck("6","Vermelha")

scania.truckDescribe()

truck.prototype.axle = "8"

console.log(truck.prototype.axle)

document.querySelector('#class-4').innerHTML = `${scania.truckDescribeHtml()}`
