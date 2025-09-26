export class Matrix4 {
    constructor() {
        this.elements = [
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        ];
    }

    set(
        n11,n12,n13,n14,
        n21,n22,n23,n24,
        n31,n32,n33,n34,
        n41,n42,n43,n44
    ) {
        const te = this.elements;
        te[0]=n11; te[1]=n12; te[2]=n13; te[3]=n14;
        te[4]=n21; te[5]=n22; te[6]=n23; te[7]=n24;
        te[8]=n31; te[9]=n32; te[10]=n33; te[11]=n34;
        te[12]=n41; te[13]=n42; te[14]=n43; te[15]=n44;
        return this;
    }

    identity() {
        this.set(
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        );
        return this;
    }

    clone() {
        return new Matrix4().set(...this.elements);
    }

    copy(m) {
        return this.set(...m.elements);
    }

    multiplyScalar(scalar) {
        const te = this.elements;
        for(let i=0;i<16;i++) te[i]*=scalar;
        return this;
    }

    transpose() {
        const te = this.elements;
        let tmp;
        tmp=te[1]; te[1]=te[4]; te[4]=tmp;
        tmp=te[2]; te[2]=te[8]; te[8]=tmp;
        tmp=te[3]; te[3]=te[12]; te[12]=tmp;
        tmp=te[6]; te[6]=te[9]; te[9]=tmp;
        tmp=te[7]; te[7]=te[13]; te[13]=tmp;
        tmp=te[11]; te[11]=te[14]; te[14]=tmp;
        return this;
    }

    // determinant, invert, etc bisa ditambahkan nanti sesuai kebutuhan
}
