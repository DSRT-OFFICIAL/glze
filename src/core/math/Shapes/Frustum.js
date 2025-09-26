export class Frustum {
  constructor(planes = []) {
    this.planes = planes; // array of Plane
  }

  setFromMatrix(m) {
    // implementasi sederhana
    const planes = [];
    for (let i = 0; i < 6; i++) planes[i] = new Plane();
    this.planes = planes;
    return this;
  }
}
