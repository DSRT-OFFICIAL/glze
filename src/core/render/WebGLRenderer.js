import { Matrix3 } from '../math/Matrix3.js';

export class WebGLRenderer {
  constructor(canvas){
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if(!this.gl) throw new Error('WebGL not supported');

    this.clearColor = [0,0,0,1];
    this.gl.enable(this.gl.DEPTH_TEST);

    this.programCache = new Map();
  }

  setClearColor(r,g,b,a=1){
    this.clearColor = [r,g,b,a];
    this.gl.clearColor(r,g,b,a);
  }

  render(scene, camera){
    const gl = this.gl;
    gl.viewport(0,0,this.canvas.width,this.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    scene.updateWorldMatrix();

    for(const child of scene.children){
      this.renderObject(child, camera);
    }
  }

  renderObject(object, camera){
    if(!object.visible) return;

    // assume object has geometry + material
    if(object.geometry && object.material){
      const gl = this.gl;
      const shader = this.getProgram(object.material);
      gl.useProgram(shader.program);

      // set uniforms
      const uModel = gl.getUniformLocation(shader.program,'uModel');
      const uView = gl.getUniformLocation(shader.program,'uView');
      const uProjection = gl.getUniformLocation(shader.program,'uProjection');

      gl.uniformMatrix4fv(uModel,false,object.worldMatrix.elements);
      gl.uniformMatrix4fv(uView,false,camera.worldMatrix.elements);
      gl.uniformMatrix4fv(uProjection,false,camera.projectionMatrix.elements);

      // normal matrix
      if(object.geometry.normalBuffer){
        const normalMatrix = new Matrix3().getNormalMatrix(object.worldMatrix);
        const uNormal = gl.getUniformLocation(shader.program,'uNormalMatrix');
        gl.uniformMatrix3fv(uNormal,false,normalMatrix.elements);
      }

      // bind buffers & draw
      object.geometry.bind(gl, shader);
      object.geometry.draw(gl);
    }

    // render children recursively
    for(const c of object.children){
      this.renderObject(c, camera);
    }
  }

  getProgram(material){
    if(this.programCache.has(material)){
      return this.programCache.get(material);
    }

    const gl = this.gl;
    const vertexShader = this.createShader(gl.VERTEX_SHADER, material.vertexShader);
    const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, material.fragmentShader);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
      console.error(gl.getProgramInfoLog(program));
      return null;
    }

    const shaderObj = { program, vertexShader, fragmentShader };
    this.programCache.set(material, shaderObj);
    return shaderObj;
  }

  createShader(type, source){
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }
}
