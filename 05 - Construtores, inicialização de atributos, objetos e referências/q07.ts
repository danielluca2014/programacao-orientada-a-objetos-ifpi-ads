class Equipamento {
    ligado: boolean = false;

    liga(): void {
        if (this.ligado) {
            console.log("Equipamento já ligado!");
        } else {
            this.ligado = true;
        }
    }

    desliga(): void {
        if (!this.ligado) {
            console.log("Equipamento já desligado!");
        } else {
            this.ligado = false;
        }
    }

    inverte(): void {
        if (this.ligado) {   
            this.desliga();

        } else {
            this.liga();
        }
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}

let e1: Equipamento = new Equipamento();
console.log(e1.estaLigado());

e1.liga();
console.log(e1.estaLigado());

e1.inverte();
console.log(e1.estaLigado());
