const btnMobile = document.querySelector("#btn-mobile");

function toggleMenu() {
  const navBar = document.querySelector(".header-nav");
  navBar.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
