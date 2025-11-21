let form = document.querySelector(".form");
let emailInput = document.querySelector('input[name="email"]');
let passwordInput = document.querySelector('#password');
let errorSpan = document.querySelector(".combinacion span");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    errorSpan.style.display = "none";
    errorSpan.innerText = "";

    let email = emailInput.value;
    let pass = passwordInput.value;

    if (email === "") {
        errorSpan.style.display = "block";
        errorSpan.innerText = "El email es obligatorio.";
        return;
    }

    if (pass === "") {
        errorSpan.style.display = "block";
        errorSpan.innerText = "La contraseña es obligatoria.";
        return;
    }

    if (pass.length < 6) {
        errorSpan.style.display = "block";
        errorSpan.innerText = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    localStorage.setItem("email", email);

    location.href = "./index.html";
});