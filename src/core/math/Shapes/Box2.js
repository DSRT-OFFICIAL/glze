// core/math/Shapes/Box2.js
import { Vector2 } from '../primitives/Vector2.js';

class Box2 {
    constructor(min = new Vector2(+Infinity, +Infinity), max = new Vector2(-Infinity, -Infinity)) {
        this.min = min;
        this.max = max;
    }

    set(min, max) {
        this.min.copy(min);
        this.max.copy(max);
        return this;
    }

    setFromPoints(points) {
        this.min.set(+Infinity, +Infinity);
        this.max.set(-Infinity, -Infinity);
        points.forEach(p => this.expandByPoint(p));
        return this;
    }

    expandByPoint(point) {
        this.min.x = Math.min(this.min.x, point.x);
        this.min.y = Math.min(this.min.y, point.y);
        this.max.x = Math.max(this.max.x, point.x);
        this.max.y = Math.max(this.max.y, point.y);
        return this;
    }

    containsPoint(point) {
        return point.x >= this.min.x && point.x <= this.max.x &&
               point.y >= this.min.y && point.y <= this.max.y;
    }

    getCenter(target = new Vector2()) {
        return target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }

    getSize(target = new Vector2()) {
        return target.subVectors(this.max, this.min);
    }

    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y;
    }

    clone() {
        return new Box2().copy(this);
    }

    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }
}

export { Box2 };
