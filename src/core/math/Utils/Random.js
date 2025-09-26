// glze/src/core/math/Random.js

let _seed = 123456789;

export function seed(s) {
    _seed = s % 2147483647;
    if (_seed <= 0) _seed += 2147483646;
}

export function random() {
    _seed = (_seed * 16807) % 2147483647;
    return (_seed - 1) / 2147483646;
}

export function randomRange(min, max) {
    return min + (max - min) * random();
}

export function randomInt(min, max) {
    return Math.floor(randomRange(min, max + 1));
}

export function randomChoice(array) {
    return array[randomInt(0, array.length - 1)];
}
