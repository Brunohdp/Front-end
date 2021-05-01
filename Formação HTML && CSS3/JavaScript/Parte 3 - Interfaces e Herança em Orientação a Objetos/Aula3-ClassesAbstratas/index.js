import { Cliente } from "./Cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Bruno", 55534512432);

const contaCorrente1 = new ContaCorrente(cliente1, 1001, 0);
const contaPoupanca1 = new ContaPoupanca(cliente1, 1001, 50);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);


console.log(contaSalario);
