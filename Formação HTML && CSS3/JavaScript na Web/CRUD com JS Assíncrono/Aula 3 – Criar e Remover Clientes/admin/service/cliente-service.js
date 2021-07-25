const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
  .then(responsta => {
    return responsta.json()
  })
}

export const clienteService = {
  listaClientes
}