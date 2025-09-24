import { Vector3 } from './Vector3.js';
import { Matrix4 } from './Matrix4.js';

export const TransformUtils = {

  lookAtMatrix: function(position, target, up=new Vector3(0,1,0)){
    const z = new Vector3().copy(position).subtract(target).normalize();
    const x = new Vector3().copy(up).cross(z).normalize();
    const y = new Vector3().copy(z).cross(x).normalize();

    const m = new Matrix4();
    const e = m.elements;

    e[0]=x.x; e[4]=y.x; e[8]=z.x; e[12]=position.x;
    e[1]=x.y; e[5]=y.y; e[9]=z.y; e[13]=position.y;
    e[2]=x.z; e[6]=y.z; e[10]=z.z; e[14]=position.z;
    e[3]=0; e[7]=0; e[11]=0; e[15]=1;

    return m;
  },

  rotateAroundPoint: function(objMatrix, point, axis, angle){
    // translate to origin
    const translation1 = new Matrix4().makeTranslation(-point.x, -point.y, -point.z);
    const rotation = new Matrix4();
    if(axis==='x') rotation.makeRotationX(angle);
    else if(axis==='y') rotation.makeRotationY(angle);
    else if(axis==='z') rotation.makeRotationZ(angle);
    const translation2 = new Matrix4().makeTranslation(point.x, point.y, point.z);

    return translation2.clone().multiply(rotation).multiply(translation1).multiply(objMatrix);
  }
};
