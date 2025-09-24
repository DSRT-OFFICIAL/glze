import { Quaternion } from './Quaternion.js';

export class Euler {
  constructor(x = 0, y = 0, z = 0, order = 'YXZ') {
    this.x = x; // rotation around X axis
    this.y = y; // rotation around Y axis
    this.z = z; // rotation around Z axis
    this.order = order; // rotation order, default 'YXZ'
  }

  set(x, y, z, order = this.order) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.order = order;
    return this;
  }

  copy(e) {
    this.x = e.x;
    this.y = e.y;
    this.z = e.z;
    this.order = e.order;
    return this;
  }

  clone() {
    return new Euler(this.x, this.y, this.z, this.order);
  }

  setFromQuaternion(q, order = this.order) {
    // Convert quaternion to Euler angles
    const x = q.x, y = q.y, z = q.z, w = q.w;
    const test = x*y + z*w;
    const threshold = 0.499;
    let _x, _y, _z;

    switch(order){
      case 'XYZ':
        const sinr_cosp = 2*(w*x + y*z);
        const cosr_cosp = 1 - 2*(x*x + y*y);
        _x = Math.atan2(sinr_cosp, cosr_cosp);
        const sinp = 2*(w*y - z*x);
        _y = Math.abs(sinp)>=1? Math.sign(sinp)*Math.PI/2 : Math.asin(sinp);
        const siny_cosp = 2*(w*z + x*y);
        const cosy_cosp = 1 - 2*(y*y + z*z);
        _z = Math.atan2(siny_cosp, cosy_cosp);
        break;

      case 'YXZ':
        const siny = 2*(w*y - z*x);
        if(Math.abs(siny)>=1){
          _y = Math.sign(siny)*Math.PI/2;
          _x = Math.atan2(-x*z + w*y, 0.5 - y*y - z*z);
          _z = 0;
        } else {
          _y = Math.asin(siny);
          _x = Math.atan2(x*w + y*z, 0.5 - x*x - y*y);
          _z = Math.atan2(x*z + w*y, 0.5 - x*x - z*z);
        }
        break;

      default:
        throw new Error(`Euler order ${order} not implemented`);
    }

    this.x = _x;
    this.y = _y;
    this.z = _z;
    this.order = order;
    return this;
  }

  toQuaternion() {
    const c1 = Math.cos(this.x/2);
    const c2 = Math.cos(this.y/2);
    const c3 = Math.cos(this.z/2);
    const s1 = Math.sin(this.x/2);
    const s2 = Math.sin(this.y/2);
    const s3 = Math.sin(this.z/2);

    const q = new Quaternion();
    switch(this.order){
      case 'YXZ':
        q.x = s1*c2*c3 + c1*s2*s3;
        q.y = c1*s2*c3 - s1*c2*s3;
        q.z = c1*c2*s3 - s1*s2*c3;
        q.w = c1*c2*c3 + s1*s2*s3;
        break;
      default:
        throw new Error(`Euler order ${this.order} not implemented`);
    }
    return q.normalize();
  }

  toString() {
    return `Euler(${this.x}, ${this.y}, ${this.z}, order=${this.order})`;
  }
}
