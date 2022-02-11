//*LÓGICA Y MAPA DEL JUEGO

class Juego {
  //PROPIEDADES
  constructor() {
    this.bgImage = new Image();
    this.bgImage.src = "./imagenes/concrete.jpg";
    this.felicitos = new Felicitos(); //lo haces variable, para no tener que estar creándolo todo el tiempo

    //arrays porque van a ser muchos en loop
    this.yamelessArr = [new YaMeless(0)]; //parametro Y de la clase.
    this.yamelessSeparation = 500; //cada cuánto van a salir
    
    this.rayoArr = [new Rayo(0)]; //parametro X de la clase.
    this.rayoSeparation = 2500;
    this.rayoCount = 0; //score

    this.dificultad = 0; //crecimiento de velocidad Ya Meless

    this.rayodisparaArr = [];
    this.tengoRayo = false;
    this.rayosBag = 0;

    this.juegoOn = true; //propiedad que voy a usar para acabar el juego, el loop de request animation frame.
  }

  //FUNCIONES------------------------------------------------------

  //YA MELESS----------------

  spawningYaMeless = () => {
    let lastYaM = this.yamelessArr[this.yamelessArr.length - 1]; //agarramos el último

    if (
      this.yamelessArr.length === 0 ||
      lastYaM.x < canvasGameScreen.width - this.yamelessSeparation
    ) {
      //cuándo aparecerán
      let randomY = Math.random() * 420; //creo el aleatoreo de posición
      let newYaMeless = new YaMeless(randomY); //estas creando otro objeto a la distancia que le dijiste que aparezca antes
      newYaMeless.velocity += this.dificultad; //suma la dificultad a la velocidad de Ya Meless antes que se agregue al array
      this.yamelessArr.push(newYaMeless); //agregando el nuevo que creaste al array que esta en las propiedades
    }
  };

  //funcion para chequear si chocaron, parámetro eachYaMl viene el argumento que te manda la invocación de función en el for each.
  choqueYaMelessFelicitos = (eachYaMl) => {
    //mdn collision 2d
    if (
      this.felicitos.x < eachYaMl.x + eachYaMl.width &&
      this.felicitos.x + this.felicitos.width > eachYaMl.x &&
      this.felicitos.y < eachYaMl.y + eachYaMl.height &&
      this.felicitos.height + this.felicitos.y > eachYaMl.y
    ) {
      /*acá termina el juego*/
      this.juegoOn = false;

      canvasGameScreen.style.display = "none";
      looseGameScreen.style.display = "flex";
    }
  };

  //RAYO--------------

  spawningRayo = () => {
    //variable sobre la que voy a actuar, la que va a servir de referencia
    let lastRayo = this.rayoArr[this.rayoArr.length - 1];

    if (
      this.rayoArr.length === 0 ||
      lastRayo.y < canvasGameScreen.height - this.rayoSeparation
    ) {
      let randomX = Math.random() * 700;
      let newRayo = new Rayo(randomX);
      this.rayoArr.push(newRayo);
    }
  };

  choqueRayoFelicitos = (eachRay, i) => {
    //dos parámetros para poder borrar el elemento
    if (
      this.felicitos.x < eachRay.x + eachRay.width &&
      this.felicitos.x + this.felicitos.width > eachRay.x &&
      this.felicitos.y < eachRay.y + eachRay.height &&
      this.felicitos.height + this.felicitos.y > eachRay.y
    ) {
      //score
      this.rayoCount += 9;
      countScore.innerText = this.rayoCount;
      countScoreGana.innerText = this.rayoCount;

      //desaparece rayo
      this.rayoArr.splice(i, 1);
      this.rayoArr.push();

      //va subiendo la velocidad Ya Meless
      this.dificultad += 0.2;

      //propiedad para sumar un rayo y poder dispararlo
      this.tengoRayo = true;
    }
  };

  choqueRayoYaMeless = (eachYaMe, i, eachRayoDisp, i2) => {
    if (
      eachRayoDisp.x < eachYaMe.x + eachYaMe.width &&
      eachRayoDisp.x + eachRayoDisp.width > eachYaMe.x &&
      eachRayoDisp.y < eachYaMe.y + eachYaMe.height &&
      eachRayoDisp.height + eachRayoDisp.y > eachYaMe.y
    ) {
      //desaparece rayo
      this.rayodisparaArr.splice(i2, 1);

      //desaparece Ya Meless
      this.yamelessArr.splice(i, 1);

      //score
      this.rayoCount += 20;
      countScore.innerText = this.rayoCount;
      countScoreGana.innerText = this.rayoCount;
    }
  };

  //score en CANVAS
  printScore = () => {
    ctx.font = "20px monospace";
    ctx.fillStyle = "red";

    ctx.fillText("SCORE : " + this.rayoCount, 800, 40);
  };

  //disparando rayos
  apareceRayoDispara = () => {
    if (this.tengoRayo === true) {
      let newRayo = new RayoDispara(this.felicitos.x, this.felicitos.y);
      this.rayodisparaArr.push(newRayo);
      this.tengoRayo = false;
    }
  };

  //felicitos choca contra canvas width y llega al escenario, gana.
  felicitosChoca = () => {
    if (this.felicitos.x > canvasGameScreen.width) {
      this.juegoOn = false;
      canvasGameScreen.style.display = "none";
      wonGameScreen.style.display = "flex";
    }
  };

  //BACKGROUND IMG--------------------------
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
    //Limpia el canvas
    this.clearCanvas();

    //-----YA MELESS--- se crea, se mueve.
    this.yamelessArr.forEach((eachYa) => {
      eachYa.moveYaMeless();
    });

    this.spawningYaMeless(); //loop de Ya Meless aleatorio

    //CHOQUE YA MELESS Y FELICITOS
    //acá chequeo con el for each cada Ya Meless (muchos Ya Meless un sólo felicitos)
    this.yamelessArr.forEach((eachYaM) => {
      //invoco a la función que chequea si chocaron
      this.choqueYaMelessFelicitos(eachYaM); //le pasa el parámetro el for each
    });

    //CHOQUE YA MELESS Y RAYO
    this.yamelessArr.forEach((eachYame, i) => {
      //chequeo cada Ya Meless

      this.rayodisparaArr.forEach((eachRayo, i2) => {
        //chequeo cada Rayo

        this.choqueRayoYaMeless(eachYame, i, eachRayo, i2); //invocando función de choque
      });
    });

    //----------RAYO--

    this.rayoArr.forEach((eachRay) => {
      eachRay.apareceRayo();
    });

    this.spawningRayo(); //aparece aleatoreamente

    //CHOQUE RAYO Y FELICITOS
    //agarrando cada rayo y viendo si se chocan
    this.rayoArr.forEach((eachRayo, i) => {
      this.choqueRayoFelicitos(eachRayo, i); //parametros para eliminar rayos una vez agarrados
    });

    //FELICITOS CHOCA, gana juego
    this.felicitosChoca();

    //DIBUJANDO BACKGROUND IMG
    this.drawBgImage();

    //--RAYOS DISPARADOS
    //dibujado y movimiento.
    this.rayodisparaArr.forEach((eachDispara) => {
      eachDispara.drawRayoDispara();
    });

    this.rayodisparaArr.forEach((eachRayoD) => {
      eachRayoD.movimientoRayoDispara();
    });

    //DIBUJANDO FELICITOS
    this.felicitos.drawFelicitos();

    //DIBUJANDO A YA MELESS
    this.yamelessArr.forEach((eachYaMeless) => {
      eachYaMeless.drawYaMeless();
    });

    //DIBUJANDO RAYOS
    this.rayoArr.forEach((eachRayo) => {
      eachRayo.drawRayo();
    });

    //SCORE
    this.printScore();

    //RECURSIÓN PARA LA ANIMACIÓN
    //crea el loop, se autollama a si misma. Con propiedad en condicional que si es false va a hacer que pare.

    if (this.juegoOn === true) {
      requestAnimationFrame(this.loopJuego);
    }
  };
}
