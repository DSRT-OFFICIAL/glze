// glze/src/core/math/Shapes/Plane.js
import { Vector3 } from '../Primitives/Vector3.js';

export class Plane {
    constructor(normal = new Vector3(0,1,0), constant = 0) {
        this.normal = normal; // harus normalized
        this.constant = constant; // d dalam ax+by+cz+d=0
    }

    set(normal, constant) {
        this.normal = normal;
        this.constant = constant;
        return this;
    }

    copy(plane) {
        this.normal.copy(plane.normal);
        this.constant = plane.constant;
        return this;
    }

    clone() {
        return new Plane(this.normal.clone(), this.constant);
    }

    distanceToPoint(point) {
        return this.normal.dot(point) + this.constant;
    }

    containsPoint(point) {
        return Math.abs(this.distanceToPoint(point)) < 1e-6;
    }

    toString() {
        return `Plane(normal=${this.normal.toString()}, constant=${this.constant})`;
    }
}
