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
        console.log(pos);
        switch(pos) {
            case izquierda: 
                this.x -= this.speed;
            break;
            case arriba:
                this.y -= this.speed;
            break;
            case derecha:
                this.x += this.speed;
            break;
            case abajo: 
                this.y += this.speed;
            break;
            case detener: 
                this.x += 0;
                this.y += 0;
        }
        
    }    
}