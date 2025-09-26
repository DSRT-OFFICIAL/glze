// core/math/Shapes/Sphere.js
import { Vector3 } from '../primitives/Vector3.js';

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

    setFromPoints(points, optionalCenter) {
        const center = optionalCenter || this.center.set(0,0,0);
        if (!optionalCenter) points.forEach(p => center.add(p));
        if (!optionalCenter) center.multiplyScalar(1 / points.length);

        let maxRadiusSq = 0;
        points.forEach(p => maxRadiusSq = Math.max(maxRadiusSq, center.distanceToSquared(p)));
        this.radius = Math.sqrt(maxRadiusSq);

        return this;
    }

    containsPoint(point) {
        return point.distanceToSquared(this.center) <= (this.radius * this.radius);
    }

    clone() {
        return new Sphere().copy(this);
    }

    copy(sphere) {
        this.center.copy(sphere.center);
        this.radius = sphere.radius;
        return this;
    }
}

export { Sphere };
