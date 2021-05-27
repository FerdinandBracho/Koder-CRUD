// !Pintar Tabla en pantalla principal 
let tableKoder = document.querySelector('.t-koder tbody')

// !Funcion para pintar tabla (toma un arry como argumento al ejecutarse)
const printTable = objectKoder => {
    let postTableKoders = ''
    for (item in objectKoder) {
        let koder = objectKoder[item]
        postTableKoders += `
        <tr>
            <td>${koder.name}</td>
            <td>${koder.lastName}</td>
            <td>${parseInt(koder.age)}</td>
            <td>${koder.position}</td>
            <td><a href="koder.html?hashkoder=${item}" ><button class="btn btn-secondary" id="btn-delete-koder">Ver/Editar</button></a></td>
            <td><button class="btn btn-danger btn-delete-koder" data-id="${item}" >Eliminar</button></td>
        </tr>                   
        `                           
    } 
    document.querySelector('.t-koder tbody').innerHTML = postTableKoders
}

// !Funcion para Fetch y ejecucion de funcion printTable con response como argumento
const printTableFinal = () => {
    fetch('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json')
    .then(result => {
        return result.json()
    }).then(response => {
    printTable(response)
    }).catch((error) => {
        console.error('Error:', error);
      });
}


document.querySelector('body').addEventListener("pageshow", printTableFinal())

// ? //////////////////////////////////////////////////////////////////////////////////////

// ! Alta de Nuevo Koder 
let formAltaBtn = document.getElementById('btn-form-alta')

// !Funcion para limpiarlos campos inputs
const cleanInput = () => {
    inputName.value = ''
    inputLastName.value = ''
    inputAge.value = ''
    inputPosition.value = ''
}

// !Evento para accionar el alta 
formAltaBtn.addEventListener('click', () => {
    // ! Seteo datos
    let inputName = document.getElementById('inputName')
    let inputLastName = document.getElementById('inputLastName')
    let inputAge = document.getElementById('inputAge')
    let inputPosition = document.getElementById('inputPosition')

    // !Validacion de compos
    if (inputName.value === '' || 
        inputLastName.value === '' || 
        inputAge.value === '' || 
        inputPosition.value === '') {

        alert('Completa los campos obligatorios para Alta de Koder')
        cleanInput()
        return
    }
    
    // !Seteo nuevo koder obj
    let newKoder = {
        name: inputName.value,
        lastName: inputLastName.value,
        age: parseInt(inputAge.value),
        position: inputPosition.value
    }

    // !Fetch Post a la db del nuevo koder
    fetch('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json', {
        method: 'POST',
        body: JSON.stringify(newKoder)
    }).then(res => {
        cleanInput()
        printTableFinal()
        return res.json()
    }).then(response => {
        console.log(response)
    }).catch((error) => {
        console.error('Error:', error);
      });

})

// ? //////////////////////////////////////////////////////////////////////////////////////

// ! Eliminar Koder seleccionado
tableKoder.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete-koder')) {
        let idkoder = e.target.dataset.id

        // !Fetch delete koder seleccionado
        fetch(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${idkoder}/.json`, {
            method: 'DELETE'
        }).then(res => {
            res.json()
            console.log(`Koder ${idkoder} eliminado con exito`)
            return printTableFinal()
        }).catch((error) => {
            console.error('Error:', error);
          });

    }           
})

// ? //////////////////////////////////////////////////////////////////////////////////////