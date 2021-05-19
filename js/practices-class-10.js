function person (personName, personLastName, personAge)    {
    this.name = personName,
    this.lastName =  personLastName,
    this.age =personAge
}

let person1 = new person('ferdinand', 'bracho', 30)
let person2 = new person('marco', 'cardoza', 30)
let person3 = new person('Day', 'Rodriges', 30)
let personas = []

personas.push(person1,person2,person3)

console.log(personas)
