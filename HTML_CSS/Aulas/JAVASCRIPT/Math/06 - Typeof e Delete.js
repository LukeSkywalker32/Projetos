/* 
    OPERADORES TYPEOF E DELETE

    TYPEOF -> retorna o tipo da variável

    DELETE -> remove uma propriedade de um objeto

*/

// Exemplos com typeof
const numero = 42;
console.log(typeof numero); // "number"

const texto = "Olá mundo";
console.log(typeof texto); // "string"

const booleano = true;
console.log(typeof booleano); // "boolean"

const array = [1, 2, 3];
console.log(typeof array); // "object"

const objeto = {
    nome: "João",
    idade: 25
};
console.log(typeof objeto); // "object"

const funcao = function() { return "Olá"; };
console.log(typeof funcao); // "function"

// Exemplos com delete
const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

console.log(pessoa); // { nome: "Maria", idade: 30, cidade: "São Paulo" }
delete pessoa.idade;
console.log(pessoa); // { nome: "Maria", cidade: "São Paulo" }

const frutas = ["maçã", "banana", "laranja"];
delete frutas[1];
console.log(frutas); // ["maçã", empty, "laranja"]