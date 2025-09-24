export class Matrix2 {
  constructor(){ this.elements = new Float32Array([1,0,0,1]); }

  identity(){
    const e=this.elements;
    e[0]=1; e[1]=0;
    e[2]=0; e[3]=1;
    return this;
  }

  clone(){ const m=new Matrix2(); m.elements.set(this.elements); return m; }
  copy(m){ this.elements.set(m.elements); return this; }

  transpose(){
    const e=this.elements;
    let tmp=e[1]; e[1]=e[2]; e[2]=tmp;
    return this;
  }

  set(n11,n12,n21,n22){
    const e=this.elements;
    e[0]=n11; e[1]=n12; e[2]=n21; e[3]=n22;
    return this;
  }

  fromArray(array){
    this.elements.set(array.slice(0,4));
    return this;
  }

  toArray(){
    return Array.from(this.elements);
  }
}
