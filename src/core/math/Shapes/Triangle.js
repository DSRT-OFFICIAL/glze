// core/math/Shapes/Triangle.js
import { Vector3 } from '../Vector3.js';

class Triangle {
    constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    set(a, b, c) {
        this.a.copy(a);
        this.b.copy(b);
        this.c.copy(c);
        return this;
    }

    clone() {
        return new Triangle(this.a.clone(), this.b.clone(), this.c.clone());
    }

    copy(triangle) {
        this.a.copy(triangle.a);
        this.b.copy(triangle.b);
        this.c.copy(triangle.c);
        return this;
    }

    getArea() {
        const v0 = this.b.clone().sub(this.a);
        const v1 = this.c.clone().sub(this.a);
        return v0.cross(v1).length() * 0.5;
    }

    getMidpoint(target = new Vector3()) {
        return target.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }

    containsPoint(point) {
        const v0 = this.c.clone().sub(this.a);
        const v1 = this.b.clone().sub(this.a);
        const v2 = point.clone().sub(this.a);

        const dot00 = v0.dot(v0);
        const dot01 = v0.dot(v1);
        const dot02 = v0.dot(v2);
        const dot11 = v1.dot(v1);
        const dot12 = v1.dot(v2);

        const denom = dot00 * dot11 - dot01 * dot01;
        const u = (dot11 * dot02 - dot01 * dot12) / denom;
        const v = (dot00 * dot12 - dot01 * dot02) / denom;

        return (u >= 0) && (v >= 0) && (u + v <= 1);
    }

    toString() {
        return `Triangle(a: ${this.a.toArray()}, b: ${this.b.toArray()}, c: ${this.c.toArray()})`;
    }
}

export { Triangle };
