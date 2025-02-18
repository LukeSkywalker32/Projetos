/*
    Operador Ternário
    Condição ? Se verdadeiro (if)
    Condição : Se falso (else)
    && (if sem else)
*/

const salary = 2000;

// if (salary < 3000) {
//     console.log('Você ganha pouco')
// } else {
//     console.log('Você ganha muito')
// }

// Exemplo simples de operador ternário
const idade = 18;
const podeDirigir =
  idade >= 18 ? console.log("Pode dirigir") : console.log("Não pode dirigir");

// Exemplo com expressão mais complexa
const temperatura = 32;
const alerta =
  temperatura > 30
    ? console.log("Temperatura muito alta")
    : console.log("Temperatura normal");

// Exemplo com operação matemática
const numero1 = 6;
const resultado1 = numero > 5 ? numero * 2 : numero;
console.log(resultado1);

// Exemplo com string template
const nome = "";
const saudacao = nome ? `Olá ${nome}!` : "Olá visitante!"; // Se verdadeiro entao nome, se falso entao visitante
console.log(saudacao);

// Exemplo de ternario com if, else if e else aninhados
const numero = 7;
const resultado =
  numero > 10 // Se verdadeiro entao maior que 10
    ? "Maior que 10"
    : numero === 10 // Se verdadeiro entao igual a 10
    ? "Igual a 10"
    : "Menor que 10"; // Se falso entao menor que 10

console.log(resultado); // Saída: "Menor que 10"
console.log(typeof resultado);
