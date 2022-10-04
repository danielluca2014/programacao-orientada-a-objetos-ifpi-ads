"use strict";
class Saudacao {
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        console.log(`${this.texto} ${this.destinatario}`);
    }
}
let saudacao = new Saudacao("Boa noite", "Daniel");
saudacao.obterSaudacao();
