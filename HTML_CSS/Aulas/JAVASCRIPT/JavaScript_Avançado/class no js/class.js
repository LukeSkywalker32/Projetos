
// Classes
// uma forma de criar uma classe é assim:
class Person {
    name;
    age;

    talk() {
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos`);
    }
}

const newPerson = new Person()

newPerson.name = "João"
newPerson.age = 20
newPerson.talk()

// outra forma de criar uma classe é assim:

class Person {
    constructor(name, age) {
        console.log(`Ola, meu nome é ${name}`);

        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos`);
    }
}

const newPerson = new Person("João", 20)
const newPerson2 = new Person("Lucio", 55)
const newPerson3 = new Person("Malcon", 100)
newPerson.talk()
newPerson2.talk()
newPerson3.talk()