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

  multiplyScalar(s){ return new Vector3(this.x*s,this.y*s,this.z*s); }
  multiplyComponents(v){ return new Vector3(this.x*v.x,this.y*v.y,this.z*v.z); }
  multiplyComponentsInPlace(v){ this.x*=v.x; this.y*=v.y; this.z*=v.z; return this; }

  divideScalar(s){ return s!==0? this.multiplyScalar(1/s) : this.clone(); }

  dot(v){ return this.x*v.x+this.y*v.y+this.z*v.z; }
  cross(v){ return new Vector3(this.y*v.z-this.z*v.y, this.z*v.x-this.x*v.z, this.x*v.y-this.y*v.x); }
  crossInPlace(v){ const x=this.x,y=this.y,z=this.z; this.x=y*v.z-z*v.y; this.y=z*v.x-x*v.z; this.z=x*v.y-y*v.x; return this; }

  length(){ return Math.hypot(this.x,this.y,this.z); }
  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; return this; }

  lerp(v,t){ this.x+=(v.x-this.x)*t; this.y+=(v.y-this.y)*t; this.z+=(v.z-this.z)*t; return this; }

  toArray(){ return [this.x,this.y,this.z]; }
  fromArray(arr){ this.x=arr[0]||0; this.y=arr[1]||0; this.z=arr[2]||0; return this; }

  toString(){ return `Vector3(${this.x},${this.y},${this.z})`; }
}
