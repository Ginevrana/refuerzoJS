var estacion = "Verano"

if (estacion == "Invierno") {
    console.log("Sí, me encanta el invierno"); // true
} else if (estacion == "Verano"){
    console.log("Me gusta el verano para ir a la playa"); // false
} else {
    console.log("Prefiero el invierno");
}

console.log("Después del condicional");

// Encadenar condicionales
function interpretarIMC(indiceMasaCorporal) {
    if (indiceMasaCorporal < 18.5){
        console.log("Bajo peso");
    } else if (indiceMasaCorporal <= 24.9) {
        console.log("Normal");
    } else if (indiceMasaCorporal <= 29.9) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

interpretarIMC(17)