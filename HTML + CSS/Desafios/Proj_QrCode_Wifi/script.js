const img = document.querySelector('img'); // Seleciona a imagem do QR Code
const ssid = document.querySelector('.ssid');// Seleciona o campo de entrada do SSID (nome da rede)
const password = document.querySelector('.password');// Seleciona o campo de entrada da senha
const button = document.querySelector('button');// Seleciona o botão de impressão


function update() { // Função para atualizar o QR Code com os dados do WiFi    
    const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;// Cria a string de dados do WiFi no formato esperado     
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${wifi}`;// Atualiza a fonte da imagem do QR Code com a URL da API
}

ssid.addEventListener('keyup', update);// Adiciona um evento de 'keyup' ao campo SSID para atualizar o QR Code ao digitar
button.addEventListener('click', () => {   // Adiciona um evento de 'click' ao botão para imprimir a página
    window.print();
});