"use strict";
/* 04. a. Os "prints" irão exibir o mesmo resultado para c1, c2, c3, por conta da atribuição de valores entre si. Dessa forma,
essas variáveis vão apontar para um mesmo objeto do tipo Conta e qualquer alteração em uma delas resultará na alteração das outras.

b. O objeto que era apontado por c1 é perdido e será excluído da memória, liberando espaço.

class Conta {
    numero: string;
    saldo: number;
    
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);
let c3: Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2,50);

console.log(c1.consultarSaldo()); -> 90
console.log(c2.consultarSaldo()); -> 90
console.log(c3.consultarSaldo()); -> 90

*/ 
