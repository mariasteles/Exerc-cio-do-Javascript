const quizEl = document.getElementById("quiz")
const reiniciarBtn = document.getElementById("reiniciar")

let pontuacao = 0
let indiceAtual = 0

// ARRAY DE PERGUNTAS
const perguntas = [
  {
    pergunta: "1. Qual é a capital do Brasil?",
    alternativas: ["São Paulo", "Brasília", "Rio de Janeiro"],
    correta: 1
  },
  {
    pergunta: "2. Quanto é 5 + 5?",
    alternativas: ["8", "10", "12"],
    correta: 1
  },
  {
    pergunta: "3. Qual planeta é conhecido como Planeta Vermelho?",
    alternativas: ["Júpiter", "Marte", "Vênus"],
    correta: 1
  },
  {
    pergunta: "4. Quem pintou a Mona Lisa?",
    alternativas: ["Van Gogh", "Da Vinci", "Picasso"],
    correta: 1
  },
  {
    pergunta: "5. Qual o maior mamífero do mundo?",
    alternativas: ["Elefante", "Baleia Azul", "Girafa"],
    correta: 1
  }
]

// Mostrar a pergunta atual
function mostrarPergunta() {
  const atual = perguntas[indiceAtual]

  quizEl.innerHTML = `
    <div class="pergunta">
      <h3>${atual.pergunta}</h3>
      ${atual.alternativas.map((alt, i) =>
        `<button onclick="responder(${i})">${alt}</button>`
      ).join("")}
    </div>
  `
}

// Registrar resposta
function responder(indiceResposta) {
  const atual = perguntas[indiceAtual]

  if (indiceResposta === atual.correta) {
    pontuacao++
  }

  indiceAtual++

  // Verificar se o quiz acabou
  if (indiceAtual === perguntas.length) {
    mostrarResultado()
  } else {
    mostrarPergunta()
  }
}

// Mostrar nota final e feedback
function mostrarResultado() {
  let feedback = ""

  if (pontuacao <= 2) feedback = "Desempenho ruim 😓"
  else if (pontuacao <= 4) feedback = "Bom! 😊"
  else feedback = "Excelente! 🎉"

  quizEl.innerHTML = `
    <h2>Você acertou ${pontuacao} de 5</h2>
    <h3>${feedback}</h3>
  `

  reiniciarBtn.style.display = "block"
}

// Reiniciar o quiz
reiniciarBtn.addEventListener("click", () => {
  pontuacao = 0
  indiceAtual = 0
  reiniciarBtn.style.display = "none"
  mostrarPergunta()
})

// Inicia o quiz
mostrarPergunta()