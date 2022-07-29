const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => { 
  elemento.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
  })})
  
  function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    peca.value = parseInt(peca.value) - 1;
  }
}
