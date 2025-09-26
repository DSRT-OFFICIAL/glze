// glze/src/core/math/Matrix2.js
export class Matrix2 {
    constructor(
        a = 1, b = 0,
        c = 0, d = 1
    ) {
        this.elements = [a, b, c, d];
    }

    set(a, b, c, d) {
        this.elements[0] = a;
        this.elements[1] = b;
        this.elements[2] = c;
        this.elements[3] = d;
        return this;
    }

    identity() {
        return this.set(1, 0, 0, 1);
    }

    multiply(m) {
        const [a1, b1, c1, d1] = this.elements;
        const [a2, b2, c2, d2] = m.elements;

        this.elements[0] = a1 * a2 + b1 * c2;
        this.elements[1] = a1 * b2 + b1 * d2;
        this.elements[2] = c1 * a2 + d1 * c2;
        this.elements[3] = c1 * b2 + d1 * d2;

        return this;
    }

    clone() {
        return new Matrix2(...this.elements);
    }
}
