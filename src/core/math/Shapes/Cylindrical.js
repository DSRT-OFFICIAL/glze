// core/math/Shapes/Cylindrical.js
class Cylindrical {
    constructor(radius = 1, theta = 0, y = 0) {
        this.radius = radius;
        this.theta = theta; // angle around y-axis
        this.y = y;
    }

    set(radius, theta, y) {
        this.radius = radius;
        this.theta = theta;
        this.y = y;
        return this;
    }

    clone() {
        return new Cylindrical().copy(this);
    }

    copy(cylindrical) {
        this.radius = cylindrical.radius;
        this.theta = cylindrical.theta;
        this.y = cylindrical.y;
        return this;
    }
}

export { Cylindrical };
