/*
Math -> Matemática
    - pow(2,2) - potenciação 2²= 4
    - sqrt(25,2) - raiz quadrada √25 = 5
    - PI - 3,14
    - ceil - arredonda para cima
    - floor - arredonda para baixo
    - round - arredonda para o mais proximo
    - max - retorna o maior valor
    - min - retorna o menor valor

    - random() - gera um número aleatório entre 0 e 1
    - random() * 100 - gera um número aleatório entre 0 e 100
    - random() * 100 + 1 - gera um número aleatório entre 1 e 100

*/
const result = Math.pow(2,2) // Traz a potenciação 2²= 4
console.log(result)

const result2 = Math.PI // Traz o número PI = 3,14
console.log(result2)

const result3 = Math.sqrt(9) // Traz a raiz quadrada de um numero
console.log(result3)

const result4 = Math.ceil(3.14) // arredonda para cima
console.log(result4)

const result5 = Math.floor(3.14) // arredonda para baixo
console.log(result5)

const result6 = Math.round(3.5)// arredonda para o mais proximo sendo assim o 3.5 fica 4 e o 3.4 fica 3
console.log(result6)

const result7 = Math.max(1,2,3,4,5,6,7,8,9,10) // retorna o maior valor
console.log(result7)

const result8 = Math.min(-9,0,1,2,3,4,5,6,7,8,9,10) // retorna o menor valor
console.log(result8)

const result9 = Math.random() // gera um número aleatório entre 0 e 1
console.log(result9)

const result10 = Math.random() * 100 // gera um número aleatório entre 0 e 100
console.log(result10)

const result11 = Math.floor(Math.random() * 101) // gera um número aleatório entre 0 e 100 e arredonda para baixo
console.log(result11)