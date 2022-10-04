"use strict";
class Triangulo {
    constructor(l1, l2, l3) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }
    ehTriangulo() {
        if (Math.abs(this.l2 - this.l3) < this.l1 && this.l1 < (this.l2 + this.l3)) {
            return true;
        }
        return false;
    }
    ehEquilatero() {
        if (this.ehTriangulo()) {
            if (this.l1 === this.l2 && this.l2 === this.l3) {
                return true;
            }
        }
        return false;
    }
    ehEscaleno() {
        if (this.ehTriangulo()) {
            if (this.l1 !== this.l2 && this.l1 !== this.l3 && this.l2 !== this.l3) {
                return true;
            }
        }
        return false;
    }
    ehIsosceles() {
        if (this.ehTriangulo()) {
            if (!(this.ehEquilatero()) && !(this.ehEscaleno())) {
                return true;
            }
        }
        return false;
    }
}
let t1 = new Triangulo(1, 5, 2);
console.log(t1.ehIsosceles());
console.log(t1.ehEscaleno());
console.log(t1.ehEquilatero());
