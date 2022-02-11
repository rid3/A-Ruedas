class RayoDispara {
  constructor(rayoparamx, rayoparamy) {
    this.img = new Image();
    this.img.src = "./imagenes/rayo.png";
    this.x = rayoparamx;
    this.y = rayoparamy;
    this.width = 50;
    this.height = 50;
    this.velocity = 7;
  }

  //MÉTODOS
  //dibujando
  drawRayoDispara = () => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  //moviendo
  movimientoRayoDispara = () => {
    this.x = this.x + this.velocity;
  };
}
