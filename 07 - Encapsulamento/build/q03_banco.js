"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor() {
        this._contas = [];
    }
    inserir(c) {
        this._contas.push(c);
    }
    consultar(numero) {
        let contaProcurada;
        for (let c of this._contas) {
            if (c.numero === numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    }
    consultarIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(c) {
        let indice = this.consultarIndice(c.numero);
        if (indice != -1) {
            this._contas[indice] = c;
        }
    }
    excluir(numero) {
        let indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
}
exports.default = Banco;
