console.log(`Trabalahando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`);                       //adicionando um item na lista dinamicamente
console.log(`Destinos possíveis: `);
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);                           //removendo um item na lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1])                         //printa um único elemento da posição 1, sendo ele o segundo elemento
