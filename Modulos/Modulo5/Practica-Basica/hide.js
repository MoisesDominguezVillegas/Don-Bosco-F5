var ocultar = document.getElementById('hide');
var mostrar = document.getElementById('show');

ocultar.addEventListener('click', function() {
    var imgShow = document.getElementById('showImg');
    var imgHide = document.getElementById('hideImg');
    imgShow.style.display = 'none';
    imgHide.style.display = 'block';

    mostrar.style.display = 'block';
    ocultar.style.display = 'none';
});

mostrar.addEventListener('click', function() {
    var imgHide = document.getElementById('hideImg');
    var imgShow = document.getElementById('showImg');
    imgHide.style.display = 'none';
    imgShow.style.display = 'block';

    mostrar.style.display = 'none';
    ocultar.style.display = 'block';
});