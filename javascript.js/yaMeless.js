class YaMeless {
    constructor(posY) {
      //parametro que mandas para definir y en spwaningYaMeless
      this.img = new Image();
      this.img.src = "../imagenes/monstruo - Ya Meless II.png";
      this.x = canvasGameScreen.width;
      this.y = posY; //va a depender del argumento que le doy cuando la creo
      this.width = 180;
      this.height = 180;
    }
  
    drawYaMeless = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  
    //todavía no se mueve
    moveYaMeless = () => {
      this.x = this.x - 6;
    };
  }