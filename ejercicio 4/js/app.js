
function permutar(cadena) {
    
    if (cadena.length === 1) {
        return [cadena];
    }

    let permutaciones = [];

   
    for (let i = 0; i < cadena.length; i++) {
       
        let charActual = cadena[i];

        let restoCadena = cadena.slice(0, i) + cadena.slice(i + 1);

        let permutacionesResto = permutar(restoCadena);

        permutacionesResto.forEach(permutacion => {
            permutaciones.push(charActual + permutacion);
        });
    }

    return permutaciones;
}

let cadenaUsuario = prompt("Ingresa una serie de letras:");

let resultadoPermutaciones = permutar(cadenaUsuario);
console.log("Permutaciones:", resultadoPermutaciones.join(", "));
