// script.js
document.addEventListener("DOMContentLoaded", () => {
    const realInput = document.querySelector('input[placeholder="Valor em Real"]');
    const dolarInput = document.querySelector('input[placeholder="Valor em Dólar"]');
    const button = document.querySelector('button');

    button.addEventListener("click", () => {
        const realValue = parseFloat(realInput.value);
        const dolarRate = parseFloat(dolarInput.value);

        if (isNaN(realValue) || isNaN(dolarRate)) {
            alert("Por favor, insira valores numéricos válidos para o Real e a taxa de câmbio do Dólar.");
            return;
        }

        const convertedValue = realValue / dolarRate;
        alert(`O valor convertido é: $ ${convertedValue.toFixed(2)}`);
    });
});
