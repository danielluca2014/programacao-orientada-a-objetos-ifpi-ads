"use strict";
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferencia(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
class Banco {
    constructor() {
        this.contas = [];
    }
    inserir(c) {
        if (!this.containsAccount(c.numero)) {
            this.contas.push(c);
        }
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this.contas) {
            if (c.numero === numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    containsAccount(numero) {
        for (let c of this.contas) {
            if (numero === c.numero) {
                return true;
            }
        }
        return false;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
}
let b1 = new Banco();
let c1 = new Conta("1", 500);
let c2 = new Conta("2", 1000);
let c3 = new Conta("1", 1500);
b1.inserir(c1);
b1.inserir(c2);
console.log(b1.consultar("1"));
console.log(b1.consultar("2"));
b1.inserir(c3);
console.log(b1.consultar("3"));
