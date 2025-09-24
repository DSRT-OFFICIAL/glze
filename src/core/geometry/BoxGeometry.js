import { Geometry } from '../render/Geometry.js';

export class BoxGeometry extends Geometry {
  constructor(width=1, height=1, depth=1){
    const w = width/2, h = height/2, d = depth/2;

    const positions = [
      -w,-h,-d, w,-h,-d, w,h,-d, -w,h,-d,   // back
      -w,-h,d, w,-h,d, w,h,d, -w,h,d        // front
    ];

    const indices = [
      0,1,2, 2,3,0, 4,5,6, 6,7,4,          // back/front
      3,2,6, 6,7,3, 0,1,5, 5,4,0,          // top/bottom
      1,2,6, 6,5,1, 0,3,7, 7,4,0           // sides
    ];

    const normals = [];
    for(let i=0;i<positions.length;i+=3){
      normals.push(positions[i],positions[i+1],positions[i+2]);
    }

    super({positions,normals,indices});
  }
}
