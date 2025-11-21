document.addEventListener("DOMContentLoaded", function () {

  let form = document.querySelector(".form");
  let emailInput = document.querySelector('input[type="email"]');
  let passInput = document.querySelector('#password');
  let pass2Input = document.querySelector('#password2');

  form.addEventListener("submit", function (e) {

    let email = emailInput.value;
    let pass1 = passInput.value;
    let pass2 = pass2Input.value;

    if (email === "") {
      alert("El email es obligatorio.");
      e.preventDefault();
      return;
    }

    if (pass1 === "") {
      alert("La contraseña es obligatoria.");
      e.preventDefault();
      return;
    }

    if (pass1.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      e.preventDefault();
      return;
    }

    if (pass1 !== pass2) {
      alert("Las contraseñas no coinciden.");
      e.preventDefault();
      return;
    }

    e.preventDefault();              
    location.href = "./login.html";  
  });

});