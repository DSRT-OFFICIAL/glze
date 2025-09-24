// src/core/math/Quaternion.js
export class Quaternion {

  constructor(x=0, y=0, z=0, w=1) {
    this.x=x; this.y=y; this.z=z; this.w=w;
  }

  set(x,y,z,w){ this.x=x; this.y=y; this.z=z; this.w=w; return this; }
  clone(){ return new Quaternion(this.x,this.y,this.z,this.w); }
  copy(q){ this.x=q.x; this.y=q.y; this.z=q.z; this.w=q.w; return this; }

  normalize(){ const l=Math.hypot(this.x,this.y,this.z,this.w)||1; this.x/=l; this.y/=l; this.z/=l; this.w/=l; return this; }

  multiply(q){
    const x=this.x, y=this.y, z=this.z, w=this.w;
    const qx=q.x, qy=q.y, qz=q.z, qw=q.w;
    this.x = x*qw + w*qx + y*qz - z*qy;
    this.y = y*qw + w*qy + z*qx - x*qz;
    this.z = z*qw + w*qz + x*qy - y*qx;
    this.w = w*qw - x*qx - y*qy - z*qz;
    return this;
  }

  setFromEuler(ex,ey,ez){
    const c1=Math.cos(ey/2), s1=Math.sin(ey/2);
    const c2=Math.cos(ex/2), s2=Math.sin(ex/2);
    const c3=Math.cos(ez/2), s3=Math.sin(ez/2);
    this.x = s2*c1*c3 + c2*s1*s3;
    this.y = c2*s1*c3 - s2*c1*s3;
    this.z = c2*c1*s3 - s2*s1*c3;
    this.w = c2*c1*c3 + s2*s1*s3;
    return this.normalize();
  }

}
