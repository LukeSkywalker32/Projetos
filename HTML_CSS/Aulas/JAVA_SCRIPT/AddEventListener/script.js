const input = document.querySelector('input');
const button = document.querySelector('button');
const select = document.querySelector('select');


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

