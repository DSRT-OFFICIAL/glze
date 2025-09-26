export class Sphere {
  constructor(center = new Vector3(), radius = 1) {
    this.center = center;
    this.radius = radius;
  }

  set(center, radius) {
    this.center.copy(center);
    this.radius = radius;
    return this;
  }

  clone() {
    return new Sphere(this.center.clone(), this.radius);
  }

  containsPoint(point) {
    return this.center.distanceTo(point) <= this.radius;
  }
}
