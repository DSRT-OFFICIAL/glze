// core/math/Shapes/Plane.js
import { Vector3 } from '../primitives/Vector3.js';

class Plane {
    constructor(normal = new Vector3(1,0,0), constant = 0) {
        this.normal = normal;
        this.constant = constant;
    }

    set(normal, constant) {
        this.normal.copy(normal);
        this.constant = constant;
        return this;
    }

    setFromNormalAndPoint(normal, point) {
        this.normal.copy(normal);
        this.constant = - point.dot(this.normal);
        return this;
    }

    distanceToPoint(point) {
        return this.normal.dot(point) + this.constant;
    }

    projectPoint(point, target) {
        const distance = this.distanceToPoint(point);
        return target.copy(this.normal).multiplyScalar(-distance).add(point);
    }

    normalize() {
        const invLength = 1.0 / this.normal.length();
        this.normal.multiplyScalar(invLength);
        this.constant *= invLength;
        return this;
    }

    clone() {
        return new Plane().copy(this);
    }

    copy(plane) {
        this.normal.copy(plane.normal);
        this.constant = plane.constant;
        return this;
    }
}

export { Plane };
