// var stats = new Stats(false);
// document.body.appendChild(stats.domElement);
var puntuacion = 0;
// >> Funcion MAIN
(function() {
    console.log("Juego cargado...");

    /* ##############################
         Constantes del canva */
    let bucleAnimation;
    const canvas = document.getElementById("pacman");
    const ctx = canvas.getContext("2d");
    // ctx.imageSmoothingEnable = false; 
    // ctx.scale(window.devicePixelRatio, window.devicePixelRatio);   
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    // let colision = new Colisiones();
    let direccion = 1;

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
        Mandos */
    window.addEventListener('keydown', (e) => {
        let codigos = e.keyCode;
        if(codigos >= 37 && codigos <= 40) {
           e.preventDefault();   
           direccion = (codigos%4 === 0) ? 4 : codigos%4;
        }
    }, false);



    /* ###############################
        Nuestro GAMELOOP */
    const _gameLoop = function() {  
        // stats.begin();    
        // limpiador del canvas
        ctx.clearRect(0, 0, cWidth, cHeight);
    
        // Lógica del juego (update)
        Mapa.pintar();
        pacman.dibujaPacman();
        // console.log(ColisionesPared(pacman.x, pacman.y, direccion, pacman.ultimaDireccion));
        pacman.ultimaDireccion = ColisionesPared(pacman.x, pacman.y, direccion, pacman.ultimaDireccion);
        
        // Interfaz de movimiento de pacman
        pacman.mover(pacman.ultimaDireccion);
        console.log(puntuacion);
        // stats.end();
        // el requestAnimation tiene que ir al final
        bucleAnimation = requestAnimationFrame(_gameLoop);
    }
    
    // Carga inicial del Game Loop
    _gameLoop();
    
})();