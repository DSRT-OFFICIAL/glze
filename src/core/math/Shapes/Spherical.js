// core/math/Shapes/Spherical.js
import { Vector3 } from '../Vector3.js';

class Spherical {
    constructor(radius = 1, phi = 0, theta = 0) {
        this.radius = radius; // distance from origin
        this.phi = phi;       // polar angle from y-axis
        this.theta = theta;   // azimuthal angle from z-axis
    }

    set(radius, phi, theta) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
        return this;
    }

    clone() {
        return new Spherical(this.radius, this.phi, this.theta);
    }

    copy(spherical) {
        this.radius = spherical.radius;
        this.phi = spherical.phi;
        this.theta = spherical.theta;
        return this;
    }

    setFromVector3(v) {
        this.radius = v.length();
        if (this.radius === 0) {
            this.theta = 0;
            this.phi = 0;
        } else {
            this.theta = Math.atan2(v.x, v.z);
            this.phi = Math.acos(Math.min(Math.max(v.y / this.radius, -1), 1));
        }
        return this;
    }

    toVector3(target = new Vector3()) {
        const sinPhiRadius = Math.sin(this.phi) * this.radius;
        target.x = sinPhiRadius * Math.sin(this.theta);
        target.y = Math.cos(this.phi) * this.radius;
        target.z = sinPhiRadius * Math.cos(this.theta);
        return target;
    }

    toString() {
        return `Spherical(radius: ${this.radius}, phi: ${this.phi}, theta: ${this.theta})`;
    }
}

export { Spherical };
