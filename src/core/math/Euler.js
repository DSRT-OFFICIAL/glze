export class Euler {
  constructor(x=0, y=0, z=0, order='YXZ'){
    this.x=x; this.y=y; this.z=z; this.order=order;
  }

  set(x,y,z,order=this.order){ this.x=x; this.y=y; this.z=z; this.order=order; return this }

  clone(){ return new Euler(this.x,this.y,this.z,this.order) }

  copy(e){ this.x=e.x; this.y=e.y; this.z=e.z; this.order=e.order; return this }

  toQuaternion(){
    const q = new (await import('./Quaternion.js')).Quaternion();
    const x=this.x, y=this.y, z=this.z;
    const c1=Math.cos(y/2), s1=Math.sin(y/2);
    const c2=Math.cos(x/2), s2=Math.sin(x/2);
    const c3=Math.cos(z/2), s3=Math.sin(z/2);

    if(this.order==='YXZ'){
      q.x = s2*c1*c3 + c2*s1*s3;
      q.y = c2*s1*c3 - s2*c1*s3;
      q.z = c2*c1*s3 - s2*s1*c3;
      q.w = c2*c1*c3 + s2*s1*s3;
    } else {
      // implement other orders if needed
    }
    return q.normalize();
  }
}
