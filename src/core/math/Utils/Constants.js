// glze/src/core/math/Constants.js

// -------------------------
// Mathematical Constants
// -------------------------
export const EPSILON = 1e-6;
export const ZERO = 0.0;
export const ONE = 1.0;
export const TWO = 2.0;
export const THREE = 3.0;
export const FOUR = 4.0;
export const FIVE = 5.0;
export const SIX = 6.0;
export const SEVEN = 7.0;
export const EIGHT = 8.0;
export const NINE = 9.0;

export const PI = Math.PI;
export const TWO_PI = 2 * Math.PI;
export const HALF_PI = Math.PI / 2;
export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;

export const LN2 = Math.LN2;
export const LN10 = Math.LN10;
export const LOG2E = Math.LOG2E;
export const LOG10E = Math.LOG10E;

export const SQRT2 = Math.SQRT2;
export const SQRT1_2 = Math.SQRT1_2;

// -------------------------
// Utility Functions
// -------------------------
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function lerp(a, b, t) {
    return a + (b - a) * t;
}

export function inverseLerp(a, b, value) {
    return a !== b ? (value - a) / (b - a) : 0;
}

export function mapLinear(x, a1, a2, b1, b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}
