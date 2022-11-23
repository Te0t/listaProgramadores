const listaProgramadores = ["Gorka", "Martin", "Alex", "Leire"]

//Programacion imperactiva
let nombres = []
listaProgramadores.forEach((programador, posicion) => {
    nombres[posicion] = programador
})

// Programacion declarativa
let nombres = [...listaProgramadores]