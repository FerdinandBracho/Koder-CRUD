let search = window.location.search
let hashKoder = search.slice(search.indexOf('=') + 1)

const singleKoder = new XMLHttpRequest
singleKoder.open('GET', `https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`)

singleKoder.addEventListener('readystatechange', () => {
    if (singleKoder.readyState !== 4) {
        return
    }
    else {
        if (singleKoder.status >= 200 && singleKoder.status <= 299) {
                const response = singleKoder
                const  objectResponse = JSON.parse(response.responseText)
                console.log(objectResponse)
                let singleKoderData = ''

                for (data in objectResponse) {
                    let = {name, lastName , age, position} = objectResponse
                    
                    document.getElementById('inputNameE').setAttribute('placeholder',`Nombre: ${name}` )
                    document.getElementById('inputLastNameE').setAttribute('placeholder', `Apellido: ${lastName}`)
                    document.getElementById('inputAgeE').setAttribute('placeholder', `Edad: ${age}`)
                    document.getElementById('inputPositionE').setAttribute('placeholder', `Rol: ${position}`)

                    singleKoderData = `
                        <h3>${name} ${lastName}</h3>
                        <p>Tiene ${age} años de edad</p>
                        <p>Cumple el rol de ${position} dentro de Kodemia</p>
                    `
                }
                let cardBody = document.querySelector('.cbody')
                cardBody.innerHTML = singleKoderData
            }
        else {
            console.warn('No se pudo ejecutar')
        }
    }
})

singleKoder.send()


// !Edit Koder properties 

const editKoder = new XMLHttpRequest
editKoder.open('POTCH', `https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`)

editKoder.addEventListener('readystatechange', () => {
    if (editKoder.readyState !== 4) {
        return
    }
    else {
        if (editKoder.status >= 200 && editKoder.status <= 299) {
                const response = editKoder
                const  objectResponse = JSON.parse(response.responseText)
                console.log(objectResponse)
                let dataToPocht = {
                    name: '',
                    lastName: '',
                    age: '',
                    position: ''
                }

                let btnEdit = document.getElementById('btn-form-edit')
                btnEdit.addEventListener('click', () => {

                    dataToPocht.name = document.getElementById('inputNameE').value
                    dataToPocht.lastName = document.getElementById('inputLastNameE').value
                    dataToPocht.age = document.getElementById('inputAgeE').value
                    dataToPocht.position = document.getElementById('inputPositionE').value

                

                })


        }
        
        else {
            console.warn('No se pudo ejecutar')
        }
    }
})


editKoder.send()