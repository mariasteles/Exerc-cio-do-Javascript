const principal = document.getElementById("principal")
const thumbs = document.querySelectorAll(".thumb")
const pauseBtn = document.getElementById("pauseBtn")

let indiceAtual = 0
let intervalo = null
let pausado = false

// Função para trocar a imagem principal
function mostrarImagem(index) {
  const thumb = thumbs[index]
  principal.src = thumb.src
  indiceAtual = index
}

// Função auto para passar imagem
function autoTrocar() {
  intervalo = setInterval(() => {
    indiceAtual++
    if (indiceAtual >= thumbs.length) indiceAtual = 0
    mostrarImagem(indiceAtual)
  }, 3000) // troca a cada 3 segundos
}

// Pausar / retomar auto-troca
function pausarOuRetomar() {
  if (!pausado) {
    clearInterval(intervalo)
    pauseBtn.textContent = "Retomar Auto-Troca"
    pausado = true
  } else {
    autoTrocar()
    pauseBtn.textContent = "Pausar Auto-Troca"
    pausado = false
  }
}

// Thumbnails clicáveis
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    mostrarImagem(index)
  })
})

// Inicia auto-troca ao carregar
autoTrocar()

pauseBtn.addEventListener("click", pausarOuRetomar)
