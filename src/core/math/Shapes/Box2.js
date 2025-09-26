// core/math/Shapes/Box2.js
import { Vector2 } from '../Vector2.js';

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

    clone() {
        return new Box2(this.min.clone(), this.max.clone());
    }

    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }

    getCenter(target = new Vector2()) {
        return target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }

    getSize(target = new Vector2()) {
        return target.subVectors(this.max, this.min);
    }

    containsPoint(point) {
        return point.x >= this.min.x && point.x <= this.max.x &&
               point.y >= this.min.y && point.y <= this.max.y;
    }

    expandByPoint(point) {
        this.min.min(point);
        this.max.max(point);
        return this;
    }

    toString() {
        return `Box2(min: ${this.min.toArray()}, max: ${this.max.toArray()})`;
    }
}

export { Box2 };
