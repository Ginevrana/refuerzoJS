var miSustantivo = "bicicleta"
var miAdjetivo = "pequeña"
var miVerbo = "voló"
var miAdverbio = "lentamente"

/*
Concatena las cadenas para crear una cadena que muestre un mensaje. Puedes cambiar los valores de las variables. Por ejemplo:
- El perro negro corrió rápidamente a la tienda.
- La bicicleta pequeña voló a la tienda lentamente.
*/

var palabrasEnBlanco = "La " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda"

console.log(palabrasEnBlanco);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrays

var miArray = ["John", 24]
console.log(miArray);

var estudiantes = ["Nora", "Gino", "Emily", "Juan"]
console.log(estudiantes);

var notas = [95, 67, 89, 56]
console.log(notas);

// Arrays anidados
var listaDeEstudiantes = [["Nora", 95], ["Gino", 67], ["Emily",89], ["Juan",56]]
console.log(listaDeEstudiantes);

var listaDeProductos = [["Camisa",67,"S134"], ["Celular", 250, "S356"], ["Zapatos", 36.7, "S678"]]
console.log(listaDeProductos);

// Acceder a los elementos de un array
var sumar = notas[0] + notas[1] + notas[2] + notas [3]
console.log("El promedio de notas es de " + sumar/4);

// Modificar elementos de arreglo
notas[0] = 60
console.log(notas); // [ 60, 67, 89, 56 ]

// Acceder a elementos multidimensionales
console.log(listaDeEstudiantes[2]); // Para acceder al arreglo anidado
console.log(listaDeEstudiantes[2][1]); // Para acceder al elemento de un arreglo anidado

// Modificar elementos a arrays
var estaciones = ["Invierno", "Otoño", "Primavera"]
console.log(estaciones);

// .push() para agregar elemento al array
estaciones.push("Verano") 
console.log(estaciones); // [ 'Invierno', 'Otoño', 'Primavera', 'Verano' ]

// .pop() para eliminar y mostrar elemento extraído
estacion = estaciones.pop() // Se puede guardar elemento en una variable para mostrarlo

console.log("Se ha eliminado la estación " + estacion); // Se ha eliminado la estación Verano
console.log(estaciones); // [ 'Invierno', 'Otoño', 'Primavera' ]

// .shift() para eliminar el primer elemento del array
estaciones.shift()
console.log(estaciones); // [ 'Otoño', 'Primavera' ]

// .unshift() para agregar un elemento al principio del array
estaciones.unshift("Verano")
console.log(estaciones); // [ 'Verano', 'Otoño', 'Primavera' ]