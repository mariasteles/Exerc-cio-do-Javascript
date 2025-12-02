// script.js
// 1. Seleciona a imagem principal
const imagemPrincipal = document.getElementById("imagem-principal");

// 2. Seleciona TODAS as miniaturas (Requisito: usando querySelectorAll)
const miniaturas = document.querySelectorAll("img.mini");

// --- Lógica de Destaque Inicial ---
// Adiciona a classe 'ativa' na primeira miniatura ao carregar a página
if (miniaturas.length > 0) {
    miniaturas[0].classList.add('ativa');
}


// 3. Itera sobre cada miniatura para adicionar o ouvinte de evento (click)
miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", function() {
        
        // Pega o caminho da imagem grande que está armazenado no atributo 'data-full-src'
        const novoSrc = this.getAttribute("data-full-src");

        // 4. Troca o 'src' (source) da imagem principal pelo novo caminho (Requisito: usando .src)
        imagemPrincipal.src = novoSrc;
        
        // --- Lógica para Mudar o Destaque Ativo ---
        
        // 5. Remove a classe 'ativa' de TODAS as miniaturas
        miniaturas.forEach(m => m.classList.remove('ativa'));

        // 6. Adiciona a classe 'ativa' APENAS na miniatura que foi clicada ('this')
        this.classList.add('ativa');
    });
});