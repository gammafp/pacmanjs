/**
 * 
 * @param {Object} pac Recibe las imagenes 
 * @param {Object} ctx Contexto del canvas
 */
// La clase para los fantasmas tienen que heredar de pacman // Gamma del futuro encargate de eso: XD
function Fantasmas(fant, ctx, tipo) {
    switch(tipo) {
        case "blinky": 
            this.x = 208 // 208;
            this.y = 168;
            this.spriteX = 3;
            this.spriteY = 3;
        break;
        case "inky":
            this.x = 190;
            this.y = 218;
            this.spriteX = 0;
            this.spriteY = 0;
        break;
        case "pinky": 
            this.x = 210;
            this.y = 218;
            this.spriteX = 0;
            this.spriteY = 2;
        break;
        case "clyde": 
            this.x = 230;
            this.y = 218;
            this.spriteX = 0;
            this.spriteY = 1;
        break;
    }
   
    this.speed = sprites.config.velocidadPacman; // la velocidad normal de pacman 
    let izquierda = 1;
    let arriba = 2;
    let derecha = 3;
    let abajo = 4;
    let detener = 0;

    this.direccionNueva = 1;
    this.ultimaDireccion = 4;

// ## Método para el dibujado y animacion ##
    this.dibujaFantasma = function() {
        ctx.drawImage(fant,                                              // Se carga el objeto de imagen
                    32 * this.spriteX, 32 * this.spriteY,           // posición en el spriteSheet offSetX offSetY
                    32, 32,         // Tamaño de la imagen width, height
                    this.x, this.y, // Posicion en el lienzo
                    32, 32          // Incremento X, Y 
        );
    }    

// ## Método para el movimiento ##
    this.mover = function(pos) {
        // Formula floor(posicion/tamañoBaldosa)
        // Baldosas de 32 colisiones central 16 pixeles
        // Direcciones.
        // console.log( ColisionesPared(this.x, this.y, this.ultimaDireccion, 0) );
        let verticeA = [];
        let verticeB = [];
        let verticeC = [];
        let verticeD = [];
        switch(pos) {
            case izquierda: 
                // Teletransporte por el portal
                if(this.x < -16 ) {
                    this.x = (16*28)+16;
                }

                verticeA = [~~((this.x + 7)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 7)/16),  ~~((this.y + 8)/16)];

                if( colisiona(verticeA, verticeB) === 10 ) {
                    this.x -= 0;
                } else {
                    // console.log("Entra");
                    this.x -= this.speed;
                }

            break;
            case arriba:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 7)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 7)/16)];

               if( colisiona(verticeB, verticeC) === 10 ) {
                    this.y -= 0;
                } else {
                    this.y -= this.speed;
                }

            break;
            case derecha:
                // Teletransporte por el portal
                if(this.x > (16*28) + 16 ) {
                    this.x = -16;
                }


                verticeC = [~~((this.x+32 - 8)/16), ~~((this.y + 8)/16)];
                verticeD = [~~((this.x+32 - 8)/16), ~~((this.y + 31-8)/16)];
         
                if( colisiona(verticeC, verticeD) === 10 ) {
                    this.x += 0;
                } else {
                    this.x += this.speed;
                }
            break;
            case abajo: 

                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 32-8)/16)];
                verticeD = [~~((this.x + 31-8)/16), ~~((this.y + 32-8)/16)];
              
                if( colisiona(verticeA, verticeD) === 10 ) {
                    this.y += 0;
               
                } else {
                    this.y += this.speed;
        
                }

            break;
            case detener: 
                this.x += 0;
                this.y += 0;
        }
        
    }    
}
