import { Object3D } from './Object3D.js';

export class Scene extends Object3D {
  constructor() {
    super();
    this.type = 'Scene';
    this.background = null;      // bisa warna atau texture
    this.fog = null;             // fog parameters
    this.autoUpdate = true;      // auto update matrices
    this.overrideMaterial = null;// jika semua mesh pakai material sama
    this.children = [];          // list Object3D
  }

  /** Override add untuk memastikan parent-child */
  add(child) {
    super.add(child);
    return this;
  }

  remove(child) {
    super.remove(child);
    return this;
  }

  /** Update matrices semua anak */
  updateMatrixWorld(force=false) {
    if (this.autoUpdate || force) {
      this.updateMatrix();
      for (const child of this.children) {
        child.updateWorldMatrix(this.worldMatrix);
      }
    }
  }

  /** Traverse semua anak, termasuk nested */
  traverse(callback) {
    callback(this);
    for (const child of this.children) {
      child.traverse(callback);
    }
  }

  /** Find object by name */
  getObjectByName(name) {
    let result = null;
    this.traverse(obj => {
      if (obj.name === name) result = obj;
    });
    return result;
  }
}
