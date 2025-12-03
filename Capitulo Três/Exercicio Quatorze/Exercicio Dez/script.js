const tabela = document.getElementById("tabela");
const botaoAdd = document.getElementById("add");
const botaoRemover = document.getElementById("remover");

let contador = 1; // controla o número das linhas

// ➕ Adicionar nova linha
botaoAdd.addEventListener("click", () => {
    const novaLinha = tabela.insertRow();   // cria <tr>
    const celula = novaLinha.insertCell();  // cria <td>

    celula.textContent = "Linha " + contador;
        contador++;
});

// ➖ Remover última linha (não remove o cabeçalho)
botaoRemover.addEventListener("click", () => {
    if (tabela.rows.length > 1) {
        tabela.rows[tabela.rows.length - 1].remove();
            contador--;
    }
});