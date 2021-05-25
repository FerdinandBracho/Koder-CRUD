// Instanciarlo
// Abrir la conexion
// Enviar la petición

// ! JS para traer datos y pintarlos en el html en la tabla de Post 
const printPost =  arr =>   {
    let acumulador = ''

    arr.forEach(post => {
        let {userId, id, title, body} = post

        acumulador += `
        <tr>
            <td>${userId}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${body}</td>
            <td><a href="post.html?idPost=${id}"><button class="btn btn-dark btn-post">Ver Post</button></a></td> 
        </tr>
        ` 
    })
    let postsTable = document.querySelector('.t-post tbody')
    postsTable.innerHTML = acumulador
}

const postsRequest = new XMLHttpRequest()

postsRequest.addEventListener('readystatechange', () => {
    if (postsRequest.readyState !== 4) {
        return
    }
    else {
        if (postsRequest.status >= 200 && postsRequest.status <= 299) {
            const responsePost = postsRequest
            const objectResponsePost = JSON.parse(responsePost.responseText)
            printPost(objectResponsePost)
        }
        else {
            console.error('No se pudo ejecutar')
        }
    }
})

postsRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts')
postsRequest.send()

// !Js para traer datos y pintalor en la table de comentarios
const printComment = arr => {
    let acumulador= ''

    arr.forEach(comment => {
    let {postId, id, name, email, body} = comment
    acumulador += `
        <tr>
            <td>${postId}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${body}</td>
            <td><a href/post.html?idpost=${acumulador.id}"><button class="btn btn-dark">Ver Comment</button></a></td> 
        </tr>    
    `
    })
    let commentsTable = document.querySelector('.t-comments tbody')
    commentsTable.innerHTML = acumulador
}

const commentsRequest = new XMLHttpRequest

commentsRequest.addEventListener('readystatechange', () => {
    if(commentsRequest.readyState !== 4) {
        return
    }
    else {
        if (commentsRequest.status >= 200 && commentsRequest.status <= 299) {
            let responeComments = commentsRequest
            let objectResponseCommets =  JSON.parse(responeComments.responseText)
            printComment(objectResponseCommets)
        }
        else {
            console.error('No se pudo ejecutar')
        }
    }
})

commentsRequest.open('GET','https://jsonplaceholder.typicode.com/comments')
commentsRequest.send()






