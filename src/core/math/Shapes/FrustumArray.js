export class FrustumArray {
  constructor() {
    this.frustums = [];
  }

  add(frustum) {
    this.frustums.push(frustum);
    return this;
  }

  clone() {
    const newArr = new FrustumArray();
    this.frustums.forEach(f => newArr.add(f.clone()));
    return newArr;
  }
}
