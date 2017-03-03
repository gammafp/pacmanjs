var borrameX = 0;

// >> Funcion MAIN
var iniciar = (function() {
    // >> Constantes
    const canvas = document.getElementById("pacman");
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    const spritesFondo = new Image();
          spritesFondo.src = sprites.url.mapa; 
    
    // la variable mapa viene dada en ./scripts/mapa/mapa.js
    const Mapa = new Pintar(ctx, spritesFondo, mapa);
 

 
    // // >> Nuestro GameLoop
    const _gameLoop = function() {        
        // >> Limpia nuestro canvas
        ctx.clearRect(0, 0, cWidth, cHeight);
        // >> Acá irá la lógica del juego
        Mapa.pintar();

        // >> el requestAnimation tiene que ir al final
        requestAnimationFrame(_gameLoop);
    }
    // carga el gameloop
    _gameLoop();
    
})();