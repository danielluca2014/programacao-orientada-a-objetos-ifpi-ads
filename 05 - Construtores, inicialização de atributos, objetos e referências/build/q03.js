"use strict";
/* 03. A inicilização do atributo "volume" não foi feita através do método construtor definido. Nesse caso o valor
deve ser passado como um parâmetro do construtor. */
class Radio {
    constructor(volume) {
        this.volume = volume;
    }
}
let r = new Radio(10);
// r.volume = 10;
