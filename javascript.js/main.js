// * GLOBAL VARIABLES
let startGameScreen = document.querySelector("#splash-screen");
let looseGameScreen = document.querySelector("#gameover-screen");
let wonGameScreen = document.querySelector("#youwon-screen");
let reglasScreen = document.querySelector("#instrucciones-screen");

let countScore = document.querySelector("#score span");

//const music = new Audio("/Paciencia II.mp3");



let nuevoJuego;

//CANVAS VARIABLES
let canvasGameScreen = document.querySelector("#my-canvas");
const ctx = canvasGameScreen.getContext("2d");



// * STATE MANAGEMENT FUNCTIONS

//botón para ir a screen indicaciones
const startGame = () => {
  startGameScreen.style.display = "none";
  reglasScreen.style.display = "flex";
  // music.play();
  // music.loop =true;
};




//* IR A JUGAR
const ahoraSi = () => {
  reglasScreen.style.display = "none";
  canvasGameScreen.style.display = "flex";
  //acción para que empiece/se cree el juego:
  nuevoJuego = new Juego();
  //console.log(nuevoJuego);

  //nuevoJuego.felicitosChoca();

  nuevoJuego.setTimeOutFunc();
  nuevoJuego.loopJuego();


};





//botón desde loose screen para volver a empezar
const looseButtonReStart = () => {
  //console.log(looseGameScreen)
  looseGameScreen.style.display = "none";
  startGameScreen.style.display = "flex";
};

//botón desde youwon screen para volver a jugar
const youWonReStart = () => {
  wonGameScreen.style.display = "none";
  startGameScreen.style.display = "flex";
};



//botón música
const musicplease = () => {
  const audio = new Audio("./Paciencia II.mp3");
  audio.play();
}
 



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
musicButton.addEventListener("click",musicplease);



//let audio = document.querySelector("audio");

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
