// core/math/Shapes/Sphere.js
import { Vector3 } from '../Vector3.js';

class Sphere {
    constructor(center = new Vector3(), radius = 0) {
        this.center = center;
        this.radius = radius;
    }

    set(center, radius) {
        this.center.copy(center);
        this.radius = radius;
        return this;
    }

    clone() {
        return new Sphere(this.center.clone(), this.radius);
    }

    copy(sphere) {
        this.center.copy(sphere.center);
        this.radius = sphere.radius;
        return this;
    }

    containsPoint(point) {
        return point.distanceToSquared(this.center) <= (this.radius * this.radius);
    }

    distanceToPoint(point) {
        return point.distanceTo(this.center) - this.radius;
    }

    intersectsSphere(sphere) {
        const radiusSum = this.radius + sphere.radius;
        return this.center.distanceToSquared(sphere.center) <= (radiusSum * radiusSum);
    }

    getBoundingBox(targetMin, targetMax) {
        targetMin.set(
            this.center.x - this.radius,
            this.center.y - this.radius,
            this.center.z - this.radius
        );
        targetMax.set(
            this.center.x + this.radius,
            this.center.y + this.radius,
            this.center.z + this.radius
        );
        return { min: targetMin, max: targetMax };
    }

    translate(offset) {
        this.center.add(offset);
        return this;
    }

    toString() {
        return `Sphere(center: ${this.center.toArray()}, radius: ${this.radius})`;
    }
}

export { Sphere };
