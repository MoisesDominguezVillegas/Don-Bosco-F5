var btn = document.getElementById('get-breed');

btn.addEventListener('click', function() {
    var breed = document.getElementById('dog-selector');
    var url = 'https://dog.ceo/api/breed/' + breed.value + '/images/random';
    console.log(url);

    axios.get(url, {
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
        });
});