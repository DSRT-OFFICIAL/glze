export class Vector3 {
  constructor(x=0,y=0,z=0){
    this.x=x; this.y=y; this.z=z;
  }

  addInPlace(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; return this; }
  subtractInPlace(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; return this; }
  scaleInPlace(s){ this.x*=s; this.y*=s; this.z*=s; return this; }

  length(){ return Math.hypot(this.x,this.y,this.z); }
  normalize(){ let l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; return this; }

  clone(){ return new Vector3(this.x,this.y,this.z); }
  cross(v){ 
    const x=this.x, y=this.y, z=this.z;
    this.x = y*v.z - z*v.y;
    this.y = z*v.x - x*v.z;
    this.z = x*v.y - y*v.x;
    return this;
  }
  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z; }
}
