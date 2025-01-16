//const myArray = [1, 2, 3, "Olá Mundo", 5, 6, 7, 8, "Java Script", 10, {name: "Luke", age: 21}]; // Isso é um array, onde eu posso armazenar qualquer tipo de dados como: números, strings, objetos, etc.


const aline = {
    name: "Aline",
    age: 33,
    nomeDoConjuge: "Lucas",
    id: null,
}

const myArray = [1,2,3,4,5,6,7]
myArray[1] = "Olá Mundo"; // alterando o valor de um array
myArray[2] = aline; // adicionando um objeto dentro de um array
console.log(myArray[2].id)// acessando a posição 2 do array e acessando a propriedade id do objeto





const myArray2 = [
    {name: "Aline", age: 33},
    {name: "Lucas", age: 21},
    {name: "Maria", age: 25},
]
myArray2[2].name = "Eduarda"; // alterando o valor de um objeto dentro de um array
console.log(myArray2[2]) // acessando o terceiro objeto do array
console.log(myArray2[1]) // acessando o segundo objeto do array

