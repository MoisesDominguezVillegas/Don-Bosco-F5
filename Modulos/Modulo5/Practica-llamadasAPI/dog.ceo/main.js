var btn = document.getElementById('get-dog');

btn.addEventListener('click', function() {
    axios.get('https://dog.ceo/api/breeds/image/random', {
            responseType: 'json'
        })
        .then(function(res) {
            //mostramos en consola la respuesta
            console.log(res);
            //mostramos en consola los datos de la respuesta
            console.log(res.data);

            //capturamos la etiqueta imagen
            var img = document.getElementById('imagen');
            //cambiamos el atributo src de la etiqueta img por la nueva url recibida de la llamda a la api
            img.src = res.data.message;
            //capturamos el bloque de código <pre>
            var pre = document.getElementById('respuesta');
            //insertamos la respuesta en el bloque <pre> para mostrarla en pantalla
            pre.innerHTML = '{\n "message": "' + res.data.message + '",\n "status": "' + res.data.status + '\n}';

        });
});