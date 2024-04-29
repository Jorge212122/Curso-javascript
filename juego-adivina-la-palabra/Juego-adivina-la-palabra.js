/*
Juguemos a adivinar la palabra

El usuario tiene 3 intentos para adivinar la palabra oculta.

requerimientos:
- El juego debe tener una palabra oculta
- El juego puede dar 1 pista de la palabra
- El usuario tiene que ingresar una suposicion
- El juego debe verificar si la suposicion del usuario es correcta
- El juego debe tener un numero limitado de intentos
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos
*/
const prompt = require('prompt-sync')();
const palabraSecreta = "Programacion"
let contador = 0;
console.log("Adivina la palabra secreta, tienes 3 intentos")
console.log("Pista: sirve para crear programas desde un lenguaje")
do{
    let palabraIngresada = prompt("Ingresa la palabra: ")
    if (palabraIngresada == palabraSecreta) {
        console.log("!Felicidades, adivinaste la palabra secreta!")
        break;
    } else {
        console.log("Respuesta incorrecta, Intenta de nuevo")
        contador++
    }
    
} while(contador < 3)
if (contador == 3){
    console.log("Perdiste, te acabaste los 3 intentos")
}

