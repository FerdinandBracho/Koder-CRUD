// ! Tabla arrays 
let tablaKoder = document.querySelector(".tbody-array")
let koders = ['antonio', 'victor', 'rose', 'Ferdinand','Jorge']
let listKoder = ''

koders.forEach((koderName, index) =>{
    listKoder += `
        <tr>
            <td> ${index} </td>
            <td> ${koderName} </td>
        </tr>
    `
})

console.log(listKoder)
tablaKoder.innerHTML = listKoder

// !Tabla Objetos 

let tablaKoderO = document.querySelector(".tbody-obj")
let kodersObject  = [
    {
        name: 'Ferdinand',
        lastName: 'bracho',
        age: 30,
        github:'@Ferdinand-Bracho'
    },{
        name:'Ferdinand',
        lastName:'bracho',
        age: 30,
        github:'@Ferdinand-Bracho'
    },{
        name:'Ferdinand',
        lastName:'bracho',
        age: 30,
        github:'@Ferdinand-Bracho'
    },{
        name: 'Ferdinand',
        lastName: 'bracho',
        age: 30,
        github:'@Ferdinand-Bracho'
    },{
        name:'Ferdinand',
        lastName:'bracho',
        age: 30,
        github:'@Ferdinand-Bracho'
    }
]

let listKoderO = ''
kodersObject.forEach((item, index) => {
    let {name, lastName, age, github} = item
    listKoderO += `
        <tr>
            <td> ${index} </td>
            <td> ${name}</td>
            <td> ${lastName}</td>
            <td> ${age}</td>
            <td> ${github}</td>
        </tr>
    `
})

tablaKoderO.innerHTML = listKoderO


// koders.forEach((koderName, index) =>{
//     listKoder += `
//         <tr>
//             <td> ${index} </td>
//             <td> ${koderName} </td>
//         </tr>
//     `
// })

// console.log(listKoder)
// tablaKoder.innerHTML = listKoder