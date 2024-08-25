function contarCaracteres(cadena) {
    let frecuencia = {};

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];

        if (frecuencia[caracter]) {
            frecuencia[caracter]++;

        } else {
            frecuencia[caracter] = 1;
        }
    }

    // para convertir el objeto en un array de objetos:
    let resultado = [];
    for (let caracter in frecuencia) {
        resultado.push({ car: caracter, veces: frecuencia[caracter] });
    }

    return resultado;
}

let cadenaUsuario = prompt("Ingresa aquí una cadena de texto:");

let resultadoFrecuencia = contarCaracteres(cadenaUsuario);
console.log("Frecuencia de caracteres:", resultadoFrecuencia);
