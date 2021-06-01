var btn = document.getElementById('bgc');
var body = document.getElementById('body');

btn.addEventListener('click', function() {

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = '#' + randomColor;

    var textoColor = document.getElementById('textoColor');
    textoColor.innerHTML = 'Color: #' + randomColor;

});

var colorBlanco = document.getElementById('bgcReset');

colorBlanco.addEventListener('click', function() {

    body.style.backgroundColor = '#ffffff';

    var textoColor = document.getElementById('textoColor');
    textoColor.innerHTML = 'Color: #ffffff';

});