import { EPSILON } from './Constants.js';

export function wrap(value, min, max) {
    const range = max - min;
    return ((value - min) % range + range) % range + min;
}

export function almostEqual(a, b, epsilon = EPSILON) {
    return Math.abs(a - b) < epsilon;
}
