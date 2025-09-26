// glze/src/core/math/Shapes/Frustum.js
import { Plane } from './Plane.js';
import { Vector3 } from '../Primitives/Vector3.js';

export class Frustum {
    constructor(planes = []) {
        this.planes = planes.length === 6 ? planes : [
            new Plane(), new Plane(), new Plane(),
            new Plane(), new Plane(), new Plane()
        ];
    }

    setFromMatrix(m) {
        const me = m.elements;
        const planes = this.planes;

        // Left
        planes[0].set(
            new Vector3(me[3] + me[0], me[7] + me[4], me[11] + me[8]),
            me[15] + me[12]
        );
        // Right
        planes[1].set(
            new Vector3(me[3] - me[0], me[7] - me[4], me[11] - me[8]),
            me[15] - me[12]
        );
        // Top
        planes[2].set(
            new Vector3(me[3] - me[1], me[7] - me[5], me[11] - me[9]),
            me[15] - me[13]
        );
        // Bottom
        planes[3].set(
            new Vector3(me[3] + me[1], me[7] + me[5], me[11] + me[9]),
            me[15] + me[13]
        );
        // Near
        planes[4].set(
            new Vector3(me[3] + me[2], me[7] + me[6], me[11] + me[10]),
            me[15] + me[14]
        );
        // Far
        planes[5].set(
            new Vector3(me[3] - me[2], me[7] - me[6], me[11] - me[10]),
            me[15] - me[14]
        );

        return this;
    }

    containsPoint(point) {
        return this.planes.every(p => p.distanceToPoint(point) >= 0);
    }

    clone() {
        return new Frustum(this.planes.map(p => p.clone()));
    }

    toString() {
        return `Frustum(${this.planes.map(p=>p.toString()).join(', ')})`;
    }
}
