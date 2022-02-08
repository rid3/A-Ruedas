// * GLOBAL VARIABLES
let startGameScreen = document.querySelector("#splash-screen");
let looseGameScreen = document.querySelector("#gameover-screen");
let wonGameScreen = document.querySelector("#youwon-screen");
let reglasScreen = document.querySelector("#instrucciones-screen");

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




//* IR A JUGAR
const ahoraSi = () => {
  reglasScreen.style.display = "none";
  canvasGameScreen.style.display = "flex";

  //acción para que empiece el juego:
  nuevoJuego = new Juego();
  //console.log(nuevoJuego);
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





// * ADD EVENT LISTENERS

let buttonStart = document.querySelector("#start-button");
buttonStart.addEventListener("click", startGame);

let buttonLooseScreen = document.querySelector("#gameoverscreen-button");
buttonLooseScreen.addEventListener("click", looseButtonReStart);

let buttonYouWonScreen = document.querySelector("#youwonscreen-button");
buttonYouWonScreen.addEventListener("click", youWonReStart);

let buttonReglasScreen = document.querySelector("#reglas-button");
buttonReglasScreen.addEventListener("click", ahoraSi);

//PARA MOVER A FELICITOS

document.addEventListener("keydown", (event) => {
  //console.log(event.key) me las reconoció
  if (event.key === "ArrowRight") {
    nuevoJuego.felicitos.adelanteFelicitos();
  } else if (event.key === "ArrowLeft") {
    nuevoJuego.felicitos.atrasFelicitos();
  } else if (event.key === "ArrowDown") {
    nuevoJuego.felicitos.abajoFelicitos();
  } else if (event.key === "ArrowUp") {
    nuevoJuego.felicitos.arribaFelicitos();
  }
});
