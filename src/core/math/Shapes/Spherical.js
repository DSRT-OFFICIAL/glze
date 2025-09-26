export class Spherical {
  constructor(radius = 1, phi = 0, theta = 0) {
    this.radius = radius;
    this.phi = phi;     // polar angle
    this.theta = theta; // azimuthal angle
  }

  set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this;
  }

  clone() {
    return new Spherical(this.radius, this.phi, this.theta);
  }
}
