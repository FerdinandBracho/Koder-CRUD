// ! Practica #1 - Contabilizar votantes
const totalVoters = arr => arr.reduce((total, value) => total += value[1], 0)

// !Declaracion, ejecuscion y presentacion de consola de funcion
let arrOne = [ ["jorge", false] , ["luis", true] , ["Victor", true],['ferdinand', true], ['Rosy', true]]
console.log(totalVoters(arrOne ))

///////////////////////////////////////////////////

// ! Practica #2 - Funciones varias aplicables a pedidos

// ! Declaracion de funciones 
const totalPaella = arr => arr.reduce((total, value) => total+= value[1] === 'paella' ? 1 : 0 , 0)
const postresPlatanoHelado = arr => arr.filter((value) => value[2] === 'platano' || value[2] === 'helado')
const costoSuperior = arr => arr.filter((value) => value[3] > 90)
const costoMenor = arr => arr.filter((value) => value[3] <= 90)

// !Array de pedidos
let pedidos = 
    [
        ['ensalada de pepinos','paella','platano', 100],
        ['ensalada de tomates','pescado','helado', 120],
        ['ensalada simple','paella','yogurt', 80],
        ['ensalada simple','enchiladas','yogurt', 80],
        ['ensalada cesar','salmón','platano', 100],
    ]

// ! Ejecucion de funciones y presentacion de resultados en consola
console.log(`Total de paellas pedidas: ${totalPaella(pedidos)}`)

console.group('Pedidos con postres selecionados: ')
console.table(postresPlatanoHelado(pedidos))
console.groupEnd()

console.group('Pedidos con costo superior a 90$: ',)
console.table(costoSuperior(pedidos))
console.groupEnd()

console.group('Pedidos con costo menor a 90$: ')
console.table(costoMenor(pedidos))
console.groupEnd()

//////////////////////////////////////////////////
/**
 * Estudiar el tema de Objetos y métodos de Objetos
 */