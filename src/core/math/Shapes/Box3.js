// core/math/Shapes/Box3.js
import { Vector3 } from '../Vector3.js';

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

    clone() {
        return new Box3(this.min.clone(), this.max.clone());
    }

    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }

    getCenter(target = new Vector3()) {
        return target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }

    getSize(target = new Vector3()) {
        return target.subVectors(this.max, this.min);
    }

    containsPoint(point) {
        return point.x >= this.min.x && point.x <= this.max.x &&
               point.y >= this.min.y && point.y <= this.max.y &&
               point.z >= this.min.z && point.z <= this.max.z;
    }

    expandByPoint(point) {
        this.min.min(point);
        this.max.max(point);
        return this;
    }

    toString() {
        return `Box3(min: ${this.min.toArray()}, max: ${this.max.toArray()})`;
    }
}

export { Box3 };
