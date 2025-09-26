// Utility math functions
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

export function euclideanModulo(n, m) {
    return ((n % m) + m) % m;
}

export function mapLinear(x, a1, a2, b1, b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

export function inverseLerp(a, b, value) {
    return a !== b ? (value - a) / (b - a) : 0;
}
