import { Vector3 } from '../math/Vector3.js';
import { Quaternion } from '../math/Quaternion.js';
import { Matrix4 } from '../math/Matrix4.js';

export class Object3D {
  constructor(){
    this.position = new Vector3(0,0,0);
    this.rotation = new Quaternion();
    this.scale = new Vector3(1,1,1);

    this.children = [];
    this.parent = null;

    this.matrix = new Matrix4();
    this.worldMatrix = new Matrix4();

    this.visible = true;
    this.name = '';
  }

  add(child){
    if(child.parent) child.parent.remove(child);
    child.parent = this;
    this.children.push(child);
    return this;
  }

  remove(child){
    const i = this.children.indexOf(child);
    if(i!==-1){ this.children.splice(i,1); child.parent=null; }
    return this;
  }

  updateMatrix(){
    const T = new Matrix4().makeTranslation(this.position.x,this.position.y,this.position.z);
    const R = new Matrix4().makeRotationFromQuaternion(this.rotation);
    const S = new Matrix4().makeScale(this.scale.x,this.scale.y,this.scale.z);
    this.matrix = T.clone().multiply(R).multiply(S);
    return this;
  }

  updateWorldMatrix(parentWorld){
    this.updateMatrix();
    if(parentWorld){
      this.worldMatrix = parentWorld.clone().multiply(this.matrix);
    } else {
      this.worldMatrix = this.matrix.clone();
    }
    for(const c of this.children) c.updateWorldMatrix(this.worldMatrix);
  }
}
