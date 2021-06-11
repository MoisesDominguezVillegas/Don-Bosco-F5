window.onload = function() {
    console.log("Este mensaje solo se carga despues del html");

    let funcionExpresada = function() {
        return 'Las funciones expresadas son muy chulas';
    }

    console.log("============ RESULTADO FUNCIÓN EXPRESADA ===============")
    console.log(funcionExpresada());

    let funcionCompleja = function(params) {
        if (params) {
            return 'como tengo params los devuelvo: ' + params;
        } else {
            return 'los params eran falsos';
        }
    }

    console.log("====== RESULTADO FUNCIÓN COMPLEJA SIN PARÁMETROS ========")
    console.log(funcionCompleja());

    console.log("====== RESULTADO FUNCIÓN COMPLEJA CON PARÁMETROS ========")
    console.log(funcionCompleja('codeando en javascript'));
}