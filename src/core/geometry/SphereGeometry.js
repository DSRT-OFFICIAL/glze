import { Geometry } from '../render/Geometry.js';
import { MathUtils } from '../math/MathUtils.js';

export class SphereGeometry extends Geometry {
  constructor(radius=1, widthSegments=16, heightSegments=12){
    const positions=[], normals=[], indices=[];

    for(let y=0;y<=heightSegments;y++){
      const v = y/heightSegments;
      const phi = v * Math.PI;
      for(let x=0;x<=widthSegments;x++){
        const u = x/widthSegments;
        const theta = u * Math.PI*2;

        const px = -radius*Math.cos(theta)*Math.sin(phi);
        const py = radius*Math.cos(phi);
        const pz = radius*Math.sin(theta)*Math.sin(phi);

        positions.push(px,py,pz);
        const len = Math.hypot(px,py,pz)||1;
        normals.push(px/len, py/len, pz/len);
      }
    }

    for(let y=0;y<heightSegments;y++){
      for(let x=0;x<widthSegments;x++){
        const a = y*(widthSegments+1)+x;
        const b = a+widthSegments+1;
        indices.push(a,b,a+1, b,b+1,a+1);
      }
    }

    super({positions,normals,indices});
  }
}
