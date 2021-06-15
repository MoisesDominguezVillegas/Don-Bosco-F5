# Practica con objetos

Los objetos son creados usualmente para representar entidades del mundo real, como usuarios, órdenes, etc.

```
let user = {
  name: "John",
  age: 30
};
```
## Formas abreviadas para los métodos

Existe una sintaxis más corta para los métodos en objetos literales:

```
user = {
  sayHi: function() {
    alert("Hello");
  }
};

// la forma abreviada se ve mejor, ¿verdad?
user = {
  sayHi() {   // igual que "sayHi: function(){...}"
    alert("Hello");
  }
};
```

Como se demostró, podemos omitir "function" y simplemente escribir sayHi().

## “this” en métodos
Es común que un método de objeto necesite acceder a la información almacenada en el objeto para cumplir su tarea.

Por ejemplo, el código dentro de user.sayHi() puede necesitar el nombre del usuario user.

Para acceder al objeto, un método puede usar la palabra clave this.

El valor de this es el objeto “antes del punto”, el usado para llamar al método.

Por ejemplo:

```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" es el "objeto actual"
    alert(this.name);
  }

};

user.sayHi(); // John
```
Aquí durante la ejecución de user.sayHi(), el valor de this será user.

## Ejercicio

Tomando tres objetos cualquiera, llamados perro, humano y pajaro, con estas carácterísticas:

```
let perro = {
    name: "Dodge",
    clase: "Dogo",
    mamifero: true,
    ave: false,
    saluda() {
        return "¡Guaugh!";
    },
    descripcion() {
        return this.name + ' - ' + this.clase; 
    },
    esMamifero() {
        return this.mamifero;
    },
    esAve(){
       return this.ave; 
    },
}
```
Mediante console.log, concatenando el texto mostrado con el valor, muestra los outputs en consola:

```
›====== PERRO ========
›Saluda: ¡Guaugh!
›Descripción: Dodge - Dogo
›¿Es mamífero?: true
›¿Es ave?: false
›====== HUMANO ========
›Saluda: ¡Hola!
›Descripción: Paco - Humano
›¿Es mamífero?: true
›¿Es ave?: false
›====== PAJARO ========
›Saluda: ¡Faltaba el punto y coma!
›Descripción: Perico - Loro
›¿Es mamífero?: false
›¿Es ave?: true
```