import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Bruno", 55534512432);

const contaCorrente1 = new ContaCorrente(cliente1, 1001, 0);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca1 = new ContaPoupanca(cliente1, 1001, 50);
contaPoupanca1.sacar(10);

console.log(contaCorrente1);
console.log(contaPoupanca1);