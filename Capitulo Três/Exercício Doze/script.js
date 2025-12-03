// Obtém referências aos elementos HTML
const registerButton = document.getElementById('registerButton');
const clearButton = document.getElementById('clearButton');
const historyContainer = document.getElementById('historyContainer');

/**
 * Requisito: Botão Registrar clique
 * Adiciona um item no historyContainer com a data e hora atual.
 */
function registerClick() {
    // 1. Gerar data (Uso obrigatório: new Date())
    const now = new Date();
    
    // Formata a data e hora para exibição
    const dateTimeString = now.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // 2. Gerar item (Uso obrigatório: createElement())
    const clickItem = document.createElement('div');
    clickItem.classList.add('click-item'); // Adiciona a classe CSS para estilização

    // Conteúdo do item: "Clique registrado" + Data + horário
    clickItem.textContent = `Clique registrado - ${dateTimeString}`;

    // 3. Inserir no HTML (Uso obrigatório: appendChild())
    // Adiciona o novo item no topo da lista (antes do primeiro filho)
    historyContainer.prepend(clickItem);
    // Se fosse appendChild(clickItem), o novo item apareceria no final.
}

/**
 * Requisito: Um botão Limpar histórico
 * Remove todos os itens do historyContainer.
 */
function clearHistory() {
    // Limpa o conteúdo HTML do contêiner, removendo todos os filhos
    historyContainer.innerHTML = '';
}

// Adiciona os event listeners aos botões
registerButton.addEventListener('click', registerClick);
clearButton.addEventListener('click', clearHistory);