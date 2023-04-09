const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector(".intro-section .navbar-list");
navToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});