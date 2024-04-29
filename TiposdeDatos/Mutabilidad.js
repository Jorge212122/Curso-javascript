//tipo de dato primitivo - inmutable
let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//Tipo de dato complejo - mutable modifica el valor original
let usuario = { nombre: 'chebio', edad: 21}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre (objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = { nombre: 'Chebio' }
cambiarNombre(persona)

console.log(persona)