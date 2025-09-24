import { Object3D } from './Object3D.js';

export class Scene extends Object3D {
  constructor(){
    super();
    this.background = null; // can be color or texture
    this.fog = null;
  }
}
