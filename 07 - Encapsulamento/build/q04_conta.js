"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(numero, saldo) {
        this._numero = numero;
        this._saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
            return true;
        }
        else {
            return false;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
}
exports.default = Conta;
