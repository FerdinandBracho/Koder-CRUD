//! Ejercicio en clase 1
const stringItUp = arr => arr.map((value) => value.toString())

let arrayToTest = [2,5,100]
console.log(stringItUp(arrayToTest))

//! Ejercicio en clase 2
const capitalizeNames = arr => arr.map((value) => value[0].toUpperCase() + value.substring(1).toLowerCase())
 
const arrTT = ["Jorge", "AntoniO", "JUan", "Victor"]
console.log(capitalizeNames(arrTT))

//! Ejercicio en clase 3
const joinNames = (arr, arrt) => arr.map((value, index) => value + " " + arrt[index])

let arrOne = ['jorge', 'luis']
let arrTwo = ['camarillo','cristobal']
console.log(joinNames(arrOne, arrTwo))

//! Ejercicio en clase 4 
const stringCon = arr => arr.reduce((result, value) => result += value, '')

let arrThree = [1,2,3]
console.log(`The result of the reduce operation is: ${stringCon(arrThree)}`)

//! Ejercicio en clase 5
const totalShoppingCart = arr => arr.reduce((result, value, index) => result += (value[1]), 0)

let arrFive = 
    [ 
        ["Reloj", 500] , 
        ["Reloj", 300] , 
        ["Reloj", 1200],
        ["Reloj", 5000]
    ] 
console.log(`El total es de: $${totalShoppingCart(arrFive)},00`)