document.addEventListener("DOMContentLoaded", function () {

  var email = localStorage.getItem("email");


  if (!email) {
    return;
  }

  var userInfo     = document.querySelector(".userinfo");
  var loginLink    = document.querySelector(".login");
  var registroLink = document.querySelector(".registro");


  if (loginLink) {
    loginLink.style.display = "none";
  }
  if (registroLink) {
    registroLink.style.display = "none";
  }


  if (userInfo) {
    userInfo.innerHTML =
      "<span class='bienvenido'>Bienvenido: " + email + "</span>" +
      "<a  class='logout'>Logout</a>";

    var logout = document.querySelector(".logout");

    if (logout) {
      logout.addEventListener("click", function (e) {
        e.preventDefault();
        // saco el email del localStorage
        localStorage.removeItem("email");
        // redirijo al login
        location.href = "./login.html";
      });
    }
  }
});