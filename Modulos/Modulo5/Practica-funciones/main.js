window.onload = function() {
    console.log("Este mensaje solo se carga despues del html");

    let funcionExpresada = function() {
        return 'Las funciones expresadas son muy chulas';
    }

    funcionExpresada();

    let funcionCompleja = function(params) {
        if (params) {
            return 'como tengo params los devuelvo: ' + params;
        } else {
            return 'los params eran falsos';
        }
    }

    console.log(funcionCompleja(false));
    funcionCompleja('codeando en javascript');

    let ordenador = 1;

    switch (ordenador) {
        case 1, 2, 3, 4:
            console.log('paco');
            break;
        case 5, 6, 7:
            console.log('pepe');
            break;
        default:
            console.log('dani');
    }
}