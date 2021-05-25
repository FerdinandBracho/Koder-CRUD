// !Metodo de XHR - POST
// let objNewKoder = {
//     name : 'jorge',
//     lastname : 'camarillo',
//     age: 30,
//     position : 'mentor'
// }
// const request = new XMLHttpRequest()
// request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return 
//     } else {
//         if(request.status >= 200 && request.status <= 299){
//             const response  = request
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// request.send(
//     JSON.stringify(objNewKoder)
// )

// !MEtodo de XHR - Delete 
// const requestDelete = new XMLHttpRequest()
// let  idKoder = '-MaWC7TH9nOJUY5LHzQs'
// requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`)
// requestDelete.addEventListener('readystatechange', () => {
//     if(requestDelete.readyState !== 4) {
//         return 
//     } else {
//         if(requestDelete.status >= 200 && requestDelete.status <= 299){
//             const response  = requestDelete
//             const objectResponse = JSON.parse(response.responseText)
//             console.log(objectResponse)
//         } else {
//             console.log('No se pudo ejecutar')
//         }
//     } 
// })
// requestDelete.send()