/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

const weightEarth = parseFloat(window.prompt('Ingresa tu peso en la tierra en kilogramos: '))
let weightMoon = (weightEarth * 1.622 / 9.81).toFixed(2)
console.log(`Tu peso en la luna seria de ${weightMoon} Kg`)

//////////////////////////////////////////////////////
/**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */

const grade = parseInt(window.prompt('Ingresa la calificacion obetneida en el examen: '))
if (grade >= 90) {
    console.log('Tu equivalencia es: A')
}
else if (grade >= 80 && grade < 90)  {
    console.log('Tu equivalencia es: B')
}
else if (grade >= 70 && grade < 80)  {
    console.log('Tu equivalencia es: C')
}
else if (grade >= 60 && grade < 70)  {
    console.log('Tu equivalencia es: D')
}
else if (grade >= 50 && grade < 60)  {
    console.log('Tu equivalencia es: E')
}
else {
    console.log('Tu equivalencia es: F')
}

/////////////////////////////////////////////
/**
 * 3:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * Comparar si ese numero es divisible entre 2, 3 u 11
 * Imprimir en consola un mensaje que indique de que numero(s) es múltiplo
 * p.ej. 6 es multiplo de 2 y de 3
 * p.ej. 22 es multiplo de 2 y de 11
 * p.ej. 21 es multiplo de 3
 * Sino, enviar un mensaje en consola que lo indique
 */

const numToCheck = parseInt(window.prompt('Ingresa un numero para checar su divisibilidad: '))
if (Number.isInteger(numToCheck / 2))  {
    console.log(`El numero ${numToCheck} es divisible entre 2`)
}
else  {
    console.error(`El numero ${numToCheck} NO es divisible entre 2`)
}

if (Number.isInteger(numToCheck / 3))  {
    console.log(`El numero ${numToCheck} es divisible entre 3`)
}
else  {
    console.error(`El numero ${numToCheck} NO es divisible entre 3`)
}

if (Number.isInteger(numToCheck / 11))  {
    console.log(`El numero ${numToCheck} es divisible entre 11`)
}
else  {
    console.error(`El numero ${numToCheck} NO es divisible entre 11`)
}


////////////////////////////////////////////////
/**
 * 4:
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

const num = parseInt(window.prompt('Ingresa un numero entre 1 y 100: '))
result = num % 2 === 0 ? console.log(`El numero ${num} es par`) : console.log(`El numero ${num} es impar`)

////////////////////////////////////////////////
/**
 * 5:
 * Pedir al usuario el dia de la semana 
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

const weekday = window.prompt('Ingresa un dia de la semana: ')
switch (weekday)  {
    case 'domingo':
        console.log('domingo -> 1')
        break;
    case 'lunes':
        console.log('lunes -> 2')
        break;
    case 'martes':
        console.log('martes -> 3')
        break;
    case 'miercoles':
        console.log('miercoles -> 4')
        break;
    case 'jueves':
        console.log('jueves -> 5')
        break;
    case 'viernes':
        console.log('viernes -> 6')
        break;
    case 'sabado':
        console.log('sabado -> 7')
    default:
        console.log('Intenta otra vez ingresando un dia de la semana valido... ')
}

///////////////////////////////////////////////////////////////
/**
 * 6:
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

const numA = parseInt(window.prompt('ingresa un primer numero: '))
const numB = parseInt(window.prompt('Ingresa un segundo numero: '))

if (numA > numB)  {
    console.log(`El numero menor es ${numB}
Y el numero mayor es ${numA}`)
}
else  {
    console.log(`El numero menor es ${numA}
Y el numero mayor es ${numB}`)
}