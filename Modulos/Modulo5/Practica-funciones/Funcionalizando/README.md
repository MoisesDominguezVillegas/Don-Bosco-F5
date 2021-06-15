# TAREA

En el html encontramos varios grupos de elementos compuestos por un input y un botón para procesar dicha información, que
se accionará al pulsar sobre el y realizará unas operaciones según el dato introducido. Puedes introducir cualquier dato,
un numero entero, un numero fraccionario, un string, un array o .

Una vez te hayas familiarizado con las operaciones tienes que funcionalizar todo lo que puedas el código de JavaScript sin
alterar su funcionamiento.


# CONSEJOS

1. El código JavaScript puede resultar bastante lioso, por eso tenemos que funcionalizarlo, para que sea más sencilla su comprensión. Por ello si te resulta abrumador, te recomiendo que vayas aislando poco a poco, primero empiezes con un botón y lo comprendas, luego verás que todos hacen lo mismo más o menos. 
Para comprenderlo puedes ir colocando console.log() en cada uno de los bloques y colocar comentarios una vez tengas claro su funcionamiento para ayudarte a hacer la función.

2. Para declarar una variable podemos usar var o let, sin embargo si no vamos a reasignarla una vez creada se debe 
usar const para ahorrar memoria.

3. Para crear una función podemos declararla con la palabra reservada 'function' de la siguiente manera:
```
function nombreFuncion(){
   return 'Hola mundo';
}
```
o puede ser creada con una función de flecha de la siguiente manera:
```
const nombreFuncion = () => {
   return 'Hola mundo';
}
```

4. Cuando realizamos el mismo bloque de código u operación (ya sea para asignar datos, procesarlos, manipular el DOM, etc.) varias veces es
aconsejable realizar una función que lo haga y llamar a dicha función en cada sitio donde realizamos esa operación. Los bucles y condicionales
tambíen son convertidos en funciones normalmente. 
A esto se llama funcionalizar.

5. Las variables tienen funciones ya declaradas en el lenguaje JavaScript que nos permiten hacer algunas operaciones con los datos alamecenados en ellas, en este ejercicio vas a encontrar varias de ellas como:
   - "isNaN(valor)" que devuelve true o false si el valor introducido es un número o no;
   - o laa funciónes parseInt y parseFloat, que convierten a numero entero o numero fraccionario un string de números, o devuelve NaN(Not a Number o No es un número) si el string no fueran números.
Si no reconoces alguna o quieres ver alguna más consulta en internet, en la documentación de JavaScript por ejemplo, encontrarás cada una.