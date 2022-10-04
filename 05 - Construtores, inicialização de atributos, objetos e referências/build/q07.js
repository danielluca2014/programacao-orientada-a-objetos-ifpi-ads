"use strict";
class Equipamento {
    constructor() {
        this.ligado = false;
    }
    liga() {
        if (this.ligado) {
            console.log("Equipamento já ligado!");
        }
        else {
            this.ligado = true;
        }
    }
    desliga() {
        if (!this.ligado) {
            console.log("Equipamento já desligado!");
        }
        else {
            this.ligado = false;
        }
    }
    inverte() {
        if (this.ligado) {
            this.desliga();
        }
        else {
            this.liga();
        }
    }
    estaLigado() {
        return this.ligado;
    }
}
let e1 = new Equipamento();
console.log(e1.estaLigado());
e1.liga();
console.log(e1.estaLigado());
e1.inverte();
console.log(e1.estaLigado());
