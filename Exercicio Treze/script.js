// 1. Obter a referência para a lista (o container)
const listContainer = document.getElementById('myList');

/**
 * Função para lidar com o clique em qualquer botão da lista.
 * Usa o conceito de "Event Delegation" (Delegação de Eventos).
 */
function handleListClick(event) {
    // Conhecimento envolvido: event.target
    const clickedElement = event.target;

    // 2. Verifica se o elemento clicado é o botão de remover.
    // Usamos o classList.contains para garantir que só agimos se for o botão.
    if (clickedElement.classList.contains('remove-btn')) {
        
        // Requisito: Ao clicar no botão → apenas aquele item remove.

        // Conhecimento envolvido: parentNode.remove()
        // O parentNode (nó pai) do botão é o <li>
        const listItem = clickedElement.parentNode;
        
        // O método .remove() remove o próprio elemento do DOM.
        listItem.remove();
        
        console.log(`Item "${listItem.textContent.trim().replace('Remover', '')}" removido.`);
    }
}

// 3. Adiciona o Event Listener apenas no container da lista (<ul>)
// Isto evita ter que adicionar um listener a cada <li> individualmente.
listContainer.addEventListener('click', handleListClick);


// Opcional: Adicionar um novo item para testar a remoção dinâmica
function addNewItem(itemText) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.innerHTML = `${itemText} <button class="remove-btn">Remover</button>`;
    listContainer.appendChild(newListItem);
}

// Adiciona um item de teste após 1 segundo
setTimeout(() => {
    addNewItem("Item 4 (Adicionado dinamicamente)");
}, 1000);