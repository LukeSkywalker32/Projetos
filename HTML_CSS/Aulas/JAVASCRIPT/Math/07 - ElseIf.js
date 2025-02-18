/*
     else if
        else if é uma condição que será executada caso a condição anterior seja falsa 
 */

const nota = 50;

if (nota >= 90) {
    console.log("A - Excelente");
} else if (nota >= 80) {
    console.log("B - Muito bom");
} else if (nota >= 70) {
    console.log("C - Bom");
} else if (nota >= 60) {
    console.log("D - Regular");
} else {
    console.log("F - Reprovado");
}