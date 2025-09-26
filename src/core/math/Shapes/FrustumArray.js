// core/math/Shapes/FrustumArray.js
import { Frustum } from './Frustum.js';

class FrustumArray {
    constructor() {
        this.frustums = [];
    }

    add(frustum) {
        this.frustums.push(frustum);
        return this;
    }

    remove(frustum) {
        const index = this.frustums.indexOf(frustum);
        if (index !== -1) this.frustums.splice(index, 1);
        return this;
    }

    clear() {
        this.frustums.length = 0;
        return this;
    }

    intersectsSphere(sphere) {
        for (const frustum of this.frustums) {
            if (frustum.intersectsSphere(sphere)) return true;
        }
        return false;
    }

    containsPoint(point) {
        for (const frustum of this.frustums) {
            if (frustum.containsPoint(point)) return true;
        }
        return false;
    }

    clone() {
        const fa = new FrustumArray();
        fa.frustums = this.frustums.map(f => f.clone());
        return fa;
    }

    copy(frustumArray) {
        this.frustums = frustumArray.frustums.map(f => f.clone());
        return this;
    }

    toString() {
        return `FrustumArray(frustums: [${this.frustums.map(f => f.toString())}])`;
    }
}

export { FrustumArray };
