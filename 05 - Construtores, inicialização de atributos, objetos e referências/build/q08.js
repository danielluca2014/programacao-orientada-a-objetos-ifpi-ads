"use strict";
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;
        }
        else {
            return false;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
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
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 200);
console.log(c1.sacar(50));
console.log(c1.consultarSaldo());
console.log(c1.transferir(c2, 60));
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
