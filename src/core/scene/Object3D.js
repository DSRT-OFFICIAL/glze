export class Object3D {
    constructor(name='') {
        this.name = name;
        this.position = { x:0, y:0, z:0 };
        this.rotation = { x:0, y:0, z:0 };
        this.scale = { x:1, y:1, z:1 };
        this.parent = null;
        this.children = [];
        this.matrix = null;
        this.matrixWorld = null;
        this.visible = true;
        this.userData = {};
        this.tags = [];           // tambahan layer/tag system
        this.renderOrder = 0;     // kontrol order rendering
    }

    add(child) {
        this.children.push(child);
        child.parent = this;
    }

    remove(child) {
        const index = this.children.indexOf(child);
        if(index >= 0) this.children.splice(index,1);
        child.parent = null;
    }

    traverse(callback) {
        callback(this);
        this.children.forEach(c => c.traverse(callback));
    }

    updateMatrix() {
        // Advanced: compute local matrix from position, rotation, scale
    }

    updateMatrixWorld(force=false) {
        if(force || !this.matrixWorld) {
            // compute world matrix from parent recursively
        }
        this.children.forEach(c => c.updateMatrixWorld(force));
    }
}
