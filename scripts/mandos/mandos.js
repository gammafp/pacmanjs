    /* ###############################
        Mandos */
    window.addEventListener('keydown', (e) => {
        let codigos = e.keyCode;
        if(codigos >= 37 && codigos <= 40) {
           e.preventDefault();   
           direccion = (codigos%4 === 0) ? 4 : codigos%4;
        }
    }, false);


