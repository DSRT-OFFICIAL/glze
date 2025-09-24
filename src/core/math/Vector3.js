export class Vector3 {
  constructor(x=0, y=0, z=0){
    this.x=x; this.y=y; this.z=z;
  }

  set(x,y,z){ this.x=x; this.y=y; this.z=z; return this }

  clone(){ return new Vector3(this.x,this.y,this.z) }

  copy(v){ this.x=v.x; this.y=v.y; this.z=v.z; return this }

  add(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; return this }

  subtract(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; return this }

  multiplyScalar(s){ this.x*=s; this.y*=s; this.z*=s; return this }

  divideScalar(s){ if(s!==0){ this.x/=s; this.y/=s; this.z/=s; } else { this.x=0; this.y=0; this.z=0; } return this }

  length(){ return Math.hypot(this.x,this.y,this.z) }

  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; return this }

  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z }

  cross(v){
    const x=this.x, y=this.y, z=this.z;
    this.x = y*v.z - z*v.y;
    this.y = z*v.x - x*v.z;
    this.z = x*v.y - y*v.x;
    return this;
  }

  applyMatrix3(m){
    const e = m.elements;
    const x=this.x, y=this.y, z=this.z;
    this.x = e[0]*x + e[3]*y + e[6]*z;
    this.y = e[1]*x + e[4]*y + e[7]*z;
    this.z = e[2]*x + e[5]*y + e[8]*z;
    return this;
  }

  applyMatrix4(m){
    const e = m.elements;
    const x=this.x, y=this.y, z=this.z, w=1;
    const nx = e[0]*x + e[4]*y + e[8]*z + e[12]*w;
    const ny = e[1]*x + e[5]*y + e[9]*z + e[13]*w;
    const nz = e[2]*x + e[6]*y + e[10]*z + e[14]*w;
    const nw = e[3]*x + e[7]*y + e[11]*z + e[15]*w;
    this.x = nx/nw; this.y = ny/nw; this.z = nz/nw;
    return this;
  }

  toArray(){ return [this.x,this.y,this.z] }

  fromArray(arr){ this.x=arr[0]; this.y=arr[1]; this.z=arr[2]; return this }
}
