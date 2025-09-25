// core/math/GlazeMathUtils.js
import { warn } from '../utils.js';

/**
 * Glaze.MathUtils
 * Utility functions for math operations, inspired by Three.js MathUtils
 */

const _lut = [];
for (let i = 0; i < 256; i++) _lut[i] = (i < 16 ? '0' : '') + i.toString(16);

let _seed = 1234567;

const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

/**
 * Generate a RFC4122 version 4 UUID.
 */
function generateUUID() {
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;

    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' +
                 _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' +
                 _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' +
                 _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' +
                 _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] +
                 _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];

    return uuid.toLowerCase();
}

/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Euclidean modulo (always positive)
 */
function euclideanModulo(n, m) {
    return ((n % m) + m) % m;
}

/**
 * Linear mapping from range [a1, a2] to [b1, b2]
 */
function mapLinear(x, a1, a2, b1, b2) {
    return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
}

/**
 * Inverse linear interpolation
 */
function inverseLerp(x, y, value) {
    return (x !== y) ? (value - x) / (y - x) : 0;
}

/**
 * Linear interpolation
 */
function lerp(x, y, t) {
    return (1 - t) * x + t * y;
}

/**
 * Damped interpolation
 */
function damp(x, y, lambda, dt) {
    return lerp(x, y, 1 - Math.exp(-lambda * dt));
}

/**
 * Pingpong function
 */
function pingpong(x, length = 1) {
    return length - Math.abs(euclideanModulo(x, length * 2) - length);
}

/**
 * Smoothstep
 */
function smoothstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * (3 - 2 * x);
}

/**
 * Smootherstep
 */
function smootherstep(x, min, max) {
    if (x <= min) return 0;
    if (x >= max) return 1;
    x = (x - min) / (max - min);
    return x * x * x * (x * (x * 6 - 15) + 10);
}

/**
 * Random integer between low and high (inclusive)
 */
function randInt(low, high) {
    return low + Math.floor(Math.random() * (high - low + 1));
}

/**
 * Random float between low and high
 */
function randFloat(low, high) {
    return low + Math.random() * (high - low);
}

/**
 * Random float spread centered at 0
 */
function randFloatSpread(range) {
    return range * (0.5 - Math.random());
}

/**
 * Seeded pseudo-random
 */
function seededRandom(s) {
    if (s !== undefined) _seed = s;
    let t = _seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

/**
 * Degrees to radians
 */
function degToRad(degrees) { return degrees * DEG2RAD; }

/**
 * Radians to degrees
 */
function radToDeg(radians) { return radians * RAD2DEG; }

/**
 * Check if power of two
 */
function isPowerOfTwo(value) {
    return (value & (value - 1)) === 0 && value !== 0;
}

/**
 * Ceil power of two
 */
function ceilPowerOfTwo(value) {
    return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
}

/**
 * Floor power of two
 */
function floorPowerOfTwo(value) {
    return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
}

/**
 * Set quaternion from proper Euler angles
 */
function setQuaternionFromProperEuler(q, a, b, c, order) {
    const cos = Math.cos, sin = Math.sin;
    const c2 = cos(b / 2), s2 = sin(b / 2);
    const c13 = cos((a + c)/2), s13 = sin((a+c)/2);
    const c1_3 = cos((a - c)/2), s1_3 = sin((a - c)/2);
    const c3_1 = cos((c - a)/2), s3_1 = sin((c - a)/2);

    switch(order){
        case 'XYX': q.set(c2*s13, s2*c1_3, s2*s1_3, c2*c13); break;
        case 'YZY': q.set(s2*s1_3, c2*s13, s2*c1_3, c2*c13); break;
        case 'ZXZ': q.set(s2*c1_3, s2*s1_3, c2*s13, c2*c13); break;
        case 'XZX': q.set(c2*s13, s2*s3_1, s2*c3_1, c2*c13); break;
        case 'YXY': q.set(s2*c3_1, c2*s13, s2*s3_1, c2*c13); break;
        case 'ZYZ': q.set(s2*s3_1, s2*c3_1, c2*s13, c2*c13); break;
        default: warn('Glaze.MathUtils: unknown order: ' + order);
    }
}

/**
 * Normalize value based on array type
 */
function normalize(value, array) {
    switch(array.constructor){
        case Float32Array: return value;
        case Uint32Array: return Math.round(value * 4294967295.0);
        case Uint16Array: return Math.round(value * 65535.0);
        case Uint8Array: return Math.round(value * 255.0);
        case Int32Array: return Math.round(value * 2147483647.0);
        case Int16Array: return Math.round(value * 32767.0);
        case Int8Array: return Math.round(value * 127.0);
        default: throw new Error('Invalid component type.');
    }
}

/**
 * Denormalize value based on array type
 */
function denormalize(value, array) {
    switch(array.constructor){
        case Float32Array: return value;
        case Uint32Array: return value / 4294967295.0;
        case Uint16Array: return value / 65535.0;
        case Uint8Array: return value / 255.0;
        case Int32Array: return Math.max(value / 2147483647.0, -1.0);
        case Int16Array: return Math.max(value / 32767.0, -1.0);
        case Int8Array: return Math.max(value / 127.0, -1.0);
        default: throw new Error('Invalid component type.');
    }
}

export const Glaze = {
    MathUtils: {
        DEG2RAD, RAD2DEG, generateUUID, clamp, euclideanModulo, mapLinear, inverseLerp,
        lerp, damp, pingpong, smoothstep, smootherstep,
        randInt, randFloat, randFloatSpread, seededRandom,
        degToRad, radToDeg, isPowerOfTwo, ceilPowerOfTwo, floorPowerOfTwo,
        setQuaternionFromProperEuler, normalize, denormalize
    }
};
