# Práctica con axios

La libreria nos permite hacer llamadas ajax en javascript y consumir una API rest con json sin utilizar mucho código o depender de JQuery. En el siguiente enlace encotrareis algo más detallado.

```
axios.post('http://localhost:3000/api/v1/users/login', {
      email: email,
      password: password,
})
```
Al cargar la libreria axios en el navegador tenemos acceso al objeto "axios". En concreto vamos a utilizar el método "post" el cual enviará la información de manera segura. Acto seguido se introduce la ruta URL del recurso a consumir y un objeto con los datos, en este caso usuario y contraseña.


```
.then(function(res) {
      console.log(res.data);
      if (res.status == 200) {
         mensaje.innerHTML = 'Has logeado correctamente, el token ha sido guardado en memoria.';
         localStorage.setItem('token', res.data.token);
      }
})
```
Cómo es una promesa, se introduce el "then", estructura de código que se ejecuta solo cuando la llamada anterior se haya resuelto con éxito. - Se declara una función que recibe la respuesta de la API para ser procesada. 
- Se hace un "console.log" de "res.data" que es donde se encuentran los datos devueltos por la API, en este caso el token y cuando expira.
- Si el código de estado es 200, osea se ha procesado correctamente, se insertará en el HTML el mensaje para ser mostrado.
- El token se guardará en la caché del navegador con el nombre de 'token'.



- Cómo usar axios con javascript [enlace](https://desarrolloweb.com/articulos/axios-ajax-cliente-http-javascript.html)