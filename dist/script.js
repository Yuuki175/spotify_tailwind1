const toggleMenuDev = document.querySelector(".toggle__menuDev");
const headerDev = document.querySelector(".headerDev__tabs2 ul");
toggleMenuDev.addEventListener("click", () => {
  toggleMenuDev.classList.toggle("open");
  headerDev.classList.toggle("open");
});
const kamote = document.querySelectorAll(".footer__items h4");
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
    })
})

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("transition: .5s ease");
  arjay.classList.toggle("show");
});


