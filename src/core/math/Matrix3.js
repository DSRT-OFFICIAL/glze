// src/core/math/Matrix3.js
export class Matrix3 {
  constructor(){ this.elements = new Float32Array(9); this.identity(); }
  
  identity(){ const e=this.elements; e[0]=1;e[1]=0;e[2]=0; e[3]=0;e[4]=1;e[5]=0; e[6]=0;e[7]=0;e[8]=1; return this; }
  
  clone(){ const m=new Matrix3(); m.elements.set(this.elements); return m; }
  copy(m){ this.elements.set(m.elements); return this; }

  multiply(m){
    const ae=this.elements, be=m.elements, te=new Float32Array(9);
    te[0]=ae[0]*be[0]+ae[3]*be[1]+ae[6]*be[2];
    te[1]=ae[1]*be[0]+ae[4]*be[1]+ae[7]*be[2];
    te[2]=ae[2]*be[0]+ae[5]*be[1]+ae[8]*be[2];
    te[3]=ae[0]*be[3]+ae[3]*be[4]+ae[6]*be[5];
    te[4]=ae[1]*be[3]+ae[4]*be[4]+ae[7]*be[5];
    te[5]=ae[2]*be[3]+ae[5]*be[4]+ae[8]*be[5];
    te[6]=ae[0]*be[6]+ae[3]*be[7]+ae[6]*be[8];
    te[7]=ae[1]*be[6]+ae[4]*be[7]+ae[7]*be[8];
    te[8]=ae[2]*be[6]+ae[5]*be[7]+ae[8]*be[8];
    this.elements=te;
    return this;
  }

  fromMatrix4(m4){
    const me=m4.elements, e=this.elements;
    e[0]=me[0]; e[1]=me[1]; e[2]=me[2];
    e[3]=me[4]; e[4]=me[5]; e[5]=me[6];
    e[6]=me[8]; e[7]=me[9]; e[8]=me[10];
    return this;
  }

  getNormalMatrix(m4){
    this.fromMatrix4(m4);
    // inverse transpose 3x3 manual
    const e=this.elements;
    const a00=e[0],a01=e[1],a02=e[2];
    const a10=e[3],a11=e[4],a12=e[5];
    const a20=e[6],a21=e[7],a22=e[8];
    const b01 = a22*a11 - a12*a21;
    const b11 = -a22*a10 + a12*a20;
    const b21 = a21*a10 - a11*a20;
    let det = a00*b01 + a01*b11 + a02*b21;
    if(!det) return this.identity();
    det = 1.0 / det;
    const te = new Float32Array(9);
    te[0] = b01*det;
    te[1] = (-a22*a01 + a02*a21)*det;
    te[2] = (a12*a01 - a02*a11)*det;
    te[3] = b11*det;
    te[4] = (a22*a00 - a02*a20)*det;
    te[5] = (-a12*a00 + a02*a10)*det;
    te[6] = b21*det;
    te[7] = (-a21*a00 + a01*a20)*det;
    te[8] = (a11*a00 - a01*a10)*det;
    this.elements = te;
    return this;
  }
}
