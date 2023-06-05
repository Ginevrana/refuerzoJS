var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
}

// Se acceden a las propiedades del objeto a través de la notación de punto.
console.log(miPerro.nombre); // Gino

// Se acceden a las propiedades del objeto a través de la notación de corchetes y dentro el nombre de la propiedad entre comillas, se usa para propiedades con espacio entre las palabras.
console.log(miPerro["nombre"]); // Gino


// Acceder a propiedad de objetos a través de variables
var resultados = {
    1:"nora256",
    2:"gino577",
    3:"estef547",
    4:"kiara566"
}

var posicion = 4;

console.log(resultados[posicion]);


// Actualizar propiedades
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
}

console.log(mochila.color); // azul
mochila.color="violeta";
console.log(mochila.color); // violeta

console.log(mochila.contenido); // [ 'botella de agua', 'cuaderno' ]
mochila.contenido.push("lápiz")
console.log(mochila.contenido); // [ 'botella de agua', 'cuaderno', 'lápiz' ]
mochila.contenido = []
console.log(mochila.contenido); // []

// Agregar propiedades
var curso = {
    "titulo": "Aprende JS de cero",
    "idioma": "Español",
    "duracion": 30
}
console.log(curso);

curso.vistas = 34500;
console.log(curso);

// Eliminar propiedades
delete curso.duracion
console.log(curso);

// Objetos para búsquedas
function buscarElemento(simbolo) {
    var elementoQuimico = "";

    // switch (simbolo) {
    //     case "Al":
    //         elementoQuimico = "Aluminio"
    //         break;
    //     case "S":
    //         elementoQuimico = "Azufre"
    //         break;
    //     case "Cl":
    //         elementoQuimico = "Cloro"
    //         break;
    //     case "He":
    //         elementoQuimico = "Helio"
    //         break;
    //     case "B":
    //         elementoQuimico = "Boro"
    //         break;
    //     case "Li":
    //         elementoQuimico = "Litio"
    //         break;
    //     default:
    //         break;
    // }

    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    }
    return simbolosQuimicos[simbolo]   
}

console.log((buscarElemento("Al"))); // Aluminio


// Verificar propiedades con .hasOwnProperty
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 150
}

console.log(miCuaderno.hasOwnProperty("color")); // true

function verificarProp(obj, propiedad) {
    if(obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad]
    } else {
        return "El objeto no tiene esta propiedad"
    }
}
console.log(verificarProp(miCuaderno, "color")); // Propiedad: verde
console.log(verificarProp(miCuaderno, "tamaño")); // El objeto no tiene esta propiedad


// Objetos complejos
var ordenesDePizzas = [
    {                       // Indice 0
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 3600,
        "toppings": ["extra queso", "champiñones", "piña"],
        "paraLlevar": true
    },
    {                       // Indice 1
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 5200,
        "toppings": ["extra queso", "pimentón"],
        "paraLlevar": false
    }
]

// Ver valores de objetos dentro de arreglos según propiedades
console.log(ordenesDePizzas[0]["tipo"]); // margarita
console.log(ordenesDePizzas[1].toppings); // [ 'extra queso', 'pimentón' ]



// Objetos anidados
var miReceta = {
    "descripcion": "Mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200grs"
        }
    }
}

console.log(miReceta.ingredientes.masa); // { harina: '100grs', sal: '1 cucharadita', agua: '1 taza' }
console.log(miReceta.ingredientes.masa.agua); // 1 taza