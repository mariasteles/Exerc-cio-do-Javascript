// 1. Obtém as referências dos elementos do DOM
const searchInput = document.getElementById('searchInput');
const nameList = document.getElementById('nameList');

// Requisito: Obtém todos os itens da lista
// Usamos querySelectorAll para obter uma lista de todos os <li>
const listItems = nameList.querySelectorAll('.list-item');

/**
 * Função principal que realiza o filtro.
 */
function filterList() {
    // 2. Obtém o texto digitado pelo usuário e o converte para minúsculas
    // Isso garante que a busca seja insensível a maiúsculas/minúsculas.
    const filterText = searchInput.value.toLowerCase();

    // 3. Itera sobre cada item da lista
    listItems.forEach(item => {
        // Obtém o texto completo do item da lista (ex: "Alice Silva")
        // e também o converte para minúsculas.
        const itemText = item.textContent.toLowerCase();

        // Requisito: Enquanto digita → a lista vai filtrando os itens que contêm o texto.
        // Usa o método obrigatório: .includes()
        const isMatch = itemText.includes(filterText);

        // Requisito: Usar .style.display = "none/block"
        if (isMatch) {
            // Se o texto digitado for encontrado no item (é uma correspondência), mostra o item
            item.style.display = 'block'; // ou 'flex', dependendo do estilo original do <li>
        } else {
            // Se o texto não for encontrado, esconde o item
            item.style.display = 'none';
        }
    });
}

// 4. Adiciona um event listener ao campo de busca.
// O evento 'input' dispara a função `filterList` a cada tecla digitada
// ou sempre que o valor do input mudar (incluindo colar).
searchInput.addEventListener('input', filterList);

// Nota: O evento 'keyup' também funcionaria, mas 'input' é mais abrangente.