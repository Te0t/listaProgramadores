const listaProgramadores = ["Gorka", "Martin", "Alex", "Leire"]

let nombres = []

//Programacion imperactiva
listaProgramadores.forEach((programador, posicion) => {
    nombres[posicion] = programador
})

// Programacion declarativa
nombres = [...listaProgramadores]