let tempo = 0
let intervalo = null
let rodando = false   // verifica se o contador está ativo

const tempoTela = document.getElementById("tempo")
const startPauseBtn = document.getElementById("startPauseBtn")
const resetBtn = document.getElementById("resetBtn")

// Função START / PAUSE
function startPause() {
  if (!rodando) {
    // iniciar
    intervalo = setInterval(() => {
      tempo++
      tempoTela.textContent = tempo
    }, 1000)

    rodando = true
    startPauseBtn.textContent = "Pause"
  } else {
    // pausar
    clearInterval(intervalo)
    rodando = false
    startPauseBtn.textContent = "Start"
  }
}

// Função RESET
function resetar() {
  clearInterval(intervalo)
  tempo = 0
  rodando = false
  tempoTela.textContent = tempo
  startPauseBtn.textContent = "Start"
}

// Eventos dos botões
startPauseBtn.addEventListener("click", startPause)
resetBtn.addEventListener("click", resetar)