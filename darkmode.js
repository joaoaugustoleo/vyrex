const toggle = document.getElementById("toggle-dark");
const body = document.body;
const logo = document.getElementById("logo");

function updateLogo() {
  if (body.classList.contains("dark-mode")) {
    logo.src = "vyrex_logo_dark.png"; // logo para modo escuro
  } else {
    logo.src = "vyrex_logo.png"; // logo para modo claro
  }
}

// Verifica se já existe preferência salva no localStorage
if (localStorage.getItem("dark-mode") === "true") {
  body.classList.add("dark-mode");
  toggle.checked = true;
}
updateLogo();
// Alterna modo claro/escuro ao mudar o checkbox
toggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  // Salva preferência no localStorage
  localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
  updateLogo();
});
