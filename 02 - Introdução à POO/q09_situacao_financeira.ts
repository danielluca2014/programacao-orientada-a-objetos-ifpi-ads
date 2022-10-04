class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let conta : SituacaoFinanceira;
conta = new SituacaoFinanceira(500, 200);

console.log("Saldo =", conta.saldo());
