const quadrado = document.getElementById("quadrado");
const botao = document.getElementById("btnToggle");

botao.addEventListener("click", () => {
    // Alterna a classe que some com o quadrado
    quadrado.classList.toggle("escondido");
});