// metodos que iteran sobre un array
// metodos que no modifican el array original (inmutable)

// filter()

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce()
// Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un valor unico

const numbersReduce = [1,2,3,4,5]
// suma de los valores en un array
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sum)

// reduce() case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

// conteo de valores en un array.
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(wordFrecuency)