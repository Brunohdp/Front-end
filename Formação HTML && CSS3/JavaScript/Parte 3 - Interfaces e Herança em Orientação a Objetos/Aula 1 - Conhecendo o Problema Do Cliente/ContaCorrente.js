import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields  //


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get agencia(){
        return this._agencia;
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas++;
    }


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        } else {
            console.log("[ERROR] Valor do saque superior ao Saldo!")
        }
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}