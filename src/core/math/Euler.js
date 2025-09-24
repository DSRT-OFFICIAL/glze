// src/core/math/Euler.js
import { Quaternion } from './Quaternion.js';

export class Euler {
  constructor(x=0, y=0, z=0, order='YXZ') {
    this.x = x;
    this.y = y;
    this.z = z;
    this.order = order;
  }

  set(x, y, z, order = this.order) {
    this.x = x; this.y = y; this.z = z; this.order = order; 
    return this;
  }

  clone() { return new Euler(this.x, this.y, this.z, this.order); }

  copy(e) { this.x = e.x; this.y = e.y; this.z = e.z; this.order = e.order; return this; }

  toQuaternion() {
    return new Quaternion().setFromEuler(this.x, this.y, this.z);
  }

  fromQuaternion(q) {
    // convert quaternion -> euler
    const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
    // YXZ order
    const test = qx*qy + qz*qw;
    this.y = Math.asin(2*test);
    this.x = Math.atan2(2*qx*qw - 2*qy*qz, 1 - 2*(qx*qx + qz*qz));
    this.z = Math.atan2(2*qy*qw - 2*qx*qz, 1 - 2*(qy*qy + qz*qz));
    return this;
  }
}
