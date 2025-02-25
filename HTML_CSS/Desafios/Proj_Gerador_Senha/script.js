const rangeElement = document.querySelector("#range");
const buttonPassword = document.querySelector("#button");
const sizePassword = document.querySelector("#value");
const password = document.querySelector("#password");
const viewHide = document.querySelector("#password-container");

let listLetters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-_=+[]{}|;:',.<>/?`~";
let newPassword = "";

sizePassword.innerHTML = rangeElement.value;

range.oninput = function () {
  sizePassword.innerHTML = this.value;
};

passwordGenerate = () => {
  let pass = "";
  for (let i = 0, n = listLetters.length; i < rangeElement.value; ++i)
    pass += listLetters.charAt(Math.floor(Math.random() * n));

  viewHide.classList.remove("hide");
  password.innerHTML = pass;
  newPassword = pass;
};

function copyPassword() {
    !alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(newPassword);
}
