import Conta from "./q04_conta";

export default class Banco {
    private _contas: Conta[] = [];

    public inserir(c: Conta): void {
        this._contas.push(c);
    }

    public consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for(let c of this._contas) {
            if(c.numero === numero) {
                contaProcurada = c;
                break;
            }
        }

        return contaProcurada;
    }

    private consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        
        return indice;
    }

    public alterar(c: Conta): void {
        let indice = this.consultarIndice(c.numero);
        
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }

    public excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    public depositar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
}