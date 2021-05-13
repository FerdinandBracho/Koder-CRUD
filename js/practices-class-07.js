/**
 * Estudiar los metodos
 * .map()
 * .reduce()
 */

//  const myAwesomeArray = [1, 2, 3, 4, 5]

//  const startForEach = performance.now()
//  myAwesomeArray.forEach(x => (x + x) * 10000000000)
//  const endForEach = performance.now()
//  console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)
 
//  const startMap = performance.now()
//  myAwesomeArray.map(x => (x + x) * 10000000000)
//  const endMap = performance.now()
//  console.log(`Speed [map]: ${endMap - startMap} miliseconds`)

// https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/

//////////////////////////////////////////////////////////////
/**
 * Ejericio 1:
 * Realizar una funcion que dado un array de strings como parametro
 * retorne un nuevo array con todos los strings que tienen como maximo 5 caracteres
 */

const fiveCharactersOnly = arr => arr.filter((value) => typeof value === "string" && value.length <= 5) 

// test
let responseFiveCharacters = fiveCharactersOnly(["dog", "wolf", "family", "eaten", "camping"])
// [ "dog", "wolf", "eaten"]

console.log(fiveCharactersOnly(responseFiveCharacters))

//////////////////////////////////////////////////////////////
/**
 * Ejericio 2:
 * Realizar una funcion que dado un array de nombres de koders como parametro
 * Retorne un nuevo array con todos koders que tienen mas de 1 nombre
 * 
 */

 const twoNamesKoders = arr => arr.filter((value) => value.includes(" "))

// test
let responseTwoNamesKoders = twoNamesKoders(["Antonio", "Victor Yair", "Luis Carlos", "Victor", "José Omar"])
// ["Victor Yair", "Luis Carlos", "José Omar"]

console.log(twoNamesKoders(responseTwoNamesKoders))


