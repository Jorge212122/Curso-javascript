const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'Av. Insurgentes 187',
        ciudad: 'CDMX',
    },
    saludar(){
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
};

console.log(persona);
console.log(persona.nombre)
console.log(persona.saludar())

persona.despedir = () => {
    console.log('Adios')
}

console.log(persona.despedir())

console.log(persona.direccion.calle)

delete persona.edad;
console.log(persona)