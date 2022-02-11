// * GLOBAL VARIABLES
let startGameScreen = document.querySelector("#splash-screen");
let looseGameScreen = document.querySelector("#gameover-screen");
let wonGameScreen = document.querySelector("#youwon-screen");
let reglasScreen = document.querySelector("#instrucciones-screen");

//score
let countScore = document.querySelector("#score span");
let countScoreGana = document.querySelector("#score-gana span");

//música
const audio = new Audio("./ahorasifelicitos.mp3");

//On Of variable
let nuevoJuego;

//CANVAS VARIABLES
let canvasGameScreen = document.querySelector("#my-canvas");
const ctx = canvasGameScreen.getContext("2d");

// * STATE MANAGEMENT FUNCTIONS

//botón para ir a screen indicaciones
const startGame = () => {
  startGameScreen.style.display = "none";
  reglasScreen.style.display = "flex";
};

//botón para ir a jugar
const ahoraSi = () => {
  reglasScreen.style.display = "none";
  canvasGameScreen.style.display = "flex";
  //acción para que empiece/se cree el juego:
  nuevoJuego = new Juego();
  nuevoJuego.loopJuego();
};

//botón desde loose screen para volver a empezar
const looseButtonReStart = () => {
  looseGameScreen.style.display = "none";
  startGameScreen.style.display = "flex";
};

//botón desde youwon screen para volver a jugar
const youWonReStart = () => {
  wonGameScreen.style.display = "none";
  startGameScreen.style.display = "flex";
};

//botónes música
const musicplease = () => {
  audio.play();
  audio.loop = true;
};

const musicstop = () => {
  audio.pause();
};

// * ADD EVENT LISTENERS

let buttonStart = document.querySelector("#start-button");
buttonStart.addEventListener("click", startGame);

let buttonLooseScreen = document.querySelector("#gameoverscreen-button");
buttonLooseScreen.addEventListener("click", looseButtonReStart);

let buttonYouWonScreen = document.querySelector("#youwonscreen-button");
buttonYouWonScreen.addEventListener("click", youWonReStart);

let buttonReglasScreen = document.querySelector("#reglas-button");
buttonReglasScreen.addEventListener("click", ahoraSi);

let musicButton = document.querySelector("#music");
musicButton.addEventListener("click", musicplease);

let musicButtonOf = document.querySelector("#musicof");
musicButtonOf.addEventListener("click", musicstop);

//PARA MOVER A FELICITOS

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    nuevoJuego.felicitos.adelanteFelicitos();
  } else if (event.key === "ArrowLeft") {
    nuevoJuego.felicitos.atrasFelicitos();
  } else if (event.key === "ArrowDown") {
    nuevoJuego.felicitos.abajoFelicitos();
  } else if (event.key === "ArrowUp") {
    nuevoJuego.felicitos.arribaFelicitos();
  } else if (event.key === "a") {
    //tecla para tirar rayos
    nuevoJuego.apareceRayoDispara();
  }
});
