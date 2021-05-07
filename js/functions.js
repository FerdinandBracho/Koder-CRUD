//////////////////////////////////////////////////////////////////////////
 /* 1
  * 
  * pedir el usuario un numero entre 1 y 10
  * Imprimir en consola el siguiente patrón
  * donde la cantidad mas grande de * es el Numero del usuario
  * P.ej. el usuario introduce 5 
  * Resultado esperado
  *
  **
  ***
  ****
  *****
  ****
  ***
  **
  *
 */
 
// Funcion sin retorno
function astericFun (numToPrint)    {
    const asteric = '*'
    
    for (let i = 0;i <= numToPrint; i++)    {
        console.log(`${asteric.repeat(i)}`)
    }
    for (let j = numToPrint - 1; j != 0; j--)   {
        console.log(`${asteric.repeat(j)}`)
    }
}

astericFun(8)

 ////////////////////////////////////////////////////////////////////
 /* 2
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */

//Funcion sin retorno
// function mult(numToMulti)   {
//     let counter = 1

//     while (counter != 11)   {
//         console.log(`${numToMulti} X ${counter} = ${numToMulti * counter}`)
//         counter++
//     }
// }

// mult(10)


////////////////////////////////////////////////////////////
/* 3
* Pedir una palabra por promt
* Pedir un número entre 1 y 10
* Duplicar esa cantidad de veces esa palabra e imprimir en consola
* P.ej: 
* "Kodemia"
* 4
* -> "Kodemia Kodemia Kodemia Kodemia"
*/

//Funcion con retorno
// function wordRepeater(word, numToRepeat)   {
//     let repeatedWord = word.repeat(numToRepeat)
//     return repeatedWord
// }

// let result = wordRepeater('ferdinand', 4)
// console.log(result)

///////////////////////////////////////////////////////////////////
/* 4
 * 
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */
 
//Funcion con retorno
//  function earthMoon(weightEarth)    {
//     let weightMoon = (weightEarth * 1.622 / 9.81).toFixed(2)
//     return weightMoon
//  }

//  let result = earthMoon(100)
//  console.log(`Tu peso en la lunes es de ${result}`)

///////////////////////////////////////////////////////
/*6
 * Pedir al usuario 2 numeros 
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */

//  function checkNum(numA, numB)  {
//     if (numA > numB)  {
//         console.log(`El numero menor es ${numB}
//     Y el numero mayor es ${numA}`)
//     }
//     else if (numB > numA) {
//         console.log(`El numero menor es ${numA}
//     Y el numero mayor es ${numB}`)
//     }
//     else   {
//         console.log('Ningun es mayor')
//     }
//  }
 