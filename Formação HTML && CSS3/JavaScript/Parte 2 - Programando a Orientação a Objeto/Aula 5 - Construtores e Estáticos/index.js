import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Bruno";
cliente1.cpf = 55534512432;

const cliente2 = new Cliente();
cliente2.nome = "Cleitin";
cliente2.cpf = 99123752109;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
conta1.transferir(200, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);