export function soma(a, b) {
  return a + b;
}
export function subtracao(a, b) {
  return a - b;
}
export function multiplicacao(a, b) {
  return a * b;
}

export const person = {
  name: "João",
  age: 25,
  city: "São Paulo",
  talk: function () {
    console.log(
      `Ola, meu nome é ${this.name}, tenho ${this.age} anos e moro em ${this.city}`
    );
  },
};
console.log(person.talk())
