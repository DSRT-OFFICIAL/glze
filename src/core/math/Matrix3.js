export class Matrix3 {
  constructor(){ this.elements=new Float32Array(9); this.identity(); }

  identity(){
    const e=this.elements;
    e[0]=1;e[1]=0;e[2]=0;
    e[3]=0;e[4]=1;e[5]=0;
    e[6]=0;e[7]=0;e[8]=1;
    return this;
  }

  clone(){ const m=new Matrix3(); m.elements.set(this.elements); return m; }
  copy(m){ this.elements.set(m.elements); return this; }

  transpose(){
    const e=this.elements; let t;
    t=e[1]; e[1]=e[3]; e[3]=t;
    t=e[2]; e[2]=e[6]; e[6]=t;
    t=e[5]; e[5]=e[7]; e[7]=t;
    return this;
  }

  fromMatrix4(m4){
    const me=m4.elements, te=this.elements;
    te[0]=me[0]; te[1]=me[1]; te[2]=me[2];
    te[3]=me[4]; te[4]=me[5]; te[5]=me[6];
    te[6]=me[8]; te[7]=me[9]; te[8]=me[10];
    return this;
  }

  getNormalMatrix(m4){
    this.fromMatrix4(m4);
    const e=this.elements;
    const a00=e[0], a01=e[1], a02=e[2];
    const a10=e[3], a11=e[4], a12=e[5];
    const a20=e[6], a21=e[7], a22=e[8];

    const b01 = a22*a11 - a12*a21;
    const b11 = -a22*a10 + a12*a20;
    const b21 = a21*a10 - a11*a20;

    let det = a00*b01 + a01*b11 + a02*b21;
    if(!det) return this.identity();
    det = 1.0/det;

    e[0]=b01*det; e[1]=(-a22*a01+a02*a21)*det; e[2]=(a12*a01 - a02*a11)*det;
    e[3]=b11*det; e[4]=(a22*a00 - a02*a20)*det; e[5]=(-a12*a00 + a02*a10)*det;
    e[6]=b21*det; e[7]=(-a21*a00 + a01*a20)*det; e[8]=(a11*a00 - a01*a10)*det;
    return this;
  }
}
