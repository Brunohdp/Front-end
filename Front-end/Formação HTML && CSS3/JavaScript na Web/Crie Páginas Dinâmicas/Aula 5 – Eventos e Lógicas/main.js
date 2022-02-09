function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  if (elemento === null) {
    console.log("Elemento não encontrado")
  }
  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //tamplate string

  tecla.onclick = function(){tocaSom(idAudio)};

  tecla.onkeydown = function(evento){
    console.log(evento)
    if (evento.code === 'Enter' || evento.code === 'Space'){
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function(){tecla.classList.remove('ativa');}
}
