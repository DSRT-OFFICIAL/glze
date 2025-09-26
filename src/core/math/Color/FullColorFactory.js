// glze/src/core/math/Color/FullColorFactory.js
import { Color } from './Color.js';
import { BasicColors } from './BasicGlazeColor.js';
import { ExtendedColors } from './ExtendedGlazeColors.js';

const AllColors = { ...BasicColors, ...ExtendedColors };

export function ColorFactory(input) {
    if (input instanceof Color) return input.clone();

    if (typeof input === 'string') {
        if (input.startsWith('#')) {
            const color = new Color();
            color.setHex(parseInt(input.slice(1), 16));
            return color;
        } else {
            const key = input.replace(/\s+/g, '').toLowerCase();
            if (AllColors[key]) return AllColors[key].clone();
            console.warn(`ColorFactory: warna "${input}" tidak ditemukan. Mengembalikan putih.`);
            return new Color(1, 1, 1);
        }
    } else if (typeof input === 'number') {
        const color = new Color();
        color.setHex(input);
        return color;
    } else {
        console.warn(`ColorFactory: input "${input}" tidak valid. Mengembalikan putih.`);
        return new Color(1, 1, 1);
    }
}

// Shortcut global
export const ColorShortcut = ColorFactory;
