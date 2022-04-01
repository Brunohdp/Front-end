class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    //! #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields  !//
    _saldo = 0;

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
}

const cliente1 = new Cliente();
cliente1.nome = "Bruno";
cliente1.cpf = 55534512432;

const cliente2 = new Cliente();
cliente2.nome = "Cleiton";
cliente2.cpf = 99123752109;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);