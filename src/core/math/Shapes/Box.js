// glze/src/core/math/Shapes/Box.js
import { Vector3 } from '../Primitives/Vector3.js';

export class Box {
    constructor(min = new Vector3(), max = new Vector3(1,1,1)) {
        this.min = min;
        this.max = max;
    }

    set(min, max) {
        this.min = min;
        this.max = max;
        return this;
    }

    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }

    clone() {
        return new Box(this.min.clone(), this.max.clone());
    }

    containsPoint(point) {
        return (point.x >= this.min.x && point.x <= this.max.x) &&
               (point.y >= this.min.y && point.y <= this.max.y) &&
               (point.z >= this.min.z && point.z <= this.max.z);
    }

    toString() {
        return `Box(min=${this.min.toString()}, max=${this.max.toString()})`;
    }
}
