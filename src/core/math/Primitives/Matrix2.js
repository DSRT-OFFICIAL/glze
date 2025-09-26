export class Matrix2 {
    constructor() {
        this.elements = [1, 0, 0, 1]; // identity
    }

    set(n11, n12, n21, n22) {
        const te = this.elements;
        te[0] = n11; te[1] = n12;
        te[2] = n21; te[3] = n22;
        return this;
    }

    identity() {
        this.set(1, 0, 0, 1);
        return this;
    }

    clone() {
        const te = this.elements;
        return new Matrix2().set(te[0], te[1], te[2], te[3]);
    }

    copy(m) {
        const me = m.elements;
        return this.set(me[0], me[1], me[2], me[3]);
    }

    multiplyScalar(scalar) {
        const te = this.elements;
        for (let i = 0; i < 4; i++) te[i] *= scalar;
        return this;
    }

    determinant() {
        const te = this.elements;
        return te[0] * te[3] - te[1] * te[2];
    }

    transpose() {
        const te = this.elements;
        let tmp = te[1];
        te[1] = te[2];
        te[2] = tmp;
        return this;
    }
}
