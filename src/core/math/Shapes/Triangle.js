export class Triangle {
  constructor(a = new Vector3(), b = new Vector3(), c = new Vector3()) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  set(a, b, c) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(c);
    return this;
  }

  clone() {
    return new Triangle(this.a.clone(), this.b.clone(), this.c.clone());
  }
}
