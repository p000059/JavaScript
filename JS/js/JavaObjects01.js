let firstName = new String("John"); //Tipo Objeto
let name = "John"; //Tipo String

console.log("Nome = " + firstName.toString()); //Retorna o nome do Objeto string.

console.log("Tamanho da String = " + firstName.length); //Retorna o tamanho da string.

console.log(typeof(firstName)); //O método typeof(), mostra que o tipo é um objeto.

//O trecho abaixo vai comparar se os TIPOS são os mesmos, ou seja, uma String e um objeto.
var resultado = (name === firstName) ? "São do mesmo tipo" : "São de tipos diferentes";
console.log(resultado);

//O trecho abaixo vai comparar se os VALORES são os mesmos, ou seja, um valor de string e um objeto do tipo string.
var resultado = (name == firstName) ? "São do mesmo tipo" : "São de tipos diferentes";
console.log(resultado);

