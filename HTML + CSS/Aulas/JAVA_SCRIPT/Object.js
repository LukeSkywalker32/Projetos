

let luke = {
    name: 'Luke Skywalker',
    age: 33,
    address: {
        street: 'Rua dos Anões',
        number: 123,
        city: 'Tatooine',
        state: 'Darth',
        country: 'Demolition Planet',
    }
}
luke.address.number = 305; //alterando o valor da propriedade number

console.log(luke.age)
console.log(luke.address.street)
console.log(luke.address.number)
console.log(luke.address.city)