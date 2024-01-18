function buildPerson(name, lastName){
    let person = {};
    person.name = name;
    person.lastName = lastName;

    function fullName(){
        return `${person.name} ${person.lastName}`;
    }

    person.fullName = fullName;
    
    return person;
}