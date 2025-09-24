// src/core/math/MathUtils.js
export class MathUtils {

  static DEG2RAD = Math.PI / 180;
  static RAD2DEG = 180 / Math.PI;

  static clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  static lerp(a, b, t) { return a + (b - a) * t; }

  static mapLinear(x, a1, a2, b1, b2) { return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1); }

  static degToRad(degrees) { return degrees * MathUtils.DEG2RAD; }

  static radToDeg(radians) { return radians * MathUtils.RAD2DEG; }

  static randomFloat(min, max) { return min + Math.random() * (max - min); }

  static randomInt(min, max) { return Math.floor(MathUtils.randomFloat(min, max+1)); }

  static smoothstep(x, min, max) {
    x = MathUtils.clamp((x - min) / (max - min), 0, 1);
    return x * x * (3 - 2 * x);
  }

}
