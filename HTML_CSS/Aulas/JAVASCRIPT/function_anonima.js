// function anonima

//função tradicional
function soma (a, b) {
    return a + b;
};

console.log(soma(5, 3)); 

// functon callback
setTimeout(function () { //função sem nome especifico
  console.log("Executado após 2 segundos");
}, 1000);

//arrow function

const multiplicar = (a, b,c) => a * b - c;
console.log(multiplicar(4, 2, 2)); 
