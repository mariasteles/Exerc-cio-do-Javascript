// VARIÁVEIS DE ESTADO E REFERÊNCIAS DO DOM
let remainingPoints = 10;
const MAX_POINTS = 10;

// Requisito 3: getElementById
const remainingPointsEl = document.getElementById('remainingPoints');
const confirmButton = document.getElementById('confirmButton');
const resultArea = document.getElementById('resultArea');

// Requisito 3: querySelectorAll
const increaseButtons = document.querySelectorAll('.btn-increase');
const decreaseButtons = document.querySelectorAll('.btn-decrease');

// Objeto para rastrear os valores atuais dos atributos (opcional, mas bom para organização)
const attributes = {
    strength: 0,
    agility: 0,
    intelligence: 0
};

// FUNÇÃO PARA ATUALIZAR O DOM
function updateUI() {
    // Requisito 3: Atualização de texto (Pontos Restantes)
    remainingPointsEl.textContent = remainingPoints;

    // Requisito 3: Feedback visual (Opcional)
    if (remainingPoints === 0) {
        // Requisito 3: classList
        remainingPointsEl.classList.add('no-points');
    } else {
        remainingPointsEl.classList.remove('no-points');
    }
}

// LÓGICA DE INCREMENTO (Requisito 2.1)
function handleIncrease(event) {
    // Leitura do valor da tela (usando dataset para pegar o nome do atributo)
    const attributeName = event.target.dataset.attribute;
    
    // Se não houver pontos sobrando, nada deve aumentar (Requisito 2.3)
    if (remainingPoints > 0) {
        // 1. Lógica: Aumenta o atributo e diminui os pontos
        attributes[attributeName]++;
        remainingPoints--;
        
        // 2. DOM: Atualiza o valor do atributo na tela
        // Exemplo: 'strengthValue'
        const attributeValueEl = document.getElementById(`${attributeName}Value`);
        attributeValueEl.textContent = attributes[attributeName];

        // 3. DOM: Atualiza o contador de pontos
        updateUI();
        
        // 4. Limpa a área de resultado se houver alguma mensagem anterior
        resultArea.textContent = ''; 
    }
}

// LÓGICA DE DECREMENTO (Requisito 2.2)
function handleDecrease(event) {
    const attributeName = event.target.dataset.attribute;
    
    // Não pode ficar abaixo de 0 (Requisito 2.3)
    if (attributes[attributeName] > 0) {
        // 1. Lógica: Diminui o atributo e aumenta os pontos
        attributes[attributeName]--;
        remainingPoints++;
        
        // 2. DOM: Atualiza o valor do atributo na tela
        const attributeValueEl = document.getElementById(`${attributeName}Value`);
        attributeValueEl.textContent = attributes[attributeName];

        // 3. DOM: Atualiza o contador de pontos
        updateUI();
        
        // 4. Limpa a área de resultado
        resultArea.textContent = '';
    }
}

// LÓGICA DE CONFIRMAÇÃO (Requisito 4)
function handleConfirm() {
    // Requisito 4: Se ainda restarem pontos
    if (remainingPoints > 0) {
        // Exibir uma mensagem dizendo que faltam pontos (DOM)
        resultArea.innerHTML = `<p class="no-points">🛑 **ERRO**: Você ainda tem **${remainingPoints}** pontos para distribuir!</p>`;
    } else {
        // Requisito 4: Se tudo estiver distribuído: Mostrar um resumo (DOM)
        
        // Cria a mensagem de resumo
        const summary = `
            <p>✅ **Distribuição Confirmada!**</p>
            <ul>
                <li>Força: ${attributes.strength}</li>
                <li>Agilidade: ${attributes.agility}</li>
                <li>Inteligência: ${attributes.intelligence}</li>
            </ul>
        `;
        
        // Preenche a <div> de resultado (DOM)
        resultArea.innerHTML = summary;
    }
}

// Requisito 3: addEventListener para os botões de incremento/decremento
// Isso é mais eficiente do que adicionar um listener a cada botão individualmente.
increaseButtons.forEach(button => {
    button.addEventListener('click', handleIncrease);
});

decreaseButtons.forEach(button => {
    button.addEventListener('click', handleDecrease);
});

// Requisito 3: addEventListener para o botão de confirmação
confirmButton.addEventListener('click', handleConfirm);

// Inicializa a interface
updateUI();