"use strict";
class SituacaoFinanceira {
    constructor(valorCreditos, valorDebitos) {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let conta;
conta = new SituacaoFinanceira(500, 200);
console.log("Saldo =", conta.saldo());
