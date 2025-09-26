export class SphericalHarmonics3 {
  constructor() {
    this.coefficients = Array.from({ length: 9 }, () => new Vector3());
  }

  add(sh) {
    for (let i = 0; i < 9; i++) this.coefficients[i].add(sh.coefficients[i]);
    return this;
  }

  clone() {
    const newSH = new SphericalHarmonics3();
    for (let i = 0; i < 9; i++) newSH.coefficients[i] = this.coefficients[i].clone();
    return newSH;
  }
}
