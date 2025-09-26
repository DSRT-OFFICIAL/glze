export class Cylindrical {
  constructor(radius = 1, theta = 0, y = 0) {
    this.radius = radius;
    this.theta = theta;
    this.y = y;
  }

  set(radius, theta, y) {
    this.radius = radius;
    this.theta = theta;
    this.y = y;
    return this;
  }

  clone() {
    return new Cylindrical(this.radius, this.theta, this.y);
  }
}
