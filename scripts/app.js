// >> Funcion MAIN
(function() {
    console.log("Juego cargado...");

    /* ##############################
         Constantes del canva */
    const canvas = document.getElementById("pacman");
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width;
    const cHeight = canvas.height;

    // Sprites
    const spritesFondo = new Image();
    const items = new Image();
    const imagenPacman = new Image();

    // Cargas de las rutas de los sprites
    spritesFondo.src = sprites.url.mapa; 
    items.src = sprites.url.items;
    imagenPacman.src = sprites.url.player_pacman;


    /* #############################
        Objetos / personajes */

    // la variable mapa viene dada en ./scripts/mapa/mapa.js
    const Mapa = new Pintar(ctx, [spritesFondo, items], mapa);

    // clase que viene desde la ruta: ./scripts/actores/actores.js
    const pacman = new Pacman(imagenPacman, ctx);     

    /* ###############################
        Nuestro GAMELOOP */
    const _gameLoop = function() {      
        // limpiador del canvas
        ctx.clearRect(0, 0, cWidth, cHeight);
    
        // Lógica del juego (update)
        Mapa.pintar();
        pacman.dibujaPacman();
        
        // Interfaz de movimiento de pacman
        pacman.mover(1);

        // el requestAnimation tiene que ir al final
        requestAnimationFrame(_gameLoop);
    }
    
    // Carga inicial del Game Loop
    _gameLoop();
    
})();