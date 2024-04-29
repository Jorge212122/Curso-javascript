const deck = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

function barajar() {
    for (let i = deck.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));  // generamos un indice aleatorio

        const temp = deck[i];
        deck[i] = deck[indiceAleatorio];
        deck[indiceAleatorio] = temp;
    }
}
