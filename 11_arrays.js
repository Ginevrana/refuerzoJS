// Recorrido de arreglos/arrays

var misPlantas = [
    {
        tipo: "flores",
        lista: [            // Arreglo anidado dentro de objeto dentro de arreglo
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    }, 
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
]

var primeraFlor = misPlantas[0].lista[0] // rosas
console.log(primeraFlor);

var segundoArbol = misPlantas[1].lista[1] // pino
console.log(segundoArbol);