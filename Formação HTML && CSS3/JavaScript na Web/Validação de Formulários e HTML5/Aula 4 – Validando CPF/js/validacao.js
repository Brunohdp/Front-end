export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
  }
}

const mensagensDeErro = {
  nome: {
    valueMissing: 'O campo "nome" não pode estar vazio.'
  },
  email: {
    valueMissing: 'O campo "email" não pode estar vazio.',
    typeMismatch: 'O e-mail digitado não é válido.'
  },
  senha: {
    valueMissing: 'O campo "senha" não pode estar vazio.',
    patternMismatch: 'A senha deve conter entre 6 à 12 caracteres, uma letra maiúscula, um número e não deve conter símbolos.'
  },
  dataNascimento: {
    valueMissing: 'O campo "data de Nascimento" não pode estar vazio.',
    customError: 'Você deve ser maior de 18 anos para se cadastrar.'
  },
  cpf: {
    valueMissing: 'O campo CPF não pode estar vazio.',
    customError: 'O CPF digitado não é valido.'
  }
}

const validadores = {
  dataNascimento: input => validaDataNascimento(input),
  cpf: input => validaCPF(input)
}

const tiposDeErros = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = ''
  tiposDeErros.forEach(erro => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro]
    }
  })

  return mensagem
}

function validaDataNascimento(input) {
  const dataRecebida = new Date(input.value)

  let mensagem = ''

  if (!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar'
  }

  input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

  return dataMais18 <= dataAtual
}

function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, '')
  let mensagem = ''

  if (!checakCPFRepetido(cpfFormatado)) {
    mensagem = 'O CPF digitado não é valido.'
  }

  input.setCustomValidity(mensagem)
}

function checakCPFRepetido(cpf) {
  const valoresRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  let cpfValido = true

  valoresRepetidos.forEach(valor => {
    if (valor == cpf) {
      cpfValido = false
    }
  })

  return cpfValido
}

function checaEstruturaCPF(cpf) {
  const multiplicador = 10

  return checaDigitoVerificador(cpf, multiplicador)
}

function confirmaDigito(soma) {
  return 11 - (soma / 11)
}

// 123.456.789-01

// let soma = (10 * 1) + (9 * 2) + (8 * 3) + (7 * 4) + (6 * 5) + (5 * 6) + (4 * 7) + (10 *1)

// let digitoVerificador = 11 - (soma / 11)