//*LÓGICA Y MAPA DEL JUEGO

class Juego {
    //PROPIEDADES
        constructor () {
            this.bgImage = new Image ();
            this.bgImage.src = "./imagenes/concrete.jpg";
            this.felicitos = new Felicitos(); //lo haces variable, para no tener que estar creándolo todo el tiempo
    
            //van arrays porque van a ser muchos en loop
            this.yamelessArr =[new YaMeless(0)]; //argumento de posicion Y, donde empezas. 
            this.yamelessSeparation = 500; //cada cuánto van a salir
            this.rayoArr =[new Rayo()]; //array porque voy a crear muchos rayos
    
            this.juegoOn = true; //propiedad que voy a usar para acabar el juego, el loop de request animation frame.
    
            
        }
    
    //FUNCIONES------------------------------------------------------

    //YA MELESS----------------
    //que aparezca muchas veces, que se repita. 
    spawningYaMeless = () => {
        let lastYaM = this.yamelessArr[this.yamelessArr.length -1] //agarramos el último/primero
        
        if (lastYaM.x < (canvasGameScreen.width - this.yamelessSeparation)) { //cuándo aparecerán
            //console.log("yey")
            let randomY = Math.random() * 700 //creo el aleatoreo de posición
            let newYaMeless = new YaMeless(randomY) //estas creando otro objeto a la distancia que le dijiste que aparezca antes
            this.yamelessArr.push(newYaMeless) //agregando el nuevo que creaste al array que esta en las propiedades
    
        }
    
    }
    
    //funcion para chequear si chocaron,con parámetro eachYaMl viene el argumento que te manda la invocación de función en el for each
    choqueYaMelessFelicitos = (eachYaMl) => {
        //mdn collision 2d
        if (this.felicitos.x < eachYaMl.x + eachYaMl.width &&
            this.felicitos.x + this.felicitos.width > eachYaMl.x &&
            this.felicitos.y < eachYaMl.y + eachYaMl.height &&
            this.felicitos.height + this.felicitos.y > eachYaMl.y)
            {/*console.log("chocarooon") acá debería terminar el juego*/
            this.juegoOn === false; 
    
            canvasGameScreen.style.display = "none";
            looseGameScreen.style.display = "flex";
    
        }
        }


    //RAYO--------------
    //funcion para aleatorio rayo
    spawningRayo = () => {
        //creo la variable sobre la que voy a actuar, la que va a servir de referencia
        let lastRayo = this.rayoArr [this.rayoArr.length - 1]

        if ( lastRayo < )
    }





    //que aparezca aleatoreamente 

    
       //BG IMG--------------------------
        drawBgImage = () => {
            ctx.drawImage (this.bgImage, 0, 0, canvasGameScreen.width, canvasGameScreen.height)
        }
        
        //CLEAR CANVAS -------------------
        clearCanvas = () => {
            ctx.clearRect(0,0, canvasGameScreen.width, canvasGameScreen.height);
        }
    
     //MÉTODOS ---------------------------------------------------

    loopJuego = () => {
        //console.log("anda el request");
    
        //1.Limpiar el canvas
        this.clearCanvas();
    

        //2.Mover los elementos

        //-----YA MELESS SE MUEVE---
        //this.yameless.moveYaMeless() no se esta moviendo no funciona

        this.yamelessArr.forEach ((eachYa) => {
            eachYa.moveYaMeless()
        })
    
        this.spawningYaMeless() //loop de Ya Meless aleatorio
    
        //acá chequeo con el for each cada ya meless (muchos ya meless un solo felicitos)
        this.yamelessArr.forEach((eachYaM)=> {
            //invoco a la función que chequea si chocaron
            this.choqueYaMelessFelicitos(eachYaM) //le pasa el parámetro el for each
    
    
        });

        //----------RAYO SE MUEVE---
        //confirmado rayo se mueve sobre eje Y
        this.rayoArr.forEach ((eachRay) => {
         eachRay.apareceRayo()
        });
    
    
        //3.Dibujar los elementos 
         //dibujo el bgImage
         this.drawBgImage();
         this.felicitos.drawFelicitos();
    
         //lo llamo así porque es un array
         this.yamelessArr.forEach((eachYaMeless)=> {
             eachYaMeless.drawYaMeless()
         });
         

        //confirmado que rayo aparece 
        this.rayoArr.forEach((eachRayo) => {
            eachRayo.drawRayo()
        });
    



        //4.Recursión para la animación, crea el loop, se autollama a si misma. Con propiedad en condicional que si es false va a hacer que pare.  
        if (this.juegoOn === true) {
        requestAnimationFrame(this.loopJuego)
        }
    }
    
    }