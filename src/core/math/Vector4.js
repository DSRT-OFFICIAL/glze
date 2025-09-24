export class Vector4 {
  constructor(x=0, y=0, z=0, w=1){
    this.x=x; this.y=y; this.z=z; this.w=w;
  }

  set(x,y,z,w){ this.x=x; this.y=y; this.z=z; this.w=w; return this }

  clone(){ return new Vector4(this.x,this.y,this.z,this.w) }

  copy(v){ this.x=v.x; this.y=v.y; this.z=v.z; this.w=v.w; return this }

  add(v){ this.x+=v.x; this.y+=v.y; this.z+=v.z; this.w+=v.w; return this }

  subtract(v){ this.x-=v.x; this.y-=v.y; this.z-=v.z; this.w-=v.w; return this }

  multiplyScalar(s){ this.x*=s; this.y*=s; this.z*=s; this.w*=s; return this }

  divideScalar(s){ if(s!==0){ this.x/=s; this.y/=s; this.z/=s; this.w/=s; } else { this.x=0; this.y=0; this.z=0; this.w=0; } return this }

  dot(v){ return this.x*v.x + this.y*v.y + this.z*v.z + this.w*v.w }

  length(){ return Math.hypot(this.x,this.y,this.z,this.w) }

  normalize(){ const l=this.length()||1; this.x/=l; this.y/=l; this.z/=l; this.w/=l; return this }

  toArray(){ return [this.x,this.y,this.z,this.w] }

  fromArray(arr){ this.x=arr[0]; this.y=arr[1]; this.z=arr[2]; this.w=arr[3]; return this }
}
