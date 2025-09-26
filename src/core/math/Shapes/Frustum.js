// core/math/Shapes/Frustum.js
import { Plane } from './Plane.js';
import { Vector3 } from '../primitives/Vector3.js';

class Frustum {
    constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
        this.planes = [p0, p1, p2, p3, p4, p5];
    }

    set(p0, p1, p2, p3, p4, p5) {
        this.planes[0] = p0;
        this.planes[1] = p1;
        this.planes[2] = p2;
        this.planes[3] = p3;
        this.planes[4] = p4;
        this.planes[5] = p5;
        return this;
    }

    containsPoint(point) {
        for (let i = 0; i < 6; i++) {
            if (this.planes[i].distanceToPoint(point) < 0) return false;
        }
        return true;
    }

    clone() {
        return new Frustum(...this.planes.map(p => p.clone()));
    }

    copy(frustum) {
        for (let i = 0; i < 6; i++) this.planes[i].copy(frustum.planes[i]);
        return this;
    }
}

export { Frustum };
