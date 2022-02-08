class Rayo {
    constructor() {
      this.img = new Image();
      this.img.src = "../imagenes/rayo.png";
      this.x = canvasGameScreen.width;
      this.y = canvasGameScreen.height;
      this.width = 150;
      this.height = 150;
    }
  
    drawRayo = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }
  
  moveRayo = () => {
  this.y = this.y 
  }