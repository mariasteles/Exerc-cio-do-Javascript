// Selecionar os parágrafos
const paragrafo1 = document.getElementById("p1");
const paragrafo2 = document.getElementById("p2");
const paragrafo3 = document.getElementById("p3");

// Selecionar os botões
const botao1 = document.getElementById("btn1");
const botao2 = document.getElementById("btn2");
const botao3 = document.getElementById("btn3");

// Adicionar eventos de clique
botao1.addEventListener("click", () => {
    paragrafo1.textContent = "O texto do parágrafo 1 foi alterado!";
});

botao2.addEventListener("click", () => {
    paragrafo2.textContent = "Agora o parágrafo 2 mudou!";
});

botao3.addEventListener("click",  () => {
    paragrafo3.textContent = "Texto novo no parágrafo 3!";
});