
const products = [10,244,55,22,15,56,33,450,99]

let totalValue = 0
let totalDiscount = 0
let valueWithDiscount = 0

function calcDiscount(price, discount){ 
    return (price * discount) / 100
}

products.forEach(value => {
    totalValue += value
    
    if(value > 30){
        const discount = calcDiscount(value,10);
        totalDiscount += discount
        valueWithDiscount += value - discount;
    }else
        valueWithDiscount += value;        
    
});
console.log(`O valor total da compra foi de R$ ${totalValue.toFixed(2)} reais, porém você recebeu um desconto de R$ ${totalDiscount.toFixed(2)} reais, e o valor final ficou em R$ ${valueWithDiscount.toFixed(2)} reais`);

