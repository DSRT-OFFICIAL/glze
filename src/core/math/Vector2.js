export class Vector2 {
  constructor(x=0, y=0) {
    this.x = x;
    this.y = y;
  }

  // Set values
  set(x, y) {
    this.x = x; this.y = y;
    return this;
  }

  // Copy from another vector
  copy(v) {
    this.x = v.x; this.y = v.y;
    return this;
  }

  // Clone vector
  clone() {
    return new Vector2(this.x, this.y);
  }

  // Add another vector (return new vector)
  add(v) {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  // Add in-place
  addInPlace(v) {
    this.x += v.x; this.y += v.y;
    return this;
  }

  // Subtract (return new vector)
  subtract(v) {
    return new Vector2(this.x - v.x, this.y - v.y);
  }

  // Subtract in-place
  subtractInPlace(v) {
    this.x -= v.x; this.y -= v.y;
    return this;
  }

  // Multiply by scalar
  multiplyScalar(s) {
    return new Vector2(this.x * s, this.y * s);
  }

  // Multiply per-component
  multiplyComponents(v) {
    return new Vector2(this.x * v.x, this.y * v.y);
  }

  // In-place multiply per-component
  multiplyComponentsInPlace(v) {
    this.x *= v.x; this.y *= v.y;
    return this;
  }

  // Divide by scalar
  divideScalar(s) {
    if (s !== 0) return this.multiplyScalar(1 / s);
    console.warn("Vector2.divideScalar: division by zero");
    return this.clone();
  }

  // Dot product
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  // Length / magnitude
  length() {
    return Math.hypot(this.x, this.y);
  }

  // Normalize
  normalize() {
    const l = this.length() || 1;
    this.x /= l; this.y /= l;
    return this;
  }

  // Linear interpolation
  lerp(v, t) {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    return this;
  }

  // Convert to array
  toArray() {
    return [this.x, this.y];
  }

  // Load from array
  fromArray(arr) {
    this.x = arr[0] || 0;
    this.y = arr[1] || 0;
    return this;
  }

  // String representation
  toString() {
    return `Vector2(${this.x}, ${this.y})`;
  }
}
