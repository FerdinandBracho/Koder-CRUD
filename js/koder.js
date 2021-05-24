


// console.log(koders)
// http://127.0.0.1:5500/?idkoder=233443
let search = window.location.search
let start = search.indexOf('=') + 1
let idkoder = parseInt(search.slice(start))

let koderObject = koders.filter((koder)=> {
    if(koder.id === idkoder){
        return  koder
    }
})[0]

const printKoder = (objkoder) => {
    let {id, bio, git }= objkoder
    document.querySelector('.card-title').innerText = id
    document.querySelector('.card-text').innerText = bio
    document.querySelector('.btn-primary').innerText = git
    document.querySelector('.btn-primary').setAttribute('href',`https://github.com${git}`)
    document.querySelector('.btn-primary').setAttribute('target','_blank')
}

printKoder(koderObject)