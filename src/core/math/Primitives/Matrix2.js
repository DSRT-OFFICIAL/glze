// glze/src/core/math/Matrix2.js
export class Matrix2 {
    constructor(m00 = 1, m01 = 0, m10 = 0, m11 = 1) {
        this.m00 = m00; this.m01 = m01;
        this.m10 = m10; this.m11 = m11;
    }

    set(m00, m01, m10, m11) {
        this.m00 = m00; this.m01 = m01;
        this.m10 = m10; this.m11 = m11;
        return this;
    }

    identity() {
        this.m00 = 1; this.m01 = 0;
        this.m10 = 0; this.m11 = 1;
        return this;
    }

    copy(matrix) {
        this.m00 = matrix.m00;
        this.m01 = matrix.m01;
        this.m10 = matrix.m10;
        this.m11 = matrix.m11;
        return this;
    }

    clone() {
        return new Matrix2(this.m00, this.m01, this.m10, this.m11);
    }

    multiply(matrix) {
        const m00 = this.m00 * matrix.m00 + this.m01 * matrix.m10;
        const m01 = this.m00 * matrix.m01 + this.m01 * matrix.m11;
        const m10 = this.m10 * matrix.m00 + this.m11 * matrix.m10;
        const m11 = this.m10 * matrix.m01 + this.m11 * matrix.m11;
        this.set(m00, m01, m10, m11);
        return this;
    }

    determinant() {
        return this.m00 * this.m11 - this.m01 * this.m10;
    }

    invert() {
        const det = this.determinant();
        if (det === 0) return this.identity();
        const invDet = 1 / det;
        const m00 = this.m11 * invDet;
        const m01 = -this.m01 * invDet;
        const m10 = -this.m10 * invDet;
        const m11 = this.m00 * invDet;
        return this.set(m00, m01, m10, m11);
    }

    transpose() {
        const tmp = this.m01;
        this.m01 = this.m10;
        this.m10 = tmp;
        return this;
    }

    toString() {
        return `[[${this.m00}, ${this.m01}], [${this.m10}, ${this.m11}]]`;
    }
    }
