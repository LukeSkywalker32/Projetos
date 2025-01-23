const ConvertButton = document.querySelector(".button-converter")//Aqui eu Mapeio o botão de conversão
const currencySelect = document.querySelector(".currency-select") //Aqui eu mapeio o select de moedas
const CurrencySelectFrom = document.querySelector(".currency-select-from")



function convertValues() {
    const inputValue = document.querySelector(".input-money").value //Aqui eu pego o valor do input
    const CurrencyValueToConvert = document.querySelector("#brl") //Aqui eu pego a moeda que eu quero converter
    const CurrencyValueConverted = document.querySelector("#dlr")

    const dolarToday = 5.97
    const euroToday = 6.29
    const libraToday = 6.99
    const realToday = 0.17

    if (currencySelect.value === "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
  }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    }
    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    }

    if (currencySelect.value == "real") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    


}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "img/estados-unidos (1) 1.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "img/euro.png"

        currencyImg.style.width = "55px"; // Largura desejada
        currencyImg.style.height = "auto"; // Altura automática para manter proporção
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "img/libra.png"

        currencyImg.style.width = "50px"; // Largura desejada
        currencyImg.style.height = "auto"; // Altura automática para manter proporção
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "img/brasil 2.png"
    }
    convertValues()
}

function ChangeCurrencyFrom() {
    const currencyName = document.getElementById("currency-name-from")
    const currencyImg = document.querySelector(".currency-img-from")

    if (CurrencySelectFrom.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "img/estados-unidos (1) 1.png"
    }
    if (CurrencySelectFrom.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "img/euro.png"
        currencyImg.style.width = "55px"; // Largura desejada
        currencyImg.style.height = "auto"; // Altura automática para manter proporção
    }
    if (CurrencySelectFrom.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "img/libra.png"
        currencyImg.style.width = "50px"; // Largura desejada
        currencyImg.style.height = "auto"; // Altura automática para manter proporção
    }
    if (CurrencySelectFrom.value === "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "img/brasil 2.png"
    }
    convertValues()
}

// CurrencySelectFrom.addEventListener("change", ChangeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", convertValues)