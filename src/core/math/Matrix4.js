export class Matrix4 {
  constructor(){ this.elements=new Float32Array(16); this.identity(); }

  identity(){
    const e=this.elements;
    e[0]=1;e[4]=0;e[8]=0;e[12]=0;
    e[1]=0;e[5]=1;e[9]=0;e[13]=0;
    e[2]=0;e[6]=0;e[10]=1;e[14]=0;
    e[3]=0;e[7]=0;e[11]=0;e[15]=1;
    return this;
  }

  clone(){ const m=new Matrix4(); m.elements.set(this.elements); return m; }
  copy(m){ this.elements.set(m.elements); return this; }

  multiply(m){
    const ae=this.elements, be=m.elements, te=new Float32Array(16);
    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
        te[j*4+i]=ae[i]*be[j*4]+ae[i+4]*be[j*4+1]+ae[i+8]*be[j*4+2]+ae[i+12]*be[j*4+3];
      }
    }
    this.elements=te;
    return this;
  }

  multiplyVector4(v){
    const e=this.elements;
    return { x:e[0]*v.x+e[4]*v.y+e[8]*v.z+e[12]*v.w,
             y:e[1]*v.x+e[5]*v.y+e[9]*v.z+e[13]*v.w,
             z:e[2]*v.x+e[6]*v.y+e[10]*v.z+e[14]*v.w,
             w:e[3]*v.x+e[7]*v.y+e[11]*v.z+e[15]*v.w };
  }

  makeTranslation(x,y,z){ this.identity(); const e=this.elements; e[12]=x;e[13]=y;e[14]=z; return this; }
  makeScale(x,y,z){ this.identity(); const e=this.elements; e[0]=x;e[5]=y;e[10]=z; return this; }
  makeRotationX(theta){ const c=Math.cos(theta), s=Math.sin(theta); this.identity(); const e=this.elements; e[5]=c;e[6]=s;e[9]=-s;e[10]=c; return this; }
  makeRotationY(theta){ const c=Math.cos(theta), s=Math.sin(theta); this.identity(); const e=this.elements; e[0]=c;e[2]=-s;e[8]=s;e[10]=c; return this; }
  makeRotationZ(theta){ const c=Math.cos(theta), s=Math.sin(theta); this.identity(); const e=this.elements; e[0]=c;e[1]=s;e[4]=-s;e[5]=c; return this; }

  makeRotationFromQuaternion(q){
    const m = q.toMatrix4();
    this.elements.set(m);
    return this;
  }

  transpose(){
    const e=this.elements; let t;
    t=e[1]; e[1]=e[4]; e[4]=t;
    t=e[2]; e[2]=e[8]; e[8]=t;
    t=e[3]; e[3]=e[12]; e[12]=t;
    t=e[6]; e[6]=e[9]; e[9]=t;
    t=e[7]; e[7]=e[13]; e[13]=t;
    t=e[11]; e[11]=e[14]; e[14]=t;
    return this;
  }
}
