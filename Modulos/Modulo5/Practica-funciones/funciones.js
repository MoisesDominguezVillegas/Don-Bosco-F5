function sumar(operando1,operando2) {
   return operando1+operando2;
}

const sumar1 = function(operando1,operando2) {
   return operando1+operando2;
}

const sumar2 = (operando1,operando2) => {
   return operando1+operando2;
}

console.log("===== Declaracion de funcion =======")
console.log(sumar(1,2));
console.log("===== expresion de funcion =======")
console.log(sumar1(1,2));
console.log("===== funcion de flecha =======")
console.log(sumar2(1,2));