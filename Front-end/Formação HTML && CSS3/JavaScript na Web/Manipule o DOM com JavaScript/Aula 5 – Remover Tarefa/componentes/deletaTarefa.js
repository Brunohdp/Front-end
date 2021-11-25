const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')

  // botaoDeleta.classList.add('delete-button')
  botaoDeleta.innerHTML = "Deletar"

  botaoDeleta.addEventListener('click', deletarTarefa)

  return botaoDeleta
}

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target

  const tarefaDeletada = botaoDeleta.parentElement

  tarefaDeletada.remove()
}

export default BotaoDeleta