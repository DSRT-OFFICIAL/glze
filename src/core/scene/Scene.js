// src/core/Scene.js
import { Object3D } from './Object3D.js';

export class Scene extends Object3D {
  constructor() {
    super();
    this.type = 'Scene';
    this.background = null;
    this.environment = null;
    this.fog = null;
    this.overrideMaterial = null;
    this.autoUpdate = true;
    this.matrixWorldNeedsUpdate = false;

    // Tambahan GLAZE: menyimpan semua mesh, camera, dan light
    this.meshes = [];
    this.cameras = [];
    this.lights = [];
    this.activeCamera = null;
  }

  add(object) {
    super.add(object);
    if(object.isMesh) this.meshes.push(object);
    if(object.isLight) this.lights.push(object);
    if(object.isCamera) this.cameras.push(object);
  }

  setActiveCamera(camera) {
    if(this.cameras.includes(camera)) this.activeCamera = camera;
  }

  render(renderer) {
    if(this.background) renderer.clear(this.background);
    if(this.activeCamera) {
      for(const mesh of this.meshes) {
        renderer.renderMesh(mesh, this.activeCamera);
      }
    }
  }

  copy(source, recursive = true) {
    super.copy(source, recursive);
    this.background = source.background;
    this.environment = source.environment;
    this.fog = source.fog;
    this.overrideMaterial = source.overrideMaterial;
    this.meshes = [...source.meshes];
    this.cameras = [...source.cameras];
    this.lights = [...source.lights];
    this.activeCamera = source.activeCamera;
    return this;
  }
}
