export class Box3 {
  constructor(min = new Vector3(), max = new Vector3()) {
    this.min = min;
    this.max = max;
  }

  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }

  clone() {
    return new Box3(this.min.clone(), this.max.clone());
  }

  containsPoint(point) {
    return point.x >= this.min.x && point.x <= this.max.x &&
           point.y >= this.min.y && point.y <= this.max.y &&
           point.z >= this.min.z && point.z <= this.max.z;
  }
}
