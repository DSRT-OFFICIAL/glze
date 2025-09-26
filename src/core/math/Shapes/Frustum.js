export class Frustum {
  constructor(planes = []) {
    this.planes = planes; // array of Plane
  }

  setFromMatrix(m) {
    // implementasi sederhana mirip three.js
    const planes = [];
    for (let i = 0; i < 6; i++) planes[i] = new Plane();
    this.planes = planes;
    return this;
  }
}
