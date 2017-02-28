var borrameX = 0;

// >> Funcion MAIN
var iniciar = function() {
    // >> Constantes
    const canvas = document.getElementById("pacman");
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    const spritesFondo = new Image();
          spritesFondo.src = sprites.url.mapa; 
    var obj = sprites[33];
    // >> Nuestro GameLoop
    const _gameLoop = function() {        
        // >> Limpia nuestro canvas
        ctx.clearRect(0, 0, cWidth, cHeight);

         // >> Acá irá la lógica del juego
                //   (objeto imagen, offsetX, offsetY, tamX, tamY, posX, posY, zoomX, zoomY )
        ctx.drawImage(spritesFondo, obj.offsetX, obj.offsetY, sprites.config.width, sprites.config.width, 0, 0, sprites.config.zoom, sprites.config.zoom);
        // ctx.drawImage(spritesFondo, sprites[8].offsetX, sprites[8].offsetY, sprites.config.width, sprites.config.width, 0, 16, sprites.config.zoom, sprites.config.zoom);

        // ctx.drawImage(spritesFondo, 60, 60, 300, 300);

        borrameX++;
        // >> el requestAnimation tiene que ir al final
        requestAnimationFrame(_gameLoop);
    }
    // carga el gameloop
    _gameLoop();
};

window.addEventListener("load", iniciar, false);