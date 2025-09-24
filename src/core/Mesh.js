import { Object3D } from './Object3D.js';
import { Material } from './Material.js';
import { Geometry } from '../geometry/Geometry.js';

export class Mesh extends Object3D {
  constructor(geometry = new Geometry(), material = new Material()) {
    super();
    this.geometry = geometry;
    this.material = material;
    this.type = 'Mesh';
  }

  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  }

  setMaterial(material) {
    this.material = material;
    return this;
  }

  clone() {
    return new Mesh(this.geometry.clone(), this.material.clone());
  }
  }
