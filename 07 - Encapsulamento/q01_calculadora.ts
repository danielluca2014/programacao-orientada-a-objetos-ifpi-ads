class Calculadora {
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public soma(): number {
        return this._operando1 + this._operando2;
    }

    public subtracao(): number {
        return this._operando1 - this._operando2;
    }
}

let c: Calculadora = new Calculadora(3, 2);
console.log(c.soma());
console.log(c.subtracao());

/*
c._operando1 = 5; 
c._operando2 = 10;

As propriedades '_operando1' e '_operando2' são privadas e somente acessíveis na classe 'Calculadora'.
*/ 