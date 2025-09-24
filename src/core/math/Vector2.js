export class Vector2 {
  constructor(x=0, y=0){
    this.x = x;
    this.y = y;
  }

  // set, copy, clone
  set(x,y){ this.x=x; this.y=y; return this; }
  copy(v){ this.x=v.x; this.y=v.y; return this; }
  clone(){ return new Vector2(this.x,this.y); }

  // operasi in-place
  add(v){ this.x+=v.x; this.y+=v.y; return this; }
  sub(v){ this.x-=v.x; this.y-=v.y; return this; }
  multiplyScalar(s){ this.x*=s; this.y*=s; return this; }
  divideScalar(s){ if(s!==0){ this.x/=s; this.y/=s; } return this; }

  // utility
  length(){ return Math.hypot(this.x,this.y); }
  lengthSquared(){ return this.x*this.x + this.y*this.y; }
  normalize(){ let l=this.length()||1; this.x/=l; this.y/=l; return this; }
  dot(v){ return this.x*v.x + this.y*v.y; }
  setZero(){ this.x=0; this.y=0; return this; }

  // functional style
  added(v){ return this.clone().add(v); }
  subtracted(v){ return this.clone().sub(v); }
  scaled(s){ return this.clone().multiplyScalar(s); }

  // lerp
  lerp(v, t){
    this.x += (v.x-this.x)*t;
    this.y += (v.y-this.y)*t;
    return this;
  }

  // conversion array
  toArray(){ return [this.x,this.y]; }
  fromArray(arr, offset=0){ this.x=arr[offset]; this.y=arr[offset+1]; return this; }

  // debug
  toString(){ return `Vector2(${this.x},${this.y})`; }
  equals(v, epsilon=1e-6){ return Math.abs(this.x-v.x)<epsilon && Math.abs(this.y-v.y)<epsilon; }
}
