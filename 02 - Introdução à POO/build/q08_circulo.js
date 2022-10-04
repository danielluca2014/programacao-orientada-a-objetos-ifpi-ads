"use strict";
class Circulo {
    constructor(raio) {
        this.raio = 0;
        this.raio = raio;
    }
    calcularArea() {
        return 3.14 * Math.pow(this.raio, 2);
    }
    calcularPerimetro() {
        return 2 * 3.14 * this.raio;
    }
}
let circulo;
circulo = new Circulo(5);
console.log("Área =", circulo.calcularArea());
console.log("Perímetro =", circulo.calcularPerimetro());
