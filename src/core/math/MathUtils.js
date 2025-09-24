export class MathUtils {

  /** Convert degrees to radians */
  static degToRad(degrees) { return degrees * (Math.PI / 180); }

  /** Convert radians to degrees */
  static radToDeg(radians) { return radians * (180 / Math.PI); }

  /** Clamp value between min and max */
  static clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }

  /** Linear interpolation between a and b */
  static lerp(a, b, t) { return a + (b - a) * t; }

  /** Linear interpolation between angles in radians */
  static lerpAngle(a, b, t) {
    let delta = ((b - a + Math.PI) % (2 * Math.PI)) - Math.PI;
    return a + delta * t;
  }

  /** Map value from one range to another */
  static mapLinear(x, a1, a2, b1, b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
  }

  /** Random float between 0 and 1 */
  static random() { return Math.random(); }

  /** Random float between min and max */
  static randomInRange(min, max) { return min + Math.random() * (max - min); }

  /** Random integer between min and max (inclusive) */
  static randInt(min, max) { return Math.floor(min + Math.random() * (max - min + 1)); }

  /** Check if value is power of 2 */
  static isPowerOfTwo(value) { return (value & (value - 1)) === 0 && value !== 0; }

  /** Next power of 2 greater than or equal to value */
  static ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value)/Math.log(2)));
  }

  /** Smoothstep interpolation */
  static smoothstep(x, min = 0, max = 1) {
    x = MathUtils.clamp((x - min)/(max - min), 0, 1);
    return x*x*(3 - 2*x);
  }

  /** Smootherstep interpolation */
  static smootherstep(x, min = 0, max = 1) {
    x = MathUtils.clamp((x - min)/(max - min), 0, 1);
    return x*x*x*(x*(x*6 - 15) + 10);
  }

}
