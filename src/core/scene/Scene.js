// src/core/scene/Scene.js
import { Object3D } from './Object3D.js';

export class Scene extends Object3D {
  constructor() {
    super();
    this.type = 'Scene';
    this.background = null;
    this.fog = null;
    this.overrideMaterial = null;
    this.autoUpdate = true;
    this.meshes = [];
    this.lights = [];
  }

  add(...objects) {
    objects.forEach(o => {
      super.add(o);
      if(o.isMesh) this.meshes.push(o);
      if(o.isLight) this.lights.push(o);
    });
    return this;
  }

  remove(...objects) {
    objects.forEach(o => {
      super.remove(o);
      if(o.isMesh) this.meshes = this.meshes.filter(m => m!==o);
      if(o.isLight) this.lights = this.lights.filter(l => l!==o);
    });
    return this;
  }
}
