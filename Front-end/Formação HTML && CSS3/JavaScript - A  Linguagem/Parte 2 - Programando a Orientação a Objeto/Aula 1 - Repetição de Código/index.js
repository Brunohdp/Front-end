class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Bruno";
cliente1.cpf = 55534512432;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Cleiton";
cliente2.cpf = 99123752109;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = "Alice";
cliente3.cpf = 99123752109;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1, cliente2, cliente3)