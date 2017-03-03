/**
 * @class pintar
 * @param {Objeto} ctx El contexto de canvas
 * @param {Objeto} imagen Es el objeto de imagen que se ha creado anteriormente
 * @param {Array} objeto Es el array map
 */
var Pintar = function(ctx, imagen, objeto) {

    this.pintar = function() {
        for(let y = 0; y < objeto.length; y++) {
            for(let x = 0; x < objeto[y].length; x++) {
                // Si es distinto a cero lo pintas majo :)
                console.log(objeto[y][x]);
                if(!!objeto[y][x]) {
                    ctx.drawImage(imagen, // Se carga el objeto de imagen
                                sprites[objeto[y][x]].offsetX, sprites[objeto[y][x]].offsetY,  // posición en el spriteSheet offSetX offSetY
                                sprites.config.width, sprites.config.height,         // Tamaño de la imagen width, height
                                (16*x), (16*y),                                       // Posicion en el lienzo
                                sprites.config.zoom, sprites.config.zoom            // Incremento X, Y 
                    );
                }

            }
        }
    }

    
};