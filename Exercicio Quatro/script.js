let numero = 10; // valor inicial

const textoValor = document.getElementById("valor");
const botaoMais = document.getElementById("mais");
const botaoMenos = document.getElementById("menos");

botaoMais.addEventListener("click", () => {
    numero++;
    textoValor.textContent = numero;
});

botaoMenos.addEventListener("click", () => {
    numero--;
    textoValor.textContent = numero;
});