$(document).ready(function() {
    
    // !Extrayendo query param 
    const params = new URLSearchParams(window.location.search)
    let hashKoder = params.get('hashkoder')
    
    // ? //////////////////////////////////////////////////////////////////////////////
    
    // ! Funcion con get para jalar data del koder seleccionado y mostrarla
    const printSingleKoder = () => {
        $.get(`https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`, (data) => {
            let {name, lastName, age, position} = data
            $('#inputNameEdit').attr('value', name)
            $('#inputLastNameEdit').attr('value', lastName)
            $('#inputAgeEdit').attr('value', age)
            $('#inputPositionEdit').attr('value', position)

            let singleKoderData = ''
            for (d in data) {
                singleKoderData = `
                    <h3>${name} ${lastName}</h3>
                    <p>Tiene ${age} años de edad</p>
                    <p>Cumple el rol de ${position} dentro de Kodemia</p>   
                `
            }
            $('.cbody').html(singleKoderData)
        })
    }

    printSingleKoder()
    
    // ? //////////////////////////////////////////////////////////////////////////////
    
    // !Edit Koder properties 
    $('#btn-form-edit').click(() => {
        let dataToPut = {
            name: $('#inputNameEdit').val(),
            lastName: $('#inputLastNameEdit').val(),
            age: $('#inputAgeEdit').val(),
            position: $('#inputPositionEdit').val()
        }

            $.ajax({
                url: `https://sessiones-js-default-rtdb.firebaseio.com/koders/${hashKoder}/.json`,
                data: JSON.stringify(dataToPut),
                type: 'PUT',
                datatype: 'json',
                success: function(){
                    console.log('jansjkdnajksd')
                    printSingleKoder()
                },
                error: function(xhr){
                    console.log(xhr.statusText)
                },
                complete: function(){
                    console.log('Peticion Realizada')
                }
            })
    })
    
    // ? //////////////////////////////////////////////////////////////////////////////

})
