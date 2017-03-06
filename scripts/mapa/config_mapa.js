const debug = true;
const ruta = (debug) ? 'debugSprites' : 'Sprites';

const sprites = {
    'url': {
        'mapa' : 'assets/'+ruta+'/escenario.png',
        'items' : './assets/'+ruta+'/items.png',
        'player_pacman' : './assets/'+ruta+'/pacman.png'
    },
    'config' : {
        'width'  : 16,
        'height' : 16,
        'zoom': 16,
        'velocidadPacman': 2// Velocidad normal de pacman
    },
    // -> primera fila 1 - 6 
    1: {
        'offsetX': 6,
        'offsetY': 6
    },
    2: {
        'offsetX': 6+23,
        'offsetY': 6
    },
    3: {
        'offsetX': 6+(23*2),
        'offsetY': 6
    },
    4: {
        'offsetX': 6+(23*3),
        'offsetY': 6
    },
    5: {
        'offsetX': 6+(23*4),
        'offsetY': 6
    },
    6: {
        'offsetX': 6+(23*5),
        'offsetY': 6
    },

    // -> segunda fila 7 - 12
    7: {
        'offsetX': 6,
        'offsetY': 6+23
    },
    8: {
        'offsetX': 6+23,
        'offsetY': 6+23
    },
    9: {
        'offsetX': 6+(23*2),
        'offsetY': 6+23
    },
    10: {
        'offsetX': 6+(23*3),
        'offsetY': 6+23
    },
    11: {
        'offsetX': 6+(23*4),
        'offsetY': 6+23
    },
    12: {
        'offsetX': 6+(23*5),
        'offsetY': 6+23
    },

    // -> tercera fila 13 - 18
    13: {
        'offsetX': 6,
        'offsetY': 6+(23*2)
    },
    14: {
        'offsetX': 6+23,
        'offsetY': 6+(23*2)
    },
    15: {
        'offsetX': 6+(23*2),
        'offsetY': 6+(23*2)
    },
    16: {
        'offsetX': 6+(23*3),
        'offsetY': 6+(23*2)
    },
    17: {
        'offsetX': 6+(23*4),
        'offsetY': 6+(23*2)
    },
    18: {
        'offsetX': 6+(23*5),
        'offsetY': 6+(23*2)
    },

    // -> cuarta fila fila 19 - 24
    19: {
        'offsetX': 6,
        'offsetY': 6+(23*3)
    },
    20: {
        'offsetX': 6+23,
        'offsetY': 6+(23*3)
    },
    21: {
        'offsetX': 6+(23*2),
        'offsetY': 6+(23*3)
    },
    22: {
        'offsetX': 6+(23*3),
        'offsetY': 6+(23*3)
    },
    23: {
        'offsetX': 6+(23*4),
        'offsetY': 6+(23*3)
    },
    24: {
        'offsetX': 6+(23*5),
        'offsetY': 6+(23*3)
    },

    // -> quinta fila 25 - 30
    25: {
        'offsetX': 6,
        'offsetY': 6+(23*4)
    },
    26: {
        'offsetX': 6+23,
        'offsetY': 6+(23*4)
    },
    27: {
        'offsetX': 6+(23*2),
        'offsetY': 6+(23*4)
    },
    28: {
        'offsetX': 6+(23*3),
        'offsetY': 6+(23*4)
    },
    29: {
        'offsetX': 6+(23*4),
        'offsetY': 6+(23*4)
    },

    30: {
        'offsetX': 6+(23*5),
        'offsetY': 6+(23*4)
    },

    // -> Sexta  fila 31 - 33
    31: {
        'offsetX': 6,
        'offsetY': 6+(23*5)
    },
    32: {
        'offsetX': 6+23,
        'offsetY': 6+(23*5)
    },
    33: {
        'offsetX': 6+(23*2),
        'offsetY': 6+(23*5)
    },
    34: {
        'offsetX': 6+(23*3),
        'offsetY': 6+(23*5)
    },
    35: {
        'offsetX': 6+(23*4),
        'offsetY': 6+(23*5)
    },
    // el indice 36 está libre
    // Tiled de items
    37: {
        'offsetX': 6,
        'offsetY': 6
    },
    38: {
        'offsetX': 6+23,
        'offsetY': 6
    },
    39: {
        'offsetX': 6+23*2,
        'offsetY': 6
    },

    // Indice 38, 39 son efectos del 37 que es el item de poder. El 40 es el el item de puntos 
    40: {
        'offsetX': 6+(23*3),
        'offsetY': 6
    }
};