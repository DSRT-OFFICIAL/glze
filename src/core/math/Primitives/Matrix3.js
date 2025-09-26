// glze/src/core/math/Primitives/Matrix3.js
export class Matrix3 {
    constructor() {
        this.elements = [
            1,0,0,
            0,1,0,
            0,0,1
        ];
    }

    set(...elements) {
        this.elements = elements;
        return this;
    }

    identity() {
        this.elements = [
            1,0,0,
            0,1,0,
            0,0,1
        ];
        return this;
    }

    multiply(m) {
        const a = this.elements;
        const b = m.elements;
        const r = [];
        for (let row=0; row<3; row++) {
            for (let col=0; col<3; col++) {
                r[row*3+col] = a[row*3+0]*b[0*3+col] +
                                a[row*3+1]*b[1*3+col] +
                                a[row*3+2]*b[2*3+col];
            }
        }
        this.elements = r;
        return this;
    }

    clone() {
        const m = new Matrix3();
        m.elements = [...this.elements];
        return m;
    }

    toString() {
        const e = this.elements;
        return `Matrix3([${e.slice(0,3)}], [${e.slice(3,6)}], [${e.slice(6,9)}])`;
    }
}
