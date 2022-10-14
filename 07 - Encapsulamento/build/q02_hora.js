"use strict";
class Hora {
    constructor(_hora, _minutos, _segundos) {
        this._hora = _hora;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }
    mostrarHora() {
        return this._hora;
    }
    mostrarMinutos() {
        return this._minutos;
    }
    mostrarSegundos() {
        return this._segundos;
    }
    mostrarHoras() {
        return `\n${this._hora} hora(s): ${this._minutos} minuto(s): ${this._segundos} segundo(s)`;
    }
}
let h = new Hora(5, 30, 10);
console.log(h.mostrarHora());
console.log(h.mostrarMinutos());
console.log(h.mostrarSegundos());
console.log(h.mostrarHoras());
