// core/math/Shapes/Box3.js
import { Vector3 } from '../primitives/Vector3.js';

class Box3 {
    constructor(min = new Vector3(+Infinity, +Infinity, +Infinity), max = new Vector3(-Infinity, -Infinity, -Infinity)) {
        this.min = min;
        this.max = max;
    }

    set(min, max) {
        this.min.copy(min);
        this.max.copy(max);
        return this;
    }

    setFromPoints(points) {
        this.min.set(+Infinity, +Infinity, +Infinity);
        this.max.set(-Infinity, -Infinity, -Infinity);
        points.forEach(p => this.expandByPoint(p));
        return this;
    }

    expandByPoint(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.min.z = Math.min(this.min.z, point.z);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        this.max.z = Math.max(this.max.z, point.z);
        return this;
    }

    containsPoint(point) {
        return point.x >= this.min.x && point.x <= this.max.x &&
               point.y >= this.min.y && point.y <= this.max.y &&
               point.z >= this.min.z && point.z <= this.max.z;
    }

    getCenter(target = new Vector3()) {
        return target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }

    getSize(target = new Vector3()) {
        return target.subVectors(this.max, this.min);
    }

    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }

    clone() {
        return new Box3().copy(this);
    }

    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }
}

export { Box3 };
