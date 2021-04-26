console.log(`Trabalahando com Condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const acompanhada = false;
const temPassagemComprada = true;

console.log(`Destinos possíveis: `);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade!`);
//     listaDeDestinos.splice(1, 1);                           //removendo um item na lista
// } else if (acompanhada) {
//     listaDeDestinos.splice(1, 1);                           //removendo um item na lista
//     console.log("Comprador está acompanhado")
// } else {
//     console.log(`Comprador não é maior de idade e não posso vender.`);
// }


if (idadeComprador >= 18 || acompanhada == true) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1);                           //removendo um item na lista
} else {
    console.log(`Comprador não é maior de idade e não posso vender.`);
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar!");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);                //maior que
// console.log(idadeComprador >= 18);               //maior ou igual que
// console.log(idadeComprador < 18);                //menor que
// console.log(idadeComprador <= 18);               //menor ou igual que
// console.log(idadeComprador == 18);               //igual que (um único sinal de igual significa atribuição)