// core/math/Shapes/SphericalHarmonics3.js
class SphericalHarmonics3 {
    constructor() {
        this.coefficients = [];
        for (let i = 0; i < 9; i++) this.coefficients.push([0,0,0]); // RGB triplets
    }

    setCoefficient(index, r, g, b) {
        if (index < 0 || index > 8) throw new Error('Index out of range');
        this.coefficients[index][0] = r;
        this.coefficients[index][1] = g;
        this.coefficients[index][2] = b;
        return this;
    }

    getCoefficient(index) {
        if (index < 0 || index > 8) throw new Error('Index out of range');
        return this.coefficients[index];
    }

    clone() {
        const sh = new SphericalHarmonics3();
        for (let i = 0; i < 9; i++) sh.coefficients[i] = [...this.coefficients[i]];
        return sh;
    }

    copy(sh) {
        for (let i = 0; i < 9; i++) this.coefficients[i] = [...sh.coefficients[i]];
        return this;
    }
}

export { SphericalHarmonics3 };
