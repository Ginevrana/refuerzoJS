function clasificarValor(valor) {
    var respuesta
    switch (valor) {
        case 1:
            respuesta="alpha";
            break;
        case 2:
            respuesta="beta"
            break;
        case 3:
            respuesta="gamma"
            break;
        case 4:
            respuesta="delta"
            break;
        default:
            respuesta="nada"
            break;
    }

    return respuesta
}

console.log(clasificarValor(8)); // nada

//////////////////////////////////////////////////

function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen ="alto"
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(2));