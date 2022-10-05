"use strict";
class Jogador {
    constructor(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque() {
        return this.forca * this.nivel;
    }
    atacar(atacado) {
        if (atacado.estaVivo()) {
            atacado.pontosAtuais = atacado.pontosAtuais - this.calcularAtaque();
        }
        else {
            console.log("Não é possível atacar!");
        }
    }
    estaVivo() {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        return `\nForça: ${this.forca} \nNível: ${this.nivel} \nPontos: ${this.pontosAtuais}`;
    }
}
let jogador1 = new Jogador(10, 5, 200);
let jogador2 = new Jogador(20, 10, 200);
jogador1.atacar(jogador2);
jogador2.atacar(jogador1);
console.log(jogador1.toString());
console.log(jogador2.toString());
