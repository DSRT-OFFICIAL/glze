// glze/src/core/math/Date.js

export function now() {
    return Date.now();
}

export function getTime() {
    return new Date().getTime();
}

export function formatDate(date = new Date(), locale = 'en-US') {
    return date.toLocaleString(locale);
}

export function formatTime(date = new Date(), locale = 'en-US') {
    return date.toLocaleTimeString(locale);
}

export function formatISO(date = new Date()) {
    return date.toISOString();
}
