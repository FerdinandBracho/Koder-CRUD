/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b dividir sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/
const numA = parseInt(window.prompt('Ingresa un primer numero: '));
const numB = parseInt(window.prompt('Ingresa un segundo nuemero: '))

function checktonums (a, b) {
    let result;

    if (a > b) {
        result = b / a;
    }

    else if (a < b) {
        result = a + b;
    }

    else {
        result = a * b;
    }

    return result;
}

let result = checktonums(numA, numB);
console.log('El resultado de la operacion es', result);

/***
Ejercicio 2: 	
Pedir por el promt un numero, y comprobar si es par o impar
*/
 const numC = parseInt(window.prompt('Ingrese un nuemro para rectificar si es par: '));

function ejercicio2 (a) {
    let result;

    if (a % 2 === 0) {
        result = 0
    }

    else {
        result = 1;
    }

    return result;
}

let result2 = ejercicio2(numC);

if (result2 == 0) {
    console.log(`El numero ${numC} es par`);
}
else {
    console.log(`El numero ${numC} no es par`);
}