/**
 * 
 * @param {Object} pac Recibe las imagenes 
 * @param {Object} ctx Contexto del canvas
 */
// La clase para los fantasmas tienen que heredar de pacman // Gamma del futuro encargate de eso: XD
function Pacman(pac, ctx) {
    this.x = 208;       // Eje x posicion 208 || 185
    this.y = 360;       // Eje y posicionn360 || 360
    this.speed = sprites.config.velocidadPacman; // la velocidad normal de pacman 
    // this.speed = 1;
    // direcciones
    let izquierda = 1;
    let arriba = 2;
    let derecha = 3;
    let abajo = 4;
    let detener = 0;
    let ultimaDireccion = 0;
    this.sprites = 2;
    this.frameActualX = 0;
    this.frameActualY = 0;
    this.animar = true;
    contadorFrames = 0;
// TODO: HACER EL METODO DE COLISIONES :/
// ## Método para el dibujado y animacion ##
    this.dibujaPacman = function() {
        // Pintar pacman   
        if(this.animar) {   
            if(this.frameActualX >= this.sprites) {
                this.frameActualX = 0;
            } else {
                if(contadorFrames === 5) {
                    this.frameActualX++;
                }
                else if(contadorFrames > 5) {
                    contadorFrames = 0;    
                }
                contadorFrames++;
            }
        }


        ctx.drawImage(pac,                                              // Se carga el objeto de imagen
                    32 * this.frameActualX, 32 * this.frameActualY,    // posición en el spriteSheet offSetX offSetY
                    32, 32,                                           // Tamaño de la imagen width, height
                    this.x, this.y,                                  // Posicion en el lienzo
                    32, 32                                          // Incremento X, Y 
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
                    this.animar = false;
                } else {
                    this.x -= this.speed;
                    this.frameActualY = 0;
                    this.animar = true;
                }

            break;
            case arriba:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 7)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 7)/16)];

               if( colisiona(verticeB, verticeC) === 10 ) {
                    this.y -= 0;
                    this.animar = false;
                } else {
                    this.y -= this.speed;
                    this.frameActualY = 2;
                    this.animar = true;
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
                    this.animar = false;
                } else {
                    this.x += this.speed;
                    this.frameActualY = 1;
                    this.animar = true;
                }
            break;
            case abajo: 

                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 32-8)/16)];
                verticeD = [~~((this.x + 31-8)/16), ~~((this.y + 32-8)/16)];
              
                if( colisiona(verticeA, verticeD) === 10 ) {
                    this.y += 0;
                    this.animar = false;
                } else {
                    this.y += this.speed;
                    this.frameActualY = 3;
                    this.animar = true;
                }

            break;
            case detener: 
                this.x += 0;
                this.y += 0;
                this.animar = false;
        }
        
    }    
}
