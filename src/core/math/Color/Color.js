export class Color {

    constructor(value = 0x000000) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1.0; // alpha default
        if (value instanceof Color) {
            this.copy(value);
        } else if (typeof value === 'number') {
            this.setHex(value);
        } else if (typeof value === 'string') {
            this.setStyle(value);
        }
    }

    // ----- Setters -----
    setRGB(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }

    setRGBA(r, g, b, a) {
        this.setRGB(r, g, b);
        this.a = a;
        return this;
    }

    setHex(hex) {
        this.r = ((hex >> 16) & 255) / 255;
        this.g = ((hex >> 8) & 255) / 255;
        this.b = (hex & 255) / 255;
        return this;
    }

    setHSL(h, s, l) {
        // Convert HSL to RGB
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r1, g1, b1;

        if (h < 60) [r1, g1, b1] = [c, x, 0];
        else if (h < 120) [r1, g1, b1] = [x, c, 0];
        else if (h < 180) [r1, g1, b1] = [0, c, x];
        else if (h < 240) [r1, g1, b1] = [0, x, c];
        else if (h < 300) [r1, g1, b1] = [x, 0, c];
        else [r1, g1, b1] = [c, 0, x];

        this.r = r1 + m;
        this.g = g1 + m;
        this.b = b1 + m;

        return this;
    }

    setStyle(style) {
        if (BasicColors[style]) return this.copy(BasicColors[style]);
        if (ExtendedColors[style]) return this.copy(ExtendedColors[style]);
        // fallback hitam
        return this.setHex(0x000000);
    }

    // ----- Getters -----
    getHex() {
        return ((this.r * 255) << 16) | ((this.g * 255) << 8) | (this.b * 255);
    }

    getRGB() {
        return { r: this.r, g: this.g, b: this.b };
    }

    getRGBA() {
        return { r: this.r, g: this.g, b: this.b, a: this.a };
    }

    getHSL() {
        const max = Math.max(this.r, this.g, this.b);
        const min = Math.min(this.r, this.g, this.b);
        let h, s;
        const l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case this.r: h = ((this.g - this.b) / d + (this.g < this.b ? 6 : 0)) * 60; break;
                case this.g: h = ((this.b - this.r) / d + 2) * 60; break;
                case this.b: h = ((this.r - this.g) / d + 4) * 60; break;
            }
        }

        return { h, s, l };
    }

    // ----- Operations -----
    clone() {
        return new Color(this);
    }

    copy(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        this.a = color.a;
        return this;
    }

    lerp(color, alpha) {
        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;
        this.a += (color.a - this.a) * alpha;
        return this;
    }

    mix(color, alpha) {
        return this.lerp(color, alpha);
    }

    add(color) {
        this.r = Math.min(1, this.r + color.r);
        this.g = Math.min(1, this.g + color.g);
        this.b = Math.min(1, this.b + color.b);
        return this;
    }

    multiply(color) {
        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;
        return this;
    }

    invert() {
        this.r = 1 - this.r;
        this.g = 1 - this.g;
        this.b = 1 - this.b;
        return this;
    }
}
