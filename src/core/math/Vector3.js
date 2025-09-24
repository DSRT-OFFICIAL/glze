export class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  set(x, y, z) { this.x = x; this.y = y; this.z = z; return this }
  add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this }
  sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this }
  multiplyScalar(s) { this.x *= s; this.y *= s; this.z *= s; return this }
  length() { return Math.hypot(this.x, this.y, this.z) }
  normalize() {
    const l = this.length()
    if (l > 0) this.multiplyScalar(1 / l)
    return this
  }
  clone() { return new Vector3(this.x, this.y, this.z) }
}
