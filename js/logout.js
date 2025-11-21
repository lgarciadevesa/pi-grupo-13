document.addEventListener("DOMContentLoaded", function () {

  let logout = document.querySelector(".logout");

  if (!logout) return;

  let userInfo     = document.querySelector(".userinfo");
  let loginLink    = document.querySelector(".login");
  let registroLink = document.querySelector(".registro");

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