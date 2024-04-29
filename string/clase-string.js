const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas simples"
const terceraOpcion = `comillas simples`

//concatenacion: opcion +
const direccion = 'calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion completa es ' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi direccion compelta es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

//2. Concatenacion: Template Literals
const nombre = 'Chebio'
const pais = '🇲🇽'
const presentacion = `hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))

// 4. concatenacion: concat()
const hobbie1 = '🏃'
const hobbie2 = '🤓'
const hobbie3 = '📚'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)

// Caracteres de escape
const whatDoIDo = "I'm a software engineer"
console.log(whatDoIDo)

//strings largos
const poema = 'Las rosas son rojas,\n' + 
                'Las violetas son azules'
console.log(poema)

const poema2 =  'Las rosas son rojas,\n\
Las violetas son azules'
console.log(poema2)

const poema3 =  `Las rosas son rojas,
Las violetas son azules`
console.log(poema3)
