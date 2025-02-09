//conseguimos add parametros nas funçoes.


function sum (value1,value2){
    console.log(value1+value2);
}
sun(3,3)

//---------------------------------

function sub (value1 = 1,value2 = 0){ //aqui estamos dando valor padrao para o value1 e value2  
    console.log(value1-value2);
}
sub() // aqui se chamar a funçao sem parametros ele vai usar o valor padrao.
sub(3,3)

//---------------------------------

function multi (value1,value2){
    console.log (value1*value2)
}
multi(3,2)

// ---------------------------------

const myName = "Lucas"
function sayMyName(name1 = myName){
    console.log(`Meu nome é: ${name1}`)
}
sayMyName("Luiz")