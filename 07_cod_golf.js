// Código de Golf

/*
En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.
Hay unnombre diferente dependiendo de qué tan por encima o por debajo del par estén sus golpes.

Tu fucnión tomará los argumentos par y golpes.
Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad.

Golpes              Retornar
---------------------------------------
1                   "Hole-in-one!"
<= par - 2          "Eagle"
par - 1             "Birdie"
par                 "Par"
par + 1             "Bogey"
par + 2             "Double Bogey"
>= par + 3          "Go Home!"

*/

function puntajeGolf (par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one!"
    } else if (golpes == (par-2)) {
        return "Eagle"
    } else if (golpes == (par-1)) {
        return "Birdie"
    } else if (golpes == par) {
        return "Par"
    } else if (golpes == (par+1)) {
        return "Bogey"
    } else if (golpes == (par+2)) {
        return "Double Bogey"
    } else if (golpes >= (par+3)) {
        return "Go Home!"
    }
}

console.log(puntajeGolf(4,1))