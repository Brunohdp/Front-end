import { Cliente } from "./Cliente.js";

export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get agencia() {
        return this._agencia;
    }
    get cliente() {
        return this._cliente;
    }
    get saldo() {
        return this._saldo;
    }


    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
        
    }
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } 
        return 0;
    }
    depositar(valor) {
        this._saldo += valor;
    }
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}