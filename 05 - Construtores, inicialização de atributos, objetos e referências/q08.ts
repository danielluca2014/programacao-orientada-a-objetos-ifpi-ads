class Conta {
    numero: string;
    saldo: number;
    
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            return true;

        } else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        this.sacar(valor);

        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 200);

console.log(c1.sacar(50));
console.log(c1.consultarSaldo());

console.log(c1.transferir(c2, 60));

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());