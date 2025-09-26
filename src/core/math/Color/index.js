import { Color } from './Color.js';
import { BasicColors } from './BasicGlazeColors.js';
import { ExtendedColors } from './ExtendedGlazeColors.js';

// Utility functions
function lerpColors(c1, c2, alpha) {
    return c1.clone().lerp(c2, alpha);
}

function mixColors(c1, c2, alpha) {
    return c1.clone().mix(c2, alpha);
}

function addColors(c1, c2) {
    return c1.clone().add(c2);
}

function multiplyColors(c1, c2) {
    return c1.clone().multiply(c2);
}

function invertColor(c) {
    return c.clone().invert();
}

// Export everything
export {
    Color,
    BasicColors,
    ExtendedColors,
    lerpColors,
    mixColors,
    addColors,
    multiplyColors,
    invertColor
};
