import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./conta.js"

const cliente1 = new Cliente("Bruno", 55534512432);

const conta1 = new Conta(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const conta1 = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca1);
console.log(conta1);