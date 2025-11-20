document.addEventListener("DOMContentLoaded", function () {

  var logout = document.querySelector(".logout");

  if (!logout) return;

  var userInfo     = document.querySelector(".userinfo");
  var loginLink    = document.querySelector(".login");
  var registroLink = document.querySelector(".registro");

  logout.addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.removeItem("email");

    if (userInfo) {
      userInfo.innerHTML = "";
      userInfo.style.display = "none";
    }

    if (loginLink) loginLink.style.display = "";
    if (registroLink) registroLink.style.display = "";

    location.href = "./login.html";

  });

});