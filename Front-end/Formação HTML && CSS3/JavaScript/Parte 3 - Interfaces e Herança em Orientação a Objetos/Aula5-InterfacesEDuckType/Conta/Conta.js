import { Cliente } from "../Cliente.js";

export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instaciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata")
        }
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

    //método abstrato
    sacar(valor) {
        throw new Error ("O método sacar da conta é Abstrato")
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