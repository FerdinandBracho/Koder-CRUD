let formAltaBtn = document.getElementById('btn-form-alta')

formAltaBtn.addEventListener('click', () => {
    // ! Seteo nuevo Koder 
    let inputName = document.getElementById('inputName')
    let inputLastName = document.getElementById('inputLastName')
    let inputAge = document.getElementById('inputAge')
    let inputPosition = document.getElementById('inputPosition')

    // !Funcion para limpiarlos campos inputs
    const cleanInput = () => {
        inputName.value = ''
        inputLastName.value = ''
        inputAge.value = ''
        inputPosition.value = ''
    }


    if (inputName.value === '' || 
        inputLastName.value === '' || 
        inputAge.value === '' || 
        inputPosition.value === '') {

        alert('Completa los campos obligatorios para Alta de Koder')
        cleanInput()
        return
    }
    
    let newKoder = {
        name: inputName.value,
        lastName: inputLastName.value,
        age: parseInt(inputAge.value),
        position: inputPosition.value
    }

    cleanInput()

    // ! Post de nuevo koder en BD 
    const altaRequest = new XMLHttpRequest
    altaRequest.open('POST', 'https://sessiones-js-default-rtdb.firebaseio.com/koders/.json')
    
    altaRequest.addEventListener('readystatechange', () => {
        if (altaRequest.readyState != 4) {
            return
        }
        else {
            if (altaRequest.readyState === 4 &&
            altaRequest.status >= 200 &&
            altaRequest.status <= 299) {
                let respone = altaRequest
                let objectResponse = JSON.parse(respone.responseText)
                console.log(objectResponse)
            }
            else {
                console.warn('No se pudo ejecutar')
            }
        }    
    })
    
    altaRequest.send(
        JSON.stringify(newKoder)
    )
    printTable()
})


// !Terrible repetir codigo 

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

