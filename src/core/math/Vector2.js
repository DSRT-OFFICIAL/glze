export class Vector2 {
  constructor(x=0, y=0) {
    this.x = x; this.y = y;
  }

  set(x, y){ this.x=x; this.y=y; return this; }
  copy(v){ this.x=v.x; this.y=v.y; return this; }
  clone(){ return new Vector2(this.x,this.y); }

  add(v){ return new Vector2(this.x+v.x, this.y+v.y); }
  addInPlace(v){ this.x+=v.x; this.y+=v.y; return this; }

  subtract(v){ return new Vector2(this.x-v.x, this.y-v.y); }
  subtractInPlace(v){ this.x-=v.x; this.y-=v.y; return this; }

  multiplyScalar(s){ return new Vector2(this.x*s,this.y*s); }
  multiplyComponents(v){ return new Vector2(this.x*v.x,this.y*v.y); }
  multiplyComponentsInPlace(v){ this.x*=v.x; this.y*=v.y; return this; }

  divideScalar(s){ return s!==0? this.multiplyScalar(1/s) : this.clone(); }

  dot(v){ return this.x*v.x+this.y*v.y; }

  length(){ return Math.hypot(this.x,this.y); }
  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; return this; }

  lerp(v,t){ this.x+=(v.x-this.x)*t; this.y+=(v.y-this.y)*t; return this; }

  toArray(){ return [this.x,this.y]; }
  fromArray(arr){ this.x=arr[0]||0; this.y=arr[1]||0; return this; }

  toString(){ return `Vector2(${this.x},${this.y})`; }
}
