function extraerRepetidos(array) {
    let conteo = {}; 
    let repetidos = []; 

    for (let i = 0; i < array.length; i++) {
        let numero = array[i];

        if (conteo[numero]) {
            conteo[numero]++;

        } else {
            conteo[numero] = 1;
        }
    }

    for (let numero in conteo) {
        if (conteo[numero] > 1) {
            repetidos.push(parseInt(numero)); 
        }
    }

    return repetidos;
}

let entrada = prompt("Ingresa aquí los números separados por comas");

let arrayNumeros = entrada.split(',').map(num => parseInt(num.trim()));

let numerosRepetidos = extraerRepetidos(arrayNumeros);
console.log("Números repetidos:", numerosRepetidos);
