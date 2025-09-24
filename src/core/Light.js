import { Object3D } from './Object3D.js';

export class Light extends Object3D {
  constructor(color = 0xffffff, intensity = 1) {
    super();
    this.color = color;
    this.intensity = intensity;
    this.type = 'Light';
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setIntensity(intensity) {
    this.intensity = intensity;
    return this;
  }

  clone() {
    return new Light(this.color, this.intensity);
  }
}

// Turunan GLAZE:
export class DirectionalLight extends Light {}
export class PointLight extends Light {}
export class SpotLight extends Light {}
export class AmbientLight extends Light {}
export class HemisphericLight extends Light {} // tambahan dari Babylon.js
