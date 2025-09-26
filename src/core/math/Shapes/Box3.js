// core/math/Shapes/Box3.js

/**
 * @class Box3
 * @classdesc Represents a 3D axis-aligned bounding box with min and max points.
 */
import { Vector3 } from '../primitives/Vector3.js';
import { GlazeMathUtils } from '../GlazeMathUtils.js';

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

        points.forEach(point => this.expandByPoint(point));

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

    clampPoint(point, target = new Vector3()) {
        return target.copy(point).clamp(this.min, this.max);
    }

    intersectsBox(box) {
        return !(box.max.x < this.min.x || box.min.x > this.max.x ||
                 box.max.y < this.min.y || box.min.y > this.max.y ||
                 box.max.z < this.min.z || box.min.z > this.max.z);
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
