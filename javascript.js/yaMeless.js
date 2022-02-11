class YaMeless {
  constructor(posY) {
    //parametro que mandas para definir "y" en spwaningYaMeless
    this.img = new Image();
    this.img.src = "./imagenes/yaCorre.png";
    this.x = canvasGameScreen.width;
    this.y = posY; //va a depender del argumento que le doy cuando la creo
    this.width = 120;
    this.height = 120;
    this.velocity = 2.5;
  }

  //MÉTODOS

  //dibujando
  drawYaMeless = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  //movimiento
  moveYaMeless = () => {
    this.x = this.x - this.velocity;
  };
}
