// glze/src/core/math/Vector4.js
export class Vector4 {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    set(x, y, z, w) {
        this.x = x; this.y = y; this.z = z; this.w = w;
        return this;
    }

    clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
        return this;
    }

    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
        return this;
    }

    multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        this.w *= s;
        return this;
    }

    divideScalar(s) {
        if (s !== 0) {
            const inv = 1 / s;
            return this.multiplyScalar(inv);
        }
        return this;
    }

    length() {
        return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w);
    }

    normalize() {
        return this.divideScalar(this.length() || 1);
    }

    toString() {
        return `Vector4(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
    }
}
