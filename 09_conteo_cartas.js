/*
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo de cartas altas y bajas que quedan en la baraja.
Esto se llama "conteo de cartas"

Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
- Cuando el conteo es positivo, el jugador debería apostar alto.
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

Cambio de conteo    Cartas
------------------------------------
+1                  2, 3, 4, 5, 6
0                   7, 8, 9
-1                  10, "J", "Q", "K", "A"

Nuestra meta es definir una función para contar cartas.
La función debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (observa la tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
- "Apostar" si el conteo es positivo
- "Esperar" si el conteo es 0 o negativo.

El conteo actual y la decisión del jugador ("Apostar" o "Esperar") deben estar separados por un espacio.
*/

var conteo = 0

function contarCartas(carta) {
    var decision

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++
            break;
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            conteo--
            break;
    }

    if(conteo>0){
        decision="Apostar"
    } else {
        decision="Esperar"
    }

    return conteo + " " + decision
}

console.log(contarCartas(2));
console.log(contarCartas(6));
console.log(contarCartas(10));
console.log(contarCartas("K"));
console.log(contarCartas("A"));
console.log(contarCartas("J"));