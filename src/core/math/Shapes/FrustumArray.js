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

    remove(index) {
        this.frustums.splice(index, 1);
        return this;
    }

    containsPoint(point) {
        return this.frustums.some(f => f.containsPoint(point));
    }

    clone() {
        const arr = new FrustumArray();
        this.frustums.forEach(f => arr.add(f.clone()));
        return arr;
    }

    copy(array) {
        this.frustums = array.frustums.map(f => f.clone());
        return this;
    }
}

export { FrustumArray };
