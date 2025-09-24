// src/core/math/Vector4.js
export class Vector4 {
  constructor(x=0, y=0, z=0, w=1) {
    this.x = x; this.y = y; this.z = z; this.w = w;
  }

  set(x, y, z, w){ this.x=x; this.y=y; this.z=z; this.w=w; return this; }
  copy(v){ this.x=v.x; this.y=v.y; this.z=v.z; this.w=v.w; return this; }
  clone(){ return new Vector4(this.x,this.y,this.z,this.w); }

  add(v){ return new Vector4(this.x+v.x, this.y+v.y, this.z+v.z, this.w+v.w); }
  addInPlace(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; this.w+=v.w; return this; }

  subtract(v){ return new Vector4(this.x-v.x, this.y-v.y, this.z-v.z, this.w-v.w); }
  subtractInPlace(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; this.w-=v.w; return this; }

  multiplyScalar(s){ return new Vector4(this.x*s, this.y*s, this.z*s, this.w*s); }
  multiplyInPlaceScalar(s){ this.x*=s; this.y*=s; this.z*=s; this.w*=s; return this; }

  divideScalar(s){ return s!==0? this.multiplyScalar(1/s) : this.clone(); }

  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z + this.w*v.w; }

  length(){ return Math.hypot(this.x, this.y, this.z, this.w); }

  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; this.w/=l; return this; }

  toArray(){ return [this.x, this.y, this.z, this.w]; }
  fromArray(arr){ this.x=arr[0]||0; this.y=arr[1]||0; this.z=arr[2]||0; this.w=arr[3]!==undefined?arr[3]:1; return this; }

  lerp(v,t){ this.x+=(v.x-this.x)*t; this.y+=(v.y-this.y)*t; this.z+=(v.z-this.z)*t; this.w+=(v.w-this.w)*t; return this; }

  toString(){ return `Vector4(${this.x}, ${this.y}, ${this.z}, ${this.w})`; }
}
