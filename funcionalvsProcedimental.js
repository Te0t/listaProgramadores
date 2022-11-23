// Suma procedimental
let suma = 0

for (let i = 1, i <= 10; i++){
    suma = suma +1
}

// suma = 55

//suma funcional
// 1 - Definimos la función

function sumar_los_diez_primeros_enteros(){
    let suma = 0

    for (let i = 1, i <= 10; i++){
        suma = suma +1 
    }
    return suma
}

// 2 - utilizamos la funcion
let suma = sumar_los_diez_primeros_enteros()
// suma = 55