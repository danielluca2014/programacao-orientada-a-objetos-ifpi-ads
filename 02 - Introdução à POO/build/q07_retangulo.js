"use strict";
class Retangulo {
    constructor(l1, l2) {
        this.l1 = l1;
        this.l2 = l2;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
    calcularPerimetro() {
        return (this.l1 * 2) + (this.l2 * 2);
    }
}
let retangulo;
retangulo = new Retangulo(10, 20);
console.log("Área =", retangulo.calcularArea());
console.log("Perímetro =", retangulo.calcularPerimetro());
