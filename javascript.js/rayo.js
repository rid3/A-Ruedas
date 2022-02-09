class Rayo {
    constructor(randomX) {
      this.img = new Image();
      this.img.src = "./imagenes/rayo.png";
      this.x = randomX
      this.y = canvasGameScreen.height;
      this.width = 70;
      this.height = 70;
    }
  
    drawRayo = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  
  
  //se mueve, estaría bueno que aparezca, pasito a pasito
  apareceRayo = () => {
  this.y = this.y - 6;
  }
}