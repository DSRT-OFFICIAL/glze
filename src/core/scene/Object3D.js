// src/core/Object3D.js
import { Matrix4 } from './math/Matrix4.js';
import { Vector3 } from './math/Vector3.js';
import { Quaternion } from './math/Quaternion.js';
import { Euler } from './math/Euler.js';

export class Object3D {
  constructor() {
    this.id = Object3D._id++;
    this.name = '';
    this.type = 'Object3D';

    this.position = new Vector3();
    this.rotation = new Euler();
    this.quaternion = new Quaternion();
    this.scale = new Vector3(1,1,1);

    this.matrix = new Matrix4();
    this.matrixWorld = new Matrix4();

    this.children = [];
    this.parent = null;

    this.matrixAutoUpdate = true;
    this.visible = true;

    this.isObject3D = true;

    // tambahan GLAZE: untuk tagging dan kategori
    this.tags = new Set();
  }

  add(object) {
    if(object.parent) object.parent.remove(object);
    object.parent = this;
    this.children.push(object);
  }

  remove(object) {
    const index = this.children.indexOf(object);
    if(index !== -1) {
      object.parent = null;
      this.children.splice(index,1);
    }
  }

  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
  }

  updateMatrixWorld(force=false) {
    this.updateMatrix();
    if(this.parent===null) this.matrixWorld.copy(this.matrix);
    else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);

    for(const child of this.children) {
      child.updateMatrixWorld(force);
    }
  }

  traverse(callback) {
    callback(this);
    for(const child of this.children) child.traverse(callback);
  }

  clone() {
    const cloned = new Object3D();
    cloned.position.copy(this.position);
    cloned.rotation.copy(this.rotation);
    cloned.quaternion.copy(this.quaternion);
    cloned.scale.copy(this.scale);
    cloned.children = this.children.map(c => c.clone());
    return cloned;
  }
}
Object3D._id = 0;
