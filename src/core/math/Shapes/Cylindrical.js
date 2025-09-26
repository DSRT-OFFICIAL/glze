// core/math/Shapes/Cylindrical.js
import { Vector3 } from '../Vector3.js';

class Cylindrical {
    constructor(radius = 1, theta = 0, y = 0) {
        this.radius = radius;
        this.theta = theta;
        this.y = y;
    }

    set(radius, theta, y) {
        this.radius = radius;
        this.theta = theta;
        this.y = y;
        return this;
    }

    clone() {
        return new Cylindrical(this.radius, this.theta, this.y);
    }

    copy(cyl) {
        this.radius = cyl.radius;
        this.theta = cyl.theta;
        this.y = cyl.y;
        return this;
    }

    setFromVector3(v) {
        this.radius = Math.sqrt(v.x * v.x + v.z * v.z);
        this.theta = Math.atan2(v.x, v.z);
        this.y = v.y;
        return this;
    }

    toVector3(target = new Vector3()) {
        target.x = this.radius * Math.sin(this.theta);
        target.y = this.y;
        target.z = this.radius * Math.cos(this.theta);
        return target;
    }

    toString() {
        return `Cylindrical(radius: ${this.radius}, theta: ${this.theta}, y: ${this.y})`;
    }
}

export { Cylindrical };
