window.onload = function() {
    var formElement = document.getElementById('loginForm');
    var loading = document.getElementById('loading');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var mensaje = document.getElementById('mensaje');

    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        loading.style.display = 'block';
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/api/v1/users/login');
        request.setRequestHeader("Content-Type", "application/json");

        request.send(JSON.stringify({
            "email": email.value,
            "password": password.value
        }));
        request.onload = function(_) {
            if (request.status === 200) {
                var token = JSON.parse(request.responseText).token;
                password.value = '';
                email.value = '';
                localStorage.setItem('token', token);
                loading.style.display = 'none';
                mensaje.innerHTML = 'Token guardado en memoria, token ' + token;
            } else {
                loading.style.display = 'none';
                mensaje.innerHTML = 'Contraseña o email incorrectos.';
            }
        }
    });
}