// !Extrayendo query param 
const params = new URLSearchParams(window.location.search)
let hashKoder = params.get('hashkoder')

// ? //////////////////////////////////////////////////////////////////////////////

// ! Funcion con Fetch para jalar data del koder seleccionado y mostrarla
const printSingleKoder = () => {
    fetch(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`)
    .then(res => {
        return res.json()
    }).then(response => {
        let {name, lastName, age, position} = response
        document.getElementById('inputNameEdit').setAttribute('value', name)
        document.getElementById('inputLastNameEdit').setAttribute('value', lastName)
        document.getElementById('inputAgeEdit').setAttribute('value', age)
        document.getElementById('inputPositionEdit').setAttribute('value', position)

        let singleKoderData = ''
        for (dta in response) {
            singleKoderData = `
                <h3>${name} ${lastName}</h3>
                <p>Tiene ${age} años de edad</p>
                <p>Cumple el rol de ${position} dentro de Kodemia</p>   
    `
        }
        document.querySelector('.cbody').innerHTML = singleKoderData
    }).catch((error) => {
        console.error('Error:', error);
      });
}

printSingleKoder()

// ? //////////////////////////////////////////////////////////////////////////////

// !Edit Koder properties 

let btnEdit = document.getElementById('btn-form-edit')

btnEdit.addEventListener('click', () => {
    let dataToPut = {
        name: document.getElementById('inputNameEdit').value,
        lastName: document.getElementById('inputLastNameEdit').value,
        age: document.getElementById('inputAgeEdit').value,
        position: document.getElementById('inputPositionEdit').value
    }
    
    fetch(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`, {
        method: 'PUT',
        body: JSON.stringify(dataToPut)
    }).then(res => {
        printSingleKoder()
    }).catch((error) => {
        console.error('Error:', error);
      });
})

// ? //////////////////////////////////////////////////////////////////////////////