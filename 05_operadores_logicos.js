/*
    Tabla de verdad del operador AND
    Para X && Y

    | X | Y | X && Y |
    ------------------
    | T | T |   T   |
    | T | F |   F   |
    | F | T |   F   |
    | F | F |   F   |
    
    La expresión solo es verdadera cuando ambos operandos son verdaderos

*/
var a = 1
console.log((a>5) && (a==3)); // false


/*
    Tabla de verdad del operador OR
    Para X && Y

    | X | Y | X && Y |
    ------------------
    | T | T |   T   |
    | T | F |   T   |
    | F | T |   T   |
    | F | F |   F   |
    
    La expresión solo es verdadera cuando alguno o ambos operandos son verdaderos

*/

var a = 2

console.log((a<5) || (a>15)); // true


/*
    Tabla de verdad del operador NOT
    Para !X 

    | X | !X |
    ------------------
    | F | T |
    | T | F |
    
    La expresión es contraria al estado actual

*/

var a = 8;
console.log(!(a>5)); // false
console.log(!(a<5)); // true