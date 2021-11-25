export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }


    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this.cliente;
    }
    get agencia() {
        return this.agencia;
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