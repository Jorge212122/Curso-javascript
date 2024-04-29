const prompt = require('prompt-sync')();
const libros = []

let opcionSeleccionada;

do{
    console.log(`Seleccione una opcion:
            1. Agregar Nuevo libro
            2. Eliminar un libro
            3. Mostrar los libros almacenados
            4. Salir`
    );
    opcionSeleccionada = prompt('Ingresa la opcion: ');
    switch (opcionSeleccionada) {
        case "1":
            let agregarLibro = prompt('Ingresa el nombre del libro: ');
            const newBooks = libros.push(agregarLibro)
            break;
        case "2":
            const removedBook = libros.pop()
            console.log('El libro eliminado fue: ', removedBook)
            break;
        case "3":
            console.log(libros)
            break;
    }
} while (opcionSeleccionada != 4)