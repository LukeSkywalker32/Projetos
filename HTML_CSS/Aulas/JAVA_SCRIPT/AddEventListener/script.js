const input = document.querySelector('input');
const select = document.querySelector('select');
const button = document.querySelector('button');


function TroqueioValor() {
    console.log("Troquei de valor para", select.value);
}
select.addEventListener('change',TroqueioValor);

//-------------------------------------------------

function TroqueioNome() {
    console.log("Coloquei o nome de", input.value);
}
input.addEventListener('change',TroqueioNome);

//-------------------------------------------------

