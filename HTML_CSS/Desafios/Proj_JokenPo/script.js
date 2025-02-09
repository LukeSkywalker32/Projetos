const result = document.querySelector(".result");
const myScore = document.querySelector("#myScore");
const ComputerScore = document.querySelector("#ComputerScore");

let myScoreNumber = 0;
let ComputerScoreNumber = 0;

const playHuman = (humanChoice) => {
  console.log(`Escolha humanda: ${humanChoice}`);
    
  const machineChoice = playComputer();
  console.log(`Escolha Maquina: ${machineChoice}`);

  playGame(humanChoice, machineChoice);
};

//ENUMS

const GAME_OPTIONS = {
  PEDRA:   "pedra",
  PAPEL:   "papel",
  TESOURA: "tesoura",
}


const playComputer = () => {
  const Choices = [GAME_OPTIONS.PEDRA, GAME_OPTIONS.PAPEL, GAME_OPTIONS.TESOURA];
  const randomNumber = Math.floor(Math.random() * 3);

  return Choices[randomNumber];
};

const playGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = "Empate";

  } else if (
    (human === GAME_OPTIONS.PEDRA && machine === GAME_OPTIONS.TESOURA) ||
    (human === GAME_OPTIONS.PAPEL && machine === GAME_OPTIONS.PEDRA) ||
    (human === GAME_OPTIONS.TESOURA && machine === GAME_OPTIONS.PAPEL)
  ) {
    myScoreNumber++;
    myScore.innerHTML = myScoreNumber;
    result.innerHTML = "Você ganhou!";
  } else {
    ComputerScoreNumber++;
    ComputerScore.innerHTML = ComputerScoreNumber;
    result.innerHTML = "Você perdeu!";
  }
};
