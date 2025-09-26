// glze/src/core/math/Color/FullColorFactory.js
import { Color } from './Color.js';
import { BasicColors } from './BasicGlazeColors.js';   // ✅ plural
import { ExtendedColors } from './ExtendedGlazeColors.js';

const AllColors = { ...BasicColors, ...ExtendedColors };

/**
 * ColorFactory
 * Menerima berbagai jenis input:
 * - Color instance → clone
 * - Hex string (#rrggbb) → Color dari hex
 * - Nama color (basic/extended) → Color clone
 * - Number → Color dari hex
 */
export function ColorFactory(input) {
    if (input instanceof Color) return input.clone();

    if (typeof input === 'string') {
        if (input.startsWith('#')) {
            const hex = parseInt(input.slice(1), 16);
            if (!isNaN(hex)) {
                const color = new Color();
                color.setHex(hex);
                return color;
            }
        } else {
            const key = input.replace(/\s+/g, '').toLowerCase();
            if (AllColors[key]) return AllColors[key].clone();
        }
        console.warn(`ColorFactory: warna "${input}" tidak ditemukan. Mengembalikan putih.`);
        return new Color(1, 1, 1);
    }

    if (typeof input === 'number') {
        const color = new Color();
        color.setHex(input);
        return color;
    }

    console.warn(`ColorFactory: input "${input}" tidak valid. Mengembalikan putih.`);
    return new Color(1, 1, 1);
}

// Shortcut global
export const ColorShortcut = ColorFactory;

// -------------------------
// Utility functions
// -------------------------
export function lerpColors(c1, c2, alpha) {
    return c1.clone().lerp(c2, alpha);
}

export function mixColors(c1, c2, alpha) {
    return lerpColors(c1, c2, alpha);
}

export function addColors(c1, c2) {
    return c1.clone().add(c2);
}

export function multiplyColors(c1, c2) {
    return c1.clone().multiply(c2);
}

export function invertColor(c) {
    return new Color(1 - c.r, 1 - c.g, 1 - c.b);
}
