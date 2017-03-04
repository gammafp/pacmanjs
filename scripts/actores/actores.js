/**
 * 
 * @param {Object} pac Recibe las imagenes 
 * @param {Object} ctx Contexto del canvas
 */
// La clase para los fantasmas tienen que heredar de pacman // Gamma del futuro encargate de eso: XD
function Pacman(pac, ctx) {
    this.x = 210;       // Eje x posicion
    this.y = 360;       // Eje y posicion
    this.speed = sprites.config.velocidadPacman; // la velocidad normal de pacman 

    // direcciones
    let izquierda = 1;
    let arriba = 2;
    let derecha = 3;
    let abajo = 4;

// TODO: HACER EL METODO DE COLISIONES :/


// ## Método para el dibujado y animacion ##
    this.dibujaPacman = function() {
        // Pintar pacman      
        // TODO: HACER LAS ANIMACIONES SEGUN DONDE VAYA EL PACMAN
        ctx.drawImage(pac, // Se carga el objeto de imagen
                    0, 17,    // posición en el spriteSheet offSetX offSetY
                    16, 16,   // Tamaño de la imagen width, height
                    this.x, this.y, // Posicion en el lienzo
                    32, 32    // Incremento X, Y 
        );
    }    

// ## Método para el movimiento ##
    this.mover = function(x) {
        switch(x) {
            case izquierda: 
                this.x -= 2;
            break;
            case arriba:
                this.y -= 2;
            break;
            case derecha:
                this.x += 2;
            break;
            case abajo: 
                this.x -= 2;
            break;
        }
    }    

}
