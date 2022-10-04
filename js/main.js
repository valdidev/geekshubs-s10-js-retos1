/* // 1
var num1 = 20;
var num2 = 40;

if (num1 == num2) {
    console.log("Las variables son iguales")
} else if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2)
} else {
    console.log(num2 + " es mayor que " + num1)
} */

/* // 2
var nombre = "Fernando";
// console.log("Bienvenido " + nombre);
console.log("Bienvenido",nombre);
// console.log(`Bienvenido ${nombre}`); */

/* // 3
var nombre = prompt("Introduce tu nombre");
console.log("Bienvenido " + nombre); */

/* // 4
    // parseDouble?
var radioCirculo = prompt("Introduce el radio del círculo");
const PI = 3.14;

var areaCirculo = PI * (radioCirculo**2);
console.log("El área del círculo es: " + areaCirculo); */

/* // 5
var num = prompt("Introduce un número a dividir entre 2");

if (num % 2 === 0) {
    console.log(num + " es divisible entre 2");
} else {
    console.log(num + " no es divisible entre 2");
} */

/* // 6
let precio = prompt("Introduce un precio de producto");
const iva = precio * 0.21
console.log("El precio con el IVA es: ", + precio + iva,"€"); */

/* // 7
let num = 1;
while(num <= 100) {
    console.log(num)
    num++;
} */

/* // 8
for (let i = 1; i <= 100; i++) {
    console.log(i);
} */

/* // 9
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
} */

/* // 10
let nVentas = parseInt(prompt("Introduce el número de ventas"));
let total = 0;

while(nVentas > 0) {
    let venta = parseInt(prompt("Introduce el valor de la venta"));
    total = total + venta
    nVentas--;
}

console.log("El valor total de la venta es: ", total); */

/* // 11
let dia = prompt("Dime un día de la semana");
switch(dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log(dia, "es laboral");
    break;
    
    case "sabado":
    case "domingo":
        console.log(dia, "es festivo");
    break;

    default:
        console.log("Escribe un día de la semana correctamente");
    break;
} */

/* // 12
const password = "hola";
let intentos = 3;

while(intentos > 0) {
    intentos--;
    let login = prompt("Introduce la contraseña");

    if (login === password) {
        console.log("Enhorabuena, estás logueado");
        intentos = 0;
    } else if (login !== password && intentos >= 1) {
            console.log("Contraseña incorrecta, te quedan:", intentos,"intento/s");
        
    } else {
        console.log("Expulsado!")
    }
} */

/* // 13
function CalculadoraInversa() {
    let operando1 = parseInt(prompt("Introduce el primer operando"));
    let operando2 = parseInt(prompt("Introduce el segundo operando"));
    let operador = prompt("Introduce el signo del operador: +, -, *, /");

    switch (operador) {
        case "+":
            console.log(operando1,"+",operando2,"=",(operando1 + operando2));
        break;

        case "-":
            console.log(operando1,"-",operando2,"=",(operando1 - operando2));
        break;

        case "*":
            console.log(operando1,"*",operando2,"=",(operando1 * operando2));
        break;

        case "/":
            console.log(operando1,"/",operando2,"=",(operando1 / operando2));
        break;

        default:
            console.log("Recuerda poner signos aritméticos")
        break;
    }
}

CalculadoraInversa(); */