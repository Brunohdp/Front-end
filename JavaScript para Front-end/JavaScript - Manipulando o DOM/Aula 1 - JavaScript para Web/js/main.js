const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", () => {
  console.log("Robotron was clicked")
});

function dizOi(nome) {
  console.log("Oi, " + nome);
  console.log("Bem-vindo ao Robotron 2000!");
}

dizOi("Bruno");
