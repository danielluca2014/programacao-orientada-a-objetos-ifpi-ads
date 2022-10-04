class Circulo {
    raio: number = 0; 

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return 3.14 * Math.pow(this.raio, 2);
    }

    calcularPerimetro(): number {
        return 2 * 3.14 * this.raio;
    }
}

let circulo : Circulo;
circulo = new Circulo(5);

console.log("Área =", circulo.calcularArea());
console.log("Perímetro =", circulo.calcularPerimetro());
