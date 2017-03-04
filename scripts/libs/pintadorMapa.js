/**
 * @class pintar
 * @param {Objeto} ctx El contexto de canvas
 * @param {Objeto} imagen Es el objeto de imagen que se ha creado anteriormente
 * @param {Array} objeto Es el array map
 */
let animacionItem = 0;
var Pintar = function(ctx, imagen, objeto) {
    this.pintar = function() {
        for(let y = 0; y < objeto.length; y++) {
            for(let x = 0; x < objeto[y].length; x++) {
                // Si es distinto a cero lo pintas majo :)
                if(objeto[y][x] == 37 || objeto[y][x] == 38 || objeto[y][x] == 39) {
                    if(animacionItem == 20) {
                        objeto[y][x] = objeto[y][x] + 1;
                        console.log(objeto[y][x]);
                    } else if(animacionItem > 20) {
                        animacionItem = 0;
                    }

                    if(objeto[y][x] > 39) {
                         objeto[y][x] = 37;
                    }
                    animacionItem++;
                }
                if(!!objeto[y][x]) {
                    if(objeto[y][x] <= 35) {
                        tipo = 0;
                    } else if(objeto[y][x] > 36 && objeto[y][x] <= 40){
                        tipo = 1;
                    }
                    
                    ctx.drawImage(imagen[tipo], // Se carga el objeto de imagen
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