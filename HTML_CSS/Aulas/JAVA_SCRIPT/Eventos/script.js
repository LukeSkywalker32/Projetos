




const input = document.querySelector('#main-input') // aqui eu mapeio o meu input do HTML
const tag_alvo = document.querySelector('#tag_alvo')// aqui eu mapeio o minha tag p vazia do HTML

const button = document.querySelector('.main-button')// aqui eu mapeio o meu botão
button.style.fontSize = "30px"
button.style.fontWeight = "bold"
button.style.padding = "10px"
button.style.borderRadius = "20px"
button.style.border = "none"
button.style.cursor = "pointer"




// Atualiza o texto, tamanho, cor, fonte e peso do elemento alvo com os valores do input
function cliquei (){ 
    tag_alvo.innerText = input.value 
    
    tag_alvo.style.fontSize = "100px"
    tag_alvo.style.color = "#E1986E"
    tag_alvo.style.fontFamily = "Arial"
    tag_alvo.style.fontWeight = "bold"
}

// function digiteiaqui() {
//     console.log(input.value)
// }


