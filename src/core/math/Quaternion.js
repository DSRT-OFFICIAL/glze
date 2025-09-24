export class Quaternion {
  constructor(x=0,y=0,z=0,w=1){ this.x=x; this.y=y; this.z=z; this.w=w; }

  set(x,y,z,w){ this.x=x; this.y=y; this.z=z; this.w=w; return this; }
  clone(){ return new Quaternion(this.x,this.y,this.z,this.w); }

  normalize(){
    const l=Math.hypot(this.x,this.y,this.z,this.w)||1;
    this.x/=l; this.y/=l; this.z/=l; this.w/=l;
    return this;
  }

  multiply(q){
    const ax=this.x, ay=this.y, az=this.z, aw=this.w;
    const bx=q.x, by=q.y, bz=q.z, bw=q.w;

    this.x = ax*bw + aw*bx + ay*bz - az*by;
    this.y = ay*bw + aw*by + az*bx - ax*bz;
    this.z = az*bw + aw*bz + ax*by - ay*bx;
    this.w = aw*bw - ax*bx - ay*by - az*bz;
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

  setFromAxisAngle(axis, angle){
    const half=angle*0.5, s=Math.sin(half);
    this.x=axis.x*s; this.y=axis.y*s; this.z=axis.z*s; this.w=Math.cos(half);
    return this;
  }

  toMatrix4(){
    const x=this.x, y=this.y, z=this.z, w=this.w;
    const x2=x+x, y2=y+y, z2=z+z;
    const xx=x*x2, xy=x*y2, xz=x*z2;
    const yy=y*y2, yz=y*z2, zz=z*z2;
    const wx=w*x2, wy=w*y2, wz=w*z2;

    const m=new Float32Array(16);
    m[0]=1-(yy+zz); m[1]=xy+wz;   m[2]=xz-wy;   m[3]=0;
    m[4]=xy-wz;     m[5]=1-(xx+zz); m[6]=yz+wx;  m[7]=0;
    m[8]=xz+wy;     m[9]=yz-wx;    m[10]=1-(xx+yy); m[11]=0;
    m[12]=0; m[13]=0; m[14]=0; m[15]=1;

    return m;
  }
}
