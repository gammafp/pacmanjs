var borrameX = 0;
var tiempo;

const Main = (function() {
    const canvas = document.getElementById("pacman");
    const cWidth = canvas.width;
    const cHeight = canvas.height;
    console.log(cWidth);
    const ctx = canvas.getContext("2d");
    
    const _gameLoop = function() {
        // Limpia nuestro canvas
        ctx.clearRect(0, 0, cWidth, cHeight);
        // >> Acá irá la lógica del juego

        ctx.fillStyle = "pink";
        ctx.fillRect(10,borrameX,20,20);
        ctx.fillStyle = "#3498db";        
        ctx.fillRect(60,borrameX,20,20);
        ctx.fillStyle = "red";        
        ctx.fillRect(100,borrameX,20,20);
        ctx.fillStyle = "orange";
        ctx.fillRect(130,borrameX,20,20);
        ctx.fillStyle = "#f1c40f";
        ctx.fillRect(170,borrameX,40,40);

        borrameX++;

        // >> el requestAnimation tiene que ir al final
        tiempo = requestAnimationFrame(_gameLoop);
    }
    // carga el gameloop
    _gameLoop();

})();

