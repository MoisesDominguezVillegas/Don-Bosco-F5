// capturamos el botón de buscar para poder saber cuando se ha pulsado y lo guardamos en la variable btn
var btn = document.getElementById('get-dog');

// escuchamos el botón de buscar (guardado en la variable btn) para actuar cuando se le haga click 

btn.addEventListener('click', function() {
    // llamamos a la api de dog.ceo para obtener una imagen de un perro al azar
    axios.get('https://dog.ceo/api/breeds/image/random', {
            // configuramos la respuesta en un objeto json, recordemos que tiene esta estructura  
            responseType: 'json'
        })
        .then(function(res) {
            //mostramos en consola la respuesta
            console.log(res);
            //mostramos en consola los datos de la respuesta
            console.log(res.data.message);

            /* vemos que los datos devueltos vienen en un objeto json como la configuramos anteriormente, por lo que res.data 
            es como si hicieramos declarasemos una variable de tipo json, como la siguiente:
            var data = {
                    "nombre": "Dogo",
                    "animal": "Perro",
                    "color": "marrón claro"
                }

                luego podríamos hacer un console.log de data.nombre que nos devolveria el nombre del perro, en este caso Dogo.
            */


            //capturamos la etiqueta imagen
            var img = document.getElementById('imagen');
            /* habiendo visto que la respuesta de la api es un objeto, capturamos la etiqueta de img del HTML  y podremos ponerle
            la url que hemos recibido. Hazlo tu...
            */

            //capturamos el bloque de código <pre> para poder modificarlo con la respuesta de la API
            var pre = document.getElementById('respuesta');
            /* Insertamos la respuesta en el bloque <pre> para mostrarla en pantalla mediante su propiedad de HTML que hemos utilizado
            en prácticas anteriores, si no lo recuerdas puedes buscarlo, para ello primero identifica que quieres buscar, en este caso
            queremos buscar como modificar el html con javascript, podemos buscarlo tal cual "modificar el html con javascript" o
             buscar solo "modificar html javascript"

             puedes cargar el HTML directamente con los datos, o puedes crear un string y concatenar los datos de la respuesta por separado
             y como tenemos que mostrar comillas dobles, podemos iniar el string con comillas simples de esta forma 
             var string = 'esto es un "texto" con comillas'

             para que se vea bonito puedes usar \n para provocar el salto de línea (cómo si pulsaras) de forma que 
             var objeto = {\n "nombre": "Dogo" \n} se vería cómo var objeto = {
                 "nombre": "Dogo"
             }

             con todo esto podeis terminarlo vosotros
            */

        });
});