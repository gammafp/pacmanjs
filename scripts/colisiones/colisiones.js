let ColisionesPared = function(x, y, nuevaPos, ultimaPos) {
        let verticeA = [];
        let verticeB = [];
        let verticeC = [];
        let verticeD = [];
        let salida;
        [this.x, this.y] = [x, y];

        // Direcciones.
        switch(nuevaPos) {
            case 1: 
                verticeA = [~~((this.x + 7)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 7)/16),  ~~((this.y + 8)/16)];
                if( colisiona(verticeA, verticeB) === 10 ) {
                
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                  
                } else {
                    salida = 1;
                }
            break;
            case 2:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 7)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 7)/16)];

                if(  colisiona(verticeB, verticeC) === 10 )  {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else {
                    salida = 2;
                }
            break;
            case 3:
                verticeC = [~~((this.x+32 - 8)/16), ~~((this.y + 8)/16)];
                verticeD = [~~((this.x+32 - 8)/16), ~~((this.y + 31-8)/16)];
         
                if(colisiona(verticeC, verticeD) === 10) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else {
                    salida = 3;
                }

            break;
            case 4: 
                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 32-8)/16)];
                verticeD = [~~((this.x + 31-8)/16), ~~((this.y + 32-8)/16)];
              
                if( colisiona(verticeA, verticeD) === 10 ) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else {
                    salida = 4;
                }
            break;
        }
        return salida;
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