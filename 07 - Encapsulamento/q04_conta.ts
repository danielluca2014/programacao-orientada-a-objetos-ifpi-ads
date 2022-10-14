export default class Conta {
    private _numero: string;
    private _saldo: number;
    
    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): boolean {
        if (valor <= this._saldo) {
            this._saldo = this._saldo - valor;
            return true;

        } else {
            return false;
        }
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    consultarSaldo(): number {
        return this._saldo;
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

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }
}