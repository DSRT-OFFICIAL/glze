import { Geometry } from '../render/Geometry.js';

export class PlaneGeometry extends Geometry {
  constructor(width=1,height=1){
    const w = width/2, h = height/2;
    const positions = [
      -w,0,-h,  w,0,-h,  w,0,h,  -w,0,h
    ];
    const indices = [0,1,2, 2,3,0];
    const normals = [0,1,0, 0,1,0, 0,1,0, 0,1,0];
    super({positions,normals,indices});
  }
}
