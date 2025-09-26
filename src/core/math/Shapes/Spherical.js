// core/math/Shapes/Spherical.js
class Spherical {
    constructor(radius = 1, phi = 0, theta = 0) {
        this.radius = radius;
        this.phi = phi;   // polar angle from y-axis
        this.theta = theta; // azimuthal angle from z-axis
    }

    set(radius, phi, theta) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
        return this;
    }

    clone() {
        return new Spherical().copy(this);
    }

    copy(spherical) {
        this.radius = spherical.radius;
        this.phi = spherical.phi;
        this.theta = spherical.theta;
        return this;
    }
}

export { Spherical };
