const docshoverDev = document.querySelector(".headerDev__tabs1 ul li:nth-child(2)");
const commhoverDev = document.querySelector(".headerDev__tabs1 ul li:nth-child(4)");
const casehoverDev = document.querySelector(".headerDev__tabs1 ul li:last-child");
const doctabsDev = document.querySelector(".header__hoverDocs");
const comtabsDev = document.querySelector(".header__hoverComm");
const casetabsDev = document.querySelector(".header__hoverCases");
docshoverDev.addEventListener("mouseover", () => {
  doctabsDev.classList.toggle("open");
  doctabsDev.style=("transition: .5s ease"); 
});
doctabsDev.addEventListener("mouseover", () => {
  doctabsDev.classList.toggle("show");
});
docshoverDev.addEventListener("mouseout", () => {
  doctabsDev.classList.remove("open");
  doctabsDev.style=("transition: .5s ease"); 
});
doctabsDev.addEventListener("mouseout", () => {
  doctabsDev.classList.remove("show");
  doctabsDev.style=("transition: .5s ease"); 
});
commhoverDev.addEventListener("mouseover", () => {
  comtabsDev.classList.toggle("open");
  comtabsDev.style=("transition: .5s ease"); 
});
comtabsDev.addEventListener("mouseover", () => {
  comtabsDev.classList.toggle("show");
});
commhoverDev.addEventListener("mouseout", () => {
  comtabsDev.classList.remove("open");
  comtabsDev.style=("transition: .5s ease"); 
});
comtabsDev.addEventListener("mouseout", () => {
  comtabsDev.classList.remove("show");
  comtabsDev.style=("transition: .5s ease"); 
});
casehoverDev.addEventListener("mouseover", () => {
  casetabsDev.classList.toggle("open");
  casetabsDev.style=("transition: .5s ease"); 
});
casetabsDev.addEventListener("mouseover", () => {
  casetabsDev.classList.toggle("show");
});
casehoverDev.addEventListener("mouseout", () => {
  casetabsDev.classList.remove("open");
  casetabsDev.style=("transition: .5s ease"); 
});
casetabsDev.addEventListener("mouseout", () => {
  casetabsDev.classList.remove("show");
  casetabsDev.style=("transition: .5s ease"); 
});










const kamote = document.querySelectorAll(".footer__items h4");
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
    })
})

const toggleMenuDev = document.querySelector(".toggle__menuDev");
const headerDev = document.querySelector(".headerDev__tabs2 ul");
toggleMenuDev.addEventListener("click", () => {
  toggleMenuDev.classList.toggle("open");
  headerDev.classList.toggle("open");
  headerDev.style=("transition: .5s ease"); 
});

const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("transition: .5s ease");  
  arjay.classList.toggle("show");
});











