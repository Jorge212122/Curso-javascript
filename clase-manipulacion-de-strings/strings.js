const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

//string objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)
 
// Acceder a carecteres
const saludo = 'Hola. Como estas?'
console.log(saludo[2]) //accedemos a l
console.log(saludo.charAt(2)) //accedemos a l
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3, 5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludodividido = saludo.split(' ')
console.log(saludodividido)
console.log(saludodividido[1])

const saludoconespacio = ' Hola mundo '
const saludosinespacio = saludoconespacio.trim()
console.log(saludosinespacio)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', '💙')
console.log(nuevoSaludo)