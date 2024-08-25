
function calcularIMC() {
    
    let peso = parseFloat(prompt("Aquí ingresa tu peso en kg:"));
    let altura = parseFloat(prompt("Y aquí ngresa tu altura en metros:"));

    let imc = peso / (altura * altura);

    let clasificacion = "";

    if (imc < 18.50) {
        clasificacion = "PESO BAJO";

    } else if (imc >= 18.50 && imc <= 24.99) {
        clasificacion = "PESO NORMAL";

    } else if (imc >= 25 && imc <= 29.99) {
        clasificacion = "SOBREPESO";

    } else if (imc >= 30 && imc <= 34.99) {
        clasificacion = "OBESIDAD LEVE";

    } else if (imc >= 35 && imc <= 39.99) {
        clasificacion = "OBESIDAD MEDIA";
        
    } else if (imc >= 40) {
        clasificacion = "OBESIDAD MÓRBIDA";
    }

    // para mostrar el resultado al usuario
    console.log("IMC:", imc.toFixed(2), "Clasificación:", clasificacion);
}

calcularIMC();
