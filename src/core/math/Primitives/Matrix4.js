// glze/src/core/math/Primitives/Matrix4.js
export class Matrix4 {
    constructor(
        n11 = 1, n12 = 0, n13 = 0, n14 = 0,
        n21 = 0, n22 = 1, n23 = 0, n24 = 0,
        n31 = 0, n32 = 0, n33 = 1, n34 = 0,
        n41 = 0, n42 = 0, n43 = 0, n44 = 1
    ) {
        this.elements = [
            n11, n12, n13, n14,
            n21, n22, n23, n24,
            n31, n32, n33, n34,
            n41, n42, n43, n44
        ];
    }

    set(
        n11, n12, n13, n14,
        n21, n22, n23, n24,
        n31, n32, n33, n34,
        n41, n42, n43, n44
    ) {
        this.elements = [
            n11, n12, n13, n14,
            n21, n22, n23, n24,
            n31, n32, n33, n34,
            n41, n42, n43, n44
        ];
        return this;
    }

    identity() {
        return this.set(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }

    multiply(m) {
        const te = this.elements;
        const me = m.elements;

        const a11 = te[0], a12 = te[1], a13 = te[2], a14 = te[3];
        const a21 = te[4], a22 = te[5], a23 = te[6], a24 = te[7];
        const a31 = te[8], a32 = te[9], a33 = te[10], a34 = te[11];
        const a41 = te[12], a42 = te[13], a43 = te[14], a44 = te[15];

        const b11 = me[0], b12 = me[1], b13 = me[2], b14 = me[3];
        const b21 = me[4], b22 = me[5], b23 = me[6], b24 = me[7];
        const b31 = me[8], b32 = me[9], b33 = me[10], b34 = me[11];
        const b41 = me[12], b42 = me[13], b43 = me[14], b44 = me[15];

        te[0] = a11*b11 + a12*b21 + a13*b31 + a14*b41;
        te[1] = a11*b12 + a12*b22 + a13*b32 + a14*b42;
        te[2] = a11*b13 + a12*b23 + a13*b33 + a14*b43;
        te[3] = a11*b14 + a12*b24 + a13*b34 + a14*b44;

        te[4] = a21*b11 + a22*b21 + a23*b31 + a24*b41;
        te[5] = a21*b12 + a22*b22 + a23*b32 + a24*b42;
        te[6] = a21*b13 + a22*b23 + a23*b33 + a24*b43;
        te[7] = a21*b14 + a22*b24 + a23*b34 + a24*b44;

        te[8] = a31*b11 + a32*b21 + a33*b31 + a34*b41;
        te[9] = a31*b12 + a32*b22 + a33*b32 + a34*b42;
        te[10] = a31*b13 + a32*b23 + a33*b33 + a34*b43;
        te[11] = a31*b14 + a32*b24 + a33*b34 + a34*b44;

        te[12] = a41*b11 + a42*b21 + a43*b31 + a44*b41;
        te[13] = a41*b12 + a42*b22 + a43*b32 + a44*b42;
        te[14] = a41*b13 + a42*b23 + a43*b33 + a44*b43;
        te[15] = a41*b14 + a42*b24 + a43*b34 + a44*b44;

        return this;
    }

    clone() {
        return new Matrix4(...this.elements);
    }
            }
