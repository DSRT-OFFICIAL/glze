import { Matrix4 } from './Matrix4.js';
import { Quaternion } from './Quaternion.js';
import { Euler } from './Euler.js';
import { Vector3 } from './Vector3.js';

export class TransformUtils {

  /** Compose a Matrix4 from position, quaternion rotation, scale */
  static compose(position, quaternion, scale) {
    const m = new Matrix4();

    // Translation
    const T = new Matrix4().makeTranslation(position.x, position.y, position.z);
    // Rotation
    const R = new Matrix4().makeRotationFromQuaternion(quaternion);
    // Scale
    const S = new Matrix4().makeScale(scale.x, scale.y, scale.z);

    return T.clone().multiply(R).multiply(S);
  }

  /** Decompose Matrix4 into position, quaternion, scale */
  static decompose(matrix) {
    const te = matrix.elements;

    // Extract position
    const position = new Vector3(te[12], te[13], te[14]);

    // Extract scale
    const sx = new Vector3(te[0], te[1], te[2]).length();
    const sy = new Vector3(te[4], te[5], te[6]).length();
    const sz = new Vector3(te[8], te[9], te[10]).length();
    const scale = new Vector3(sx, sy, sz);

    // Extract rotation
    const m = new Matrix4().clone(matrix);
    m.elements[0] /= sx; m.elements[1] /= sx; m.elements[2] /= sx;
    m.elements[4] /= sy; m.elements[5] /= sy; m.elements[6] /= sy;
    m.elements[8] /= sz; m.elements[9] /= sz; m.elements[10] /= sz;

    const quaternion = new Quaternion();
    quaternion.setFromMatrix4(m);

    return { position, quaternion, scale };
  }

  /** LookAt utility: compute quaternion to look at target from position */
  static lookAt(position, target, up = new Vector3(0,1,0)) {
    const z = new Vector3().copy(position).subtract(target).normalize();
    const x = new Vector3().copy(up).cross(z).normalize();
    const y = new Vector3().copy(z).cross(x);

    const m = new Matrix4();
    const e = m.elements;
    e[0]=x.x; e[4]=y.x; e[8]=z.x;  e[12]=position.x;
    e[1]=x.y; e[5]=y.y; e[9]=z.y;  e[13]=position.y;
    e[2]=x.z; e[6]=y.z; e[10]=z.z; e[14]=position.z;
    e[3]=0;   e[7]=0;   e[11]=0;    e[15]=1;

    const q = new Quaternion();
    q.setFromMatrix4(m);
    return q;
  }

      }
