const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acumulador, atualValue) =>{
    return acumulador + atualValue;

},0)
console.log(sum);

// -----------------------------------------------------------

const cart = [
    {name: 'Caneta', quantity: 10, price: 7.99},
    {name: 'Impressora', quantity: 1, price: 649.50},
    {name: 'Caderno', quantity: 4, price: 27.10},
    {name: 'Lapis', quantity: 3, price: 5.82},
    {name: 'Tesoura', quantity: 1, price: 19.20},
]
const amount = cart.reduce((acc,totalValue) => {
    return acc + totalValue.quantity * totalValue.price
},0)
const localValue = amount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(`O valor Total da compra foi ${localValue}`)

