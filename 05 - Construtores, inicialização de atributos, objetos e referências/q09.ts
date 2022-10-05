class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(atacado: Jogador): void {
        if(atacado.estaVivo()) {
            atacado.pontosAtuais = atacado.pontosAtuais - this.calcularAtaque();
        } else {
            console.log("Não é possível atacar!");
        }
    }

    estaVivo(): boolean {
        if(this.pontosAtuais > 0) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        return `\nForça: ${this.forca} \nNível: ${this.nivel} \nPontos: ${this.pontosAtuais}`;
    }
}

let jogador1: Jogador = new Jogador(10, 5, 200);
let jogador2: Jogador = new Jogador(20, 10, 200);

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

console.log(jogador1.toString());
console.log(jogador2.toString());