class Retangulo {
    l1: number;
    l2: number;

    constructor(l1: number, l2: number) {
        this.l1 = l1;
	    this.l2 = l2;
    }

    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2);
    }
}

let retangulo : Retangulo;
retangulo = new Retangulo(10, 20);

console.log("Área =", retangulo.calcularArea());
console.log("Perímetro =", retangulo.calcularPerimetro());
