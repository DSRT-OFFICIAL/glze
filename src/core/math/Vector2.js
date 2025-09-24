export class Vector2 {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  set(x, y){ this.x=x; this.y=y; return this }

  clone(){ return new Vector2(this.x, this.y) }

  copy(v){ this.x=v.x; this.y=v.y; return this }

  add(v){ this.x+=v.x; this.y+=v.y; return this }

  subtract(v){ this.x-=v.x; this.y-=v.y; return this }

  multiplyScalar(s){ this.x*=s; this.y*=s; return this }

  divideScalar(s){ if(s!==0){ this.x/=s; this.y/=s; } else { this.x=0; this.y=0; } return this }

  length(){ return Math.hypot(this.x,this.y) }

  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; return this }

  dot(v){ return this.x*v.x + this.y*v.y }

  toArray(){ return [this.x,this.y] }

  fromArray(arr){ this.x=arr[0]; this.y=arr[1]; return this }
}
