/*

    > = maior
    < = menor

    >= = maior ou igual
    <= = menor ou igual

    == = igual
    === = igual e do mesmo tipo

    != = diferente
    !== = diferente e do mesmo tipo

*/



const notaDoAluno = 7;
const notaDeCorte = 7;

if (notaDoAluno >= notaDeCorte) {
    console.log("Aprovado");
} 
else if (notaDoAluno === notaDeCorte) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}