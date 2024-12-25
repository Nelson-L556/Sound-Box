const menu = document.querySelector(".header__menu");
const cerrar = document.querySelector(".header__cerrar");
const navegacion = document.querySelector(".header__navegacion");

// Eventos
menu.addEventListener("click", () => {
    navegacion.classList.add("visible");
    cerrar.classList.add("visible");
    menu.classList.add("ocultar");
})

cerrar.addEventListener("click", () => {
    navegacion.classList.remove("visible");
    cerrar.classList.remove("visible");
    menu.classList.remove("ocultar")
})