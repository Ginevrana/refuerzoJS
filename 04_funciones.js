function mostrarMensaje() {
    console.log("¡Hola Mundo!");
}

mostrarMensaje() // Se llama a la función y por consola devuelve: ¡Hola Mundo!

// Argumentos
function sumar(a,b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es igual a " + suma);    
}

sumar(487,563) // El resultado de 487 + 563 es igual a 1050

// También se pueden ingresar variables como parámetros
var x = 18
var y = 321

sumar(x,y)

///////////////////////////////////////////////////////////////////////////////

function restar(a,b) {
    return a - b
}

var resultado = restar (10,3) // Se asigna valor de función a variable

console.log(resultado); // 7


function crearCadena(lenguaje) {
    return "Mi meta es practicar " + lenguaje
}

var cadena = crearCadena("JavaScript")

console.log(cadena); // Mi meta es practicar JavaScript

///////////////////////////////////////////////////////////////////////////////

/*
    Próximo en la fila
        En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.
        Define una función proximo que tome un array y un número como argumentos. Agrega el número al final del arreglo y luego elimina el primer elemento del arreglo. La función próximo debe retornar el elemento que fue removido.
*/

var fila = [["Pedro", 1],["Pablo", 2],["Juan", 3],["Luis", 4]]
console.log(fila);

function proximo(array, nombre, num) {
    array.push([nombre,num])
    var elemento = array.shift()
    console.log("Se elimina a " + elemento[0] + " de la fila");
}

proximo(fila, "Paula", 5)
console.log(fila);