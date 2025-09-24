import { Object3D } from '../core/Object3D.js';

export class Scene extends Object3D {
    constructor() {
        super();
        this.background = null;           // Color, Texture, CubeTexture
        this.fog = null;                  // Fog
        this.overrideMaterial = null;
        this.autoUpdate = true;
        this.matrixWorldAutoUpdate = true;
        this.lights = [];
        this.renderQueue = [];
        this.userData = {};               // Additional custom properties
    }

    addLight(light) {
        this.lights.push(light);
    }

    addToRenderQueue(obj) {
        this.renderQueue.push(obj);
    }

    removeFromRenderQueue(obj) {
        const index = this.renderQueue.indexOf(obj);
        if(index >= 0) this.renderQueue.splice(index, 1);
    }

    copy(source, recursive = true) {
        super.copy(source, recursive);
        this.background = source.background;
        this.fog = source.fog;
        this.overrideMaterial = source.overrideMaterial;
        this.lights = [...source.lights];
        this.renderQueue = [...source.renderQueue];
        this.userData = { ...source.userData };
        return this;
    }
}
