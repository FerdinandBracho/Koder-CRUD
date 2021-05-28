$(document).ready(() => {    
// !Pintar Tabla en pantalla principal 
    
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
        $('.t-koder tbody').html(postTableKoders)
    }
    
    // !Funcion para get y ejecucion de funcion printTable con la data como argumento
    const printTableFinal = () => {
        $.get('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json', (data) => {
            printTable(data)
        })
    }
    
    printTableFinal()
    
    // ? //////////////////////////////////////////////////////////////////////////////////////
// !Alta de nuevo Koder/Mentor

    // !Funcion para limpiarlos campos inputs
    const cleanInput = () => {
        inputName.value = ''
        inputLastName.value = ''
        inputAge.value = ''
        inputPosition.value = ''
    }
    
    // !Evento para accionar el alta 
    $('#btn-form-alta').click(() => {
        // ! Seteo datos
        let inputName = $('#inputName').val()
        let inputLastName = $('#inputLastName').val()
        let inputAge = $('#inputAge').val()
        let inputPosition = $('#inputPosition').val()
    
        // !Validacion de compos
        if (inputName === '' || 
            inputLastName === '' || 
            inputAge === '' || 
            inputPosition === '') {
            alert('Completa los campos obligatorios para Alta de Koder')
            cleanInput()
            return
        }
        
        // !Seteo nuevo koder obj
        let newKoder = {
            name: inputName,
            lastName: inputLastName,
            age: parseInt(inputAge),
            position: inputPosition
        }
    
        // !Post a la db del nuevo koder
          $.post('https://sessiones-js-default-rtdb.firebaseio.com/koders/.json', JSON.stringify(newKoder), (response) => {
              cleanInput()
              printTableFinal()
              console.log(response)
          })
    })
    
    // ? //////////////////////////////////////////////////////////////////////////////////////
    // ! Eliminar Koder seleccionado

    $('.t-koder').on('click', '.btn-delete-koder', function() {
        let koderId = $('.btn-delete-koder').data('id')

        // !Fetch delete koder seleccionado
        fetch(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${koderId}/.json`, {
            method: 'DELETE'
        }).then(res => {
            res.json()
            console.log(`Koder ${koderId} eliminado con exito`)
            return printTableFinal()
        }).catch((error) => {
            console.error('Error:', error);
        });

    })
     
    // ? //////////////////////////////////////////////////////////////////////////////////////

})
