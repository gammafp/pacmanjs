let ColisionesPared = function(x, y, nuevaPos, ultimaPos) {
        let verticeA = [];
        let verticeB = [];
        let verticeC = [];
        let verticeD = [];
        let colision = 0;
        let salida;
        [this.x, this.y] = [x, y];

        // Direcciones.
        switch(nuevaPos) {
            case 1: 
                verticeA = [~~((this.x + 7)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 7)/16),  ~~((this.y + 8)/16)];
                colision = colisiona(verticeA, verticeB)
                if( colision === 10 ) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                  
                } else {
                    salida = 1;
                }
            break;
            // se verifica arriba para que no salga fuera del portal
            case 2:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 7)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 7)/16)];
                colision = colisiona(verticeB, verticeC);
                if( colision === 10 )  {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else if(colision === 15) {
                    // Colision 15 para evitar que se salga fuera del portal
                    salida = ultimaPos;
                } else {
                    salida = 2;
                }
            break;
            case 3:
                verticeC = [~~((this.x+32 - 8)/16), ~~((this.y + 8)/16)];
                verticeD = [~~((this.x+32 - 8)/16), ~~((this.y + 31-8)/16)];
                colision = colisiona(verticeC, verticeD);
                if( colision === 10) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else {
                    salida = 3;
                }

            break;
            case 4: 
                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 32-8)/16)];
                verticeD = [~~((this.x + 31-8)/16), ~~((this.y + 32-8)/16)];
                colision = colisiona(verticeA, verticeD);
                if( colision === 10 ) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else if( colision === 15 ) {
                    salida = ultimaPos;
                } else {
                    salida = 4;
                }
            break;
        }
        return salida;
    }

// las entradas de punto van a favor de las agujas del reloj
// Código de retornos irán a partir del diez
// 10 = está colisionando
// 15 = está fuera del portal
function colisiona(puntoA, puntoB) {
    let salida = 0;
    let puntA = mapa[puntoA[1]][puntoA[0]];
    let puntB = mapa[puntoB[1]][puntoB[0]];

    // Sumar el comer puntos
    if(puntA == 40) {
        mapa[puntoA[1]][puntoA[0]] = 0;
        puntuacion++;
    }
    // El PODERRRRR!!!!
    if((puntA > 36 && puntA <= 39)) {
        mapa[puntoA[1]][puntoA[0]] = 0;
    }

    if( (puntA > 0 && puntA < 36) || (puntB > 0 && puntB < 36) ) {
        salida = 10;
    }
    if(puntA === undefined) {
        salida = 15;
    }

    return salida;
}

let ColisionesParedFantasma = function(x, y, nuevaPos, ultimaPos) {
        let verticeA = [];
        let verticeB = [];
        let verticeC = [];
        let verticeD = [];
        let colision = 0;
        let salida;
        [this.x, this.y] = [x, y];

        // Direcciones.
        switch(nuevaPos) {
            case 1: 
                verticeA = [~~((this.x + 7)/16),  ~~((this.y + 31-8)/16)];
                verticeB = [~~((this.x + 7)/16),  ~~((this.y + 8)/16)];
                colision = colisionaF(verticeA, verticeB)
                if( colision === 10 ) {
                    salida = (ultimaPos === nuevaPos) ? 0 : 4;
                  
                } else {
                    salida = 1;
                }
            break;
            // se verifica arriba para que no salga fuera del portal
            case 2:
                verticeB = [~~((this.x + 8)/16),  ~~((this.y + 7)/16)];
                verticeC = [~~((this.x+31-8)/16), ~~((this.y + 7)/16)];
                colision = colisionaF(verticeB, verticeC);
                if( colision === 10 )  {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else if(colision === 15) {
                    // Colision 15 para evitar que se salga fuera del portal
                    salida = ultimaPos;
                } else {
                    salida = 2;
                }
            break;
            case 3:
                verticeC = [~~((this.x+32 - 8)/16), ~~((this.y + 8)/16)];
                verticeD = [~~((this.x+32 - 8)/16), ~~((this.y + 31-8)/16)];
                colision = colisionaF(verticeC, verticeD);
                if( colision === 10) {
                    salida = (ultimaPos === nuevaPos) ? 0 : ultimaPos;
                } else {
                    salida = 3;
                }

            break;
            case 4: 
                verticeA = [~~((this.x + 8)/16),  ~~((this.y + 32-8)/16)];
                verticeD = [~~((this.x + 31-8)/16), ~~((this.y + 32-8)/16)];
                colision = colisionaF(verticeA, verticeD);
                if( colision === 10 ) {
                    salida = (ultimaPos === nuevaPos) ? 0 : 3;
                } else if( colision === 15 ) {
                    salida = ultimaPos;
                } else {
                    salida = 4;
                }
            break;
        }
        return salida;
    }

// las entradas de punto van a favor de las agujas del reloj
// Código de retornos irán a partir del diez
// 10 = está colisionando
// 15 = está fuera del portal
function colisionaF(puntoA, puntoB) {
    let salida = 0;
    let puntA = mapa[puntoA[1]][puntoA[0]];
    let puntB = mapa[puntoB[1]][puntoB[0]];


    if( (puntA > 0 && puntA < 36) || (puntB > 0 && puntB < 36) ) {
        salida = 10;
    }
    if(puntA === undefined) {
        salida = 15;
    }

    return salida;
}