const input = document.querySelector("#cep");
const button = document.querySelector("#buscar");
const resultDiv = document.querySelector(".result");

const formatCep = (cep) => {
  return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
};

const apiCep = async () => {
  const cep = input.value.trim(); // Pega o CEP digitado e remove espaços extras

  if (cep.length !== 8 || isNaN(cep)) {
    alert("Por favor, digite um CEP válido com 8 dígitos.");
    return;
  }

  try {
    const response = await fetch(
      `https://cep.awesomeapi.com.br/json/${cep}?token=3c07aa7c3928b590564dc79c61b07ddf6d7d426c4825aeb4d3664ca96ae6513c`
    );

    if (!response.ok) {
      throw new Error("CEP não encontrado.");
    }

    const data = await response.json();

    // Preenchendo os campos no HTML com os dados retornados
    document.querySelector("#cepResult").textContent =
      formatCep(data.cep) || "N/A";
    document.querySelector("#logradouroResult").textContent =
      data.address || "N/A";
    document.querySelector("#bairroResult").textContent =
      data.district || "N/A";
    document.querySelector("#cidadeResult").textContent = data.city || "N/A";
    document.querySelector("#stateResult").textContent = data.state || "N/A";

    // EXIBO A DIV DO RESULTADO
    resultDiv.style.visibility = "visible";
    resultDiv.style.opacity = "1";
  } catch (error) {
    alert("Erro ao buscar o CEP. Verifique e tente novamente.");
  }
};

// Adiciona evento de clique ao botão
button.addEventListener("click", apiCep);
