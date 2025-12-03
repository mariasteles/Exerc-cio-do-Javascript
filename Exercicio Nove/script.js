const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("enviar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    if (nome.value.trim() === "" || 
        email.value.trim() === "" || 
        mensagem.value.trim() === "") {

        alert("Preencha todos os campos antes de enviar!");
        return;
    }

    resultado.textContent = "Mensagem enviada com sucesso!";
    resultado.style.color = "green";
});