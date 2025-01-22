const ConvertButton = document.querySelector(".button-converter")//Aqui eu Mapeio o botão de conversão
const currencySelect = document.querySelector(".currency-select") //Aqui eu mapeio o select de moedas

function convertValues() {
    const inputValue = document.querySelector(".input-money").value //Aqui eu pego o valor do input
    const CurrencyValueToConvert = document.querySelector("#brl") //Aqui eu pego a moeda que eu quero converter
    const CurrencyValueConverted = document.querySelector("#dlr")

    const dolarToday = 6.04
    const euroToday = 6.29

    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { //Aqui eu mudo a moeda para o formato que eu quero
        style: "currency",
        currency: "BRL"
    }).format(inputValue)
}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == 'dolar'){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "img/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "img/euro.png"

        currencyImg.style.width = "63px"; // Largura desejada
        currencyImg.style.height = "auto"; // Altura automática para manter proporção
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", convertValues)