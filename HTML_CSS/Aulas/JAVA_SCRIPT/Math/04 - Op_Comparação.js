/*
    Operadores de comparação

    ==  => Igualdade (não verifica o tipo)
    === => Igualdade estrita (verifica o tipo)
    !=  => Diferença (não verifica o tipo)
    !== => Diferença estrita (verifica o tipo)

    >   => Maior que
    <   => Menor que
    >=  => Maior ou igual a
    <=  => Menor ou igual a
    ?   => Operador ternário    

*/

// Exemplos de igualdade (==)
console.log(5 == '5')     // true
console.log(10 == 10)     // true

// Exemplos de igualdade estrita (===)
console.log(5 === '5')    // false
console.log(10 === 10)    // true

// Exemplos de diferença (!=)
console.log(5 != '6')     // true
console.log(10 != 10)     // false

// Exemplos de diferença estrita (!==)
console.log(5 !== '5')    // true
console.log(10 !== 10)    // false

// Exemplos de maior que (>)
console.log(10 > 5)       // true
console.log(5 > 10)       // false

// Exemplos de menor que (<)
console.log(5 < 10)       // true
console.log(10 < 5)       // false

// Exemplos de maior ou igual (>=)
console.log(10 >= 10)     // true
console.log(10 >= 5)      // true
console.log(5 >= 5)       // true
console.log(5 >= 10)      // false
console.log(10 >= 15)     // false

// Exemplos de menor ou igual (<=)
console.log(5 <= 5)       // true
console.log(5 <= 10)      // true
console.log(10 <= 5)      // false

// Exemplo de operador ternário (?)
let idade = 18
const status = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
console.log(status)       // 'Maior de idade'