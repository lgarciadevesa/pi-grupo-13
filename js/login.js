let form = document.querySelector(".form");
let emailInput = document.querySelector('input[name="email"]');
let passwordInput = document.querySelector('#password');
let errorSpan = document.querySelector(".combinacion span");

form.addEventListener("submit", function (e) {

    errorSpan.style.display = "none";
    errorSpan.innerText = "";

    let email = emailInput.value;
    let pass = passwordInput.value;
    let valido = true;

    if (email === "") {
        errorSpan.style.display = "block";
        errorSpan.innerText = "El email es obligatorio.";
        valido = false;
    }

    else if (pass === "") {
        errorSpan.style.display = "block";
        errorSpan.innerText = "La contraseña es obligatoria.";
        valido = false;
    }

    else if (pass.length < 6) {
        errorSpan.style.display = "block";
        errorSpan.innerText = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
    }

    if (!valido) {
        e.preventDefault();
        return;
    }

    localStorage.setItem("email", email);

    e.preventDefault();
    window.location.href = "./index.html";
});