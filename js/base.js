// !ejercicio en clase 1 

let koders  =  [
    {
        name: 'jorge',
        lastName: 'camarillo',
        age: 30
    },{
        name: 'ferdi',
        lastName: 'cam',
        age: 33
    },{
        name: 'finand',
        lastName: 'llo',
        age: 13
    },{
        name: 'ferdinand',
        lastName: 'bracho',
        age: 333
    }
]

koders.forEach(element => {
    element.fullName = function(){
        return `Mi nombre es ${this.name} ${this.lastName}`
    }
})

koders.forEach(koder => console.log(koder.fullName()))
