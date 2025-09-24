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
        te[j*4+i]=ae[i]*be[j*4] + ae[i+4]*be[j*4+1] + ae[i+8]*be[j*4+2] + ae[i+12]*be[j*4+3];
      }
    }
    this.elements=te;
    return this;
  }

  multiplyVector4(v){
    const e=this.elements;
    const x=v.x, y=v.y, z=v.z, w=v.w;
    return {
      x:e[0]*x + e[4]*y + e[8]*z + e[12]*w,
      y:e[1]*x + e[5]*y + e[9]*z + e[13]*w,
      z:e[2]*x + e[6]*y + e[10]*z + e[14]*w,
      w:e[3]*x + e[7]*y + e[11]*z + e[15]*w
    };
  }

  makeTranslation(x,y,z){ this.identity(); const e=this.elements; e[12]=x;e[13]=y;e[14]=z; return this; }
  makeScale(x,y,z){ this.identity(); const e=this.elements; e[0]=x;e[5]=y;e[10]=z; return this; }

  makeRotationX(theta){ const c=Math.cos(theta),s=Math.sin(theta); this.identity(); const e=this.elements; e[5]=c;e[6]=s;e[9]=-s;e[10]=c; return this; }
  makeRotationY(theta){ const c=Math.cos(theta),s=Math.sin(theta); this.identity(); const e=this.elements; e[0]=c;e[2]=-s;e[8]=s;e[10]=c; return this; }
  makeRotationZ(theta){ const c=Math.cos(theta),s=Math.sin(theta); this.identity(); const e=this.elements; e[0]=c;e[1]=s;e[4]=-s;e[5]=c; return this; }

  makePerspective(fov, aspect, near, far){
    const e=this.elements;
    const f = 1.0 / Math.tan(fov * 0.5);
    const nf = 1 / (near - far);
    e[0] = f / aspect; e[1]=0; e[2]=0; e[3]=0;
    e[4] = 0; e[5]=f; e[6]=0; e[7]=0;
    e[8] = 0; e[9]=0; e[10]=(far+near)*nf; e[11]=-1;
    e[12]=0; e[13]=0; e[14]=2*far*near*nf; e[15]=0;
    return this;
  }

  makeRotationFromQuaternion(q){
    const m=q.toMatrix4(); this.elements.set(m); return this;
  }

  lookAt(eye, target, up){
    const z0 = eye.x - target.x, z1 = eye.y - target.y, z2 = eye.z - target.z;
    let len = Math.hypot(z0,z1,z2)||1;
    const zx = z0/len, zy=z1/len, zz=z2/len;

    const ux = up.x, uy=up.y, uz=up.z;
    let xx = uy*zz - uz*zy;
    let xy = uz*zx - ux*zz;
    let xz = ux*zy - uy*zx;
    let xl = Math.hypot(xx,xy,xz)||1; xx/=xl; xy/=xl; xz/=xl;

    let yx = zy*xz - zz*xy;
    let yy = zz*xx - zx*xz;
    let yz = zx*xy - zy*xx;

    const e=this.elements;
    e[0]=xx; e[4]=yx; e[8]=zx; e[12]=-(xx*eye.x + xy*eye.y + xz*eye.z);
    e[1]=xy; e[5]=yy; e[9]=zy; e[13]=-(yx*eye.x + yy*eye.y + yz*eye.z);
    e[2]=xz; e[6]=yz; e[10]=zz; e[14]=-(zx*eye.x + zy*eye.y + zz*eye.z);
    e[3]=0; e[7]=0; e[11]=0; e[15]=1;
    return this;
  }
}
