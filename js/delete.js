
function deleteKoder() {

    let search = window.location.search
    let hashKoder = search.slice(search.indexOf('=') + 1)

    const deleteRequest = new XMLHttpRequest
    deleteRequest.open('DELETE', `https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`)

    deleteRequest.addEventListener('readystatechange', () => {
        if (deleteRequest.readyState !== 4) {
            console.log(deleteRequest.readyState)
            return
        }
        else {
            if (deleteRequest.status >= 200 && deleteRequest.status <= 299) {
                    const response = deleteRequest
                    const  objectResponse = JSON.parse(response.responseText)
                    console.log(objectResponse)
                }
            else {
                console.warn('No se pudo ejecutar')
            }
        }
    })

    deleteRequest.send()
    //printTable()
}


// !Terrible repedir codigo otra vez 
function printTable() {

    let tableKoder = document.querySelector('.t-koder tbody')

    const tableRequest = new XMLHttpRequest

    tableRequest.addEventListener('readystatechange', () => {
        if (tableRequest.readyState != 4) {
            return
        }
        else {
            if (tableRequest.readyState === 4 &&
                tableRequest.status >= 200 &&
                tableRequest.status <= 299) {
                    const response = tableRequest
                    const objectResponse = JSON.parse(response.responseText)                    
                    let postTableKoders = ''

                    for (item in objectResponse) {
                        postTableKoders += `
                        <tr>
                            <td>${objectResponse[item].name}</td>
                            <td>${objectResponse[item].lastName}</td>
                            <td>${parseInt(objectResponse[item].age)}</td>
                            <td>${objectResponse[item].position}</td>
                            <td><a href="index.html?hashkoder=${item}"><button class="btn btn-danger" id="btn-delete-koder">Eliminar</button></a></td>
                            <td><button class="btn btn-secondary" id="btn-delete-koder">Ver/Editar</button></td>
                        </tr>                   
                        `                           
                    } 

                    tableKoder.innerHTML = postTableKoders
                }
            else {
                console.warn('No se pudo ejecutar')
            }
        }
    })

    tableRequest.open('GET', 'https://sessiones-js-default-rtdb.firebaseio.com/koders/.json')
    tableRequest.send()
}

