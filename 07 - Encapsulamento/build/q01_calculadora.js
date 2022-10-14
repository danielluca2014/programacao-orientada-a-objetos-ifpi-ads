"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
    subtracao() {
        return this._operando1 - this._operando2;
    }
}
let c = new Calculadora(3, 2);
console.log(c.soma());
console.log(c.subtracao());
/*
c._operando1 = 5;
c._operando2 = 10;

As propriedades '_operando1' e '_operando2' são privadas e somente acessíveis na classe 'Calculadora'.
*/ 
