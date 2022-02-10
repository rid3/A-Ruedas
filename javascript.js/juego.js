//*LÓGICA Y MAPA DEL JUEGO

class Juego {
  //PROPIEDADES
  constructor() {
    this.bgImage = new Image();
    this.bgImage.src = "./imagenes/concrete.jpg";
    this.felicitos = new Felicitos(); //lo haces variable, para no tener que estar creándolo todo el tiempo

    //van arrays porque van a ser muchos en loop
    this.yamelessArr = [new YaMeless(0, 3)]; //argumento de posicion Y, donde empezas. No me acuerod por qué puse el tres
    this.yamelessSeparation = 500; //cada cuánto van a salir

    this.rayoArr = [new Rayo(0)]; //array porque voy a crear muchos rayos
    this.rayoSeparation = 2500;
    this.rayoCount = 0;

    this.dificultad = 0;

    this.rayodisparaArr = [];
    this.tengoRayo = false;

    this.juegoOn = true; //propiedad que voy a usar para acabar el juego, el loop de request animation frame.
  }

  //FUNCIONES------------------------------------------------------

  //YA MELESS----------------
  //que aparezca muchas veces, que se repita.
  spawningYaMeless = () => {
    let lastYaM = this.yamelessArr[this.yamelessArr.length - 1]; //agarramos el último/primero

    if (this.yamelessArr.length === 0 || lastYaM.x < canvasGameScreen.width - this.yamelessSeparation) {
      //cuándo aparecerán
      //console.log("yey")
      let randomY = Math.random() * 700; //creo el aleatoreo de posición
      let newYaMeless = new YaMeless(randomY); //estas creando otro objeto a la distancia que le dijiste que aparezca antes
      newYaMeless.velocity += this.dificultad; //suma la dificultad a la velocidad de Ya Meless antes que se agregue al array
      this.yamelessArr.push(newYaMeless); //agregando el nuevo que creaste al array que esta en las propiedades
    }
  };

  //funcion para chequear si chocaron,con parámetro eachYaMl viene el argumento que te manda la invocación de función en el for each
  choqueYaMelessFelicitos = (eachYaMl) => {
    //mdn collision 2d
    if (
      this.felicitos.x < eachYaMl.x + eachYaMl.width &&
      this.felicitos.x + this.felicitos.width > eachYaMl.x &&
      this.felicitos.y < eachYaMl.y + eachYaMl.height &&
      this.felicitos.height + this.felicitos.y > eachYaMl.y
    ) {
      /*console.log("chocarooon") acá debería terminar el juego*/
      this.juegoOn = false;

      canvasGameScreen.style.display = "none";
      looseGameScreen.style.display = "flex";
    }
  };

  //RAYO--------------
  //funcion para aleatorio rayo
  spawningRayo = () => {
    //creo la variable sobre la que voy a actuar, la que va a servir de referencia
    let lastRayo = this.rayoArr[this.rayoArr.length - 1];

    if (
      this.rayoArr.length === 0 ||
      lastRayo.y < canvasGameScreen.height - this.rayoSeparation
    ) {
      let randomX = Math.random() * 800;
      let newRayo = new Rayo(randomX);
      this.rayoArr.push(newRayo);
    }
  };
  //dos parámetros para poder borrar el elemento
  choqueRayoFelicitos = (eachRay, i) => {
    if (
      this.felicitos.x < eachRay.x + eachRay.width &&
      this.felicitos.x + this.felicitos.width > eachRay.x &&
      this.felicitos.y < eachRay.y + eachRay.height &&
      this.felicitos.height + this.felicitos.y > eachRay.y
    ) {
      //console.log("lo hicimos lo hicimos lo hicimos muy bien, cruzamos el puente..")

      this.rayoCount += 9;
      countScore.innerText = this.rayoCount;
      countScoreGana.innerText = this.rayoCount;

      //QUE DESAPAREZCA 1. que lo reconozca 2. que agarre ese que choca (con el index) y lo saque del canvas (o del array? splice) si lo saca del array tmb lo saca del canvas.
      //el error: Uncaught TypeError: Cannot read properties of undefined (reading 'y')

      this.rayoArr.splice(i, 1);
      this.rayoArr.push();

      this.dificultad += 0.3; //velocidad de Ya Meless que afecta en el random

      this.tengoRayo = true; //para sumar un rayo y poder dispararlo 
    }
  };


  choqueRayoYaMeless = (eachYaMe, i) => {

    this.rayodisparaArr.forEach ((eachRayoDisp) => {
      if (
        eachRayoDisp.x < eachYaMe.x + eachYaMe.width &&
        eachRayoDisp.x + eachRayoDisp.width > eachYaMe.x &&
        eachRayoDisp.y < eachYaMe.y + eachYaMe.height &&
        eachRayoDisp.height + eachRayoDisp.y > eachYaMe.y
      ) {
          //console.log("estan chocando")
          this.yamelessArr.splice(i, 1);
          this.yamelessArr.push();

          //this.rayodisparaArr.splice(i,1);
      }

    });

  }







  printScore = () => {
    ctx.font = "20px monospace";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: " + this.rayoCount, 780, 40);
  };

apareceRayoDispara = () => {
    //console.log("hola")
    if (this.tengoRayo === true ) {
        let newRayo = new RayoDispara(this.felicitos.x, this.felicitos.y);
        this.rayodisparaArr.push(newRayo);  
        this.tengoRayo = false;
        };
    }




  felicitosChoca = () => {
    if (this.felicitos.x > canvasGameScreen.width) {
      this.juegoOn = false; //console.log("chocó") esto funcionó
      canvasGameScreen.style.display = "none";
      wonGameScreen.style.display = "flex";
    }
  };

  //BG IMG--------------------------
  drawBgImage = () => {
    ctx.drawImage(
      this.bgImage,
      0,
      0,
      canvasGameScreen.width,
      canvasGameScreen.height
    );
  };

  //CLEAR CANVAS -------------------
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvasGameScreen.width, canvasGameScreen.height);
  };



  //*LOOP JUEGO LOOP JUEGO LOOP JUEGO LOOP JUEGO LOOP JUEGO


  loopJuego = () => {
    //console.log("anda el request");

    //1.Limpiar el canvas
    this.clearCanvas();

    //2.Mover los elementos

    //-----YA MELESS SE MUEVE---


    this.yamelessArr.forEach((eachYa) => {
      eachYa.moveYaMeless();
    });

    this.spawningYaMeless(); //loop de Ya Meless aleatorio

    //acá chequeo con el for each cada ya meless (muchos ya meless un solo felicitos)
    this.yamelessArr.forEach((eachYaM) => {
      //invoco a la función que chequea si chocaron
      this.choqueYaMelessFelicitos(eachYaM); //le pasa el parámetro el for each
    });

    this.yamelessArr.forEach((eachYame) => {
        this.choqueRayoYaMeless(eachYame);
    });

    //----------RAYO SE MUEVE---
    //confirmado rayo se mueve sobre eje Y
    this.rayoArr.forEach((eachRay) => {
      eachRay.apareceRayo();
    });

    this.spawningRayo(); //aparece aleatoreamente




    //agarrando cada rayo y viendo si se chocan
    this.rayoArr.forEach((eachRayo) => {
      this.choqueRayoFelicitos(eachRayo); //parametros para eliminar fueguitos
    });

   

    //FELICITOS CHOCA
    this.felicitosChoca();

    //3.Dibujar los elementos
    //dibujo el bgImage
    this.drawBgImage();

     this.rayodisparaArr.forEach((eachDispara) => {
         eachDispara.drawRayoDispara();
       });

       this.rayodisparaArr.forEach ((eachRayoD) => {
        eachRayoD.movimientoRayoDispara();
    });


    this.felicitos.drawFelicitos();

    //lo llamo así porque es un array
    this.yamelessArr.forEach((eachYaMeless) => {
      eachYaMeless.drawYaMeless();
    });

    //confirmado que rayo aparece
    this.rayoArr.forEach((eachRayo) => {
      eachRayo.drawRayo();
    });

    //pintando rayodispara
 

     

    //this.rayodisparaArr.movimientoRayoDispara();


    // this.apareceRayoDispara();


    this.printScore();

    //ACÁ PONGO EL SCORE?

    //4.Recursión para la animación, crea el loop, se autollama a si misma. Con propiedad en condicional que si es false va a hacer que pare.

    if (this.juegoOn === true) {
      requestAnimationFrame(this.loopJuego);
    }
  };
}
