// src/core/Camera.js
import { Object3D } from './Object3D.js';
import { Matrix4 } from './math/Matrix4.js';

export class Camera extends Object3D {
  constructor(fov=60, aspect=1, near=0.1, far=1000) {
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;

    this.projectionMatrix = new Matrix4();
    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    const top = this.near * Math.tan(0.5 * this.fov * Math.PI/180);
    const height = 2 * top;
    const width = this.aspect * height;
    const left = -0.5 * width;
    const right = 0.5 * width;
    const bottom = -0.5 * height;

    this.projectionMatrix.makePerspective(left, right, top, bottom, this.near, this.far);
  }

  lookAt(target) {
    // Membuat view matrix sederhana
    const z = this.position.clone().subtract(target).normalize();
    const x = new Vector3(0,1,0).cross(z).normalize();
    const y = z.clone().cross(x);
    this.matrixWorld.setBasis(x,y,z,this.position);
  }
}
