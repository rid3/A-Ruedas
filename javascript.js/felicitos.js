class Felicitos {
    constructor (){
        this.img = new Image ()
        this.img.src = "./imagenes/felicitos en skate.png"
        //posición en donde arranca
        this.x = 30;
        this.y= 350;
        this.width = 180;
        this.height = 180;
        this.move = 40;
    }


//MÉTODOS
//que se vea

drawFelicitos = () => {
    ctx.drawImage (this.img, this.x, this.y, this.width, this.height )
}

//que se mueva

 adelanteFelicitos = () => {
     this.x = this.x + this.move
     }
   
 atrasFelicitos = () => {
     this.x = this.x - this.move
 }

 abajoFelicitos = () => {
     this.y = this.y + this.move
 }

 arribaFelicitos = () => {
     this.y = this.y - this.move
 }



}