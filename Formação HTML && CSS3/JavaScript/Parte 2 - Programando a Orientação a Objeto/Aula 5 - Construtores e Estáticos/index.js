import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Bruno", 55534512432);
const cliente2 = new Cliente("Cleitin", 99123752109);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);