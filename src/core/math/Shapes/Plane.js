export class Plane {
  constructor(normal = new Vector3(1, 0, 0), constant = 0) {
    this.normal = normal;
    this.constant = constant;
  }

  set(normal, constant) {
    this.normal.copy(normal);
    this.constant = constant;
    return this;
  }

  clone() {
    return new Plane(this.normal.clone(), this.constant);
  }

  distanceToPoint(point) {
    return this.normal.dot(point) + this.constant;
  }
}
