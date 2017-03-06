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

// TODO: HACER EL METODO DE COLISIONES :/
// ## Método para el dibujado y animacion ##
    this.dibujaPacman = function() {
        // Pintar pacman      
        // TODO: HACER LAS ANIMACIONES SEGUN DONDE VAYA EL PACMAN
        ctx.drawImage(pac, // Se carga el objeto de imagen
                    0, 0,    // posición en el spriteSheet offSetX offSetY
                    32, 32,   // Tamaño de la imagen width, height
                    this.x, this.y, // Posicion en el lienzo
                    32, 32    // Incremento X, Y 
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
                if(this.x < -16 ) {
                    this.x = (16*28)+16;
                }

                verticeA = [~~((this.x + 7)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 7)/16),  ~~((this.y + 8)/16)];
                if( colisiona(verticeA, verticeB) === 10 ) {
                    this.x -= 0;
                } else {
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
