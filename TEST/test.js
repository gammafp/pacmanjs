(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelRequestAnimationFrame = window[vendors[x]+
          'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/* Configuracion de Sprites */

var armas = ['cuchillo', 'pistola', 'escopeta', 'grosa'];
var sprites = {
    dimension: {
        ancho: 200,
        alto: 200
    },
    cuchillo: {
        libre: [0,0],
        accion: [[1,0],[2,0],[1,0]]
    },
    pistola: {
        libre: [0,2],
        accion: [[0,2],[1,2],[2,2],[3,2],[4,2],[5,2]],
        recarga: [[0,1],[1,1],[2,1],[3,1],[4,1],[0,1]]
    },
    escopeta: {
        libre: [0,3],
        accion: [[3,0],[4,0],[5,0]],
        recarga: [[1,3],[2,3],[3,3],[4,3],[5,3]]
    },
    grosa: {
        libre: [0,4],
        accion: [[1,4],[2,4],[3,4],[4,4],[5,4]]
    }
};

/* Game Loop */

var juego = (function(){
  var reqAnimId,
      canvas,
      contexto,
      canvasBuffer,
      contextoBuffer,
      arma = 'cuchillo',
      estado = 'libre',
      pos = {
          x: 0,
          y: 0
      },
      cambioArmaVel = 15,
      offsetY = 0,
      offsetMax = 5;
    
    var animContador = 0,
        frame = 0,
        frames = 3,
        armaAnterior = 'cuchillo',
        estadoAnterior;
 
    function actualizarArma(){
        if (armaAnterior !== arma){
          offsetY += cambioArmaVel;
          
          if (offsetY > sprites.dimension.alto) {
            armaAnterior = arma;
          }
          return true;
      }
      
      if (offsetY > offsetMax){
          offsetY -= cambioArmaVel;
      }
      else {
          offsetY = offsetMax;
      }
    }
    
    function sincronizarFrames(){
      if (frame < frames){
          frame++;
          return true;
      } else {
          frame = 0;
      }
    }
    
    function actualizarPositiones(){
        var x, y,
            sprite = sprites[arma][estado];
        
        if (estado !== estadoAnterior){
            estadoAnterior = estado;
            animContador = 0;
        }
        
        if(animContador === sprite.length-1){
            estado = 'libre';
            sprite = sprites[arma][estado];
        }
        else if(estado !== 'libre') {
            sprite =  sprite[animContador];
            animContador++;
        }
        
        x = sprite[0] * sprites.dimension.ancho;
        y = sprite[1] * sprites.dimension.alto;
        
        pos = {
            x: x,
            y: y,
            w: sprites.dimension.ancho,
            h: sprites.dimension.alto
        };   
    }
    
  function actualizar() {
      // actualizaciones del estado
      // asignamos la posicion en el sprite para dibujar  

      if (actualizarArma()) return;
      if (sincronizarFrames()) return;
      
      actualizarPositiones();
  }
 
    function dibujar() {      
        contextoBuffer.clearRect(0, 0, canvas.width, canvas.height);
        
        //dibujamos el sprite con la posicion asignada en actualizar()
        contextoBuffer.drawImage(imgSprites, pos.x, pos.y, pos.w, pos.h, 1, offsetY, pos.w, pos.h);
        
        contexto.clearRect(0, 0, canvas.width, canvas.height);  
        contexto.drawImage(canvasBuffer, 0, 0); 
    }
 
    function iniciarCanvas() {
        canvas = document.getElementById('canvas');
        
        canvasBuffer = document.createElement('canvas');
        canvasBuffer.width = canvas.width;
        canvasBuffer.height = canvas.height;
        
        if (canvas.getContext){
            contexto = canvas.getContext('2d');
            contextoBuffer = canvasBuffer.getContext('2d');
        } 
        else throw "canvas no soportado!";
    }
    
    function asignarArmaYEstado(evento){
        var codigo = evento.keyCode;

        function asignarEstado(estadoNuevo){
            if (sprites[arma][estadoNuevo]) {
                estadoAnterior = estado;
                estado = estadoNuevo;
            }
        }
        
        switch(codigo){
            case 97: // a
                asignarEstado('accion');
                break;
            case 114: // r
                asignarEstado('recarga');
                break;
            case 49:
            case 50:
            case 51:
            case 52:
                armaAnterior = arma;
                arma = armas[codigo-49];
                break;
        }
        
    }
 
    function loop(){
        actualizar();
        dibujar();
        
        reqAnimId = window.requestAnimationFrame(loop);
    }
 
 return {

     iniciar: function() {
         if (!canvas)
             iniciarCanvas();
         
         document.addEventListener('keypress', asignarArmaYEstado);
         loop();
     },

     detener: function() {
         if (reqAnimId)
             window.cancelAnimationFrame(requestAnimId);
         
         document.removeEventListener('keypress', asignarArmaYEstado);
         requestAnimId = 0;
     }
 };
 
})();

//Cargamos la imagen del sprite
var imgSprites = new Image();
imgSprites.onload = function() {
    //iniciamos el juego cuando termina
    juego.iniciar();    
};
imgSprites.src = 'http://fernetjs.com/wp-content/uploads/2013/05/doom.png';


    
