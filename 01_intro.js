// Cómo ejecutar Javascript
// Javascript se ejecuta en los navegadores.

/*
Tipos de Datos:
undefined, null, boolean, string, symbol, number, NaN (considerado number), object, array
*/

// Variable - ser descriptivo en el nombre de la variable, usar camelCase, es case-sensitive (sensible a mayúsculas y minúsculas para ser llamada)

var nombre = "Teresita";
let apellido = "Sanchez"
const nombreCompleto = "Florencia Teresita Sanchez"

console.log(nombre);
console.log(apellido);
console.log(nombreCompleto);

//////////////////////////////////////////////////////////////////////////////////////////

var a;
var b = 2

console.log(a); // undefined
console.log(b);

// = es el operador de asignación en JS con el que se asignan valores a variables

a = 10

console.log(a); // 10

//////////////////////////////////////////////////////////////////////////////////////////

// Asignar valor de una variable a otra variable

var c = 5;
var d = c
var e

e = c

console.log(c);
console.log(d);
console.log(e);

//////////////////////////////////////////////////////////////////////////////////////////

// Inicializar variables

var x = 9 // No solo se declara sino que se asigna un valor: A eso se llama inicializar la variable

// Variable no inicializada

var z // No tiene un valor (undefined)

//////////////////////////////////////////////////////////////////////////////////////////

// Operaciones aritméticas

var suma = 5+3;
console.log("La suma de 5 y 3 es " + suma);

var resta = 10-8
console.log("La resta de 10 y 8 es " + resta);

var producto = 10*8
console.log("La multiplicación de 10 por 8 es " + producto);

var division = 10/2
console.log("La división de 10 por 2 es " + division);

var decimal = 23.4
console.log(decimal);

var resto = 15 % 5; // En este caso es 0
console.log(resto);

//////////////////////////////////////////////////////////////////////////////////////////

// Incrementar el valor de una variable

var librosComprados = 105;
console.log(librosComprados);

librosComprados = librosComprados + 1
console.log(librosComprados);

librosComprados++
console.log(librosComprados);

// Lo mismo para reducirlo
librosComprados-- // Operador de decremento
console.log(librosComprados);

// Asignación de suma (va a ser lo mismo para resta, producto y división)
librosComprados += 13 // El equivalente a escribir librosComprados = librosComprados + 13
console.log(librosComprados);

//////////////////////////////////////////////////////////////////////////////////////////

// Variables con cadenas de caracteres
// Escapar de comillas
var frase = "Soy una cadena de caracteres 'con comillas dentro'"
var frase2 = "Soy otra cadena de caracteres\"con comillas dentro\""

console.log(frase);
console.log(frase2);

/* Secuencias de escape
\'  Comilla simple
\"  Comilla doble
\\  Barra invertida
\n  Línea nueva
\r  Retorno de carro
\t  Tabulación
\b  Retroceso
\f  Salto de página
...
*/

// Concatenar cadenas de caracteres
var unNombreCompleto = "Alan " + "Turing." + " " + "O" + " " + "concatenando espacios"
console.log(unNombreCompleto);

// Con variables
var verbo = "programar";
var mensaje = "Estoy practicando " + verbo
console.log(mensaje);

// Agregar variables a cadenas de caracteres
var mensajeCompleto = "Estoy practicando programación "
var final = "con YouTube"

console.log(mensajeCompleto);

mensajeCompleto += final
console.log(mensajeCompleto);

// Longitud de una cadena de caracteres
var miCadena;

miCadena = "A"
console.log(miCadena.length); // 1

// Notación de corchetes: Primer caracter
var lenguajeDeProgramacion = "JavaScript"

console.log(lenguajeDeProgramacion[0]); // J

// Inmutabilidad de Cadena de caracteres
var micadena = "Jola mundo"
console.log(micadena)

micadena = "Hola Mundo" // Sólo se puede reasignar el valor completo, no por índice
console.log(micadena)

console.log(micadena[micadena.length-1]); // Para recibir el último caracter de la cadena de caracteres

var anteultimo = 2
console.log(micadena[micadena.length-anteultimo]); // Expresión general para obtener el anteúltimo caracter de la cadena de caracteres