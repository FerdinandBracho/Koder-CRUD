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
                            <td><a href="index.html?hashkoder=${item}" ><button onclick="deleteKoder()" class="btn btn-danger" id="btn-delete-koder">Eliminar</button></a></td>
                            <td><a href="koder.html?hashkoder=${item}" ><button class="btn btn-secondary" id="btn-delete-koder">Ver/Editar</button></a></td>
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

printTable()
