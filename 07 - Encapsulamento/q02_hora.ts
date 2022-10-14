class Hora {
    constructor(private _hora: number, private _minutos: number, private _segundos: number) {}

    public mostrarHora(): number {
        return this._hora;
    }

    public mostrarMinutos(): number {
        return this._minutos;
    }

    public mostrarSegundos(): number {
        return this._segundos;
    }

    public mostrarHoras(): string {
        return `\n${this._hora} hora(s): ${this._minutos} minuto(s): ${this._segundos} segundo(s)`;
    }
}

let h: Hora = new Hora(5, 30, 10);
console.log(h.mostrarHora());
console.log(h.mostrarMinutos());
console.log(h.mostrarSegundos());
console.log(h.mostrarHoras());