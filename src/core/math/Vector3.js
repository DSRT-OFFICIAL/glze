// src/core/math/Vector3.js
export class Vector3 {
  constructor(x=0, y=0, z=0) {
    this.x = x; this.y = y; this.z = z;
  }

  set(x, y, z){ this.x=x; this.y=y; this.z=z; return this; }
  copy(v){ this.x=v.x; this.y=v.y; this.z=v.z; return this; }
  clone(){ return new Vector3(this.x,this.y,this.z); }

  add(v){ return new Vector3(this.x+v.x, this.y+v.y, this.z+v.z); }
  addInPlace(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; return this; }

  subtract(v){ return new Vector3(this.x-v.x, this.y-v.y, this.z-v.z); }
  subtractInPlace(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; return this; }

  multiplyScalar(s){ return new Vector3(this.x*s, this.y*s, this.z*s); }
  multiplyInPlaceScalar(s){ this.x*=s; this.y*=s; this.z*=s; return this; }

  divideScalar(s){ return s!==0? this.multiplyScalar(1/s) : this.clone(); }

  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z; }

  length(){ return Math.hypot(this.x, this.y, this.z); }

  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; return this; }

  toArray(){ return [this.x, this.y, this.z]; }
  fromArray(arr){ this.x=arr[0]||0; this.y=arr[1]||0; this.z=arr[2]||0; return this; }

  lerp(v,t){ this.x+=(v.x-this.x)*t; this.y+=(v.y-this.y)*t; this.z+=(v.z-this.z)*t; return this; }

  toString(){ return `Vector3(${this.x}, ${this.y}, ${this.z})`; }
}
