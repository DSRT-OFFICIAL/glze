// glze/src/core/math/Shapes/Sphere.js
import { Vector3 } from '../Primitives/Vector3.js';

export class Sphere {
    constructor(center = new Vector3(), radius = 1) {
        this.center = center;
        this.radius = radius;
    }

    set(center, radius) {
        this.center = center;
        this.radius = radius;
        return this;
    }

    copy(sphere) {
        this.center.copy(sphere.center);
        this.radius = sphere.radius;
        return this;
    }

    clone() {
        return new Sphere(this.center.clone(), this.radius);
    }

    containsPoint(point) {
        return this.center.distanceTo(point) <= this.radius;
    }

    toString() {
        return `Sphere(center=${this.center.toString()}, radius=${this.radius})`;
    }
}
