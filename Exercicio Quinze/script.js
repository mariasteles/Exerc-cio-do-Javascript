// 1. Mapeamento das respostas corretas (opcional, mas bom para validação)
// Neste exemplo, usaremos o atributo data-correct="true" no HTML.

// 2. Referência ao botão e à área de resultado
const finishButton = document.getElementById('finishButton');
const resultArea = document.getElementById('resultArea');

/**
 * Função principal para validar e pontuar o quiz.
 */
function checkAnswers() {
    // 3. Uso obrigatório: querySelectorAll("input:checked")
    // Isso retorna uma NodeList de TODOS os radio buttons que o usuário marcou.
    const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');

    let correctCount = 0; // Uso obrigatório: contagem de acertos
    const totalQuestions = 3;

    // 4. Itera sobre as respostas selecionadas para contagem
    selectedAnswers.forEach(answer => {
        // Verifica se o input selecionado possui o atributo 'data-correct' com o valor 'true'
        if (answer.dataset.correct === 'true') {
            correctCount++;
        }
    });

    // 5. Calcula o resultado final
    const incorrectCount = totalQuestions - correctCount;

    // 6. Uso obrigatório: mostrar resultado no DOM
    let resultHTML = '';

    // Condicional para feedback visual
    if (correctCount === totalQuestions) {
        resultHTML = `<p class="correct">🎉 **Parabéns!** Você acertou todas as ${totalQuestions} perguntas!</p>`;
    } else if (correctCount > 0) {
        resultHTML = `<p class="correct">Você acertou ${correctCount} de ${totalQuestions} perguntas.</p>
                      <p class="incorrect">Você errou ${incorrectCount} pergunta(s). Continue praticando!</p>`;
    } else {
        resultHTML = `<p class="incorrect">😔 Você errou todas as perguntas. Tente novamente!</p>`;
    }
    
    // Atualiza a área de resultado com o HTML gerado
    resultArea.innerHTML = resultHTML;
}

// 7. Adiciona o Event Listener ao botão "Finalizar"
finishButton.addEventListener('click', checkAnswers);