# Práctica de llamadas API

Se presentan dos opciones de hacer llamadas a una API mediante javascript.

- Mediante XMLHttpRequest que es la más básica y la que siempre se suele mostrar en tutoriales básicos y se muestra para tener la referencia.
- Mediante axios, que es un libreria que nos permite hacer llamadas con json, utilizaremos esta porque es más potente y necesita menos código.

Dentro de cada carpeta se encuentran los recursos relacionados, al ser común para ambas prácticas, aquí encontrareis un resumen de las llamadas típicas a una API.

### Llamadas al API
Las llamadas al API se implementan como peticiones HTTP, en las que:

- La URL representa el recurso

```
http://www.formandome.es/api/cursos/1
```
Se obtiene el curso con id 1 de la api.

- El método (HTTP Verbs) representa la operación:

```
GET http://www.formandome.es/api/cursos/1
```
Analizando la llamada anterior, se observa que utiliza el método GET, el cual envía la información por los parámetros de la URL de forma no segura, para el envío de información se utilizará POST.

- El código de estado HTTP representa el resultado:

```
200 OK HTTP/1.1
404 NOT FOUND HTTP/1.1
```
Cada llamada obtiene una respuesta básica que consta de un código de estado y un mensaje, ambos representan como se resolvió la llamada, en este ejemplo se observan dos respuestas, una con estado 200 y mensaje "OK", que se produce cuando el recurso solicitado existe y es devuelto satisfactoriamente. Y una segunda llamada con estado 404 y mensaje "NOT FOUND", que se produce cuando el recurso solicitado no existe. 

Esta breve resumén ha sido extraido del siguiente enlace, pero cómo es demasiada información lo veremos más adelante.

- Arquitectura API rest [enlace](https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html)
