/*
    ALTERANDO E ACESSANDO TEXTOS

    textContent -> Retorna todo conteudo
    innerText -> Retorna apenas o texto
    innerHTML -> Retorna todo conteudo HTML e Permite adicionar HTML

*/
/*Retorna ou define o conteúdo de texto de um elemento, incluindo o texto de elementos filhos, mas sem formatá - lo ou processar estilos.
Ideal para capturar ou definir o texto "puro", ignorando estilos CSS ou elementos ocultos.*/
const element = document.querySelector(".paragraph-js");
element.textContent = "Novo texto!";
console.log(element.textContent); // Mostra todo o texto do elemento


/*Retorna ou define o texto visível de um elemento, respeitando os estilos CSS, como visibilidade e quebra de linha.
É mais lento que textContent porque considera o layout e o estilo ao calcular o texto visível.*/
const elemento = document.querySelector(".paragraph-js");
elemento.innerText = "Texto visível atualizado!";
console.log(elemento.innerText); // Mostra apenas o texto visível


/*Retorna ou define o conteúdo HTML de um elemento, permitindo incluir ou manipular tags HTML.
Útil para adicionar ou alterar estruturas HTML dinamicamente.*/
const elements = document.querySelector(".paragraph-js");
elements.innerHTML = "<strong>Novo conteúdo HTML!</strong>";
console.log(elements.innerHTML); // Mostra o HTML interno do elemento
