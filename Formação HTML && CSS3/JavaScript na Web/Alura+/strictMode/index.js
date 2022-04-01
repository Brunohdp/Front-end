"use strict"

const ola = () => {
  let nome = "Bruno";
  // nome = "Bruno"; ERRADO
  console.log(`Ola, ${nome}!`);
}

const botaoClicado = document.querySelector('[data-botao]');
botaoClicado.addEventListener('click', ola);

class Aluno {
  get nota() {
    return 6;
  }
}

let aluno = new Aluno();
// aluno.nota = 10; Não permite

const soma = function (a, b, c) {
  // return a + a + c;  errado, duplicatas
  return a + b + c;
}

console.log(soma(1, 3, 2))