export class Matrix3 {
    constructor() {
        this.elements = [
            1,0,0,
            0,1,0,
            0,0,1
        ];
    }

    set(n11,n12,n13,n21,n22,n23,n31,n32,n33) {
        const te = this.elements;
        te[0]=n11; te[1]=n12; te[2]=n13;
        te[3]=n21; te[4]=n22; te[5]=n23;
        te[6]=n31; te[7]=n32; te[8]=n33;
        return this;
    }

    identity() {
        this.set(
            1,0,0,
            0,1,0,
            0,0,1
        );
        return this;
    }

    clone() {
        const te = this.elements;
        return new Matrix3().set(...te);
    }

    copy(m) {
        const me = m.elements;
        return this.set(...me);
    }

    multiplyScalar(scalar) {
        const te = this.elements;
        for(let i=0;i<9;i++) te[i]*=scalar;
        return this;
    }

    determinant() {
        const te = this.elements;
        return te[0]*(te[4]*te[8]-te[5]*te[7])
             - te[1]*(te[3]*te[8]-te[5]*te[6])
             + te[2]*(te[3]*te[7]-te[4]*te[6]);
    }

    transpose() {
        const te = this.elements;
        let tmp;
        tmp=te[1]; te[1]=te[3]; te[3]=tmp;
        tmp=te[2]; te[2]=te[6]; te[6]=tmp;
        tmp=te[5]; te[5]=te[7]; te[7]=tmp;
        return this;
    }
}
