// glze/src/core/math/Primitives/Matrix3.js
export class Matrix3 {
    constructor() {
        this.elements = [
            1,0,0,
            0,1,0,
            0,0,1
        ];
    }

    set(
        n11, n12, n13,
        n21, n22, n23,
        n31, n32, n33
    ) {
        const te = this.elements;
        te[0]=n11; te[1]=n12; te[2]=n13;
        te[3]=n21; te[4]=n22; te[5]=n23;
        te[6]=n31; te[7]=n32; te[8]=n33;
        return this;
    }

    identity() {
        return this.set(
            1,0,0,
            0,1,0,
            0,0,1
        );
    }

    copy(m) {
        const te = this.elements;
        const me = m.elements;
        for (let i=0;i<9;i++) te[i] = me[i];
        return this;
    }

    multiply(m) {
        const ae = this.elements;
        const be = m.elements;

        const a11=ae[0], a12=ae[1], a13=ae[2];
        const a21=ae[3], a22=ae[4], a23=ae[5];
        const a31=ae[6], a32=ae[7], a33=ae[8];

        const b11=be[0], b12=be[1], b13=be[2];
        const b21=be[3], b22=be[4], b23=be[5];
        const b31=be[6], b32=be[7], b33=be[8];

        ae[0]=a11*b11+a12*b21+a13*b31;
        ae[1]=a11*b12+a12*b22+a13*b32;
        ae[2]=a11*b13+a12*b23+a13*b33;

        ae[3]=a21*b11+a22*b21+a23*b31;
        ae[4]=a21*b12+a22*b22+a23*b32;
        ae[5]=a21*b13+a22*b23+a23*b33;

        ae[6]=a31*b11+a32*b21+a33*b31;
        ae[7]=a31*b12+a32*b22+a33*b32;
        ae[8]=a31*b13+a32*b23+a33*b33;

        return this;
    }
}
