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
        return this.set(
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            0,0,0,1
        );
    }

    copy(m) {
        const te = this.elements;
        const me = m.elements;
        for (let i=0;i<16;i++) te[i]=me[i];
        return this;
    }

    multiply(m) {
        const ae = this.elements;
        const be = m.elements;
        const te = new Array(16);

        for (let row=0;row<4;row++){
            for(let col=0;col<4;col++){
                te[row*4+col]=
                    ae[row*4+0]*be[0*4+col]+
                    ae[row*4+1]*be[1*4+col]+
                    ae[row*4+2]*be[2*4+col]+
                    ae[row*4+3]*be[3*4+col];
            }
        }

        for(let i=0;i<16;i++) ae[i]=te[i];
        return this;
    }
}
