export class Vector3 {
  constructor(x=0,y=0,z=0){
    this.x=x; this.y=y; this.z=z;
  }

  // set, copy, clone
  set(x,y,z){ this.x=x; this.y=y; this.z=z; return this; }
  copy(v){ this.x=v.x; this.y=v.y; this.z=v.z; return this; }
  clone(){ return new Vector3(this.x,this.y,this.z); }

  // operasi in-place
  add(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; return this; }
  sub(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; return this; }
  multiplyScalar(s){ this.x*=s; this.y*=s; this.z*=s; return this; }
  divideScalar(s){ if(s!==0){ this.x/=s; this.y/=s; this.z/=s; } return this; }

  // utility
  length(){ return Math.hypot(this.x,this.y,this.z); }
  lengthSquared(){ return this.x*this.x + this.y*this.y + this.z*this.z; }
  normalize(){ let l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; return this; }
  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z; }
  cross(v){
    const x=this.x, y=this.y, z=this.z;
    this.x = y*v.z - z*v.y;
    this.y = z*v.x - x*v.z;
    this.z = x*v.y - y*v.x;
    return this;
  }
  setZero(){ this.x=0; this.y=0; this.z=0; return this; }

  // functional style
  added(v){ return this.clone().add(v); }
  subtracted(v){ return this.clone().sub(v); }
  scaled(s){ return this.clone().multiplyScalar(s); }

  // lerp
  lerp(v, t){
    this.x += (v.x-this.x)*t;
    this.y += (v.y-this.y)*t;
    this.z += (v.z-this.z)*t;
    return this;
  }

  // conversion array
  toArray(){ return [this.x,this.y,this.z]; }
  fromArray(arr, offset=0){ this.x=arr[offset]; this.y=arr[offset+1]; this.z=arr[offset+2]; return this; }

  // debug
  toString(){ return `Vector3(${this.x},${this.y},${this.z})`; }
  equals(v, epsilon=1e-6){ return Math.abs(this.x-v.x)<epsilon && Math.abs(this.y-v.y)<epsilon && Math.abs(this.z-v.z)<epsilon; }
}
