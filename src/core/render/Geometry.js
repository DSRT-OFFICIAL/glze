export class Geometry {
  constructor({ positions=[], normals=[], indices=[] }={}){
    this.positions = positions;
    this.normals = normals;
    this.indices = indices;

    this.positionBuffer = null;
    this.normalBuffer = null;
    this.indexBuffer = null;
  }

  bind(gl, shader){
    if(!this.positionBuffer){
      this.positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.positions), gl.STATIC_DRAW);
    }

    if(!this.normalBuffer){
      this.normalBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.normals), gl.STATIC_DRAW);
    }

    if(!this.indexBuffer && this.indices.length>0){
      this.indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), gl.STATIC_DRAW);
    }

    // bind attributes
    const posLoc = gl.getAttribLocation(shader.program,'aPosition');
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc,3,gl.FLOAT,false,0,0);

    const normalLoc = gl.getAttribLocation(shader.program,'aNormal');
    gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
    gl.enableVertexAttribArray(normalLoc);
    gl.vertexAttribPointer(normalLoc,3,gl.FLOAT,false,0,0);
  }

  draw(gl){
    if(this.indexBuffer && this.indices.length>0){
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT,0);
    } else {
      gl.drawArrays(gl.TRIANGLES,0,this.positions.length/3);
    }
  }
}
