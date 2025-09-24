// src/core/scene/Scene.js
import { Object3D } from './Object3D.js';

export class Scene extends Object3D {
  constructor() {
    super();
    this.name = 'Scene';
    this.backgroundColor = [0,0,0,1];
    this.lights = [];
    this.meshes = [];
    this.cameras = [];
  }

  add(object) {
    super.add(object);
    if(object.type === 'Mesh') this.meshes.push(object);
    if(object.type === 'Camera') this.cameras.push(object);
    if(object.type === 'Light') this.lights.push(object);
    return this;
  }

  remove(object) {
    super.remove(object);
    if(object.type === 'Mesh') this.meshes = this.meshes.filter(m=>m!==object);
    if(object.type === 'Camera') this.cameras = this.cameras.filter(c=>c!==object);
    if(object.type === 'Light') this.lights = this.lights.filter(l=>l!==object);
    return this;
  }
}
