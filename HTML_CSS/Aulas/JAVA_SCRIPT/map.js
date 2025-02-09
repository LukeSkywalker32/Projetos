/*
 O método MAP serve para mapear um array para um novo array

 */

const numbers = [1, 2, 3, 4, 5];
const duble = numbers.map(value => value * 2)
console.log(duble);

// ----------------------------------------------------------------

const names = ['Luiz', 'Otávio', 'Maria', 'João'];
const upperNames = names.map(value => value.toUpperCase());
console.log(upperNames);

// ----------------------------------------------------------------

const products = [
    { name: 'Camiseta', price: 50 },
    { name: 'Calça Jeans', price: 100 },
    { name: 'Tênis', price: 150 },
    { name: 'Boné', price: 200 }
];
const discountPrices = products.map((product) => ({
  ...product, // Copia todas as propriedades do objeto original
  price: product.price * 0.9, // Aplicando 10% de desconto
}));
console.log(discountPrices);

// ----------------------------------------------------------------

const list = [
    {name: 'Luke', vip: true},
    {name: 'Luciana', vip:false},
    {name: 'Otavio', vip: false},
    {name: 'Jorge', vip: false},
    {name: 'Maria', vip: true},
    {name: 'Kelly', vip: true}
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? "Black" : "Green"
    }
    return newUser
})
console.log(newList);

//-------------------------------------------------------

const studants = [
    { name: 'João', testGrade: 7 },
    { name: 'Leila', testGrade: 5 },
    { name: 'Fernando', testGrade: 8 },
    { name: 'Larissa', testGrade: 9 },
    { name: 'Lucas', testGrade: 3 },
    { name: 'Eduardo', testGrade: 2 },
    { name: 'Leandra', testGrade: 10 }
];
const aprovedStudants = studants.map(studant =>{
    return{
        name:studant.name,
        approvedd: studant.testGrade >= 5 ? "APROVADO" :
        "REPROVADO"
    }
})
console.log(aprovedStudants);

//-------------------------------------------------------
