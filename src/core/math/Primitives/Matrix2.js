// glze/src/core/math/Matrix2.js
export class Matrix2 {
    constructor() {
        this.elements = [1,0,0,1];
    }

    set(n11, n12, n21, n22) {
        const te = this.elements;
        te[0] = n11; te[1] = n12;
        te[2] = n21; te[3] = n22;
        return this;
    }

    identity() {
        return this.set(1,0,0,1);
    }

    copy(m) {
        const te = this.elements;
        const me = m.elements;
        te[0] = me[0]; te[1] = me[1];
        te[2] = me[2]; te[3] = me[3];
        return this;
    }

    multiply(m) {
        const ae = this.elements;
        const be = m.elements;
        const a11 = ae[0], a12 = ae[1];
        const a21 = ae[2], a22 = ae[3];
        const b11 = be[0], b12 = be[1];
        const b21 = be[2], b22 = be[3];

        ae[0] = a11*b11 + a12*b21;
        ae[1] = a11*b12 + a12*b22;
        ae[2] = a21*b11 + a22*b21;
        ae[3] = a21*b12 + a22*b22;

        return this;
    }
}
