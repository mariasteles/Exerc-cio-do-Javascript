const form = document.getElementById("form")
const lista = document.getElementById("lista")

let alunos = []   // array de objetos {nome, idade}

// Função para renderizar a lista na tela
function renderizarLista() {
  lista.innerHTML = ""

  alunos.forEach((aluno, index) => {
    const li = document.createElement("li")
    li.innerHTML = `
      ${aluno.nome} — ${aluno.idade} anos
      <button onclick="deletar(${index})">Excluir</button>
    `
    lista.appendChild(li)
  })
}

// Função para adicionar um aluno
form.addEventListener("submit", function (event) {
  event.preventDefault()

  const nome = document.getElementById("nome").value
  const idade = document.getElementById("idade").value

  alunos.push({ nome, idade })  // adiciona objeto no array

  form.reset()
  renderizarLista()             // atualiza lista
})

// Função para excluir aluno pelo índice
function deletar(indice) {
  alunos = alunos.filter((_, i) => i !== indice)
  renderizarLista()
}