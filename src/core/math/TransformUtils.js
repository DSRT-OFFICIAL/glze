// src/core/math/TransformUtils.js
import { Matrix4 } from './Matrix4.js';
import { Quaternion } from './Quaternion.js';
import { Vector3 } from './Vector3.js';

export class TransformUtils {

  static compose(position, quaternion, scale) {
    const T = new Matrix4().makeTranslation(position.x, position.y, position.z);
    const R = new Matrix4().makeRotationFromQuaternion(quaternion);
    const S = new Matrix4().makeScale(scale.x, scale.y, scale.z);
    return T.clone().multiply(R).multiply(S);
  }

  static decompose(matrix) {
    const te = matrix.elements;
    const position = new Vector3(te[12], te[13], te[14]);
    const sx = Math.hypot(te[0], te[1], te[2]);
    const sy = Math.hypot(te[4], te[5], te[6]);
    const sz = Math.hypot(te[8], te[9], te[10]);
    const scale = new Vector3(sx, sy, sz);

    const m = matrix.clone();
    m.elements[0]/=sx; m.elements[1]/=sx; m.elements[2]/=sx;
    m.elements[4]/=sy; m.elements[5]/=sy; m.elements[6]/=sy;
    m.elements[8]/=sz; m.elements[9]/=sz; m.elements[10]/=sz;

    const quaternion = new Quaternion().setFromRotationMatrix(m);
    return { position, quaternion, scale };
  }

  static TRS(position, rotationEuler, scale) {
    const q = new Quaternion().setFromEuler(rotationEuler.x, rotationEuler.y, rotationEuler.z);
    return TransformUtils.compose(position, q, scale);
  }

}
