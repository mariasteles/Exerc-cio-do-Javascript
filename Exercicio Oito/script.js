const botao = document.querySelector("#toggleMenu");
const menu = document.querySelector("#menu");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});