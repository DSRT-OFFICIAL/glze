// glze/src/core/math/Primitives/Matrix4.js
export class Matrix4 {
    constructor() {
        this.elements = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ];
    }

    identity() {
        this.elements = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ];
        return this;
    }

    multiply(m) {
        const a = this.elements;
        const b = m.elements;
        const r = [];
        for (let row=0; row<4; row++) {
            for (let col=0; col<4; col++) {
                r[row*4+col] =
                    a[row*4+0]*b[0*4+col] +
                    a[row*4+1]*b[1*4+col] +
                    a[row*4+2]*b[2*4+col] +
                    a[row*4+3]*b[3*4+col];
            }
        }
        this.elements = r;
        return this;
    }

    clone() {
        const m = new Matrix4();
        m.elements = [...this.elements];
        return m;
    }

    toString() {
        const e = this.elements;
        return `Matrix4([${e.slice(0,4)}], [${e.slice(4,8)}], [${e.slice(8,12)}], [${e.slice(12,16)}])`;
    }
}
