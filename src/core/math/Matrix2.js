export class Matrix2 {
  constructor(){
    this.elements = new Float32Array(4);
    this.identity();
  }

  identity(){
    const e = this.elements;
    e[0]=1; e[1]=0;
    e[2]=0; e[3]=1;
    return this;
  }

  clone(){
    const m = new Matrix2();
    m.elements.set(this.elements);
    return m;
  }

  copy(m){
    this.elements.set(m.elements);
    return this;
  }

  multiply(m){
    const ae = this.elements, be = m.elements;
    const a11=ae[0], a12=ae[1], a21=ae[2], a22=ae[3];
    const b11=be[0], b12=be[1], b21=be[2], b22=be[3];
    ae[0]=a11*b11 + a12*b21;
    ae[1]=a11*b12 + a12*b22;
    ae[2]=a21*b11 + a22*b21;
    ae[3]=a21*b12 + a22*b22;
    return this;
  }

  multiplyVector2(v){
    const e = this.elements;
    const x = v.x, y = v.y;
    return { x: e[0]*x + e[1]*y, y: e[2]*x + e[3]*y };
  }
}
