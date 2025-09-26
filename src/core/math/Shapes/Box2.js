export class Box2 {
  constructor(min = new Vector2(), max = new Vector2()) {
    this.min = min;
    this.max = max;
  }

  set(min, max) {
    this.min.copy(min);
    this.max.copy(max);
    return this;
  }

  clone() {
    return new Box2(this.min.clone(), this.max.clone());
  }

  containsPoint(point) {
    return point.x >= this.min.x && point.x <= this.max.x &&
           point.y >= this.min.y && point.y <= this.max.y;
  }
}
