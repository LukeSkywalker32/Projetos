// Seleciona a imagem do QR Code
const img = document.querySelector('img');

// Seleciona o campo de entrada do SSID (nome da rede)
const ssid = document.querySelector('.ssid');

// Seleciona o campo de entrada da senha
const password = document.querySelector('.password');

// Seleciona o botão de impressão
const button = document.querySelector('button');

// Função para atualizar o QR Code com os dados do WiFi
function update() {
    // Cria a string de dados do WiFi no formato esperado
    const wifi = `WIFI:T:WPA;S:${ssid.value};P:${password.value};;`;
    
    // Atualiza a fonte da imagem do QR Code com a URL da API
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${wifi}`;
}

// Adiciona um evento de 'keyup' ao campo SSID para atualizar o QR Code ao digitar
ssid.addEventListener('keyup', update);

// Adiciona um evento de 'click' ao botão para imprimir a página
button.addEventListener('click', () => {
    window.print();
});