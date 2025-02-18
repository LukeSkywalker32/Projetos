/*
ARROW FUNCTIONS VS FUNÇÕES TRADICIONAIS

1. Função Tradicional:
function soma(a, b) {
    return a + b;
}

Arrow Function:
const soma = (a, b) => a + b;

2. Função Tradicional com um parâmetro:
function dobro(x) {
    return x * 2;
}

Arrow Function com um parâmetro:
const dobro = x => x * 2;

3. Função Tradicional sem parâmetros:
function dizOla() {
    return "Olá!";
}

Arrow Function sem parâmetros:
const dizOla = () => "Olá!";

4. Função Tradicional com múltiplas linhas:
function processa(x) {
    const y = x * 2;
    const z = y + 1;
    return z;
}

Arrow Function com múltiplas linhas:
const processa = x => {
    const y = x * 2;
    const z = y + 1;
    return z;
}

Principais Diferenças:
- Arrow functions têm sintaxe mais curta e limpa
- Arrow functions não criam seu próprio 'this'
- Arrow functions não podem ser usadas como construtoras
- Arrow functions têm retorno implícito quando escritas em uma linha
- Ideais para callbacks e programação funcional
*/


//Exemplo 1
const soma = (number1,number2) => number1 + number2
console.log(soma(1,2))

//Exemplo 2
const soma2 = (number1,number2) => {
    return number1 + number2
}