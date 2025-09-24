import { Vector3 } from './Vector3.js';
import { Matrix4 } from './Matrix4.js';

export class Camera {
    constructor(fov=60, aspect=1, near=0.1, far=1000) {
        this.position = new Vector3();
        this.rotation = new Vector3();
        this.up = new Vector3(0,1,0);

        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;

        this.matrix = new Matrix4();
        this.matrixWorld = new Matrix4();
        this.projectionMatrix = new Matrix4();

        this.viewport = { x:0, y:0, width:1, height:1 };
        this.renderTarget = null;
        this.controls = null; // optional OrbitControls or custom
    }

    lookAt(target) {
        // compute rotation from current position to target
    }

    updateProjectionMatrix() {
        const f = 1.0 / Math.tan((this.fov * 0.5) * (Math.PI / 180));
        this.projectionMatrix.elements = [
            f / this.aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (this.far+this.near)/(this.near-this.far), (2*this.far*this.near)/(this.near-this.far),
            0, 0, -1, 0
        ];
    }

    updateMatrixWorld(force=false) {
        // compute world matrix from position, rotation
    }
}
