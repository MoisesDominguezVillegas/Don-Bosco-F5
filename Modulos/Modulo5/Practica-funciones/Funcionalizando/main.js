/* 
   TAREA
   
   En el html encontramos varios grupos de elementos compuestos por un input y un botón para procesar dicha información, que
   se accionará al pulsar sobre el y realizará unas operaciones según el dato introducido. Puedes introducir cualquier dato,
   un numero entero, un numero fraccionario, un string, un array o .

   Una vez te hayas familiarizado con las operaciones tienes que funcionalizar todo lo que puedas el código de JavaScript sin
   alterar su funcionamiento.


   CONSEJOS

   1. Para declarar una variable podemos usar var o let, sin embargo si no vamos a reasignarla una vez creada se debe 
   usar const para ahorrar memoria.

   2. Para crear una función podemos declararla con la palabra reservada 'function' de la siguiente manera:
   function nombreFuncion(){
      return 'Hola mundo';
   } 
   o puede ser creada con una función de flecha de la siguiente manera:
   const nombreFuncion = () => {
      return 'Hola mundo';
   }

   3. Cuando realizamos el mismo bloque de código u operación (ya sea para asignar datos, procesarlos, manipular el DOM, etc.) varias veces es
   aconsejable realizar una función que lo haga y llamar a dicha función en cada sitio donde realizamos esa operación. Los bucles y condicionales
   tambíen son convertidos en funciones normalmente. 
   A esto se llama funcionalizar.

   4. Las variables tienen funciones ya declaradas en el lenguaje JavaScript que nos permiten hacer algunas operaciones con los datos alamecenados
   en ellas, en este ejercicio vas a encontrar varias de ellas como:
      - "isNaN(valor)" que devuelve true o false si el valor introducido es un número o no;
      - o laa funciónes parseInt y parseFloat, que convierten a numero entero o numero fraccionario un string de números, o devuelve NaN(Not a Number o No es un número)
      si el string no fueran números.
   Si no reconoces alguna o quieres ver alguna más consulta en internet, en la documentación de JavaScript por ejemplo, encontrarás cada una.
*/
const btn1 = document.getElementById('primerBtn');

btn1.addEventListener('click', () => {
   const primero = document.getElementById('primer');
   const primerTexto = document.getElementById('primerTexto');
   primerTexto.innerHTML = '';
   if (primero.value) {
      if ( primero.value != '') {
         if ( (typeof primero.value === 'string' || primero.value instanceof String) && isNaN(primero.value) ) {
            primerTexto.innerHTML = 'El valor introducido es un string, se trata del siguiente (en mayúsculas): ' + primero.value.toUpperCase();
         } else if ( typeof primero.value === 'number' || primero.value instanceof Number || parseFloat(primero.value) || parseInt(primero.value)) {
            if ( primero.value > 0) {
               if ( parseInt(primero.value) == primero.value) {
                  primerTexto.innerHTML = 'El valor introducido es un numero positivo entero, se trata del siguiente: ' + primero.value;
               } else {
                  primerTexto.innerHTML = 'El valor introducido es un numero positivo fraccionario o de coma flotante, se trata del siguiente: ' + primero.value;
               }
            } else {
               if ( parseInt(primero.value) == primero.value) {
                  primerTexto.innerHTML = 'El valor introducido es un numero negativo entero, se trata del siguiente: ' + primero.value;
               } else {
                  primerTexto.innerHTML = 'El valor introducido es un numero negativo fraccionario o de coma flotante, se trata del siguiente: ' + primero.value;
               }
            }
         } else if ( typeof primero.value === 'boolean' || primero.value instanceof Boolean ) {
            primerTexto.innerHTML = 'El valor introducido es un booleano, se trata del siguiente: ' + primero.value;
         }else{
            primerTexto.innerHTML = 'El valor introducido no es un espacio en blanco pero no ha podido ser detacto su tipo, se trata del siguiente: ' + primero.value;
         }
      } else {
         primerTexto.innerHTML = '¡Debes introducir un valor aquí para procesar, un espacio en blanco no vale!';
      }
   } else {
      primerTexto.innerHTML = '¡Debes introducir un valor aquí para procesar!';
   }
});

const btn2 = document.getElementById('segundoBtn');

btn2.addEventListener('click', () => {
   const segundo = document.getElementById('segundo');
   const segundoTexto = document.getElementById('segundoTexto');
   segundoTexto.innerHTML = '';
   if (segundo.value) {
      if ( segundo.value != '') {
         if ( (typeof segundo.value === 'string' || segundo.value instanceof String) && isNaN(segundo.value) ) {
            segundoTexto.innerHTML = 'El valor introducido es un string, se trata del siguiente (en minúsculas): ' + segundo.value.toLowerCase();
         } else if ( typeof segundo.value === 'number' || segundo.value instanceof Number || parseFloat(segundo.value) || parseInt(segundo.value)) {
            if ( segundo.value > 0) {
               if ( parseInt(segundo.value) == segundo.value) {
                  segundoTexto.innerHTML = 'El valor introducido es un numero positivo entero, se trata del siguiente: ' + segundo.value;
               } else {
                  segundoTexto.innerHTML = 'El valor introducido es un numero positivo fraccionario o de coma flotante, se trata del siguiente: ' + segundo.value;
               }
            } else {
               if ( parseInt(segundo.value) == segundo.value) {
                  segundoTexto.innerHTML = 'El valor introducido es un numero negativo entero, se trata del siguiente: ' + segundo.value;
               } else {
                  segundoTexto.innerHTML = 'El valor introducido es un numero negativo fraccionario o de coma flotante, se trata del siguiente: ' + segundo.value;
               }
            }
         } else if ( typeof segundo.value === 'boolean' || segundo.value instanceof Boolean ) {
            segundoTexto.innerHTML = 'El valor introducido es un booleano, se trata del siguiente: ' + segundo.value;
         }else{
            segundoTexto.innerHTML = 'El valor introducido no es un espacio en blanco pero no ha podido ser detacto su tipo, se trata del siguiente: ' + segundo.value;
         }
      } else {
         segundoTexto.innerHTML = '¡Debes introducir un valor aquí para procesar, un espacio en blanco no vale!';
      }
   } else {
      segundoTexto.innerHTML = '¡Debes introducir un valor aquí para procesar!';
   }
});

const btn3 = document.getElementById('tercerBtn');

btn3.addEventListener('click', () => {
   const tercero = document.getElementById('tercer');
   const terceroTexto = document.getElementById('tercerTexto');
   terceroTexto.innerHTML = '';
   if (tercero.value) {
      if ( tercero.value != '') {
         if ( (typeof tercero.value === 'string' || tercero.value instanceof String) && isNaN(tercero.value) ) {
            terceroTexto.innerHTML = 'El valor introducido es un string, se trata del siguiente (en minúsculas): ' + (tercero.value.toLowerCase()).charAt(0).toUpperCase() + (tercero.value.toLowerCase()).slice(1);
         } else if ( typeof tercero.value === 'number' || tercero.value instanceof Number || parseFloat(tercero.value) || parseInt(tercero.value)) {
            if ( tercero.value > 0) {
               if ( parseInt(tercero.value) == tercero.value) {
                  terceroTexto.innerHTML = 'El valor introducido es un numero positivo entero, se trata del siguiente: ' + tercero.value;
               } else {
                  terceroTexto.innerHTML = 'El valor introducido es un numero positivo fraccionario o de coma flotante, se trata del siguiente: ' + tercero.value;
               }
            } else {
               if ( parseInt(tercero.value) == tercero.value) {
                  terceroTexto.innerHTML = 'El valor introducido es un numero negativo entero, se trata del siguiente: ' + tercero.value;
               } else {
                  terceroTexto.innerHTML = 'El valor introducido es un numero negativo fraccionario o de coma flotante, se trata del siguiente: ' + tercero.value;
               }
            }
         } else if ( typeof tercero.value === 'boolean' || tercero.value instanceof Boolean ) {
            terceroTexto.innerHTML = 'El valor introducido es un booleano, se trata del siguiente: ' + tercero.value;
         }else{
            terceroTexto.innerHTML = 'El valor introducido no es un espacio en blanco pero no ha podido ser detacto su tipo, se trata del siguiente: ' + tercero.value;
         }
      } else {
         terceroTexto.innerHTML = '¡Debes introducir un valor aquí para procesar, un espacio en blanco no vale!';
      }
   } else {
      terceroTexto.innerHTML = '¡Debes introducir un valor aquí para procesar!';
   }
});
