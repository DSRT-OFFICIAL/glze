import { Object3D } from './Object3D.js';
import { Matrix4 } from '../math/Matrix4.js';

export class Camera extends Object3D {
  constructor(fov=60, aspect=1, near=0.1, far=1000) {
    super();
    this.type = 'Camera';
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;

    this.projectionMatrix = new Matrix4();
    this.viewMatrix = new Matrix4();
    this.matrixWorldInverse = new Matrix4();

    this.updateProjection();
  }

  /** Update projection matrix (perspective) */
  updateProjection() {
    const f = 1.0 / Math.tan((this.fov * Math.PI) / 360);
    const nf = 1 / (this.near - this.far);
    const e = this.projectionMatrix.elements;

    e[0] = f / this.aspect; e[1] = 0; e[2] = 0; e[3] = 0;
    e[4] = 0; e[5] = f; e[6] = 0; e[7] = 0;
    e[8] = 0; e[9] = 0; e[10] = (this.far + this.near) * nf; e[11] = -1;
    e[12] = 0; e[13] = 0; e[14] = (2 * this.far * this.near) * nf; e[15] = 0;
  }

  /** Update view matrix based on world matrix */
  updateViewMatrix() {
    this.updateMatrix();
    this.matrixWorldInverse = this.matrix.clone().invert();
    this.viewMatrix = this.matrixWorldInverse.clone();
  }

  /** Set aspect ratio and recalc projection */
  setAspect(aspect) {
    this.aspect = aspect;
    this.updateProjection();
  }
}
