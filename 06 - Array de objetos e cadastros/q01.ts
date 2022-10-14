class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {
    contas: Conta[] = [];

    inserir(c: Conta): void {
        this.contas.push(c);
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for(let c of this.contas) {
            if(c.numero === numero) {
                contaProcurada = c;
                break;
            }
        }

        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        
        return indice;
    }

    alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);
        
        if (indice != -1) {
            this.contas[indice] = c;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }

    contemConta(numero: string) {
        for (let c of this.contas) { 
            if (numero === c.numero) {
                return true;
            }
        }
        return false;
    }
}
