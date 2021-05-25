
let search = window.location.search
let idPost = parseInt(search.slice(search.indexOf('=') + 1))

let singlePostRequest = new XMLHttpRequest

singlePostRequest.addEventListener('readystatechange', () => {
    if (singlePostRequest.readyState === 4 && 
        singlePostRequest.status >= 200 &&
        singlePostRequest.status <= 299) {

            const resposePost = singlePostRequest
            const objectResponsePost = JSON.parse(resposePost.responseText)
            let postContent = ''

            postContent = `
                <h6>User Id:${objectResponsePost.userId}</h6>
                <h6>Post Id: ${objectResponsePost.id}</h6>
                <h4>Titulo: ${objectResponsePost.title}</h4>
                <p>${objectResponsePost.body}</p> 
            `
            let cardPost = document.getElementsByClassName('card-post')[0]
            
            cardPost.innerHTML = postContent

            console.log(cardPost.innerHTML)
            console.log(idPost)
        }
})

singlePostRequest.open('Get', `https://jsonplaceholder.typicode.com/posts/${idPost}`)

singlePostRequest.send()









