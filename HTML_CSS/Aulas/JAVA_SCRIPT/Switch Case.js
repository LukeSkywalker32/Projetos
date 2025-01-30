// Switch Case nada mais é que um if/else em formato de tabela

//Exemplo 1

let cor = "verde";

switch (cor) {
  case "vermelho":
    console.log("A cor é vermelha");
    break;
  case "azul":
    console.log("A cor é azul");
    break;
  case "verde":
    console.log("A cor é verde");
    break;
  default:
    console.log("Cor desconhecida");
}

//Exemplo 2

let cor2 = "verde";
switch (cor2) {
  case "vermelho":
  case "azul":
  case "verde":
    console.log("A cor é uma cor primária");
    break;
  default:
    console.log("Cor desconhecida");
}