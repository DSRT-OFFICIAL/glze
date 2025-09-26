// core/math/Shapes/Frustum.js
import { Plane } from './Plane.js';

class Frustum {
    constructor(p0 = new Plane(), p1 = new Plane(), p2 = new Plane(), p3 = new Plane(), p4 = new Plane(), p5 = new Plane()) {
        this.planes = [p0, p1, p2, p3, p4, p5];
    }

    clone() {
        return new Frustum(...this.planes.map(p => p.clone()));
    }

    copy(frustum) {
        this.planes.forEach((plane, i) => plane.copy(frustum.planes[i]));
        return this;
    }

    containsPoint(point) {
        return this.planes.every(plane => plane.distanceToPoint(point) <= 0);
    }

    intersectsBox(box) {
        return this.planes.some(plane => plane.intersectsBox(box));
    }

    intersectsSphere(sphere) {
        return this.planes.some(plane => plane.intersectsSphere(sphere));
    }

    setFromProjectionMatrix(matrix) {
        const me = matrix.elements;
        const planes = this.planes;

        planes[0].set(me[3] + me[0], me[7] + me[4], me[11] + me[8], me[15] + me[12]); // left
        planes[1].set(me[3] - me[0], me[7] - me[4], me[11] - me[8], me[15] - me[12]); // right
        planes[2].set(me[3] + me[1], me[7] + me[5], me[11] + me[9], me[15] + me[13]); // top
        planes[3].set(me[3] - me[1], me[7] - me[5], me[11] - me[9], me[15] - me[13]); // bottom
        planes[4].set(me[3] + me[2], me[7] + me[6], me[11] + me[10], me[15] + me[14]); // near
        planes[5].set(me[3] - me[2], me[7] - me[6], me[11] - me[10], me[15] - me[14]); // far

        return this;
    }

    toString() {
        return `Frustum(planes: [${this.planes.map(plane => plane.toString())}])`;
    }
}

export { Frustum };
