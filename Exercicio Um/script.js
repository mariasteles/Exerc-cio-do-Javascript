// Seleciona elementos
const input = document.getElementById("inputTarefa");
const btnAdd = document.getElementById("btnAdd");
const lista = document.getElementById("lista");

// Carrega tarefas salvas no localStorage
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// --------------------
// Função para salvar
// --------------------
function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// --------------------
// Renderizar a lista
// --------------------
function renderizar() {
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    li.textContent = tarefa;

    // Botão remover
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.onclick = () => {
      tarefas.splice(index, 1);
      salvar();
      renderizar();
    };

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// --------------------
// Adicionar tarefa
// --------------------
btnAdd.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  tarefas.push(input.value.trim());
  input.value = "";

  salvar();
  renderizar();
});

// Renderiza ao carregar a página
renderizar();