// glze/src/core/math/Primitives/Matrix3.js
export class Matrix3 {
    constructor(
        n11 = 1, n12 = 0, n13 = 0,
        n21 = 0, n22 = 1, n23 = 0,
        n31 = 0, n32 = 0, n33 = 1
    ) {
        this.elements = [
            n11, n12, n13,
            n21, n22, n23,
            n31, n32, n33
        ];
    }

    set(
        n11, n12, n13,
        n21, n22, n23,
        n31, n32, n33
    ) {
        this.elements = [
            n11, n12, n13,
            n21, n22, n23,
            n31, n32, n33
        ];
        return this;
    }

    identity() {
        return this.set(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        );
    }

    multiply(m) {
        const te = this.elements;
        const me = m.elements;

        const a11 = te[0], a12 = te[1], a13 = te[2];
        const a21 = te[3], a22 = te[4], a23 = te[5];
        const a31 = te[6], a32 = te[7], a33 = te[8];

        const b11 = me[0], b12 = me[1], b13 = me[2];
        const b21 = me[3], b22 = me[4], b23 = me[5];
        const b31 = me[6], b32 = me[7], b33 = me[8];

        te[0] = a11 * b11 + a12 * b21 + a13 * b31;
        te[1] = a11 * b12 + a12 * b22 + a13 * b32;
        te[2] = a11 * b13 + a12 * b23 + a13 * b33;

        te[3] = a21 * b11 + a22 * b21 + a23 * b31;
        te[4] = a21 * b12 + a22 * b22 + a23 * b32;
        te[5] = a21 * b13 + a22 * b23 + a23 * b33;

        te[6] = a31 * b11 + a32 * b21 + a33 * b31;
        te[7] = a31 * b12 + a32 * b22 + a33 * b32;
        te[8] = a31 * b13 + a32 * b23 + a33 * b33;

        return this;
    }

    clone() {
        return new Matrix3(...this.elements);
    }
}
