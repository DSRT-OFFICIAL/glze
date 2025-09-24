import { Matrix3 } from '../math/Matrix3.js';

export class WebGLRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!this.gl) throw new Error('WebGL not supported');

    this.clearColor = [0, 0, 0, 1];
    this.autoClear = true;

    this.meshes = new Set(); // semua mesh untuk draw
    this.defaultShader = this.createDefaultShader();
  }

  setClearColor(r, g, b, a = 1) {
    this.clearColor = [r, g, b, a];
  }

  clear() {
    const gl = this.gl;
    gl.clearColor(...this.clearColor);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  setSize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.gl.viewport(0, 0, width, height);
  }

  /** Register mesh supaya bisa dirender */
  registerMesh(mesh) {
    this.meshes.add(mesh);
    mesh.initBuffers(this.gl);
  }

  /** Render scene dengan camera */
  render(scene, camera) {
    if (this.autoClear) this.clear();

    camera.updateWorldMatrix();
    camera.updateViewMatrix();

    scene.updateMatrixWorld();

    // traverse mesh
    this.meshes.forEach(mesh => {
      if (!mesh.visible) return;

      const gl = this.gl;
      const shader = mesh.material?.shader || this.defaultShader;
      gl.useProgram(shader.program);

      // set uniforms
      gl.uniformMatrix4fv(shader.uProjection, false, camera.projectionMatrix.elements);
      gl.uniformMatrix4fv(shader.uView, false, camera.viewMatrix.elements);
      gl.uniformMatrix4fv(shader.uModel, false, mesh.worldMatrix.elements);

      // normal matrix
      const normalMatrix = new Matrix3().getNormalMatrix(mesh.worldMatrix);
      gl.uniformMatrix3fv(shader.uNormalMatrix, false, normalMatrix.elements);

      mesh.draw(gl, shader);
    });
  }

  /** Simple default shader */
  createDefaultShader() {
    const gl = this.gl;
    const vs = `
      attribute vec3 position;
      uniform mat4 uModel;
      uniform mat4 uView;
      uniform mat4 uProjection;
      void main() {
        gl_Position = uProjection * uView * uModel * vec4(position,1.0);
      }
    `;
    const fs = `
      precision mediump float;
      uniform vec4 uColor;
      void main() {
        gl_FragColor = uColor;
      }
    `;
    const vert = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vert, vs);
    gl.compileShader(vert);

    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(frag, fs);
    gl.compileShader(frag);

    const program = gl.createProgram();
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    return {
      program,
      uProjection: gl.getUniformLocation(program, 'uProjection'),
      uView: gl.getUniformLocation(program, 'uView'),
      uModel: gl.getUniformLocation(program, 'uModel'),
      uNormalMatrix: gl.getUniformLocation(program, 'uNormalMatrix'),
      uColor: gl.getUniformLocation(program, 'uColor')
    };
  }
}
