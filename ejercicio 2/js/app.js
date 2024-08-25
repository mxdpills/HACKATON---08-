
//funcion solicitar valores
function solicitarValores() {
    let cantidad = parseInt(prompt("¿Cuántos valores deseas ingresar?"));
    let valores = [];

    for (let i = 0; i < cantidad; i++) {
        let valor = parseFloat(prompt(`Ingresa el valor ${i + 1}:`));
        valores.push(valor);
    }

    return valores;
}

// funcion sumar todos valores del array
function sumarValores(array) {
    return array.reduce((acc, valor) => acc + valor, 0);
}

// funcion multiplicar todos valores del array
function multiplicarValores(array) {
    return array.reduce((acc, valor) => acc * valor, 1);
}

// funcion encontrar valor maximo
function valorMaximo(array) {
    return Math.max(...array);
}

// funcion encontrar valor minimo
function valorMinimo(array) {
    return Math.min(...array);
}

// funcion ordenar valores de forma ascendente
function ordenarAscendente(array) {
    return array.slice().sort((a, b) => a - b);  
}

// funcion sacar promedio de los valores
function promedioValores(array) {
    let suma = sumarValores(array);
    return suma / array.length;
}

// funcion sacar valores pares del nuevo array
function obtenerPares(array) {
    return array.filter(valor => valor % 2 === 0);
}

// funcion insertar ceros después de cada valor del array
function insertarCeros(array) {
    let nuevoArray = [];

    array.forEach(valor => {
        nuevoArray.push(valor);
        if (valor % 2 === 0) {
            nuevoArray.push(0);
        }
    });

    return nuevoArray;
}

let valoresIngresados = solicitarValores();

console.log("Valores ingresados:", valoresIngresados);

console.log("Suma de los valores:", sumarValores(valoresIngresados));

console.log("Multiplicación de los valores:", multiplicarValores(valoresIngresados));

console.log("Valor máximo:", valorMaximo(valoresIngresados));

console.log("Valor mínimo:", valorMinimo(valoresIngresados));

console.log("Valores ordenados ascendentemente:", ordenarAscendente(valoresIngresados));

console.log("Promedio de los valores:", promedioValores(valoresIngresados));

console.log("Valores pares:", obtenerPares(valoresIngresados));

console.log("Array con ceros insertados después de cada par:", insertarCeros(valoresIngresados));