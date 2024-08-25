function combinaciones(cadena, longitud) {
    let resultado = [];

    function generarCombinaciones(comb, inicio) {
        
        if (comb.length === longitud) {
            resultado.push(comb.join(''));
            return;
        }

        
        for (let i = inicio; i < cadena.length; i++) {
            comb.push(cadena[i]);
            generarCombinaciones(comb, i + 1);
            comb.pop();
        }
    }

    generarCombinaciones([], 0);

    return resultado;
}

// para solicitar la cadena de caracteres y su longitud
let cadenaUsuario = prompt("Ingresa una cadena de caracteres:");
let longitudUsuario = parseInt(prompt("Ingresa la longitud de las combinaciones:"));

// para generar y mostrar las combinaciones al usuario
let resultadoCombinaciones = combinaciones(cadenaUsuario, longitudUsuario);
console.log("Combinaciones:", resultadoCombinaciones.join(", "));
