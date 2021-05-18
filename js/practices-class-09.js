// ! ejercicio 1 
 
let library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
]

// const titleSort = arr => arr.sort(function(a, b){
//     if(a.title.toLowerCase() < b.title.toLowerCase()) { 
//          return -1; }
//     if(a.title.toLowerCase() > b.title.toLowerCase()) { 
//            return 1; }
//     return 0;
// })

    // !Declaracion de funciones
const titleSort = arr => arr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
const authorSort = arr => arr.sort((a, b) => a.author.toLowerCase().localeCompare(b.author.toLowerCase()))
const statusSort = arr => arr.sort((b, a) => a.readingStatus.toString().localeCompare(b.readingStatus.toString()))
const filteredBooks = arr => arr.filter((item) => item.readingStatus === true)

console.group('Sorted by title: ')
console.table(titleSort(library))
console.groupEnd()

console.group('Sorted by Author: ')
console.table(authorSort(library))
console.groupEnd()

console.group('Sorted by Reading Status: ')
console.table(statusSort(library))
console.groupEnd()

console.group('Filtered by Status: ')
console.table(filteredBooks(library))
console.groupEnd()

//  * Filtre los libros que estan ocupados

// ! Ejercicio 2 

let stringTo = 'abcdeghiaaaaa'

const moveCharsForward = str => { 
        str = str.split('')

        return str.map((item) => {
        item = item.charCodeAt()+1
        item = String.fromCharCode(item)
        return item
    }).join('')
}
console.group('Ejercicio 2 - Move Chars Forward')
console.log(moveCharsForward(stringTo))
console.groupEnd()

// ! Ejercicio 3 
let pers =[
    {
        name:'Jorge',
        birthdate: '1991/05/12'
    },
    {
        name:'luis',
        birthdate: '1991/02/12'
    },
    {
        name:'mario',
        birthdate: '1991/04/12'
    },
    {
        name:'victor',
        birthdate: '1991/09/12'
    }
]


const convertBirthdates = arr => {
    arr.forEach(element => {
        for (property in element)   {
            if (property === "birthdate")   {
                element[property] = element[property].split("/").reverse().join()
            }
        }
    })
}

console.group('Ejercicio 3 - Convert Birthdates')
convertBirthdates(pers)
console.table(pers)