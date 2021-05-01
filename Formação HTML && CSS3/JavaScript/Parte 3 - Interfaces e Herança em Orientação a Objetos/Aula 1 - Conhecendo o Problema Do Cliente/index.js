import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Bruno", 55534512432);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca1);
console.log(contaCorrente1);