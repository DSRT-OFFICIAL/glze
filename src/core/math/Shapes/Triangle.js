// core/math/Shapes/Triangle.js
import { Vector3 } from '../primitives/Vector3.js';

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

    getArea() {
        const v0 = new Vector3().subVectors(this.c, this.b);
        const v1 = new Vector3().subVectors(this.a, this.b);
        return v0.cross(v1).length() * 0.5;
    }

    getNormal(target) {
        const v0 = new Vector3().subVectors(this.c, this.b);
        const v1 = new Vector3().subVectors(this.a, this.b);
        target = target || new Vector3();
        return target.crossVectors(v0, v1).normalize();
    }

    containsPoint(point) {
        const areaABC = this.getArea();
        const areaPBC = new Triangle(point, this.b, this.c).getArea();
        const areaAPC = new Triangle(this.a, point, this.c).getArea();
        const areaABP = new Triangle(this.a, this.b, point).getArea();
        return Math.abs(areaABC - (areaPBC + areaAPC + areaABP)) < 1e-10;
    }

    clone() {
        return new Triangle().copy(this);
    }

    copy(triangle) {
        this.a.copy(triangle.a);
        this.b.copy(triangle.b);
        this.c.copy(triangle.c);
        return this;
    }
}

export { Triangle };
