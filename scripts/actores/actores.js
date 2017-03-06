/**
 * 
 * @param {Object} pac Recibe las imagenes 
 * @param {Object} ctx Contexto del canvas
 */
// La clase para los fantasmas tienen que heredar de pacman // Gamma del futuro encargate de eso: XD
function Pacman(pac, ctx) {
    this.x = 184;       // Eje x posicion 210 || 185
    this.y = 360;       // Eje y posicionn360 || 360
    // this.speed = sprites.config.velocidadPacman; // la velocidad normal de pacman 
    this.speed = 0.5;
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
        let verticeA = [];
        let verticeB = [];
        let verticeC = [];
        let verticeD = [];
        // Direcciones.
        switch(pos) {
            case izquierda: 
                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 8)/16)];
                this.x -= ( colisiona(verticeA, verticeB) === 10 ) ? 0 : this.speed;
            break;
            case arriba:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 8)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 8)/16)];
                this.y -= ( colisiona(verticeB, verticeC) === 10 ) ? 0 : this.speed;
            break;
            case derecha:
                verticeC = [~~((this.x+32 - 8)/16), ~~((this.y + 8)/16)];
                verticeD = [~~((this.x+32 - 8)/16), ~~((this.y + 31-8)/16)];
                this.x += ( colisiona(verticeC, verticeD) === 10 ) ? 0 : this.speed;
            break;
            case abajo: 
                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 31-8)/16)];
                verticeD = [~~((this.x+32-8)/16), ~~((this.y + 32-8)/16)];
                this.y += ( colisiona(verticeA, verticeD) === 10 ) ? 0 : this.speed;
            break;
        }
        
    }    
}

// las entradas de punto van a favor de las agujas del reloj
function colisiona(puntoA, puntoB) {
    let salida = 0;
    let puntA = mapa[puntoA[1]][puntoA[0]];
    let puntB = mapa[puntoB[1]][puntoB[0]];

    if( (puntA > 0 && puntA < 36) || (puntB > 0 && puntB < 36) ) {
        salida = 10;
    }
    
    return salida;
}