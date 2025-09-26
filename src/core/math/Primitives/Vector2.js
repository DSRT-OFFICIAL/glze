export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        return this.divideScalar(this.length() || 1);
    }

    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    distanceTo(v) {
        return Math.sqrt((v.x - this.x) ** 2 + (v.y - this.y) ** 2);
    }

    toArray() {
        return [this.x, this.y];
    }

    fromArray(arr) {
        this.x = arr[0];
        this.y = arr[1];
        return this;
    }
}
