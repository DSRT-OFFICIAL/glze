export class Vector3 {
  constructor(x=0, y=0, z=0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // Set values
  set(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }

  // Copy from another vector
  copy(v) {
    this.x = v.x; this.y = v.y; this.z = v.z;
    return this;
  }

  // Clone vector
  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  // Add another vector (return new vector)
  add(v) {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  // Add in-place
  addInPlace(v) {
    this.x += v.x; this.y += v.y; this.z += v.z;
    return this;
  }

  // Subtract (return new vector)
  subtract(v) {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  // Subtract in-place
  subtractInPlace(v) {
    this.x -= v.x; this.y -= v.y; this.z -= v.z;
    return this;
  }

  // Multiply by scalar
  multiplyScalar(s) {
    return new Vector3(this.x * s, this.y * s, this.z * s);
  }

  // Multiply per-component
  multiplyComponents(v) {
    return new Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
  }

  // In-place multiply per-component
  multiplyComponentsInPlace(v) {
    this.x *= v.x; this.y *= v.y; this.z *= v.z;
    return this;
  }

  // Divide by scalar
  divideScalar(s) {
    if (s !== 0) return this.multiplyScalar(1 / s);
    console.warn("Vector3.divideScalar: division by zero");
    return this.clone();
  }

  // Dot product
  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  // Cross product
  cross(v) {
    return new Vector3(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  // Cross product in-place
  crossInPlace(v) {
    const x = this.x, y = this.y, z = this.z;
    this.x = y * v.z - z * v.y;
    this.y = z * v.x - x * v.z;
    this.z = x * v.y - y * v.x;
    return this;
  }

  // Length / magnitude
  length() {
    return Math.hypot(this.x, this.y, this.z);
  }

  // Normalize
  normalize() {
    const l = this.length() || 1;
    this.x /= l; this.y /= l; this.z /= l;
    return this;
  }

  // Linear interpolation
  lerp(v, t) {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    this.z += (v.z - this.z) * t;
    return this;
  }

  // Convert to array
  toArray() {
    return [this.x, this.y, this.z];
  }

  // Load from array
  fromArray(arr) {
    this.x = arr[0] || 0;
    this.y = arr[1] || 0;
    this.z = arr[2] || 0;
    return this;
  }

  // String representation
  toString() {
    return `Vector3(${this.x}, ${this.y}, ${this.z})`;
  }
}
