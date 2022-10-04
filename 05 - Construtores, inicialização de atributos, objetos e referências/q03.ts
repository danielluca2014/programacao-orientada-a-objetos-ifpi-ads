/* 03. A inicilização do atributo "volume" não foi feita através do método construtor definido. Nesse caso o valor 
deve ser passado como um parâmetro do construtor. */

class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio(10);
// r.volume = 10;