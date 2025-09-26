// glze/src/core/math/Primitives/Quaternion.js
import { Vector3 } from './Vector3.js';

export class Quaternion {
    constructor(x=0,y=0,z=0,w=1){
        this.x=x; this.y=y; this.z=z; this.w=w;
    }

    set(x,y,z,w){
        this.x=x; this.y=y; this.z=z; this.w=w;
        return this;
    }

    copy(q){
        this.x=q.x; this.y=q.y; this.z=q.z; this.w=q.w;
        return this;
    }

    clone(){
        return new Quaternion(this.x,this.y,this.z,this.w);
    }

    multiply(q){
        const x=this.x, y=this.y, z=this.z, w=this.w;
        const qx=q.x, qy=q.y, qz=q.z, qw=q.w;

        this.x = w*qx + x*qw + y*qz - z*qy;
        this.y = w*qy - x*qz + y*qw + z*qx;
        this.z = w*qz + x*qy - y*qx + z*qw;
        this.w = w*qw - x*qx - y*qy - z*qz;
        return this;
    }

    normalize(){
        const l = Math.sqrt(this.x**2 + this.y**2 + this.z**2 + this.w**2);
        return this.set(this.x/l,this.y/l,this.z/l,this.w/l);
    }

    setFromAxisAngle(axis, angle){
        const half = angle/2;
        const s = Math.sin(half);
        this.x = axis.x * s;
        this.y = axis.y * s;
        this.z = axis.z * s;
        this.w = Math.cos(half);
        return this;
    }

    toString(){
        return `Quaternion(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
    }
            }
