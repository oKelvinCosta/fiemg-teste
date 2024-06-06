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