// glze/src/core/math/Primitives/Vector3.js
export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }

    clone() {
        return new Vector3(this.x, this.y, this.z);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    divideScalar(s) {
        return this.multiplyScalar(1 / s);
    }

    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    cross(v) {
        const x = this.y * v.z - this.z * v.y;
        const y = this.z * v.x - this.x * v.z;
        const z = this.x * v.y - this.y * v.x;
        this.x = x; this.y = y; this.z = z;
        return this;
    }

    length() {
        return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
    }

    normalize() {
        return this.divideScalar(this.length() || 1);
    }

    distanceTo(v) {
        return Math.sqrt(
            (v.x - this.x)**2 +
            (v.y - this.y)**2 +
            (v.z - this.z)**2
        );
    }

    toString() {
        return `Vector3(${this.x}, ${this.y}, ${this.z})`;
    }
}
