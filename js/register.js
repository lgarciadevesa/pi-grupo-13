document.addEventListener("DOMContentLoaded", function () {

  let form = document.querySelector(".form");
  let emailInput = document.querySelector("#email");
  let passInput = document.querySelector("#password");
  let pass2Input = document.querySelector("#password2");

  let errorEmail = document.querySelector(".errorEmail");
  let errorPass = document.querySelector(".errorPass");
  let errorPass2 = document.querySelector(".errorPass2");

  form.addEventListener("submit", function (e) {

    let email = emailInput.value;
    let pass1 = passInput.value;
    let pass2 = pass2Input.value;

    if (email === "") {
      e.preventDefault();
      errorEmail.innerText = "El email es obligatorio.";
      errorEmail.style.color = "red"
      return;
    }


    if (pass1 === "") {
      e.preventDefault();
      errorPass.innerText = "La contraseña es obligatoria.";
      errorPass.style.color = "red"
      return;
    }

    if (pass1.length < 6) {
      e.preventDefault();
      errorPass.innerText = "La contraseña debe tener al menos 6 caracteres.";
      errorPass.style.color = "red"
      return;
    }

    if (pass2 === "") {
      e.preventDefault();
      errorPass2.innerText = "Debés repetir la contraseña.";
      errorPass2.style.color = "red"
      return;
    }

    if (pass1 !== pass2) {
      e.preventDefault();
      errorPass2.innerText = "Las contraseñas no coinciden.";
      errorPass2.style.color = "red"
      return;
    }

    e.preventDefault();
    location.href = "./login.html";

  });

});