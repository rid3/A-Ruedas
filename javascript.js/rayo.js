class Rayo {
    constructor() {
      this.img = new Image();
      this.img.src = "../imagenes/rayo.png";
      this.x = 500//canvasGameScreen.width;
      this.y = canvasGameScreen.height;
      this.width = 90;
      this.height = 90;
    }
  
    drawRayo = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  
  
  //se mueve, estaría bueno que aparezca, pasito a pasito
  apareceRayo = () => {
  this.y = this.y - 5;
  }
}