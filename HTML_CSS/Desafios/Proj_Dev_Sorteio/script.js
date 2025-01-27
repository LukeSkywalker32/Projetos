const MinInput = document.querySelector(".min-input")
const MaxInput = document.querySelector(".max-input")
const SubmitButton = document.querySelector(".button-sorty")
const Resultado = document.querySelector(".resultado")




function sorty() {
    const min = parseInt(MinInput.value, 10);
    const max = parseInt(MaxInput.value, 10);
    
    if (isNaN(min) || isNaN(max)) {
        alert("Insira valores válidos!");
        return;
    }
    
    const [valorMin, valorMax] = min > max ? [max, min] : [min, max];
    
    const result = Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
        
    Resultado.innerHTML = result;
    Resultado.style.opacity = 0;

    setTimeout(() => {
        Resultado.style.opacity = 1;
    }, 10);

//    alert(`O número sorteado foi: ${result}`);
} 

SubmitButton.addEventListener("click", sorty)