// Inicializa o modo escuro como verdadeiro
let darkMode = true;

// Obtém o botão de alternância
const buttonToogle = document.getElementById("toogle-mode");

// Adiciona um ouvinte de evento de clique ao botão
buttonToogle.addEventListener("click", (event) => {
  // Alterna a classe 'light' no elemento raiz do documento
  document.documentElement.classList.toggle("light");

  // Define o modo com base no valor atual de darkMode
  const mode = darkMode ? 'light' : "dark";

  // Atualiza o texto do botão para refletir o modo atual
  event.currentTarget.querySelector("span").textContent = `${mode} mode ativado!`;

  // Inverte o valor de darkMode
  darkMode = !darkMode;
});

