
// Aguardar o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  

// Funcionalidade Campo Password Modal ----------------------------------------------------

// Seleciona o Ícone da senha pelo ID
const togglePassword = document.querySelector("#togglePassword");
// Seleciona o Input de Senha pelo ID
const password = document.querySelector("#InputPassword");

// Ao clicar no ícone do olho
togglePassword.addEventListener("click", () => {
  // Troca o tipo de atributo do input ao clicar no ícone do olho
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  // Troca o ícone do olho ao clicar no ícone do olho
  password.setAttribute("type", type);

  // Alterna as classes do ícone entre bi-eye e bi-eye-slash para refletir a visibilidade da senha
  if (togglePassword.classList.contains("bi-eye")) {
    togglePassword.classList.remove("bi-eye");
    togglePassword.classList.add("bi-eye-slash");
  } else {
    togglePassword.classList.add("bi-eye");
    togglePassword.classList.remove("bi-eye-slash");
  }
});


// Funcionalidade Video ----------------------------------------------------

  // Seleciona os itens
  var iframe = document.querySelector("#sobreVideo");
  var vimeo = document.querySelector("#vimeo");
  var playBtn = document.querySelector("#playBtn");
  var imgVideo = document.querySelector("#imgVideo");

  // Cria uma instância do player
  var player = new Vimeo.Player(iframe);

  // Função para dar play no vídeo
  function playVideo() {
    player
      .play()
      .then(function () {
        // O vídeo está tocando

        // Remove a imagem e botão e insere o video do vimeo
        playBtn.classList.add("d-none");
        imgVideo.classList.add("d-none");
        vimeo.classList.remove("d-none");

        console.log("Vídeo está tocando");
      })
      .catch(function (error) {
        // Um erro ocorreu
        console.error("Erro ao tentar tocar o vídeo:", error);
      });
  }

  // Adiciona um evento de clique ao botão de play
  var playButton = document.querySelector("#playBtn");
  if (playButton) {
    playButton.addEventListener("click", playVideo);
  }
});