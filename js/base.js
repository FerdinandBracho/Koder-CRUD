// ! Ejercicio en clase 1 
let pedidos = [
    {
        entrada: 'ensalado de pepinos',
        principal: 'paella',
        postre: 'platano',
        precio: 100
    }, {
        entrada: 'ensalado de tomates',
        principal: 'pescado',
        postre: 'helado',
        precio: 120
    }, {
        entrada: 'ensalado simple',
        principal: 'paella',
        postre: 'yogurt',
        precio: 80
    }, {
        entrada: 'ensalado simple',
        principal: 'enchilada',
        postre: 'yogurt',
        precio: 80
    }, {
        entrada: 'ensalado cesar',
        principal: 'salmon',
        postre: 'platano',
        precio: 100
    },
]

    // ! Declaracion de funciones 
const totalPaella = arr => arr.reduce((total, value) => total+= value.principal === 'paella' ? 1 : 0 , 0)
const postresPlatanoHelado = arr => arr.filter((value) => value.postre === 'platano' || value.postre === 'helado')
const costoSuperior = arr => arr.filter((value) => value.precio > 90)
const costoMenor = arr => arr.filter((value) => value.precio <= 90)

    // ! Ejecucion de funciones y presentacion de resultados en consola
console.log(`Total de paellas pedidas: ${totalPaella(pedidos)}`)

console.group('Pedidos con postres selecionados: ')
console.table(postresPlatanoHelado(pedidos))
console.groupEnd()

console.group('Pedidos con costo superior a $90: ',)
console.table(costoSuperior(pedidos))
console.groupEnd()

console.group('Pedidos con costo menor o igual $90: ')
console.table(costoMenor(pedidos))
console.groupEnd()

////////////////////////////////////////////////////
