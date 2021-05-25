var contador = 0;

window.onload = () => {

    var display = document.getElementById('contador');


    operacion = (num) => {
        if (num > 0) {
            contador += 1;
        } else if (num < 0) {
            contador -= 1;
        }

        setContador();
    };

    reset = () => {
        contador = 0;
        setContador();
    }

    setContador = () => {
        display.innerHTML = contador;
        setColor();
    }

    setColor = () => {
        if (contador >= 1) {
            display.style.backgroundColor = 'green';
        } else if (contador <= -1) {
            display.style.color = 'red';
        } else {
            display.style.color = 'black';
        }


    }
};