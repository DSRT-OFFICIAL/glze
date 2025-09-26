// glze/src/core/math/Interpolation.js

export function linearInterpolate(a, b, t) {
    return a + (b - a) * t;
}

export function smoothStep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
}

export function cosineInterpolate(a, b, t) {
    const ft = t * Math.PI;
    const f = (1 - Math.cos(ft)) * 0.5;
    return a * (1 - f) + b * f;
}

export function cubicInterpolate(p0, p1, p2, p3, t) {
    const a0 = -0.5*p0 + 1.5*p1 - 1.5*p2 + 0.5*p3;
    const a1 = p0 - 2.5*p1 + 2*p2 - 0.5*p3;
    const a2 = -0.5*p0 + 0.5*p2;
    const a3 = p1;
    return a0*t*t*t + a1*t*t + a2*t + a3;
}
