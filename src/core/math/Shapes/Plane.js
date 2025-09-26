// core/math/Shapes/Plane.js
import { Vector3 } from '../Vector3.js';

class Plane {
    constructor(normal = new Vector3(1, 0, 0), constant = 0) {
        this.normal = normal;
        this.constant = constant;
    }

    set(normal, constant) {
        this.normal.copy(normal);
        this.constant = constant;
        return this;
    }

    clone() {
        return new Plane(this.normal.clone(), this.constant);
    }

    copy(plane) {
        this.normal.copy(plane.normal);
        this.constant = plane.constant;
        return this;
    }

    normalize() {
        const inverseNormalLength = 1.0 / this.normal.length();
        this.normal.multiplyScalar(inverseNormalLength);
        this.constant *= inverseNormalLength;
        return this;
    }

    distanceToPoint(point) {
        return this.normal.dot(point) + this.constant;
    }

    projectPoint(point, target = new Vector3()) {
        return target.copy(this.normal)
                     .multiplyScalar(-this.distanceToPoint(point))
                     .add(point);
    }

    intersectLine(line, target = new Vector3()) {
        const direction = line.delta();
        const denominator = this.normal.dot(direction);
        if (denominator === 0) return null;
        const t = -(line.start.dot(this.normal) + this.constant) / denominator;
        if (t < 0 || t > 1) return null;
        return target.copy(direction).multiplyScalar(t).add(line.start);
    }

    toString() {
        return `Plane(normal: ${this.normal.toArray()}, constant: ${this.constant})`;
    }
}

export { Plane };
