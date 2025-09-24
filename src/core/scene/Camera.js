import { Object3D } from './Object3D.js';
import { Matrix4 } from '../math/Matrix4.js';

export class Camera extends Object3D {
  constructor(fov=60, aspect=1, near=0.1, far=1000){
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;

    this.projectionMatrix = new Matrix4();
    this.updateProjection(aspect);
  }

  updateProjection(aspect=this.aspect){
    this.aspect = aspect;
    this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far);
  }

  lookAt(target){
    const m = new Matrix4().lookAt(this.position, target, {x:0,y:1,z:0});
    // extract rotation from matrix
    this.rotation.setFromEuler(Math.atan2(m.elements[6], m.elements[10]), Math.asin(-m.elements[2]), Math.atan2(m.elements[1], m.elements[0]));
  }
}
